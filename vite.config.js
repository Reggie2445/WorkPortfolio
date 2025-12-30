import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  server: {
    proxy: {
      '/chat': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});
