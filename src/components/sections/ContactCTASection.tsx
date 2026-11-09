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

import { memo, useCallback } from 'react'
import Link from 'next/link'
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react'
import { useI18n } from '@/frontend/lib/i18n/I18nProvider'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '910000000000'

function ContactCTASectionComponent() {
  const { t, locale } = useI18n()

  const handleWhatsApp = useCallback(() => {
    const msg = encodeURIComponent(
      locale === 'hi'
        ? 'नमस्ते डॉ. विजय, मैं अपॉइंटमेंट बुक करना चाहता/चाहती हूँ।'
        : 'Hello Dr. Vijay, I would like to book an appointment.'
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer')
  }, [locale])

  return (
    <section className="py-16 md:py-24 bg-[#F0F9FF]" aria-labelledby="contact-cta-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-heading font-600 text-[#0369A1] uppercase tracking-widest mb-3">
              {t('cta.eyebrow')}
            </p>
            <h2
              id="contact-cta-heading"
              className="font-heading font-700 text-3xl md:text-4xl text-[#0C4A6E] mb-4"
            >
              {t('cta.title')}
            </h2>
            <p className="text-[#475569] text-lg mb-8 leading-relaxed">{t('cta.desc')}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-4 rounded-xl font-heading font-600 text-lg transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
                aria-label={t('common.whatsappNow')}
              >
                <MessageCircle size={20} aria-hidden="true" />
                {t('common.whatsappNow')}
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#0369A1] text-[#0369A1] hover:bg-[#0369A1] hover:text-white px-8 py-4 rounded-xl font-heading font-600 text-lg transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]"
              >
                {t('common.contactForm')}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-5 flex items-start gap-4 border border-[#E0F2FE] shadow-card">
              <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[#0369A1]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[#475569] text-sm mb-1">{t('cta.phone')}</p>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="text-[#0C4A6E] font-heading font-600 text-lg hover:text-[#0369A1] transition-colors cursor-pointer"
                >
                  {`+${WHATSAPP_NUMBER}`}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 flex items-start gap-4 border border-[#E0F2FE] shadow-card">
              <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-[#0369A1]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[#475569] text-sm mb-1">{t('cta.address')}</p>
                <address className="not-italic text-[#0C4A6E] font-heading font-500 leading-relaxed">
                  {t('brand.name')}
                  <br />
                  Mansarovar, Jaipur, Rajasthan 302020
                </address>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 flex items-start gap-4 border border-[#E0F2FE] shadow-card">
              <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] flex items-center justify-center shrink-0">
                <Clock size={18} className="text-[#0369A1]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[#475569] text-sm mb-2">{t('cta.hours')}</p>
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex justify-between gap-8">
                    <span className="text-[#475569]">{t('cta.monSat')}</span>
                    <span className="text-[#0C4A6E] font-heading font-500">
                      8:00 AM – 8:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-[#475569]">{t('cta.sunday')}</span>
                    <span className="text-[#0C4A6E] font-heading font-500">
                      {t('cta.sundayClosed')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const ContactCTASection = memo(ContactCTASectionComponent)
