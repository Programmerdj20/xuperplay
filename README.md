# 🚀 XuperPlay - Plataforma de Streaming

Plataforma de streaming moderna construida con **Astro** y **Tailwind CSS**, inspirada en xupertv.com. Diseño responsive, componentes modulares y experiencia de usuario optimizada.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia con gradientes azul-púrpura
- 📱 **Totalmente Responsive**: Optimizado para todos los dispositivos
- ⚡ **Alto Rendimiento**: Generación estática con Astro para carga ultrarrápida
- 🎭 **Componentes Interactivos**:
  - Hero Carousel con navegación por teclado
  - FAQ Accordion expandible
  - Grid de características responsive
  - Sección de instalación con múltiples métodos
- 🎯 **TypeScript**: Type safety en todo el proyecto
- 🎨 **Tailwind CSS 4**: Framework de utilidades con tema personalizado
- 🔧 **Herramientas de Desarrollo**: ESLint, Prettier configurados

## 🏗️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) v5
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Lenguaje**: TypeScript (strictest)
- **Iconos**: [Lucide Icons](https://lucide.dev/)
- **Animaciones**: Motion (para futuras mejoras)

## 📁 Estructura del Proyecto

```
xuperplay/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── HeroCarousel.astro
│   │   ├── FeaturesGrid.astro
│   │   ├── InstallationSection.astro
│   │   ├── FAQAccordion.astro
│   │   └── Footer.astro
│   ├── layouts/             # Layouts de página
│   │   └── MainLayout.astro
│   ├── pages/               # Rutas de la aplicación
│   │   └── index.astro
│   └── styles/              # Estilos globales
│       └── global.css
├── public/                  # Archivos estáticos
├── astro.config.mjs         # Configuración de Astro
├── tailwind.config.mjs      # Configuración de Tailwind
└── tsconfig.json            # Configuración de TypeScript
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+
- npm, pnpm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Programmerdj20/xuperplay.git
cd xuperplay

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:4321`

## 📜 Scripts Disponibles

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo                 |
| `npm run build`           | Construye el sitio para producción              |
| `npm run preview`         | Previsualiza la build de producción             |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                    |

## 🎨 Componentes Principales

### Header
Navegación responsive con menú móvil hamburguesa, smooth scroll y sticky positioning.

### Hero Carousel
Slider interactivo con:
- 3 slides con transiciones suaves
- Navegación por flechas e indicadores
- Soporte para navegación por teclado
- Auto-play opcional

### Features Grid
Grid responsive de 9 características con iconos de Lucide, hover effects y diseño de tarjetas.

### Installation Section
Guía de instalación paso a paso para:
- Smart TV
- Android/iOS
- Android APK
- Firestick/Fire TV

### FAQ Accordion
Sistema de preguntas frecuentes con 8 items expandibles/colapsables.

### Footer
Footer completo con:
- Información de contacto
- Links organizados por categorías
- Redes sociales
- Copyright

## 🎨 Personalización

### Colores

Los colores principales se definen en `src/styles/global.css`:

```css
--color-primary-500: #3b82f6;
--color-secondary-500: #513ca4;
```

### Tipografía

Fuente: **Montserrat** (Google Fonts)

## 📦 Deployment

### Vercel (Recomendado)

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
# Subir el directorio ./dist/
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🙏 Agradecimientos

- Inspirado en [xupertv.com](https://www.xupertv.com/)
- Construido con [Astro](https://astro.build/)
- Estilos con [Tailwind CSS](https://tailwindcss.com/)
- Iconos de [Lucide](https://lucide.dev/)

---

**Desarrollado con ❤️ usando Claude Code**
