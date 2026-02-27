import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Home, ArrowLeft } from 'lucide-react'
import PageLayout from '@components/layout/PageLayout'
import { fadeUp, staggerContainer } from '@animations/variants'

// Deterministic star positions (avoids random re-renders)
const STARS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: ((i * 73 + 17) % 100),
  y: ((i * 37 + 43) % 100),
  size: (i % 3) + 1,
  duration: 2 + (i % 4),
  delay: (i * 0.31) % 3,
}))

function useTypewriter(text, speed = 45) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    setDisplayed('')
    const id = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return displayed
}

export default function NotFoundPage() {
  const typed = useTypewriter(
    "This page drifted into the void. Let\u2019s get you back on track.",
    45
  )

  return (
    <PageLayout title="404 — Page Not Found" path="/404">
      <section className="section-container relative flex min-h-[80vh] items-center justify-center overflow-hidden">

        {/* Twinkling starfield */}
        {STARS.map((s) => (
          <motion.span
            key={s.id}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
            animate={{ opacity: [0.08, 0.6, 0.08], scale: [1, 1.4, 1] }}
            transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Rotating orbit rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[380, 560].map((size, i) => (
            <motion.div
              key={size}
              className="absolute rounded-full border border-brand-primary/[0.08]"
              style={{ width: size, height: size }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 28 + i * 18, repeat: Infinity, ease: 'linear' }}
            />
          ))}

          {/* Orbiting glow dot on inner ring */}
          <motion.div
            className="absolute"
            style={{ width: 380, height: 380 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          >
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-primary/70 shadow-glow-primary" />
          </motion.div>

          {/* Second slower dot on outer ring */}
          <motion.div
            className="absolute"
            style={{ width: 560, height: 560 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400/50" />
          </motion.div>
        </div>

        {/* Main content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center space-y-6 max-w-lg"
        >
          {/* Glitchy 404 */}
          <motion.div variants={fadeUp} className="relative inline-block select-none leading-none">
            {/* Red glitch slice */}
            <motion.span
              className="absolute inset-0 font-display font-black text-[7rem] sm:text-[9rem] leading-none text-red-400/60"
              aria-hidden
              animate={{ x: [-5, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.12, repeat: Infinity, repeatDelay: 3.8 }}
              style={{ clipPath: 'polygon(0 25%, 100% 25%, 100% 55%, 0 55%)' }}
            >
              404
            </motion.span>
            {/* Cyan glitch slice */}
            <motion.span
              className="absolute inset-0 font-display font-black text-[7rem] sm:text-[9rem] leading-none text-cyan-400/60"
              aria-hidden
              animate={{ x: [5, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.12, repeat: Infinity, repeatDelay: 3.8, delay: 0.07 }}
              style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 78%, 0 78%)' }}
            >
              404
            </motion.span>
            {/* Main text glitch jitter */}
            <motion.span
              className="relative font-display font-black text-[7rem] sm:text-[9rem] leading-none gradient-text"
              animate={{ x: [0, 3, -3, 0] }}
              transition={{ duration: 0.12, repeat: Infinity, repeatDelay: 3.8 }}
            >
              404
            </motion.span>
          </motion.div>

          {/* Error badge */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/25 bg-red-500/10 px-3 py-1 text-xs font-mono text-red-400">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-red-400"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              ERR_PAGE_NOT_FOUND
            </span>
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeUp} className="space-y-3">
            <h1 className="font-display font-bold text-display-sm text-text-primary">
              Page Not Found
            </h1>
            <p className="text-text-secondary min-h-[1.5rem]">
              {typed}
              <motion.span
                className="inline-block w-0.5 h-[0.85em] bg-brand-primary align-middle ml-0.5"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.55, repeat: Infinity, repeatType: 'reverse' }}
              />
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/"
                className="flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors shadow-glow-primary"
              >
                <Home size={14} /> Go Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 rounded-xl border border-bg-border px-6 py-3 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                <ArrowLeft size={14} /> Go Back
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </PageLayout>
  )
}
