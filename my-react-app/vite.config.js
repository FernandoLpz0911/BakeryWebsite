// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Directly set the base URL to your GitHub repository name.
// This is the most straightforward way for GitHub Pages.
const REPO_NAME = 'BakeryWebsite'; // <--- REPLACE WITH YOUR ACTUAL GITHUB REPOSITORY NAME

export default defineConfig({
  plugins: [react()],
  // Set the base URL for deployment.
  // When deploying to GitHub Pages, the base URL is typically /<repository-name>/
  base: `/${REPO_NAME}/`, // <--- SIMPLIFIED AND CORRECTED BASE URL
  build: {
    outDir: 'dist', // Default output directory for Vite build
  }
})