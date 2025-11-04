// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['lucide-astro'],
    },
    server: {
      fs: {
        strict: false,
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'lucide': ['lucide-astro'],
          },
        },
      },
    },
  },
  experimental: {
    optimizeHoistedScript: true,
  },
});
