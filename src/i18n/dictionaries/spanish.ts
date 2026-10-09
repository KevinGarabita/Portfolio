/** Interface text in Spanish. Its shape defines the Dictionary type every language must follow. */
export const spanishDictionary = {
  skipToContent: "Saltar al contenido",
  siteNavigation: {
    label: "Navegación principal",
    projects: "Proyectos",
    experience: "Experiencia",
    about: "Sobre mí",
    contact: "Contacto",
  },
  languageSwitcher: {
    label: "Idioma",
    otherLanguage: "English",
  },
  hero: {
    photoAlt: "Kevin Garabita, desarrollador backend, IA y automatización",
    viewProjects: "Ver proyectos",
  },
  resume: {
    download: "Descargar CV (PDF)",
  },
  projects: {
    sectionTitle: "Proyectos",
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
      problem: "Problema",
      solution: "Solución",
      decisions: "Decisiones técnicas",
      failureHandling: "Manejo de fallas",
      role: "Mi rol",
      results: "Resultado",
      nextSteps: "Siguientes pasos",
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
  },
  contact: {
    sectionTitle: "Contacto",
    email: "Correo",
    phone: "Teléfono",
    downloadResume: "Descargar CV",
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página que buscas no existe o cambió de dirección.",
    backHome: "Volver al inicio",
  },
};

export type Dictionary = typeof spanishDictionary;
