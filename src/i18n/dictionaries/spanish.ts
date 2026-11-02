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
    contact: "Contacto",
    resume: "CV",
  },
  languageSwitcher: {
    label: "Idioma",
  },
  hero: {
    photoAlt: "Kevin Garabita, desarrollador backend, IA y automatización",
    writeOnWhatsApp: "Escríbeme por WhatsApp",
    facts: {
      experience: "Experiencia",
      education: "Formación",
    },
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
    neighborNavigation: {
      label: "Más proyectos",
      previous: "Proyecto anterior",
      next: "Proyecto siguiente",
    },
  },
  experience: {
    sectionTitle: "Experiencia y formación",
    present: "actualidad",
    relatedProjects: "Casos de estudio de este trabajo",
  },
  education: {
    expectedGraduation: "Titulación prevista",
  },
  skills: {
    sectionTitle: "Habilidades",
  },
  about: {
    sectionTitle: "Sobre mí",
    facts: {
      languages: "Idiomas",
    },
  },
  contact: {
    sectionTitle: "Contacto",
    lead: "Cuéntame qué quieres desarrollar o automatizar.",
    email: "Correo",
    whatsApp: "WhatsApp",
    location: "Ubicación",
    profiles: "Perfiles",
  },
  scrollBuild: {
    // Pills of the home page's build cursors (components/scroll-build); decorative.
    actions: {
      type: "escribiendo",
      draw: "insertando imagen",
      resize: "redimensionando",
      drag: "moviendo",
      click: "aplicando estilo",
      line: "trazando",
    },
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
