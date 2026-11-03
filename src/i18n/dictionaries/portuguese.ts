import type { Dictionary } from "./spanish";

/** Interface text in Brazilian Portuguese. TypeScript requires the same keys as the Spanish dictionary. */
export const portugueseDictionary: Dictionary = {
  skipToContent: "Pular para o conteúdo",
  opensInNewTab: "abre em uma nova aba",
  siteNavigation: {
    label: "Navegação principal",
    menu: "Menu",
    home: "Início",
    projects: "Projetos",
    experience: "Experiência",
    about: "Sobre mim",
    services: "Serviços",
    contact: "Contato",
    resume: "Currículo",
  },
  languageSwitcher: {
    label: "Idioma",
  },
  hero: {
    photoAlt: "Kevin Garabita, desenvolvedor backend, IA e automação",
    writeOnWhatsApp: "Fale comigo no WhatsApp",
    servicesLink: "Tem um negócio? Veja meus serviços",
    stats: {
      label: "Em números",
      agents: "agentes de IA no WhatsApp, feitos em equipe",
      inProduction: "projetos em produção",
      experience: (organization: string) =>
        `como desenvolvedor de IA na ${organization}`,
      graduation: (institution: string) => `formatura prevista, ${institution}`,
      years: (count: number) => (count === 1 ? "1 ano" : `${count} anos`),
      months: (count: number) => (count === 1 ? "1 mês" : `${count} meses`),
    },
  },
  resume: {
    // The Portuguese pages link to the Spanish CV (lib/resume.ts) until one in Portuguese exists.
    view: "Ver currículo (PDF, em espanhol)",
  },
  projects: {
    sectionTitle: "Projetos em destaque",
    viewAll: (count: number) => `Ver todos os projetos (${count})`,
    allProjectsPage: {
      title: "Projetos",
      description:
        "Aplicações web, agentes de IA e automações: projetos freelance e do meu trabalho na Kobler y Asociados.",
    },
    filters: {
      label: "Filtrar projetos",
      kind: "Tipo",
      technology: "Tecnologia",
      all: "Todos",
      kinds: {
        "web-app": "Aplicações web",
        "ai-automation": "Agentes de IA e automação",
      },
      resultsOne: "1 projeto",
      resultsMany: "{count} projetos",
      empty: "Nenhum projeto corresponde a esses filtros.",
      clear: "Limpar filtros",
    },
    status: {
      "in-production": "Em produção",
      "in-development": "Em desenvolvimento",
      "completed-unreleased": "Concluído · não publicado",
    },
    credit: {
      freelance: "Freelance",
      "kobler-team": "Em equipe na Kobler y Asociados",
      "kobler-individual": "Feito na Kobler y Asociados",
    },
    facts: {
      client: "Cliente",
      period: "Período",
      technologies: "Tecnologias",
    },
    sections: {
      highlights: "Pontos-chave",
      flowDiagram: "Fluxo da automação",
      gallery: "Capturas de tela",
      links: "Links",
      problem: "Problema",
      solution: "Solução",
      decisions: "Decisões técnicas",
      failureHandling: "Tratamento de falhas",
      role: "Meu papel",
      results: "Resultados",
      nextSteps: "Próximos passos",
      metrics: "Antes e depois",
      architecture: "Arquitetura",
      overview: "Em resumo",
      howItWorks: "Como funciona",
      technicalDetails: "Detalhes técnicos",
      technicalDetailsHint:
        "Como funciona, decisões técnicas e tratamento de falhas",
    },
    flowStepTool: "Ferramenta",
    gallery: {
      enlarge: "Ampliar",
      dialogLabel: "Capturas de tela do projeto",
      close: "Fechar",
      previous: "Imagem anterior",
      next: "Próxima imagem",
      position: (current: number, total: number) =>
        `Imagem ${current} de ${total}`,
    },
    backToProjects: "Voltar aos projetos",
    neighborNavigation: {
      label: "Mais projetos",
      previous: "Projeto anterior",
      next: "Próximo projeto",
    },
  },
  experience: {
    sectionTitle: "Experiência e formação",
    present: "atual",
    relatedProjects: "Estudos de caso deste trabalho",
  },
  education: {
    expectedGraduation: "Conclusão prevista",
  },
  skills: {
    sectionTitle: "Habilidades",
  },
  about: {
    sectionTitle: "Sobre mim",
    facts: {
      languages: "Idiomas",
    },
  },
  contact: {
    sectionTitle: "Contato",
    lead: "Me conte o que você quer desenvolver ou automatizar.",
    homeLead: "Procurando alguém para o seu time ou tem um projeto em mente?",
    servicesPrompt:
      "Precisa de um sistema ou de um agente de IA para o seu negócio?",
    servicesLink: "Ver serviços",
    email: "E-mail",
    whatsApp: "WhatsApp",
    location: "Localização",
    profiles: "Perfis",
  },
  services: {
    title: "Serviços",
    lead: "Agentes de IA, automações e aplicações web sob medida para o seu negócio, com projetos reais que comprovam.",
    listLabel: "O que posso construir para você",
    includes: "Inclui",
    examples: "Projetos de exemplo",
    processTitle: "Como trabalhamos",
    pricingTitle: "Quanto custa?",
    pricingText:
      "Depende do que vamos construir. Me conte o que você precisa e eu preparo um orçamento com o escopo, os prazos e o preço.",
    recruiterPrompt: "Procurando um desenvolvedor para o seu time?",
    recruiterLink: "Ver meu perfil e currículo",
  },
  notFound: {
    title: "Página não encontrada",
    description: "A página que você procura não existe ou mudou de endereço.",
    backHome: "Voltar ao início",
  },
  recruiter: {
    metrics: {
      before: "Antes",
      after: "Depois",
    },
    availability: {
      status: {
        "open-to-offers": "Aberto a propostas de emprego",
        "open-to-freelance": "Disponível para projetos freelance",
        "open-to-offers-and-freelance":
          "Aberto a vagas de emprego e a projetos freelance",
      },
      modality: {
        remote: "remoto",
        hybrid: "híbrido",
        "on-site": "presencial",
      },
      availableFrom: (month: string) => `Disponível a partir de ${month}`,
    },
  },
};
