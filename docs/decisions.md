# Decisiones técnicas

Cada decisión lleva su razón, para poder revisarla cuando cambien las herramientas. Versiones verificadas en npm el 9 de octubre de 2026.

## Versiones

- **Next.js 16.4.0, React 19.3.0, Tailwind CSS 4.3.3**: las últimas estables.
- **TypeScript 6.0**, no 7.0. La 7 ya salió, pero `typescript-eslint` (que usa el linter de Next) solo acepta versiones menores a 6.1.
- **ESLint 10**: la 9 dejó de tener soporte el 6 de agosto de 2026. Tres plugins que trae `eslint-config-next` todavía declaran ESLint 9 como máximo; los `overrides` de `package.json` les indican que usen el ESLint 10 del proyecto. Así la instalación queda sin avisos.
- **Node.js 24** (`engines` en `package.json`): es la LTS actual y la versión por defecto en Vercel.
- **Tailwind por PostCSS** (`@tailwindcss/postcss`): es la integración que documentan Tailwind y Next.js. `create-next-app` 16.4 usa en su lugar un loader de Turbopack que el changelog de Tailwind todavía lista como no publicado.

## Rutas bilingües

- Todas las páginas cuelgan de `app/[lang]`, así cada página tiene su `<html lang>` correcto y se genera como HTML estático para los dos idiomas.
- `proxy.ts` (antes `middleware.ts`) redirige `/` y cualquier ruta sin idioma según el encabezado `Accept-Language`, con código 307 y `Vary: Accept-Language`. Si el navegador no prefiere español ni inglés, se usa inglés.
- El idioma de la petición se lee con `next/root-params` en el layout, las páginas y las secciones. Los componentes pequeños de presentación (`FeaturedProjectCard`, `ProjectRow`, `ProjectFacts`, `ProjectStatus`) lo reciben por props junto con el diccionario, y el selector de idioma también, porque es un Client Component y no puede leer `next/root-params`.

## Páginas 404 y Cache Components

Lo probamos con builds reales y peticiones HTTP:

- Con **Cache Components** activado (la opción por defecto de `create-next-app` 16.4), la primera visita a un proyecto inexistente respondía **200** y las siguientes 404, y la página no traía contenido en el HTML. Además, con Cache Components no se puede usar `dynamicParams = false`.
- En Next.js 16.4, una página que llama a `notFound()` devuelve un "esqueleto de error" (`<html id="__next_error__">`) sin contenido ni `lang`; el texto solo aparece cuando corre JavaScript. Pasa incluso en una app mínima sin nada especial.

Por eso:

- **Cache Components queda desactivado.** El sitio es estático, así que no se pierde nada. Habrá que revisarlo con Next.js 17, que lo vuelve obligatorio.
- `dynamicParams = false` en `[lang]` y en `projects/[slug]`: cualquier idioma o proyecto que no esté en los datos no se renderiza.
- `app/global-not-found.tsx` (experimental, documentado para layouts raíz dinámicos como `[lang]`) responde todas las URL inexistentes con un 404 real del servidor, con contenido, `lang` y `noindex`. Como se renderiza fuera de `[lang]`, no sabe el idioma de la URL y muestra los dos.

## SEO y metadatos

