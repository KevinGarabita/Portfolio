import type { LocalizedText } from "@/types/content";

/** Title and description of a case study in search results and link previews. */
export interface ProjectSeo {
  /**
   * The whole <title>, at most 60 characters: the project and its key stack
   * ("Gestor de reportes de campo · FastAPI + React"). No "| Kevin Garabita" suffix: it
   * would push most titles past what Google shows; the site name goes in og:site_name.
   */
  title: LocalizedText;
  /** 140 to 160 characters, written only from facts already on the case study. */
  description: LocalizedText;
}

/**
 * Search texts of every case study, keyed by the project's slug. They live apart from
 * content/projects/ because they follow search-result limits, not the page layout.
 * LocalizedText makes a missing language a type error, and lib/metadata.ts fails the
 * build when a project has no entry here or a text is out of range.
 */
export const projectSeo: Record<string, ProjectSeo> = {
  "field-report-manager": {
    title: {
      es: "Gestor de reportes de campo · FastAPI + React",
      en: "Field Report Manager · FastAPI + React",
      pt: "Gestor de relatórios de campo · FastAPI + React",
      fr: "Gestionnaire de rapports de terrain · FastAPI + React",
    },
    description: {
      es: "App web para UxmalTechnologies, terminada y sin publicar: el técnico registra reportes con fotos desde el celular y el supervisor los aprueba. FastAPI y React.",
      en: "Web app for UxmalTechnologies, completed but not released: technicians log reports with photos from their phone and a supervisor approves them. FastAPI, React.",
      pt: "Aplicação web para a UxmalTechnologies, concluída e não publicada: o técnico registra relatórios com fotos pelo celular e o supervisor aprova. FastAPI e React.",
      fr: "Application web pour UxmalTechnologies, terminée mais non publiée : rapports avec photos saisis sur mobile et approuvés par le superviseur. FastAPI et React.",
    },
  },
  "controltec-pest-control-crm": {
    title: {
      es: "CRM para control de plagas · FastAPI + React Native",
      en: "Pest Control CRM · FastAPI + React Native",
      pt: "CRM para controle de pragas · FastAPI + React Native",
      fr: "CRM de lutte antiparasitaire · FastAPI + React Native",
    },
    description: {
      es: "CRM en FastAPI y React para Controltec Fumigaciones: el técnico escanea el QR de cada estación, llena el reporte en sitio y el cliente ve sus reportes firmados.",
      en: "FastAPI and React CRM for Controltec Fumigaciones: technicians scan each station's QR code and fill in the report on-site, and clients see their signed reports.",
      pt: "CRM em FastAPI e React para a Controltec Fumigaciones: o técnico lê o QR de cada estação, preenche o relatório no local e o cliente vê os relatórios assinados.",
      fr: "CRM FastAPI et React pour Controltec Fumigaciones : le technicien scanne le QR des stations, remplit le rapport sur place, le client voit ses rapports signés.",
    },
  },
  "motosureste-suzuki-agent": {
    title: {
      es: "Agente de ventas para Motosureste Suzuki · n8n + OpenAI",
      en: "Motosureste Suzuki sales agent · n8n + OpenAI",
      pt: "Agente de vendas para a Motosureste Suzuki · n8n + OpenAI",
      fr: "Agent commercial pour Motosureste Suzuki · n8n + OpenAI",
    },
    description: {
      es: "Agente de WhatsApp en n8n con la API de OpenAI para Motosureste Suzuki: cotiza motos con el catálogo de WooCommerce y actualiza el inventario desde un PDF.",
      en: "WhatsApp agent built in n8n with the OpenAI API for Motosureste Suzuki: it quotes motorcycles from the WooCommerce catalog and updates stock from a PDF.",
      pt: "Agente de WhatsApp no n8n com a API da OpenAI para a Motosureste Suzuki: faz orçamentos com o catálogo do WooCommerce e atualiza o estoque a partir de um PDF.",
      fr: "Agent WhatsApp dans n8n avec l'API d'OpenAI pour Motosureste Suzuki : il établit les devis de motos depuis le catalogue WooCommerce et met à jour les stocks.",
    },
  },
  "neorgana-agent": {
    title: {
      es: "Agente de agendado para Neorgana · n8n + OpenAI",
      en: "Neorgana scheduling agent · n8n + OpenAI",
      pt: "Agente de agendamento para a Neorgana · n8n + OpenAI",
      fr: "Agent de prise de rendez-vous pour Neorgana · n8n + OpenAI",
    },
    description: {
      es: "Agente de WhatsApp en n8n con la API de OpenAI para Neorgana: elige al consultor por idioma, ubicación y padecimiento, y envía su agenda para consulta por Zoom.",
      en: "WhatsApp agent in n8n with the OpenAI API for Neorgana: it picks the consultant by language, location and condition, and sends their calendar for a Zoom call.",
      pt: "Agente de WhatsApp no n8n com a API da OpenAI para a Neorgana: escolhe o consultor por idioma, região e condição de saúde e envia a agenda da consulta no Zoom.",
      fr: "Agent WhatsApp dans n8n avec l'API d'OpenAI pour Neorgana : il oriente chaque patient vers le bon consultant et envoie son agenda pour une consultation Zoom.",
    },
  },
  "lamau-beach-automation": {
    title: {
      es: "Agente de disponibilidad para Lamau Beach · n8n + OpenAI",
      en: "Lamau Beach availability agent · n8n + OpenAI",
      pt: "Agente de disponibilidade para a Lamau Beach · n8n + OpenAI",
      fr: "Agent de disponibilité pour Lamau Beach · n8n + OpenAI",
    },
    description: {
      es: "Agente de WhatsApp en n8n con la API de OpenAI para Lamau Beach: revisa si sus estancias de Airbnb están libres y calcula el costo por noche según la temporada.",
      en: "WhatsApp agent built in n8n with the OpenAI API for Lamau Beach: it checks availability for its Airbnb stays and works out the nightly rate by season.",
      pt: "Agente de WhatsApp no n8n com a API da OpenAI para a Lamau Beach: verifica a disponibilidade das hospedagens no Airbnb e calcula a diária conforme a temporada.",
      fr: "Agent WhatsApp dans n8n avec l'API d'OpenAI pour Lamau Beach : il vérifie la disponibilité de ses logements Airbnb et calcule le prix par nuit selon la saison.",
    },
  },
  "workshop-web": {
    title: {
      es: "Diagnóstico en vivo del workshop Appolo · React + Supabase",
      en: "Live diagnostic for the Appolo workshop · React + Supabase",
      pt: "Diagnóstico ao vivo do workshop Appolo · React + Supabase",
      fr: "Diagnostic en direct de l'atelier Appolo · React + Supabase",
    },
    description: {
      es: "Sistema en producción para el workshop Appolo: la sala responde a un bot de WhatsApp en n8n y una pantalla proyecta las respuestas en vivo. React y Supabase.",
      en: "System in production for the Appolo workshop: the audience answers a WhatsApp bot built in n8n and a projected screen shows the answers live. React, Supabase.",
      pt: "Sistema em produção para o workshop Appolo: o público responde a um bot de WhatsApp feito no n8n e uma tela projeta as respostas ao vivo. React e Supabase.",
      fr: "Système en production pour l'atelier Appolo : la salle répond à un bot WhatsApp créé dans n8n et un écran projette les réponses en direct. React et Supabase.",
    },
  },
};
