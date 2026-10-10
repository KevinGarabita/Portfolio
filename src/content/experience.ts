import { sameInEveryLanguage } from "@/i18n/localize";
import type { LocalizedText, WorkExperience } from "@/types/content";

/**
 * Bullet points of the Kobler y Asociados job as the CV words them (Spanish and English
 * quoted word for word; Portuguese and French translated from them). The case studies in
 * projects/kobler.ts reuse them; the Experience section shows the shorter version below.
 */
export const koblerHighlights = {
  fiveAgents: {
    es: "Desarrollé cinco agentes conversacionales en n8n con la API de OpenAI, uno por cliente, integrados con GoHighLevel y WhatsApp: atienden la conversación, califican al prospecto y registran el lead en el CRM.",
    en: "Built five conversational agents in n8n with the OpenAI API, one per client, integrated with GoHighLevel and WhatsApp: they handle the conversation, qualify the lead, and register it in the CRM.",
    pt: "Desenvolvi cinco agentes conversacionais no n8n com a API da OpenAI, um por cliente, integrados ao GoHighLevel e ao WhatsApp: eles conduzem a conversa, qualificam o lead e o registram no CRM.",
    fr: "J'ai développé cinq agents conversationnels dans n8n avec l'API d'OpenAI, un par client, intégrés à GoHighLevel et WhatsApp : ils mènent la conversation, qualifient le prospect et l'enregistrent dans le CRM.",
  },
  motosuresteSuzuki: {
    es: "Motosureste Suzuki: el agente resuelve dudas de venta y financiamiento y filtra a los prospectos sin intención de compra, así los asesores dejaron de atender todas las conversaciones y se enfocan en cerrar ventas.",
    en: "Motosureste Suzuki: the agent answers sales and financing questions and filters out prospects with no purchase intent, so sales advisors stopped handling every conversation and could focus on closing sales.",
    pt: "Motosureste Suzuki: o agente tira dúvidas sobre vendas e financiamento e filtra os leads sem intenção de compra; assim, os consultores deixaram de atender todas as conversas e passaram a se concentrar em fechar vendas.",
    fr: "Motosureste Suzuki : l'agent répond aux questions sur la vente et le financement et écarte les prospects sans intention d'achat ; les conseillers ont cessé de traiter toutes les conversations et se concentrent sur la conclusion des ventes.",
  },
  inventory: {
    es: "Sustituí la captura manual del inventario de cinco sucursales: el PDF de stock que envía Suzuki se procesa con un modelo de IA que extrae los datos y actualiza WooCommerce vía su API REST.",
    en: "Replaced manual inventory entry across five branches: the stock PDF sent by Suzuki is processed with an AI model that extracts the data and updates WooCommerce via its REST API.",
    pt: "Substituí o lançamento manual do estoque de cinco filiais: o PDF de estoque enviado pela Suzuki é processado por um modelo de IA que extrai os dados e atualiza o WooCommerce pela API REST.",
    fr: "J'ai remplacé la saisie manuelle des stocks de cinq succursales : le PDF de stock envoyé par Suzuki est traité par un modèle d'IA qui en extrait les données et met à jour WooCommerce via son API REST.",
  },
  neorgana: {
    es: "Neorgana: agente que responde a los pacientes y les envía el calendario del doctor para agendar su consulta en Zoom, selecciona al consultor por idioma, ubicación y padecimiento, y al terminar la videollamada dispara el seguimiento y la cotización.",
    en: "Neorgana: an agent that responds to patients and sends the doctor's calendar to schedule a Zoom consultation, selecting the consultant by language, location, and condition, and triggering follow-up and a quote once the video call ends.",
    pt: "Neorgana: agente que responde aos pacientes e envia a agenda do médico para marcar a consulta pelo Zoom, escolhe o consultor por idioma, localização e condição de saúde e, ao fim da videochamada, dispara o acompanhamento e o orçamento.",
    fr: "Neorgana : un agent qui répond aux patients et leur envoie l'agenda du médecin pour réserver leur consultation sur Zoom, choisit le consultant selon la langue, la localisation et la pathologie, et déclenche le suivi et le devis à la fin de l'appel vidéo.",
  },
  lamauBeach: {
    es: "Lamau Beach: automaticé la disponibilidad por estancia de Airbnb y el costo por noche según temporada.",
    en: "Lamau Beach: automated Airbnb stay availability and nightly rates by season.",
    pt: "Lamau Beach: automatizei a disponibilidade de cada hospedagem do Airbnb e o valor da diária conforme a temporada.",
    fr: "Lamau Beach : j'ai automatisé la disponibilité de chaque logement Airbnb et le prix par nuit selon la saison.",
  },
  monitoring: {
    es: "Monitoreé y mantuve los flujos en producción corrigiendo las fallas, y participé en las reuniones con el cliente para levantar reglas de negocio e identificar casos borde.",
    en: "Monitored and maintained the flows in production, fixing issues, and took part in client meetings to gather business rules and identify edge cases.",
    pt: "Monitorei e mantive os fluxos em produção, corrigindo as falhas, e participei das reuniões com o cliente para levantar regras de negócio e identificar casos extremos.",
    fr: "J'ai surveillé et maintenu les flux en production en corrigeant les incidents, et j'ai participé aux réunions avec le client pour recueillir les règles métier et identifier les cas limites.",
  },
} satisfies Record<string, LocalizedText>;

