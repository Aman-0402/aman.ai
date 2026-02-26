import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Base path strategy:
  //   - In GitHub Actions, VITE_BASE_PATH is injected by actions/configure-pages.
  //     It outputs '/' when a custom domain is configured, or '/aman.ai/' when
  //     using the default aman-0402.github.io/aman.ai/ subdomain.
  //   - Locally (npm run dev), it falls back to '/' — no configuration needed.
  //   This single line handles ALL deployment scenarios automatically.
  base: process.env.VITE_BASE_PATH || '/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@data': path.resolve(__dirname, './src/data'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@animations': path.resolve(__dirname, './src/animations'),
      '@context': path.resolve(__dirname, './src/context'),
    },
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
    // Chunk splitting for optimal loading
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          markdown: ['react-markdown', 'remark-gfm', 'rehype-highlight'],
        },
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
})
