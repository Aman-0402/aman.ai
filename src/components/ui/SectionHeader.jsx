import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@animations/variants'
import { viewport } from '@animations/transitions'

// ─── SectionHeader ────────────────────────────────────────────────────────────
// Consistent section heading across all sections.
// Props:
//   eyebrow:   small label above the title (e.g. "What I do")
//   title:     main heading — supports gradient highlights via <span>
//   subtitle:  optional paragraph below the title
//   centered:  boolean (default false)
//   animate:   boolean — wrap in motion (default true)

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  animate = true,
  className = '',
}) {
  const content = (
    <div className={['space-y-3', centered ? 'text-center' : '', className].join(' ')}>
      {eyebrow && (
        <div
          className={[
            'inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-brand-primary',
            centered ? 'mx-auto' : '',
          ].join(' ')}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          {eyebrow}
        </div>
      )}

      <h2 className="font-display font-bold text-display-md text-text-primary leading-tight text-balance">
        {title}
      </h2>

      {subtitle && (
        <p
          className={[
            'text-text-secondary leading-relaxed',
            centered ? 'mx-auto max-w-2xl' : 'max-w-xl',
          ].join(' ')}
        >
          {subtitle}
        </p>
      )}
    </div>
  )

  if (!animate) return content

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div variants={fadeUp}>
        {content}
      </motion.div>
    </motion.div>
  )
}
