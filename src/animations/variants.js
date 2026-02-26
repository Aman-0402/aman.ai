// ─── Framer Motion Variant Library ────────────────────────────────────────────
// Import these variants in any component and apply via:
//   <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>

// ─── Easing Curves ────────────────────────────────────────────────────────────
export const EASE_SMOOTH  = [0.22, 1, 0.36, 1]   // Smooth decelerate (most UI)
export const EASE_SPRING  = { type: 'spring', stiffness: 300, damping: 30 }
export const EASE_BOUNCE  = { type: 'spring', stiffness: 400, damping: 20 }
export const EASE_ELASTIC = { type: 'spring', stiffness: 200, damping: 15 }

// ─── Entrance Variants ────────────────────────────────────────────────────────

export const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_SMOOTH },
  },
}

export const fadeDown = {
  hidden:  { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_SMOOTH },
  },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const slideInLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_SMOOTH },
  },
}

export const slideInRight = {
  hidden:  { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_SMOOTH },
  },
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_SMOOTH },
  },
}

export const scaleInBounce = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: EASE_BOUNCE,
  },
}

// ─── Container / Stagger Variants ─────────────────────────────────────────────
// Apply to a parent element — children inherit staggered timing

export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerSlow = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// ─── Page Transition ──────────────────────────────────────────────────────────

export const pageTransition = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_SMOOTH },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

// ─── Navbar Variants ──────────────────────────────────────────────────────────

export const navbarSlide = {
  hidden:  { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_SMOOTH },
  },
}

export const navLinkVariant = {
  hidden:  { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

export const mobileMenuOverlay = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.2, delay: 0.1 } },
}

export const mobileMenuDrawer = {
  hidden:  { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: 0.35, ease: EASE_SMOOTH },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

export const mobileMenuItems = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
}

export const mobileMenuItem = {
  hidden:  { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: EASE_SMOOTH },
  },
}

// ─── Modal ────────────────────────────────────────────────────────────────────

export const modalBackdrop = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
}

export const modalContent = {
  hidden:  { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE_SMOOTH },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
}

// ─── Card Hover ───────────────────────────────────────────────────────────────
// Use these directly on motion.div whileHover / whileTap

export const cardHover = {
  y: -6,
  transition: { duration: 0.3, ease: EASE_SMOOTH },
}

export const buttonTap = {
  scale: 0.96,
  transition: { duration: 0.1 },
}

// ─── Skill Bar ────────────────────────────────────────────────────────────────

export const skillBar = (width) => ({
  hidden:  { width: 0 },
  visible: {
    width: `${width}%`,
    transition: { duration: 1, ease: EASE_SMOOTH, delay: 0.2 },
  },
})

// ─── Hero Text ────────────────────────────────────────────────────────────────

export const heroWord = {
  hidden:  { opacity: 0, y: 20, rotateX: -20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: EASE_SMOOTH },
  },
}

export const heroContainer = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
}
