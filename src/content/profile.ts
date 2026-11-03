import type { Profile } from "@/types/content";

/** Personal data. Source: Kevin's CV (Spanish and English versions) and his answers. */
export const profile: Profile = {
  displayName: "Kevin Garabita",
  fullName: "Kevin Emanuel Garabita Córdova",
  // The name of the domain (garasoftware.com.mx) and the Instagram account (Kevin, 3 November 2026).
  brandName: "Garasoftware",
  role: {
    es: "Desarrollador Backend, IA y Automatización",
    en: "Backend, AI & Automation Engineer",
    pt: "Desenvolvedor Backend, IA e Automação",
    fr: "Développeur Backend, IA et Automatisation",
  },
  heroSubtitle: {
    es: "Construyo sistemas y asistentes de IA que le ahorran horas de trabajo a tu negocio",
    en: "I build systems and AI assistants that save your business hours of work",
    pt: "Construo sistemas e assistentes de IA que economizam horas de trabalho para o seu negócio",
    fr: "Je crée des systèmes et des assistants d'IA qui font gagner des heures de travail à votre entreprise",
  },
  heroSubtitleHighlight: {
    es: "horas de trabajo",
    en: "hours of work",
    pt: "horas de trabalho",
    fr: "heures de travail",
  },
  about: [
    {
      es: "Estudiante de 7.º semestre de Ingeniería en Desarrollo de Tecnologías y Software. Construyo aplicaciones web de punta a punta con FastAPI, React, TypeScript y Supabase, y desarrollo con Claude Code.",
      en: "Seventh-semester Software and Technology Development Engineering student. I build web applications end to end with FastAPI, React, TypeScript, and Supabase, and I develop with Claude Code.",
      pt: "Estudante do sétimo semestre de Engenharia em Desenvolvimento de Tecnologias e Software. Construo aplicações web de ponta a ponta com FastAPI, React, TypeScript e Supabase, e desenvolvo com o Claude Code.",
      fr: "Étudiant en septième semestre d'ingénierie en développement de technologies et de logiciels. Je crée des applications web de bout en bout avec FastAPI, React, TypeScript et Supabase, et je développe avec Claude Code.",
    },
  ],
  // The CV's role and skills, as keywords: nothing beyond them.
  focusAreas: [
    {
      es: "APIs con FastAPI",
      en: "APIs with FastAPI",
      pt: "APIs com FastAPI",
      fr: "API avec FastAPI",
    },
    {
      es: "Agentes de IA",
      en: "AI agents",
      pt: "Agentes de IA",
      fr: "Agents d'IA",
    },
    {
      es: "Automatización con n8n",
      en: "Automation with n8n",
      pt: "Automação com n8n",
      fr: "Automatisation avec n8n",
    },
    {
      es: "Apps web de punta a punta",
      en: "End-to-end web apps",
      pt: "Apps web de ponta a ponta",
      fr: "Applications web de bout en bout",
    },
  ],
  location: {
    city: "Mérida",
    region: "Yucatán",
    countryCode: "MX",
    country: { es: "México", en: "Mexico", pt: "México", fr: "Mexique" },
  },
  email: "kevingarabita0@outlook.com",
  phone: {
    display: "+52 938 389 4199",
    international: "+529383894199",
  },
  whatsApp: {
    number: "529383894199",
    prefilledMessage: {
      es: "Hola Kevin, vi tu portafolio y me gustaría platicar contigo.",
      en: "Hi Kevin, I saw your portfolio and would like to talk with you.",
      pt: "Olá, Kevin! Vi seu portfólio e gostaria de conversar com você.",
      fr: "Bonjour Kevin, j'ai vu votre portfolio et j'aimerais échanger avec vous.",
    },
  },
  socialProfiles: [
    { network: "linkedin", url: "https://www.linkedin.com/in/kevingarabita/" },
    { network: "github", url: "https://github.com/KevinGarabita" },
    { network: "instagram", url: "https://www.instagram.com/garasoftwaremx/" },
  ],
  // Only Spanish and English exist; Portuguese and French pages get the Spanish CV.
  resumeFiles: {
    es: "/cv/kevin-garabita-cv-es.pdf",
    en: "/cv/kevin-garabita-cv-en.pdf",
  },
};
