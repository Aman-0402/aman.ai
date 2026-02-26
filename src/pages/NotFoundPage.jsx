import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import PageLayout from '@components/layout/PageLayout'
import { fadeUp, staggerContainer } from '@animations/variants'

export default function NotFoundPage() {
  return (
    <PageLayout title="404 — Page Not Found" path="/404">
      <section className="section-container flex min-h-[80vh] items-center justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6 max-w-md"
        >
          {/* Glitchy 404 number */}
          <motion.div variants={fadeUp}>
            <span className="font-display font-black text-[8rem] leading-none gradient-text opacity-30 select-none">
              404
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-3">
            <h1 className="font-display font-bold text-display-sm text-text-primary">
              Page Not Found
            </h1>
            <p className="text-text-secondary">
              Looks like this page got lost in the matrix. Let's get you back on track.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors shadow-glow-primary"
            >
              <Home size={14} /> Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 rounded-xl border border-bg-border px-6 py-3 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              <ArrowLeft size={14} /> Go Back
            </button>
          </motion.div>
        </motion.div>
      </section>
    </PageLayout>
  )
}
