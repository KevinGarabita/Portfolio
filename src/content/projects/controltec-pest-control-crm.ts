import type { Project } from "@/types/content";

const imageDir = "/images/projects/controltec-pest-control-crm";

/** Pest control CRM built for Controltec Fumigaciones (freelance). */
export const controltecPestControlCrm: Project = {
  slug: "controltec-pest-control-crm",
  name: { es: "CRM para control de plagas", en: "Pest Control CRM" },
  client: "Controltec Fumigaciones",
  category: "freelance",
  context: { es: "Freelance", en: "Freelance" },
  status: "in-development",
  statusNote: {
    es: "Entrega prevista: diciembre 2026",
    en: "Expected delivery: December 2026",
  },
  period: { start: "2026-07" },
  kind: "web-app",
  isFeatured: true,
  buildMethod: "vibe-coded",
  teamSetup: "individual",
  summary: {
    es: "CRM para una empresa de control de plagas. Los técnicos escanean el QR de cada estación y llenan el reporte en sitio, la oficina agenda y cotiza, y cada cliente consulta en un portal sus reportes firmados.",
    en: "CRM for a pest control company. Technicians scan the QR code on each station and fill in the report on-site, the office schedules and quotes, and each client checks their signed reports in a portal.",
  },
  problem: {
    es: "En una auditoría sanitaria, una empresa de control de plagas tiene que demostrar qué pasó en cada visita: qué estaciones se revisaron, qué se encontró, qué producto se aplicó y quién firmó. El reporte de servicio era el formato impreso de la empresa y el certificado de control de plagas se expedía a mano. Además, los técnicos trabajan en bodegas y sótanos donde la señal se pierde.",
    en: "In a health audit, a pest control company has to prove what happened at every visit: which stations were checked, what was found, which product was applied and who signed. The service report was the company's printed form, and the pest control certificate was issued by hand. On top of that, technicians work in warehouses and basements where the signal drops.",
  },
  solution: {
    es: "Una sola API en FastAPI atiende a una web con tres vistas y a una app móvil. En la oficina se agenda, se lleva la cartera de clientes con sus direcciones y estaciones, se cotiza y se da seguimiento a los cobros. En campo, el técnico abre su jornada, escanea el QR de cada estación y completa el reporte en cuatro pasos: estaciones, productos aplicados, evidencias y firmas del cliente y del técnico. Al firmar, el sistema archiva el PDF, emite el certificado cuando corresponde y avisa al cliente por WhatsApp. En el portal, cada cliente consulta sus servicios, sus próximas visitas, sus estaciones y sus certificados.",
    en: "A single FastAPI API serves a web app with three views and a mobile app. In the office, staff schedule visits, manage clients with their addresses and stations, prepare quotes and follow up on payments. In the field, the technician opens their day, scans the QR code on each station and completes the report in four steps: stations, applied products, evidence, and the client's and technician's signatures. On signing, the system archives the PDF, issues the certificate when it applies and notifies the client on WhatsApp. In the portal, each client checks their services, upcoming visits, stations and certificates.",
  },
  role: {
    es: "Desarrollo el proyecto solo, de punta a punta. Diseñé la base de datos en Supabase (PostgreSQL) y la mantengo con migraciones versionadas; construí la API en FastAPI, organizada por módulos de negocio; implementé la web en React, TypeScript y Material UI a partir de un prototipo en Figma, y la app de campo con Expo y React Native. Integré WhatsApp Cloud API y Google Maps, configuré el despliegue en Render y escribí más de mil pruebas automatizadas para el backend.",
    en: "I build the project on my own, end to end. I designed the database in Supabase (PostgreSQL) and maintain it through versioned migrations; built the FastAPI API, organized by business module; implemented the web app in React, TypeScript and Material UI from a Figma prototype, and the field app with Expo and React Native. I integrated the WhatsApp Cloud API and Google Maps, set up the deployment on Render and wrote more than a thousand automated tests for the backend.",
  },
  results: [
    {
      es: "El cliente contrató también el mantenimiento.",
      en: "The client also contracted ongoing maintenance.",
    },
  ],
  highlights: [
    {
      es: "Cada estación de control lleva una etiqueta con código QR. El técnico la escanea y registra en sitio el hallazgo (por ejemplo, el consumo del cebo), el estado del dispositivo, las plagas encontradas y una fotografía. El reporte no se puede firmar mientras falte una estación del servicio.",
      en: "Each control station has a QR label. The technician scans it and records on-site the finding (for example, bait consumption), the device's condition, the pests found and a photo. The report cannot be signed while a station of the service is still missing.",
    },
    {
      es: "Cuando firman el cliente y el técnico, el sistema genera el PDF con el formato de la empresa y lo archiva sin cambios: es la evidencia que se presenta en una auditoría. Si el cliente es persona moral y se aplicaron productos, también emite el certificado de control de plagas con la firma del propietario.",
      en: "Once the client and the technician sign, the system generates the PDF in the company's format and archives it unchanged: it is the evidence shown in an audit. If the client is a legal entity and products were applied, it also issues the pest control certificate with the owner's signature.",
    },
    {
      es: "Integré la API de WhatsApp Cloud de Meta para enviar una plantilla al cliente cuando se firma su reporte, y Google Maps para ubicar en el mapa las direcciones de los clientes y abrir la ruta desde el teléfono del técnico.",
      en: "I integrated Meta's WhatsApp Cloud API to send the client a template message when their report is signed, and Google Maps to pin client addresses on the map and open directions from the technician's phone.",
    },
    {
      es: "La app de campo, hecha con Expo y React Native, permite terminar el reporte completo sin señal: guarda cada paso en el teléfono y lo envía sola cuando vuelve la conexión, sin duplicar reportes ni cobros.",
      en: "The field app, built with Expo and React Native, lets the technician finish the whole report without signal: it stores every step on the phone and sends it on its own when the connection returns, without duplicating reports or payments.",
    },
    {
      es: "La oficina tiene agenda por mes, semana, día y técnico, clientes con sus direcciones y estaciones, cotizaciones en PDF, servicios recurrentes, ingresos y cuentas por cobrar, y estadísticas de plagas y tendencias de estaciones.",
      en: "The office side has a schedule by month, week, day and technician, clients with their addresses and stations, PDF quotes, recurring services, income and receivables, and statistics on pests and station trends.",
    },
  ],
  stack: [
    "FastAPI",
    "Python",
    "React",
    "TypeScript",
    "Material UI",
    "Expo",
    "React Native",
    "Supabase",
    "PostgreSQL",
    "Render",
  ],
  integrations: ["WhatsApp Cloud API (Meta)", "Google Maps"],
  images: [
    {
      src: `${imageDir}/office-dashboard.webp`,
      alt: {
        es: "Tablero de oficina con datos de ejemplo: servicios de la semana, servicios por día y carga por técnico",
        en: "Office dashboard with sample data: the week's services, services per day and workload per technician",
      },
      width: 1440,
      height: 900,
      viewport: "desktop",
    },
    {
      src: `${imageDir}/weekly-schedule.webp`,
      alt: {
        es: "Agenda semanal con servicios de ejemplo, de colores según su estado",
        en: "Weekly schedule with sample services, colored by status",
      },
      width: 1440,
      height: 900,
      viewport: "desktop",
    },
    {
      src: `${imageDir}/field-report-stations.webp`,
      alt: {
        es: "Paso de estaciones del reporte de campo con datos de ejemplo: tres de seis estaciones capturadas",
        en: "Stations step of the field report with sample data: three of six stations recorded",
      },
      width: 750,
      height: 1624,
      viewport: "mobile",
    },
    {
      src: `${imageDir}/station-inspection-form.webp`,
      alt: {
        es: "Formulario de inspección de una estación con datos de ejemplo: hallazgo, estado del dispositivo y plaga detectada",
        en: "Station inspection form with sample data: finding, device condition and detected pest",
      },
      width: 750,
      height: 1624,
      viewport: "mobile",
    },
  ],
  links: [],
  decisions: [
    {
      es: "FastAPI es la única puerta a los datos: ni el navegador ni la app hablan con Supabase, y las fotos, firmas y PDF se sirven a través de la API.",
      en: "FastAPI is the only way into the data: neither the browser nor the app talks to Supabase, and photos, signatures and PDFs are served through the API.",
    },
    {
      es: "Los permisos se asignan por capacidad y no por rol. Cada endpoint declara la que exige, y un registro fuera del alcance del usuario responde 404 para no revelar qué clientes existen.",
      en: "Permissions are granted by capability, not by role. Each endpoint declares the one it requires, and a record outside the user's scope returns 404 so it does not reveal which clients exist.",
    },
    {
      es: "Un reporte firmado no se edita: el PDF se archiva al momento de firmar y no se vuelve a generar con catálogos que pudieron cambiar después.",
      en: "A signed report is never edited: the PDF is archived at signing time and is not regenerated from catalogs that may have changed since.",
    },
    {
      es: "Se desarrolla contra un Supabase local en Docker con datos anonimizados. El backend, la web y la app se niegan a arrancar en desarrollo si apuntan a producción.",
      en: "Development runs against a local Supabase in Docker with anonymized data. The backend, the web app and the mobile app refuse to start in development if they point to production.",
    },
  ],
  failureHandling: [
    {
      es: "El aviso por WhatsApp corre en segundo plano después de responder: si falla, el reporte queda firmado igual. Solo reintenta, hasta tres veces, los errores transitorios.",
      en: "The WhatsApp notice runs in the background after the response is sent: if it fails, the report is still signed. Only transient errors are retried, up to three times.",
    },
    {
      es: "En la app de campo, cada acción entra a una cola en SQLite. El cierre del reporte y la declaración de pago llevan una llave generada en el teléfono, así que reenviarlos tras perder la respuesta no crea un segundo reporte ni un segundo ingreso.",
      en: "In the field app, every action goes into a SQLite queue. Closing the report and declaring the payment carry a key generated on the phone, so resending them after a lost response does not create a second report or a second income record.",
    },
    {
      es: "Si el servidor rechaza un envío, nada se borra: queda en «Requiere atención» con el motivo, y el técnico decide si lo reintenta, lo corrige o lo descarta.",
      en: "If the server rejects a submission, nothing is deleted: it stays under “Needs attention” with the reason, and the technician decides whether to retry, fix or discard it.",
    },
  ],
  nextSteps: {
    es: "Lo que sigue: compilar y probar la app en iOS, hacer que la cámara del teléfono abra la app al escanear una etiqueta (hoy abre la web) y construir el módulo de egresos.",
    en: "Next: build and test the app on iOS, make the phone's camera open the app when scanning a label (today it opens the web app) and build the expenses module.",
  },
  lastUpdated: "2026-10-09",
};
