# Groove System

Sitio web de **Groove System**: desarrollamos páginas web, tiendas online y sistemas a medida para pymes y comercios.

El sitio presenta los servicios, los casos de proyectos realizados, las preguntas frecuentes y los canales de contacto (Instagram y mail).

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com), con modo claro y oscuro vía [next-themes](https://github.com/pacocoursey/next-themes)
- Tipografías Unbounded (títulos) y DM Sans (texto) con `next/font`
- Íconos de [lucide-react](https://lucide.dev)
- [Vercel Analytics](https://vercel.com/docs/analytics)

## Puesta en marcha

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:3000
npm run build    # build de producción
npm run start    # sirve el build
npm run lint     # ESLint
```

### Variables de entorno

| Variable               | Uso                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (por ejemplo `https://tu-dominio.com`). Se usa en metadata, Open Graph, `sitemap.xml` y `robots.txt`. Si no está definida, se usa `http://localhost:3000`. |

En producción hay que configurarla en Vercel; si no, el sitemap y las imágenes para redes apuntan a `localhost`.

## Páginas

| Ruta                    | Contenido                                                                 |
| ----------------------- | ------------------------------------------------------------------------- |
| `/`                     | Hero, servicios, proyectos destacados y contacto                          |
| `/proyectos`            | Todos los proyectos, con filtro por categoría                             |
| `/proyectos/[slug]`     | Caso de cada proyecto: ficha, desafío, solución, stack, resultados y galería |
| `/preguntas-frecuentes` | Preguntas frecuentes en acordeones                                        |
| `/sitemap.xml`, `/robots.txt` | Generados a partir de las rutas y de `data/projects.ts`              |

También hay una página 404 propia (`app/not-found.tsx`) e imágenes Open Graph generadas para el sitio y para cada caso.

## Estructura

```
app/                 Rutas, layout, metadata, sitemap, robots e imágenes Open Graph
components/          Componentes de la interfaz (header, footer, botones de contacto, galería, etc.)
data/
  projects.ts        Proyectos y casos
  faqs.ts            Preguntas frecuentes
lib/
  site.ts            URL, nombre y descripción del sitio; helper de metadata para redes
  og.tsx             Base compartida de las imágenes Open Graph
assets/fonts/        Tipografías en TTF para las imágenes Open Graph
public/
  proyectos/<slug>/  Capturas de cada proyecto (.webp)
```

## Cómo actualizar el contenido

### Agregar un proyecto

1. Copiá las capturas a `public/proyectos/<carpeta>/` en formato `.webp`.
2. Agregá un objeto al array `projects` en `data/projects.ts` con, al menos: `slug`, `title`, `category` (`"Tienda online"`, `"Sistema"` o `"Landing"`), `summary`, `tags`, `featured`, `cover` e `images`.
3. Opcionalmente completá `overview`, `challenge`, `solutionIntro`, `solution`, `stack`, `results` y `url`. Las secciones del caso solo se muestran si tienen datos.

Detalles de la ficha del proyecto:

- El indicador verde junto al estado aparece solo cuando `overview.status` es `"Online"`.
- La fila "Sitio" y el botón "Visitar sitio" aparecen solo si el proyecto tiene `url`.
- Los proyectos con `featured: true` se muestran en el inicio (hasta 3).

La página del caso, su imagen Open Graph y su entrada en el sitemap se generan automáticamente.

### Editar las preguntas frecuentes

Las preguntas y respuestas están en `data/faqs.ts`.

### Datos de contacto

El usuario y el perfil de Instagram y el mail de contacto están en `components/contact.tsx` (`INSTAGRAM_USER`, `INSTAGRAM_PROFILE`, `CONTACT_EMAIL`). Los botones de Instagram abren el perfil en una pestaña nueva; los de mail abren un menú para copiar la dirección, escribir desde Gmail o abrir la app de correo.

## Estilo

Los colores de la marca están definidos como tokens en `app/globals.css` (fondo, tarjetas, verde esmeralda, fucsia y púrpura), con sus valores para modo claro y oscuro. La estética se basa en bordes marcados, sombras duras desplazadas y la cuadrícula de fondo; los estilos compartidos (botones, secciones, etiquetas) están en `components/ui.tsx`.

## Deploy

El sitio está pensado para publicarse en [Vercel](https://vercel.com): importá el repositorio, configurá `NEXT_PUBLIC_SITE_URL` y cada push a la rama principal genera un nuevo deploy. Vercel Analytics se activa desde el panel del proyecto.
