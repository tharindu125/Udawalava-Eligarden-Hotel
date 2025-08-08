import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import ssr from 'vite-plugin-ssr/plugin'

export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    ssr() // ✅ Add this line
  ]
})
