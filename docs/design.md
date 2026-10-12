# Decisiones de diseño

Los tokens viven en `src/app/globals.css`. Este documento explica para qué sirve cada uno y por qué se eligió así.

> **Rediseño del 12 de octubre de 2026: primero el trabajo.** Kevin pidió que un cliente (alguien que busca quién le construya una aplicación web, un backend, una automatización o un agente de IA) entienda en unos cinco segundos quién es, qué hace y cuáles son sus mejores proyectos, y que WhatsApp esté siempre a la mano. Los reclutadores son el segundo público. Se conserva la identidad (nombre, foto, tema oscuro, naranja `#ff6a00` como acento de trabajo, negro, rojo solo de adorno y la fuente Atkinson Hyperlegible Next); lo que cambia es la composición: menos texto, más aire, una jerarquía clara y los proyectos justo después de la portada. Esto **reemplaza** la versión anterior con título que rota, órbita y etiquetas flotantes alrededor de la foto, secciones numeradas, aparición al hacer scroll en la home y tarjetas con anillo de degradado.

## Principios

- **Primero el trabajo.** La portada es corta: en un teléfono de 390 × 844 y en un escritorio de 1440 × 900 los proyectos empiezan en la primera pantalla.
- **Un solo gesto audaz.** La frase de valor de la portada (`profile.heroSubtitle`) es el texto más grande de la página; todo lo demás es tranquilo y ordenado.
- **Proyectos sin marco.** Cada proyecto es una captura con su pie de foto, sin panel alrededor. El primero va ancho, así que la lista no es un juego de tarjetas idénticas.
- **El naranja significa algo**: enlaces, foco, la etiqueta "En producción", el marco de una captura al pasar el cursor y el disco de la foto. El verde de WhatsApp solo está en los botones de WhatsApp. El rojo solo acompaña al naranja en el disco de la foto (y en el 404).
- **Un solo tema oscuro.** Fondo negro profundo, superficies un poco más claras y texto blanco cálido. No hay tema claro ni variantes `dark:`.
- **El movimiento responde.** Un solo momento orquestado (la entrada de la portada); lo demás solo responde a la persona (hover, foco, abrir el menú o "Más detalles"). Solo se animan `transform`, `opacity` y colores; nada mueve el layout, y todo se apaga con "reducir movimiento" del sistema.
- **Sin muletillas de plantilla**: sin números de sección, sin etiquetas en mayúsculas sobre los títulos, sin fechas en monoespaciada, sin "→" al final de cada enlace y sin textos unidos con puntos medios.
- **La paleta de fábrica de Tailwind está desactivada** (`--color-*: initial`), igual que la escala de texto, radios y sombras: solo existen los tokens del proyecto. Los componentes no llevan colores sueltos; donde CSS no llega (imágenes para compartir, `themeColor`) se usa `src/lib/brand-colors.ts`, copia de la paleta cruda.

## Colores

### Paleta cruda

| Token                  | Valor     | Uso                                                       |
| ---------------------- | --------- | --------------------------------------------------------- |
| `black-deep`           | `#0a0a0a` | Fondo de la página                                        |
| `black-surface`        | `#141414` | Paneles del caso de estudio, hover del botón secundario   |
| `black-surface-strong` | `#1c1c1c` | Fondo de las capturas, hover de menús                     |
| `black-line`           | `#2a2a2a` | Divisores, marco de las capturas en reposo                |
| `gray-control`         | `#737373` | Bordes de controles (botón secundario, íconos de redes)   |
| `gray-text`            | `#a3a3a3` | Texto secundario                                          |
| `white-warm`           | `#f5f5f5` | Texto y títulos                                           |
| `orange-vibrant`       | `#ff6a00` | Acento de trabajo                                         |
| `orange-light`         | `#ff8a3d` | Hover del relleno naranja                                 |
| `red-signal`           | `#e5252a` | Solo decoración: extremo del degradado del disco y el 404 |
| `whatsapp-green`       | `#25d366` | Botones de WhatsApp (con texto negro)                     |

### Roles

Los componentes usan los nombres de función, nunca los colores crudos: `page`, `raised`, `raised-strong`, `body`, `heading`, `muted`, `hairline`, `control-border`, `control-hover`, `accent`, `accent-hover`, `accent-secondary`, `on-accent`, `link`, `focus`, `whatsapp`, `whatsapp-hover` y `on-whatsapp`.

