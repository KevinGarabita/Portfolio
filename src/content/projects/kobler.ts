import { sameInEveryLanguage } from "@/i18n/localize";
import type { Project } from "@/types/content";

/**
 * Team work at Kobler y Asociados, the marketing agency where Kevin worked (December
 * 2025 to November 2026), credited as "En equipo en Kobler y Asociados": the agents are
 * the agency's work for its clients, not Kevin's own projects nor a partnership, and
 * each role says what Kevin built himself. All three are in production (Kevin, 12
 * October 2026; start dates unknown, so no status note). Sources: Kevin's CV and the
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
    // The one agent on the home page: the hero's AI promise needs a live agent as proof.
    isFeatured: true,
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
    slug: "neorgana-agent",
    name: {
      es: "Agente de agendado y seguimiento para Neorgana",
      en: "Scheduling and follow-up agent for Neorgana",
      pt: "Agente de agendamento e acompanhamento para a Neorgana",
      fr: "Agent de prise de rendez-vous et de suivi pour Neorgana",
    },
    client: "Neorgana",
    category: "kobler",
    context: sameInEveryLanguage("Kobler y Asociados"),
    status: "in-production",
    kind: "ai-automation",
    isFeatured: false,
    teamSetup: "team",
    tagline: {
      es: "Lleva a cada paciente con el consultor adecuado y envía el seguimiento tras la consulta.",
      en: "Matches each patient with the right consultant and sends the follow-up after the call.",
      pt: "Leva cada paciente ao consultor certo e envia o acompanhamento depois da consulta.",
      fr: "Oriente chaque patient vers le bon consultant et envoie le suivi après la consultation.",
    },
    summary: {
      es: "Agente de WhatsApp para una clínica: lleva a cada paciente con el consultor adecuado, le comparte su calendario para agendar por Zoom y envía el seguimiento al terminar la consulta.",
      en: "A WhatsApp agent for a clinic: it matches each patient with the right consultant, shares the calendar to book a Zoom call and sends the follow-up when the consultation ends.",
      pt: "Agente de WhatsApp para uma clínica: leva cada paciente ao consultor certo, compartilha a agenda para marcar pelo Zoom e envia o acompanhamento ao fim da consulta.",
      fr: "Un agent WhatsApp pour une clinique : il oriente chaque patient vers le bon consultant, partage l'agenda pour réserver sur Zoom et envoie le suivi à la fin de la consultation.",
    },
    problem: {
      es: "Los pacientes escriben en distintos idiomas y desde distintas regiones. Cada uno debe llegar al consultor correcto y, tras la consulta, recibir seguimiento y cotización.",
      en: "Patients write in different languages and from different regions. Each one must reach the right consultant and, after the consultation, get a follow-up and a quote.",
      pt: "Os pacientes escrevem em idiomas diferentes e de regiões diferentes. Cada um precisa chegar ao consultor certo e, depois da consulta, receber acompanhamento e orçamento.",
      fr: "Les patients écrivent dans différentes langues et depuis différentes régions. Chacun doit être orienté vers le bon consultant et, après la consultation, recevoir un suivi et un devis.",
    },
    solution: {
      es: "Tres flujos en n8n con GoHighLevel: el agente reúne padecimiento, idioma y ubicación y envía el calendario; al agendar se crea la oportunidad; al terminar el Zoom sale el seguimiento.",
      en: "Three n8n flows with GoHighLevel: the agent gathers condition, language and location and sends the calendar; booking creates the opportunity; when the Zoom call ends, the follow-up goes out.",
      pt: "Três fluxos no n8n com o GoHighLevel: o agente reúne condição, idioma e localização e envia a agenda; o agendamento cria a oportunidade; ao fim do Zoom, sai o acompanhamento.",
      fr: "Trois flux n8n avec GoHighLevel : l'agent recueille pathologie, langue et localisation et envoie l'agenda ; la réservation crée l'opportunité ; à la fin du Zoom, le suivi part.",
    },
    howItWorks: [
      {
        es: "La solución son tres flujos en n8n conectados con GoHighLevel. El primero es el agente de WhatsApp: con un modelo de OpenAI conversa con el paciente, reúne su padecimiento, idioma y ubicación, y le envía el calendario del consultor que corresponde. El segundo se activa cuando el paciente agenda: crea la oportunidad en el CRM y la vincula con la reunión de Zoom. El tercero se activa cuando termina la videollamada: revisa si la consulta se realizó, mueve la oportunidad a la etapa correspondiente y dispara en GoHighLevel el seguimiento y la cotización.",
        en: "The solution is three n8n flows connected to GoHighLevel. The first is the WhatsApp agent: using an OpenAI model, it talks with the patient, collects their condition, language and location, and sends the calendar of the matching consultant. The second runs when the patient books: it creates the opportunity in the CRM and links it to the Zoom meeting. The third runs when the video call ends: it checks whether the consultation took place, moves the opportunity to the right stage and triggers the follow-up and the quote in GoHighLevel.",
        pt: "A solução são três fluxos no n8n conectados ao GoHighLevel. O primeiro é o agente de WhatsApp: com um modelo da OpenAI, conversa com o paciente, reúne a condição de saúde, o idioma e a localização e envia a agenda do consultor correspondente. O segundo é acionado quando o paciente agenda: cria a oportunidade no CRM e a vincula à reunião do Zoom. O terceiro é acionado quando a videochamada termina: verifica se a consulta aconteceu, move a oportunidade para a etapa correspondente e dispara no GoHighLevel o acompanhamento e o orçamento.",
        fr: "La solution repose sur trois flux n8n connectés à GoHighLevel. Le premier est l'agent WhatsApp : avec un modèle d'OpenAI, il échange avec le patient, recueille sa pathologie, sa langue et sa localisation, et envoie l'agenda du consultant correspondant. Le deuxième se déclenche quand le patient réserve : il crée l'opportunité dans le CRM et la relie à la réunion Zoom. Le troisième se déclenche à la fin de l'appel vidéo : il vérifie si la consultation a eu lieu, fait passer l'opportunité à l'étape correspondante et déclenche dans GoHighLevel le suivi et le devis.",
      },
    ],
    role: {
      es: "Proyecto en equipo en Kobler y Asociados. Construí en n8n el agente y las automatizaciones, los mantuve en producción y participé con el cliente en definir las reglas de negocio.",
      en: "A team project at Kobler y Asociados. I built the agent and the automations in n8n, kept them running in production and helped define the business rules with the client.",
      pt: "Projeto em equipe na Kobler y Asociados. Construí no n8n o agente e as automações, mantive-os em produção e ajudei a definir as regras de negócio com o cliente.",
      fr: "Un projet d'équipe chez Kobler y Asociados. J'ai construit dans n8n l'agent et les automatisations, je les ai maintenus en production et j'ai aidé à définir les règles métier avec le client.",
    },
    results: [
      {
        es: "Cada paciente llega al consultor que habla su idioma, atiende su región y conoce su padecimiento.",
        en: "Each patient reaches the consultant who speaks their language, covers their region and handles their condition.",
        pt: "Cada paciente chega ao consultor que fala seu idioma, atende sua região e conhece sua condição de saúde.",
        fr: "Chaque patient est orienté vers le consultant qui parle sa langue, couvre sa région et connaît sa pathologie.",
      },
      {
        es: "El seguimiento y la cotización salen solos al terminar la videollamada.",
        en: "The follow-up and the quote go out on their own when the video call ends.",
        pt: "O acompanhamento e o orçamento são enviados automaticamente quando a videochamada termina.",
        fr: "Le suivi et le devis partent d'eux-mêmes à la fin de l'appel vidéo.",
      },
      {
        es: "El CRM se mantiene al día solo, según si la consulta se realizó o no.",
        en: "The CRM keeps itself up to date, based on whether the consultation took place.",
        pt: "O CRM se mantém em dia sozinho, conforme a consulta tenha acontecido ou não.",
        fr: "Le CRM reste à jour de lui-même, selon que la consultation a eu lieu ou non.",
      },
    ],
    highlights: [
      {
        es: "Responde en el idioma del paciente y no da diagnósticos ni consejos médicos.",
        en: "It replies in the patient's language and gives no diagnoses or medical advice.",
        pt: "Responde no idioma do paciente e não dá diagnósticos nem conselhos médicos.",
        fr: "Il répond dans la langue du patient et ne donne ni diagnostic ni conseil médical.",
      },
      {
        es: "Si ningún consultor coincide o la duda sale de su alcance, pasa la conversación a una persona del equipo.",
        en: "If no consultant matches or the question is out of scope, it hands the conversation to a team member.",
        pt: "Se nenhum consultor corresponder ou a dúvida estiver fora do seu alcance, passa a conversa a uma pessoa da equipe.",
        fr: "Si aucun consultant ne correspond ou si la question dépasse son périmètre, il transmet la conversation à un membre de l'équipe.",
      },
      {
        es: "Al terminar el Zoom, el flujo revisa duración y participantes y marca la consulta como realizada o cancelada.",
        en: "When the Zoom call ends, the flow checks duration and participants and marks the consultation as completed or cancelled.",
        pt: "Ao fim do Zoom, o fluxo verifica a duração e os participantes e marca a consulta como realizada ou cancelada.",
        fr: "À la fin du Zoom, le flux vérifie la durée et les participants et marque la consultation comme réalisée ou annulée.",
      },
    ],
    stack: ["n8n", "OpenAI API"],
    integrations: ["WhatsApp", "Zoom", "GoHighLevel"],
    images: [],
    links: [],
    flowDiagram: [
      {
        label: {
          es: "El paciente escribe por WhatsApp",
          en: "The patient writes on WhatsApp",
          pt: "O paciente escreve pelo WhatsApp",
          fr: "Le patient écrit sur WhatsApp",
        },
        tool: "WhatsApp",
      },
      {
        label: {
          es: "El agente pregunta padecimiento, idioma y ubicación",
          en: "The agent asks about condition, language and location",
          pt: "O agente pergunta a condição de saúde, o idioma e a localização",
          fr: "L'agent demande la pathologie, la langue et la localisation",
        },
        tool: "OpenAI",
      },
      {
        label: {
          es: "Envía el calendario del consultor que corresponde",
          en: "Sends the matching consultant's calendar",
          pt: "Envia a agenda do consultor correspondente",
          fr: "Envoie l'agenda du consultant correspondant",
        },
        tool: "GoHighLevel",
      },
      {
        label: {
          es: "El paciente agenda y se crea la oportunidad en el CRM",
          en: "The patient books and the opportunity is created in the CRM",
          pt: "O paciente agenda e a oportunidade é criada no CRM",
          fr: "Le patient réserve et l'opportunité est créée dans le CRM",
        },
        tool: "GoHighLevel",
      },
      {
        label: {
          es: "La consulta se hace por videollamada",
          en: "The consultation happens over video call",
          pt: "A consulta acontece por videochamada",
          fr: "La consultation a lieu par appel vidéo",
        },
        tool: "Zoom",
      },
      {
        label: {
          es: "Al terminar, se actualiza la oportunidad y sale el seguimiento",
          en: "When it ends, the opportunity is updated and the follow-up goes out",
          pt: "Ao terminar, a oportunidade é atualizada e o acompanhamento é enviado",
          fr: "À la fin, l'opportunité est mise à jour et le suivi est envoyé",
        },
        tool: "GoHighLevel",
      },
    ],
    decisions: [
      {
        es: "Cada vez que envía un calendario, el agente etiqueta al contacto en GoHighLevel con el envío y su idioma. Si ningún consultor coincide o la duda sale de su alcance, pasa la conversación a una persona del equipo.",
        en: "Each time it sends a calendar, the agent tags the contact in GoHighLevel with the send and their language. If no consultant matches or the question is out of scope, it hands the conversation to a team member.",
        pt: "Sempre que envia uma agenda, o agente etiqueta o contato no GoHighLevel com o envio e o idioma. Se nenhum consultor corresponder ou a dúvida estiver fora do seu alcance, passa a conversa a uma pessoa da equipe.",
        fr: "Chaque fois qu'il envoie un agenda, l'agent étiquette le contact dans GoHighLevel avec l'envoi et sa langue. Si aucun consultant ne correspond ou si la question dépasse son périmètre, il transmet la conversation à un membre de l'équipe.",
      },
      {
        es: "Cuando el paciente agenda, un flujo crea la oportunidad en el CRM y guarda su referencia en la reunión de Zoom, para saber después a qué oportunidad corresponde cada videollamada.",
        en: "When the patient books, a flow creates the opportunity in the CRM and stores its reference in the Zoom meeting, so each video call can later be matched to its opportunity.",
        pt: "Quando o paciente agenda, um fluxo cria a oportunidade no CRM e guarda a referência dela na reunião do Zoom, para saber depois a que oportunidade corresponde cada videochamada.",
        fr: "Quand le patient réserve, un flux crée l'opportunité dans le CRM et enregistre sa référence dans la réunion Zoom, afin de relier ensuite chaque appel vidéo à son opportunité.",
      },
      {
        es: "Los datos de Zoom de cada doctor viven en una tabla. Sumar un doctor es agregar una fila, sin modificar el flujo.",
        en: "Each doctor's Zoom details live in a table. Adding a doctor means adding a row, with no changes to the flow.",
        pt: "Os dados do Zoom de cada médico ficam em uma tabela. Incluir um médico é adicionar uma linha, sem alterar o fluxo.",
        fr: "Les informations Zoom de chaque médecin sont dans une table. Ajouter un médecin revient à ajouter une ligne, sans modifier le flux.",
      },
    ],
    failureHandling: [
      {
        es: "Zoom vuelve a enviar el aviso si no recibe respuesta en tres segundos, así que el flujo responde primero y hace el resto del trabajo después.",
        en: "Zoom resends its notification if it gets no response within three seconds, so the flow responds first and does the rest of the work afterwards.",
        pt: "O Zoom reenvia o aviso se não receber resposta em três segundos; por isso, o fluxo responde primeiro e faz o restante do trabalho depois.",
        fr: "Zoom renvoie sa notification s'il n'obtient pas de réponse en trois secondes : le flux répond donc d'abord et effectue le reste du travail ensuite.",
      },
      {
        es: "Si una cita cambia de doctor, Zoom genera otra reunión. El flujo de citas lo detecta y vuelve a vincular la reunión nueva con su oportunidad.",
        en: "If an appointment is moved to another doctor, Zoom creates a new meeting. The appointments flow detects it and links the new meeting to its opportunity again.",
        pt: "Se uma consulta muda de médico, o Zoom cria outra reunião. O fluxo de agendamentos detecta isso e vincula novamente a nova reunião à sua oportunidade.",
        fr: "Si un rendez-vous change de médecin, Zoom crée une autre réunion. Le flux des rendez-vous le détecte et relie de nouveau la nouvelle réunion à son opportunité.",
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
