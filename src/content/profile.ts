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
    es: "Construyo apps web, backends, automatizaciones y agentes de IA que le quitan trabajo manual a tu negocio.",
    en: "I build web apps, backends, automations and AI agents that take the manual work out of your business.",
    pt: "Desenvolvo aplicações web, backends, automações e agentes de IA que tiram trabalho manual do seu negócio.",
    fr: "Applications web, backends, automatisations et agents d'IA : je libère votre entreprise des tâches manuelles.",
  },
  about: [
    {
      es: "Estudiante de 7.º semestre de Ingeniería en Desarrollo de Tecnologías y Software. Durante nueve meses en Kobler y Asociados desarrollé en equipo agentes de IA y automatizaciones con n8n y la API de OpenAI para cinco clientes, y los mantuve funcionando en producción. Además, construyo aplicaciones web de punta a punta con FastAPI, React, TypeScript y Supabase, y desarrollo con Claude Code.",
      en: "Seventh-semester Software and Technology Development Engineering student. For nine months at Kobler y Asociados, I co-developed AI agents and automations with n8n and the OpenAI API for five clients and kept them running in production. I also build web applications end to end with FastAPI, React, TypeScript, and Supabase, and I develop with Claude Code.",
      pt: "Estudante do sétimo semestre de Engenharia em Desenvolvimento de Tecnologias e Software. Durante nove meses na Kobler y Asociados, desenvolvi em equipe agentes de IA e automações com n8n e a API da OpenAI para cinco clientes e os mantive funcionando em produção. Também construo aplicações web de ponta a ponta com FastAPI, React, TypeScript e Supabase, e desenvolvo com o Claude Code.",
      fr: "Étudiant en septième semestre d'ingénierie en développement de technologies et de logiciels. Pendant neuf mois chez Kobler y Asociados, j'ai développé en équipe des agents d'IA et des automatisations avec n8n et l'API d'OpenAI pour cinq clients, et j'en ai assuré le bon fonctionnement en production. Je crée aussi des applications web de bout en bout avec FastAPI, React, TypeScript et Supabase, et je développe avec Claude Code.",
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
