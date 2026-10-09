import type { Project } from "@/types/content";

/** Field report manager built for UxmalTechnologies (freelance). */
export const fieldReportManager: Project = {
  slug: "field-report-manager",
  name: { es: "Gestor de reportes de campo", en: "Field Report Manager" },
  client: "UxmalTechnologies",
  category: "freelance",
  context: { es: "Freelance", en: "Freelance" },
  status: "in-production",
  statusNote: { es: "desde julio 2026", en: "since July 2026" },
  period: { start: "2026-06" },
  isFeatured: true,
  teamSetup: "individual",
  summary: {
    es: "Aplicación web donde los técnicos de instalación registran cada reporte con sus fotos desde el teléfono y el supervisor lo revisa y aprueba. Reemplazó un flujo de tres pasos basado en WhatsApp y captura manual.",
    en: "Web app where installation technicians log each report with its photos from their phone, and the supervisor reviews and approves it. It replaced a three-step process built on WhatsApp and manual data entry.",
  },
  problem: {
    es: "Cada reporte de instalación pasaba por tres pasos: el técnico llenaba un formato por WhatsApp, otra persona capturaba esos datos a mano y las fotos de evidencia se enviaban aparte. La misma información se escribía dos veces y las fotos quedaban separadas del reporte al que pertenecían.",
    en: "Each installation report went through three steps: the technician filled out a form over WhatsApp, another person typed that data in by hand, and the evidence photos were sent separately. The same information was written twice, and the photos were kept apart from the report they belonged to.",
  },
  solution: {
    es: "El técnico captura el reporte desde el teléfono en cuatro secciones (información general, cliente, instalación y georreferencias) y sube las ocho fotos de evidencia que pide cada instalación. El servidor asigna el técnico, el supervisor y el equipo a partir de la sesión, y el campo de la ONT solo ofrece los equipos que ese técnico tiene asignados. Al enviarlo, el reporte pasa a revisión: el supervisor lo revisa, corrige lo necesario y lo aprueba, y en ese momento el sistema genera el PDF con los datos y las fotos. El historial se exporta a Excel por rango de fechas. Un administrador gestiona usuarios, equipos y el inventario de ONTs, que se importa desde Excel.",
    en: "The technician fills in the report from their phone in four sections (general information, customer, installation, and geolocation) and uploads the eight evidence photos each installation requires. The server assigns the technician, supervisor, and team from the session, and the ONT field only lists the devices assigned to that technician. Once submitted, the report goes to review: the supervisor checks it, fixes what is needed, and approves it, and at that point the system generates the PDF with the data and photos. The history can be exported to Excel by date range. An administrator manages users, teams, and the ONT inventory, which is imported from Excel.",
  },
  role: {
    es: "Lo desarrollé solo, de principio a fin: la API en FastAPI, el frontend en React y TypeScript, el modelo de datos y las migraciones en Supabase, la autenticación con Supabase Auth y el acceso por rol, la generación del PDF, la exportación a Excel y el despliegue en Render, con integración continua en GitHub Actions. Hoy le doy mantenimiento.",
    en: "I built it on my own, end to end: the FastAPI API, the React and TypeScript frontend, the data model and migrations in Supabase, authentication with Supabase Auth and role-based access, PDF generation, the Excel export, and the deployment on Render, with continuous integration on GitHub Actions. I maintain it today.",
  },
  results: [
    {
      es: "Lo usan cinco técnicos y un supervisor, y sigo dando mantenimiento.",
      en: "Used by five technicians and one supervisor, with ongoing maintenance.",
    },
    {
      es: "El técnico registra los datos y las fotos en un solo lugar; ya nadie vuelve a capturar el reporte a mano.",
      en: "The technician records the data and photos in one place; nobody retypes the report by hand anymore.",
    },
    {
      es: "Cada reporte aprobado queda como un PDF con sus datos y sus ocho fotos, listo para descargar desde el panel del supervisor.",
      en: "Each approved report is stored as a PDF with its data and its eight photos, ready to download from the supervisor's panel.",
    },
  ],
  highlights: [
    {
      es: "Reemplacé un flujo de tres pasos —formato por WhatsApp, captura manual por otra persona y evidencias aparte— por un formulario único donde el técnico registra el reporte y adjunta sus fotos, con los datos conocidos precargados.",
      en: "Replaced a three-step workflow — a WhatsApp form, manual data entry by another person, and separate evidence collection — with a single form where the technician logs the report and attaches photos, with known data pre-filled.",
    },
    {
      es: "Implementé autenticación con Supabase Auth y acceso por rol: cada técnico ve solo sus reportes y cada supervisor los de sus técnicos asignados. El supervisor revisa, corrige y aprueba; el sistema genera el PDF y exporta el historial a Excel.",
      en: "Implemented authentication with Supabase Auth and role-based access: each technician sees only their own reports, and each supervisor sees those of their assigned technicians. The supervisor reviews, corrects, and approves; the system generates the PDF and exports the history to Excel.",
    },
    {
      es: "Inventario de ONTs: el administrador las importa desde Excel con una vista previa de nuevas, existentes y repetidas; el supervisor las asigna a cada técnico, y un reporte solo acepta una ONT asignada a quien lo captura.",
      en: "ONT inventory: the administrator imports devices from Excel with a preview of new, existing, and repeated entries; the supervisor assigns them to each technician, and a report only accepts an ONT assigned to whoever fills it in.",
    },
    {
      es: "Hecho para trabajar en campo con mala señal: las fotos se comprimen en el teléfono antes de subirse, las peticiones se reintentan cuando falla la red y el formulario avisa antes de cerrarse si hay fotos sin guardar.",
      en: "Built for fieldwork with poor signal: photos are compressed on the phone before upload, requests are retried when the network fails, and the form warns before closing if there are unsaved photos.",
    },
  ],
  stack: [
    "FastAPI",
    "Python",
    "React",
    "TypeScript",
    "Next.js",
    "Material UI",
    "Supabase",
    "PostgreSQL",
    "Docker",
    "Render",
    "GitHub Actions",
  ],
  integrations: ["Supabase Auth", "Supabase Storage"],
  images: [
    {
      src: "/images/projects/field-report-manager/supervisor-validation-panel.webp",
      alt: {
        es: "Panel de validación del supervisor con datos de ejemplo: contadores de reportes pendientes y liquidados, botón para exportar a Excel y tabla de reportes con descarga de PDF.",
        en: "Supervisor validation panel with sample data: counts of pending and settled reports, an Excel export button, and a report table with PDF downloads.",
      },
      width: 1440,
      height: 900,
      viewport: "desktop",
    },
    {
      src: "/images/projects/field-report-manager/technician-report-form.webp",
      alt: {
        es: "Formulario del técnico en el teléfono con datos de ejemplo: sección de instalación con tecnología, tipo de orden, ONT asignada, distrito, terminal, par y metraje.",
        en: "Technician form on a phone with sample data: installation section with technology, order type, assigned ONT, district, terminal, pair, and cable length.",
      },
      width: 750,
      height: 1624,
      viewport: "mobile",
    },
    {
      src: "/images/projects/field-report-manager/technician-evidence-photos.webp",
      alt: {
        es: "Paso de evidencias en el teléfono con fotos de ejemplo: cada foto tiene su espacio y el botón para enviar a revisión se activa al completar las ocho.",
        en: "Evidence step on a phone with sample photos: each photo has its own slot, and the submit-for-review button turns on once all eight are in.",
      },
      width: 750,
      height: 1624,
      viewport: "mobile",
    },
    {
      src: "/images/projects/field-report-manager/supervisor-report-review.webp",
      alt: {
        es: "Revisión de un reporte con datos de ejemplo: datos del expediente, del cliente y del personal asignado junto a las ocho fotos de evidencia.",
        en: "Review of a report with sample data: case, customer, and assigned staff details next to the eight evidence photos.",
      },
      width: 1440,
      height: 900,
      viewport: "desktop",
    },
  ],
  links: [],
  decisions: [
    {
      es: "Serví la API bajo /api del mismo dominio que el frontend, con una regla de rewrite en Render. Con frontend y API en dos subdominios de onrender.com, la cookie de sesión era de terceros y Safari la bloqueaba: el inicio de sesión fallaba en iPhone y funcionaba en Chrome de escritorio. El backend ahora se niega a arrancar si los dos orígenes no comparten sitio.",
      en: "I served the API under /api on the same domain as the frontend, through a rewrite rule on Render. With the frontend and API on two onrender.com subdomains, the session cookie was third-party and Safari blocked it: login failed on iPhone and worked on desktop Chrome. The backend now refuses to start if the two origins are not on the same site.",
    },
    {
      es: "El PDF se arma con un límite de 250 KB: primero se reducen las fotos generales y se conservan nítidas las de la ONT y el formato R20, que sirven para la verificación técnica. Al aprobar el reporte, las fotos se borran del almacenamiento y el PDF queda como registro; un trabajo semanal elimina los reportes aprobados con más de un año, según la regla de retención del negocio.",
      en: "The PDF is built with a 250 KB limit: the general photos are reduced first, and the ONT and R20 form photos stay sharp because they are used for technical verification. When a report is approved, its photos are deleted from storage and the PDF remains as the record; a weekly job removes approved reports older than one year, per the business's retention rule.",
    },
    {
      es: "El cliente nunca fija el estado, el técnico, el equipo ni la fecha de liquidación: los pone el servidor. Cada endpoint sensible aplica el filtro por rol y por recurso en la lectura y otra vez en la escritura, y las operaciones que pueden chocar (instalar o reasignar una ONT, aprobar o borrar un reporte) corren en funciones transaccionales de Postgres.",
      en: "The client never sets the status, technician, team, or settlement date: the server does. Every sensitive endpoint applies the role and resource filter on the read and again on the write, and operations that can collide (installing or reassigning an ONT, approving or deleting a report) run in transactional Postgres functions.",
    },
    {
      es: "Cada vulnerabilidad corregida tiene una prueba de regresión en pytest. La integración continua las ejecuta junto con pip-audit, npm audit y gitleaks.",
      en: "Every fixed vulnerability has a regression test in pytest. Continuous integration runs them alongside pip-audit, npm audit, and gitleaks.",
    },
  ],
  failureHandling: [
    {
      es: "Si falla la red, cada petición se reintenta dos veces antes de mostrar el error, y si la sesión expiró se renueva una vez y se repite la petición.",
      en: "If the network fails, each request is retried twice before showing an error, and if the session has expired it is renewed once and the request is repeated.",
    },
    {
      es: "Los botones de guardar y enviar se bloquean mientras la petición está en curso, para que un doble toque con señal lenta no cree un reporte duplicado. Si el borrador se guardó pero falló el envío a revisión, el reintento actualiza ese mismo borrador.",
      en: "The save and submit buttons are disabled while a request is in progress, so a double tap on a slow connection does not create a duplicate report. If the draft was saved but sending it to review failed, the retry updates that same draft.",
    },
    {
      es: "Antes de pasar a revisión o de aprobarse, el servidor valida los campos obligatorios, las ocho fotos, las coordenadas y que la ONT pertenezca al técnico, y responde con la lista exacta de lo que falta.",
      en: "Before a report goes to review or gets approved, the server checks the required fields, the eight photos, the coordinates, and that the ONT belongs to the technician, and replies with the exact list of what is missing.",
    },
    {
      es: "Generar el PDF y subir fotos tienen límite de concurrencia y de frecuencia; si el servidor está ocupado, responde con un mensaje claro para reintentar en lugar de quedarse colgado.",
      en: "PDF generation and photo uploads have concurrency and rate limits; when the server is busy, it replies with a clear message to try again instead of hanging.",
    },
  ],
  lastUpdated: "2026-10-09",
};