### Contraste medido (WCAG 2.x)

Texto (mínimo 4.5:1):

| Par                                                               | Contraste |
| ----------------------------------------------------------------- | --------- |
| Texto `#f5f5f5` sobre la página                                   | 18.16:1   |
| Texto secundario `#a3a3a3` sobre la página                        | 7.85:1    |
| Naranja sobre la página (enlaces, "Más detalles")                 | 6.90:1    |
| Negro sobre naranja ("En producción", botón principal)            | 6.90:1    |
| Negro sobre el naranja del hover `#ff8a3d`                        | 8.44:1    |
| Negro sobre el verde de WhatsApp                                  | 9.98:1    |
| Negro sobre el verde del hover `#4ae082`                          | 11.57:1   |
| Texto sobre `raised` (hover del botón secundario)                 | 16.90:1   |
| Texto sobre `raised-strong` (hover de las filas del menú)         | 15.63:1   |
| Texto secundario sobre `raised` (etiquetas del caso de estudio)   | 7.30:1    |
| Texto sobre el brillo de la portada en su punto más intenso       | 15.61:1   |
| Texto secundario sobre ese brillo                                 | 6.75:1    |
| Enlace del menú (gris) con el encabezado sobre una captura blanca | 5.31:1    |
| Texto blanco con el encabezado sobre una captura blanca           | 12.28:1   |

Componentes y bordes (mínimo 3:1):

| Par                                                               | Contraste |
| ----------------------------------------------------------------- | --------- |
| Borde `#737373` del botón secundario y de los íconos de redes     | 4.18:1    |
| Anillo de foco, subrayado del menú y marco naranja de una captura | 6.90:1    |
| Naranja con el encabezado sobre una captura blanca                | 4.66:1    |

- **Rojo `#e5252a`: 4.36:1** sobre la página. No alcanza 4.5:1, así que **nunca es texto pequeño**: solo el extremo del degradado del disco de la foto y el "404" (texto gigante).
- El marco gris de las capturas (`#2a2a2a`, 1.38:1) es decorativo: la captura misma marca el límite de la tarjeta.
- El brillo naranja de la portada no pasa de 14 % de opacidad. "Sobre una captura blanca" es el peor caso del encabezado fijo: su fondo es la página al 85 % sobre lo que pasa por debajo.

### Degradados

- `--gradient-brand` (horizontal) y `--gradient-brand-diagonal` (135°), de naranja a rojo.
- Se usan en: el disco de la foto de la portada, el monograma y el número del 404, los conectores del diagrama de flujo, el ícono de los proyectos sin capturas y el anillo de los enlaces "proyecto anterior / siguiente" del caso de estudio (`.gradient-ring`).
- Texto con degradado (`.text-gradient-brand`) solo en texto grande (el 404).

## Tipografía

- **Atkinson Hyperlegible Next** para todo, elegida por Kevin; la jerarquía sale del tamaño y el peso (400 el texto, 700 los títulos).
- Escala fluida de 360 a 1440 px de ancho: `text-small` (14→15 px), `text-base` (16→18), `text-subtitle` (19→24), `text-title` (26→40), `text-headline` (32→64) y `text-giant` (96→224, solo el 404).
- `text-headline` (interlineado 1.08, tracking −0.02em) es solo para la frase de la portada y el título del caso de estudio. Los títulos de sección usan `text-title`; los nombres de proyecto y de puesto, `text-subtitle`.
- Sin monoespaciada ni mayúsculas en la home: fechas, idioma del selector y tecnologías van en la misma familia.
- Riesgo conocido: Next 16.4 no tiene las métricas de respaldo de esta fuente (`adjustFontFallback: false` en `src/app/fonts.ts`), así que el texto puede moverse un poco cuando la fuente termina de cargar.

## Composición

