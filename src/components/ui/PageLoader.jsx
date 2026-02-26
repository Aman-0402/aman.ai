// Shown during Suspense fallback (lazy page loading)
export default function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinning gradient ring */}
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-bg-border" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-brand-primary" />
        </div>
        <p className="text-xs text-text-muted animate-pulse">Loading...</p>
      </div>
    </div>
  )
}
