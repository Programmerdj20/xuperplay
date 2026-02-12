<div align="center">

# XuperPlay

**Plataforma de streaming con contenido ilimitado**

Sitio web oficial de XuperPlay: landing page, planes de suscripcion, guia de instalacion y checkout integrado con MercadoPago.

[![Astro](https://img.shields.io/badge/Astro-v5-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

[Ver sitio en vivo](https://xuperplay.com)

</div>

---

## Acerca del Proyecto

XuperPlay es una plataforma de entretenimiento que ofrece TV en vivo, peliculas, series, anime y contenido infantil en una sola app. Este repositorio contiene el sitio web oficial construido como sitio estatico con **Astro v5** y **Tailwind CSS v4**.

### Caracteristicas principales

- **Landing page** con hero carousel animado y secciones informativas
- **Planes y precios** con switch de moneda COP/USD y auto-deteccion por geolocalizacion
- **Checkout integrado** con MercadoPago para procesamiento de pagos
- **Guia de instalacion** con dispositivos compatibles y enlaces de descarga
- **FAQ interactivo** con acordeon animado
- **Diseno responsive** optimizado para movil, tablet y desktop
- **SEO optimizado** con meta tags Open Graph, Twitter Cards y sitemap automatico
- **Alto rendimiento** con iconos SVG inline, imagenes optimizadas y cero frameworks JS en el cliente

---

## Tecnologias

| Tecnologia | Version | Uso |
|---|---|---|
| [Astro](https://astro.build/) | v5 | Framework SSG |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Estilos utility-first |
| [TypeScript](https://www.typescriptlang.org/) | strict | Tipado estatico |
| [MercadoPago](https://www.mercadopago.com/) | SDK | Procesamiento de pagos |
| [Vercel](https://vercel.com/) | - | Hosting y deploy automatico |

---

## Estructura del Proyecto

```
xuperplay/
├── public/                        # Archivos estaticos (favicon, APK, robots.txt)
│   └── downloads/                 # Archivos descargables
├── src/
│   ├── assets/images/             # Imagenes optimizadas por Astro
│   │   ├── hero/                  # Imagenes del carousel principal
│   │   ├── logos/                 # Logo de XuperPlay
│   │   └── Dispositivos/         # Imagenes de dispositivos compatibles
│   ├── components/                # Componentes Astro
│   │   ├── Header.astro           # Navegacion con menu movil animado
│   │   ├── HeroCarousel.astro     # Carousel hero con slides
│   │   ├── FeaturesGrid.astro     # Grid de caracteristicas
│   │   ├── PricingSection.astro   # Planes con switch COP/USD
│   │   ├── FAQAccordion.astro     # Preguntas frecuentes
│   │   ├── TrustBadges.astro      # Insignias de confianza
│   │   ├── TrialModal.astro       # Modal de prueba gratuita
│   │   ├── Footer.astro           # Pie de pagina
│   │   └── icons/                 # 26 iconos SVG como componentes
│   ├── layouts/
│   │   └── MainLayout.astro       # Layout principal con head y meta tags
│   ├── pages/
│   │   ├── index.astro            # Pagina de inicio
│   │   ├── instalacion.astro      # Guia de instalacion
│   │   └── pago.astro             # Checkout con MercadoPago
│   └── styles/
│       └── global.css             # Tema Tailwind CSS v4 con variables custom
├── astro.config.mjs               # Configuracion de Astro
├── tsconfig.json                  # TypeScript strict
└── package.json
```

---

## Inicio Rapido

### Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm

### Instalacion

```bash
# Clonar el repositorio
git clone https://github.com/Programmerdj20/xuperplay.git
cd xuperplay

# Instalar dependencias
npm install
```

### Variables de entorno

Crea un archivo `.env` en la raiz del proyecto:

```env
PUBLIC_MP_PUBLIC_KEY=tu_public_key_de_mercadopago
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo en http://localhost:4321
npm run dev
```

### Build de produccion

```bash
# Generar sitio estatico en dist/
npm run build

# Previsualizar build
npm run preview
```

---

## Scripts Disponibles

| Comando | Accion |
|---|---|
| `npm run dev` | Servidor de desarrollo (puerto 4321) |
| `npm run build` | Build de produccion en `dist/` |
| `npm run preview` | Previsualizar build de produccion |
| `npx eslint .` | Verificar errores de lint |
| `npx prettier --check .` | Verificar formato de codigo |
| `npx prettier --write .` | Formatear codigo automaticamente |

---

## Paginas

| Ruta | Descripcion |
|---|---|
| `/` | Landing page con hero, caracteristicas, planes, FAQ y contacto |
| `/instalacion` | Guia de instalacion con dispositivos compatibles y descargas |
| `/pago` | Checkout con integracion MercadoPago por plan seleccionado |

---

## Deploy

El proyecto usa **Vercel** con deploy automatico. Cada push a `main` genera un nuevo deploy en produccion.

| Entorno | URL |
|---|---|
| Produccion | [xuperplay.com](https://xuperplay.com) |

---

## Convenciones de Codigo

- **Iconos**: SVG inline como componentes `.astro` en `src/components/icons/`
- **Imagenes**: Importar desde `src/assets/images/` y usar `<Image>` de `astro:assets`
- **Estilos**: Clases utility de Tailwind CSS v4 inline, tema con `@theme` en `global.css`
- **Interactividad**: Vanilla JS en tags `<script>` dentro de componentes Astro
- **Formato**: Prettier con single quotes, semicolons, 2 espacios

---

## Paleta de Colores

| Color | Hex | Uso |
|---|---|---|
| Primary 500 | `#3b82f6` | Botones, enlaces, acentos |
| Primary 600 | `#2563eb` | Hover, elementos activos |
| Secondary 500 | `#513ca4` | Gradientes, acentos secundarios |
| Secondary 600 | `#4c1d95` | Fondos oscuros |

**Gradiente principal**: azul a purpura (135deg) — clase `gradient-primary`

**Fuente**: [Montserrat](https://fonts.google.com/specimen/Montserrat)

---

## Dispositivos Compatibles

La app XuperPlay funciona en los siguientes dispositivos Android:

| Dispositivo | Compatible |
|---|---|
| Android TV Box | Si |
| Smart TV con Android TV | Si |
| Amazon Fire TV Stick | Si |
| Xiaomi Mi TV Stick | Si |
| Celular Android | Si |
| Tableta Android | Si |
| Google Chromecast 4 | Si |
| PC (con emulador) | Si |
| Roku | No |

---

<div align="center">

Desarrollado con [Astro](https://astro.build/) y [Tailwind CSS](https://tailwindcss.com/) | Deploy en [Vercel](https://vercel.com/)

**XuperPlay** — Tu app de entretenimiento sin limites.

</div>
