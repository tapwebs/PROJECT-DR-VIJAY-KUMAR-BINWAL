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

'use client'

import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { useT } from '@/frontend/lib/i18n/I18nProvider'

const services = [
  { key: 'services.kidneyFailure.title', href: '/services/kidney-disease-treatment' },
  { key: 'services.dialysis.title', href: '/services/dialysis-hemodialysis' },
  { key: 'services.transplant.title', href: '/services/kidney-transplant' },
  { key: 'services.interventional.title', href: '/services/interventional-nephrology' },
  { key: 'services.stoneHtn.title', href: '/services/kidney-stone-hypertension' },
  { key: 'services.urination.title', href: '/services/urination-problems' },
] as const

const quickLinks = [
  { key: 'nav.about', href: '/about' },
  { key: 'nav.services', href: '/services' },
  { key: 'nav.knowYourIllness', href: '/know-your-illness' },
  { key: 'nav.diet', href: '/diet-plan' },
  { key: 'nav.blog', href: '/blog' },
  { key: 'nav.gallery', href: '/gallery' },
  { key: 'nav.contact', href: '/contact' },
] as const

// Every city page must be reachable from the footer — previously only
// SEOContentBlock linked 4 of the 6, leaving /tonk-road and /ajmer with no
// internal links pointing to them anywhere on the site.
const locations = [
  { key: 'footer.location.jaipur', href: '/jaipur' },
  { key: 'footer.location.mansarovar', href: '/mansarovar' },
  { key: 'footer.location.malviyaNagar', href: '/malviya-nagar' },
  { key: 'footer.location.vaishaliNagar', href: '/vaishali-nagar' },
  { key: 'footer.location.tonkRoad', href: '/tonk-road' },
  { key: 'footer.location.ajmer', href: '/ajmer' },
] as const

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '910000000000'

function FooterComponent() {
  const t = useT()

  return (
    <footer className="bg-[#0C4A6E] text-white" role="contentinfo" aria-label="Site footer">
      {/* Schema-ready contact markup (visually hidden) */}
      <div itemScope itemType="https://schema.org/MedicalOrganization" className="hidden">
        <span itemProp="name">Dr. Vijay Kumar Binwal</span>
        <span itemProp="telephone">{`+${WHATSAPP_NUMBER}`}</span>
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">
            S36, New Sanganer Road, Near Indian Oil Petrol Pump, Mansarovar Sector 6, Mansarovar
          </span>
          <span itemProp="addressLocality">Jaipur</span>
          <span itemProp="addressRegion">Rajasthan</span>
          <span itemProp="postalCode">302020</span>
          <span itemProp="addressCountry">IN</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg"
              aria-label={t('brand.name')}
            >
              <Image
                src="/images/dr-vijay-kumar-binwal-nephrologist-jaipur-logo.webp"
                alt={t('brand.name')}
                width={48}
                height={48}
                className="rounded-full w-12 h-12 object-cover border-2 border-[#7DD3FC]"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="font-heading font-700 text-white text-lg leading-tight">
                  {t('brand.name')}
                </span>
                <span className="font-heading font-400 text-[#7DD3FC] text-sm leading-tight">
                  {t('brand.tagline')}
                </span>
              </div>
            </Link>
            <p className="text-[#BAE6FD] text-sm leading-relaxed mb-4">{t('footer.aboutDesc')}</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white px-4 py-2.5 rounded-xl text-sm font-heading font-600 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C4A6E]"
              aria-label={t('common.bookAppointment')}
            >
              <MessageCircle size={16} aria-hidden="true" />
              {t('common.whatsapp')}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-600 text-white text-base mb-4">
              {t('footer.ourServices')}
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[#BAE6FD] hover:text-white text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                  >
                    {t(s.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-600 text-white text-base mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#BAE6FD] hover:text-white text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                  >
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-heading font-600 text-white text-base mb-4">
              {t('footer.locations')}
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {locations.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#BAE6FD] hover:text-white text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                  >
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-heading font-600 text-white text-base mb-4">
              {t('footer.contact')}
            </h3>
            <address className="not-italic flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#0EA5E9] mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-[#BAE6FD] text-sm leading-relaxed">
                  Mansarovar, Jaipur, Rajasthan 302020
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#0EA5E9] shrink-0" aria-hidden="true" />
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="text-[#BAE6FD] hover:text-white text-sm transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  {`+${WHATSAPP_NUMBER}`}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={16} className="text-[#0EA5E9] mt-0.5 shrink-0" aria-hidden="true" />
                <div className="text-[#BAE6FD] text-sm leading-relaxed">
                  <p>{t('cta.monSat')}: 8:00 AM – 8:00 PM</p>
                  <p>
                    {t('cta.sunday')}: {t('cta.sundayClosed')}
                  </p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#1E6A9A] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7DD3FC]">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>
              &copy; {new Date().getFullYear()} <strong className="text-white">Dr. Vijay Kumar Binwal</strong> &amp; <a href="https://tapwebs.in" target="_blank" rel="noopener noreferrer" className="text-white underline font-semibold hover:text-[#BAE6FD]">TAPWEBS</a>.
            </p>
            <p className="text-[11px] text-[#38BDF8]">
              Co-Owners: <a href="https://drvijaykumarbinwal.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Dr. Vijay Kumar Binwal</a> &bull; <a href="https://tapwebs.in" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">TAPWEBS</a>
            </p>
          </div>

          <div className="text-center bg-[#075985]/60 px-4 py-2 rounded-lg border border-[#0284C7]/40 shadow-sm">
            <p className="font-semibold text-white">
              MADE BY <a href="https://tapwebs.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#BAE6FD]">TAPWEBS</a> &bull; ALL RIGHTS ARE OF TAPWEBS
            </p>
            <p className="text-[11px] text-[#BAE6FD] mt-0.5">
              Explore Portfolio: <a href="https://tapwebs.space" target="_blank" rel="noopener noreferrer" className="underline hover:text-white font-medium">tapwebs.space</a> &bull; Agency: <a href="https://tapwebs.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-white font-medium">tapwebs.in</a>
            </p>
          </div>

          <p className="text-right">{t('footer.specialist')}</p>
        </div>
      </div>
    </footer>
  )
}

export const Footer = memo(FooterComponent)
