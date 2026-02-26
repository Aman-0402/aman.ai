// ─── Date Formatting Utilities ─────────────────────────────────────────────────

export function formatDate(dateStr) {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function formatDateShort(dateStr) {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
  }).format(date)
}

export function formatYear(dateStr) {
  return new Date(dateStr).getFullYear()
}

export function getReadingTime(content) {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export function isNew(dateStr, thresholdDays = 30) {
  const diff = Date.now() - new Date(dateStr).getTime()
  return diff < thresholdDays * 24 * 60 * 60 * 1000
}
