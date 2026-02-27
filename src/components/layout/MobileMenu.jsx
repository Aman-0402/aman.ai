import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, Moon, Sun, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import {
  mobileMenuOverlay,
  mobileMenuDrawer,
  mobileMenuItems,
  mobileMenuItem,
} from '@animations/variants'

const SOCIAL_LINKS = [
  { icon: Github,   href: 'https://github.com/Aman-0402',                    label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aman-raj-081905211/', label: 'LinkedIn' },
  { icon: Twitter,  href: 'https://x.com/Code_Like_Aman',                   label: 'Twitter/X' },
  { icon: Mail,     href: 'mailto:think.like.ai.aman@gmail.com',             label: 'Email' },
]

export default function MobileMenu({ links, onClose, isDark, onToggleTheme }) {
  return (
    <>
      {/* ── Backdrop overlay ─────────────────────────────────────────────────── */}
      <motion.div
        key="mobile-overlay"
        variants={mobileMenuOverlay}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Drawer ───────────────────────────────────────────────────────────── */}
      <motion.div
        key="mobile-drawer"
        variants={mobileMenuDrawer}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed right-0 top-0 bottom-0 z-50 flex w-80 max-w-[85vw] flex-col bg-bg-surface border-l border-bg-border shadow-2xl lg:hidden"
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-bg-border px-6 py-4">
          <span className="font-display font-bold text-text-primary">
            Aman<span className="gradient-text">.ai</span>
          </span>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-bg-border text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <motion.nav
          variants={mobileMenuItems}
          initial="hidden"
          animate="visible"
          className="flex-1 overflow-y-auto px-4 py-6"
        >
          <ul className="space-y-1" role="list">
            {links.map((link) => (
              <motion.li key={link.href} variants={mobileMenuItem}>
                <NavLink
                  to={link.href}
                  onClick={onClose}
                  className={({ isActive }) =>
                    [
                      'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20'
                        : 'text-text-secondary hover:bg-bg-elevated hover:text-text-primary border border-transparent',
                    ].join(' ')
                  }
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          {/* Divider */}
          <div className="my-6 dotted-line" />

          {/* CTA buttons */}
          <motion.div variants={mobileMenuItem} className="space-y-3">
            <a
              href={`${import.meta.env.BASE_URL}assets/downloads/resume.pdf`}
              download="Aman_Raj_Resume.pdf"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-primary px-4 py-3 text-sm font-medium text-white shadow-glow-primary transition-all hover:bg-brand-dark"
            >
              <Download size={15} />
              Download Resume
            </a>

            <button
              onClick={onToggleTheme}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-bg-border px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-brand-primary/40 transition-all"
            >
              {isDark ? (
                <>
                  <Sun size={15} /> Switch to Light Mode
                </>
              ) : (
                <>
                  <Moon size={15} /> Switch to Dark Mode
                </>
              )}
            </button>
          </motion.div>
        </motion.nav>

        {/* Social links footer */}
        <motion.div
          variants={mobileMenuItem}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="border-t border-bg-border px-6 py-4"
        >
          <p className="mb-3 text-xs text-text-muted uppercase tracking-wider font-medium">
            Connect
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-bg-border text-text-muted hover:text-brand-primary hover:border-brand-primary/40 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
