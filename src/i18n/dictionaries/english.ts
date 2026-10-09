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
  projects: {
    sectionTitle: "Projects",
    viewCaseStudy: "View case study",
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
      stack: "Stack",
    },
    sections: {
      problem: "Problem",
      solution: "Solution",
      role: "My role",
      results: "Results",
    },
    backToProjects: "Back to projects",
  },
  experience: {
    sectionTitle: "Experience",
    present: "present",
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
