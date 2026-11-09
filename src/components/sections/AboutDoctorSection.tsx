'use client'

import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Award, BookOpen, GraduationCap, ChevronRight } from 'lucide-react'
import { useT } from '@/frontend/lib/i18n/I18nProvider'

const CREDENTIALS = [
  { icon: GraduationCap, key: 'about.cred1' },
  { icon: GraduationCap, key: 'about.cred2' },
  { icon: BookOpen, key: 'about.cred3' },
  { icon: Award, key: 'about.cred4' },
] as const

function AboutDoctorSectionComponent() {
  const t = useT()

  return (
    <section className="py-14 sm:py-16 md:py-24 bg-white" aria-labelledby="about-doctor-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Inner wrapper allows the floating credential cards to use
                negative offsets without bleeding off the viewport — the
                `lg:` prefix means they only appear from the lg breakpoint
                where there's room. On mobile we collapse them inline below
                the photo for a cleaner, less-cluttered layout. */}
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(3,105,161,0.15)]">
              <Image
                src="/images/profile-about.webp"
                alt={`${t('brand.name')} — ${t('about.credentials')}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 288px, 320px"
                quality={70}
                loading="lazy"
              />
            </div>

            {/* Decorative credential cards — desktop only, where the
                negative-offset positioning has room to breathe. */}
            <div className="hidden lg:block absolute -right-4 top-8 bg-white rounded-2xl p-3 shadow-card border border-[#E0F2FE]">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-[#0369A1]" aria-hidden="true" />
                <div>
                  <p className="font-heading font-700 text-[#0C4A6E] text-xs leading-tight">
                    {t('about.badge.dm.title')}
                  </p>
                  <p className="text-[#475569] text-xs">{t('about.badge.dm.sub')}</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute -left-4 bottom-8 bg-white rounded-2xl p-3 shadow-card border border-[#E0F2FE]">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-[#F59E0B]" aria-hidden="true" />
                <div>
                  <p className="font-heading font-700 text-[#0C4A6E] text-xs leading-tight">
                    {t('about.badge.exp.title')}
                  </p>
                  <p className="text-[#475569] text-xs">{t('about.badge.exp.sub')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs sm:text-sm font-heading font-600 text-[#0369A1] uppercase tracking-widest mb-3">
              {t('about.eyebrow')}
            </p>
            <h2
              id="about-doctor-heading"
              className="font-heading font-700 text-2xl sm:text-3xl md:text-4xl text-[#0C4A6E] mb-2 text-balance"
            >
              {t('about.title')}
            </h2>
            <p className="text-[#0369A1] font-heading font-500 text-base sm:text-lg mb-4 sm:mb-5">
              {t('about.credentials')}
            </p>
            <p className="text-[#475569] leading-relaxed mb-4 sm:mb-5">{t('about.intro1')}</p>
            <p className="text-[#475569] leading-relaxed mb-6">{t('about.intro2')}</p>

            <div className="flex flex-col gap-2 mb-6 sm:mb-8">
              {CREDENTIALS.map(({ icon: Icon, key }) => (
                <div key={key} className="flex items-start gap-2.5 text-sm text-[#475569]">
                  <Icon size={16} className="text-[#0369A1] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-snug">{t(key)}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#0369A1] font-heading font-600 hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] rounded-lg min-h-[44px]"
            >
              {t('about.readFull')} <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export const AboutDoctorSection = memo(AboutDoctorSectionComponent)
