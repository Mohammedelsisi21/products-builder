import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tailwindcss } from '@tailwindcss/vite'
import { imagetools } from "vite-imagetools"
import { visualizer } from "rollup-plugin-visualizer";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    imagetools(),
    visualizer({open: true})
  ],
})
