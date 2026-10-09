import type { LocalizedText, Project } from "@/types/content";

import { placeholderText } from "./placeholder";

const fiveAgentsHighlight: LocalizedText = {
  es: "Desarrollé cinco agentes conversacionales en n8n con la API de OpenAI, uno por cliente, integrados con GoHighLevel y WhatsApp: atienden la conversación, califican al prospecto y registran el lead en el CRM.",
  en: "Built five conversational agents in n8n with the OpenAI API, one per client, integrated with GoHighLevel and WhatsApp: they handle the conversation, qualify the lead, and register it in the CRM.",
};

/**
 * Case studies, one page each at /[lang]/projects/[slug]. The order here is the order on the site.
 * Highlights and results quote Kevin's CV word for word; narrative fields stay as placeholders
 * until Kevin provides the details.
 */
export const projects: Project[] = [
  {
    slug: "field-report-manager",
    name: { es: "Gestor de reportes de campo", en: "Field Report Manager" },
    client: "UxmalTechnologies",
    context: { es: "Freelance", en: "Freelance" },
    status: "in-production",
    statusNote: { es: "desde julio 2026", en: "since July 2026" },
    isFeatured: true,
    teamSetup: "individual",
    summary: placeholderText(
      "Resumen de una o dos frases para la tarjeta del proyecto.",
    ),
    problem: placeholderText(
      "Problema: el CV ya dice que era un flujo de tres pasos (formato por WhatsApp, captura manual por otra persona y evidencias aparte). ¿Qué problemas causaba (tiempo, errores, evidencias perdidas)?",
    ),
    solution: placeholderText(
      "Solución: cómo funciona el sistema, a grandes rasgos.",
    ),
    role: placeholderText(
      "Rol: describe tu trabajo en el proyecto (me confirmaste que lo hiciste sin equipo).",
    ),
    results: [
      {
        es: "Lo usan cinco técnicos y un supervisor, y sigo dando mantenimiento.",
        en: "Used by five technicians and one supervisor, with ongoing maintenance.",
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
    ],
    stack: ["FastAPI", "React", "TypeScript", "Supabase", "Render"],
    integrations: [],
    lastUpdated: "2026-10-09",
  },
  {
    slug: "motosureste-suzuki-agent",
    name: {
      es: "Agente conversacional para Motosureste Suzuki",
      en: "Conversational agent for Motosureste Suzuki",
    },
    client: "Motosureste Suzuki",
    context: { es: "Kobler y Asociados", en: "Kobler y Asociados" },
    isFeatured: false,
    teamSetup: "team",
    summary: placeholderText(
      "Resumen de una o dos frases para la tarjeta del proyecto.",
    ),
    problem: placeholderText(
      "Problema: el CV indica que los asesores atendían todas las conversaciones. ¿Qué más puedes confirmar de cómo era antes del agente?",
    ),
    solution: placeholderText(
      "Solución: cómo funciona el flujo del agente, a grandes rasgos.",
    ),
    role: placeholderText(
      "Rol: qué parte hiciste tú dentro del equipo de Kobler.",
    ),
    results: [
      placeholderText(
        "Resultado. El CV dice que los asesores dejaron de atender todas las conversaciones; ¿algo más que puedas confirmar?",
      ),
    ],
    highlights: [
      fiveAgentsHighlight,
      {
        es: "Motosureste Suzuki: el agente resuelve dudas de venta y financiamiento y filtra a los prospectos sin intención de compra, así los asesores dejaron de atender todas las conversaciones y se enfocan en cerrar ventas.",
        en: "Motosureste Suzuki: the agent answers sales and financing questions and filters out prospects with no purchase intent, so sales advisors stopped handling every conversation and could focus on closing sales.",
      },
    ],
    stack: ["n8n", "OpenAI API"],
    integrations: ["GoHighLevel", "WhatsApp"],
    lastUpdated: "2026-10-09",
  },
  {
    slug: "neorgana-agent",
    name: {
      es: "Agente conversacional para Neorgana",
      en: "Conversational agent for Neorgana",
    },
    client: "Neorgana",
    context: { es: "Kobler y Asociados", en: "Kobler y Asociados" },
    isFeatured: false,
    teamSetup: "team",
    summary: placeholderText(
      "Resumen de una o dos frases para la tarjeta del proyecto.",
    ),
    problem: placeholderText(
      "Problema: cómo se agendaban las consultas antes del agente.",
    ),
    solution: placeholderText(
      "Solución: cómo funciona el flujo del agente, a grandes rasgos.",
    ),
    role: placeholderText(
      "Rol: qué parte hiciste tú dentro del equipo de Kobler.",
    ),
    results: [placeholderText("Resultado que puedas confirmar.")],
    highlights: [
      fiveAgentsHighlight,
      {
        es: "Neorgana: agente que responde a los pacientes y les envía el calendario del doctor para agendar su consulta en Zoom, selecciona al consultor por idioma, ubicación y padecimiento, y al terminar la videollamada dispara el seguimiento y la cotización.",
        en: "Neorgana: an agent that responds to patients and sends the doctor's calendar to schedule a Zoom consultation, selecting the consultant by language, location, and condition, and triggering follow-up and a quote once the video call ends.",
      },
    ],
    stack: ["n8n", "OpenAI API"],
    integrations: ["GoHighLevel", "WhatsApp", "Zoom"],
    lastUpdated: "2026-10-09",
  },
  {
    slug: "controltec-pest-control-crm",
    name: { es: "CRM para control de plagas", en: "Pest Control CRM" },
    client: "Controltec Fumigaciones",
    context: { es: "Freelance", en: "Freelance" },
    status: "in-development",
    statusNote: {
      es: "Entrega prevista: diciembre 2026",
      en: "Expected delivery: December 2026",
    },
    isFeatured: false,
    teamSetup: "individual",
    summary: placeholderText(
      "Resumen de una o dos frases para la tarjeta del proyecto.",
    ),
    problem: placeholderText(
      "Problema: cómo registraban las visitas antes del sistema.",
    ),
    solution: placeholderText(
      "Solución: cómo funciona el sistema, a grandes rasgos.",
    ),
    role: placeholderText(
      "Rol: describe tu trabajo en el proyecto (me confirmaste que lo hiciste sin equipo).",
    ),
    results: [
      {
        es: "El cliente contrató también el mantenimiento.",
        en: "The client also contracted ongoing maintenance.",
      },
    ],
    highlights: [
      {
        es: "Los técnicos escanean el QR de cada estación de control y registran en sitio el estado de la estación y del cebo, las plagas encontradas y la evidencia fotográfica.",
        en: "Technicians scan the QR code at each control station and log the station and bait status, pests found, and photo evidence on-site.",
      },
      {
        es: "Integré la API de Meta para el envío automático de plantillas de WhatsApp y Google Maps para ubicar clientes. Incluye cotizaciones, calendario, clientes y estadísticas.",
        en: "Integrated the Meta API for automatic WhatsApp template messages and Google Maps for locating clients. Includes quotes, calendar, clients, and statistics.",
      },
    ],
    stack: ["FastAPI", "React", "TypeScript", "Supabase", "Render"],
    integrations: ["WhatsApp Cloud API (Meta)", "Google Maps"],
    lastUpdated: "2026-10-09",
  },
];
