/** Interface text in Spanish. Its shape defines the Dictionary type every language must follow. */
export const spanishDictionary = {
  skipToContent: "Saltar al contenido",
  opensInNewTab: "se abre en una pestaña nueva",
  siteNavigation: {
    label: "Navegación principal",
    home: "Inicio",
    projects: "Proyectos",
    experience: "Experiencia",
    about: "Sobre mí",
    contact: "Contacto",
  },
  languageSwitcher: {
    label: "Idioma",
  },
  hero: {
    photoAlt: "Kevin Garabita, desarrollador backend, IA y automatización",
    viewProjects: "Ver proyectos",
    writeOnWhatsApp: "Escríbeme por WhatsApp",
  },
  resume: {
    view: "Ver CV (PDF)",
  },
  projects: {
    sectionTitle: "Proyectos destacados",
    viewAll: (count: number) => `Ver todos los proyectos (${count})`,
    allProjectsPage: {
      title: "Proyectos",
      description:
        "Aplicaciones web freelance y agentes de IA con automatizaciones en n8n hechos en Kobler y Asociados.",
    },
    buildMethod: {
      "vibe-coded": {
        label: "Vibe coded",
        description:
          "Hecho con vibe coding: código generado con IA bajo mi dirección.",
      },
      "hand-coded": {
        label: "Hecho a mano",
        description: "Código escrito a mano.",
      },
    },
    filters: {
      label: "Filtrar proyectos",
      kind: "Tipo",
      technology: "Tecnología",
      buildMethod: "Desarrollo",
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
    category: {
      freelance: "Proyecto freelance",
      kobler: "Proyecto en Kobler",
    },
    viewCaseStudy: "Ver caso de estudio",
    moreTechnologies: "más",
    status: {
      "in-production": "En producción",
      "in-development": "En desarrollo",
    },
    teamSetup: {
      individual: "Proyecto individual",
      team: "Trabajo en equipo",
    },
    facts: {
      client: "Cliente",
      context: "Contexto",
      period: "Periodo",
      status: "Estado",
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
    },
    flowStepTool: "Herramienta",
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
    confidentialityNote:
      "Código privado por confidencialidad con los clientes; capturas, arquitectura y demostración disponibles a solicitud.",
    requestDetails: "Solicitar por correo",
    neighborNavigation: {
      label: "Más proyectos",
      previous: "Proyecto anterior",
      next: "Proyecto siguiente",
    },
  },
  experience: {
    sectionTitle: "Experiencia",
    present: "actualidad",
    relatedProjects: "Casos de estudio de este trabajo",
  },
  education: {
    sectionTitle: "Formación",
    expectedGraduation: "Titulación prevista",
  },
  skills: {
    sectionTitle: "Habilidades",
  },
  about: {
    sectionTitle: "Sobre mí",
    facts: {
      location: "Ubicación",
      focus: "Enfoque",
      languages: "Idiomas",
    },
  },
  contact: {
    sectionTitle: "Contacto",
    email: "Correo",
    whatsApp: "WhatsApp",
    sendEmail: "Enviar correo",
    location: "Ubicación",
    profiles: "Perfiles",
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página que buscas no existe o cambió de dirección.",
    backHome: "Volver al inicio",
  },
};

export type Dictionary = typeof spanishDictionary;
