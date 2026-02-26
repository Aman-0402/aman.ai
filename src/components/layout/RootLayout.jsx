import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from '@components/ui/ScrollToTop'

// RootLayout wraps every route.
// AnimatePresence here enables page exit animations.
export default function RootLayout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-bg-base text-text-primary">
      <Navbar />

      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          {/* key={location.pathname} forces AnimatePresence to detect route changes */}
          <div key={location.pathname}>
            <Outlet />
          </div>
        </AnimatePresence>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
