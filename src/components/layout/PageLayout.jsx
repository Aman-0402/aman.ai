import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { pageTransition } from '@animations/variants'
import { generateMeta } from '@utils/seo'

// ─── PageLayout ───────────────────────────────────────────────────────────────
// Wrap every page with this component for:
//  1. Consistent page transition animation
//  2. Automatic SEO meta tag injection via react-helmet-async
//  3. Proper top padding to clear the fixed Navbar

export default function PageLayout({
  children,
  title,
  description,
  path,
  image,
  className = '',
  // Set to false for pages where you want full-bleed (e.g. Home hero)
  withTopPadding = true,
}) {
  const meta = generateMeta({ title, description, path, image })

  return (
    <>
      {/* ── Dynamic SEO Meta Tags ───────────────────────────────────────── */}
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.keywords && <meta name="keywords" content={meta.keywords} />}
        <link rel="canonical" href={meta.canonical} />

        {/* Open Graph */}
        <meta property="og:title"       content={meta.og.title} />
        <meta property="og:description" content={meta.og.description} />
        <meta property="og:url"         content={meta.og.url} />
        <meta property="og:image"       content={meta.og.image} />
        <meta property="og:type"        content={meta.og.type} />
        <meta property="og:site_name"   content={meta.og.siteName} />

        {/* Twitter Card */}
        <meta name="twitter:card"        content={meta.twitter.card} />
        <meta name="twitter:title"       content={meta.twitter.title} />
        <meta name="twitter:description" content={meta.twitter.description} />
        <meta name="twitter:image"       content={meta.twitter.image} />
      </Helmet>

      {/* ── Page Entrance Animation ─────────────────────────────────────── */}
      <motion.div
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={[
          withTopPadding ? 'pt-16' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </motion.div>
    </>
  )
}
