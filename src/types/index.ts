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

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export interface FAQ {
  _id: string
  questionEn: string
  answerEn: string
  questionHi: string
  answerHi: string
  category: string
  relatedService?: string
}

// ─── Stat ─────────────────────────────────────────────────────────────────────
export interface Stat {
  value: number
  suffix: string
  label: string
}
