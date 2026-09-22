// FILE: src/components/ui/Button.jsx
import { forwardRef } from 'react'

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    type = 'button',
    ...props
  },
  ref
) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'

  const variants = {
    primary:
      'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 active:scale-[0.98]',
    secondary:
      'bg-card-subtle hover:bg-slate-800 text-main border border-subtle hover:border-hover active:scale-[0.98]',
    outline:
      'border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 active:scale-[0.98]',
    ghost:
      'text-muted hover:text-main hover:bg-slate-800/40 active:scale-[0.98]',
    danger:
      'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/20 active:scale-[0.98]',
  }

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-5 py-2.5 gap-2.5',
  }

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button