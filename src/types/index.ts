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