```
Teléfono (390)                         Escritorio (1440)
[Kevin Garabita    ☰ (wa) ES▾]         Kevin Garabita   Proyectos Experiencia Sobre mí Contacto (wa WhatsApp) Español▾
(foto) Kevin Garabita                  (foto)  Kevin Garabita
       rol / Mérida                            rol / Mérida
FRASE DE VALOR                         FRASE DE VALOR, HASTA 64 PX, EN 2 A 4 LÍNEAS
[Escríbeme por WhatsApp]               [Escríbeme por WhatsApp]  [Ver CV (PDF) ↗]
[Ver CV (PDF) ↗]                       Proyectos destacados
Proyectos destacados                   [captura del proyecto principal  ][estado, crédito / nombre / frase]
[captura] estado / nombre / frase      [captura         ][captura         ]
```

- **Encabezado fijo** (`position: sticky`), una sola fila: el nombre (lleva al inicio), los enlaces de sección, el botón de WhatsApp y el selector de idioma. **WhatsApp siempre está a la vista**: un botón verde de 44 px con el logo en teléfonos y con la palabra "WhatsApp" desde `sm`. Debajo de `lg` los enlaces se guardan en un menú (`SiteNavigation`): un botón de 44 px con tres líneas abre un panel bajo el encabezado, un enlace por fila; Escape, un clic fuera, salir con Tab o seguir un enlace lo cierran, y el foco vuelve al botón con Escape. Arriba de todo el encabezado es transparente; al bajar (o con el menú abierto) aparecen un fondo desenfocado y una línea fina, solo con `opacity`. Mide 64 px debajo de `lg` y 72 px desde `lg` (`--header-height`, que usa `scroll-padding-top` para que las anclas y el foco no queden tapados, WCAG 2.4.11). Cabe desde 320 px; debajo de 360 px el nombre baja al tamaño del texto.
- **Selector de idioma**: un botón con la bandera y el nombre del idioma (debajo de `lg`, la bandera y el código, `EN`) que despliega los cuatro idiomas, cada uno con su bandera, y marca el actual con una palomita naranja.
- **Portada**: una firma y una frase. La firma es la foto como medallón (el recorte de Kevin sobre un disco con el degradado; los rizos salen por arriba del círculo y los hombros quedan dentro, `.portrait-medallion`) junto al `h1` y la ubicación. El `h1` es "Kevin Garabita — <rol>": el nombre en `text-title`, el rol debajo y la raya solo se lee (`sr-only`). Debajo, la frase de valor (`profile.heroSubtitle`) en `text-headline`, a todo lo ancho hasta 16em. Luego una sola acción principal, **Escríbeme por WhatsApp**, y el CV como secundaria. Cuando `src/content/availability.ts` tiene datos, la disponibilidad va encima de los botones; hoy está vacío y no se muestra.
- **Proyectos (home)**: justo después de la portada, solo los destacados (`isFeatured`). El primero va ancho: desde `lg`, la captura en 7 de 12 columnas y el texto al lado, más grande. Los demás, de dos en dos desde `sm` (tres desde `lg` si son tres). Al final, "Ver todos los proyectos (N)".
- **Tarjeta de proyecto** (`ProjectCard`, también en `/[lang]/projects`): la captura en un marco de 16:10, y debajo el estado (solo "En producción" lleva naranja; "En desarrollo" y "Completado · no publicado" son contornos grises, nunca se leen como en vivo) y para quién fue el trabajo (`getProjectCredit`: "Freelance", "Colaboración con Kobler", "Hecho para Kobler y Asociados"), el nombre, su frase de valor (`tagline`; mientras falte, el resumen cortado a dos líneas) y hasta cuatro tecnologías. Sin capturas, se muestran las herramientas del flujo o un ícono, nunca una captura inventada. Toda la tarjeta lleva al caso de estudio: el nombre es el único enlace y su `::after` cubre la tarjeta.
- **Secciones después de los proyectos** (Experiencia, Formación, Sobre mí, Contacto): una línea fina arriba, el `h2` en una columna angosta a la izquierda y el contenido al lado desde `lg`, como las partes del caso de estudio. Sin números ni etiquetas sobre el título.
- **Experiencia**, compacta: puesto, empresa, periodo y lugar, y el primer logro (el resumen del CV). Los demás logros esperan detrás de "Más detalles" (`<details>` nativo: funciona sin JavaScript y sigue en la página). Cierran los casos de estudio de ese trabajo como enlaces.
- **Formación**: carrera, escuela y lugar, y en una línea el periodo, el semestre y la titulación prevista. Sin panel.
- **Sobre mí**: el párrafo del CV y las habilidades en una lista compacta: una fila por grupo del CV (Backend, IA y automatización, Frontend, Integraciones, Herramientas), su nombre a la izquierda desde `sm` y cada herramienta con su logo; Claude Code está en Herramientas. Cierran los idiomas en texto.
- **Contacto**: una frase en `text-title` que invita a contar qué se quiere desarrollar o automatizar, WhatsApp (la misma acción principal de la portada) y "Enviar correo", y debajo el correo, la ubicación y los perfiles (LinkedIn y GitHub).
- **Pie de página**: nombre y rol, WhatsApp, LinkedIn, GitHub y el CV.
- **Página de proyectos (`/[lang]/projects`)**: todos los proyectos en una cuadrícula de tarjetas (1, 2 y 3 columnas), con filtros por tipo y tecnología.
- **Caso de estudio**: categoría y estado sobre el título, panel de datos clave, galería, puntos clave, métricas, flujo, la historia en secciones con el `h2` a la izquierda (el mismo esquema que las secciones de la home) y el proyecto anterior y siguiente.
- **CV**: siempre se abre en una pestaña nueva (`target="_blank"`, `rel="noopener noreferrer"` y "se abre en una pestaña nueva" para lectores de pantalla), en el idioma de la página o, si no existe, en español. Nunca se descarga.
- **WhatsApp** está en el encabezado de todas las páginas, en la portada, en el contacto y en el pie. Los enlaces a redes y los enlaces públicos de los proyectos abren en una pestaña nueva y lo dicen a los lectores de pantalla.

