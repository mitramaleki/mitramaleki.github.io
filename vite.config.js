import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // For GitHub Pages user site
  optimizeDeps: {
    exclude: ['three'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          'three-examples': ['@react-three/fiber', '@react-three/drei'],
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});