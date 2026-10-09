import type { WorkExperience } from "@/types/content";

/** Work history. Source: Kevin's CV, quoted word for word. */
export const workExperience: WorkExperience[] = [
  {
    id: "kobler-y-asociados",
    role: {
      es: "Programador de IA y Automatización",
      en: "AI & Automation Developer",
    },
    organization: "Kobler y Asociados",
    location: { es: "Mérida, Yucatán", en: "Mérida, Yucatán" },
    period: { start: "2025-12", end: "2026-08" },
    highlights: [
      {
        es: "Desarrollé cinco agentes conversacionales en n8n con la API de OpenAI, uno por cliente, integrados con GoHighLevel y WhatsApp: atienden la conversación, califican al prospecto y registran el lead en el CRM.",
        en: "Built five conversational agents in n8n with the OpenAI API, one per client, integrated with GoHighLevel and WhatsApp: they handle the conversation, qualify the lead, and register it in the CRM.",
      },
      {
        es: "Motosureste Suzuki: el agente resuelve dudas de venta y financiamiento y filtra a los prospectos sin intención de compra, así los asesores dejaron de atender todas las conversaciones y se enfocan en cerrar ventas.",
        en: "Motosureste Suzuki: the agent answers sales and financing questions and filters out prospects with no purchase intent, so sales advisors stopped handling every conversation and could focus on closing sales.",
      },
      {
        es: "Sustituí la captura manual del inventario de cinco sucursales: el PDF de stock que envía Suzuki se procesa con un modelo de IA que extrae los datos y actualiza WooCommerce vía su API REST.",
        en: "Replaced manual inventory entry across five branches: the stock PDF sent by Suzuki is processed with an AI model that extracts the data and updates WooCommerce via its REST API.",
      },
      {
        es: "Neorgana: agente que responde a los pacientes y les envía el calendario del doctor para agendar su consulta en Zoom, selecciona al consultor por idioma, ubicación y padecimiento, y al terminar la videollamada dispara el seguimiento y la cotización.",
        en: "Neorgana: an agent that responds to patients and sends the doctor's calendar to schedule a Zoom consultation, selecting the consultant by language, location, and condition, and triggering follow-up and a quote once the video call ends.",
      },
      {
        es: "Lamau Beach: automaticé la disponibilidad por estancia de Airbnb y el costo por noche según temporada.",
        en: "Lamau Beach: automated Airbnb stay availability and nightly rates by season.",
      },
      {
        es: "Monitoreé y mantuve los flujos en producción corrigiendo las fallas, y participé en las reuniones con el cliente para levantar reglas de negocio e identificar casos borde.",
        en: "Monitored and maintained the flows in production, fixing issues, and took part in client meetings to gather business rules and identify edge cases.",
      },
    ],
    relatedProjectSlugs: ["motosureste-suzuki-agent", "neorgana-agent"],
  },
];
