import { sameInEveryLanguage } from "@/i18n/localize";
import type { WorkExperience } from "@/types/content";

/**
 * Work history. Source: Kevin's CV, whose source of truth is docs/cv/*.html. The
 * summary, client results and responsibilities condense its Kobler bullet points for
 * the Experience section: benefit first, as team work, as Kevin asked, and with no fact
 * beyond the case studies in projects/kobler.ts. The client keywords only re-word those
 * same facts, so a recruiter can skim them before reading the line.
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
    organizationDescription: {
      es: "agencia de marketing",
      en: "marketing agency",
      pt: "agência de marketing",
      fr: "agence de marketing",
    },
    location: sameInEveryLanguage("Mérida, Yucatán"),
    period: { start: "2025-12", end: "2026-11" },
    summary: {
      es: "Cinco agentes de WhatsApp desarrollados en equipo con n8n y la API de OpenAI, uno por cliente: atienden, califican al prospecto y lo registran en GoHighLevel.",
      en: "Five WhatsApp agents co-developed with n8n and the OpenAI API, one per client: they reply, qualify the lead and log it in GoHighLevel.",
      pt: "Cinco agentes de WhatsApp desenvolvidos em equipe com n8n e a API da OpenAI, um por cliente: atendem, qualificam o lead e o registram no GoHighLevel.",
      fr: "Cinq agents WhatsApp développés en équipe avec n8n et l'API d'OpenAI, un par client : ils répondent, qualifient le prospect et l'enregistrent dans GoHighLevel.",
    },
    summaryHighlight: {
      es: "Cinco agentes de WhatsApp",
      en: "Five WhatsApp agents",
      pt: "Cinco agentes de WhatsApp",
      fr: "Cinq agents WhatsApp",
    },
    stack: ["whatsapp", "n8n", "openai", "highlevel"],
    clientResults: [
      {
        client: "Motosureste Suzuki",
        keywords: [
          {
            es: "Cotizaciones",
            en: "Quotes",
            pt: "Orçamentos",
            fr: "Devis",
          },
          {
            es: "Filtro de prospectos",
            en: "Lead screening",
            pt: "Filtro de leads",
            fr: "Tri des prospects",
          },
          {
            es: "Inventario de 5 sucursales",
            en: "Stock for 5 branches",
            pt: "Estoque de 5 filiais",
            fr: "Stocks de 5 succursales",
          },
        ],
        result: {
          es: "El agente cotiza con el catálogo vigente y filtra prospectos para que los asesores se enfoquen en cerrar ventas; el inventario se actualiza sin captura manual.",
          en: "The agent quotes from the current catalog and screens leads so advisors focus on closing sales; stock updates with no manual entry.",
          pt: "O agente faz orçamentos com o catálogo atual e filtra leads para que os consultores se concentrem em fechar vendas; o estoque é atualizado sem digitação.",
          fr: "L'agent établit les devis à partir du catalogue à jour et trie les prospects pour que les conseillers se concentrent sur les ventes ; les stocks se mettent à jour sans saisie manuelle.",
        },
        projectSlug: "motosureste-suzuki-agent",
      },
      {
        client: "Neorgana",
        keywords: [
          {
            es: "Enrutamiento de pacientes",
            en: "Patient routing",
            pt: "Encaminhamento de pacientes",
            fr: "Orientation des patients",
          },
          {
            es: "Seguimiento automático",
            en: "Automatic follow-up",
            pt: "Acompanhamento automático",
            fr: "Suivi automatique",
          },
        ],
        result: {
          es: "Cada paciente llega al consultor adecuado y el seguimiento sale solo al terminar la consulta por Zoom.",
          en: "Each patient reaches the right consultant, and the follow-up goes out on its own when the Zoom consultation ends.",
          pt: "Cada paciente chega ao consultor certo, e o acompanhamento sai automaticamente ao fim da consulta pelo Zoom.",
          fr: "Chaque patient est orienté vers le bon consultant, et le suivi part tout seul à la fin de la consultation sur Zoom.",
        },
        projectSlug: "neorgana-agent",
      },
      {
        client: "Lamau Beach",
        keywords: [
          {
            es: "Disponibilidad en Airbnb",
            en: "Airbnb availability",
            pt: "Disponibilidade no Airbnb",
            fr: "Disponibilité Airbnb",
          },
          {
            es: "Precio por temporada",
            en: "Seasonal pricing",
            pt: "Preço por temporada",
            fr: "Prix par saison",
          },
        ],
        result: {
          es: "Disponibilidad de Airbnb y precio por noche de la temporada, resueltos en la misma conversación.",
          en: "Airbnb availability and the season's nightly rate, answered within the same conversation.",
          pt: "Disponibilidade no Airbnb e valor da diária da temporada, respondidos na mesma conversa.",
          fr: "Disponibilité Airbnb et prix par nuit de la saison, donnés dans la même conversation.",
        },
        projectSlug: "lamau-beach-automation",
      },
    ],
    responsibilities: [
      {
        es: "Monitoreo y corrección de fallas en producción.",
        en: "Monitored production and fixed issues.",
        pt: "Monitoramento e correção de falhas em produção.",
        fr: "Surveillance et correction des incidents en production.",
      },
      {
        es: "Reuniones con clientes para definir reglas de negocio y anticipar casos borde.",
        en: "Client meetings to define business rules and anticipate edge cases.",
        pt: "Reuniões com clientes para definir regras de negócio e antecipar casos extremos.",
        fr: "Réunions avec les clients pour définir les règles métier et anticiper les cas limites.",
      },
    ],
  },
];
