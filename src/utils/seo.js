// ─── SEO Meta Helper ──────────────────────────────────────────────────────────
// Usage: const meta = generateMeta({ title, description, path, image })

const SITE_NAME  = 'Aman Raj'
const SITE_URL   = 'https://amanraj.dev'
const SITE_IMAGE = '/assets/og/og-default.jpg'
const SITE_DESC  = 'Full-Stack MERN Developer, AI/ML Engineer, Python Expert & Technical Trainer.'

export function generateMeta({
  title,
  description = SITE_DESC,
  path = '/',
  image = SITE_IMAGE,
  type = 'website',
  keywords = '',
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Web Developer & AI/ML Expert`
  const url       = `${SITE_URL}${path}`
  const imgUrl    = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return {
    title: fullTitle,
    description,
    keywords,
    canonical: url,
    og: {
      title:       fullTitle,
      description,
      url,
      image:       imgUrl,
      type,
      siteName:    SITE_NAME,
    },
    twitter: {
      card:        'summary_large_image',
      title:       fullTitle,
      description,
      image:       imgUrl,
    },
  }
}

export const SITE_CONFIG = { SITE_NAME, SITE_URL, SITE_IMAGE, SITE_DESC }
