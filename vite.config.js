import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { cpSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

const copyRecoveredMedia = () => ({
  name: 'copy-recovered-media',
  closeBundle() {
    cpSync(resolve('biem-dosyalar'), resolve('dist/biem-dosyalar'), { recursive: true })
  },
})

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    react(),
    copyRecoveredMedia(),
  ]
});
