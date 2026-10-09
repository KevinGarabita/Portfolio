import type { Profile } from "@/types/content";

import { placeholderText } from "./placeholder";

/** Personal data. Source: Kevin's CV (Spanish and English versions) and his answers. */
export const profile: Profile = {
  displayName: "Kevin Garabita",
  fullName: "Kevin Emanuel Garabita Córdova",
  role: {
    es: "Desarrollador Backend, IA y Automatización",
    en: "Backend, AI & Automation Developer",
  },
  headline: placeholderText(
    "Frase del hero. Se redacta en la fase 3 solo con datos del CV y se aprueba en el preview.",
  ),
  about: [
    {
      es: "Estudiante de séptimo semestre de Ingeniería en Desarrollo de Tecnologías y Software. Durante nueve meses desarrollé agentes conversacionales y automatizaciones en n8n con la API de OpenAI para cinco clientes, integrando GoHighLevel, WhatsApp, Zoom y WooCommerce vía APIs REST y webhooks, y me hice cargo del monitoreo y la corrección de fallas en producción. En paralelo construyo aplicaciones web con FastAPI, React, TypeScript y Supabase; una está en producción con usuarios reales.",
      en: "Seventh-semester student of Software and Technology Development Engineering. Over nine months I built conversational agents and automations in n8n using the OpenAI API for five clients, integrating GoHighLevel, WhatsApp, Zoom, and WooCommerce via REST APIs and webhooks, and I was responsible for monitoring and fixing issues in production. In parallel, I build web applications with FastAPI, React, TypeScript, and Supabase; one is in production with real users.",
    },
  ],
  location: {
    city: "Mérida",
    region: "Yucatán",
    countryCode: "MX",
    country: { es: "México", en: "Mexico" },
  },
  timeZone: "America/Merida",
  workMode: { es: "Trabajo remoto", en: "Remote work" },
  availability: {
    es: "Disponible de lunes a domingo hasta las 2:00 p.m. (clases por la tarde), fines de semana incluidos",
    en: "Available Monday to Sunday until 2:00 p.m. (classes in the afternoon), weekends included",
  },
  email: "kevingarabita0@outlook.com",
  phone: {
    display: "+52 938 389 4199",
    international: "+529383894199",
  },
  socialProfiles: [
    { network: "linkedin", url: "https://www.linkedin.com/in/kevingarabita/" },
    { network: "github", url: "https://github.com/KevinGarabita" },
  ],
  resumeFiles: {
    es: "/cv/kevin-garabita-cv-es.pdf",
    en: "/cv/kevin-garabita-cv-en.pdf",
  },
};
