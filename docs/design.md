# Decisiones de diseño

Los tokens viven en `src/app/globals.css`. Este documento explica para qué sirve cada uno y por qué se eligió así.

> **Rediseño del 12 de octubre de 2026: primero el trabajo.** Kevin pidió que un cliente (alguien que busca quién le construya una aplicación web, un backend, una automatización o un agente de IA) entienda en unos cinco segundos quién es, qué hace y cuáles son sus mejores proyectos, y que WhatsApp esté siempre a la mano. Los reclutadores son el segundo público. Se conserva la identidad (nombre, foto, tema oscuro, naranja `#ff6a00` como acento de trabajo, negro, rojo solo de adorno y la fuente Atkinson Hyperlegible Next); lo que cambia es la composición: menos texto, más aire, una jerarquía clara y los proyectos justo después de la portada. Esto **reemplaza** la versión anterior con título que rota, secciones numeradas, aparición al hacer scroll y tarjetas con anillo de degradado.

> **Reclutadores y clientes por igual (2 de noviembre de 2026).** Kevin pidió mejorar la UX/UI para dos públicos con el mismo peso: reclutadores y quien busca un desarrollador. Tras una crítica con impeccable (`.impeccable/critique/`), la portada sube el rol a subtítulo, muestra la disponibilidad (empleo y freelance; remoto, híbrido o presencial) y un resumen con el último trabajo y la carrera; las etiquetas flotantes se quitaron a pedido suyo; el agente de Motosureste Suzuki entra a los destacados como prueba de los agentes en producción; Experiencia y Formación son una sola sección con todos los logros a la vista; Contacto ofrece WhatsApp y el CV, y el CV está en el menú. La frase de la portada se queda: Kevin la prefiere. El público y los objetivos están en `PRODUCT.md`.

> **Más gancho, primero el reclutador y sin cursores (3 de noviembre de 2026).** Kevin pidió más gancho y profesionalismo, menos adornos que distraigan, quitar la animación de cursores (pesaba en teléfonos) y que en teléfono la página se vea muy bien; también dar más peso a los reclutadores sin dejar a los clientes. Cambios: neutros cálidos con el mismo naranja; en la portada del teléfono, la foto pequeña junto al nombre, para que la frase, el CV y WhatsApp quepan en la primera pantalla de 390 × 664; las palabras clave de la frase en naranja; **el CV como acción principal** (naranja) y WhatsApp como secundaria con su logo verde; una franja de cifras reales (`src/lib/hero-stats.ts`) en lugar del bloque de último trabajo y carrera; WhatsApp del encabezado con contorno en vez de relleno verde; habilidades como píldoras con logo; casos de estudio de la experiencia como enlaces con marco; y una página nueva para clientes, `/[lang]/services`, donde WhatsApp sí es la acción principal. La frase de la portada se queda, a pedido de Kevin.

> **La foto se queda como estaba (pedido de Kevin, 12 de octubre de 2026).** "Quiero mantener lo de mi foto como estaba antes pero combinándolo como está ahorita el hero." La portada vuelve a mostrar la foto grande de antes del rediseño: el recorte sobre el disco con el degradado, el anillo punteado en órbita con su punto y las tres etiquetas flotantes (FastAPI, n8n, OpenAI API). Su pedido manda sobre la recomendación general de evitar etiquetas flotantes y adornos en movimiento; el resto de la portada nueva se queda (nombre, rol, ubicación, la frase de valor, WhatsApp y el CV, y los proyectos justo después).

## Principios

