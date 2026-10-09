import type { Dictionary } from "./spanish";

/** Interface text in English. TypeScript requires the same keys as the Spanish dictionary. */
export const englishDictionary: Dictionary = {
  skipToContent: "Skip to content",
  siteNavigation: {
    label: "Main navigation",
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
  },
  resume: {
    download: "Download résumé (PDF)",
  },
  projects: {
    sectionTitle: "Projects",
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
      problem: "Problem",
      solution: "Solution",
      decisions: "Technical decisions",
      failureHandling: "Failure handling",
      role: "My role",
      results: "Results",
      nextSteps: "Next steps",
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
  },
  contact: {
    sectionTitle: "Contact",
    email: "Email",
    phone: "Phone",
    downloadResume: "Download résumé",
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist or has moved.",
    backHome: "Back to home",
  },
};
