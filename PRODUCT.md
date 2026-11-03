# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos públicos, con más peso para los reclutadores (decisión de Kevin, 3 de noviembre de 2026; antes tenían el mismo peso):

- **Reclutadores y quien contrata desarrolladores (público principal)**: revisan muchos perfiles rápido y necesitan saber en segundos el rol, el stack, la experiencia real y la formación, con el CV a un clic. La home es para ellos: el CV es la acción principal.
- **Clientes**: negocios o personas que buscan quién les construya una aplicación web, un backend, una automatización o un agente de IA, y quieren ver proyectos reales antes de escribir. Tienen su propia página, `/[lang]/services`, con WhatsApp como acción principal; la home los lleva ahí con un enlace en la portada y en el contacto.

Llegan sobre todo desde LinkedIn, el CV, enlaces compartidos y búsquedas, en escritorio y en teléfono.

## Product Purpose

Portafolio personal de Kevin Garabita (garasoftware.com.mx): presentar quién es, qué construye y con qué, y convertir la visita en contacto. Éxito = que el reclutador **abra el CV** y que el cliente **escriba por WhatsApp**.

## Positioning

Desarrollador Backend, IA y Automatización en Mérida, Yucatán, que ya tiene agentes de IA en producción para clientes reales (cinco agentes de WhatsApp desarrollados en equipo en Kobler y Asociados, la agencia de marketing donde trabajó) y aplicaciones web completas con FastAPI, React, TypeScript y Supabase, mientras termina la ingeniería (titulación prevista en agosto de 2027).

## Operating Context

- Cuatro idiomas: español, inglés, portugués y francés (`/es`, `/en`, `/pt`, `/fr`); el CV existe en español e inglés.
- Páginas: home, todos los proyectos, un caso de estudio por proyecto y servicios (para clientes).
- Disponibilidad: abierto a empleo y a proyectos freelance; acepta remoto, híbrido y presencial. Mes de inicio sin confirmar.

## Capabilities and Constraints

- Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript; desplegado en Vercel.
- Todo el texto vive en `src/content/` y `src/i18n/dictionaries/`; cualquier texto nuevo necesita las cuatro traducciones.
- La home no tiene JavaScript propio: solo los componentes del encabezado (menú, selector de idioma y fondo al hacer scroll).
- Los precios no se publican: dependen de lo que se va a construir y Kevin cotiza cada proyecto.
- Rendimiento y accesibilidad medidos: Lighthouse 95+ y accesibilidad 100, CLS 0, axe sin violaciones (ver `docs/decisions.md`).

## Brand Commitments

- Nombre "Kevin Garabita"; marca Garasoftware en el dominio.
- Kevin pidió conservar su foto recortada sobre el disco naranja-rojo con el anillo en órbita (12 de octubre de 2026); las etiquetas flotantes se quitaron a pedido suyo (2 de noviembre de 2026).
- Le gusta el diseño actual: tema oscuro, naranja `#ff6a00` como acento, fuente Atkinson Hyperlegible Next. El 3 de noviembre de 2026 pidió más gancho y profesionalismo, menos adornos que distraigan y que en teléfono se vea muy bien: los negros y grises pasaron a neutros cálidos (ver `docs/design.md`), con el mismo naranja.
- El 2 de noviembre de 2026 probó un rediseño completo («Línea de Metro»: señalización tipo Metro, una línea naranja como columna de la página y un pictograma junto a su nombre) y prefirió su diseño original. Su mundo visual actual es el que se queda; el trabajo de diseño es de refinamiento dentro de él, no de reemplazo, y nada de íconos o pictogramas junto a su nombre.
- Pidió que la página no se vea hecha con IA.

## Evidence on Hand

- Kobler y Asociados es la agencia de marketing donde Kevin trabajó como empleado. Lo que hizo ahí se acredita "en Kobler" ("Hecho en…", "En equipo en…"), nunca "para" ni "en colaboración con" Kobler.

- Proyectos (`src/content/projects/`): Diagnóstico en vivo para el workshop Appolo (en producción), gestión de servicios de control de plagas para Controltec (en desarrollo; es un FSM, no un CRM), Gestor de reportes de campo (completado, no publicado), y tres agentes hechos en equipo en Kobler: Motosureste Suzuki, Neorgana y Lamau Beach (en producción). El workshop y los agentes son trabajo de Kevin como empleado de Kobler, no proyectos propios ni de una colaboración externa. Capturas reales en `public/images/projects/`.
- Experiencia: Kobler y Asociados, agencia de marketing, diciembre 2025 a noviembre 2026 (`src/content/experience.ts`).
- Formación: Universidad Modelo, 7.º semestre (`src/content/education.ts`).
- CV en PDF (`public/cv/`), LinkedIn y GitHub.
- No hay testimonios, logos de clientes con permiso ni métricas de negocio más allá de las de los casos de estudio: no se inventan.

## Product Principles

1. Un visitante entiende en cinco segundos quién es Kevin, qué hace y cómo contactarlo o ver su CV.
2. Las pruebas reales (proyectos en producción, experiencia, stack) van antes que las promesas.
3. WhatsApp y el CV siempre a la mano; ninguna otra acción compite con ellos. En la home manda el CV; en servicios, WhatsApp.
4. Nada inventado: cada dato sale del CV, de los casos de estudio o de Kevin.
5. Rápida y accesible en los cuatro idiomas, primero en teléfono: en un teléfono de 390 × 664 la frase, el CV y WhatsApp caben en la primera pantalla.

## Accessibility & Inclusion

WCAG 2.2 AA: contraste medido, foco visible, navegación con teclado y `prefers-reduced-motion` respetado (ver `docs/design.md`).