- **Primero el teléfono.** En un teléfono de 390 × 664 (Safari con sus barras), el nombre, el rol, la foto, la frase y los dos botones caben en la primera pantalla. En escritorio, la portada ocupa la primera pantalla y los proyectos siguen justo debajo de las cifras.
- **La portada carga el peso.** La foto de Kevin con su disco y la frase de valor (`profile.heroSubtitle`), el texto más grande de la home; todo lo demás es tranquilo y ordenado.
- **Proyectos sin marco.** Cada proyecto es una captura con su pie de foto, sin panel alrededor. El primero va ancho, así que la lista no es un juego de tarjetas idénticas.
- **El naranja significa algo**: la acción principal (el CV en la home), enlaces, foco, las palabras clave de la frase de la portada, la etiqueta "En producción", el marco de una captura al pasar el cursor y el disco de la foto. El verde de WhatsApp es solo su logo, salvo en la página de servicios y al final de los casos de estudio, donde WhatsApp es la acción principal y lleva su botón verde. El rojo solo acompaña al naranja en el disco de la foto.
- **Un solo tema oscuro.** Fondo negro profundo, superficies un poco más claras y texto blanco cálido, todo con un tinte cálido mínimo hacia el naranja (3 de noviembre de 2026): con grises neutros puros el naranja quedaba encima de la página; con neutros cálidos se integra. No hay tema claro ni variantes `dark:`.
- **El movimiento responde.** Un solo momento orquestado por página (su entrada al cargar) y, a pedido de Kevin, el giro lento del anillo y la flotación de las etiquetas alrededor de su foto; lo demás solo responde a la persona (hover, foco, abrir el menú o "Más detalles"). Solo se animan `transform`, `opacity` y colores; nada mueve el layout, y todo se apaga con "reducir movimiento" del sistema.
- **Sin muletillas de plantilla**: sin números de sección, sin etiquetas en mayúsculas sobre los títulos, sin fechas en monoespaciada, sin "→" al final de cada enlace y sin textos unidos con puntos medios.
- **La paleta de fábrica de Tailwind está desactivada** (`--color-*: initial`), igual que la escala de texto, radios y sombras: solo existen los tokens del proyecto. Los componentes no llevan colores sueltos; donde CSS no llega (imágenes para compartir, `themeColor`) se usa `src/lib/brand-colors.ts`, copia de la paleta cruda.

## Colores

### Paleta cruda

| Token                  | Valor     | Uso                                                      |
| ---------------------- | --------- | -------------------------------------------------------- |
| `black-deep`           | `#0b0a09` | Fondo de la página                                       |
| `black-surface`        | `#151311` | Píldoras de habilidades, pasos del flujo, hovers         |
| `black-surface-strong` | `#1e1b18` | Fondo de las capturas, hover de menús                    |
| `black-line`           | `#2c2824` | Divisores, marco de las capturas en reposo               |
| `gray-control`         | `#7c746d` | Bordes de controles (botón secundario, íconos de redes)  |
| `gray-text`            | `#aaa39b` | Texto secundario                                         |
| `white-warm`           | `#f6f3ee` | Texto y títulos                                          |
| `orange-vibrant`       | `#ff6a00` | Acento de trabajo                                        |
| `orange-light`         | `#ff8a3d` | Hover del relleno naranja                                |
| `red-signal`           | `#e5252a` | Solo decoración: extremo del degradado del disco         |
| `whatsapp-green`       | `#25d366` | Logo de WhatsApp; botón verde (texto negro) en servicios |

Antes del 3 de noviembre de 2026 los neutros eran grises puros (`#0a0a0a`, `#141414`, `#1c1c1c`, `#2a2a2a`, `#737373`, `#a3a3a3`, `#f5f5f5`).

### Roles

Los componentes usan los nombres de función, nunca los colores crudos: `page`, `raised`, `raised-strong`, `body`, `heading`, `muted`, `hairline`, `control-border`, `control-hover`, `accent`, `accent-hover`, `accent-secondary`, `on-accent`, `link`, `focus`, `whatsapp`, `whatsapp-hover` y `on-whatsapp`.

### Contraste medido (WCAG 2.x)

Texto (mínimo 4.5:1):

