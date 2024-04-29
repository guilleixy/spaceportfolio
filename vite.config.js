import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    //esto hay que quitarlo para que run dev funcione
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          reactRouter: ['react-router-dom'],
          reactSpringThree: ['@react-spring/three'],
          reactThreeDrei: ['@react-three/drei'],
          reactThreeFiber: ['@react-three/fiber'],
          emailjs: ['@emailjs/browser'],
          reactHelmet: ['react-helmet'],
          reactTooltip: ['react-tooltip'],
          reactVerticalTimelineComponent: ['react-vertical-timeline-component'],
        },
      },
    },
  },
  assetsInclude: ['**/*.glb'],
  optimizeDeps: {
    exclude: ['']
  },
  base: '/',
})
