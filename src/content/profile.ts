import type { Profile } from "@/types/content";

/** Personal data. Source: Kevin's CV (Spanish and English versions) and his answers. */
export const profile: Profile = {
  displayName: "Kevin Garabita",
  fullName: "Kevin Emanuel Garabita Córdova",
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
  about: [
    {
      es: "Estudiante de 7.º semestre de Ingeniería en Desarrollo de Tecnologías y Software. Construyo aplicaciones web de punta a punta con FastAPI, React, TypeScript y Supabase, y desarrollo con Claude Code.",
      en: "Seventh-semester Software and Technology Development Engineering student. I build web applications end to end with FastAPI, React, TypeScript, and Supabase, and I develop with Claude Code.",
      pt: "Estudante do sétimo semestre de Engenharia em Desenvolvimento de Tecnologias e Software. Construo aplicações web de ponta a ponta com FastAPI, React, TypeScript e Supabase, e desenvolvo com o Claude Code.",
      fr: "Étudiant en septième semestre d'ingénierie en développement de technologies et de logiciels. Je crée des applications web de bout en bout avec FastAPI, React, TypeScript et Supabase, et je développe avec Claude Code.",
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
  ],
  // Only Spanish and English exist; Portuguese and French pages get the Spanish CV.
  resumeFiles: {
    es: "/cv/kevin-garabita-cv-es.pdf",
    en: "/cv/kevin-garabita-cv-en.pdf",
  },
};
