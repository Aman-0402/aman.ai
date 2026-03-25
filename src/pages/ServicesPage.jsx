import PageLayout from '@components/layout/PageLayout'
import services from '@data/services.json'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -12, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function ServiceCard({ svc, index }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-60, 60], [10, -10]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-60, 60], [-10, 10]), { stiffness: 200, damping: 20 })

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      style={{ rotateX, rotateY, transformPerspective: 800, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      className="gradient-border rounded-2xl bg-bg-surface p-8 flex flex-col cursor-default"
    >
      {/* Floating icon */}
      <motion.div
        className="mb-5 text-4xl select-none"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d', translateZ: 20 }}
      >
        {svc.icon}
      </motion.div>

      <h3 className="font-display font-bold text-text-primary mb-2">{svc.title}</h3>
      <p className="text-sm text-text-secondary mb-6 flex-1">{svc.description}</p>

      <ul className="space-y-2 mb-6">
        {svc.features.map((f) => (
          <motion.li
            key={f}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="flex items-start gap-2 text-sm text-text-secondary"
          >
            <CheckCircle2 size={15} className="text-brand-primary mt-0.5 flex-shrink-0" />
            {f}
          </motion.li>
        ))}
      </ul>

      {svc.pricing && (
        <p className="text-xs text-brand-primary font-medium mb-4">💰 {svc.pricing}</p>
      )}

      <Link
        to={svc.ctaLink}
        className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
      >
        {svc.cta} <ArrowRight size={14} />
      </Link>
    </motion.div>
  )
}

export default function ServicesPage() {
  return (
    <PageLayout
      title="Services"
      description="Hire Aman Raj for Full-Stack Web Development, AI/ML Engineering, MERN Stack projects, Python development, and Technical Training."
      path="/services"
    >
      <section className="section-container section-padding">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="font-display font-bold text-display-md text-text-primary mb-3">
            Services
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            From concept to deployment — I help students, founders, and businesses build
            intelligent digital products.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ perspective: 1200 }}
        >
          {services.map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} index={i} />
          ))}
        </motion.div>

        {/* Freelancing badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-5 py-2 text-sm font-medium text-brand-primary">
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🚀
            </motion.span>
            Available for Freelancing Projects
          </span>
          <p className="mt-4 text-text-secondary text-sm">
            Have a project idea or need guidance?{' '}
            <Link to="/contact" className="text-brand-primary hover:underline font-medium">
              Let's build something amazing
            </Link>
          </p>
        </motion.div>
      </section>
    </PageLayout>
  )
}
