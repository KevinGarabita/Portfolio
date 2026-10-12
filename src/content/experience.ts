import { sameInEveryLanguage } from "@/i18n/localize";
import type { LocalizedText, WorkExperience } from "@/types/content";

/**
 * Bullet points of the Kobler y Asociados job as the CV words them (docs/cv/: Spanish
 * and English word for word; Portuguese and French translated from them). Kevin asked
 * for them to sell the benefit for each client rather than list tasks, so they read
 * that way, as team work with his own part, and say nothing beyond the case studies in
 * projects/kobler.ts, which reuse some of them. The Experience section shows the shorter
 * version below.
 */
export const koblerHighlights = {
  fiveAgents: {
    es: "Desarrollé en equipo cinco agentes conversacionales de WhatsApp, uno por cliente, con n8n y la API de OpenAI e integrados con GoHighLevel: atienden cada conversación, califican al prospecto y lo dejan registrado en el CRM.",
    en: "Co-developed five WhatsApp conversational agents, one per client, with n8n and the OpenAI API, integrated with GoHighLevel: they handle every conversation, qualify the lead and log it in the CRM.",
    pt: "Desenvolvi em equipe cinco agentes conversacionais de WhatsApp, um por cliente, com n8n e a API da OpenAI e integrados ao GoHighLevel: eles conduzem cada conversa, qualificam o lead e o deixam registrado no CRM.",
    fr: "J'ai développé en équipe cinq agents conversationnels WhatsApp, un par client, avec n8n et l'API d'OpenAI, intégrés à GoHighLevel : ils mènent chaque conversation, qualifient le prospect et l'enregistrent dans le CRM.",
  },
  motosuresteSuzuki: {
    es: "Motosureste Suzuki: el agente cotiza con el catálogo vigente de la tienda y filtra a quien no tiene intención de compra, para que los asesores se enfoquen en cerrar ventas.",
    en: "Motosureste Suzuki: the agent quotes from the store's current catalog and screens out people with no intention to buy, so advisors can focus on closing sales.",
    pt: "Motosureste Suzuki: o agente faz orçamentos com o catálogo atual da loja e filtra quem não tem intenção de compra, para que os consultores se concentrem em fechar vendas.",
    fr: "Motosureste Suzuki : l'agent établit les devis à partir du catalogue à jour de la boutique et écarte les personnes sans intention d'achat, pour que les conseillers se concentrent sur la conclusion des ventes.",
  },
  inventory: {
    es: "Eliminé la captura manual del inventario de cinco sucursales: un modelo de IA extrae las existencias del PDF que envía Suzuki y el flujo actualiza WooCommerce por su API REST.",
    en: "Eliminated manual stock entry for five branches: an AI model extracts the quantities from the PDF Suzuki sends, and the flow updates WooCommerce through its REST API.",
    pt: "Eliminei o lançamento manual do estoque de cinco filiais: um modelo de IA extrai as quantidades do PDF enviado pela Suzuki e o fluxo atualiza o WooCommerce pela API REST.",
    fr: "J'ai supprimé la saisie manuelle des stocks de cinq succursales : un modèle d'IA extrait les quantités du PDF envoyé par Suzuki et le flux met à jour WooCommerce via son API REST.",
  },
  neorgana: {
    es: "Neorgana: el agente lleva a cada paciente con el consultor adecuado por idioma, ubicación y padecimiento, le comparte su calendario para agendar en Zoom y, al terminar la videollamada, dispara el seguimiento y la cotización.",
    en: "Neorgana: the agent matches each patient with the right consultant by language, location and condition, shares that consultant's calendar to book on Zoom, and triggers the follow-up and the quote when the call ends.",
    pt: "Neorgana: o agente leva cada paciente ao consultor certo por idioma, localização e condição de saúde, compartilha a agenda dele para marcar pelo Zoom e, ao fim da videochamada, dispara o acompanhamento e o orçamento.",
    fr: "Neorgana : l'agent oriente chaque patient vers le bon consultant selon la langue, la localisation et la pathologie, partage son agenda pour réserver sur Zoom et, à la fin de l'appel vidéo, déclenche le suivi et le devis.",
  },
  lamauBeach: {
    es: "Lamau Beach: el agente responde con la disponibilidad de cada estancia de Airbnb y el precio por noche de la temporada, sin revisiones manuales.",
    en: "Lamau Beach: the agent replies with each Airbnb stay's availability and the nightly rate for the season, with no manual checks.",
    pt: "Lamau Beach: o agente responde com a disponibilidade de cada hospedagem do Airbnb e o valor da diária da temporada, sem conferências manuais.",
    fr: "Lamau Beach : l'agent répond avec la disponibilité de chaque logement Airbnb et le prix par nuit de la saison, sans vérification manuelle.",
  },
  monitoring: {
    es: "Mantuve los flujos funcionando en producción con monitoreo y corrección de fallas, y participé en las reuniones con clientes para definir reglas de negocio y anticipar casos borde.",
    en: "Kept the flows running in production by monitoring them and fixing issues, and joined client meetings to define business rules and anticipate edge cases.",
    pt: "Mantive os fluxos funcionando em produção com monitoramento e correção de falhas, e participei das reuniões com clientes para definir regras de negócio e antecipar casos extremos.",
    fr: "J'ai assuré le bon fonctionnement des flux en production en les surveillant et en corrigeant les incidents, et j'ai participé aux réunions avec les clients pour définir les règles métier et anticiper les cas limites.",
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
        es: "Cinco agentes de WhatsApp desarrollados en equipo con n8n y la API de OpenAI, uno por cliente: atienden, califican al prospecto y lo registran en GoHighLevel.",
        en: "Five WhatsApp agents co-developed with n8n and the OpenAI API, one per client: they reply, qualify the lead and log it in GoHighLevel.",
        pt: "Cinco agentes de WhatsApp desenvolvidos em equipe com n8n e a API da OpenAI, um por cliente: atendem, qualificam o lead e o registram no GoHighLevel.",
        fr: "Cinq agents WhatsApp développés en équipe avec n8n et l'API d'OpenAI, un par client : ils répondent, qualifient le prospect et l'enregistrent dans GoHighLevel.",
      },
      {
        es: "Motosureste Suzuki: el agente cotiza con el catálogo vigente y filtra prospectos para que los asesores se enfoquen en cerrar ventas; el inventario de cinco sucursales se actualiza sin captura manual.",
        en: "Motosureste Suzuki: the agent quotes from the current catalog and screens leads so advisors focus on closing sales; stock for five branches updates with no manual entry.",
        pt: "Motosureste Suzuki: o agente faz orçamentos com o catálogo atual e filtra leads para que os consultores se concentrem em fechar vendas; o estoque de cinco filiais é atualizado sem digitação.",
        fr: "Motosureste Suzuki : l'agent établit les devis à partir du catalogue à jour et trie les prospects pour que les conseillers se concentrent sur les ventes ; les stocks de cinq succursales se mettent à jour sans saisie manuelle.",
      },
      {
        es: "Neorgana: cada paciente llega al consultor adecuado y el seguimiento sale solo al terminar la consulta por Zoom.",
        en: "Neorgana: each patient reaches the right consultant, and the follow-up goes out on its own when the Zoom consultation ends.",
        pt: "Neorgana: cada paciente chega ao consultor certo, e o acompanhamento sai automaticamente ao fim da consulta pelo Zoom.",
        fr: "Neorgana : chaque patient est orienté vers le bon consultant, et le suivi part tout seul à la fin de la consultation sur Zoom.",
      },
      {
        es: "Lamau Beach: disponibilidad de Airbnb y precio por noche de la temporada, resueltos en la misma conversación.",
        en: "Lamau Beach: Airbnb availability and the season's nightly rate, answered within the same conversation.",
        pt: "Lamau Beach: disponibilidade no Airbnb e valor da diária da temporada, respondidos na mesma conversa.",
        fr: "Lamau Beach : disponibilité Airbnb et prix par nuit de la saison, donnés dans la même conversation.",
      },
      {
        es: "Monitoreo y corrección de fallas en producción, y reuniones con clientes para definir reglas de negocio y anticipar casos borde.",
        en: "Monitored production and fixed issues; joined client meetings to define business rules and anticipate edge cases.",
        pt: "Monitoramento e correção de falhas em produção, e reuniões com clientes para definir regras de negócio e antecipar casos extremos.",
        fr: "Surveillance et correction des incidents en production, et réunions avec les clients pour définir les règles métier et anticiper les cas limites.",
      },
    ],
    relatedProjectSlugs: [
      "motosureste-suzuki-agent",
      "neorgana-agent",
      "lamau-beach-automation",
    ],
  },
];
