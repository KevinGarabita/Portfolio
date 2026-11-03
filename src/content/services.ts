import type { LocalizedText } from "@/types/content";

/** One kind of work Kevin offers to businesses, on the services page. */
export interface Service {
  id: string;
  title: LocalizedText;
  /** What the client gets, in business words, not in technologies. */
  summary: LocalizedText;
  /** Two or three concrete parts of the work. */
  includes: LocalizedText[];
  /** Case studies that prove it (slugs from content/projects), best first. */
  exampleSlugs: string[];
}

/** A step of how a project with Kevin goes, from the first message to the delivery. */
export interface ProcessStep {
  title: LocalizedText;
  description: LocalizedText;
}

/**
 * The services page (/[lang]/services), for clients. Every claim comes from a case study
 * in content/projects: the agents and automations from the Kobler work, the web
 * applications from the freelance projects. Prices are not listed: Kevin quotes each
 * project by its scope (3 November 2026). lib/services.ts fails the build if an example
 * slug names no project.
 */
export const services: Service[] = [
  {
    id: "whatsapp-ai-agents",
    title: {
      es: "Agentes de IA para WhatsApp",
      en: "AI agents for WhatsApp",
      pt: "Agentes de IA para WhatsApp",
      fr: "Agents d'IA pour WhatsApp",
    },
    summary: {
      es: "Un asistente que atiende a tus clientes por WhatsApp, responde con la información de tu negocio y le pasa a tu equipo los prospectos ya calificados.",
      en: "An assistant that answers your customers on WhatsApp with your business's information and hands your team leads that are already qualified.",
      pt: "Um assistente que atende seus clientes pelo WhatsApp com as informações do seu negócio e passa para a sua equipe os leads já qualificados.",
      fr: "Un assistant qui répond à vos clients sur WhatsApp avec les informations de votre entreprise et transmet à votre équipe des prospects déjà qualifiés.",
    },
    includes: [
      {
        es: "Respuestas con tu catálogo, tus precios y tu disponibilidad",
        en: "Answers from your catalog, prices and availability",
        pt: "Respostas com seu catálogo, seus preços e sua disponibilidade",
        fr: "Des réponses à partir de votre catalogue, de vos prix et de vos disponibilités",
      },
      {
        es: "Prospectos calificados y registrados en tu CRM",
        en: "Leads qualified and logged in your CRM",
        pt: "Leads qualificados e registrados no seu CRM",
        fr: "Des prospects qualifiés et enregistrés dans votre CRM",
      },
      {
        es: "Cada conversación llega a la persona adecuada de tu equipo",
        en: "Every conversation reaches the right person on your team",
        pt: "Cada conversa chega à pessoa certa da sua equipe",
        fr: "Chaque conversation arrive à la bonne personne de votre équipe",
      },
    ],
    exampleSlugs: [
      "motosureste-suzuki-agent",
      "neorgana-agent",
      "lamau-beach-automation",
    ],
  },
  {
    id: "process-automation",
    title: {
      es: "Automatización de procesos",
      en: "Process automation",
      pt: "Automação de processos",
      fr: "Automatisation des processus",
    },
    summary: {
      es: "Conecto las herramientas que ya usas para que la información pase de una a otra sola y tu equipo deje de capturar datos a mano.",
      en: "I connect the tools you already use so information flows between them on its own and your team stops typing data by hand.",
      pt: "Conecto as ferramentas que você já usa para que a informação passe de uma para outra sozinha e sua equipe pare de digitar dados à mão.",
      fr: "Je connecte les outils que vous utilisez déjà pour que l'information circule toute seule et que votre équipe arrête de tout saisir à la main.",
    },
    includes: [
      {
        es: "Integraciones con WhatsApp, tu CRM, tu tienda en línea y Zoom",
        en: "Integrations with WhatsApp, your CRM, your online store and Zoom",
        pt: "Integrações com WhatsApp, seu CRM, sua loja virtual e Zoom",
        fr: "Des intégrations avec WhatsApp, votre CRM, votre boutique en ligne et Zoom",
      },
      {
        es: "Inventarios y registros al día sin captura manual",
        en: "Stock and records kept up to date with no manual entry",
        pt: "Estoques e registros em dia sem digitação",
        fr: "Des stocks et des registres à jour sans saisie manuelle",
      },
      {
        es: "Seguimientos que salen solos en el momento justo",
        en: "Follow-ups that go out on their own at the right moment",
        pt: "Acompanhamentos que saem sozinhos no momento certo",
        fr: "Des suivis qui partent tout seuls au bon moment",
      },
    ],
    exampleSlugs: ["motosureste-suzuki-agent", "neorgana-agent"],
  },
  {
    id: "custom-web-applications",
    title: {
      es: "Aplicaciones web a la medida",
      en: "Custom web applications",
      pt: "Aplicações web sob medida",
      fr: "Applications web sur mesure",
    },
    summary: {
      es: "Sistemas web para operar tu negocio: paneles, reportes, portales para tus clientes y apps que tu equipo usa desde el celular, incluso sin señal.",
      en: "Web systems to run your business: dashboards, reports, client portals and apps your team uses from their phones, even with no signal.",
      pt: "Sistemas web para operar o seu negócio: painéis, relatórios, portais para clientes e apps que sua equipe usa pelo celular, mesmo sem sinal.",
      fr: "Des systèmes web pour faire tourner votre entreprise : tableaux de bord, rapports, portails clients et applications que votre équipe utilise sur mobile, même sans réseau.",
    },
    includes: [
      {
        es: "Backend con FastAPI y base de datos en Supabase",
        en: "A FastAPI backend with a Supabase database",
        pt: "Backend com FastAPI e banco de dados no Supabase",
        fr: "Un backend FastAPI avec une base de données Supabase",
      },
      {
        es: "Interfaz en React para computadora y celular",
        en: "A React interface for desktop and mobile",
        pt: "Interface em React para computador e celular",
        fr: "Une interface React pour ordinateur et mobile",
      },
      {
        es: "Fotos, firmas y reportes desde campo",
        en: "Photos, signatures and reports from the field",
        pt: "Fotos, assinaturas e relatórios direto do campo",
        fr: "Photos, signatures et rapports depuis le terrain",
      },
    ],
    exampleSlugs: [
      "workshop-web",
      "controltec-pest-control-crm",
      "field-report-manager",
    ],
  },
];

