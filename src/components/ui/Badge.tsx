import { HTMLAttributes } from 'react'

type BadgeVariant = 'primary' | 'trust' | 'success' | 'gold' | 'muted'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-[#EFF6FF] text-[#0369A1] border border-[#BFDBFE]',
  trust: 'bg-[#EEF2FF] text-[#1E40AF] border border-[#C7D2FE]',
  success: 'bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]',
  gold: 'bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A]',
  muted: 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]',
}

/**
 * Inline status pill. Sized to its content with comfortable, predictable
 * padding — a previous version forced a 48px min-height (the touch-target
 * size), which is correct for buttons but produced oversized, misaligned
 * pills next to flowing text.
 */
export function Badge({
  variant = 'primary',
  className = '',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 px-3 py-1.5',
        'text-xs sm:text-sm font-heading font-500 rounded-full',
        'leading-tight',
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </span>
  )
}
