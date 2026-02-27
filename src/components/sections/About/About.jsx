import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Download, Mail, MapPin, Calendar, Code2,
  Brain, Server, GitBranch, Layout,
  Briefcase, GraduationCap, Rocket, Star,
  ArrowUpRight, CheckCircle2, Users, FolderGit2, Layers,
} from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, scaleIn, skillBar } from '@animations/variants'
import { viewport } from '@animations/transitions'
import skillsData from '@data/skills.json'
import timelineData from '@data/timeline.json'
import techStackData from '@data/techstack.json'
import profileImage from '@/assets/images/AvatarHero.png'

// ─── Constants ────────────────────────────────────────────────────────────────

// BASE_URL = '/' in dev, '/aman.ai/' on GitHub Pages — must prefix all public assets
const PROFILE_IMAGE = profileImage


const STATS = [
  { icon: Calendar,   value: '5+',    label: 'Years Experience'  },
  { icon: Users,      value: '3000+', label: 'Students Trained'  },
  { icon: FolderGit2, value: '50+',   label: 'Projects Delivered'},
  { icon: Layers,     value: '40+',   label: 'Technologies'      },
]

const TABS = ['Skills', 'Tech Stack', 'Journey', 'What I Do']

const WHAT_I_DO = [
  {
    icon: Code2,
    title: 'Full-Stack Web Development',
    description:
      'End-to-end MERN stack applications — from pixel-perfect React frontends to scalable Node.js backends with RESTful APIs and MongoDB databases.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Production-ready ML pipelines, LLM-powered applications, and intelligent features that transform raw data into business value.',
    tags: ['Python', 'scikit-learn', 'LangChain', 'FastAPI'],
  },
  {
    icon: GraduationCap,
    title: 'Technical Training',
    description:
      'Hands-on workshops and 1-on-1 mentoring for developers at all levels — covering web development, Python, and AI/ML from fundamentals to production.',
    tags: ['Workshops', 'Mentoring', '200+ Students'],
  },
  {
    icon: Rocket,
    title: 'AI Product Consulting',
    description:
      'Helping startups and teams integrate AI into their products strategically — architecture reviews, proof-of-concepts, and implementation roadmaps.',
    tags: ['Strategy', 'Architecture', 'LLMs', 'APIs'],
  },
]

// ─── Skill category icon map ───────────────────────────────────────────────────
const CATEGORY_ICONS = {
  Layout:    Layout,
  Server:    Server,
  Brain:     Brain,
  GitBranch: GitBranch,
}

// ─── Timeline type config ──────────────────────────────────────────────────────
const TIMELINE_TYPE = {
  education: { icon: GraduationCap, color: 'text-brand-primary bg-brand-primary/10 border-brand-primary/20' },
  work:      { icon: Briefcase,     color: 'text-brand-secondary bg-brand-secondary/10 border-brand-secondary/20' },
  milestone: { icon: Star,          color: 'text-amber-400 bg-amber-400/10 border-amber-400/20' },
  launch:    { icon: Rocket,        color: 'text-green-400 bg-green-400/10 border-green-400/20' },
}

// ─── Tab animation ────────────────────────────────────────────────────────────
const tabContent = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.25 } },
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ icon: Icon, value, label }) {
  return (
    <motion.div
      variants={scaleIn}
      className="flex flex-col items-center gap-1 rounded-2xl border border-bg-border bg-bg-elevated p-4 text-center"
    >
      <Icon size={18} className="text-brand-primary mb-1" />
      <span className="font-display text-2xl font-bold text-text-primary">{value}</span>
      <span className="text-xs text-text-muted">{label}</span>
    </motion.div>
  )
}

