import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Youtube, Mail, ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '@animations/variants'
import { viewport } from '@animations/transitions'

const FOOTER_LINKS = {
  Navigation: [
    { label: 'About',    href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Contact',  href: '/contact' },
  ],
  Content: [
    { label: 'Gallery',       href: '/gallery' },
    { label: 'eBooks',        href: '/ebooks' },
    { label: 'Knowledge Hub', href: '/knowledge-hub' },
    { label: 'Resources',     href: '/resources' },
  ],
  Connect: [
    { label: 'GitHub',    href: 'https://github.com/Aman-0402',                      external: true },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/aman-raj-081905211/',   external: true },
    { label: 'Twitter/X', href: 'https://x.com/Code_Like_Aman',                     external: true },
    { label: 'Email',     href: 'mailto:think.like.ai.aman@gmail.com',               external: false },
  ],
}

const SOCIALS = [
  { Icon: Github,   href: 'https://github.com/Aman-0402',                    label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/aman-raj-081905211/', label: 'LinkedIn' },
  { Icon: Twitter,  href: 'https://x.com/Code_Like_Aman',                   label: 'Twitter/X' },
  { Icon: Youtube,  href: 'https://www.youtube.com/@Think_Like_Me',          label: 'YouTube' },
  { Icon: Mail,     href: 'mailto:think.like.ai.aman@gmail.com',             label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-bg-border bg-bg-surface">

      {/* ── Ambient glow background ─────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-brand-primary/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-brand-secondary/5 blur-3xl" />
      </div>

      {/* ── CTA Band ────────────────────────────────────────────────────────── */}
      <div className="relative border-b border-bg-border">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="section-container flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <motion.div variants={fadeUp} className="space-y-1">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-muted sm:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
              Open to opportunities
            </p>
            <h2 className="font-display text-xl font-bold text-text-primary sm:text-2xl">
              Let's build something{' '}
              <span className="gradient-text">amazing</span> together
            </h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-glow-primary transition-all duration-200 hover:bg-brand-dark hover:shadow-glow-lg"
            >
              Get in touch
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Main Footer Grid ─────────────────────────────────────────────────── */}
      <div className="relative section-container py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]"
        >

          {/* Brand column — full width on mobile */}
          <motion.div variants={fadeUp} className="col-span-2 lg:col-span-1 space-y-5">

            {/* Logo with 3D tilt */}
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <motion.div
                className="h-10 w-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow-primary"
                whileHover={{ rotateY: 25, rotateX: -10, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ transformPerspective: 600 }}
              >
                <span className="font-display font-bold text-base text-white">A</span>
              </motion.div>
              <span className="font-display font-bold text-xl text-text-primary">
                Aman<span className="gradient-text">.ai</span>
              </span>
            </Link>

            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Full-Stack MERN Developer, AI/ML Engineer &amp; Technical Trainer.
              Building intelligent products and sharing knowledge with developers worldwide.
            </p>

            {/* Social icons with 3D hover */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ rotateY: 20, rotateX: -10, scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  style={{ transformPerspective: 500 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-bg-border bg-bg-elevated text-text-muted hover:text-brand-primary hover:border-brand-primary/40 hover:bg-brand-primary/8 transition-colors duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-bg-border bg-bg-elevated px-3 py-1.5 text-xs text-text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for freelance projects
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([groupTitle, links]) => (
            <motion.div key={groupTitle} variants={fadeUp}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-muted">
                {groupTitle}
              </h3>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 text-sm text-text-secondary hover:text-brand-primary transition-colors duration-200"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={11}
                          className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                        />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-text-secondary hover:text-brand-primary transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom Bar ───────────────────────────────────────────────────────── */}
      <div className="relative border-t border-bg-border">
        <div className="section-container flex flex-col items-center gap-2 py-5 text-center sm:flex-row sm:justify-between sm:text-left">

          <p className="text-xs text-text-muted">
            © {year} Aman Raj. All rights reserved.
          </p>

          <p className="text-xs text-text-muted">
            Built with React, Vite &amp; TailwindCSS
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://aman-0402.github.io/My-Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-brand-primary transition-colors"
            >
              Portfolio
            </a>
            <Link
              to="/contact"
              className="text-xs text-text-muted hover:text-brand-primary transition-colors"
            >
              Hire Me
            </Link>
          </div>

        </div>
      </div>
    </footer>
  )
}