/** How a project goes, as four numbered steps. */
export const processSteps: ProcessStep[] = [
  {
    title: {
      es: "Platicamos",
      en: "We talk",
      pt: "Conversamos",
      fr: "On échange",
    },
    description: {
      es: "Me cuentas por WhatsApp o en una videollamada qué quieres resolver.",
      en: "You tell me on WhatsApp or in a video call what you want to solve.",
      pt: "Você me conta pelo WhatsApp ou numa videochamada o que quer resolver.",
      fr: "Vous me dites sur WhatsApp ou en visio ce que vous voulez résoudre.",
    },
  },
  {
    title: {
      es: "Propuesta y cotización",
      en: "Proposal and quote",
      pt: "Proposta e orçamento",
      fr: "Proposition et devis",
    },
    description: {
      es: "Te mando por escrito el alcance, los tiempos y el precio.",
      en: "I send you the scope, the timeline and the price in writing.",
      pt: "Envio por escrito o escopo, os prazos e o preço.",
      fr: "Je vous envoie par écrit le périmètre, les délais et le prix.",
    },
  },
  {
    title: {
      es: "Desarrollo con avances",
      en: "Development you can follow",
      pt: "Desenvolvimento com entregas parciais",
      fr: "Développement suivi",
    },
    description: {
      es: "Ves avances mientras lo construyo y los ajustamos juntos.",
      en: "You see progress while I build it, and we adjust it together.",
      pt: "Você acompanha o progresso enquanto eu construo, e ajustamos juntos.",
      fr: "Vous voyez l'avancement pendant que je le construis, et on ajuste ensemble.",
    },
  },
  {
    title: {
      es: "Entrega",
      en: "Delivery",
      pt: "Entrega",
      fr: "Livraison",
    },
    description: {
      es: "Lo ponemos en marcha juntos y te explico cómo usarlo.",
      en: "We launch it together and I show you how to use it.",
      pt: "Colocamos no ar juntos e eu explico como usar.",
      fr: "On le met en service ensemble et je vous montre comment l'utiliser.",
    },
  },
];
