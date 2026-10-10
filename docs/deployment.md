# Publicar en Vercel

Lista de pasos para llevar el sitio a producción y revisarlo después. Marca cada casilla al terminar.

## 1. Orden de los pull requests

Cada rama entra a `dev` por su propio PR y en este orden. Antes de cada merge, revisa el preview de Vercel del PR.

- [ ] `chore/project-setup` → `dev`
- [ ] `feat/site-design` → `dev`
- [ ] `feat/seo-and-deploy` → `dev`. Si GitHub marca conflictos (lo más probable es en `src/app/[lang]/layout.tsx` y `src/app/[lang]/page.tsx`), actualiza la rama con `dev` y conserva los dos cambios: la tipografía y el diseño de `feat/site-design`, y los metadatos, `viewport` y datos estructurados de esta rama.
- [ ] `dev` → `main` **solo cuando no quede ningún `[PLACEHOLDER]`**. Mientras quede alguno, el build de producción falla a propósito. Para comprobarlo en local (en Git Bash):

  ```bash
  git grep -n "placeholderText(" -- src/content ":!src/content/placeholder.ts"   # no debe mostrar nada
  VERCEL_ENV=production npm run build                                            # debe terminar sin error
  ```

## 2. Proyecto en Vercel

- [ ] En [vercel.com/new](https://vercel.com/new), importa el repositorio `KevinGarabita/Portfolio` (dale acceso a la app de GitHub de Vercel solo a ese repositorio).
- [ ] **Framework Preset: elige "Next.js" a mano.** Hoy `main` solo tiene el README, así que Vercel detectaría "Other", y ese ajuste se aplica a todos los despliegues, también a los de las otras ramas.
- [ ] Root Directory: `./`. Comandos de build, instalación y salida: los que propone el preset, sin cambios.
- [ ] Node.js: 24.x. Vercel lo toma de `engines` en `package.json`; confírmalo en Settings → Build and Deployment.
- [ ] Rama de producción: `main` (en Settings → Environments → Production, o en Settings → Git).
- [ ] No hace falta `vercel.json`: el preset, `engines` y la configuración de dominios cubren todo lo que el sitio necesita (las redirecciones de idioma las hace `src/proxy.ts`).

Qué esperar:

- El primer despliegue se crea al importar, siempre es de **producción desde `main`**, y va a fallar o salir vacío mientras `main` solo tenga el README. Es normal; se corrige cuando `dev` llegue a `main`.
- Cada push a otra rama y cada PR crean un **preview** con su propia URL. Por defecto los protege Vercel Authentication (hay que iniciar sesión en Vercel para verlos) y Vercel les agrega `X-Robots-Tag: noindex`, así que Google no los indexa.

## 3. Plan: Hobby o Pro (lo decides tú)

- El plan Hobby es gratuito pero **solo para uso personal no comercial**. Vercel considera comercial, entre otros ejemplos, "anunciar la venta de un producto o servicio" ([Fair Use Guidelines](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage)).
- Como el sitio busca clientes freelance, lo seguro es **Pro** o pedir una confirmación por escrito al [soporte de Vercel](https://vercel.com/help) antes de quedarte en Hobby.

## 4. Variables de entorno

- [ ] En Settings → Environment Variables, solo para **Production**: `NEXT_PUBLIC_SITE_URL=https://garasoftware.com.mx` (o `https://www.garasoftware.com.mx` si eliges `www` como dominio principal en el paso 5). Sin `/` al final.
- [ ] Después de guardarla, **vuelve a desplegar** producción (Deployments → el último → Redeploy): el valor se lee al hacer el build.
- No la pongas en Preview: los previews usan el dominio de producción que da Vercel, así sus canonical apuntan a producción.
- Las variables `VERCEL_*` las define Vercel solo; deja marcada la opción "Enable access to System Environment Variables" (viene activada).
- Por qué hace falta aunque Vercel tenga un respaldo: con varios dominios, Vercel elige el **más corto**, que puede no ser el principal.

## 5. Dominio `garasoftware.com.mx`

Antes de tocar el DNS:

- [ ] Revisa si el dominio ya se usa para correo u otro sitio. Desde una terminal:

  ```bash
  nslookup -type=MX garasoftware.com.mx      # correo: si hay registros, NO los borres
  nslookup -type=TXT garasoftware.com.mx     # SPF y verificaciones: no los borres
  nslookup -type=A garasoftware.com.mx       # sitio actual en el dominio raíz
  nslookup -type=CNAME www.garasoftware.com.mx
  ```

En Vercel:

- [ ] Settings → Domains → agrega `garasoftware.com.mx` y `www.garasoftware.com.mx`.
- [ ] Elige **un solo dominio principal** y configura el otro para que redirija a él (308). El que elijas es el que va en `NEXT_PUBLIC_SITE_URL`.
- [ ] En el panel DNS de donde registraste el dominio, crea **exactamente** los registros que muestra Vercel: un registro `A` para el dominio raíz y un `CNAME` para `www`. Cambia solo esos dos; no cambies los nameservers ni los registros de correo.
- [ ] Espera a que Vercel marque los dos dominios como válidos y emita el certificado HTTPS (automático). Luego haz el paso 4.

## 6. Revisión después del despliegue

Con el dominio ya funcionando (sustituye por tu dominio principal):

- [ ] Encabezados y redirecciones:

  ```bash
  curl -I https://garasoftware.com.mx/                         # 308 a /en, con Cache-Control: private, no-store y Vary: Cookie
  curl -I -H "Cookie: preferred-locale=es" https://garasoftware.com.mx/   # 307 a /es, mismos encabezados
  curl -I https://garasoftware.com.mx/projects/field-report-manager       # 308 directo a /en/projects/field-report-manager
  curl -I https://garasoftware.com.mx/es/projects/                         # 308 a /es/projects (solo quita la barra)
  curl -I https://garasoftware.com.mx/projects/                # 308 directo a /en/projects, en un solo salto
  curl -I https://www.garasoftware.com.mx/                     # 308 al dominio principal (o al revés)
  curl -I https://garasoftware.com.mx/es                       # 200
  curl -I https://garasoftware.com.mx/es/projects/no-existe    # 404
  curl https://garasoftware.com.mx/robots.txt                  # Sitemap con la URL del dominio
  curl https://garasoftware.com.mx/sitemap.xml                 # URLs absolutas del dominio, sin localhost ni vercel.app
  ```

- [ ] Ver código fuente de `/es`, `/en` y un proyecto: `<title>`, `<meta name="description">`, `<link rel="canonical">`, los cinco `hreflang` (es, en, pt, fr, x-default), las etiquetas `og:*` y `twitter:*` (un solo `og:image`, con URL absoluta del dominio y un `og:image:alt` en el idioma de la página) y el bloque `application/ld+json` (en la home y en cada proyecto).
- [ ] [Rich Results Test](https://search.google.com/test/rich-results) y [Schema Markup Validator](https://validator.schema.org/) con la home: debe reconocer `ProfilePage` y `Person` sin errores. Con un proyecto: `BreadcrumbList` sin errores en el Rich Results Test, y `CreativeWork` sin errores en el Schema Markup Validator (no genera resultado enriquecido).
- [ ] Vista previa al compartir: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/), [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) y un mensaje de WhatsApp a ti mismo con la URL de la home y de un proyecto. Si cambias la imagen, los dos primeros permiten volver a leerla; WhatsApp guarda la vista previa un tiempo.
- [ ] Opcional: en [Google Search Console](https://search.google.com/search-console) agrega el dominio (verificación por registro TXT, sin tocar los demás registros) y envía `https://garasoftware.com.mx/sitemap.xml`.

## 7. Lighthouse

- [ ] Mídelo en el **dominio de producción** y en una ventana de incógnito (las extensiones del navegador bajan la puntuación). Chrome → DevTools → Lighthouse, en modo móvil y escritorio, para `/es`, `/en` y un proyecto.
- En los previews la puntuación de SEO no sirve: llevan `noindex` y piden iniciar sesión.

## 8. Dependencias al día

- [ ] Next.js anunció un parche de seguridad para el **14 de octubre de 2026** (2 vulnerabilidades críticas y 1 alta en dependencias). El 9 de octubre todavía no estaba publicado (la última versión era 16.4.0). Cuando salga, actualiza `next` y `eslint-config-next` **a la misma versión exacta**, en una rama propia:

  ```bash
  npm view next dist-tags                                   # busca la versión 16.4.x nueva en "latest"
  npm install --save-exact next@16.4.X eslint-config-next@16.4.X
  npm run check
  ```

  Después, PR a `dev`, revisar el preview y llevarlo a `main`. Hazlo antes de publicar o, si ya está publicado, cuanto antes.

- [ ] Cada mes: `npm outdated` y `npm audit`. Las alertas conocidas de `braces` solo afectan herramientas de desarrollo (ver [decisions.md](decisions.md#seguridad-de-dependencias)).