## Imágenes

- Todas con `alt` (los logos de tecnologías son decorativos, con su nombre al lado) y con `sizes` igual al ancho real que ocupan en cada punto de corte: la foto de la portada (96, 112 o 160 px), la captura principal de la home (7 de 12 columnas desde `lg`), las demás (2 o 3 columnas) y las de la página de proyectos (3 columnas).
- **Solo se precarga la imagen LCP.** En la home, en teléfonos, el elemento LCP es la captura del proyecto principal (empieza en la primera pantalla, bajo la portada), así que es la única precargada; en escritorio el LCP es la frase de la portada, que es texto. En `/[lang]/projects`, la primera tarjeta.
- La foto de la portada carga de inmediato pero con `fetchPriority="low"`: así React no la precarga (precarga toda imagen que no sea `lazy` ni de prioridad baja) y no compite con la captura LCP.

## Radios, sombras y capas

- Radios por función: `rounded-section` (20 px) para los paneles del caso de estudio, `rounded-media` (14 px) para capturas, `rounded-control` (12 px) para botones, `rounded-tag` (píldora) para estados y etiquetas.
- Brillos: `--glow-accent` y `--glow-accent-soft`, solo en los enlaces anterior/siguiente del caso de estudio y el ícono de los proyectos sin capturas. La sombra nunca se anima: aparece una capa con `opacity` (`.hover-glow`).
- Capas (`--layer-*`): brillo de fondo (−1), elementos elevados (1), encabezado (40) y enlace "saltar al contenido" (60). El fondo del encabezado va en `z-index: -1` dentro de su propio contexto, debajo de su fila, para que el panel del menú se posicione contra el encabezado.

## Movimiento

Tokens: `--ease-standard`, `--ease-emphasized`, `--duration-moderate` (320 ms), `--duration-slow` (700 ms) y `--stagger-step` (90 ms).

- **Entrada de la portada**, el único momento orquestado: el `h1`, la ubicación y la frase suben en cascada **sin fundido** (`.entrance-slide`), así que se pintan desde el primer cuadro (la frase es el LCP en escritorio); el disco de la foto crece (`.entrance-scale`) y los botones suben y aparecen (`.entrance`).
- **Hover y foco**: en una tarjeta, el marco de la captura se vuelve naranja, la captura se acerca un poco (`scale(1.03)`) y el nombre se subraya (`.project-tile`, también con `:focus-within`). Los botones solo cambian de color; nada se eleva. Los enlaces del encabezado dibujan un subrayado naranja que crece desde la izquierda.
- **Fondo**: un solo brillo naranja quieto arriba a la derecha de la primera pantalla (`.site-backdrop`, absoluto, no fijo: se va con la portada).
- **Sin aparición al hacer scroll en la home.** El mecanismo (`data-reveal`, `src/components/motion/page-motion.tsx`) sigue disponible y hoy solo lo usan las partes del caso de estudio. Es mejora progresiva: sin JavaScript nada se oculta y lo que ya está en pantalla nunca empieza oculto.
- **`prefers-reduced-motion: reduce`**: las animaciones y transiciones son instantáneas y el desplazamiento suave se apaga.

