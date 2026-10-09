import type { Project } from "@/types/content";

import { koblerHighlights } from "../experience";

/**
 * Work done at Kobler y Asociados, shown together as "Proyectos en Kobler".
 * Sources: Kevin's CV and the n8n workflows of each client, read as they were up to
 * August 2026 (the end of the job). No client data, credentials or internal links.
 */
export const koblerProjects: Project[] = [
  {
    slug: "motosureste-suzuki-agent",
    name: {
      es: "Agente de ventas e inventario para Motosureste Suzuki",
      en: "Sales agent and inventory updates for Motosureste Suzuki",
    },
    client: "Motosureste Suzuki",
    category: "kobler",
    context: { es: "Kobler y Asociados", en: "Kobler y Asociados" },
    kind: "ai-automation",
    isFeatured: true,
    teamSetup: "team",
    summary: {
      es: "Agente de WhatsApp que atiende a quien busca una moto Suzuki: responde con el catálogo de la tienda, genera la cotización y pasa a un asesor a quien quiere financiamiento. Un segundo flujo lee el PDF de existencias y actualiza el stock de la tienda en línea.",
      en: "WhatsApp agent for people looking for a Suzuki motorcycle: it answers from the store catalog, generates the quote and hands financing requests to an advisor. A second flow reads the stock PDF and updates the online store's inventory.",
    },
    problem: {
      es: "Los asesores de Motosureste atendían todas las conversaciones de WhatsApp, también las de personas sin intención de compra. Además, el inventario de las cinco sucursales se capturaba a mano en la tienda en línea a partir del PDF de existencias que envía Suzuki.",
      en: "Motosureste's sales advisors handled every WhatsApp conversation, including those from people with no intention to buy. On top of that, stock for the five branches was entered by hand in the online store from the stock PDF that Suzuki sends.",
    },
    solution: {
      es: "Cuando llega un mensaje, GoHighLevel lo envía a n8n y el agente responde con un modelo de OpenAI. Los modelos, precios, colores y ofertas los consulta en ese momento en la tienda de WooCommerce, así que no los inventa. Si el cliente quiere cotizar, el agente le pide sus datos, le muestra una precotización para que la confirme y genera la cotización en GoHighLevel. Para el inventario, el PDF de existencias llega por WhatsApp, un modelo de IA extrae las cantidades de cada modelo y color, y el flujo las escribe por sucursal en WooCommerce mediante su API REST.",
      en: "When a message arrives, GoHighLevel sends it to n8n and the agent replies with an OpenAI model. It looks up models, prices, colors and offers in the WooCommerce store at that moment, so it does not make them up. If the customer wants a quote, the agent asks for their details, shows a draft quote for them to confirm and generates the quote in GoHighLevel. For inventory, the stock PDF arrives over WhatsApp, an AI model extracts the quantities for each model and color, and the flow writes them per branch to WooCommerce through its REST API.",
    },
    role: {
      es: "Fue trabajo en equipo dentro de Kobler. Construí en n8n el agente y el flujo de inventario, los monitoreé en producción y corregí sus fallas. También participé en las reuniones con el cliente para levantar reglas de negocio e identificar casos borde.",
      en: "This was team work at Kobler. I built the agent and the inventory flow in n8n, monitored them in production and fixed their issues. I also took part in client meetings to gather business rules and identify edge cases.",
    },
    results: [
      {
        es: "Los asesores dejaron de atender todas las conversaciones: el agente filtra a los prospectos sin intención de compra y ellos se enfocan en cerrar ventas.",
        en: "Advisors stopped handling every conversation: the agent filters out prospects with no purchase intent, and advisors focus on closing sales.",
      },
      {
        es: "El inventario de las cinco sucursales dejó de capturarse a mano.",
        en: "Stock for the five branches is no longer entered by hand.",
      },
      {
        es: "Cada cotización queda registrada en GoHighLevel como oportunidad de venta, con el modelo y el color que eligió el cliente y asignada a su asesor.",
        en: "Every quote is recorded in GoHighLevel as a sales opportunity, with the model and color the customer chose, assigned to their advisor.",
      },
    ],
    highlights: [
      koblerHighlights.motosuresteSuzuki,
      koblerHighlights.inventory,
      {
        es: "Para cotizar, el agente confirma modelo, color, nombre, teléfono y correo, muestra una precotización y, cuando el cliente la aprueba, genera la cotización formal y le comparte el enlace.",
        en: "To quote, the agent confirms model, color, name, phone and email, shows a draft quote and, once the customer approves it, generates the formal quote and shares the link.",
      },
      {
        es: "Si el cliente quiere financiamiento, el agente le pregunta el enganche y su ingreso y pasa la conversación a un asesor. Lo mismo hace con taller, refacciones y quejas. Al pasarla, etiqueta el contacto en GoHighLevel y deja de responder.",
        en: "If the customer wants financing, the agent asks about the down payment and their income, then hands the conversation to an advisor. It does the same for service, spare parts and complaints. When it hands over, it tags the contact in GoHighLevel and stops replying.",
      },
      {
        es: "Entiende notas de voz e imágenes, porque las convierte a texto antes de responder, y junta los mensajes que el cliente manda seguidos para contestar una sola vez.",
        en: "It understands voice notes and images by turning them into text before replying, and it groups messages the customer sends in a row so it answers only once.",
      },
    ],
    stack: ["n8n", "OpenAI API"],
    integrations: ["GoHighLevel", "WhatsApp", "WooCommerce"],
    images: [],
    links: [],
    flowDiagram: [
      {
        label: {
          es: "El cliente escribe por WhatsApp",
          en: "The customer writes on WhatsApp",
        },
        tool: "WhatsApp",
      },
      {
        label: {
          es: "GoHighLevel envía el mensaje a n8n",
          en: "GoHighLevel sends the message to n8n",
        },
        tool: "GoHighLevel",
      },
      {
        label: {
          es: "El agente entiende la consulta y prepara la respuesta",
          en: "The agent understands the question and drafts the reply",
        },
        tool: "OpenAI",
      },
      {
        label: {
          es: "Consulta modelos, precios y colores en la tienda",
          en: "Looks up models, prices and colors in the store",
        },
        tool: "WooCommerce",
      },
      {
        label: {
          es: "Genera la cotización y registra la oportunidad de venta",
          en: "Generates the quote and records the sales opportunity",
        },
        tool: "GoHighLevel",
      },
      {
        label: {
          es: "Pasa a un asesor si el cliente quiere financiamiento",
          en: "Hands over to an advisor if the customer wants financing",
        },
        tool: "GoHighLevel",
      },
    ],
    failureHandling: [
      {
        es: "Antes de escribir el inventario, el flujo revisa que las cantidades por sucursal de cada fila sumen el total que trae el propio PDF. Si no cuadran, esa fila no se toca y queda reportada.",
        en: "Before writing stock, the flow checks that each row's branch quantities add up to the total printed in the PDF itself. If they do not match, that row is left untouched and reported.",
      },
      {
        es: "Solo se actualizan variantes que existen en el catálogo de la tienda. Lo que el modelo no puede emparejar con seguridad se queda como estaba.",
        en: "Only variants that exist in the store catalog are updated. Anything the model cannot match with confidence stays as it was.",
      },
      {
        es: "Si la tienda tiene una ubicación de inventario que el flujo no conoce, se detiene sin escribir nada, porque actualizar sin ella borraría su stock.",
        en: "If the store has an inventory location the flow does not know, it stops without writing anything, because updating without it would wipe that location's stock.",
      },
    ],
    lastUpdated: "2026-10-09",
  },
  {
    slug: "neorgana-agent",
    name: {
      es: "Agente de agendado y seguimiento para Neorgana",
      en: "Scheduling and follow-up agent for Neorgana",
    },
    client: "Neorgana",
    category: "kobler",
    context: { es: "Kobler y Asociados", en: "Kobler y Asociados" },
    kind: "ai-automation",
    isFeatured: false,
    teamSetup: "team",
    summary: {
      es: "Agente de WhatsApp para una clínica: responde a cada paciente en su idioma, elige al consultor adecuado y le envía su calendario para agendar una consulta por Zoom. Al terminar la videollamada, otro flujo actualiza el CRM y dispara el seguimiento.",
      en: "WhatsApp agent for a clinic: it replies to each patient in their language, picks the right consultant and sends that consultant's calendar to book a Zoom consultation. When the call ends, another flow updates the CRM and triggers the follow-up.",
    },
    problem: {
      es: "Neorgana recibe mensajes de pacientes que escriben en distintos idiomas y desde distintas ubicaciones. Cada uno tiene que llegar al consultor que habla su idioma, atiende su región y conoce su padecimiento, y después de la consulta hay que darle seguimiento y enviarle una cotización.",
      en: "Neorgana gets messages from patients who write in different languages and from different locations. Each one has to reach the consultant who speaks their language, covers their region and handles their condition, and after the consultation someone has to follow up and send a quote.",
    },
    solution: {
      es: "La solución son tres flujos en n8n conectados con GoHighLevel. El primero es el agente de WhatsApp: con un modelo de OpenAI conversa con el paciente, reúne su padecimiento, idioma y ubicación, y le envía el calendario del consultor que corresponde. El segundo se activa cuando el paciente agenda: crea la oportunidad en el CRM y la vincula con la reunión de Zoom. El tercero se activa cuando termina la videollamada: revisa si la consulta se realizó, mueve la oportunidad a la etapa correspondiente y dispara en GoHighLevel el seguimiento y la cotización.",
      en: "The solution is three n8n flows connected to GoHighLevel. The first is the WhatsApp agent: using an OpenAI model, it talks with the patient, collects their condition, language and location, and sends the calendar of the matching consultant. The second runs when the patient books: it creates the opportunity in the CRM and links it to the Zoom meeting. The third runs when the video call ends: it checks whether the consultation took place, moves the opportunity to the right stage and triggers the follow-up and the quote in GoHighLevel.",
    },
    role: {
      es: "Fue trabajo en equipo dentro de Kobler. Construí en n8n el agente y las automatizaciones de Neorgana, los monitoreé en producción y corregí sus fallas. También participé en las reuniones con el cliente para levantar reglas de negocio e identificar casos borde.",
      en: "This was team work at Kobler. I built Neorgana's agent and automations in n8n, monitored them in production and fixed their issues. I also took part in client meetings to gather business rules and identify edge cases.",
    },
    results: [
      {
        es: "El agente elige al consultor por idioma, ubicación y padecimiento, y envía su calendario para agendar la consulta por Zoom.",
        en: "The agent picks the consultant by language, location and condition, and sends their calendar to book the Zoom consultation.",
      },
      {
        es: "El seguimiento y la cotización se disparan solos al terminar la videollamada.",
        en: "The follow-up and the quote are triggered automatically when the video call ends.",
      },
      {
        es: "La etapa de cada oportunidad en GoHighLevel cambia sola según si la consulta se realizó o no.",
        en: "Each opportunity's stage in GoHighLevel changes on its own depending on whether the consultation took place.",
      },
    ],
    highlights: [
      koblerHighlights.neorgana,
      {
        es: "El agente responde en el idioma en que escribe el paciente y no da diagnósticos ni consejos médicos: los datos clínicos los pide el formulario del calendario.",
        en: "The agent replies in whatever language the patient writes in and gives no diagnoses or medical advice: clinical details are collected by the calendar's booking form.",
      },
      {
        es: "Cada vez que envía un calendario, el agente etiqueta al contacto en GoHighLevel con el envío y su idioma. Si ningún consultor coincide o la duda sale de su alcance, pasa la conversación a una persona del equipo.",
        en: "Each time it sends a calendar, the agent tags the contact in GoHighLevel with the send and their language. If no consultant matches or the question is out of scope, it hands the conversation to a team member.",
      },
      {
        es: "Cuando el paciente agenda, un flujo crea la oportunidad en el CRM y guarda su referencia en la reunión de Zoom, para saber después a qué oportunidad corresponde cada videollamada.",
        en: "When the patient books, a flow creates the opportunity in the CRM and stores its reference in the Zoom meeting, so each video call can later be matched to its opportunity.",
      },
      {
        es: "Al terminar la videollamada, Zoom avisa a n8n. El flujo revisa la duración y los participantes, marca la consulta como realizada o cancelada y GoHighLevel envía el mensaje que corresponde.",
        en: "When the video call ends, Zoom notifies n8n. The flow checks the duration and the participants, marks the consultation as completed or cancelled, and GoHighLevel sends the matching message.",
      },
    ],
    stack: ["n8n", "OpenAI API"],
    integrations: ["GoHighLevel", "WhatsApp", "Zoom"],
    images: [],
    links: [],
    flowDiagram: [
      {
        label: {
          es: "El paciente escribe por WhatsApp",
          en: "The patient writes on WhatsApp",
        },
        tool: "WhatsApp",
      },
      {
        label: {
          es: "El agente pregunta padecimiento, idioma y ubicación",
          en: "The agent asks about condition, language and location",
        },
        tool: "OpenAI",
      },
      {
        label: {
          es: "Envía el calendario del consultor que corresponde",
          en: "Sends the matching consultant's calendar",
        },
        tool: "GoHighLevel",
      },
      {
        label: {
          es: "El paciente agenda y se crea la oportunidad en el CRM",
          en: "The patient books and the opportunity is created in the CRM",
        },
        tool: "GoHighLevel",
      },
      {
        label: {
          es: "La consulta se hace por videollamada",
          en: "The consultation happens over video call",
        },
        tool: "Zoom",
      },
      {
        label: {
          es: "Al terminar, se actualiza la oportunidad y sale el seguimiento",
          en: "When it ends, the opportunity is updated and the follow-up goes out",
        },
        tool: "GoHighLevel",
      },
    ],
    decisions: [
      {
        es: "Los datos de Zoom de cada doctor viven en una tabla. Sumar un doctor es agregar una fila, sin modificar el flujo.",
        en: "Each doctor's Zoom details live in a table. Adding a doctor means adding a row, with no changes to the flow.",
      },
    ],
    failureHandling: [
      {
        es: "Zoom vuelve a enviar el aviso si no recibe respuesta en tres segundos, así que el flujo responde primero y hace el resto del trabajo después.",
        en: "Zoom resends its notification if it gets no response within three seconds, so the flow responds first and does the rest of the work afterwards.",
      },
      {
        es: "Si una cita cambia de doctor, Zoom genera otra reunión. El flujo de citas lo detecta y vuelve a vincular la reunión nueva con su oportunidad.",
        en: "If an appointment is moved to another doctor, Zoom creates a new meeting. The appointments flow detects it and links the new meeting to its opportunity again.",
      },
    ],
    lastUpdated: "2026-10-09",
  },
  {
    slug: "lamau-beach-automation",
    name: {
      es: "Agente de disponibilidad y cotización para Lamau Beach",
      en: "Availability and quote agent for Lamau Beach",
    },
    client: "Lamau Beach",
    category: "kobler",
    context: { es: "Kobler y Asociados", en: "Kobler y Asociados" },
    kind: "ai-automation",
    isFeatured: false,
    teamSetup: "team",
    summary: {
      es: "Agente de WhatsApp para Lamau Beach que revisa la disponibilidad de sus estancias de Airbnb y calcula el costo por noche según la temporada.",
      en: "WhatsApp agent for Lamau Beach that checks availability for its Airbnb stays and works out the nightly rate by season.",
    },
    problem: {
      es: "Para responderle a un huésped interesado hay que revisar si las fechas están libres en Airbnb y aplicar la tarifa por noche de la temporada que corresponde.",
      en: "To answer a prospective guest, someone has to check whether the dates are free on Airbnb and apply the nightly rate for the matching season.",
    },
    solution: {
      es: "El agente usa la misma base que los demás agentes de Kobler: GoHighLevel envía a n8n los mensajes de WhatsApp y un modelo de OpenAI responde. Para Lamau Beach tiene herramientas propias: una revisa la disponibilidad de la estancia en las fechas que pide el huésped, otra calcula la cotización con el precio por noche de la temporada y otras responden preguntas frecuentes y políticas de cancelación.",
      en: "The agent uses the same base as the other Kobler agents: GoHighLevel sends WhatsApp messages to n8n and an OpenAI model replies. For Lamau Beach it has its own tools: one checks the stay's availability for the guest's dates, another calculates the quote with the season's nightly rate, and others answer frequently asked questions and cancellation policies.",
    },
    role: {
      es: "Fue trabajo en equipo dentro de Kobler. Automaticé la disponibilidad por estancia de Airbnb y el costo por noche según temporada, y monitoreé los flujos en producción.",
      en: "This was team work at Kobler. I automated Airbnb stay availability and nightly rates by season, and monitored the flows in production.",
    },
    results: [
      {
        es: "La disponibilidad de cada estancia y su costo por noche según la temporada se calculan de forma automática dentro de la conversación.",
        en: "Each stay's availability and its nightly rate for the season are worked out automatically within the conversation.",
      },
    ],
    highlights: [
      koblerHighlights.lamauBeach,
      {
        es: "Tiene herramientas para revisar disponibilidad, cotizar la estancia y responder preguntas frecuentes y políticas de cancelación.",
        en: "It has tools to check availability, quote the stay and answer frequently asked questions and cancellation policies.",
      },
      {
        es: "Cuando el huésped pide hablar con una persona, el agente etiqueta el contacto en GoHighLevel y deja de responder para que el equipo continúe.",
        en: "When a guest asks to talk to a person, the agent tags the contact in GoHighLevel and stops replying so the team can take over.",
      },
    ],
    stack: ["n8n", "OpenAI API"],
    integrations: ["GoHighLevel", "WhatsApp", "Airbnb"],
    images: [],
    links: [],
    flowDiagram: [
      {
        label: {
          es: "El huésped escribe por WhatsApp",
          en: "The guest writes on WhatsApp",
        },
        tool: "WhatsApp",
      },
      {
        label: {
          es: "GoHighLevel envía el mensaje a n8n",
          en: "GoHighLevel sends the message to n8n",
        },
        tool: "GoHighLevel",
      },
      {
        label: {
          es: "El agente identifica la estancia y las fechas",
          en: "The agent identifies the stay and the dates",
        },
        tool: "OpenAI",
      },
      {
        label: {
          es: "Revisa la disponibilidad de la estancia",
          en: "Checks the stay's availability",
        },
        tool: "Airbnb",
      },
      {
        label: {
          es: "Calcula el costo por noche según la temporada",
          en: "Calculates the nightly rate for the season",
        },
      },
      {
        label: {
          es: "Responde al huésped con la disponibilidad y la cotización",
          en: "Replies to the guest with availability and the quote",
        },
        tool: "WhatsApp",
      },
    ],
    lastUpdated: "2026-10-09",
  },
];
