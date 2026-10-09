import type { Dictionary } from "./spanish";

/** Interface text in English. TypeScript requires the same keys as the Spanish dictionary. */
export const englishDictionary: Dictionary = {
  skipToContent: "Skip to content",
  opensInNewTab: "opens in a new tab",
  siteNavigation: {
    label: "Main navigation",
    home: "Home",
    projects: "Projects",
    experience: "Experience",
    about: "About",
    contact: "Contact",
  },
  languageSwitcher: {
    label: "Language",
    otherLanguage: "Español",
  },
  hero: {
    photoAlt: "Kevin Garabita, backend, AI and automation developer",
    viewProjects: "View projects",
    writeOnWhatsApp: "Message me on WhatsApp",
    pauseAnimations: "Pause animations",
  },
  resume: {
    download: "Download résumé (PDF)",
    inLanguage: {
      es: "Résumé in Spanish (PDF)",
      en: "Résumé in English (PDF)",
    },
  },
  projects: {
    sectionTitle: "Projects",
    groups: {
      freelance: "Freelance projects",
      kobler: "Projects at Kobler",
    },
    category: {
      freelance: "Freelance project",
      kobler: "Project at Kobler",
    },
    viewCaseStudy: "View case study",
    moreTechnologies: (count: number) => `and ${count} more`,
    status: {
      "in-production": "In production",
      "in-development": "In development",
    },
    teamSetup: {
      individual: "Individual project",
      team: "Team project",
    },
    facts: {
      client: "Client",
      context: "Context",
      period: "Period",
      status: "Status",
      technologies: "Technologies",
    },
    sections: {
      highlights: "Key points",
      flowDiagram: "Automation flow",
      gallery: "Screenshots",
      links: "Links",
      problem: "Problem",
      solution: "Solution",
      decisions: "Technical decisions",
      failureHandling: "Failure handling",
      role: "My role",
      results: "Results",
      nextSteps: "Next steps",
    },
    flowStepTool: "Tool",
    gallery: {
      enlarge: "Enlarge",
      dialogLabel: "Project screenshots",
      close: "Close",
      previous: "Previous image",
      next: "Next image",
      position: (current: number, total: number) =>
        `Image ${current} of ${total}`,
    },
    backToProjects: "Back to projects",
    confidentialityNote:
      "Code kept private due to client confidentiality; screenshots, architecture, and a demo available upon request.",
    requestDetails: "Request by email",
    neighborNavigation: {
      label: "More projects",
      previous: "Previous project",
      next: "Next project",
    },
  },
  experience: {
    sectionTitle: "Experience",
    present: "present",
    relatedProjects: "Case studies from this job",
  },
  education: {
    sectionTitle: "Education",
    expectedGraduation: "Expected graduation",
  },
  skills: {
    sectionTitle: "Skills",
  },
  about: {
    sectionTitle: "About",
    facts: {
      location: "Location",
      focus: "Focus",
      languages: "Languages",
    },
  },
  contact: {
    sectionTitle: "Contact",
    email: "Email",
    phone: "Phone",
    whatsApp: "WhatsApp",
    sendEmail: "Send an email",
    location: "Location",
    workMode: "Work mode",
    availability: "Availability",
    timeZoneNote: (city: string, utcOffset: string) =>
      `(${city} time, ${utcOffset})`,
    resume: "Résumé",
    profiles: "Profiles",
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist or has moved.",
    backHome: "Back to home",
  },
};
