// ─── Shared Transition Presets ─────────────────────────────────────────────────
// Use these inside variants.js or directly in transition props

export const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}

export const springBouncy = {
  type: 'spring',
  stiffness: 400,
  damping: 18,
}

export const smooth = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
}

export const fast = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
}

export const slow = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
}

export const stagger = (delay = 0.1) => ({
  staggerChildren: delay,
  delayChildren: 0.1,
})

// Viewport config for whileInView animations
// once: true means the animation fires only the first time the element enters view
export const viewport = {
  once: true,
  margin: '-80px 0px',
}

export const viewportEager = {
  once: true,
  margin: '-40px 0px',
}