| Par                                                                | Contraste |
| ------------------------------------------------------------------ | --------- |
| Texto `#f6f3ee` sobre la página                                    | 17.87:1   |
| Texto secundario `#aaa39b` sobre la página                         | 7.93:1    |
| Naranja sobre la página (enlaces, palabras clave de la portada)    | 6.89:1    |
| Negro sobre naranja ("En producción", botón principal)             | 6.89:1    |
| Negro sobre el naranja del hover `#ff8a3d`                         | 8.44:1    |
| Negro sobre el verde de WhatsApp                                   | 9.97:1    |
| Negro sobre el verde del hover `#4ae082`                           | 11.57:1   |
| Texto sobre `raised` (píldoras, hover del botón secundario)        | 16.74:1   |
| Texto sobre `raised-strong` (hover de las filas del menú)          | 15.49:1   |
| Texto secundario sobre `raised` (herramienta de un paso del flujo) | 7.43:1    |
| Texto sobre el brillo de la portada en su punto más intenso        | 15.28:1   |
| Texto secundario sobre ese brillo                                  | 6.78:1    |
| Enlace del menú (gris) con el encabezado sobre una captura blanca  | 5.38:1    |
| Texto blanco con el encabezado sobre una captura blanca            | 12.12:1   |

Componentes y bordes (mínimo 3:1):

| Par                                                           | Contraste |
| ------------------------------------------------------------- | --------- |
| Borde `#7c746d` del botón secundario, los filtros y las redes | 4.31:1    |
| Foco, subrayado del menú y marco naranja (capturas, enlaces)  | 6.89:1    |
| Naranja con el encabezado sobre una captura blanca            | 4.67:1    |

"Con el encabezado sobre una captura blanca" es el peor caso, desde `lg` (fondo al 85 %). En teléfonos el fondo del encabezado es más opaco (94 %, sin desenfoque), así que todo sube: el gris a 7.06:1 y el naranja a 6.13:1.

- **Rojo `#e5252a`: 4.36:1** sobre la página. No alcanza 4.5:1, así que **nunca es texto pequeño**: solo el extremo del degradado del disco de la foto.
- El marco gris de las capturas (`#2a2a2a`, 1.38:1) es decorativo: la captura misma marca el límite de la tarjeta.
- El brillo naranja de la portada no pasa de 14 % de opacidad. "Sobre una captura blanca" es el peor caso del encabezado fijo: su fondo es la página al 85 % sobre lo que pasa por debajo.

### Degradados

- `--gradient-brand` (horizontal) y `--gradient-brand-diagonal` (135°), de naranja a rojo.
- Se usan en: el disco de la foto de la portada, el monograma y los conectores del diagrama de flujo.
- Ningún texto lleva degradado: es un cliché de las interfaces hechas con IA. El número del 404 es naranja sólido (2 de noviembre de 2026; antes llevaba el degradado con `.text-gradient-brand`, que se quitó).

## Tipografía

- **Atkinson Hyperlegible Next** para todo, elegida por Kevin; la jerarquía sale del tamaño y el peso (400 el texto, 700 los títulos).
- Escala fluida de 360 a 1440 px de ancho: `text-small` (14→15 px), `text-base` (16→18), `text-subtitle` (19→24), `text-title` (26→40), `text-statement` (28→48), `text-headline` (32→64) y `text-giant` (96→224, solo el 404).
- `text-statement` (interlineado 1.1, tracking −0.015em) es solo para la frase de la portada: comparte la fila con la foto, así que en escritorio ocupa 3 o 4 líneas. `text-headline` (interlineado 1.08, tracking −0.02em) es solo para el título del caso de estudio. Los títulos de sección usan `text-title`; los nombres de proyecto y de puesto, `text-subtitle`.
- Sin monoespaciada ni mayúsculas en ninguna página: fechas, idioma del selector, tecnologías, el crédito sobre el título del caso de estudio y las herramientas del flujo van en la misma familia.
- Riesgo conocido: Next 16.4 no tiene las métricas de respaldo de esta fuente (`adjustFontFallback: false` en `src/app/fonts.ts`), así que el texto puede moverse un poco cuando la fuente termina de cargar.

## Composición

