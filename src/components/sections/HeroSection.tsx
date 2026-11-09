'use client'

/**
 * =====================================================================
 * MADE BY TAPWEBS (https://tapwebs.in | https://tapwebs.space)
 * ALL RIGHTS ARE OF TAPWEBS
 * 
 * Co-Owners: TAPWEBS & Dr. Vijay Kumar Binwal
 * Client Website: https://drvijaykumarbinwal.com
 * Agency Website: https://tapwebs.in
 * Portfolio Showcase: https://tapwebs.space
 * =====================================================================
 */

import { memo, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  MessageCircle,
  ShieldCheck,
  Award,
  Users,
  Salad,
} from 'lucide-react'
import { Badge } from '@/frontend/components/ui/Badge'
import { useI18n } from '@/frontend/lib/i18n/I18nProvider'
import { trackWhatsAppClick, trackDietChartClick, trackRealPatientJourneysClick } from '@/frontend/lib/analytics'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '910000000000'

const TRUST_BADGES = [
  { icon: ShieldCheck, key: 'hero.badgeDM' as const },
  { icon: Award, key: 'hero.badgeYears' as const },
  { icon: Users, key: 'hero.badgePatients' as const },
]



function HeroSectionComponent() {
  const { t, locale } = useI18n()

  const handleWhatsApp = useCallback(() => {
    const msg = encodeURIComponent(
      locale === 'hi'
        ? 'नमस्ते डॉ. विजय, मैं अपॉइंटमेंट बुक करना चाहता/चाहती हूँ।'
        : 'Hello Dr. Vijay, I would like to book an appointment.'
    )
    trackWhatsAppClick('hero_sticky_mobile')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer')
  }, [locale])



  return (
    <section
      // `min-h-screen-mobile` uses 100svh so the hero never jumps when the
      // mobile address bar collapses. `pt-32 sm:pt-28` gives extra clearance
      // for the floating navbar on small phones (where the navbar is taller
      // because of the safe-area inset).
      className="relative min-h-screen-mobile flex items-center pt-32 sm:pt-28 pb-16 overflow-hidden"
      aria-label={`${t('brand.name')} — ${t('hero.badge')}`}
    >
      {/* Background — pure CSS, GPU-friendly, no extra bytes. */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#F0F9FF] via-[#E0F2FE] to-white -z-10"
        aria-hidden="true"
      />
      {/* Decorative blob. The parent section already clips overflow, but on
          smaller phones the `translate-x-1/3` was still bleeding. We size it
          relative to the viewport via `clamp()` so it scales with the device
          and never produces a horizontal scrollbar. */}
      <div
        className="pointer-events-none absolute top-20 right-0 rounded-full bg-[#0369A1]/5 -z-10 translate-x-1/3"
        style={{
          width: 'clamp(280px, 50vw, 600px)',
          height: 'clamp(280px, 50vw, 600px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text — renders immediately so LCP candidate (h1) ships fast. */}
          <div className="flex flex-col gap-5 sm:gap-6 hero-fade-in">
            <Badge variant="trust" className="self-start mb-1 sm:mb-2">
              <ShieldCheck size={14} aria-hidden="true" />
              {t('hero.badge')}
            </Badge>

            <h1 className="font-heading font-700 text-[clamp(1.875rem,6vw,3.75rem)] text-[#0C4A6E] leading-[1.15] text-balance">
              {t('hero.titleLine1')}
              <br />
              <span className="text-[#0369A1]">{t('hero.titleLine2')}</span>
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-lg">
              {t('hero.subtitle')}
            </p>

            <div
              className="flex flex-wrap gap-2 sm:gap-3"
              role="list"
              aria-label={t('hero.badge')}
            >
              {TRUST_BADGES.map(({ icon: Icon, key }) => (
                <div
                  key={key}
                  role="listitem"
                  className="flex items-center gap-2 bg-white border border-[#BAE6FD] rounded-xl px-2.5 sm:px-3 py-2 text-xs sm:text-sm font-heading font-600 text-[#0369A1] shadow-sm"
                >
                  <Icon size={14} className="text-[#0369A1] shrink-0" aria-hidden="true" />
                  <span className="leading-tight">{t(key)}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/diet-plan"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#16A34A] bg-[#16A34A] text-white hover:bg-[#15803D] hover:border-[#15803D] hover:-translate-y-[2px] hover:shadow-lg hover:shadow-[#16A34A]/30 px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg rounded-xl font-heading font-600 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 min-h-[48px] shadow-md shadow-[#16A34A]/20"
                aria-label={t('common.dietChart')}
                onClick={() => trackDietChartClick('hero')}
              >
                <Salad size={20} className="text-white" aria-hidden="true" />
                {t('common.dietChart')}
              </Link>
              <a
                href="https://search.google.com/local/reviews?placeid=ChIJq55o9qK1bTkRuMHaCiWIMQ0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#E0F2FE] text-[#0C4A6E] hover:border-[#0369A1] px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg rounded-xl font-heading font-600 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] focus-visible:ring-offset-2 min-h-[48px]"
                aria-label="Read real patient journeys and Google reviews from kidney patients treated by Dr. Vijay Kumar Binwal"
                title="Learn through real patient experiences"
                onClick={() => trackRealPatientJourneysClick('google_reviews')}
              >
                <Users size={20} className="text-[#0369A1]" aria-hidden="true" />
                {locale === 'hi' ? 'मरीजों के इलाज का सफर' : 'Patients Treatment Journey'}
              </a>
            </div>
          </div>

          {/* Doctor image — LCP candidate. priority + fetchPriority + small quality. */}
          <div className="relative flex justify-center lg:justify-end hero-fade-in">
            <div className="relative w-full max-w-sm md:max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(3,105,161,0.2)]">
              <Image
                src="/images/doctor-profile.webp"
                alt={`${t('brand.name')} — ${t('about.credentials')}`}
                fill
                className="object-cover object-top"
                priority
                fetchPriority="high"
                quality={70}
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 420px"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-[#E0F2FE]">
                <p className="font-heading font-700 text-[#0C4A6E] text-sm sm:text-base leading-tight">
                  {t('brand.name')}
                </p>
                <p className="text-xs sm:text-sm text-[#0369A1] font-heading font-500 mt-0.5">
                  {t('hero.cardCredentials')}
                </p>
                <p className="text-[11px] sm:text-xs text-[#475569] mt-1">
                  {t('hero.cardHospital')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky WhatsApp — mobile only.
          Pinned to the bottom-LEFT corner so it never collides with the
          chatbot FAB on the bottom-RIGHT. `safe-bottom` keeps it clear of
          the iOS home-bar / Android nav pill. */}
      <button
        type="button"
        onClick={handleWhatsApp}
        className="fixed left-3 z-40 lg:hidden flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white px-4 py-3 rounded-2xl shadow-lg shadow-[#22C55E]/30 font-heading font-600 text-sm transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 safe-bottom min-h-[48px]"
        aria-label={t('common.whatsapp')}
      >
        <MessageCircle size={18} aria-hidden="true" />
        {t('common.whatsapp')}
      </button>
    </section>
  )
}

export const HeroSection = memo(HeroSectionComponent)
