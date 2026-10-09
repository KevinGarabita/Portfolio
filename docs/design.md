# Decisiones de diseño

Los tokens viven en `src/app/globals.css`. Este documento explica para qué sirve cada uno y por qué se eligió así.

> **Rediseño de octubre de 2026.** A pedido de Kevin, el sitio cambió a una identidad oscura con naranja, negro y rojo, con degradados moderados, animaciones de entrada y aparición al hacer scroll. Esto **reemplaza** las decisiones anteriores de "sin degradados, brillos ni sombras de color" y "sin aparición al hacer scroll", y el tema claro, que ya no existe.

## Principios

- **Un solo tema oscuro.** Fondo negro profundo, superficies un poco más claras y texto blanco cálido. No hay tema claro ni variantes `dark:`.
- **El naranja trabaja**: relleno del botón principal, enlaces, foco, números de sección, fechas y etiqueta "En producción". El rojo solo acompaña en degradados, bordes, brillos y texto grande.
- **Degradados con moderación**: anillos de botones y tarjetas, líneas de sección, el círculo de la portada, el monograma y el número del 404. Nunca como fondo de un bloque de texto.
- **El movimiento confirma, no distrae**: solo se animan `transform` y `opacity`, nada mueve el layout, y todo se apaga con "reducir movimiento" del sistema.
- **La paleta de fábrica de Tailwind está desactivada** (`--color-*: initial`), igual que la escala de texto, radios y sombras: solo existen los tokens del proyecto. Los componentes no llevan colores sueltos; donde CSS no llega (imágenes para compartir, `themeColor`) se usa `src/lib/brand-colors.ts`, copia de la paleta cruda.

## Colores

### Paleta cruda

| Token                  | Valor     | Uso                                      |
| ---------------------- | --------- | ---------------------------------------- |
| `black-deep`           | `#0a0a0a` | Fondo de la página                       |
| `black-surface`        | `#141414` | Tarjetas y paneles                       |
| `black-surface-strong` | `#1c1c1c` | Paneles elevados, hover, fondo de medios |
| `black-line`           | `#2a2a2a` | Divisores y bordes decorativos           |
| `gray-control`         | `#737373` | Bordes de controles                      |
| `gray-text`            | `#a3a3a3` | Texto secundario                         |
| `white-warm`           | `#f5f5f5` | Texto y títulos                          |
| `orange-vibrant`       | `#ff6a00` | Acento principal                         |
| `orange-light`         | `#ff8a3d` | Hover del relleno naranja                |
| `red-signal`           | `#e5252a` | Acento secundario (decoración)           |

### Roles

Los componentes usan los nombres de función, nunca los colores crudos: `page`, `raised`, `raised-strong`, `body`, `heading`, `muted`, `hairline`, `control-border`, `accent`, `accent-hover`, `accent-secondary`, `on-accent`, `link` y `focus`.

### Contraste medido (WCAG 2.x)

- Texto `#f5f5f5` sobre la página: 18.15:1. Texto secundario `#a3a3a3`: 7.84:1.
- Naranja como texto sobre la página: 6.89:1. Texto negro sobre el naranja: 6.89:1 (por eso los botones naranjas llevan texto negro; el blanco sobre naranja da 2.63:1 y no pasa).
- **Rojo `#e5252a`: 4.36:1** sobre la página y con texto negro o blanco encima. No alcanza 4.5:1, así que **nunca es texto pequeño**: solo degradados, bordes, brillos, hover y texto grande (24 px o más, o 18.66 px en negritas). El título que rota y el "404" usan el degradado porque son texto grande.
- Los brillos naranjas y rojos del fondo no pasan de 16 % de opacidad, así que el texto encima conserva su contraste.
- Bordes de controles (`#737373`, 4.17:1) y anillo de foco naranja: 3:1 o más.

### Degradados

- `--gradient-brand` (horizontal) y `--gradient-brand-diagonal` (135°), de naranja a rojo.
- Se usan en: anillo del botón secundario y de las tarjetas al pasar el cursor (`.gradient-ring`), línea junto al título de cada sección, círculo y anillo de la portada, monograma, número del 404, conectores del diagrama de flujo y la línea de tiempo de experiencia.
- Texto con degradado (`.text-gradient-brand`) solo en texto grande.

