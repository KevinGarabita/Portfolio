import type { Dictionary } from "./spanish";

/** Interface text in English. TypeScript requires the same keys as the Spanish dictionary. */
export const englishDictionary: Dictionary = {
  skipToContent: "Skip to content",
  opensInNewTab: "opens in a new tab",
  siteNavigation: {
    label: "Main navigation",
    menu: "Menu",
    home: "Home",
    projects: "Projects",
    experience: "Experience",
    about: "About",
    contact: "Contact",
  },
  languageSwitcher: {
    label: "Language",
  },
  hero: {
    photoAlt: "Kevin Garabita, backend, AI and automation engineer",
    writeOnWhatsApp: "Message me on WhatsApp",
  },
  resume: {
    view: "View résumé (PDF)",
  },
  projects: {
    sectionTitle: "Featured projects",
    viewAll: (count: number) => `View all projects (${count})`,
    allProjectsPage: {
      title: "Projects",
      description:
        "Web apps, AI agents and automations: freelance projects and collaborations with Kobler y Asociados.",
    },
    filters: {
      label: "Filter projects",
      kind: "Type",
      technology: "Technology",
      all: "All",
      kinds: {
        "web-app": "Web applications",
        "ai-automation": "AI agents and automation",
      },
      resultsOne: "1 project",
      resultsMany: "{count} projects",
      empty: "No project matches these filters.",
      clear: "Clear filters",
    },
    status: {
      "in-production": "In production",
      "in-development": "In development",
      "completed-unreleased": "Completed · not released",
    },
    credit: {
      freelance: "Freelance",
      "kobler-team": "Collaboration with Kobler",
      "kobler-individual": "Built for Kobler y Asociados",
    },
    facts: {
      client: "Client",
      period: "Period",
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
      metrics: "Before and after",
      architecture: "Architecture",
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
    moreDetails: "More details",
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
      languages: "Languages",
    },
  },
  contact: {
    sectionTitle: "Contact",
    lead: "Tell me what you want to build or automate.",
    email: "Email",
    whatsApp: "WhatsApp",
    sendEmail: "Send an email",
    location: "Location",
    profiles: "Profiles",
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist or has moved.",
    backHome: "Back to home",
  },
  recruiter: {
    metrics: {
      before: "Before",
      after: "After",
    },
    availability: {
      status: {
        "open-to-offers": "Open to job offers",
        "open-to-freelance": "Available for freelance projects",
      },
      modality: {
        remote: "remote",
        hybrid: "hybrid",
        "on-site": "on-site",
      },
      availableFrom: (month: string) => `Available from ${month}`,
    },
  },
};
