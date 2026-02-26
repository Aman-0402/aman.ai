// ─── Badge ────────────────────────────────────────────────────────────────────
// Small pill for tech stack tags, categories, status labels, etc.

const VARIANTS = {
  default:  'bg-bg-elevated text-text-secondary border-bg-border',
  primary:  'bg-brand-primary/10 text-brand-primary border-brand-primary/30',
  cyan:     'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/30',
  green:    'bg-green-500/10 text-green-400 border-green-500/20',
  yellow:   'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  red:      'bg-red-500/10 text-red-400 border-red-500/20',
}

export default function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium',
        VARIANTS[variant],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
