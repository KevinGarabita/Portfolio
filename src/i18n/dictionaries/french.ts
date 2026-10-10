import type { Dictionary } from "./spanish";

/** Interface text in French. TypeScript requires the same keys as the Spanish dictionary. */
export const frenchDictionary: Dictionary = {
  skipToContent: "Aller au contenu",
  opensInNewTab: "s'ouvre dans un nouvel onglet",
  siteNavigation: {
    label: "Navigation principale",
    home: "Accueil",
    projects: "Projets",
    experience: "Expérience",
    about: "À propos",
    contact: "Contact",
  },
  languageSwitcher: {
    label: "Langue",
  },
  hero: {
    photoAlt: "Kevin Garabita, développeur backend, IA et automatisation",
    viewProjects: "Voir les projets",
    writeOnWhatsApp: "M'écrire sur WhatsApp",
  },
  resume: {
    // The French pages link to the Spanish CV (lib/resume.ts) until one in French exists.
    view: "Voir le CV (PDF, en espagnol)",
  },
  projects: {
    sectionTitle: "Projets phares",
    viewAll: (count: number) => `Voir tous les projets (${count})`,
    allProjectsPage: {
      title: "Projets",
      description:
        "Applications web en freelance, et agents d'IA avec des automatisations n8n réalisés chez Kobler y Asociados.",
    },
    buildMethod: {
      "ai-assisted": {
        label: "Développement assisté par IA",
        description:
          "Je prends en charge l'architecture, la revue de code, les tests et la sécurité ; le code est généré par IA sous ma direction.",
      },
      "hand-coded": {
        label: "Codé à la main",
        description: "Code écrit à la main.",
      },
    },
    filters: {
      label: "Filtrer les projets",
      kind: "Type",
      technology: "Technologie",
      buildMethod: "Développement",
      all: "Tous",
      kinds: {
        "web-app": "Applications web",
        "ai-automation": "Agents d'IA et automatisation",
      },
      resultsOne: "1 projet",
      resultsMany: "{count} projets",
      empty: "Aucun projet ne correspond à ces filtres.",
      clear: "Effacer les filtres",
    },
    category: {
      freelance: "Projet freelance",
      kobler: "Projet chez Kobler",
    },
    viewCaseStudy: "Voir l'étude de cas",
    moreTechnologies: (count: number) => `et ${count} de plus`,
    status: {
      "in-production": "En production",
      "in-development": "En développement",
    },
    teamSetup: {
      individual: "Projet individuel",
      team: "Travail d'équipe",
    },
    facts: {
      client: "Client",
      context: "Contexte",
      period: "Période",
      status: "Statut",
      technologies: "Technologies",
    },
    sections: {
      highlights: "Points clés",
      flowDiagram: "Flux de l'automatisation",
      gallery: "Captures d'écran",
      links: "Liens",
      problem: "Problème",
      solution: "Solution",
      decisions: "Choix techniques",
      failureHandling: "Gestion des erreurs",
      role: "Mon rôle",
      results: "Résultats",
      nextSteps: "Prochaines étapes",
    },
    flowStepTool: "Outil",
    gallery: {
      enlarge: "Agrandir",
      dialogLabel: "Captures d'écran du projet",
      close: "Fermer",
      previous: "Image précédente",
      next: "Image suivante",
      position: (current: number, total: number) =>
        `Image ${current} sur ${total}`,
    },
    backToProjects: "Retour aux projets",
    confidentialityNote:
      "Code privé par confidentialité envers les clients ; captures d'écran, architecture et démonstration disponibles sur demande.",
    requestDetails: "Demander par e-mail",
    neighborNavigation: {
      label: "Autres projets",
      previous: "Projet précédent",
      next: "Projet suivant",
    },
  },
  experience: {
    sectionTitle: "Expérience",
    present: "aujourd'hui",
    relatedProjects: "Études de cas issues de ce poste",
  },
  education: {
    sectionTitle: "Formation",
    expectedGraduation: "Diplôme prévu",
  },
  skills: {
    sectionTitle: "Compétences",
  },
  about: {
    sectionTitle: "À propos",
    facts: {
      location: "Localisation",
      focus: "Spécialité",
      languages: "Langues",
    },
  },
  contact: {
    sectionTitle: "Contact",
    email: "E-mail",
    whatsApp: "WhatsApp",
    sendEmail: "Envoyer un e-mail",
    location: "Localisation",
    profiles: "Profils",
  },
  notFound: {
    title: "Page introuvable",
    description:
      "La page que vous cherchez n'existe pas ou a changé d'adresse.",
    backHome: "Retour à l'accueil",
  },
};
