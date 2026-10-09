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
- El idioma de la petición se lee con `next/root-params`, sin pasarlo de componente en componente.

## Páginas 404 y Cache Components

Lo probamos con builds reales y peticiones HTTP:

- Con **Cache Components** activado (la opción por defecto de `create-next-app` 16.4), la primera visita a un proyecto inexistente respondía **200** y las siguientes 404, y la página no traía contenido en el HTML. Además, con Cache Components no se puede usar `dynamicParams = false`.
- En Next.js 16.4, una página que llama a `notFound()` devuelve un "esqueleto de error" (`<html id="__next_error__">`) sin contenido ni `lang`; el texto solo aparece cuando corre JavaScript. Pasa incluso en una app mínima sin nada especial.

Por eso:

- **Cache Components queda desactivado.** El sitio es estático, así que no se pierde nada. Habrá que revisarlo con Next.js 17, que lo vuelve obligatorio.
- `dynamicParams = false` en `[lang]` y en `projects/[slug]`: cualquier idioma o proyecto que no esté en los datos no se renderiza.
- `app/global-not-found.tsx` (experimental, documentado para layouts raíz dinámicos como `[lang]`) responde todas las URL inexistentes con un 404 real del servidor, con contenido, `lang` y `noindex`. Como se renderiza fuera de `[lang]`, no sabe el idioma de la URL y muestra los dos.

## Agentes de IA

`next.config.ts` lleva `agentRules: false` y el proyecto se creó con `--no-agents-md --no-agent-feedback`. Sin eso, `next dev` escribe un `AGENTS.md` en la raíz cuando detecta un asistente de código.

## Seguridad de dependencias

- `npm audit` reporta 5 vulnerabilidades altas que son una sola cadena: `braces` (≤ 3.0.3), que usa el plugin de ESLint de Next a través de `micromatch` y `fast-glob`. Solo afecta herramientas de desarrollo, no el sitio publicado, y no existe versión corregida de `braces` (la última es la 3.0.3).
- Next.js anunció un parche de seguridad para el 14 de octubre de 2026. Hay que actualizar `next` y `eslint-config-next` antes de pasar a producción.
