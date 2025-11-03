# 📁 Sistema de Imágenes de XuperPlay

Esta carpeta contiene todas las imágenes del proyecto que serán **optimizadas automáticamente** por Astro durante el build.

## 🗂️ Estructura de Carpetas

```
src/assets/images/
├── hero/           # Imágenes del carrusel principal
├── logos/          # Logos y elementos de marca
└── README.md       # Este archivo
```

## 📋 Guía de Uso

### 1. Agregar una Imagen

Coloca tu imagen en la carpeta correspondiente:
```bash
# Ejemplo: agregar imagen del hero
cp mi-imagen.jpg src/assets/images/hero/slide-1.jpg
```

### 2. Importar en un Componente Astro

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero/slide-1.jpg';
---

<Image
  src={heroImage}
  alt="Descripción de la imagen"
  width={1920}
  height={1080}
/>
```

### 3. Usar el Componente Optimizado (Recomendado)

```astro
---
import OptimizedImage from '../components/OptimizedImage.astro';
import heroImage from '../assets/images/hero/slide-1.jpg';
---

<OptimizedImage
  src={heroImage}
  alt="Descripción de la imagen"
  width={1920}
  height={1080}
/>
```

## ✅ Formatos Soportados

- **JPG/JPEG** - Ideal para fotografías
- **PNG** - Ideal para gráficos con transparencia
- **WebP** - Formato moderno optimizado
- **SVG** - Ideal para logos e iconos vectoriales

> **Nota:** Astro convierte automáticamente JPG/PNG a WebP y AVIF para mejor rendimiento.

## 📐 Tamaños Recomendados

### Hero Carousel
- **Tamaño:** 1920x1080px (Full HD)
- **Formato:** JPG o WebP
- **Peso máximo:** 500KB (antes de optimización)

### Logos
- **Tamaño:** Variable según necesidad
- **Formato:** SVG (preferido) o PNG con transparencia
- **Peso máximo:** 100KB

## 🚀 Optimización Automática

El sistema aplica automáticamente:

✅ **Conversión a WebP/AVIF** - Formatos modernos más ligeros
✅ **Compresión inteligente** - Calidad 85% por defecto
✅ **Lazy loading** - Carga diferida de imágenes
✅ **Responsive images** - Múltiples tamaños para diferentes dispositivos
✅ **Cache eficiente** - Las imágenes optimizadas se cachean

## 🎯 Ejemplo Completo: Hero Carousel

1. **Agregar tus 3 imágenes:**
   ```bash
   src/assets/images/hero/
   ├── slide-1.jpg
   ├── slide-2.jpg
   └── slide-3.jpg
   ```

2. **Editar `HeroCarousel.astro`:**
   ```astro
   ---
   // Descomentar estas líneas (están en la línea 11-13):
   import slide1Image from '../assets/images/hero/slide-1.jpg';
   import slide2Image from '../assets/images/hero/slide-2.jpg';
   import slide3Image from '../assets/images/hero/slide-3.jpg';

   const slides = [
     {
       // ...
       image: slide1Image, // Descomentar (línea 21)
     },
     {
       // ...
       image: slide2Image, // Descomentar (línea 29)
     },
     {
       // ...
       image: slide3Image, // Descomentar (línea 37)
     },
   ];
   ---
   ```

3. **¡Listo!** Las imágenes se mostrarán automáticamente optimizadas.

## 🔧 Configuración Avanzada

La configuración de optimización está en `astro.config.mjs`:

```javascript
image: {
  formats: ['webp', 'avif'],  // Formatos de salida
  quality: 85,                 // Calidad de compresión
  domains: [],                 // Dominios externos permitidos
}
```

## 💡 Tips y Mejores Prácticas

1. **Usa imágenes de alta calidad** - Astro las optimizará automáticamente
2. **Proporciona texto alternativo** - Importante para SEO y accesibilidad
3. **Usa `loading="eager"` solo para imágenes above-the-fold** - El resto debe usar lazy loading
4. **Prefiere SVG para logos** - Son vectoriales y escalables sin pérdida
5. **Comprime antes de subir** - Usa herramientas como TinyPNG para reducir peso inicial

## 📚 Recursos

- [Documentación de Astro Images](https://docs.astro.build/en/guides/images/)
- [Componente Image](https://docs.astro.build/en/guides/images/#image--astroassets)
- [Optimización Web](https://web.dev/fast/#optimize-your-images)

---

**Última actualización:** 2025-11-03
