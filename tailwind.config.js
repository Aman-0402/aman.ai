/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ─── Color System ────────────────────────────────────────────
      colors: {
        bg: {
          base:     '#0A0A0F',
          surface:  '#111118',
          elevated: '#1A1A25',
          border:   '#2A2A3A',
        },
        brand: {
          primary:   '#6366F1',
          secondary: '#22D3EE',
          dark:      '#4F46E5',
        },
        text: {
          primary:   '#F1F5F9',
          secondary: '#94A3B8',
          muted:     '#475569',
          accent:    '#6366F1',
        },
        // Light mode overrides
        light: {
          base:     '#F8FAFC',
          surface:  '#FFFFFF',
          elevated: '#F1F5F9',
          border:   '#E2E8F0',
        },
      },

      // ─── Typography ──────────────────────────────────────────────
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },

      fontSize: {
        'display-2xl': ['4.5rem',   { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl':  ['3.75rem',  { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-lg':  ['3rem',     { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-md':  ['2.25rem',  { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'display-sm':  ['1.875rem', { lineHeight: '1.25' }],
      },

      // ─── Spacing ──────────────────────────────────────────────────
      spacing: {
        'section':  '6rem',
        'section-sm': '4rem',
      },

      // ─── Max Width ────────────────────────────────────────────────
      maxWidth: {
        'content': '1280px',
        'prose-lg': '72ch',
      },

      // ─── Background Images ────────────────────────────────────────
      backgroundImage: {
        'gradient-brand':    'linear-gradient(135deg, #6366F1, #22D3EE)',
        'gradient-brand-v':  'linear-gradient(180deg, #6366F1, #22D3EE)',
        'gradient-dark':     'linear-gradient(135deg, #0A0A0F 0%, #1A1A25 100%)',
        'gradient-glow':     'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        'gradient-glow-cyan':'radial-gradient(ellipse at bottom right, rgba(34, 211, 238, 0.1) 0%, transparent 60%)',
        'noise':             "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },

      // ─── Box Shadow ───────────────────────────────────────────────
      boxShadow: {
        'glow-primary': '0 0 30px rgba(99, 102, 241, 0.3)',
        'glow-cyan':    '0 0 30px rgba(34, 211, 238, 0.25)',
        'glow-lg':      '0 0 60px rgba(99, 102, 241, 0.2)',
        'card':         '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover':   '0 8px 48px rgba(0, 0, 0, 0.5)',
        'navbar':       '0 1px 0 rgba(255, 255, 255, 0.05)',
      },

      // ─── Animation ────────────────────────────────────────────────
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '50%':       { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },

      animation: {
        'fade-in':    'fade-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-down': 'slide-down 0.4s cubic-bezier(0.22, 1, 0.36, 1) both',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float':      'float 4s ease-in-out infinite',
        'spin-slow':  'spin-slow 12s linear infinite',
      },

      // ─── Backdrop Blur ────────────────────────────────────────────
      backdropBlur: {
        xs: '2px',
      },

      // ─── Border Radius ────────────────────────────────────────────
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      // ─── Transition ───────────────────────────────────────────────
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
