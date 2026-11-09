'use client'

/**
 * =====================================================================
 * MADE BY TAPWEBS (https://tapwebs.in | https://tapwebs.space)
 * ALL RIGHTS ARE OF TAPWEBS
 * 
 * Co-Owners: TAPWEBS & Dr. Vijay Kumar Binwal
 * Client Website: https://drvijaykumarbinwal.com (also https://drvijaybinwal.com)
 * Agency Website: https://tapwebs.in
 * Portfolio Showcase: https://tapwebs.space
 * =====================================================================
 */

import { memo, useEffect, useRef, useState } from 'react'
import { Users, Calendar, Stethoscope, TrendingUp } from 'lucide-react'
import { useT } from '@/frontend/lib/i18n/I18nProvider'

interface StatDef {
  value: number
  suffix: string
  labelKey: 'trust.label.patients' | 'trust.label.dialysis' | 'trust.label.years' | 'trust.label.satisfaction'
  icon: React.ElementType
  color: string
}

const STATS: StatDef[] = [
  { value: 12000, suffix: '+', labelKey: 'trust.label.patients', icon: Users, color: '#0369A1' },
  { value: 15, suffix: 'K+/yr', labelKey: 'trust.label.dialysis', icon: Stethoscope, color: '#1E40AF' },
  { value: 25, suffix: '+', labelKey: 'trust.label.years', icon: Calendar, color: '#0EA5E9' },
  { value: 98, suffix: '%', labelKey: 'trust.label.satisfaction', icon: TrendingUp, color: '#22C55E' },
]

/** Animate a counter from 0 → target. Respects prefers-reduced-motion. */
function useCountUp(target: number, duration: number, start: boolean): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    // SSR-safe access; window is guaranteed inside an effect.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      // Snap to final value without animating — synchronising React
      // state with an external `prefers-reduced-motion` media query.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount(target)
      return
    }

    let raf = 0
    const startTime = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])

  return count
}

interface StatCardProps {
  stat: StatDef
  inView: boolean
}

function StatCard({ stat, inView }: StatCardProps) {
  const t = useT()
  const count = useCountUp(stat.value, 1800, inView)
  const Icon = stat.icon
  const label = t(stat.labelKey)

  return (
    <div className="flex flex-col items-center text-center gap-2 sm:gap-3 p-4 sm:p-6">
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${stat.color}15` }}
        aria-hidden="true"
      >
        <Icon size={22} style={{ color: stat.color }} />
      </div>
      <div className="min-w-0 w-full">
        <p
          className="font-heading font-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0C4A6E] tabular-nums leading-none"
          aria-label={`${stat.value}${stat.suffix} ${label}`}
        >
          <span aria-hidden="true">
            {count.toLocaleString()}
            {stat.suffix}
          </span>
        </p>
        <p className="text-[#475569] text-xs sm:text-sm md:text-base mt-1.5 sm:mt-2 font-body leading-snug">
          {label}
        </p>
      </div>
    </div>
  )
}

function TrustBarComponent() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -10% 0px' }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-10 sm:py-12 md:py-16 bg-white border-y border-[#E0F2FE]"
      aria-label="Practice statistics"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* `divide-*` was producing inconsistent rules between row and
            column boundaries on mobile (2-col grid). We now draw the
            dividers ourselves with `[&>*]:border-*` so the rule between
            row 1 and row 2 is even, and the inner column rule disappears
            on mobile when each cell is full-width. */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.labelKey}
              className={[
                // Column rule — every odd index sits on the right boundary.
                i % 2 === 1 ? '' : 'border-r border-[#E0F2FE]',
                // Row rule on mobile — first row gets a bottom border.
                i < 2 ? 'border-b lg:border-b-0 border-[#E0F2FE]' : '',
                // Reset the column rule on the last lg-grid cell so the
                // 4-column row doesn't show a trailing rule.
                'lg:border-r lg:last:border-r-0',
              ].join(' ')}
            >
              <StatCard stat={stat} inView={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const TrustBar = memo(TrustBarComponent)
