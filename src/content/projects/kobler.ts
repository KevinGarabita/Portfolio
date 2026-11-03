import { sameInEveryLanguage } from "@/i18n/localize";
import type { Project } from "@/types/content";

/**
 * Team work at Kobler y Asociados, the marketing agency where Kevin worked (December
 * 2025 to November 2026), credited as "En equipo en Kobler y Asociados": the agents are
 * the agency's work for its clients, not Kevin's own projects nor a partnership, and
 * each role says what Kevin built himself. Both are in production (Kevin, 12
 * October 2026; start dates unknown, so no status note). Neorgana, also team work there,
 * has its own file (neorgana-agent.ts) because its case study is longer. Sources: Kevin's CV and the
 * n8n workflows of each client, read as they were up to August 2026. No client data,
 * credentials or internal links.
 */
export const koblerProjects: Project[] = [
  {
    slug: "motosureste-suzuki-agent",
    name: {
      es: "Agente de ventas e inventario para Motosureste Suzuki",
      en: "Sales agent and inventory updates for Motosureste Suzuki",
      pt: "Agente de vendas e atualização de estoque para a Motosureste Suzuki",
      fr: "Agent commercial et mise à jour des stocks pour Motosureste Suzuki",
    },
    client: "Motosureste Suzuki",
    category: "kobler",
    context: sameInEveryLanguage("Kobler y Asociados"),
    status: "in-production",
    kind: "ai-automation",
    // Off the home page since 3 November 2026 (Kevin): Neorgana is the featured agent.
    isFeatured: false,
    teamSetup: "team",
    tagline: {
      es: "Cotiza motos por WhatsApp, filtra prospectos y actualiza el inventario sin captura manual.",
      en: "Quotes motorcycles on WhatsApp, screens leads and updates stock with no manual entry.",
      pt: "Faz orçamentos de motos pelo WhatsApp, filtra leads e atualiza o estoque sem digitação.",
      fr: "Devis de motos sur WhatsApp, tri des prospects et stocks à jour sans saisie manuelle.",
    },
    summary: {
      es: "Agente de WhatsApp que cotiza motos con el catálogo vigente y filtra prospectos, más un flujo que actualiza el inventario de la tienda en línea desde un PDF.",
      en: "A WhatsApp agent that quotes motorcycles from the current catalog and screens leads, plus a flow that updates the online store's stock from a PDF.",
      pt: "Agente de WhatsApp que faz orçamentos de motos com o catálogo atual e filtra leads, mais um fluxo que atualiza o estoque da loja on-line a partir de um PDF.",
      fr: "Un agent WhatsApp qui établit des devis de motos à partir du catalogue à jour et trie les prospects, plus un flux qui met à jour les stocks de la boutique en ligne depuis un PDF.",
    },
    problem: {
      es: "Los asesores atendían todas las conversaciones de WhatsApp, incluso sin intención de compra, y el inventario de cinco sucursales se capturaba a mano desde un PDF.",
      en: "Advisors handled every WhatsApp conversation, even with no intent to buy, and stock for five branches was typed in by hand from a PDF.",
      pt: "Os consultores atendiam todas as conversas do WhatsApp, mesmo sem intenção de compra, e o estoque de cinco filiais era digitado à mão a partir de um PDF.",
      fr: "Les conseillers traitaient toutes les conversations WhatsApp, même sans intention d'achat, et les stocks de cinq succursales étaient saisis à la main depuis un PDF.",
    },
    solution: {
      es: "Un agente en n8n con OpenAI responde con modelos, precios y colores consultados en WooCommerce y genera la cotización en GoHighLevel. Otro flujo lee el PDF de existencias con IA y actualiza la tienda.",
      en: "An n8n agent with OpenAI answers with models, prices and colors looked up in WooCommerce and generates the quote in GoHighLevel. Another flow reads the stock PDF with AI and updates the store.",
      pt: "Um agente no n8n com OpenAI responde com modelos, preços e cores consultados no WooCommerce e gera o orçamento no GoHighLevel. Outro fluxo lê o PDF de estoque com IA e atualiza a loja.",
      fr: "Un agent n8n avec OpenAI répond avec les modèles, prix et couleurs consultés dans WooCommerce et génère le devis dans GoHighLevel. Un autre flux lit le PDF de stock par IA et met à jour la boutique.",
    },
    howItWorks: [
      {
        es: "Cuando llega un mensaje, GoHighLevel lo envía a n8n y el agente responde con un modelo de OpenAI. Los modelos, precios, colores y ofertas los consulta en ese momento en la tienda de WooCommerce, así que no los inventa. Si el cliente quiere cotizar, el agente le pide sus datos, le muestra una precotización para que la confirme y genera la cotización en GoHighLevel. Para el inventario, el PDF de existencias llega por WhatsApp, un modelo de IA extrae las cantidades de cada modelo y color, y el flujo las escribe por sucursal en WooCommerce mediante su API REST.",
        en: "When a message arrives, GoHighLevel sends it to n8n and the agent replies with an OpenAI model. It looks up models, prices, colors and offers in the WooCommerce store at that moment, so it does not make them up. If the customer wants a quote, the agent asks for their details, shows a draft quote for them to confirm and generates the quote in GoHighLevel. For inventory, the stock PDF arrives over WhatsApp, an AI model extracts the quantities for each model and color, and the flow writes them per branch to WooCommerce through its REST API.",
        pt: "Quando chega uma mensagem, o GoHighLevel a envia ao n8n e o agente responde com um modelo da OpenAI. Ele consulta na hora os modelos, preços, cores e ofertas na loja WooCommerce, então não os inventa. Se o cliente quer um orçamento, o agente pede seus dados, mostra um pré-orçamento para ele confirmar e gera o orçamento no GoHighLevel. Para o estoque, o PDF chega pelo WhatsApp, um modelo de IA extrai as quantidades de cada modelo e cor, e o fluxo as grava por filial no WooCommerce pela API REST.",
        fr: "Quand un message arrive, GoHighLevel l'envoie à n8n et l'agent répond avec un modèle d'OpenAI. Il consulte à ce moment-là les modèles, prix, couleurs et offres dans la boutique WooCommerce : il ne les invente donc pas. Si le client veut un devis, l'agent lui demande ses coordonnées, lui montre un pré-devis à confirmer et génère le devis dans GoHighLevel. Pour les stocks, le PDF arrive par WhatsApp, un modèle d'IA extrait les quantités de chaque modèle et couleur, et le flux les enregistre par succursale dans WooCommerce via son API REST.",
      },
    ],
    role: {
      es: "Proyecto en equipo en Kobler y Asociados. Construí en n8n el agente y el flujo de inventario, los mantuve en producción y participé con el cliente en definir las reglas de negocio.",
      en: "A team project at Kobler y Asociados. I built the agent and the inventory flow in n8n, kept them running in production and helped define the business rules with the client.",
      pt: "Projeto em equipe na Kobler y Asociados. Construí no n8n o agente e o fluxo de estoque, mantive-os em produção e ajudei a definir as regras de negócio com o cliente.",
      fr: "Un projet d'équipe chez Kobler y Asociados. J'ai construit dans n8n l'agent et le flux de stocks, je les ai maintenus en production et j'ai aidé à définir les règles métier avec le client.",
    },
    results: [
      {
        es: "Los asesores dedican su tiempo a cerrar ventas: el agente filtra a quien no tiene intención de compra.",
        en: "Advisors spend their time closing sales: the agent screens out people with no intent to buy.",
        pt: "Os consultores dedicam o tempo a fechar vendas: o agente filtra quem não tem intenção de compra.",
        fr: "Les conseillers se consacrent aux ventes : l'agent écarte les personnes sans intention d'achat.",
      },
      {
        es: "El inventario de las cinco sucursales se actualiza sin captura manual.",
        en: "Stock for the five branches is updated with no manual entry.",
        pt: "O estoque das cinco filiais é atualizado sem digitação manual.",
        fr: "Les stocks des cinq succursales sont mis à jour sans saisie manuelle.",
      },
      {
        es: "Cada cotización llega al CRM como oportunidad de venta, asignada a su asesor.",
        en: "Every quote reaches the CRM as a sales opportunity, assigned to its advisor.",
        pt: "Cada orçamento chega ao CRM como oportunidade de venda, atribuído ao seu consultor.",
        fr: "Chaque devis arrive dans le CRM comme opportunité de vente, attribuée à son conseiller.",
      },
    ],
    highlights: [
      {
        es: "La IA extrae las existencias del PDF de Suzuki y el flujo las escribe por sucursal en WooCommerce.",
        en: "AI extracts the quantities from Suzuki's PDF and the flow writes them per branch to WooCommerce.",
        pt: "A IA extrai as quantidades do PDF da Suzuki e o fluxo as grava por filial no WooCommerce.",
        fr: "L'IA extrait les quantités du PDF de Suzuki et le flux les enregistre par succursale dans WooCommerce.",
      },
      {
        es: "Antes de cotizar muestra una precotización para que el cliente la confirme.",
        en: "Before quoting, it shows a draft quote for the customer to confirm.",
        pt: "Antes de fazer o orçamento, mostra um pré-orçamento para o cliente confirmar.",
        fr: "Avant le devis, il présente un pré-devis à faire confirmer par le client.",
      },
      {
        es: "Pasa a un asesor el financiamiento, el taller, las refacciones y las quejas, y deja de responder.",
        en: "It hands financing, service, spare parts and complaints to an advisor, then stops replying.",
        pt: "Encaminha a um consultor financiamento, oficina, peças e reclamações, e para de responder.",
        fr: "Il transmet à un conseiller le financement, l'atelier, les pièces et les réclamations, puis cesse de répondre.",
      },
      {
        es: "Entiende notas de voz e imágenes y junta los mensajes seguidos para responder una sola vez.",
        en: "It understands voice notes and images, and groups messages sent in a row to answer once.",
        pt: "Entende áudios e imagens e junta as mensagens seguidas para responder uma única vez.",
        fr: "Il comprend les messages vocaux et les images, et regroupe les messages envoyés à la suite pour ne répondre qu'une fois.",
      },
    ],
    stack: ["n8n", "OpenAI API"],
    integrations: ["WhatsApp", "WooCommerce", "GoHighLevel"],
    images: [],
    links: [],
    flowDiagram: [
      {
        label: {
          es: "El cliente escribe por WhatsApp",
          en: "The customer writes on WhatsApp",
          pt: "O cliente escreve pelo WhatsApp",
          fr: "Le client écrit sur WhatsApp",
        },
        tool: "WhatsApp",
      },
      {
        label: {
          es: "GoHighLevel envía el mensaje a n8n",
          en: "GoHighLevel sends the message to n8n",
          pt: "O GoHighLevel envia a mensagem ao n8n",
          fr: "GoHighLevel envoie le message à n8n",
        },
        tool: "GoHighLevel",
      },
      {
        label: {
          es: "El agente entiende la consulta y prepara la respuesta",
          en: "The agent understands the question and drafts the reply",
          pt: "O agente entende a pergunta e prepara a resposta",
          fr: "L'agent comprend la demande et prépare la réponse",
        },
        tool: "OpenAI",
      },
      {
        label: {
          es: "Consulta modelos, precios y colores en la tienda",
          en: "Looks up models, prices and colors in the store",
          pt: "Consulta modelos, preços e cores na loja",
          fr: "Consulte les modèles, prix et couleurs dans la boutique",
        },
        tool: "WooCommerce",
      },
      {
        label: {
          es: "Genera la cotización y registra la oportunidad de venta",
          en: "Generates the quote and records the sales opportunity",
          pt: "Gera o orçamento e registra a oportunidade de venda",
          fr: "Génère le devis et enregistre l'opportunité de vente",
        },
        tool: "GoHighLevel",
      },
      {
        label: {
          es: "Pasa a un asesor si el cliente quiere financiamiento",
          en: "Hands over to an advisor if the customer wants financing",
          pt: "Encaminha a um consultor se o cliente quer financiamento",
          fr: "Transmet à un conseiller si le client veut un financement",
        },
        tool: "GoHighLevel",
      },
    ],
    failureHandling: [
      {
        es: "Antes de escribir el inventario, el flujo revisa que las cantidades por sucursal de cada fila sumen el total que trae el propio PDF. Si no cuadran, esa fila no se toca y queda reportada.",
        en: "Before writing stock, the flow checks that each row's branch quantities add up to the total printed in the PDF itself. If they do not match, that row is left untouched and reported.",
        pt: "Antes de gravar o estoque, o fluxo verifica se as quantidades por filial de cada linha somam o total que vem no próprio PDF. Se não baterem, essa linha não é alterada e fica registrada no relatório.",
        fr: "Avant d'écrire les stocks, le flux vérifie que les quantités par succursale de chaque ligne correspondent au total indiqué dans le PDF lui-même. Sinon, cette ligne n'est pas modifiée et elle est signalée.",
      },
      {
        es: "Solo se actualizan variantes que existen en el catálogo de la tienda. Lo que el modelo no puede emparejar con seguridad se queda como estaba.",
        en: "Only variants that exist in the store catalog are updated. Anything the model cannot match with confidence stays as it was.",
        pt: "Só são atualizadas as variantes que existem no catálogo da loja. O que o modelo não consegue associar com segurança fica como estava.",
        fr: "Seules les variantes présentes dans le catalogue de la boutique sont mises à jour. Ce que le modèle ne peut pas associer avec certitude reste inchangé.",
      },
      {
        es: "Si la tienda tiene una ubicación de inventario que el flujo no conoce, se detiene sin escribir nada, porque actualizar sin ella borraría su stock.",
        en: "If the store has an inventory location the flow does not know, it stops without writing anything, because updating without it would wipe that location's stock.",
        pt: "Se a loja tiver um local de estoque que o fluxo não conhece, ele para sem gravar nada, porque atualizar sem ele apagaria o estoque desse local.",
        fr: "Si la boutique a un emplacement de stock que le flux ne connaît pas, il s'arrête sans rien écrire, car une mise à jour sans lui effacerait le stock de cet emplacement.",
      },
    ],
    lastUpdated: "2026-11-02",
  },
  {
    slug: "lamau-beach-automation",
    name: {
      es: "Agente de disponibilidad y cotización para Lamau Beach",
      en: "Availability and quote agent for Lamau Beach",
      pt: "Agente de disponibilidade e orçamento para a Lamau Beach",
      fr: "Agent de disponibilité et de devis pour Lamau Beach",
    },
    client: "Lamau Beach",
    category: "kobler",
    context: sameInEveryLanguage("Kobler y Asociados"),
    status: "in-production",
    kind: "ai-automation",
    isFeatured: false,
    teamSetup: "team",
    tagline: {
      es: "Responde por WhatsApp con la disponibilidad y el precio por noche según la temporada.",
      en: "Answers guests on WhatsApp with availability and the nightly rate for the season.",
      pt: "Responde pelo WhatsApp com a disponibilidade e o valor da diária conforme a temporada.",
      fr: "Répond sur WhatsApp avec la disponibilité et le prix par nuit selon la saison.",
    },
    summary: {
      es: "Agente de WhatsApp que responde a los huéspedes con la disponibilidad de sus estancias de Airbnb y el precio por noche de la temporada.",
      en: "A WhatsApp agent that answers guests with the availability of the Airbnb stays and the nightly rate for the season.",
      pt: "Agente de WhatsApp que responde aos hóspedes com a disponibilidade das hospedagens no Airbnb e o valor da diária da temporada.",
      fr: "Un agent WhatsApp qui répond aux voyageurs avec la disponibilité des logements Airbnb et le prix par nuit de la saison.",
    },
    problem: {
      es: "Para responderle a un huésped interesado hay que revisar si las fechas están libres en Airbnb y aplicar la tarifa por noche de la temporada que corresponde.",
      en: "To answer a prospective guest, someone has to check whether the dates are free on Airbnb and apply the nightly rate for the matching season.",
      pt: "Para responder a um hóspede interessado, é preciso verificar se as datas estão livres no Airbnb e aplicar o valor da diária da temporada correspondente.",
      fr: "Pour répondre à un voyageur intéressé, il faut vérifier si les dates sont libres sur Airbnb et appliquer le prix par nuit de la saison correspondante.",
    },
    solution: {
      es: "Sobre la base de los agentes de Kobler (GoHighLevel, n8n y OpenAI), el agente tiene herramientas para revisar disponibilidad, calcular la tarifa de temporada y responder preguntas frecuentes.",
      en: "Built on the base of the Kobler agents (GoHighLevel, n8n and OpenAI), the agent has tools to check availability, work out the season's rate and answer frequent questions.",
      pt: "Sobre a base dos agentes da Kobler (GoHighLevel, n8n e OpenAI), o agente tem ferramentas para verificar a disponibilidade, calcular a tarifa da temporada e responder perguntas frequentes.",
      fr: "Sur la base des agents de Kobler (GoHighLevel, n8n et OpenAI), l'agent dispose d'outils pour vérifier la disponibilité, calculer le tarif de la saison et répondre aux questions fréquentes.",
    },
    howItWorks: [
      {
        es: "El agente usa la misma base que los demás agentes de Kobler: GoHighLevel envía a n8n los mensajes de WhatsApp y un modelo de OpenAI responde. Para Lamau Beach tiene herramientas propias: una revisa la disponibilidad de la estancia en las fechas que pide el huésped, otra calcula la cotización con el precio por noche de la temporada y otras responden preguntas frecuentes y políticas de cancelación.",
        en: "The agent uses the same base as the other Kobler agents: GoHighLevel sends WhatsApp messages to n8n and an OpenAI model replies. For Lamau Beach it has its own tools: one checks the stay's availability for the guest's dates, another calculates the quote with the season's nightly rate, and others answer frequently asked questions and cancellation policies.",
        pt: "O agente usa a mesma base dos demais agentes da Kobler: o GoHighLevel envia ao n8n as mensagens do WhatsApp e um modelo da OpenAI responde. Para a Lamau Beach, ele tem ferramentas próprias: uma verifica a disponibilidade da hospedagem nas datas pedidas pelo hóspede, outra calcula o orçamento com o valor da diária da temporada e outras respondem perguntas frequentes e políticas de cancelamento.",
        fr: "L'agent repose sur la même base que les autres agents de Kobler : GoHighLevel envoie les messages WhatsApp à n8n et un modèle d'OpenAI répond. Pour Lamau Beach, il dispose de ses propres outils : l'un vérifie la disponibilité du logement aux dates demandées, un autre calcule le devis avec le prix par nuit de la saison, et d'autres répondent aux questions fréquentes et aux conditions d'annulation.",
      },
    ],
    role: {
      es: "Proyecto en equipo en Kobler y Asociados. Automaticé la consulta de disponibilidad de cada estancia y el cálculo del precio por noche según la temporada, y monitoreé los flujos en producción.",
      en: "A team project at Kobler y Asociados. I automated the availability check for each stay and the nightly rate by season, and monitored the flows in production.",
      pt: "Projeto em equipe na Kobler y Asociados. Automatizei a consulta de disponibilidade de cada hospedagem e o cálculo da diária conforme a temporada, e monitorei os fluxos em produção.",
      fr: "Un projet d'équipe chez Kobler y Asociados. J'ai automatisé la vérification de disponibilité de chaque logement et le calcul du prix par nuit selon la saison, et j'ai surveillé les flux en production.",
    },
    results: [
      {
        es: "El huésped recibe la disponibilidad y el precio por noche en la misma conversación, sin esperar a nadie.",
        en: "Guests get availability and the nightly rate in the same conversation, without waiting for anyone.",
        pt: "O hóspede recebe a disponibilidade e o valor da diária na mesma conversa, sem esperar ninguém.",
        fr: "Le voyageur obtient la disponibilité et le prix par nuit dans la même conversation, sans attendre personne.",
      },
    ],
    highlights: [
      {
        es: "Cotiza la estancia con el precio por noche de la temporada que corresponde a las fechas.",
        en: "It quotes the stay with the nightly rate of the season that matches the dates.",
        pt: "Faz o orçamento da hospedagem com a diária da temporada que corresponde às datas.",
        fr: "Il établit le devis du séjour avec le prix par nuit de la saison qui correspond aux dates.",
      },
      {
        es: "Responde preguntas frecuentes y políticas de cancelación.",
        en: "It answers frequently asked questions and cancellation policies.",
        pt: "Responde perguntas frequentes e políticas de cancelamento.",
        fr: "Il répond aux questions fréquentes et aux conditions d'annulation.",
      },
      {
        es: "Si el huésped pide hablar con una persona, etiqueta el contacto en GoHighLevel y deja de responder.",
        en: "If a guest asks for a person, it tags the contact in GoHighLevel and stops replying.",
        pt: "Se o hóspede pede para falar com uma pessoa, etiqueta o contato no GoHighLevel e para de responder.",
        fr: "Si un voyageur demande à parler à une personne, il étiquette le contact dans GoHighLevel et cesse de répondre.",
      },
    ],
    stack: ["n8n", "OpenAI API"],
    integrations: ["WhatsApp", "Airbnb", "GoHighLevel"],
    images: [],
    links: [],
    flowDiagram: [
      {
        label: {
          es: "El huésped escribe por WhatsApp",
          en: "The guest writes on WhatsApp",
          pt: "O hóspede escreve pelo WhatsApp",
          fr: "Le voyageur écrit sur WhatsApp",
        },
        tool: "WhatsApp",
      },
      {
        label: {
          es: "GoHighLevel envía el mensaje a n8n",
          en: "GoHighLevel sends the message to n8n",
          pt: "O GoHighLevel envia a mensagem ao n8n",
          fr: "GoHighLevel envoie le message à n8n",
        },
        tool: "GoHighLevel",
      },
      {
        label: {
          es: "El agente identifica la estancia y las fechas",
          en: "The agent identifies the stay and the dates",
          pt: "O agente identifica a hospedagem e as datas",
          fr: "L'agent identifie le logement et les dates",
        },
        tool: "OpenAI",
      },
      {
        label: {
          es: "Revisa la disponibilidad de la estancia",
          en: "Checks the stay's availability",
          pt: "Verifica a disponibilidade da hospedagem",
          fr: "Vérifie la disponibilité du logement",
        },
        tool: "Airbnb",
      },
      {
        label: {
          es: "Calcula el costo por noche según la temporada",
          en: "Calculates the nightly rate for the season",
          pt: "Calcula o valor da diária conforme a temporada",
          fr: "Calcule le prix par nuit selon la saison",
        },
      },
      {
        label: {
          es: "Responde al huésped con la disponibilidad y la cotización",
          en: "Replies to the guest with availability and the quote",
          pt: "Responde ao hóspede com a disponibilidade e o orçamento",
          fr: "Répond au voyageur avec la disponibilité et le devis",
        },
        tool: "WhatsApp",
      },
    ],
    lastUpdated: "2026-11-02",
  },
];
