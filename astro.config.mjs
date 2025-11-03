// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Configuración de optimización de imágenes
  image: {
    // Formatos de salida para optimización
    formats: ['webp', 'avif'],
    // Calidad de compresión (0-100)
    quality: 85,
    // Dominios externos permitidos (si usas CDN)
    domains: [],
    remotePatterns: [],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
