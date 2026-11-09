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

import { memo, useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/frontend/components/ui/Button'
import { LanguageSwitcher } from '@/frontend/components/ui/LanguageSwitcher'
import { useI18n } from '@/frontend/lib/i18n/I18nProvider'
import {
  trackWhatsAppClick,
  trackBookAppointmentClick,
} from '@/frontend/lib/analytics'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '910000000000'

// `navLinks` is built lazily inside the component so labels follow the
// active locale; the structure (paths) never changes.
// Know Your Illness carries sitemap priority 0.9 (same as Services) and is
// the site's main medical-education hub, but was previously reachable only
// via Footer/homepage — never the primary nav. Added it here (now 7 items,
// same count as Footer Quick Links) rather than adding separate Symptoms/
// Tests nav items, which would clutter the top nav for topics that should
// live as subsections of this hub instead (see KnowYourIllnessClient.tsx).
const NAV_PATHS = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.services', href: '/services' },
  { key: 'nav.knowYourIllness', href: '/know-your-illness' },
  { key: 'nav.blog', href: '/blog' },
  { key: 'nav.gallery', href: '/gallery' },
  { key: 'nav.contact', href: '/contact' },
] as const

function NavbarComponent() {
  const { t, locale } = useI18n()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Scroll listener — rAF-coalesced so it never fires more than once per
  // frame, even on aggressive scroll wheels / touch flings.
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 16)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Auto-close mobile menu on resize to large breakpoint.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close on route change so the drawer never sticks open after navigation.
  // This synchronises a piece of internal UI state with the external
  // route, which is exactly what the new react-hooks/set-state-in-effect
  // rule allows — but the rule still flags it because it can't see the
  // pattern. Suppress with intent.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false)
  }, [pathname])

  // Lock body scroll while the mobile drawer is open. Without this the
  // backdrop scrolls under the menu and content shifts when it closes.
  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  // ESC closes the drawer; click outside collapses it too.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [isOpen])

  const handleBookViaWhatsApp = useCallback(
    (location: string) => {
      const message = encodeURIComponent(
        locale === 'hi'
          ? 'नमस्ते डॉ. विजय, मैं अपॉइंटमेंट बुक करना चाहता/चाहती हूँ।'
          : 'Hello Dr. Vijay, I would like to book an appointment.'
      )
      trackBookAppointmentClick(location)
      trackWhatsAppClick(location)
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
        '_blank',
        'noopener,noreferrer'
      )
    },
    [locale]
  )

  return (
    <header
      // The floating pill uses tighter horizontal insets on small screens
      // (8px each side instead of 16px) so the long Hindi brand name and
      // the "Open menu" button never collide on a 360px-wide phone.
      // `safe-top` keeps it clear of iOS notches.
      className="fixed left-2 right-2 sm:left-4 sm:right-4 z-50 safe-top"
      role="banner"
      ref={navRef}
    >
      <nav
        className={[
          'rounded-2xl px-3 sm:px-4 md:px-6 py-2.5 md:py-3 transition-[background,box-shadow] duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(3,105,161,0.12)] border border-[#E0F2FE]'
            : 'bg-white/80 backdrop-blur-md border border-[#E0F2FE]',
        ].join(' ')}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between gap-2 md:gap-3">
          {/* Logo — uses `min-w-0` to allow the brand text to truncate
              gracefully on narrow phones. The image stays a fixed size. */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] rounded-lg shrink min-w-0"
            aria-label={t('brand.name')}
          >
            <Image
              src="/images/dr-vijay-kumar-binwal-nephrologist-jaipur-logo.webp"
              alt={t('brand.name')}
              width={44}
              height={44}
              className="rounded-full w-9 h-9 md:w-11 md:h-11 object-cover shrink-0"
              priority
              fetchPriority="high"
            />
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-heading font-700 text-[#0369A1] text-[13px] sm:text-sm md:text-base leading-tight truncate">
                {t('brand.name')}
              </span>
              <span className="font-heading font-500 text-[#0C4A6E] text-[10px] md:text-xs leading-tight truncate">
                {t('brand.tagline')}
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1 shrink-0" role="list">
            {NAV_PATHS.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={[
                      'whitespace-nowrap px-3 py-2 rounded-lg text-sm font-heading font-600 transition-colors duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]',
                      active
                        ? 'text-[#0369A1] bg-[#F0F9FF]'
                        : 'text-[#0C4A6E] hover:text-[#0369A1] hover:bg-[#F0F9FF]',
                    ].join(' ')}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop right cluster */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <Button
              variant="cta"
              size="sm"
              onClick={() => handleBookViaWhatsApp('navbar')}
              aria-label={t('common.bookAppointment')}
            >
              {t('common.bookAppointment')}
            </Button>
          </div>

          {/* Mobile right cluster */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
            <LanguageSwitcher variant="compact" />
            <button
              type="button"
              className="p-2 rounded-xl text-[#0369A1] hover:bg-[#F0F9FF] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? t('common.closeMenu') : t('common.openMenu')}
            >
              {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile menu — capped at viewport height with internal scrolling
            so even a long nav list never pushes the WhatsApp / Call buttons
            below the fold on small phones. */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden mt-3 pt-3 border-t border-[#E0F2FE] max-h-[calc(100vh-7rem)] overflow-y-auto overscroll-contain"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1" role="list">
              {NAV_PATHS.map((link) => {
                const active = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      className={[
                        'block px-3 py-3 rounded-xl text-base font-heading font-600 transition-colors duration-200 min-h-[44px]',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]',
                        active
                          ? 'text-[#0369A1] bg-[#F0F9FF]'
                          : 'text-[#0C4A6E] hover:text-[#0369A1] hover:bg-[#F0F9FF]',
                      ].join(' ')}
                      onClick={() => setIsOpen(false)}
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="mt-3 pt-3 border-t border-[#E0F2FE] flex flex-col gap-2">
              <Button
                variant="cta"
                size="md"
                fullWidth
                onClick={() => {
                  setIsOpen(false)
                  handleBookViaWhatsApp('navbar_mobile')
                }}
              >
                {t('common.bookAppointment')}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export const Navbar = memo(NavbarComponent)
