# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

XuperPlay es una plataforma de streaming (landing page) construida con Astro v5 y Tailwind CSS v4. El sitio está en español y está inspirado en xupertv.com.

## Comandos

- `npm run dev` — Servidor de desarrollo (puerto 4321)
- `npm run build` — Build de producción (salida en `dist/`)
- `npm run preview` — Previsualizar build de producción
- `npx eslint .` — Lint (ESLint con plugin astro)
- `npx prettier --check .` — Verificar formato
- `npx prettier --write .` — Formatear código

No hay tests configurados en este proyecto.

## Arquitectura

Sitio estático generado con Astro (SSG). No usa framework de cliente (React, Vue, etc.). La interactividad se maneja con `<script>` tags vanilla JS dentro de los componentes `.astro`.

### Estructura clave

- `src/pages/` — Rutas: `index.astro` (home) y `instalacion.astro` (guía de instalación)
- `src/layouts/MainLayout.astro` — Layout principal con `<head>`, meta tags OG/Twitter, Google Fonts (Montserrat)
- `src/components/` — Componentes Astro: Header, HeroCarousel, FeaturesGrid, PricingSection, FAQAccordion, Footer, TrialModal, InstallationSection, OptimizedImage
- `src/components/icons/` — Iconos SVG inline como componentes Astro (migrados de lucide-astro por rendimiento)
- `src/styles/global.css` — Tema Tailwind CSS 4 con variables custom (`--color-primary-*`, `--color-secondary-*`)
- `src/assets/images/` — Imágenes procesadas por Astro (importar con `import` para optimización)
- `public/` — Archivos estáticos sin procesar (favicon, APK descargable)

### Convenciones

- **Iconos**: SVG inline como componentes `.astro` en `src/components/icons/`. No usar lucide-astro (eliminado por rendimiento).
- **Imágenes**: Importar desde `src/assets/images/` para que Astro las optimice. Usar `<Image>` de `astro:assets` en las páginas.
- **Estilos**: Tailwind CSS v4 con `@theme` en `global.css`. Clases utility inline. Gradiente principal: `gradient-primary` (azul a púrpura).
- **TypeScript**: Configuración `strict` extendida desde `astro/tsconfigs/strict`.
- **Formato**: Prettier con single quotes, semicolons, 2 espacios, plugin `prettier-plugin-astro`.
- **Imágenes en desarrollo**: `passthroughImageService()` desactiva el procesamiento de imágenes para mejor rendimiento en dev.
- **WhatsApp**: Los CTAs de contacto apuntan al número 573014034646 con mensajes predefinidos via `wa.me`.
