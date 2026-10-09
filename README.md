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
| `npm run typecheck`    | Genera los tipos de rutas y revisa TypeScript.                    |
| `npm run format`       | Formatea el código con Prettier.                                  |
| `npm run format:check` | Revisa el formato sin modificar archivos.                         |
| `npm run check`        | Lint, typecheck, formato y build. Debe pasar antes de cada merge. |

## Variables de entorno

Copia `.env.example` a `.env.local` para desarrollo local. La única variable es:

| Variable               | Para qué sirve                                                                                          | Dónde configurarla                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | URL base del sitio (`metadataBase`, canonical, hreflang, sitemap y datos estructurados). Sin `/` final. | Vercel, entorno Production, cuando haya dominio. |

Si está vacía, el sitio usa la URL de producción que expone Vercel o, en local, `http://localhost:3000`.

## Estructura

```
src/
  app/
    [lang]/              layout raíz por idioma (/es, /en) y páginas
    global-not-found.tsx 404 bilingüe para cualquier URL que no existe
    globals.css          Tailwind y tokens de diseño
  proxy.ts               redirige / y rutas sin idioma según el navegador
  components/
    layout/              header, footer, selector de idioma, enlace "saltar al contenido"
    sections/            secciones de la home
    projects/            piezas de los casos de estudio
  content/               datos del sitio (perfil, proyectos, experiencia, formación, habilidades)
  i18n/                  idiomas, diccionarios de interfaz y negociación de idioma
  lib/                   utilidades: URL del sitio, metadatos, fechas, consultas de proyectos
  types/                 tipos del contenido
public/cv/               CV descargable en español e inglés
docs/                    decisiones técnicas y de diseño
```

## Cómo agregar un proyecto

1. Agrega un objeto al arreglo de `src/content/projects.ts`. TypeScript te marca cualquier campo que falte (el tipo `Project` está en `src/types/content.ts`).
2. Escribe cada texto en los dos idiomas: `{ es: "...", en: "..." }`.
3. Corre `npm run check`.

No hace falta tocar componentes: la tarjeta en la home y la página `/[lang]/projects/[slug]` se generan desde los datos.

## Idiomas

- Las páginas viven en `/es/...` y `/en/...`. La raíz `/` y cualquier ruta sin idioma redirigen según el idioma del navegador; si no es español ni inglés, se usa inglés.
- Los textos de interfaz (botones, títulos de sección) están en `src/i18n/dictionaries/`.
- El contenido usa el tipo `LocalizedText`, que obliga a tener ambas versiones.

## Contenido pendiente

Los textos que todavía necesitan información real llevan la marca `[PLACEHOLDER]` y dicen qué falta. Ninguno debe llegar a producción: búscalos antes de publicar.

## Flujo de trabajo

- `main` es producción y `dev` la rama base.
- Cada cambio va en su propia rama desde `dev` (`feat/...`, `fix/...`, `chore/...`), con commits en formato Conventional Commits, y entra a `dev` por pull request con su preview de Vercel.

Las decisiones técnicas y sus razones están en [docs/decisions.md](docs/decisions.md).
