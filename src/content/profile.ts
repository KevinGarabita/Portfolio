import type { Profile } from "@/types/content";

/** Personal data. Source: Kevin's CV (Spanish and English versions) and his answers. */
export const profile: Profile = {
  displayName: "Kevin Garabita",
  fullName: "Kevin Emanuel Garabita Córdova",
  role: {
    es: "Desarrollador Backend, IA y Automatización",
    en: "Backend, AI & Automation Developer",
    pt: "Desenvolvedor Backend, IA e Automação",
    fr: "Développeur Backend, IA et Automatisation",
  },
  heroTitles: ["Software Engineer", "Automation Engineer"],
  heroSubtitle: {
    es: "Desarrollo backend, agentes de IA y automatizaciones con FastAPI, n8n y la API de OpenAI.",
    en: "Backend development, AI agents and automations with FastAPI, n8n and the OpenAI API.",
    pt: "Desenvolvimento backend, agentes de IA e automações com FastAPI, n8n e a API da OpenAI.",
    fr: "Développement backend, agents d'IA et automatisations avec FastAPI, n8n et l'API d'OpenAI.",
  },
  about: [
    {
      es: "Estudiante de séptimo semestre de Ingeniería en Desarrollo de Tecnologías y Software. Durante nueve meses desarrollé agentes conversacionales y automatizaciones en n8n con la API de OpenAI para cinco clientes, integrando GoHighLevel, WhatsApp, Zoom y WooCommerce vía APIs REST y webhooks, y me hice cargo del monitoreo y la corrección de fallas en producción. En paralelo construyo aplicaciones web con FastAPI, React, TypeScript y Supabase; una está en producción con usuarios reales.",
      en: "Seventh-semester student of Software and Technology Development Engineering. Over nine months I built conversational agents and automations in n8n using the OpenAI API for five clients, integrating GoHighLevel, WhatsApp, Zoom, and WooCommerce via REST APIs and webhooks, and I was responsible for monitoring and fixing issues in production. In parallel, I build web applications with FastAPI, React, TypeScript, and Supabase; one is in production with real users.",
      pt: "Estudante do sétimo semestre de Engenharia em Desenvolvimento de Tecnologias e Software. Durante nove meses, desenvolvi agentes conversacionais e automações no n8n com a API da OpenAI para cinco clientes, integrando GoHighLevel, WhatsApp, Zoom e WooCommerce por meio de APIs REST e webhooks, e fui responsável pelo monitoramento e pela correção de falhas em produção. Paralelamente, desenvolvo aplicações web com FastAPI, React, TypeScript e Supabase; uma delas está em produção com usuários reais.",
      fr: "Étudiant en septième semestre d'ingénierie en développement de technologies et de logiciels. Pendant neuf mois, j'ai développé des agents conversationnels et des automatisations dans n8n avec l'API d'OpenAI pour cinq clients, en intégrant GoHighLevel, WhatsApp, Zoom et WooCommerce via des API REST et des webhooks, et j'ai assuré la surveillance et la correction des incidents en production. En parallèle, je développe des applications web avec FastAPI, React, TypeScript et Supabase ; l'une d'elles est en production avec de vrais utilisateurs.",
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
  resumeFiles: {
    es: "/cv/kevin-garabita-cv-es.pdf",
    en: "/cv/kevin-garabita-cv-en.pdf",
    pt: "/cv/kevin-garabita-cv-en.pdf",
    fr: "/cv/kevin-garabita-cv-en.pdf",
  },
};
