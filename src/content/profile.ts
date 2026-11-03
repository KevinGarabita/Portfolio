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
  // Kevin's own words (4 November 2026): what drives him is solving real problems and
  // seeing the solution in use. The first paragraph is the lead, drawn larger.
  about: [
    {
      es: "Construyo software que resuelve problemas reales.",
      en: "I build software that solves real problems.",
      pt: "Construo software que resolve problemas reais.",
      fr: "Je crée des logiciels qui résolvent de vrais problèmes.",
    },
    {
      es: "Lo que más me motiva es el momento en que una solución sale a producción: ver que la gente la usa todos los días y saber que de verdad le ahorra trabajo a quien me la encargó.",
      en: "What drives me most is the moment a solution goes live: seeing people use it every day and knowing it truly saves work for whoever asked me to build it.",
      pt: "O que mais me motiva é o momento em que uma solução entra em produção: ver as pessoas usando no dia a dia e saber que ela realmente poupa trabalho para quem me encomendou.",
      fr: "Ce qui me motive le plus, c'est le moment où une solution passe en production : voir les gens l'utiliser chaque jour et savoir qu'elle fait vraiment gagner du temps à la personne qui me l'a confiée.",
    },
  ],
  // Kevin's three areas (4 November 2026).
  focusAreas: [
    {
      es: "Desarrollo web",
      en: "Web development",
      pt: "Desenvolvimento web",
      fr: "Développement web",
    },
    {
      es: "Agentes de IA",
      en: "AI agents",
      pt: "Agentes de IA",
      fr: "Agents d'IA",
    },
    {
      es: "Automatizaciones",
      en: "Automation",
      pt: "Automações",
      fr: "Automatisations",
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
