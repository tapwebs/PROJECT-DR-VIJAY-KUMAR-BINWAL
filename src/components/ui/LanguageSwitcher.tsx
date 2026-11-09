'use client'

import { memo } from 'react'
import { Globe } from 'lucide-react'
import { useI18n } from '@/frontend/lib/i18n/I18nProvider'

interface LanguageSwitcherProps {
  variant?: 'default' | 'compact' | 'mobile'
  className?: string
}

/**
 * Premium language switcher.
 *
 * Two visual modes:
 * - "default" — pill toggle for desktop navbars.
 * - "compact" — single button (icon + active label) for tight headers.
 * - "mobile" — full-width pill for the mobile nav drawer.
 *
 * Switching is purely client-side (no route swap, no full reload), which
 * keeps the experience instant and prevents CLS.
 */
function LanguageSwitcherComponent({ variant = 'default', className = '' }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useI18n()

  if (variant === 'compact') {
    return (
      <button
        type="button"
        onClick={() => setLocale(locale === 'hi' ? 'en' : 'hi')}
        className={[
          'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg',
          'text-xs font-heading font-600',
          'bg-white border border-[#BAE6FD] text-[#0369A1]',
          'hover:bg-[#F0F9FF] transition-colors duration-200 cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]',
          className,
        ].join(' ')}
        aria-label={t('common.toggleLanguage')}
      >
        <Globe size={13} aria-hidden="true" />
        {locale === 'hi' ? 'EN' : 'हि'}
      </button>
    )
  }

  return (
    <div
      role="group"
      aria-label={t('common.toggleLanguage')}
      className={[
        'inline-flex items-center gap-0.5 p-0.5 rounded-xl',
        'bg-white border border-[#BAE6FD] shadow-sm',
        variant === 'mobile' ? 'w-full justify-center' : '',
        className,
      ].join(' ')}
    >
      {(['hi', 'en'] as const).map((l) => {
        const active = locale === l
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            aria-label={l === 'hi' ? 'हिन्दी' : 'English'}
            className={[
              'px-3 py-1.5 rounded-lg text-xs font-heading font-600',
              'transition-colors duration-200 cursor-pointer min-w-[44px]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1]',
              active
                ? 'bg-[#0369A1] text-white shadow-sm'
                : 'text-[#0369A1] hover:bg-[#F0F9FF]',
            ].join(' ')}
          >
            {l === 'hi' ? 'हिन्दी' : 'English'}
          </button>
        )
      })}
    </div>
  )
}

export const LanguageSwitcher = memo(LanguageSwitcherComponent)
