/**
 * Resolves a public-folder asset path against the app's base URL.
 *
 * JSON data files store paths like "/assets/images/foo.png".
 * Vite only rewrites paths that go through its module graph (imports).
 * Plain strings in JSON are left as-is, so they break when the app is
 * deployed to a sub-path (e.g. /aman.ai/ on GitHub Pages without a
 * custom domain).
 *
 * window.__BASE__ is set in index.html using Vite's %BASE_URL% token —
 * Vite guarantees this replacement in HTML files, making it the most
 * reliable source of the base path at runtime.
 *
 * Usage:  <img src={assetUrl(project.thumbnail)} />
 */
export function assetUrl(path) {
  if (!path) return path
  const base = window.__BASE__ || import.meta.env.BASE_URL || '/'
  return base.endsWith('/')
    ? base + path.replace(/^\//, '')
    : base + '/' + path.replace(/^\//, '')
}
