import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PROJECT1/', // must match repo name exactly (case-sensitive)
})
