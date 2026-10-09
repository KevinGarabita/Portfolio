# Portafolio de Kevin Garabita

Sitio personal bilingüe (español e inglés) hecho con Next.js 16 (App Router), Tailwind CSS 4 y TypeScript. Se publica en Vercel.

## Requisitos

- Node.js 24 (LTS) y npm 12.

## Comandos

| Comando                | Qué hace                                                          |
| ---------------------- | ----------------------------------------------------------------- |
| `npm install`          | Instala las dependencias.                                         |
| `npm run dev`          | Servidor de desarrollo en http://localhost:3000.                  |
| `npm run build`        | Build de producción.                                              |
| `npm run start`        | Sirve el build de producción.                                     |
| `npm run lint`         | ESLint; falla con cualquier advertencia.                          |
| `npm run lint:fix`     | Corrige con ESLint lo que se pueda arreglar automáticamente.      |
| `npm run typecheck`    | Genera los tipos de rutas y revisa TypeScript.                    |
| `npm run format`       | Formatea el código con Prettier.                                  |
| `npm run format:check` | Revisa el formato sin modificar archivos.                         |
| `npm run check`        | Lint, typecheck, formato y build. Debe pasar antes de cada merge. |

## Variables de entorno

Copia `.env.example` a `.env.local` para desarrollo local. Solo hay que configurar una variable; las otras las define Vercel:

| Variable                        | Para qué sirve                                                                                                                               | Dónde configurarla                                                                 |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | URL base del sitio (`metadataBase`, imágenes para compartir, canonical, hreflang, sitemap, robots.txt y datos estructurados). Sin `/` final. | Vercel, entorno Production, con el dominio principal; después, volver a desplegar. |
| `VERCEL_PROJECT_PRODUCTION_URL` | Dominio de producción sin esquema; respaldo cuando `NEXT_PUBLIC_SITE_URL` está vacía.                                                        | Nadie: la define Vercel.                                                           |
| `VERCEL_ENV`                    | Entorno del despliegue. En producción el build falla si queda algún `[PLACEHOLDER]`.                                                         | Nadie: la define Vercel.                                                           |

Si está vacía, el sitio usa la URL de producción que expone Vercel o, en local, `http://localhost:3000`.

## Estructura

```
src/
  app/
    [lang]/              layout raíz por idioma (/es, /en), páginas e imágenes para compartir (opengraph-image)
    global-not-found.tsx 404 bilingüe para cualquier URL que no existe
    globals.css          Tailwind y tokens de diseño
    sitemap.ts           /sitemap.xml
    robots.ts            /robots.txt
    icon.svg             monograma KG (también apple-icon.png y favicon.ico)
  proxy.ts               redirige / y rutas sin idioma según el navegador
  assets/fonts/          Atkinson Hyperlegible Next (TTF y licencia OFL) para las imágenes para compartir
  components/
    layout/              header, footer, selector de idioma, enlace "saltar al contenido"
    sections/            secciones de la home
    projects/            tarjetas, galería, diagrama de flujo y piezas de los casos de estudio
    motion/              aparición al hacer scroll, título que rota y botón para pausar animaciones
    ui/                  piezas base: contenedor, sección, botón, etiqueta, íconos, monograma
    seo/                 datos estructurados (JSON-LD) y diseño de las imágenes para compartir
  content/               datos del sitio (perfil, proyectos, experiencia, formación, habilidades, textos SEO)
  i18n/                  idiomas, diccionarios de interfaz y negociación de idioma
  lib/                   utilidades: URL del sitio, metadatos, datos estructurados, fechas, proyectos, anclas de la home, WhatsApp, colores de marca, preferencias de movimiento
  types/                 tipos del contenido
public/cv/               CV descargable en español e inglés
public/images/           foto de perfil (original y recortada sin fondo para la portada) y capturas de proyectos
docs/                    decisiones técnicas y de diseño, guía de publicación
```

## Cómo agregar un proyecto

1. Crea un archivo en `src/content/projects/` y agrégalo al arreglo de `src/content/projects/index.ts` (el orden ahí es el del sitio). TypeScript te marca cualquier campo que falte (el tipo `Project` está en `src/types/content.ts`). `category` decide el grupo en la home ("freelance" o "kobler"); las capturas van en `public/images/projects/<slug>/` y en `images`, y los flujos de automatización en `flowDiagram`.
2. Escribe cada texto en los dos idiomas: `{ es: "...", en: "..." }`.
3. Pon en `lastUpdated` la fecha del cambio (`"AAAA-MM-DD"`); el sitemap la usa como fecha de modificación.
4. Corre `npm run check`.

No hace falta tocar componentes: la tarjeta en la home, la página `/[lang]/projects/[slug]`, su imagen para compartir y su entrada en el sitemap se generan desde los datos.

Si cambias el perfil, la experiencia, la formación o las habilidades, actualiza también `siteLastUpdated` en `src/content/site-metadata.ts`.

## SEO

- Título, descripción, canonical, `hreflang`, Open Graph y tarjeta de X de cada página salen de `buildPageMetadata` (`src/lib/metadata.ts`). La descripción de la home está en `src/content/site-metadata.ts`; la de cada proyecto es su `summary`.
- Las imágenes para compartir (1200×630) se generan en el build desde los datos, una por idioma y proyecto.
- La home lleva datos estructurados (`ProfilePage` y `Person`) armados en `src/lib/structured-data.ts`.

## Idiomas

- Las páginas viven en `/es/...` y `/en/...`. La raíz `/` y cualquier ruta sin idioma redirigen según el idioma del navegador; si no es español ni inglés, se usa inglés.
- Los textos de interfaz (botones, títulos de sección) están en `src/i18n/dictionaries/`.
- El contenido usa el tipo `LocalizedText`, que obliga a tener ambas versiones.

## Contenido pendiente

Los textos que todavía necesitan información real llevan la marca `[PLACEHOLDER]` y dicen qué falta. Ninguno puede llegar a producción: el build de producción en Vercel falla mientras quede alguno.

## Flujo de trabajo

- `main` es producción y `dev` la rama base.
- Cada cambio va en su propia rama desde `dev` (`feat/...`, `fix/...`, `chore/...`), con commits en formato Conventional Commits, y entra a `dev` por pull request con su preview de Vercel.

Las decisiones técnicas y sus razones están en [docs/decisions.md](docs/decisions.md). Los pasos para publicar en Vercel y conectar el dominio están en [docs/deployment.md](docs/deployment.md).
