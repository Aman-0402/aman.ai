import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Youtube, Mail, Heart, ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '@animations/variants'
import { viewport } from '@animations/transitions'

const FOOTER_LINKS = {
  Navigation: [
    { label: 'About',         href: '/about' },
    { label: 'Projects',      href: '/projects' },
    { label: 'Services',      href: '/services' },
    { label: 'Contact',       href: '/contact' },
  ],
  Content: [
    { label: 'Blog',          href: '/blog' },
    { label: 'eBooks',        href: '/ebooks' },
    { label: 'Knowledge Hub', href: '/knowledge-hub' },
    { label: 'Resources',     href: '/resources' },
  ],
  Connect: [
    { label: 'GitHub',    href: 'https://github.com/Aman-0402',                        external: true },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/aman-raj-081905211/',     external: true },
    { label: 'Twitter/X', href: 'https://x.com/Code_Like_Aman',                       external: true },
    { label: 'Email',     href: 'mailto:think.like.ai.aman@gmail.com',                external: false },
  ],
}

const SOCIALS = [
  { Icon: Github,   href: 'https://github.com/Aman-0402',                      label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/aman-raj-081905211/',   label: 'LinkedIn' },
  { Icon: Twitter,  href: 'https://x.com/Code_Like_Aman',                     label: 'Twitter/X' },
  { Icon: Youtube,  href: 'https://www.youtube.com/@Think_Like_Me',            label: 'YouTube' },
  { Icon: Mail,     href: 'mailto:think.like.ai.aman@gmail.com',               label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-bg-border bg-bg-surface">
      {/* ── Main Footer Content ─────────────────────────────────────────────── */}
      <div className="section-container py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]"
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="space-y-5">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow-primary">
                <span className="font-display font-bold text-sm text-white">A</span>
              </div>
              <span className="font-display font-bold text-xl text-text-primary">
                Aman<span className="gradient-text">.ai</span>
              </span>
            </Link>

            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Full-Stack MERN Developer, AI/ML Engineer, and Technical Trainer.
              Building intelligent products and sharing knowledge with the developer community.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-bg-border text-text-muted hover:text-brand-primary hover:border-brand-primary/40 hover:bg-brand-primary/5 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-bg-border px-3 py-1.5 text-xs text-text-secondary">
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
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1 text-sm text-text-secondary hover:text-brand-primary transition-colors duration-200"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={12}
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

      {/* ── Bottom Bar ─────────────────────────────────────────────────────────── */}
      <div className="border-t border-bg-border">
        <div className="section-container flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-text-muted text-center sm:text-left">
            © {year} Aman Raj. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-xs text-text-muted">
            Built with{' '}
            <Heart size={12} className="text-red-500 fill-red-500" />
            {' '}using React, Vite & TailwindCSS
          </p>

          <div className="flex items-center gap-4">
            <a
              href={`${import.meta.env.BASE_URL}assets/downloads/resume.pdf`}
              download
              className="text-xs text-text-muted hover:text-brand-primary transition-colors"
            >
              Resume
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
