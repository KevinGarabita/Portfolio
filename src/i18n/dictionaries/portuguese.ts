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
    contact: "Contato",
  },
  languageSwitcher: {
    label: "Idioma",
  },
  hero: {
    photoAlt: "Kevin Garabita, desenvolvedor backend, IA e automação",
    writeOnWhatsApp: "Fale comigo no WhatsApp",
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
        "Aplicações web, agentes de IA e automações: projetos freelance e em colaboração com a Kobler y Asociados.",
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
      "kobler-team": "Colaboração com a Kobler",
      "kobler-individual": "Feito para a Kobler y Asociados",
    },
    facts: {
      client: "Cliente",
      context: "Contexto",
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
    sectionTitle: "Experiência",
    present: "atual",
    relatedProjects: "Estudos de caso deste trabalho",
    moreDetails: "Mais detalhes",
  },
  education: {
    sectionTitle: "Formação",
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
    email: "E-mail",
    whatsApp: "WhatsApp",
    sendEmail: "Enviar e-mail",
    location: "Localização",
    profiles: "Perfis",
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
