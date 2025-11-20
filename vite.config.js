// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),
        tailwindcss(),

  ],
  test: {
    globals: true,
    environment: 'jsdom',      // simulates browser environment
    setupFiles: './src/setupTests.js', // setup file path
  },
})
