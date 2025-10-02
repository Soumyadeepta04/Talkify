import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Ensure SPA fallback
    middlewareMode: false,
  },
  preview: {
    // This tells the preview server to fallback to index.html
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist'
  }
})
