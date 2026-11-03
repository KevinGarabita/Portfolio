/** Interface text in Spanish. Its shape defines the Dictionary type every language must follow. */
export const spanishDictionary = {
  skipToContent: "Saltar al contenido",
  opensInNewTab: "se abre en una pestaña nueva",
  siteNavigation: {
    label: "Navegación principal",
    menu: "Menú",
    home: "Inicio",
    projects: "Proyectos",
    experience: "Experiencia",
    about: "Sobre mí",
    services: "Servicios",
    contact: "Contacto",
    resume: "CV",
  },
  languageSwitcher: {
    label: "Idioma",
  },
  hero: {
    photoAlt: "Kevin Garabita, desarrollador backend, IA y automatización",
    writeOnWhatsApp: "Escríbeme por WhatsApp",
    servicesLink: "¿Tienes un negocio? Mira mis servicios",
    stats: {
      label: "En cifras",
      agents: "agentes de IA en WhatsApp, hechos en equipo",
      inProduction: "proyectos en producción",
      experience: (organization: string) =>
        `como programador de IA en ${organization}`,
      graduation: (institution: string) =>
        `titulación prevista, ${institution}`,
      years: (count: number) => (count === 1 ? "1 año" : `${count} años`),
      months: (count: number) => (count === 1 ? "1 mes" : `${count} meses`),
    },
  },
  resume: {
    view: "Ver CV (PDF)",
  },
  projects: {
    eyebrow: "Trabajo real",
    sectionTitle: "Proyectos destacados",
    viewAll: (count: number) => `Ver todos los proyectos (${count})`,
    allProjectsPage: {
      title: "Proyectos",
      description:
        "Aplicaciones web, agentes de IA y automatizaciones: proyectos freelance y de mi trabajo en Kobler y Asociados.",
    },
    filters: {
      label: "Filtrar proyectos",
      kind: "Tipo",
      technology: "Tecnología",
      all: "Todos",
      kinds: {
        "web-app": "Aplicaciones web",
        "ai-automation": "Agentes de IA y automatización",
      },
      resultsOne: "1 proyecto",
      resultsMany: "{count} proyectos",
      empty: "Ningún proyecto coincide con estos filtros.",
      clear: "Quitar filtros",
    },
    status: {
      "in-production": "En producción",
      "in-development": "En desarrollo",
      "completed-unreleased": "Completado · no publicado",
    },
    credit: {
      freelance: "Freelance",
      "kobler-team": "En equipo en Kobler y Asociados",
      "kobler-individual": "Hecho en Kobler y Asociados",
    },
    facts: {
      client: "Cliente",
      period: "Periodo",
      technologies: "Tecnologías",
    },
    sections: {
      highlights: "Puntos clave",
      flowDiagram: "Flujo de la automatización",
      gallery: "Capturas",
      links: "Enlaces",
      problem: "Problema",
      solution: "Solución",
      decisions: "Decisiones técnicas",
      failureHandling: "Manejo de fallas",
      role: "Mi rol",
      results: "Resultado",
      nextSteps: "Siguientes pasos",
      metrics: "Antes y después",
      architecture: "Arquitectura",
      overview: "En resumen",
      howItWorks: "Cómo funciona",
      technicalDetails: "Detalles técnicos",
      technicalDetailsHint:
        "Cómo funciona, decisiones técnicas y manejo de fallas",
      event: "En el evento",
    },
    flowStepTool: "Herramienta",
    /** Credit under a photo someone else took. */
    photoCredit: (author: string) => `Foto: ${author}`,
    gallery: {
      enlarge: "Ampliar",
      dialogLabel: "Capturas del proyecto",
      close: "Cerrar",
      previous: "Imagen anterior",
      next: "Imagen siguiente",
      position: (current: number, total: number) =>
        `Imagen ${current} de ${total}`,
    },
    backToProjects: "Volver a proyectos",
    neighborNavigation: {
      label: "Más proyectos",
      previous: "Proyecto anterior",
      next: "Proyecto siguiente",
    },
  },
  experience: {
    sectionTitle: "Experiencia y formación",
    eyebrow: "Trayectoria",
    present: "actualidad",
    work: "Experiencia",
    clientResults: "Resultados por cliente",
    caseStudy: "Ver caso de estudio",
    responsibilities: "Además",
    stack: "Stack",
  },
  education: {
    expectedGraduation: "Titulación prevista",
    label: "Formación",
    timeline: "Avance de la carrera",
  },
  skills: {
    sectionTitle: "Habilidades",
    toolCount: (count: number) =>
      count === 1 ? "1 herramienta" : `${count} herramientas`,
  },
  about: {
    eyebrow: "Perfil",
    focusAreas: "Áreas de enfoque",
    sectionTitle: "Sobre mí",
    facts: {
      languages: "Idiomas",
    },
  },
  contact: {
    eyebrow: "Hablemos",
    sectionTitle: "Contacto",
    lead: "Cuéntame qué quieres desarrollar o automatizar.",
    homeLead: "¿Buscas a alguien para tu equipo o tienes un proyecto en mente?",
    servicesPrompt: "¿Necesitas un sistema o un agente de IA para tu negocio?",
    servicesLink: "Ver servicios",
    email: "Correo",
    whatsApp: "WhatsApp",
    location: "Ubicación",
    profiles: "Perfiles",
  },
  services: {
    title: "Servicios",
    lead: "Agentes de IA, automatizaciones y aplicaciones web a la medida de tu negocio, con proyectos reales que lo respaldan.",
    listLabel: "Lo que puedo construir para ti",
    includes: "Incluye",
    examples: "Proyectos de ejemplo",
    processTitle: "Cómo trabajamos",
    pricingTitle: "¿Cuánto cuesta?",
    pricingText:
      "Depende de lo que se va a construir. Cuéntame qué necesitas y te preparo una cotización con el alcance, los tiempos y el precio.",
    recruiterPrompt: "¿Buscas a un desarrollador para tu equipo?",
    recruiterLink: "Ver mi perfil y CV",
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página que buscas no existe o cambió de dirección.",
    backHome: "Volver al inicio",
  },
  recruiter: {
    metrics: {
      before: "Antes",
      after: "Después",
    },
    availability: {
      status: {
        "open-to-offers": "Abierto a ofertas de empleo",
        "open-to-freelance": "Disponible para proyectos freelance",
        "open-to-offers-and-freelance":
          "Abierto a empleo y a proyectos freelance",
      },
      modality: {
        remote: "remoto",
        hybrid: "híbrido",
        "on-site": "presencial",
      },
      availableFrom: (month: string) => `Disponible desde ${month}`,
    },
  },
};

export type Dictionary = typeof spanishDictionary;
