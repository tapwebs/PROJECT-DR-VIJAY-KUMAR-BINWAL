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

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { dictionaries, DEFAULT_LOCALE, LOCALES, type Locale } from './dictionaries'

// ─────────────────────────────────────────────────────────────
// Why a custom provider rather than `next-intl` / `i18next`?
// - Zero runtime dependency. Dictionaries are static JS modules
//   that tree-shake on production.
// - Locale is stored in `localStorage` + reflected on `<html lang>`
//   so search engines and assistive tech see the correct language
//   immediately after the first paint.
// - The provider intentionally avoids re-rendering the whole tree
//   when switching languages: we use a memoised translator and
//   stable callbacks.
// ─────────────────────────────────────────────────────────────

type Translator = (key: string, vars?: Record<string, string | number>) => string

interface I18nContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  toggleLocale: () => void
  t: Translator
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'pinkcity-locale'

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && (LOCALES as string[]).includes(stored)) return stored as Locale
  } catch {
    /* ignore quota / privacy errors */
  }
  return DEFAULT_LOCALE
}

function applyDocumentLocale(locale: Locale) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = locale
  document.documentElement.dir = 'ltr' // both hi and en are LTR
}

interface I18nProviderProps {
  initialLocale?: Locale
  children: ReactNode
}

export function I18nProvider({ initialLocale = DEFAULT_LOCALE, children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  // Hydrate from localStorage once on the client. We never block paint —
  // the SSR-rendered language (Hindi default) shows first, and we only
  // swap if the user previously chose something different. This is a
  // legitimate external→React sync; suppress the lint rule with intent.
  useEffect(() => {
    const stored = readStoredLocale()
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored !== locale) setLocaleState(stored)
    applyDocumentLocale(stored)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    applyDocumentLocale(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'hi' ? 'en' : 'hi')
  }, [locale, setLocale])

  // Memoise the translator so children using `useT()` don't re-render
  // unless the active dictionary actually changes.
  const t = useMemo<Translator>(() => {
    const dict = dictionaries[locale]
    const fallback = dictionaries[DEFAULT_LOCALE]
    return (key, vars) => {
      let str = dict[key] ?? fallback[key] ?? key
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          str = str.replace(`{${k}}`, String(v))
        }
      }
      return str
    }
  }, [locale])

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, toggleLocale, t }),
    [locale, setLocale, toggleLocale, t]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

/** Access the active locale, switcher, and translator. */
export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    // Never throw on the server — fall back to defaults so server-rendered
    // strings always have something usable.
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      toggleLocale: () => {},
      t: (key) => dictionaries[DEFAULT_LOCALE][key] ?? key,
    }
  }
  return ctx
}

/** Shortcut for components that only need the translator. */
export function useT(): Translator {
  return useI18n().t
}
