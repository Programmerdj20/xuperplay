// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Desactivar procesamiento de imágenes en desarrollo para mejorar performance
  // En producción se usará Sharp normalmente para optimización
  image: {
    service: passthroughImageService()
  },

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
