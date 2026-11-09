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

import { memo } from 'react'
import Link from 'next/link'
import {
  Activity,
  Droplets,
  Heart,
  Stethoscope,
  FlaskConical,
  Droplet,
  ArrowRight,
} from 'lucide-react'
import { useT } from '@/frontend/lib/i18n/I18nProvider'

interface ServiceDef {
  icon: React.ElementType
  titleKey: string
  descKey: string
  statKey: string
  href: string
  gradient: string
  bgLight: string
}

const SERVICES: ServiceDef[] = [
  {
    icon: Activity,
    titleKey: 'services.kidneyFailure.title',
    descKey: 'services.kidneyFailure.desc',
    statKey: 'services.stat.expertise',
    href: '/services/kidney-disease-treatment',
    gradient: 'from-[#0369A1] to-[#0EA5E9]',
    bgLight: 'bg-[#0369A1]/5',
  },
  {
    icon: Droplets,
    titleKey: 'services.dialysis.title',
    descKey: 'services.dialysis.desc',
    statKey: 'services.stat.advanced',
    href: '/services/dialysis-hemodialysis',
    gradient: 'from-[#0EA5E9] to-[#38BDF8]',
    bgLight: 'bg-[#0EA5E9]/5',
  },
  {
    icon: Heart,
    titleKey: 'services.transplant.title',
    descKey: 'services.transplant.desc',
    statKey: 'services.stat.transplant',
    href: '/services/kidney-transplant',
    gradient: 'from-[#1E40AF] to-[#3B82F6]',
    bgLight: 'bg-[#1E40AF]/5',
  },
  {
    icon: Stethoscope,
    titleKey: 'services.interventional.title',
    descKey: 'services.interventional.desc',
    statKey: 'services.stat.minimal',
    href: '/services/interventional-nephrology',
    gradient: 'from-[#0369A1] to-[#0284C7]',
    bgLight: 'bg-[#0369A1]/5',
  },
  {
    icon: FlaskConical,
    titleKey: 'services.stoneHtn.title',
    descKey: 'services.stoneHtn.desc',
    statKey: 'services.stat.preventive',
    href: '/services/kidney-stone-hypertension',
    gradient: 'from-[#0EA5E9] to-[#06B6D4]',
    bgLight: 'bg-[#0EA5E9]/5',
  },
  {
    icon: Droplet,
    titleKey: 'services.urination.title',
    descKey: 'services.urination.desc',
    statKey: 'services.stat.urinary',
    href: '/services/urination-problems',
    gradient: 'from-[#1E40AF] to-[#6366F1]',
    bgLight: 'bg-[#1E40AF]/5',
  },
]

function ServicesGridComponent() {
  const t = useT()

  return (
    <section
      id="services"
      className="py-14 sm:py-20 md:py-28 bg-white scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <p className="text-xs font-heading font-600 text-[#0369A1] uppercase tracking-[0.2em] mb-3 sm:mb-4">
            {t('services.eyebrow')}
          </p>
          <h2
            id="services-heading"
            className="font-heading font-700 text-2xl sm:text-3xl md:text-[2.75rem] md:leading-tight text-[#0C4A6E] mb-4 sm:mb-5 text-balance"
          >
            {t('services.title')}
          </h2>
          <p className="text-[#475569] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
          role="list"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.href} role="listitem">
                <Link
                  href={service.href}
                  className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] rounded-2xl"
                  aria-label={t(service.titleKey)}
                >
                  <div className="relative h-full bg-[#F8FBFF] border border-[#E0F2FE] rounded-2xl p-6 md:p-7 flex flex-col gap-5 overflow-hidden hover:border-[#0369A1]/30 hover:shadow-[0_8px_32px_rgba(3,105,161,0.1)] transition-[border,box-shadow] duration-300 cursor-pointer">
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <div
                      className={`w-14 h-14 rounded-2xl ${service.bgLight} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={26} className="text-[#0369A1]" aria-hidden="true" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-heading font-700 text-[#0C4A6E] text-lg mb-2.5 group-hover:text-[#0369A1] transition-colors duration-200">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-[#475569] text-sm leading-relaxed mb-3">
                        {t(service.descKey)}
                      </p>
                      <span className="inline-flex items-center text-xs font-heading font-600 text-[#0369A1] bg-[#0369A1]/8 px-2.5 py-1 rounded-lg">
                        {t(service.statKey)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-heading font-600 text-[#0369A1] group-hover:gap-3 transition-all duration-200 pt-2 border-t border-[#E0F2FE]">
                      {t('services.cta.learnMore')}
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0369A1] hover:bg-[#0284C7] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-heading font-600 text-base transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] focus-visible:ring-offset-2 min-h-[48px]"
          >
            {t('services.viewAll')}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export const ServicesGrid = memo(ServicesGridComponent)