```
Teléfono (390)                         Escritorio (1440)
[Kevin Garabita    ☰ (wa) ES▾]         Kevin Garabita  Proyectos Experiencia Sobre mí Servicios Contacto CV (wa WhatsApp) Español▾
Kevin Garabita          (foto)         Kevin Garabita                                   (foto grande)
ROL / Mérida            (chica)        ROL / Mérida
FRASE DE VALOR (palabras naranjas)     FRASE DE VALOR, HASTA 48 PX, EN 3 A 4 LÍNEAS
• disponibilidad                       • disponibilidad
[Ver CV (PDF) ↗]  (naranja)            [Ver CV (PDF) ↗]  [(wa) Escríbeme por WhatsApp]
[(wa) Escríbeme por WhatsApp]          LinkedIn  GitHub  ¿Tienes un negocio? Mira mis servicios →
LinkedIn  GitHub                       ─────────────────────────────
¿Tienes un negocio? Servicios →        5 agentes · 4 en producción · 1 año · 2027
─────────────                          Proyectos destacados
5 agentes    4 en producción           [captura del proyecto principal  ][estado, crédito / nombre / frase]
1 año        2027                      [captura         ][captura         ]
Proyectos destacados
```

- **Encabezado fijo** (`position: sticky`), una sola fila: el nombre (lleva al inicio), los enlaces de sección y el CV (PDF en una pestaña nueva), el botón de WhatsApp y el selector de idioma. El enlace de la página actual lleva `aria-current` y se queda blanco. **WhatsApp siempre está a la vista**: un botón de 44 px con contorno gris y el logo verde en teléfonos, y con la palabra "WhatsApp" desde `sm` (antes era un botón verde relleno; con contorno, el único relleno de color en la primera pantalla es el CV naranja). Los enlaces son Proyectos, Experiencia, Sobre mí, Servicios, Contacto y CV; no se parten en dos líneas (`whitespace-nowrap`). Debajo de `lg` los enlaces se guardan en un menú (`SiteNavigation`): un botón de 44 px con tres líneas abre un panel bajo el encabezado, un enlace por fila; Escape, un clic fuera, salir con Tab o seguir un enlace lo cierran, y el foco vuelve al botón con Escape. Arriba de todo el encabezado es transparente; al bajar (o con el menú abierto) aparecen su fondo y una línea fina, solo con `opacity`: casi opaco y sin desenfoque debajo de `lg` (el desenfoque cuesta en cada cuadro del scroll en teléfonos), translúcido y desenfocado desde `lg`. Mide 64 px debajo de `lg` y 72 px desde `lg` (`--header-height`, que usa `scroll-padding-top` para que las anclas y el foco no queden tapados, WCAG 2.4.11). Cabe desde 320 px; debajo de 360 px el nombre baja al tamaño del texto.
- **Selector de idioma**: un botón con la bandera y el nombre del idioma (debajo de `xl`, la bandera y el código, `EN`, para que a 1024 px quepan todos los enlaces) que despliega los cuatro idiomas, cada uno con su bandera, y marca el actual con una palomita naranja.
- **Portada** (`.hero-grid`): tres áreas de cuadrícula, así la única foto cambia de lugar sin una segunda copia. En teléfonos, el nombre, el rol y el lugar a la izquierda con la foto pequeña al lado (8.5rem; 7rem debajo de 360 px; 10rem desde `sm`), y debajo, a todo el ancho, la frase, la disponibilidad, los botones, los perfiles y las cifras. Desde `md`, el texto a la izquierda (7 de 12 columnas) centrado verticalmente junto a la foto grande a la derecha.
  - Texto: el `h1`, "Kevin Garabita — <rol>" (el nombre en `text-title` y el rol debajo en `text-subtitle` blanco, porque es lo primero que busca un reclutador; la raya solo se lee, `sr-only`), la ubicación, la frase de valor (`profile.heroSubtitle`) en `text-statement` con sus palabras clave en naranja (`profile.heroSubtitleHighlight`, "horas de trabajo"; el build falla si no son parte de la frase), la disponibilidad (`src/content/availability.ts`) y **el CV como acción principal** (botón naranja), con WhatsApp como secundaria (contorno y logo verde). Debajo, LinkedIn y GitHub con su logo y la entrada para clientes: "¿Tienes un negocio? Mira mis servicios →".
  - Cifras: tras una línea fina, cuatro datos reales en grande con su explicación en texto pequeño, de dos en dos y en una fila desde `xl`: los agentes de WhatsApp hechos en equipo en Kobler (`src/content/highlights.ts`, del CV), los proyectos en producción (contados de su estado), la duración del último trabajo (de su periodo) y el año de titulación prevista. Salen del contenido (`src/lib/hero-stats.ts`), así que no pueden contradecir al resto del sitio. Reemplazan al bloque de último trabajo y carrera, que decía lo mismo con más texto.
  - Foto: el recorte de Kevin delante de un círculo con el degradado (los rizos pasan por encima de su borde), un brillo suave y un anillo punteado en órbita con un punto naranja que se desvanece detrás de los hombros (`.hero-orbit`). Las etiquetas flotantes (FastAPI, n8n, OpenAI API) se quitaron a pedido de Kevin (2 de noviembre de 2026): eran adorno sin información. Círculo y foto se desvanecen juntos abajo (`.hero-portrait`) y la foto también a los lados (`.hero-photo`). En teléfonos mide 208 px de ancho (192 px debajo de 360 px), así la frase, la disponibilidad y los dos botones caben en la primera pantalla de 390 × 844 en los cuatro idiomas.
