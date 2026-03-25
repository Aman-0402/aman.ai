import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import PageLayout from '@components/layout/PageLayout'
import gallery from '@data/gallery.json'
import { assetUrl } from '@utils/assetUrl'

const ALL_CATEGORY = 'All'

export default function GalleryPage() {
  const categories = useMemo(() => {
    const cats = gallery.map((item) => item.category)
    return [ALL_CATEGORY, ...Array.from(new Set(cats))]
  }, [])

  const [active,    setActive]    = useState(ALL_CATEGORY)
  const [lightbox,  setLightbox]  = useState(null)   // item or null

  const filtered = useMemo(
    () =>
      active === ALL_CATEGORY
        ? gallery
        : gallery.filter((item) => item.category === active),
    [active]
  )

  return (
    <PageLayout
      title="Gallery"
      description="A visual collection of design work, project screenshots, event photos, certificates, and diagrams by Aman Raj."
      path="/gallery"
    >
      <section className="section-container section-padding">
        <h1 className="font-display font-bold text-display-md text-text-primary mb-2">
          Gallery
        </h1>
        <p className="text-text-secondary mb-10">
          {gallery.length} items — design, screenshots, events & more.
        </p>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`tag ${active === cat ? 'tag-active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLightbox(item)}
                className="group relative rounded-2xl border border-bg-border bg-bg-surface overflow-hidden text-left hover:border-brand-primary/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
              >
                {/* Image */}
                <div className="relative h-52 w-full bg-bg-elevated overflow-hidden">
                  <img
                    src={assetUrl(item.image)}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 rounded-full bg-bg-base/80 backdrop-blur-sm border border-bg-border px-2.5 py-0.5 text-xs font-medium text-text-secondary">
                    {item.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-display font-semibold text-text-primary mb-1 truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-muted">{item.year}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              key="lightbox-panel"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-2xl border border-bg-border bg-bg-surface overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-bg-base/80 backdrop-blur-sm border border-bg-border text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              {/* Image */}
              <div className="relative bg-bg-elevated">
                <img
                  src={assetUrl(lightbox.image)}
                  alt={lightbox.title}
                  className="w-full max-h-[60vh] object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="font-display font-bold text-xl text-text-primary">
                    {lightbox.title}
                  </h2>
                  <span className="shrink-0 rounded-full border border-bg-border px-2.5 py-0.5 text-xs text-text-muted">
                    {lightbox.year}
                  </span>
                </div>
                <span className="inline-block tag mb-3">{lightbox.category}</span>
                <p className="text-sm text-text-secondary">{lightbox.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  )
}
