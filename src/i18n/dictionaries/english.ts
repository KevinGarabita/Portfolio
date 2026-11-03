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
    services: "Services",
    contact: "Contact",
    resume: "Résumé",
  },
  languageSwitcher: {
    label: "Language",
  },
  hero: {
    photoAlt: "Kevin Garabita, backend, AI and automation engineer",
    writeOnWhatsApp: "Message me on WhatsApp",
    servicesLink: "Run a business? See my services",
    stats: {
      label: "At a glance",
      agents: "AI agents on WhatsApp, built as a team",
      inProduction: "projects in production",
      experience: (organization: string) =>
        `building AI and automation at ${organization}`,
      graduation: (institution: string) =>
        `expected graduation, ${institution}`,
      years: (count: number) => (count === 1 ? "1 year" : `${count} years`),
      months: (count: number) => (count === 1 ? "1 month" : `${count} months`),
    },
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
        "Web apps, AI agents and automations: freelance projects and my work at Kobler y Asociados.",
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
      "kobler-team": "Team project at Kobler y Asociados",
      "kobler-individual": "Built at Kobler y Asociados",
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
      overview: "At a glance",
      howItWorks: "How it works",
      technicalDetails: "Technical details",
      technicalDetailsHint:
        "How it works, technical decisions and failure handling",
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
    sectionTitle: "Experience and education",
    present: "present",
    relatedProjects: "Case studies from this job",
  },
  education: {
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
    homeLead: "Hiring for your team, or have a project in mind?",
    servicesPrompt: "Need a system or an AI agent for your business?",
    servicesLink: "See services",
    email: "Email",
    whatsApp: "WhatsApp",
    location: "Location",
    profiles: "Profiles",
  },
  services: {
    title: "Services",
    lead: "AI agents, automations and web applications built around your business, backed by real projects.",
    listLabel: "What I can build for you",
    includes: "Includes",
    examples: "Example projects",
    processTitle: "How we work",
    pricingTitle: "How much does it cost?",
    pricingText:
      "It depends on what we build. Tell me what you need and I will send you a quote with the scope, the timeline and the price.",
    recruiterPrompt: "Looking for a developer for your team?",
    recruiterLink: "See my profile and résumé",
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
        "open-to-offers-and-freelance":
          "Open to full-time roles and freelance projects",
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
