import type { Project } from "@/types/content";

import { placeholderText } from "../placeholder";

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
  images: [],
  links: [],
  lastUpdated: "2026-10-09",
};