- **Proyectos (home)**: justo después de la portada, solo los destacados (`isFeatured`): el workshop Appolo, el agente de Motosureste Suzuki (la prueba en producción de los agentes de IA que promete la portada), la gestión de servicios de Controltec y el gestor de reportes de campo. El primero va ancho: desde `lg`, la captura en 7 de 12 columnas y el texto al lado, más grande. Los demás, de dos en dos desde `sm` (tres desde `lg` si son tres). Al final, "Ver todos los proyectos (N)".
- **Tarjeta de proyecto** (`ProjectCard`, también en `/[lang]/projects`): la captura en un marco de 16:9, y debajo el estado (solo "En producción" lleva naranja; "En desarrollo" y "Completado · no publicado" son contornos grises, nunca se leen como en vivo) y para quién fue el trabajo (`getProjectCredit`: "Freelance", "En equipo en Kobler y Asociados", "Hecho en Kobler y Asociados"; Kobler es la agencia de marketing donde Kevin trabajó, así que su trabajo ahí se acredita "en Kobler", nunca "para" ni "con"), el nombre, su frase de valor (`tagline`; mientras falte, el resumen cortado a dos líneas) y hasta cuatro tecnologías. Sin capturas, el marco muestra para quién fue (en `text-title`) y, abajo, las herramientas de su flujo en orden (WhatsApp → n8n → OpenAI…), alineados como el texto de la tarjeta: datos reales en lugar de una captura inventada. Antes era un ícono con anillo de degradado y brillo; se quitó porque se leía como relleno de plantilla. Toda la tarjeta lleva al caso de estudio: el nombre es el único enlace y su `::after` cubre la tarjeta. El marco es de 16:9 porque es la captura más ancha del sitio: una de 16:9 entra completa y una de 16:10 conserva todo su ancho y solo pierde una franja abajo (`object-top`); nunca se corta un costado, donde empieza el texto. Con un marco de 16:10, las capturas del workshop Appolo perdían 5 % por lado y la primera letra de sus títulos.
- **Secciones después de los proyectos** (Experiencia y formación, Sobre mí, Contacto): una línea fina arriba, el `h2` en una columna angosta a la izquierda y el contenido al lado desde `lg`, como las partes del caso de estudio. Sin números ni etiquetas sobre el título.
- **Experiencia y formación**, una sola sección (con un solo trabajo y una carrera, dos bandas separadas se veían vacías): puesto, empresa, periodo y lugar, el resumen del trabajo en blanco y todos los logros a la vista, con su rombo naranja (los resultados con clientes son la prueba más fuerte de la página; ya no esperan detrás de "Más detalles"). Cierran los casos de estudio de ese trabajo como enlaces con marco (`.link-frame`), uno por fila, con su flecha naranja: más fáciles de tocar en teléfono que los enlaces en texto pequeño de antes. Debajo, tras una línea fina, la carrera, la escuela y lugar, y en una línea el periodo, el semestre y la titulación prevista. Sin panel.
- **Sobre mí**: el párrafo del CV (a 60 caracteres por línea como máximo) y las habilidades en una lista compacta: una fila por grupo del CV (Backend, IA y automatización, Frontend, Integraciones, Herramientas), su nombre a la izquierda desde `sm` y cada herramienta como una píldora con su logo (fondo `raised`, línea fina); antes eran nombres sueltos con mucho aire entre ellos. Claude Code está en Herramientas. Cierran los idiomas en texto.
- **Contacto**, primero para reclutadores: "¿Buscas a alguien para tu equipo o tienes un proyecto en mente?" en `text-title`, la disponibilidad, las mismas dos acciones de la portada (el CV principal y WhatsApp), una línea para clientes que lleva a servicios y, tras una línea fina, el correo (un solo enlace), la ubicación y los perfiles (LinkedIn y GitHub).
- **Servicios (`/[lang]/services`)**, para clientes: el `h1` en `text-headline`, una frase y WhatsApp como **acción principal** (botón verde) con el correo al lado. Luego los tres servicios (`src/content/services.ts`: agentes de IA para WhatsApp, automatización de procesos y aplicaciones web a la medida), cada uno bajo una línea fina: título y resumen a la izquierda desde `lg`; a la derecha, "Incluye" con rombos naranjas y "Proyectos de ejemplo" como enlaces con marco (`.link-frame`) hacia sus casos de estudio, con un punto naranja solo si están en producción. Después "Cómo trabajamos" en cuatro pasos numerados (número a la izquierda en teléfono, arriba desde `lg`), "¿Cuánto cuesta?" (sin precios: se cotiza cada proyecto, decisión de Kevin) con WhatsApp otra vez, y una línea para reclutadores que lleva a la home.
- **Pie de página**: nombre y rol, WhatsApp, LinkedIn, GitHub y el CV.
- **Página de proyectos (`/[lang]/projects`)**: con la escala de la home: el `h1` del tamaño de un título de sección (`text-title`; los tamaños mayores quedan para la frase de la portada y el título del caso de estudio) y la descripción en texto secundario a tamaño de lectura. Debajo, los filtros por tipo y tecnología, dibujados como los botones secundarios (contorno gris que se vuelve naranja; naranja fijo y fondo `raised` mientras el filtro está activo), y todas las tarjetas en 1, 2 y 3 columnas con los mismos espacios que en la home (24 px, 32 px desde `lg`, 48 px entre filas).
- **Caso de estudio**:
  - Sobre el título, en texto pequeño y gris (sin monoespaciada, mayúsculas ni tracking), para quién fue el trabajo (`getProjectCredit`) y, al lado, el estado con su nota. El título en `text-headline` y el resumen debajo.
  - A la derecha desde `lg`, los datos clave sin panel, entre líneas finas: cliente, periodo y tecnologías (píldoras grises). El crédito y el estado ya están sobre el título, así que no se repiten.
  - **Corto a propósito** (3 de noviembre de 2026: Kevin sentía que los casos tenían demasiado texto; el del workshop pasó de 1,226 palabras y unos 7,500 px de alto en teléfono a 341 palabras visibles y unos 3,700 px). Después de la galería, en este orden: **En resumen** (Problema, Solución y Resultado, una o dos frases cada uno, en tres columnas desde `lg` y apilados en teléfono; `ProjectOverviewPart`), el flujo de la automatización si existe (pasos más compactos en teléfono), hasta cuatro **puntos clave** de una línea o dos, las métricas y la arquitectura si existen, **Mi rol** en una frase y los enlaces públicos. Las secciones llevan una línea fina arriba y el `h2` a la izquierda desde `lg` (`ProjectStorySection`); el resumen y el flujo ocupan todo el ancho con el `h2` arriba (`layout="wide"`).
  - **Detalles técnicos**, cerrado por defecto en un `<details>` nativo (`ProjectTechnicalDetails`): el `h2` y una línea que dice qué hay dentro (cómo funciona, decisiones técnicas y manejo de fallas) en el `<summary>`, con un botón redondo cuya flecha gira al abrir. Dentro, cada parte con su `h3` a la izquierda desde `lg`: Cómo funciona (`howItWorks`, la explicación completa de antes), Decisiones técnicas, Manejo de fallas y Siguientes pasos. Funciona sin JavaScript y el texto sigue en el HTML, así que los buscadores lo leen. `lib/projects.ts` hace fallar el build si un texto visible pasa su límite (resumen 210 caracteres, problema 230, solución y rol 240, cada resultado 140 y cada punto clave 150, en cualquier idioma) o si hay más de 3 resultados o 4 puntos clave.
  - Al final, la invitación para clientes ("Cuéntame qué quieres desarrollar o automatizar.") con el botón de WhatsApp y "Ver servicios →", y el proyecto anterior y siguiente: un marco de línea fina que se vuelve naranja con el nombre subrayado al pasar el cursor o con el foco (`.link-frame`), como las tarjetas; nada se eleva ni brilla.
