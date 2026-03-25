/**
 * Resolves a public-folder asset path against Vite's BASE_URL.
 *
 * JSON data files store paths like "/assets/images/foo.png".
 * Vite only rewrites paths that go through its module graph (imports).
 * Plain strings in JSON are left as-is, so they break when the app is
 * deployed to a sub-path (e.g. /aman.ai/ on GitHub Pages without a
 * custom domain).
 *
 * Usage:  <img src={assetUrl(project.thumbnail)} />
 */
export function assetUrl(path) {
  if (!path) return path
  // BASE_URL is e.g. '/aman.ai/' in production or '/' locally.
  // path starts with '/', so strip it to avoid double-slash.
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