## Tipografía

- Escala fluida de 360 a 1440 px de ancho: `text-small` (14→15 px), `text-base` (16→18), `text-subtitle` (19→24), `text-title` (26→40), `text-headline` (32→64), `text-display` (40→100) y `text-giant` (96→224, solo el 404).
- `text-display` es para el título que rota en la portada; `text-headline` para títulos de sección y de caso de estudio.
- **Atkinson Hyperlegible Next** para texto y títulos, elegida por Kevin; los títulos se distinguen por tamaño y peso. La monoespaciada del sistema (`font-mono`) marca números de sección, fechas y herramientas.
- Riesgo conocido: Next 16.4 no tiene las métricas de respaldo de esta fuente (`adjustFontFallback: false` en `src/app/fonts.ts`), así que el texto puede moverse un poco cuando la fuente termina de cargar.

## Composición

- **Encabezado fijo** (`position: sticky`): monograma y nombre, enlaces de sección, botón de WhatsApp e idioma. Arriba de todo es transparente; al bajar aparecen un fondo desenfocado, una línea fina y el monograma se achica un poco (solo `opacity` y `transform`, así que la página no se mueve). Sin JavaScript se queda en su estado sólido. Debajo de `lg` ocupa dos filas; su altura está en `--header-height` y `scroll-padding-top` la usa para que las anclas y el foco no queden tapados (WCAG 2.4.11).
- **Portada**: en pantallas grandes ocupa el alto de la ventana. Texto a la izquierda: ubicación, el nombre, el título que rota ("Software Engineer" ↔ "Automation Engineer"), el subtítulo y dos botones ("Ver proyectos" y "Escríbeme por WhatsApp"); debajo, CV, LinkedIn y GitHub. A la derecha, la foto recortada delante de un círculo con el degradado: los rizos pasan por encima del borde del círculo, lo que da profundidad. Alrededor, un anillo en órbita y tres etiquetas flotantes (FastAPI, n8n, OpenAI API). En teléfono la foto va arriba, más chica.
- **El `h1`** de la portada lleva el nombre y los dos títulos como texto fijo para lectores de pantalla; el título animado es solo visual (`aria-hidden`) y no anuncia nada al cambiar.
- **Secciones**: número en naranja, título grande y una línea con el degradado hasta el borde derecho; el contenido va debajo a todo el ancho.
- **Proyectos (home)**: solo los destacados (`isFeatured`), en columnas (1 en teléfono, 2 desde `sm`, 3 desde `lg`), y el botón "Ver todos los proyectos (N)". La imagen es la primera captura; sin capturas, se muestran las herramientas del flujo o un ícono, nunca una captura inventada. El nombre es el único enlace y cubre toda la tarjeta. Los proyectos hechos con vibe coding llevan la etiqueta "Vibe coded" (`buildMethod`).
- **Página de proyectos (`/[lang]/projects`)**: todos los proyectos en una sola cuadrícula, sin grupos. Arriba, una fila de filtros en píldoras: "Tipo" y "Tecnología" abren una lista (una opción a la vez, el botón muestra lo elegido), "Vibe coded" se activa con un clic, y a la derecha el número de resultados (anunciado a lectores de pantalla). Las tecnologías del filtro son las que usan al menos dos proyectos. "Proyectos" del menú y "Volver a proyectos" llevan aquí.
- **Caso de estudio**: categoría y estado sobre el título, panel de datos clave, galería de capturas, puntos clave, el flujo de la automatización (pasos numerados, vertical en teléfono y en una fila desde `lg`), la historia (problema, solución, decisiones, fallas, rol, resultados, siguientes pasos), enlaces públicos, la nota de confidencialidad con correo y WhatsApp, y el proyecto anterior y siguiente.
- **Galería**: todas las capturas están en la página como miniaturas (la primera de escritorio a todo el ancho), así que nada depende de JavaScript. Cada miniatura abre una vista grande en un `<dialog>` nativo: Escape y el botón cierran, las flechas cambian de imagen, la posición se anuncia con cortesía y el foco vuelve a la miniatura.
- **Contacto**: un panel con el anillo de degradado: el correo en grande, botones de WhatsApp y correo, y los demás datos en una cuadrícula.
- **WhatsApp** está en el encabezado, en la portada, en el contacto, en el pie y junto a la nota de confidencialidad de cada caso de estudio. Los enlaces que abren otra pestaña lo dicen a los lectores de pantalla.