/**
 * Work history. Source: Kevin's CV. The highlights say the same as the CV bullet points
 * above, shortened for the Experience section.
 */
export const workExperience: WorkExperience[] = [
  {
    id: "kobler-y-asociados",
    role: {
      es: "Programador de IA y Automatización",
      en: "AI & Automation Developer",
      pt: "Desenvolvedor de IA e Automação",
      fr: "Développeur IA et Automatisation",
    },
    organization: "Kobler y Asociados",
    location: sameInEveryLanguage("Mérida, Yucatán"),
    period: { start: "2025-12", end: "2026-08" },
    highlights: [
      {
        es: "Cinco agentes conversacionales en n8n con la API de OpenAI, uno por cliente, conectados a GoHighLevel y WhatsApp: atienden, califican al prospecto y lo registran en el CRM.",
        en: "Five conversational agents in n8n with the OpenAI API, one per client, connected to GoHighLevel and WhatsApp: they reply, qualify the lead and log it in the CRM.",
        pt: "Cinco agentes conversacionais no n8n com a API da OpenAI, um por cliente, conectados ao GoHighLevel e ao WhatsApp: atendem, qualificam o lead e o registram no CRM.",
        fr: "Cinq agents conversationnels dans n8n avec l'API d'OpenAI, un par client, connectés à GoHighLevel et WhatsApp : ils répondent, qualifient le prospect et l'enregistrent dans le CRM.",
      },
      {
        es: "Motosureste Suzuki: el agente resuelve dudas de venta y financiamiento y filtra a quien no tiene intención de compra; los asesores se enfocan en cerrar ventas.",
        en: "Motosureste Suzuki: the agent answers sales and financing questions and filters out people with no purchase intent, so advisors focus on closing sales.",
        pt: "Motosureste Suzuki: o agente tira dúvidas sobre vendas e financiamento e filtra quem não tem intenção de compra; os consultores se concentram em fechar vendas.",
        fr: "Motosureste Suzuki : l'agent répond aux questions sur la vente et le financement et écarte les personnes sans intention d'achat ; les conseillers se concentrent sur les ventes.",
      },
      {
        es: "Inventario de cinco sucursales sin captura manual: un modelo de IA lee el PDF de existencias de Suzuki y actualiza WooCommerce por su API REST.",
        en: "Stock for five branches with no manual entry: an AI model reads Suzuki's stock PDF and updates WooCommerce through its REST API.",
        pt: "Estoque de cinco filiais sem lançamento manual: um modelo de IA lê o PDF de estoque da Suzuki e atualiza o WooCommerce pela API REST.",
        fr: "Stocks de cinq succursales sans saisie manuelle : un modèle d'IA lit le PDF de stock de Suzuki et met à jour WooCommerce via son API REST.",
      },
      {
        es: "Neorgana: el agente elige al consultor por idioma, ubicación y padecimiento, envía su calendario para agendar en Zoom y, al terminar la videollamada, dispara el seguimiento y la cotización.",
        en: "Neorgana: the agent picks the consultant by language, location and condition, sends their calendar to book on Zoom and, when the call ends, triggers the follow-up and the quote.",
        pt: "Neorgana: o agente escolhe o consultor por idioma, localização e condição de saúde, envia a agenda para marcar pelo Zoom e, ao fim da videochamada, dispara o acompanhamento e o orçamento.",
        fr: "Neorgana : l'agent choisit le consultant selon la langue, la localisation et la pathologie, envoie son agenda pour réserver sur Zoom et, à la fin de l'appel, déclenche le suivi et le devis.",
      },
      {
        es: "Lamau Beach: disponibilidad de estancias de Airbnb y costo por noche según la temporada, automatizados.",
        en: "Lamau Beach: Airbnb stay availability and nightly rates by season, automated.",
        pt: "Lamau Beach: disponibilidade das hospedagens do Airbnb e valor da diária por temporada, automatizados.",
        fr: "Lamau Beach : disponibilité des logements Airbnb et prix par nuit selon la saison, automatisés.",
      },
      {
        es: "Monitoreo y corrección de fallas en producción, y reuniones con clientes para definir reglas de negocio y casos borde.",
        en: "Monitored production and fixed issues; met with clients to define business rules and edge cases.",
        pt: "Monitoramento e correção de falhas em produção, e reuniões com clientes para definir regras de negócio e casos extremos.",
        fr: "Surveillance et correction des incidents en production, et réunions avec les clients pour définir les règles métier et les cas limites.",
      },
    ],
    relatedProjectSlugs: [
      "motosureste-suzuki-agent",
      "neorgana-agent",
      "lamau-beach-automation",
    ],
  },
];