- **CV**: siempre se abre en una pestaña nueva (`target="_blank"`, `rel="noopener noreferrer"` y "se abre en una pestaña nueva" para lectores de pantalla), en el idioma de la página o, si no existe, en español. Nunca se descarga.
- **WhatsApp** está en el encabezado de todas las páginas, en la portada, en el contacto, en servicios, al final de cada caso de estudio (junto a "Ver servicios →") y en el pie. Los enlaces a redes y los enlaces públicos de los proyectos abren en una pestaña nueva y lo dicen a los lectores de pantalla.

## Imágenes

- Todas con `alt` (los logos de tecnologías son decorativos, con su nombre al lado) y con `sizes` igual al ancho real que ocupan en cada punto de corte: la foto de la portada (la columna de 5 de 12 desde `md`; 112, 136 o 160 px antes, junto al nombre), la captura principal de la home (7 de 12 columnas desde `lg`), las demás (2 o 3 columnas), las de la página de proyectos (3 columnas) y el diagrama de arquitectura (el ancho del contenedor).
- En la galería del caso de estudio, la primera captura de escritorio va completa a todo el ancho. En teléfonos las demás son miniaturas cuadradas, cuatro por fila (antes cada una ocupaba el ancho de la pantalla y cinco capturas eran cinco pantallas); al tocarlas se abren completas en la vista ampliada. Desde `sm`, las de escritorio ocupan media fila y las de teléfono un cuarto.
- **Solo se precarga la imagen LCP.** En la home es la foto de la portada en escritorio; en teléfonos, desde que la foto va pequeña junto al nombre (3 de noviembre de 2026), el LCP es la frase, que es texto y se pinta en el primer cuadro. La foto se precarga con `fetchPriority="high"` y nunca empieza invisible, solo sube un poco (`.entrance-lift`). La captura del proyecto principal ya no se precarga: queda debajo de la portada. Excepción medida: en una tableta vertical (768 × 1024) la captura es el LCP y carga en modo diferido. En `/[lang]/projects`, la primera tarjeta.