## Radios, sombras y capas

- Radios por función: `rounded-section` (20 px) para tarjetas y paneles, `rounded-media` (14 px) para imágenes, `rounded-control` (12 px) para botones y etiquetas de tecnología, `rounded-tag` (píldora) para estados.
- Brillos: `--glow-accent` y `--glow-accent-soft`. Se muestran con una capa que aparece con `opacity` (`.hover-glow`); la sombra en sí nunca se anima.
- Capas (`--layer-*`): fondo animado (-1), elementos elevados (1), encabezado (40) y enlace "saltar al contenido" (60).

## Movimiento

Tokens: `--ease-standard`, `--ease-emphasized`, `--duration-quick` (160 ms), `--duration-moderate` (320 ms), `--duration-slow` (700 ms), `--duration-title-fade` (550 ms) y `--stagger-step` (90 ms).

- **Entrada de la portada**: los elementos suben y aparecen en cascada (`.entrance` con `--entrance-order`). La foto es el elemento LCP: se precarga y **nunca empieza invisible**; solo sube un poco (`.entrance-lift`, solo `transform`). El círculo y el anillo sí aparecen con `opacity`.
- **Título que rota** cada 3 s con un fundido y una subida corta. Todos los títulos ocupan la misma celda de la cuadrícula, así que la caja mide siempre lo del más largo y nada se mueve (medido: alto y ancho constantes, CLS 0).
- **Aparición al hacer scroll**: títulos de sección, contenido, tarjetas y partes del caso de estudio suben y aparecen al entrar en pantalla (`data-reveal`, `src/components/motion/page-motion.tsx`, con `IntersectionObserver`). Es mejora progresiva: el HTML trae todo visible; el script primero marca lo que ya está en pantalla y solo después agrega `.js-reveal-ready` a `<html>`, que es lo que permite ocultar el resto. Sin JavaScript, nada se oculta; lo que está arriba del pliegue nunca empieza oculto.
- **Hover**: tarjetas y botones suben unos píxeles, aparece el anillo de degradado y un brillo naranja; la imagen de la tarjeta se acerca un poco y la flecha avanza. Lo mismo con el foco del teclado (`:focus-within`).
- **Fondo**: una capa fija con dos brillos (naranja y rojo) que se desplazan muy despacio (36 s), más una cuadrícula tenue detrás de la portada. Es una sola capa que solo se mueve con `transform`; sin canvas ni bucles de JavaScript.
- **`prefers-reduced-motion: reduce`**: el título se queda en el primero, no hay aparición al hacer scroll, el fondo, la órbita y las etiquetas no se mueven, las transiciones son instantáneas y el desplazamiento suave se apaga. (El botón "Pausar animaciones" se quitó a pedido de Kevin; esta preferencia del sistema es ahora la única forma de detener el movimiento.)

## Foco y accesibilidad

- Foco visible en todo: contorno naranja de 2 px con 2 px de separación, que deja un espacio del color de la página entre el anillo y un botón naranja.
- Un `h1` por página y títulos en orden; regiones (`header`, `nav`, `main`, `footer`); `alt` y tamaño en todas las imágenes; áreas táctiles de 24 px o más (WCAG 2.5.8); botones de 40 a 48 px de alto.
- Sin desplazamiento horizontal a 375 px.

## Guía rápida

- Página: `bg-page text-body` (ya están en `body`).
- Tarjeta: `rounded-section border border-hairline bg-raised`; con hover: `project-card hover-glow gradient-ring`.
- Botón: `ButtonLink` (`primary` naranja con texto negro o `secondary` con anillo de degradado).
- Etiqueta: `Tag` (`accent` solo para estados reales).
- Texto grande con degradado: `text-gradient-brand` (nunca texto pequeño).
- Aparición al hacer scroll: `data-reveal` (y `[--reveal-order:n]` para escalonar).
