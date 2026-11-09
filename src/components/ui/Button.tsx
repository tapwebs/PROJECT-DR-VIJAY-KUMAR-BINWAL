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

import { forwardRef, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'cta' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[#0369A1] text-white hover:bg-[#0284C7] focus-visible:ring-[#0369A1]',
  cta:
    'bg-[#22C55E] text-white hover:bg-[#16A34A] focus-visible:ring-[#22C55E]',
  outline:
    'border-2 border-[#0369A1] text-[#0369A1] bg-transparent hover:bg-[#F0F9FF] focus-visible:ring-[#0369A1]',
  ghost:
    'text-[#0369A1] bg-transparent hover:bg-[#F0F9FF] focus-visible:ring-[#0369A1]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm min-h-[44px]',
  md: 'px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base min-h-[44px]',
  lg: 'px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg min-h-[48px] sm:min-h-[52px]',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={[
          'inline-flex items-center justify-center gap-2',
          'font-heading font-600 rounded-xl',
          'cursor-pointer transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantClasses[variant],
          sizeClasses[size],
          fullWidth ? 'w-full' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