## Radios, sombras y capas

- Radios por función: `rounded-media` (14 px) para capturas, pasos del flujo y enlaces con marco, `rounded-control` (12 px) para botones y filtros, `rounded-tag` (píldora) para estados y etiquetas. Ya no hay paneles.
- Ningún elemento brilla al pasar el cursor.
- Capas (`--layer-*`): brillo de fondo (−1), elementos elevados (1), encabezado (40) y enlace "saltar al contenido" (60). El fondo del encabezado va en `z-index: -1` dentro de su propio contexto, debajo de su fila, para que el panel del menú se posicione contra el encabezado.

## Movimiento

Tokens: `--ease-standard`, `--ease-emphasized`, `--duration-moderate` (320 ms), `--duration-slow` (700 ms) y `--stagger-step` (90 ms).

- **Una entrada por página**, el único momento orquestado. En la portada, el `h1`, la ubicación y la frase suben en cascada **sin fundido** (`.entrance-slide`), así que se pintan desde el primer cuadro; la foto solo sube (`.entrance-lift`), el círculo, el brillo y el anillo crecen (`.entrance-scale`) y los botones y el resumen suben y aparecen (`.entrance`). En el caso de estudio y en la página de proyectos, su encabezado sube igual, sin fundido.
- **Alrededor de la foto**, como antes y a pedido de Kevin: el anillo da una vuelta cada 48 s (`.motion-orbit`). Con "reducir movimiento" se queda quieto.
- **Hover y foco**: en una tarjeta, el marco de la captura se vuelve naranja, la captura se acerca un poco (`scale(1.03)`) y el nombre se subraya (`.project-tile`, también con `:focus-within`). Los enlaces anterior/siguiente del caso de estudio responden igual (`.link-frame`), y las miniaturas de la galería y los filtros cambian su borde a naranja. Los botones solo cambian de color; nada se eleva. Los enlaces del encabezado dibujan un subrayado naranja que crece desde la izquierda.
- **Fondo**: un solo brillo naranja quieto arriba a la derecha de la primera pantalla (`.site-backdrop`, absoluto, no fijo: se va con la portada).
- **Nada aparece al hacer scroll**, en ninguna página: el contenido simplemente está. El mecanismo de aparición (`data-reveal` y su componente) se quitó del sitio.
- **`prefers-reduced-motion: reduce`**: las animaciones y transiciones son instantáneas y el desplazamiento suave se apaga.

