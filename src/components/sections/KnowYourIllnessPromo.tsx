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

import { memo } from 'react'
import Link from 'next/link'
import { Stethoscope, ArrowRight } from 'lucide-react'
import { useI18n } from '@/frontend/lib/i18n/I18nProvider'

function KnowYourIllnessPromoComponent() {
  const { locale } = useI18n()

  const title = locale === 'hi' ? 'अपनी बीमारी को जानें' : 'Know Your Illness'
  const subtitle = locale === 'hi'
    ? 'क्रोनिक किडनी रोग (CKD), डायलिसिस, किडनी प्रत्यारोपण, लक्षण, कारण, रोकथाम, उपचार के विकल्प, सामान्य प्रश्न और विशेषज्ञ मार्गदर्शन के बारे में जानें।'
    : 'Learn about Chronic Kidney Disease (CKD), Dialysis, Kidney Transplantation, symptoms, causes, prevention, treatment options, FAQs, and expert guidance.'
  const ctaText = locale === 'hi' ? 'अपनी बीमारी को जानें' : 'Know Your Illness'
  const eyebrow = locale === 'hi' ? 'रोगी शिक्षा' : 'PATIENT EDUCATION'

  return (
    <section
      className="py-16 md:py-24 bg-white"
      aria-labelledby="kyi-promo-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-br from-[#F0F9FF] to-white border border-[#E0F2FE] rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-5xl mx-auto shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#E0F2FE] rounded-full flex items-center justify-center">
              <Stethoscope size={32} className="text-[#0369A1]" aria-hidden="true" />
            </div>
          </div>
          
          <p className="text-sm font-heading font-600 text-[#0369A1] uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
          
          <h2
            id="kyi-promo-heading"
            className="font-heading font-700 text-3xl md:text-4xl text-[#0C4A6E] mb-6"
          >
            {title}
          </h2>
          
          <p className="text-[#475569] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          <Link
            href="/know-your-illness"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#0369A1] bg-[#0369A1] text-white hover:bg-[#0C4A6E] hover:border-[#0C4A6E] hover:-translate-y-[2px] hover:shadow-lg hover:shadow-[#0369A1]/30 px-8 py-4 text-lg rounded-xl font-heading font-600 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] focus-visible:ring-offset-2 min-h-[48px]"
            aria-label={title}
          >
            {ctaText}
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export const KnowYourIllnessPromo = memo(KnowYourIllnessPromoComponent)
