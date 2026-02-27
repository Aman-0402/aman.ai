import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, ExternalLink, Sparkles, Users, BookMarked, Gift } from 'lucide-react'
import PageLayout from '@components/layout/PageLayout'
import { fadeUp, staggerContainer } from '@animations/variants'
import { viewport } from '@animations/transitions'
import ebooksData from '@data/ebooks.json'

// ─── Category meta (color tokens) ────────────────────────────────────────────

const CATEGORY_META = {
  'Web Development':  { pill: 'text-brand-primary  bg-brand-primary/10  border-brand-primary/20',  dot: 'bg-brand-primary'  },
  'Data Science & AI':{ pill: 'text-amber-400      bg-amber-400/10      border-amber-400/20',       dot: 'bg-amber-400'      },
  'Cloud & DevOps':   { pill: 'text-sky-400        bg-sky-400/10        border-sky-400/20',         dot: 'bg-sky-400'        },
  'Networking':       { pill: 'text-emerald-400    bg-emerald-400/10    border-emerald-400/20',     dot: 'bg-emerald-400'    },
  'Languages':        { pill: 'text-purple-400     bg-purple-400/10     border-purple-400/20',      dot: 'bg-purple-400'     },
}

// ─── Animation variants ───────────────────────────────────────────────────────

const cardVariants = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -16, scale: 0.97, transition: { duration: 0.25 } },
}

const gridVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
  exit:    { transition: { staggerChildren: 0.03 } },
}

// ─── EbookCard ────────────────────────────────────────────────────────────────

function EbookCard({ book }) {
  const meta = CATEGORY_META[book.category]

  return (
    <motion.div
      layout
      variants={cardVariants}
      whileHover={{ y: -10, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      className="group flex flex-col rounded-2xl overflow-hidden border border-bg-border bg-bg-elevated hover:border-brand-primary/30 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
    >
      {/* ── Book Cover ─────────────────────────────────────────────────── */}
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${book.gradient} flex items-center justify-center`}>
        {/* Decorative blobs */}
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-black/15 pointer-events-none" />
        <div className="absolute top-1/2 right-[30%] h-10 w-10 rounded-full bg-white/5 pointer-events-none" />

        {/* Shine sweep on hover */}
        <div className="absolute inset-0 -translate-x-full skew-x-[-12deg] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out pointer-events-none" />

        {/* Tech icon */}
        <div className="relative z-10 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
          <img
            src={book.icon}
            alt={book.title}
            width={72}
            height={72}
            className={`h-[72px] w-[72px] object-contain drop-shadow-2xl ${book.iconWhite ? 'brightness-0 invert' : ''}`}
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>

        {/* FREE badge */}
        <div className="absolute top-3 right-3 rounded-full bg-black/25 backdrop-blur-sm border border-white/20 px-2.5 py-0.5 text-[11px] font-semibold text-white tracking-wide">
          FREE
        </div>
      </div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Category badge */}
        <span className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${meta?.pill ?? 'text-text-muted bg-bg-border border-bg-border'}`}>
          <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${meta?.dot ?? 'bg-text-muted'}`} />
          {book.category}
        </span>

        {/* Title */}
        <div>
          <h3 className="font-display font-bold text-text-primary leading-snug group-hover:text-brand-primary transition-colors duration-200">
            {book.title}
          </h3>
          <p className="text-xs text-text-muted mt-0.5 font-medium">{book.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 flex-1">
          {book.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {book.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-bg-border px-2.5 py-0.5 text-xs text-text-muted">
              {tag}
            </span>
          ))}
          {book.tags.length > 3 && (
            <span className="rounded-full bg-bg-border px-2.5 py-0.5 text-xs text-text-muted">
              +{book.tags.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <a
          href={book.readUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-bg-border bg-bg-surface py-2.5 text-sm font-medium text-text-secondary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-200"
        >
          <BookOpen size={14} />
          Read Online
          <ExternalLink size={12} className="opacity-50" />
        </a>
      </div>
    </motion.div>
  )
}

// ─── Coming Soon Card ─────────────────────────────────────────────────────────

function ComingSoonCard() {
  return (
    <motion.div
      layout
      variants={cardVariants}
      className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-bg-border bg-bg-surface min-h-[320px] p-8 text-center gap-5"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 border border-brand-primary/20"
      >
        <Sparkles size={24} className="text-brand-primary" />
      </motion.div>

      <div className="space-y-1.5">
        <p className="font-display font-bold text-text-primary text-lg">More Coming Soon</p>
        <p className="text-sm text-text-muted">
          React, Node.js, Machine Learning,<br />AI Engineering & more
        </p>
      </div>

      <a
        href="https://www.youtube.com/@Think_Like_Me"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-brand-primary hover:text-brand-primary/80 transition-colors"
      >
        Follow on YouTube for updates
        <ExternalLink size={11} />
      </a>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EbooksPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...new Set(ebooksData.map((b) => b.category))]

  const filtered =
    activeCategory === 'All'
      ? ebooksData
      : ebooksData.filter((b) => b.category === activeCategory)

  return (
    <PageLayout
      title="Free eBooks"
      description="Free eBooks on Web Development, Python, Data Science, AWS, Networking, Java and more by Aman Raj. No email required."
      path="/ebooks"
    >
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="section-container section-padding pb-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.span variants={fadeUp} className="tag mb-4 inline-block">
            Free Resources
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-bold text-text-primary lg:text-5xl"
          >
            Free eBook{' '}
            <span className="gradient-text">Library</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 text-text-secondary text-lg leading-relaxed">
            {ebooksData.length} handcrafted eBooks covering web development, data science, cloud,
            and more.{' '}
            <span className="font-semibold text-text-primary">
              All free. No email. No paywall.
            </span>
          </motion.p>

          {/* Stat pills */}
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            {[
              { icon: BookMarked, label: `${ebooksData.length} eBooks` },
              { icon: Gift,       label: '100% Free'                  },
              { icon: Users,      label: '3,000+ Readers'             },
              { icon: Sparkles,   label: 'More Coming'                },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-bg-border bg-bg-elevated px-3.5 py-1.5 text-sm text-text-secondary"
              >
                <Icon size={13} className="text-brand-primary flex-shrink-0" />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Category Filter + Grid ──────────────────────────────────────── */}
      <section className="section-container pt-10 pb-20">
        {/* Filter tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => {
            const count = cat === 'All' ? ebooksData.length : ebooksData.filter((b) => b.category === cat).length
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-primary text-white shadow-glow-primary'
                    : 'border border-bg-border bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-brand-primary/30'
                }`}
              >
                {cat}
                <span className={`ml-1.5 text-xs ${isActive ? 'opacity-80' : 'opacity-50'}`}>
                  ({count})
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Books grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((book) => (
              <EbookCard key={book.id} book={book} />
            ))}

            {/* "More coming soon" card — only in All view */}
            {activeCategory === 'All' && <ComingSoonCard />}
          </motion.div>
        </AnimatePresence>
      </section>
    </PageLayout>
  )
}
