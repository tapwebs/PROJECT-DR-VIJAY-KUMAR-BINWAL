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

/**
 * getLocalized — single source of truth for bilingual field resolution.
 *
 * Usage:
 *   const title = getLocalized(service.title, service.titleHi, locale)
 *
 * Rules:
 *   • If locale === 'hi' AND valueHi is a non-empty string → return valueHi
 *   • Otherwise → return value (English fallback)
 *   • If both are empty/undefined → return '' (never crash)
 */
export function getLocalized(
  value: string | null | undefined,
  valueHi: string | null | undefined,
  locale: string
): string {
  if (locale === 'hi' && valueHi && valueHi.trim() !== '') {
    return valueHi
  }
  return value ?? ''
}

/**
 * getLocalizedArray — resolves a bilingual array (e.g., Portable Text blocks,
 * benefits lists, treatmentProcess arrays).
 *
 * Rules:
 *   • If locale === 'hi' AND arrayHi is non-empty → return arrayHi
 *   • Otherwise → return array (English fallback)
 *   • Always returns an array, never undefined/null
 */
export function getLocalizedArray<T>(
  array: T[] | null | undefined,
  arrayHi: T[] | null | undefined,
  locale: string
): T[] {
  if (locale === 'hi' && Array.isArray(arrayHi) && arrayHi.length > 0) {
    return arrayHi
  }
  return array ?? []
}

/**
 * getLocalizedSeo — resolves a bilingual SEO object.
 *
 * Returns the Hi SEO object when locale is Hindi and it has at least a
 * metaTitle; otherwise falls back to the English SEO object.
 */
export function getLocalizedSeo<T extends { metaTitle?: string | null }>(
  seo: T | null | undefined,
  seoHi: T | null | undefined,
  locale: string
): T | null | undefined {
  if (locale === 'hi' && seoHi && seoHi.metaTitle) {
    return seoHi
  }
  return seo
}