- **Un solo helper para los metadatos de cada página** (`buildPageMetadata` en `src/lib/metadata.ts`). Next.js combina los metadatos de layout y página de forma superficial: si una página define `openGraph`, reemplaza todo el objeto del layout. Por eso cada página arma el conjunto completo (título, descripción, canonical, `hreflang`, Open Graph y tarjeta de X) en un solo lugar. No incluye `images`, para que Next.js use la imagen generada por `opengraph-image.tsx` y la copie a la tarjeta de X.
- **Descripciones solo con datos del CV.** La de la home combina rol, ubicación y stack (máximo 160 caracteres, en `src/content/site-metadata.ts`); la de cada proyecto es su `summary`. El título de la home lleva nombre y rol.
- **Imágenes para compartir en `app/[lang]/`**, no en `app/`: `proxy.ts` redirige cualquier ruta sin prefijo de idioma y sin extensión, y las imágenes generadas no tienen extensión (`/es/opengraph-image`). Cada archivo exporta su propio `generateStaticParams`, porque los route handlers no heredan los del layout; así se generan todas en el build.
- **Un `alt` para todos los idiomas.** Un `alt` por idioma exige `generateImageMetadata`, y lo probamos: con él, Next.js 16.4 no pregenera las imágenes que están bajo `[lang]` (la ruta queda sin rutas estáticas y, con `dynamicParams = false`, respondería 404). El `alt` es el nombre, que es lo único que se lee igual en los dos idiomas.
- **Imágenes sin foto.** Con la foto, el PNG pesaba entre 470 y 600 KB, y WhatsApp suele omitir la imagen de la vista previa cuando pasa de unos 300 KB. Solo con texto pesan unos 50 KB. Diseño plano: fondo tinta, texto claro y el bloque naranja del monograma.
- **Atkinson Hyperlegible Next en TTF** (`src/assets/fonts/`, licencia OFL incluida). `next/og` no lee woff2 ni fuentes variables, y Google Fonts solo publica la variable, así que los archivos estáticos vienen del repositorio oficial `googlefonts/atkinson-hyperlegible-next` (commit `7925f50`, el mismo que usa Google Fonts).
- **Sitemap sin `new Date()`.** La fecha de cada proyecto es su `lastUpdated`; la de la home, la más reciente entre `siteLastUpdated` y las de los proyectos. Con la fecha del build, cada despliegue diría que todo cambió. Sin `priority` ni `changefreq`: Google los ignora.
- **robots.txt permite todo.** No bloquea los previews porque Vercel ya les manda `X-Robots-Tag: noindex`.
- **Datos estructurados** en la home: un grafo con `WebSite`, la página como `ProfilePage` y Kevin como `Person` (nombre, nombre completo, rol, foto, correo y teléfono que Kevin aprobó publicar, dirección en Mérida, LinkedIn, GitHub, habilidades técnicas e idiomas). Universidad Modelo va en `affiliation` porque sigue estudiando; `alumniOf` es para estudios terminados, y el código lo cambia solo cuando la formación tenga fecha de fin. Sin `worksFor`: el trabajo en Kobler terminó. Se escribe con un `<script>` nativo y escapando `<`, como indica la guía de Next.js.
- **Íconos como archivos estáticos** en `app/` (`favicon.ico`, `icon.svg`, `apple-icon.png`): llevan extensión, así que el proxy no los redirige. El monograma "KG" usa los contornos de Atkinson Hyperlegible Next Bold para no depender de las fuentes instaladas. El `.ico` y el PNG se generaron una sola vez con `sharp` desde el SVG; no hay script ni dependencia nueva en el proyecto.
- **`themeColor`** igual al fondo de la página en cada tema (`#f9f7f5` y `#15110e`), para que la barra del navegador móvil no cambie de color.
- **Sin `vercel.json`**: el preset de Next.js, `engines` y la configuración de dominios de Vercel cubren todo. Pasos de publicación en [deployment.md](deployment.md).

## Agentes de IA

`next.config.ts` lleva `agentRules: false` y el proyecto se creó con `--no-agents-md --no-agent-feedback`. Sin eso, `next dev` escribe un `AGENTS.md` en la raíz cuando detecta un asistente de código.

## Seguridad de dependencias

- `npm audit` reporta 5 vulnerabilidades altas que son una sola cadena: `braces` (≤ 3.0.3), que usa el plugin de ESLint de Next a través de `micromatch` y `fast-glob`. Solo afecta herramientas de desarrollo, no el sitio publicado, y no existe versión corregida de `braces` (la última es la 3.0.3).
- Next.js anunció un parche de seguridad para el 14 de octubre de 2026. Hay que actualizar `next` y `eslint-config-next` antes de pasar a producción. Al 9 de octubre no había versión corregida (la última era 16.4.0); los pasos están en [deployment.md](deployment.md#8-dependencias-al-día).
