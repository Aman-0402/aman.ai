import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Clock } from 'lucide-react'
import PageLayout from '@components/layout/PageLayout'
import { fadeUp, staggerContainer } from '@animations/variants'
import { viewport } from '@animations/transitions'

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@amanraj.dev',
    href: 'mailto:hello@amanraj.dev',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/amanraj',
    href: 'https://github.com/amanraj',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/amanraj',
    href: 'https://linkedin.com/in/amanraj',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    value: '@amanraj',
    href: 'https://twitter.com/amanraj',
  },
]

// Note: This form uses Formspree (https://formspree.io) — 100% free, no backend needed.
// Replace FORMSPREE_ENDPOINT with your own form endpoint.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full rounded-xl border border-bg-border bg-bg-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all duration-200'

  return (
    <PageLayout
      title="Contact"
      description="Get in touch with Aman Raj for web development, AI/ML projects, technical training, or just to say hello."
      path="/contact"
    >
      <section className="section-container section-padding">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16"
        >
          <h1 className="font-display font-bold text-display-md text-text-primary mb-3">
            Let's Build Something
          </h1>
          <p className="text-text-secondary max-w-lg mx-auto">
            Have a project in mind? Looking for a trainer? Or just want to connect?
            I reply to every message within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          {/* ── Contact Form ────────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-text-secondary uppercase tracking-wide">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-text-secondary uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-text-secondary uppercase tracking-wide">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project inquiry / Collaboration / Training"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-text-secondary uppercase tracking-wide">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about your project, timeline, and budget..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <p className="rounded-xl bg-green-500/10 border border-green-500/20 px-4 py-3 text-sm text-green-400">
                  Message sent! I'll get back to you within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
                  Something went wrong. Please try emailing me directly.
                </p>
              )}

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white shadow-glow-primary hover:bg-brand-dark disabled:opacity-60 transition-all duration-200"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <Send size={14} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* ── Sidebar ─────────────────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-6"
          >
            {/* Contact methods */}
            <div className="rounded-2xl border border-bg-border bg-bg-surface p-6 space-y-4">
              <h3 className="font-display font-semibold text-text-primary mb-4">
                Reach Out Directly
              </h3>
              {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  variants={fadeUp}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-200">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">{label}</p>
                    <p className="text-sm text-text-secondary group-hover:text-brand-primary transition-colors">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability card */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span className="text-sm font-medium text-green-400">
                  Available for new projects
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <MapPin size={12} /> India (IST)
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted mt-1">
                <Clock size={12} /> Responds within 24 hours
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