## Bordes nítidos

> El anillo de degradado (`.gradient-ring`) se quitó el 2 de noviembre de 2026 junto con el ícono de los proyectos sin capturas. Lo de abajo queda como registro y como regla para cualquier borde futuro.

Los bordes y anillos naranjas se veían borrosos. Había dos causas:

- **El anillo de degradado era una máscara, no un borde.** `.gradient-ring` lo dibujaba en un `::after` con `inset: -1px`, `padding: 1px` y `mask-composite: exclude`. El navegador ajusta los bordes reales a píxeles físicos enteros (con la escala de Windows al 125 % o 150 %, un borde de 1 px se dibuja como exactamente un píxel físico), pero ni el `padding` de 1 px de la máscara ni el `inset: -1px` se ajustan: equivalen a 1.25 o 1.5 píxeles físicos. El borde interior de la máscara caía a mitad de un píxel y el anillo se suavizaba (antialiasing) sobre dos filas de píxeles, además de quedar desplazado respecto al borde del elemento.
- **Las elevaciones al pasar el cursor movían bordes a fracciones de píxel.** Con escala de 125 %, 2 px son 2.5 píxeles físicos y 6 px son 7.5: el elemento (con su anillo naranja) quedaba entre dos píxeles justo cuando el anillo se ve.

La solución:

- El anillo ahora **es el borde del propio elemento**: un borde transparente de 1 px con dos fondos, el degradado recortado a `border-box` y el color de la superficie (`--ring-fill`) encima, recortado a `padding-box`. Usa la misma geometría ajustada que cualquier borde, así que queda en un píxel físico exacto a cualquier escala.
- Ya nada se eleva al pasar el cursor: las tarjetas, los enlaces con marco, los filtros y las miniaturas cambian el color de su borde en el mismo píxel. Si alguna vez vuelve una elevación, debe medir un múltiplo de 4 px y en px (no en rem): es un número entero de píxeles físicos a 100, 125, 150, 175, 200, 250 y 300 %.

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
- Parte de un caso de estudio: `ProjectStorySection` (`layout="wide"` para el flujo y la arquitectura).
- Enlace con marco que responde como una tarjeta: `link-frame border` y `link-frame-name` en el texto que se subraya.
- Botón: `ButtonLink` (`whatsapp` verde con texto negro, `primary` naranja con texto negro o `secondary` con contorno gris).
- Etiqueta: `Tag` (`accent` solo para "En producción").
