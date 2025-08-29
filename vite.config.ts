import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ganti "COPB.github.io" dengan nama repo kamu
export default defineConfig({
  plugins: [react()],
  base: "/copb.github.io/",
})

