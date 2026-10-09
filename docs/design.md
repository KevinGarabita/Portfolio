# Decisiones de diseño

Los tokens viven en `src/app/globals.css`. Este documento explica para qué sirve cada uno y por qué se eligió así. La investigación que lo respalda está resumida en [decisions.md](decisions.md).

## Principios

- **El naranja tiene funciones fijas**, no es un adorno: relleno de botones y etiquetas, enlaces y foco en tema oscuro. Un fondo casi negro con un solo acento brillante es hoy un patrón típico de sitios generados con IA; darle trabajos concretos al naranja evita ese aspecto.
- **Fondo claro casi neutro** (`#f9f7f5`), no crema. "Crema con terracota" es otro patrón típico.
- **Sin degradados, brillos, sombras de color ni glassmorphism.** Las superficies se separan con bordes finos y cambios de tono.
- **La paleta de fábrica de Tailwind está desactivada** (`--color-*: initial`): clases como `bg-orange-500` o `bg-indigo-600` no generan nada. Lo mismo con la escala de texto, radios y sombras de fábrica. Los degradados no se pueden bloquear con tokens; se evitan en la revisión de código.

## Colores por función

Los componentes usan los nombres de función, nunca los colores crudos. El tema oscuro cambia automáticamente según el sistema operativo (`prefers-color-scheme`), sin botón ni JavaScript, así que ningún componente necesita variantes `dark:`.

| Token            | Para qué sirve                                    | Claro     | Oscuro    |
| ---------------- | ------------------------------------------------- | --------- | --------- |
| `page`           | Fondo de la página                                | `#f9f7f5` | `#15110e` |
| `raised`         | Tarjetas y paneles                                | `#ffffff` | `#231e1b` |
| `inverse`        | Bloques oscuros (usar la clase `surface-inverse`) | `#15110e` | `#36302d` |
| `body`           | Texto corrido                                     | `#36302d` | `#e3dfdc` |
| `heading`        | Títulos                                           | `#15110e` | `#f9f7f5` |
| `muted`          | Texto secundario: fechas, notas                   | `#6a635f` | `#b2aca7` |
| `hairline`       | Divisores y bordes decorativos                    | `#e3dfdc` | `#36302d` |
| `control-border` | Bordes de botones y campos                        | `#857f7a` | `#857f7a` |
| `accent`         | Naranja, solo como relleno                        | `#e9894b` | `#e9894b` |
| `accent-hover`   | Naranja al pasar el cursor                        | `#d4793d` | `#d4793d` |
| `on-accent`      | Texto sobre el naranja                            | `#15110e` | `#15110e` |
| `link`           | Enlaces, siempre subrayados                       | `#15110e` | `#e9894b` |
| `focus`          | Anillo de foco del teclado                        | `#15110e` | `#e9894b` |

### Contraste medido (WCAG 2.x)

- Texto corrido: 12.14:1 en claro y 14.17:1 en oscuro. Títulos: 17.57:1 en ambos.
- Texto secundario: 5.51:1 en claro y 8.36:1 en oscuro.
- Texto negro sobre el naranja: 7.28:1 (AAA). El texto blanco sobre ese naranja no pasa (2.57:1), por eso los botones llevan texto negro.
- Naranja como texto sobre fondo claro: 2.41:1, no pasa. Por eso en el tema claro el naranja nunca es texto, y enlaces y foco van en negro.
- Bordes de controles y anillo de foco: 3:1 o más contra todos los fondos.

## Tipografía

- Escala fluida de 360 a 1440 px de ancho: `text-small` (14→15 px), `text-base` (16→18), `text-subtitle` (19→24), `text-title` (26→40) y `text-display` (40→100). Pocos pasos y un salto grande entre el título principal y el texto.
- El tamaño de texto corrido se llama `base` y no `body`, porque `text-body` ya es el color del texto.
- Familias: `font-sans` para texto, `font-display` para títulos y `font-mono` (la monoespaciada del sistema, sin descarga) para código.
- **Atkinson Hyperlegible Next** para texto y títulos, elegida por Kevin. Es del Braille Institute y está diseñada para que cada letra se distinga a primera vista (la I con remates, el cero tachado): pone la legibilidad por delante del estilo. Es una sola familia variable (pesos 200 a 800) y pesa unos 33 KB.
- Los títulos se distinguen por tamaño y peso (700 a 800), sin cambiar de familia ni de ancho.
- Riesgo conocido: Next 16.4 no tiene las métricas de respaldo de esta fuente (`adjustFontFallback: false` en `src/app/fonts.ts`), así que el texto puede moverse un poco cuando la fuente termina de cargar.

## Radios, movimiento y foco

- Radios por función: `rounded-section` y `rounded-media` en 0, `rounded-control` en 4 px y `rounded-tag` redondo solo para etiquetas.
- Transiciones de 160 ms con `--ease-standard`, solo como respuesta a una acción (hover, foco). Sin aparición al hacer scroll. Si el sistema pide reducir el movimiento, las animaciones se anulan.
- Foco visible en todo: contorno de 2 px con 2 px de separación, que deja un espacio del color de la página entre el anillo y un botón naranja.

## Guía rápida

- Página: `bg-page text-body` (ya están en `body`).
- Tarjeta: `bg-raised border border-hairline rounded-section`.
- Botón principal: `bg-accent text-on-accent hover:bg-accent-hover rounded-control`.
- Botón secundario o campo: `border border-control-border rounded-control`.
- Bloque oscuro: `surface-inverse` (ajusta también los colores de texto, enlaces y foco de su contenido).
- Títulos: `font-display` con `text-display`, `text-title` o `text-subtitle`.
