import { sameInEveryLanguage } from "@/i18n/localize";
import type { WorkExperience } from "@/types/content";

/**
 * Work history. Source: Kevin's CV, whose source of truth is docs/cv/*.html. The
 * highlights condense its Kobler bullet points for the Experience section: benefit first,
 * as team work, as Kevin asked, and with no fact beyond the case studies in
 * projects/kobler.ts.
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
