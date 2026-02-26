import { forwardRef } from 'react'
import { motion } from 'framer-motion'

// ─── Button ───────────────────────────────────────────────────────────────────
// Props:
//   variant: 'primary' | 'outline' | 'ghost' | 'danger'
//   size:    'sm' | 'md' | 'lg'
//   href:    renders as <a> tag
//   loading: shows spinner

const VARIANTS = {
  primary: 'bg-brand-primary text-white hover:bg-brand-dark shadow-glow-primary hover:shadow-glow-lg',
  outline: 'border border-bg-border text-text-secondary hover:text-text-primary hover:border-brand-primary/40 hover:bg-bg-elevated',
  ghost:   'text-text-secondary hover:text-text-primary hover:bg-bg-elevated',
  danger:  'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20',
}

const SIZES = {
  sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-7 py-3.5 text-base rounded-xl gap-2.5',
}

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    href,
    download,
    target,
    rel,
    className = '',
    loading = false,
    disabled,
    onClick,
    type = 'button',
    ...rest
  },
  ref
) {
  const base = [
    'inline-flex items-center justify-center font-medium transition-all duration-200',
    'focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base',
    'disabled:opacity-50 disabled:pointer-events-none',
    VARIANTS[variant],
    SIZES[size],
    className,
  ].join(' ')

  const motionProps = {
    whileHover: { y: -1 },
    whileTap:   { scale: 0.96 },
    transition: { duration: 0.15 },
  }

  const content = loading ? (
    <>
      <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      {children}
    </>
  ) : children

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={base}
        {...motionProps}
        {...rest}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={base}
      {...motionProps}
      {...rest}
    >
      {content}
    </motion.button>
  )
})

export default Button
