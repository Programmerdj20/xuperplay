// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  site: 'https://xuperplay.com',
  integrations: [sitemap()],

  // Solo passthrough en dev, Sharp en producción
  image: isDev ? { service: passthroughImageService() } : {},

  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        strict: false,
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {},
        },
      },
    },
  },
});