## Bordes nítidos

Los bordes y anillos naranjas se veían borrosos. Había dos causas:

- **El anillo de degradado era una máscara, no un borde.** `.gradient-ring` lo dibujaba en un `::after` con `inset: -1px`, `padding: 1px` y `mask-composite: exclude`. El navegador ajusta los bordes reales a píxeles físicos enteros (con la escala de Windows al 125 % o 150 %, un borde de 1 px se dibuja como exactamente un píxel físico), pero ni el `padding` de 1 px de la máscara ni el `inset: -1px` se ajustan: equivalen a 1.25 o 1.5 píxeles físicos. El borde interior de la máscara caía a mitad de un píxel y el anillo se suavizaba (antialiasing) sobre dos filas de píxeles, además de quedar desplazado respecto al borde del elemento.
- **Las elevaciones al pasar el cursor movían bordes a fracciones de píxel.** Con escala de 125 %, 2 px son 2.5 píxeles físicos y 6 px son 7.5: el elemento (con su anillo naranja) quedaba entre dos píxeles justo cuando el anillo se ve.

La solución:

- El anillo ahora **es el borde del propio elemento**: un borde transparente de 1 px con dos fondos, el degradado recortado a `border-box` y el color de la superficie (`--ring-fill`) encima, recortado a `padding-box`. Usa la misma geometría ajustada que cualquier borde, así que queda en un píxel físico exacto a cualquier escala.
- `--ring-opacity` está registrada con `@property` (`<number>`) para que el anillo aparezca con suavidad, mezclando el degradado con `--ring-rest` (la línea fina) con `color-mix`.
- La única elevación que queda (los enlaces anterior/siguiente del caso de estudio) usa `--lift-card: 8px`, un múltiplo de 4 px: un número entero de píxeles físicos a 100, 125, 150, 175, 200, 250 y 300 %. En px y no en rem, para que no cambie si el usuario modifica el tamaño de letra del navegador.
- Las tarjetas de proyecto ya no se elevan: su marco cambia de color en el mismo píxel.

## Foco y accesibilidad

- Foco visible en todo: contorno naranja de 2 px con 2 px de separación (4 px en el nombre de una tarjeta, para no tocar su subrayado), que deja un espacio del color de la página entre el anillo y un botón naranja o verde.
- Un `h1` por página y títulos en orden; regiones (`header`, `nav`, `main`, `footer`); `alt` y tamaño en todas las imágenes; los botones del encabezado miden 44 px en teléfonos y las demás áreas táctiles 24 px o más (WCAG 2.5.8); botones de 40 a 48 px de alto.
- El menú y el selector de idioma son "disclosure": botón con `aria-expanded` y `aria-controls`, enlaces normales dentro, Escape devuelve el foco al botón.
- Sin desplazamiento horizontal de 320 a 1440 px en los cuatro idiomas.
- **Vista ampliada de capturas**: el foco empieza en "Cerrar", Tab y Shift+Tab no salen del diálogo, las flechas cambian de imagen y al cerrar el foco vuelve a la miniatura que lo abrió.

## Guía rápida

- Página: `bg-page text-body` (ya están en `body`).
- Sección de la home: `PageSection` (`layout="split"` por defecto; `"stacked"` para los proyectos).
- Proyecto: `ProjectCard` (`variant="feature"` para el principal de la home; pasa `mediaSizes` con el ancho real de la cuadrícula).
- Botón: `ButtonLink` (`whatsapp` verde con texto negro, `primary` naranja con texto negro o `secondary` con contorno gris).
- Etiqueta: `Tag` (`accent` solo para "En producción").
- Anillo de degradado fijo: `gradient-ring border` y, si la superficie no es `raised`, `[--ring-fill:var(--color-page)]` en lugar de una clase `bg-*`.
- Texto grande con degradado: `text-gradient-brand` (nunca texto pequeño).
