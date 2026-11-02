import type { Dictionary } from "./spanish";

/** Interface text in French. TypeScript requires the same keys as the Spanish dictionary. */
export const frenchDictionary: Dictionary = {
  skipToContent: "Aller au contenu",
  opensInNewTab: "s'ouvre dans un nouvel onglet",
  siteNavigation: {
    label: "Navigation principale",
    menu: "Menu",
    home: "Accueil",
    projects: "Projets",
    experience: "Expérience",
    about: "À propos",
    contact: "Contact",
    resume: "CV",
  },
  languageSwitcher: {
    label: "Langue",
  },
  hero: {
    photoAlt: "Kevin Garabita, développeur backend, IA et automatisation",
    writeOnWhatsApp: "M'écrire sur WhatsApp",
    facts: {
      experience: "Expérience",
      education: "Formation",
    },
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
        "Applications web, agents d'IA et automatisations : projets en freelance et mon travail chez Kobler y Asociados.",
    },
    filters: {
      label: "Filtrer les projets",
      kind: "Type",
      technology: "Technologie",
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
    status: {
      "in-production": "En production",
      "in-development": "En développement",
      "completed-unreleased": "Terminé · non publié",
    },
    credit: {
      freelance: "Freelance",
      "kobler-team": "En équipe chez Kobler y Asociados",
      "kobler-individual": "Réalisé chez Kobler y Asociados",
    },
    facts: {
      client: "Client",
      period: "Période",
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
      metrics: "Avant et après",
      architecture: "Architecture",
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
    neighborNavigation: {
      label: "Autres projets",
      previous: "Projet précédent",
      next: "Projet suivant",
    },
  },
  experience: {
    sectionTitle: "Expérience et formation",
    present: "aujourd'hui",
    relatedProjects: "Études de cas issues de ce poste",
  },
  education: {
    expectedGraduation: "Diplôme prévu",
  },
  skills: {
    sectionTitle: "Compétences",
  },
  about: {
    sectionTitle: "À propos",
    facts: {
      languages: "Langues",
    },
  },
  contact: {
    sectionTitle: "Contact",
    lead: "Dites-moi ce que vous souhaitez développer ou automatiser.",
    email: "E-mail",
    whatsApp: "WhatsApp",
    location: "Localisation",
    profiles: "Profils",
  },
  scrollBuild: {
    actions: {
      type: "saisie",
      draw: "insertion d'image",
      resize: "redimensionnement",
      drag: "déplacement",
      click: "application du style",
      line: "tracé",
    },
  },
  notFound: {
    title: "Page introuvable",
    description:
      "La page que vous cherchez n'existe pas ou a changé d'adresse.",
    backHome: "Retour à l'accueil",
  },
  recruiter: {
    metrics: {
      before: "Avant",
      after: "Après",
    },
    availability: {
      status: {
        "open-to-offers": "Ouvert aux offres d'emploi",
        "open-to-freelance": "Disponible pour des missions en freelance",
        "open-to-offers-and-freelance":
          "Ouvert aux offres d'emploi et aux missions freelance",
      },
      modality: {
        remote: "à distance",
        hybrid: "hybride",
        "on-site": "sur site",
      },
      availableFrom: (month: string) => `Disponible à partir de ${month}`,
    },
  },
};
