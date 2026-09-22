import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1200, // Raises warning limit from 500 kB to 1200 kB
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'motion-vendor': ['framer-motion', 'lucide-react'],
          'charts-vendor': ['recharts'],
        },
      },
    },
  },
})