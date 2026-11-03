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
    services: "Services",
    contact: "Contact",
    resume: "CV",
  },
  languageSwitcher: {
    label: "Langue",
  },
  hero: {
    photoAlt: "Kevin Garabita, développeur backend, IA et automatisation",
    writeOnWhatsApp: "M'écrire sur WhatsApp",
    servicesLink: "Vous avez une entreprise ? Voir mes services",
    stats: {
      label: "En chiffres",
      agents: "agents d'IA sur WhatsApp, développés en équipe",
      inProduction: "projets en production",
      experience: (organization: string) =>
        `comme développeur IA chez ${organization}`,
      graduation: (institution: string) => `diplôme prévu, ${institution}`,
      years: (count: number) => (count === 1 ? "1 an" : `${count} ans`),
      months: (count: number) => `${count} mois`,
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
      overview: "En bref",
      howItWorks: "Fonctionnement",
      technicalDetails: "Détails techniques",
      technicalDetailsHint:
        "Fonctionnement, choix techniques et gestion des erreurs",
      event: "Lors de l'événement",
    },
    flowStepTool: "Outil",
    /** Credit under a photo someone else took. */
    photoCredit: (author: string) => `Photo : ${author}`,
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
    clientResults: "Résultats par client",
    caseStudy: "Voir l'étude de cas",
    responsibilities: "Également",
  },
  education: {
    expectedGraduation: "Diplôme prévu",
  },
  skills: {
    sectionTitle: "Compétences",
  },
  about: {
    focusAreas: "Domaines de prédilection",
    sectionTitle: "À propos",
    facts: {
      role: "Poste",
      languages: "Langues",
    },
  },
  contact: {
    sectionTitle: "Contact",
    lead: "Dites-moi ce que vous souhaitez développer ou automatiser.",
    homeLead: "Vous recrutez ou vous avez un projet en tête ?",
    servicesPrompt:
      "Besoin d'un système ou d'un agent d'IA pour votre entreprise ?",
    servicesLink: "Voir les services",
    email: "E-mail",
    whatsApp: "WhatsApp",
    location: "Localisation",
    profiles: "Profils",
  },
  services: {
    title: "Services",
    lead: "Agents d'IA, automatisations et applications web sur mesure pour votre entreprise, appuyés par des projets réels.",
    listLabel: "Ce que je peux créer pour vous",
    includes: "Comprend",
    examples: "Projets d'exemple",
    processTitle: "Comment nous travaillons",
    pricingTitle: "Combien ça coûte ?",
    pricingText:
      "Cela dépend de ce que nous allons créer. Dites-moi ce dont vous avez besoin et je vous envoie un devis avec le périmètre, les délais et le prix.",
    recruiterPrompt: "Vous cherchez un développeur pour votre équipe ?",
    recruiterLink: "Voir mon profil et mon CV",
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
