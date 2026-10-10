import type { Dictionary } from "./spanish";

/** Interface text in Brazilian Portuguese. TypeScript requires the same keys as the Spanish dictionary. */
export const portugueseDictionary: Dictionary = {
  skipToContent: "Pular para o conteúdo",
  opensInNewTab: "abre em uma nova aba",
  siteNavigation: {
    label: "Navegação principal",
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
    viewProjects: "Ver projetos",
    writeOnWhatsApp: "Fale comigo no WhatsApp",
  },
  resume: {
    view: "Ver currículo (PDF, em inglês)",
  },
  projects: {
    sectionTitle: "Projetos em destaque",
    viewAll: (count: number) => `Ver todos os projetos (${count})`,
    allProjectsPage: {
      title: "Projetos",
      description:
        "Aplicações web freelance e agentes de IA com automações no n8n desenvolvidos na Kobler y Asociados.",
    },
    buildMethod: {
      "ai-assisted": {
        label: "Desenvolvimento assistido por IA",
        description:
          "Arquitetura, revisão de código, testes e segurança ficam a meu cargo; o código é gerado com IA sob a minha direção.",
      },
      "hand-coded": {
        label: "Feito à mão",
        description: "Código escrito à mão.",
      },
    },
    filters: {
      label: "Filtrar projetos",
      kind: "Tipo",
      technology: "Tecnologia",
      buildMethod: "Desenvolvimento",
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
    category: {
      freelance: "Projeto freelance",
      kobler: "Projeto na Kobler",
    },
    viewCaseStudy: "Ver estudo de caso",
    moreTechnologies: (count: number) => `e mais ${count}`,
    status: {
      "in-production": "Em produção",
      "in-development": "Em desenvolvimento",
    },
    teamSetup: {
      individual: "Projeto individual",
      team: "Trabalho em equipe",
    },
    facts: {
      client: "Cliente",
      context: "Contexto",
      period: "Período",
      status: "Status",
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
    confidentialityNote:
      "Código privado por confidencialidade com os clientes; capturas de tela, arquitetura e demonstração disponíveis mediante solicitação.",
    requestDetails: "Solicitar por e-mail",
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
      location: "Localização",
      focus: "Foco",
      languages: "Idiomas",
    },
  },
  contact: {
    sectionTitle: "Contato",
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
};
