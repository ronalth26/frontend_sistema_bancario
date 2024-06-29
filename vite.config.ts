import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Especifica el puerto aquí
    proxy: {
      '/banco1': {
        target: 'http://banco1:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/banco1/, ''),
      },
      '/banco2': {
        target: 'http://banco2:8082',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/banco2/, ''),
      },
      '/banco3': {
        target: 'http://banco3:8083',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/banco3/, ''),
      },
      '/api.gateway': {
        target: 'http://api.gateway:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api.gateway/, ''),
      },
    },
  },
});
