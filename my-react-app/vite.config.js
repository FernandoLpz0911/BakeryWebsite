// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set the base URL for deployment.
  // When deploying to GitHub Pages, the base URL is typically /<repository-name>/
  base: `/`, // <--- SIMPLIFIED AND CORRECTED BASE URL
  build: {
    outDir: 'dist', // Default output directory for Vite build
  }
})