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
import { MapPin, ArrowRight } from 'lucide-react'
import { useI18n } from '@/frontend/lib/i18n/I18nProvider'

const SERVICE_AREAS = [
  { hi: 'जयपुर में किडनी विशेषज्ञ', en: 'Kidney Specialist in Jaipur', slug: 'jaipur' },
  { hi: 'राजस्थान में किडनी विशेषज्ञ', en: 'Kidney Specialist in Rajasthan', slug: 'jaipur' },
  { hi: 'राजस्थान में नेफ्रोलॉजिस्ट', en: 'Nephrologist in Rajasthan', slug: 'mansarovar' },
  { hi: 'मानसरोवर में नेफ्रोलॉजिस्ट', en: 'Nephrologist in Mansarovar', slug: 'mansarovar' },
  { hi: 'जयपुर में किडनी डॉक्टर', en: 'Kidney Doctor in Jaipur', slug: 'malviya-nagar' },
  {
    hi: 'जयपुर में CKD विशेषज्ञ',
    en: 'Chronic Kidney Disease Specialist in Jaipur',
    slug: 'vaishali-nagar',
  },
  { hi: 'टोंक रोड के पास किडनी विशेषज्ञ', en: 'Kidney Specialist near Tonk Road', slug: 'tonk-road' },
  { hi: 'अजमेर के मरीजों के लिए किडनी विशेषज्ञ', en: 'Kidney Specialist for Ajmer Patients', slug: 'ajmer' },
] as const

function SEOContentBlockComponent() {
  const { t, locale } = useI18n()

  return (
    <section className="py-20 md:py-28 bg-[#F0F9FF]" aria-labelledby="seo-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-heading font-600 text-[#0369A1] uppercase tracking-[0.2em] mb-4">
              {t('seo.eyebrow')}
            </p>
            <h2
              id="seo-heading"
              className="font-heading font-700 text-3xl md:text-[2.5rem] md:leading-tight text-[#0C4A6E] mb-6"
            >
              {t('seo.title.l1')}
              <br className="hidden md:block" /> {t('seo.title.l2')}
            </h2>
            <div className="flex flex-col gap-5 text-[#334155] text-base leading-[1.8]">
              <p>{t('about.intro1')}</p>
              <p>{t('about.intro2')}</p>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-600 text-[#0C4A6E] text-lg mb-2">
              {t('seo.areas.title')}
            </h3>
            <p className="text-[#475569] text-sm mb-6">{t('seo.areas.sub')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICE_AREAS.map((area) => (
                <Link
                  key={`${area.slug}-${area.en}`}
                  href={`/${area.slug}`}
                  className="group flex items-center gap-3 bg-white border border-[#E0F2FE] rounded-xl px-4 py-3.5 hover:border-[#0369A1] hover:shadow-[0_4px_16px_rgba(3,105,161,0.08)] transition-[border,box-shadow] duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F0F9FF] group-hover:bg-[#0369A1]/10 flex items-center justify-center shrink-0 transition-colors duration-200">
                    <MapPin size={14} className="text-[#0369A1]" aria-hidden="true" />
                  </div>
                  <span className="text-[#0C4A6E] text-sm font-heading font-500 group-hover:text-[#0369A1] transition-colors duration-200 flex-1">
                    {locale === 'hi' ? area.hi : area.en}
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-[#BAE6FD] group-hover:text-[#0369A1] group-hover:translate-x-0.5 transition-all duration-200"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E0F2FE]">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-heading font-700 text-2xl text-[#0369A1]">25+</p>
                  <p className="text-[#475569] text-xs mt-1">{t('trust.label.years')}</p>
                </div>
                <div>
                  <p className="font-heading font-700 text-2xl text-[#0369A1]">12000+</p>
                  <p className="text-[#475569] text-xs mt-1">{t('trust.label.patients')}</p>
                </div>
                <div>
                  <p className="font-heading font-700 text-2xl text-[#0369A1]">4.8★</p>
                  <p className="text-[#475569] text-xs mt-1">Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const SEOContentBlock = memo(SEOContentBlockComponent)