function SkillsTab() {
  return (
    <motion.div
      key="skills"
      variants={tabContent}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid gap-6 sm:grid-cols-2"
    >
      {skillsData.map((cat) => {
        const Icon = CATEGORY_ICONS[cat.icon] ?? Code2
        return (
          <div
            key={cat.category}
            className="rounded-2xl border border-bg-border bg-bg-elevated p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
              >
                <Icon size={18} style={{ color: cat.color }} />
              </div>
              <h3 className="font-display font-semibold text-text-primary">{cat.category}</h3>
            </div>

            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex justify-between text-xs">
                    <span className="text-text-secondary">{skill.name}</span>
                    <span className="font-mono text-text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-bg-border overflow-hidden">
                    <motion.div
                      variants={skillBar(skill.level)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="h-full rounded-full"
                      style={{ background: cat.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </motion.div>
  )
}

function JourneyTab() {
  return (
    <motion.div
      key="journey"
      variants={tabContent}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative"
    >
      {/* Vertical line */}
      <div className="absolute left-[22px] top-0 bottom-0 w-px bg-bg-border sm:left-1/2 sm:-translate-x-px" />

      <div className="space-y-8">
        {timelineData.map((item, idx) => {
          const { icon: TypeIcon, color } = TIMELINE_TYPE[item.type] ?? TIMELINE_TYPE.milestone
          const isRight = idx % 2 === 0

          return (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className={`relative flex gap-6 sm:gap-0 ${isRight ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
            >
              {/* Content card — mobile: always right of line; desktop: alternates */}
              <div className={`w-full pl-14 sm:pl-0 sm:w-[calc(50%-2rem)] ${isRight ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'}`}>
                <div className={`rounded-2xl border border-bg-border bg-bg-elevated p-5 ${isRight ? 'sm:ml-auto' : ''}`}>
                  {/* Year badge */}
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-mono font-medium mb-3 ${color}`}
                  >
                    {item.year}
                  </span>

                  <h3 className="font-display font-semibold text-text-primary mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">
                    {item.description}
                  </p>

                  <div className={`flex flex-wrap gap-1.5 ${isRight ? 'sm:justify-end' : ''}`}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-bg-border px-2.5 py-0.5 text-xs text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dot — fixed to the center line */}
              <div className="absolute left-0 top-5 sm:left-1/2 sm:-translate-x-1/2 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-bg-border bg-bg-surface z-10">
                <TypeIcon size={16} className={color.split(' ')[0]} />
              </div>

              {/* Desktop spacer on the opposite side */}
              <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

function WhatIDoTab() {
  return (
    <motion.div
      key="whatido"
      variants={tabContent}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid gap-5 sm:grid-cols-2"
    >
      {WHAT_I_DO.map((item) => {
        const Icon = item.icon
        return (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="group rounded-2xl border border-bg-border bg-bg-elevated p-6 hover:border-brand-primary/40 transition-colors duration-300"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 border border-brand-primary/20">
              <Icon size={20} className="text-brand-primary" />
            </div>
            <h3 className="font-display font-semibold text-text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-bg-border px-2.5 py-0.5 text-xs text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )
      })}

      <motion.div
        variants={fadeUp}
        className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-brand-primary/20 bg-brand-primary/5 p-6"
      >
        <div>
          <p className="font-display font-semibold text-text-primary">Ready to build something great?</p>
          <p className="text-sm text-text-secondary mt-1">Let's discuss your project or training needs.</p>
        </div>
        <Link
          to="/contact"
          className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-primary/90 transition-colors"
        >
          Get In Touch
          <ArrowUpRight size={14} />
        </Link>
      </motion.div>
    </motion.div>
  )
}

function TechStackTab() {
  return (
    <motion.div
      key="techstack"
      variants={tabContent}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-8"
    >
      {techStackData.map((group) => (
        <motion.div
          key={group.category}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-muted">
            {group.category}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {group.techs.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2.5 rounded-xl border border-bg-border bg-bg-elevated px-3.5 py-2.5 transition-all duration-200 hover:border-brand-primary/40 hover:bg-brand-primary/5 group"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  width={22}
                  height={22}
                  className={`h-[22px] w-[22px] object-contain flex-shrink-0 ${tech.invert ? 'dark:invert' : ''}`}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function About() {
  const [activeTab, setActiveTab] = useState('Skills')
  const [imgError, setImgError] = useState(false)

  return (
    <>
      {/* ── Bio Hero ──────────────────────────────────────────────────────────── */}
      <div className="section-container section-padding">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-[1fr_1.15fr] items-center">

          {/* Left column — photo + stats */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-8"
          >
            {/* Profile image */}
            <div className="relative mx-auto w-full max-w-sm lg:mx-0">
              {/* Glow blob */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-bg-border shadow-card-hover aspect-[4/5] bg-bg-elevated flex items-center justify-center">
                {imgError ? (
                  <span className="font-display text-7xl font-bold gradient-text select-none">AR</span>
                ) : (
                  <img
                    src={PROFILE_IMAGE}
                    alt="Aman Raj — Full-Stack Developer & AI/ML Engineer"
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>

              {/* Floating badge — available */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-full border border-bg-border bg-bg-surface px-4 py-2 shadow-card text-xs text-text-secondary"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Available for Projects
              </motion.div>

              {/* Floating badge — location */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 right-4 flex items-center gap-2 rounded-full border border-bg-border bg-bg-surface px-4 py-2 shadow-card text-xs text-text-secondary"
              >
                <MapPin size={12} className="text-brand-primary" />
                India, IST
              </motion.div>
            </div>

            {/* Stats grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-2 gap-3"
            >
              {STATS.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — bio text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="tag mb-4 inline-block">About Me</span>
              <h1 className="font-display text-4xl font-bold text-text-primary leading-tight lg:text-5xl">
                Building{' '}
                <span className="gradient-text">intelligent</span>{' '}
                web experiences
              </h1>
            </motion.div>

            <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed text-lg">
              I'm <span className="font-semibold text-text-primary">Aman Raj</span> — a Full-Stack Developer
              and AI/ML Engineer based in India. I specialise in building production-ready web applications
              with the MERN stack and Python, with a focus on integrating intelligent features that genuinely
              solve problems.
            </motion.p>

            <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed">
              Beyond writing code, I'm passionate about sharing knowledge. Through YouTube tutorials,
              technical eBooks, and direct training, I've helped{' '}
              <span className="font-semibold text-text-primary">200+ developers</span> level up in web
              development and machine learning — from complete beginners to production-ready engineers.
            </motion.p>

            <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed">
              I believe in clean architecture, thoughtful UI, and the power of continuous learning.
              Whether it's crafting pixel-perfect interfaces with React and TailwindCSS, building
              scalable APIs, or developing ML pipelines — I bring both technical depth and teaching
              clarity to everything I build.
            </motion.p>

            {/* Highlights */}
            <motion.ul variants={staggerContainer} className="space-y-2.5">
              {[
                'MERN Stack & Python — full production experience',
                'AI/ML Engineering: LLMs, RAG, scikit-learn, XGBoost',
                'Technical Trainer — workshops, eBooks, 1-on-1 mentoring',
                'Open to freelance projects and AI/ML consulting',
              ].map((point) => (
                <motion.li
                  key={point}
                  variants={fadeUp}
                  className="flex items-start gap-2.5 text-sm text-text-secondary"
                >
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-brand-primary" />
                  {point}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <a
                href={`${import.meta.env.BASE_URL}assets/downloads/resume.pdf`}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-primary/90 transition-colors shadow-glow-primary"
              >
                <Download size={15} />
                Download Resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-bg-border bg-bg-elevated px-5 py-2.5 text-sm font-medium text-text-primary hover:border-brand-primary/40 hover:text-brand-primary transition-colors"
              >
                <Mail size={15} />
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Tabs Section ──────────────────────────────────────────────────────── */}
      <div className="border-t border-bg-border bg-bg-surface">
        <div className="section-container py-16">

          {/* Tab buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-10 flex gap-2 overflow-x-auto pb-1"
          >
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-brand-primary text-white shadow-glow-primary'
                    : 'border border-bg-border bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-brand-primary/30'
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            {activeTab === 'Skills'      && <SkillsTab />}
            {activeTab === 'Tech Stack'  && <TechStackTab />}
            {activeTab === 'Journey'     && <JourneyTab />}
            {activeTab === 'What I Do'   && <WhatIDoTab />}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}
