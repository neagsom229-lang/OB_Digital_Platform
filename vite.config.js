import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ command, mode }) => ({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    ...(command === 'build' && mode === 'analyze'
      ? [
          visualizer({
            filename: 'dist/bundle-stats.html',
            open: false,
            gzipSize: true,
            brotliSize: true,
          }),
          visualizer({
            filename: 'dist/bundle-stats.json',
            template: 'raw-data',
            open: false,
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('/node_modules/react/') ||
            id.includes('/node_modules/react-dom/') ||
            id.includes('/node_modules/scheduler/')
          ) {
            return 'vendor-react'
          }
          if (
            id.includes('/node_modules/framer-motion/') ||
            id.includes('/node_modules/motion-dom/') ||
            id.includes('/node_modules/motion-utils/')
          ) {
            return 'vendor-motion'
          }
          if (
            id.includes('/node_modules/react-router/') ||
            id.includes('/node_modules/@remix-run/')
          ) {
            return 'vendor-router'
          }
        },
      },
    },
  },
}))
