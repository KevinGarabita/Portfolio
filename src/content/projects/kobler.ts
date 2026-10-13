import { sameInEveryLanguage } from "@/i18n/localize";
import type { Project } from "@/types/content";

/**
 * Team work at Kobler y Asociados, credited as "Colaboración con Kobler": each role says
 * what Kevin built himself. All three are in production (Kevin, 12 October 2026; start
 * dates unknown, so no status note). Sources: Kevin's CV and the n8n workflows of each
 * client, read as they were up to August 2026 (the end of the job). No client data,
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
    isFeatured: false,
    teamSetup: "team",
    tagline: {
      es: "Cotiza motos por WhatsApp, filtra prospectos y actualiza el inventario sin captura manual.",
      en: "Quotes motorcycles on WhatsApp, screens leads and updates stock with no manual entry.",
      pt: "Faz orçamentos de motos pelo WhatsApp, filtra leads e atualiza o estoque sem digitação.",
      fr: "Devis de motos sur WhatsApp, tri des prospects et stocks à jour sans saisie manuelle.",
    },
    summary: {
      es: "Agente de WhatsApp que atiende a quien busca una moto Suzuki con el catálogo vigente de la tienda, genera su cotización y deja a los asesores enfocados en cerrar ventas. Un segundo flujo lee el PDF de existencias y mantiene al día el inventario de la tienda en línea.",
      en: "A WhatsApp agent that helps people looking for a Suzuki motorcycle with the store's current catalog, generates their quote and keeps advisors focused on closing sales. A second flow reads the stock PDF and keeps the online store's inventory up to date.",
      pt: "Agente de WhatsApp que atende quem procura uma moto Suzuki com o catálogo atual da loja, gera o orçamento e deixa os consultores focados em fechar vendas. Um segundo fluxo lê o PDF de estoque e mantém em dia o estoque da loja on-line.",
      fr: "Un agent WhatsApp qui accompagne les personnes à la recherche d'une moto Suzuki avec le catalogue à jour de la boutique, génère leur devis et laisse les conseillers se concentrer sur la conclusion des ventes. Un second flux lit le PDF de stock et tient à jour l'inventaire de la boutique en ligne.",
    },
    problem: {
      es: "Los asesores de Motosureste atendían todas las conversaciones de WhatsApp, también las de personas sin intención de compra. Además, el inventario de las cinco sucursales se capturaba a mano en la tienda en línea a partir del PDF de existencias que envía Suzuki.",
      en: "Motosureste's sales advisors handled every WhatsApp conversation, including those from people with no intention to buy. On top of that, stock for the five branches was entered by hand in the online store from the stock PDF that Suzuki sends.",
      pt: "Os consultores da Motosureste atendiam todas as conversas do WhatsApp, inclusive as de pessoas sem intenção de compra. Além disso, o estoque das cinco filiais era lançado à mão na loja on-line a partir do PDF de estoque que a Suzuki envia.",
      fr: "Les conseillers de Motosureste traitaient toutes les conversations WhatsApp, y compris celles de personnes sans intention d'achat. En outre, les stocks des cinq succursales étaient saisis à la main dans la boutique en ligne à partir du PDF de stock envoyé par Suzuki.",
    },
    solution: {
      es: "Cuando llega un mensaje, GoHighLevel lo envía a n8n y el agente responde con un modelo de OpenAI. Los modelos, precios, colores y ofertas los consulta en ese momento en la tienda de WooCommerce, así que no los inventa. Si el cliente quiere cotizar, el agente le pide sus datos, le muestra una precotización para que la confirme y genera la cotización en GoHighLevel. Para el inventario, el PDF de existencias llega por WhatsApp, un modelo de IA extrae las cantidades de cada modelo y color, y el flujo las escribe por sucursal en WooCommerce mediante su API REST.",
      en: "When a message arrives, GoHighLevel sends it to n8n and the agent replies with an OpenAI model. It looks up models, prices, colors and offers in the WooCommerce store at that moment, so it does not make them up. If the customer wants a quote, the agent asks for their details, shows a draft quote for them to confirm and generates the quote in GoHighLevel. For inventory, the stock PDF arrives over WhatsApp, an AI model extracts the quantities for each model and color, and the flow writes them per branch to WooCommerce through its REST API.",
      pt: "Quando chega uma mensagem, o GoHighLevel a envia ao n8n e o agente responde com um modelo da OpenAI. Ele consulta na hora os modelos, preços, cores e ofertas na loja WooCommerce, então não os inventa. Se o cliente quer um orçamento, o agente pede seus dados, mostra um pré-orçamento para ele confirmar e gera o orçamento no GoHighLevel. Para o estoque, o PDF chega pelo WhatsApp, um modelo de IA extrai as quantidades de cada modelo e cor, e o fluxo as grava por filial no WooCommerce pela API REST.",
      fr: "Quand un message arrive, GoHighLevel l'envoie à n8n et l'agent répond avec un modèle d'OpenAI. Il consulte à ce moment-là les modèles, prix, couleurs et offres dans la boutique WooCommerce : il ne les invente donc pas. Si le client veut un devis, l'agent lui demande ses coordonnées, lui montre un pré-devis à confirmer et génère le devis dans GoHighLevel. Pour les stocks, le PDF arrive par WhatsApp, un modèle d'IA extrait les quantités de chaque modèle et couleur, et le flux les enregistre par succursale dans WooCommerce via son API REST.",
    },
    role: {
      es: "Colaboración con el equipo de Kobler. Mi aporte: construí en n8n el agente y el flujo de inventario, los cuidé en producción con monitoreo y corrección de fallas, y participé en las reuniones con el cliente para definir las reglas de negocio y anticipar casos borde.",
      en: "A collaboration with the Kobler team. My part: I built the agent and the inventory flow in n8n, looked after them in production by monitoring them and fixing issues, and joined client meetings to define the business rules and anticipate edge cases.",
      pt: "Colaboração com a equipe da Kobler. Minha parte: construí no n8n o agente e o fluxo de estoque, cuidei deles em produção com monitoramento e correção de falhas e participei das reuniões com o cliente para definir as regras de negócio e antecipar casos extremos.",
      fr: "Une collaboration avec l'équipe de Kobler. Ma contribution : j'ai construit dans n8n l'agent et le flux de stocks, je les ai suivis en production en surveillant leur fonctionnement et en corrigeant les incidents, et j'ai participé aux réunions avec le client pour définir les règles métier et anticiper les cas limites.",
    },
    results: [
      {
        es: "Los asesores ya no atienden todas las conversaciones: el agente filtra a quien no tiene intención de compra y ellos dedican su tiempo a cerrar ventas.",
        en: "Advisors no longer handle every conversation: the agent screens out people with no intention to buy, so they spend their time closing sales.",
        pt: "Os consultores não atendem mais todas as conversas: o agente filtra quem não tem intenção de compra, e eles dedicam o tempo a fechar vendas.",
        fr: "Les conseillers ne traitent plus toutes les conversations : l'agent écarte les personnes sans intention d'achat, et ils consacrent leur temps à conclure des ventes.",
      },
      {
        es: "El inventario de las cinco sucursales se actualiza sin captura manual.",
        en: "Stock for the five branches is updated with no manual entry.",
        pt: "O estoque das cinco filiais é atualizado sem digitação manual.",
        fr: "Les stocks des cinq succursales sont mis à jour sans saisie manuelle.",
      },
      {
        es: "Cada cotización llega a GoHighLevel como oportunidad de venta, con el modelo y el color que eligió el cliente y asignada a su asesor.",
        en: "Every quote reaches GoHighLevel as a sales opportunity, with the model and color the customer chose, assigned to their advisor.",
        pt: "Cada orçamento chega ao GoHighLevel como oportunidade de venda, com o modelo e a cor que o cliente escolheu e atribuído ao seu consultor.",
        fr: "Chaque devis arrive dans GoHighLevel comme opportunité de vente, avec le modèle et la couleur choisis par le client, et attribué à son conseiller.",
      },
    ],
    highlights: [
      {
        es: "Eliminé la captura manual del inventario de cinco sucursales: un modelo de IA extrae las existencias del PDF que envía Suzuki y el flujo actualiza WooCommerce por su API REST.",
        en: "Eliminated manual stock entry for five branches: an AI model extracts the quantities from the PDF Suzuki sends, and the flow updates WooCommerce through its REST API.",
        pt: "Eliminei o lançamento manual do estoque de cinco filiais: um modelo de IA extrai as quantidades do PDF enviado pela Suzuki e o fluxo atualiza o WooCommerce pela API REST.",
        fr: "J'ai supprimé la saisie manuelle des stocks de cinq succursales : un modèle d'IA extrait les quantités du PDF envoyé par Suzuki et le flux met à jour WooCommerce via son API REST.",
      },
      {
        es: "Para cotizar, el agente confirma modelo, color, nombre, teléfono y correo, muestra una precotización y, cuando el cliente la aprueba, genera la cotización formal y le comparte el enlace.",
        en: "To quote, the agent confirms model, color, name, phone and email, shows a draft quote and, once the customer approves it, generates the formal quote and shares the link.",
        pt: "Para fazer o orçamento, o agente confirma modelo, cor, nome, telefone e e-mail, mostra um pré-orçamento e, quando o cliente o aprova, gera o orçamento formal e compartilha o link.",
        fr: "Pour établir le devis, l'agent confirme le modèle, la couleur, le nom, le téléphone et l'e-mail, présente un pré-devis puis, une fois approuvé par le client, génère le devis officiel et en partage le lien.",
      },
      {
        es: "Si el cliente quiere financiamiento, el agente le pregunta el enganche y su ingreso y pasa la conversación a un asesor. Lo mismo hace con taller, refacciones y quejas. Al pasarla, etiqueta el contacto en GoHighLevel y deja de responder.",
        en: "If the customer wants financing, the agent asks about the down payment and their income, then hands the conversation to an advisor. It does the same for service, spare parts and complaints. When it hands over, it tags the contact in GoHighLevel and stops replying.",
        pt: "Se o cliente quer financiamento, o agente pergunta o valor da entrada e a renda e passa a conversa a um consultor. Faz o mesmo com oficina, peças e reclamações. Ao passar a conversa, etiqueta o contato no GoHighLevel e para de responder.",
        fr: "Si le client souhaite un financement, l'agent lui demande l'apport et ses revenus, puis transmet la conversation à un conseiller. Il fait de même pour l'atelier, les pièces détachées et les réclamations. Au moment du transfert, il étiquette le contact dans GoHighLevel et cesse de répondre.",
      },
      {
        es: "Entiende notas de voz e imágenes, porque las convierte a texto antes de responder, y junta los mensajes que el cliente manda seguidos para contestar una sola vez.",
        en: "It understands voice notes and images by turning them into text before replying, and it groups messages the customer sends in a row so it answers only once.",
        pt: "Entende áudios e imagens, porque os converte em texto antes de responder, e junta as mensagens que o cliente manda em sequência para responder uma única vez.",
        fr: "Il comprend les messages vocaux et les images en les convertissant en texte avant de répondre, et regroupe les messages envoyés à la suite par le client pour ne répondre qu'une fois.",
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
    lastUpdated: "2026-10-12",
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
      es: "Agente de WhatsApp para una clínica: atiende a cada paciente en su idioma, lo lleva con el consultor adecuado y le comparte su calendario para agendar una consulta por Zoom. Al terminar la videollamada, el CRM se actualiza y el seguimiento sale solo.",
      en: "WhatsApp agent for a clinic: it serves each patient in their language, matches them with the right consultant and shares that consultant's calendar to book a Zoom consultation. When the call ends, the CRM updates itself and the follow-up goes out automatically.",
      pt: "Agente de WhatsApp para uma clínica: atende cada paciente no idioma dele, leva-o ao consultor certo e compartilha a agenda desse consultor para marcar uma consulta pelo Zoom. Ao fim da videochamada, o CRM se atualiza e o acompanhamento é enviado automaticamente.",
      fr: "Agent WhatsApp pour une clinique : il répond à chaque patient dans sa langue, l'oriente vers le bon consultant et partage l'agenda de celui-ci pour réserver une consultation sur Zoom. À la fin de l'appel vidéo, le CRM se met à jour et le suivi part automatiquement.",
    },
    problem: {
      es: "Neorgana recibe mensajes de pacientes que escriben en distintos idiomas y desde distintas ubicaciones. Cada uno tiene que llegar al consultor que habla su idioma, atiende su región y conoce su padecimiento, y después de la consulta hay que darle seguimiento y enviarle una cotización.",
      en: "Neorgana gets messages from patients who write in different languages and from different locations. Each one has to reach the consultant who speaks their language, covers their region and handles their condition, and after the consultation someone has to follow up and send a quote.",
      pt: "A Neorgana recebe mensagens de pacientes que escrevem em idiomas diferentes e de lugares diferentes. Cada um precisa chegar ao consultor que fala seu idioma, atende sua região e conhece sua condição de saúde, e depois da consulta é preciso fazer o acompanhamento e enviar um orçamento.",
      fr: "Neorgana reçoit des messages de patients qui écrivent dans différentes langues et depuis différents endroits. Chacun doit être orienté vers le consultant qui parle sa langue, couvre sa région et connaît sa pathologie, et après la consultation il faut assurer le suivi et envoyer un devis.",
    },
    solution: {
      es: "La solución son tres flujos en n8n conectados con GoHighLevel. El primero es el agente de WhatsApp: con un modelo de OpenAI conversa con el paciente, reúne su padecimiento, idioma y ubicación, y le envía el calendario del consultor que corresponde. El segundo se activa cuando el paciente agenda: crea la oportunidad en el CRM y la vincula con la reunión de Zoom. El tercero se activa cuando termina la videollamada: revisa si la consulta se realizó, mueve la oportunidad a la etapa correspondiente y dispara en GoHighLevel el seguimiento y la cotización.",
      en: "The solution is three n8n flows connected to GoHighLevel. The first is the WhatsApp agent: using an OpenAI model, it talks with the patient, collects their condition, language and location, and sends the calendar of the matching consultant. The second runs when the patient books: it creates the opportunity in the CRM and links it to the Zoom meeting. The third runs when the video call ends: it checks whether the consultation took place, moves the opportunity to the right stage and triggers the follow-up and the quote in GoHighLevel.",
      pt: "A solução são três fluxos no n8n conectados ao GoHighLevel. O primeiro é o agente de WhatsApp: com um modelo da OpenAI, conversa com o paciente, reúne a condição de saúde, o idioma e a localização e envia a agenda do consultor correspondente. O segundo é acionado quando o paciente agenda: cria a oportunidade no CRM e a vincula à reunião do Zoom. O terceiro é acionado quando a videochamada termina: verifica se a consulta aconteceu, move a oportunidade para a etapa correspondente e dispara no GoHighLevel o acompanhamento e o orçamento.",
      fr: "La solution repose sur trois flux n8n connectés à GoHighLevel. Le premier est l'agent WhatsApp : avec un modèle d'OpenAI, il échange avec le patient, recueille sa pathologie, sa langue et sa localisation, et envoie l'agenda du consultant correspondant. Le deuxième se déclenche quand le patient réserve : il crée l'opportunité dans le CRM et la relie à la réunion Zoom. Le troisième se déclenche à la fin de l'appel vidéo : il vérifie si la consultation a eu lieu, fait passer l'opportunité à l'étape correspondante et déclenche dans GoHighLevel le suivi et le devis.",
    },
    role: {
      es: "Colaboración con el equipo de Kobler. Mi aporte: construí en n8n el agente y las automatizaciones de Neorgana, los cuidé en producción con monitoreo y corrección de fallas, y participé en las reuniones con el cliente para definir las reglas de negocio y anticipar casos borde.",
      en: "A collaboration with the Kobler team. My part: I built Neorgana's agent and automations in n8n, looked after them in production by monitoring them and fixing issues, and joined client meetings to define the business rules and anticipate edge cases.",
      pt: "Colaboração com a equipe da Kobler. Minha parte: construí no n8n o agente e as automações da Neorgana, cuidei deles em produção com monitoramento e correção de falhas e participei das reuniões com o cliente para definir as regras de negócio e antecipar casos extremos.",
      fr: "Une collaboration avec l'équipe de Kobler. Ma contribution : j'ai construit dans n8n l'agent et les automatisations de Neorgana, je les ai suivis en production en surveillant leur fonctionnement et en corrigeant les incidents, et j'ai participé aux réunions avec le client pour définir les règles métier et anticiper les cas limites.",
    },
    results: [
      {
        es: "Cada paciente llega al consultor que habla su idioma, atiende su región y conoce su padecimiento, con su calendario listo para agendar.",
        en: "Each patient reaches the consultant who speaks their language, covers their region and handles their condition, with a calendar ready to book.",
        pt: "Cada paciente chega ao consultor que fala seu idioma, atende sua região e conhece sua condição de saúde, com a agenda pronta para marcar.",
        fr: "Chaque patient est orienté vers le consultant qui parle sa langue, couvre sa région et connaît sa pathologie, avec un agenda prêt pour réserver.",
      },
      {
        es: "El seguimiento y la cotización salen solos al terminar la videollamada.",
        en: "The follow-up and the quote go out on their own when the video call ends.",
        pt: "O acompanhamento e o orçamento são enviados automaticamente quando a videochamada termina.",
        fr: "Le suivi et le devis partent d'eux-mêmes à la fin de l'appel vidéo.",
      },
      {
        es: "El CRM se mantiene al día solo: cada oportunidad cambia de etapa según si la consulta se realizó o no.",
        en: "The CRM keeps itself up to date: each opportunity moves to the next stage depending on whether the consultation took place.",
        pt: "O CRM se mantém em dia sozinho: cada oportunidade muda de etapa conforme a consulta tenha acontecido ou não.",
        fr: "Le CRM reste à jour de lui-même : chaque opportunité change d'étape selon que la consultation a eu lieu ou non.",
      },
    ],
    highlights: [
      {
        es: "El agente responde en el idioma en que escribe el paciente y no da diagnósticos ni consejos médicos: los datos clínicos los pide el formulario del calendario.",
        en: "The agent replies in whatever language the patient writes in and gives no diagnoses or medical advice: clinical details are collected by the calendar's booking form.",
        pt: "O agente responde no idioma em que o paciente escreve e não dá diagnósticos nem conselhos médicos: os dados clínicos são pedidos no formulário da agenda.",
        fr: "L'agent répond dans la langue du patient et ne donne ni diagnostic ni conseil médical : les informations cliniques sont demandées par le formulaire de l'agenda.",
      },
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
        es: "Al terminar la videollamada, Zoom avisa a n8n. El flujo revisa la duración y los participantes, marca la consulta como realizada o cancelada y GoHighLevel envía el mensaje que corresponde.",
        en: "When the video call ends, Zoom notifies n8n. The flow checks the duration and the participants, marks the consultation as completed or cancelled, and GoHighLevel sends the matching message.",
        pt: "Quando a videochamada termina, o Zoom avisa o n8n. O fluxo verifica a duração e os participantes, marca a consulta como realizada ou cancelada, e o GoHighLevel envia a mensagem correspondente.",
        fr: "À la fin de l'appel vidéo, Zoom prévient n8n. Le flux vérifie la durée et les participants, marque la consultation comme réalisée ou annulée, et GoHighLevel envoie le message correspondant.",
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
    lastUpdated: "2026-10-12",
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
      es: "Agente de WhatsApp que responde a los huéspedes de Lamau Beach con la disponibilidad de sus estancias de Airbnb y el precio por noche de la temporada, sin que nadie tenga que revisar fechas y tarifas a mano.",
      en: "WhatsApp agent that answers Lamau Beach guests with the availability of its Airbnb stays and the nightly rate for the season, without anyone checking dates and rates by hand.",
      pt: "Agente de WhatsApp que responde aos hóspedes da Lamau Beach com a disponibilidade das hospedagens no Airbnb e o valor da diária da temporada, sem que ninguém precise conferir datas e tarifas à mão.",
      fr: "Agent WhatsApp qui répond aux voyageurs de Lamau Beach avec la disponibilité de ses logements Airbnb et le prix par nuit de la saison, sans que personne ait à vérifier les dates et les tarifs à la main.",
    },
    problem: {
      es: "Para responderle a un huésped interesado hay que revisar si las fechas están libres en Airbnb y aplicar la tarifa por noche de la temporada que corresponde.",
      en: "To answer a prospective guest, someone has to check whether the dates are free on Airbnb and apply the nightly rate for the matching season.",
      pt: "Para responder a um hóspede interessado, é preciso verificar se as datas estão livres no Airbnb e aplicar o valor da diária da temporada correspondente.",
      fr: "Pour répondre à un voyageur intéressé, il faut vérifier si les dates sont libres sur Airbnb et appliquer le prix par nuit de la saison correspondante.",
    },
    solution: {
      es: "El agente usa la misma base que los demás agentes de Kobler: GoHighLevel envía a n8n los mensajes de WhatsApp y un modelo de OpenAI responde. Para Lamau Beach tiene herramientas propias: una revisa la disponibilidad de la estancia en las fechas que pide el huésped, otra calcula la cotización con el precio por noche de la temporada y otras responden preguntas frecuentes y políticas de cancelación.",
      en: "The agent uses the same base as the other Kobler agents: GoHighLevel sends WhatsApp messages to n8n and an OpenAI model replies. For Lamau Beach it has its own tools: one checks the stay's availability for the guest's dates, another calculates the quote with the season's nightly rate, and others answer frequently asked questions and cancellation policies.",
      pt: "O agente usa a mesma base dos demais agentes da Kobler: o GoHighLevel envia ao n8n as mensagens do WhatsApp e um modelo da OpenAI responde. Para a Lamau Beach, ele tem ferramentas próprias: uma verifica a disponibilidade da hospedagem nas datas pedidas pelo hóspede, outra calcula o orçamento com o valor da diária da temporada e outras respondem perguntas frequentes e políticas de cancelamento.",
      fr: "L'agent repose sur la même base que les autres agents de Kobler : GoHighLevel envoie les messages WhatsApp à n8n et un modèle d'OpenAI répond. Pour Lamau Beach, il dispose de ses propres outils : l'un vérifie la disponibilité du logement aux dates demandées, un autre calcule le devis avec le prix par nuit de la saison, et d'autres répondent aux questions fréquentes et aux conditions d'annulation.",
    },
    role: {
      es: "Colaboración con el equipo de Kobler. Mi aporte: automaticé la consulta de disponibilidad de cada estancia de Airbnb y el cálculo del precio por noche según la temporada, y monitoreé los flujos en producción.",
      en: "A collaboration with the Kobler team. My part: I automated the availability check for each Airbnb stay and the nightly rate calculation by season, and monitored the flows in production.",
      pt: "Colaboração com a equipe da Kobler. Minha parte: automatizei a consulta de disponibilidade de cada hospedagem do Airbnb e o cálculo da diária conforme a temporada, e monitorei os fluxos em produção.",
      fr: "Une collaboration avec l'équipe de Kobler. Ma contribution : j'ai automatisé la vérification de disponibilité de chaque logement Airbnb et le calcul du prix par nuit selon la saison, et j'ai surveillé les flux en production.",
    },
    results: [
      {
        es: "El huésped recibe la disponibilidad y el precio por noche en la misma conversación, sin esperar a que alguien revise fechas y tarifas.",
        en: "Guests get availability and the nightly rate in the same conversation, without waiting for someone to check dates and rates.",
        pt: "O hóspede recebe a disponibilidade e o valor da diária na mesma conversa, sem esperar que alguém confira datas e tarifas.",
        fr: "Le voyageur obtient la disponibilité et le prix par nuit dans la même conversation, sans attendre que quelqu'un vérifie les dates et les tarifs.",
      },
    ],
    highlights: [
      {
        es: "Responde con la disponibilidad de cada estancia de Airbnb y el precio por noche de la temporada, dentro de la misma conversación.",
        en: "It replies with each Airbnb stay's availability and the nightly rate for the season, within the same conversation.",
        pt: "Responde com a disponibilidade de cada hospedagem do Airbnb e o valor da diária da temporada, na mesma conversa.",
        fr: "Il répond avec la disponibilité de chaque logement Airbnb et le prix par nuit de la saison, dans la même conversation.",
      },
      {
        es: "Tiene herramientas para revisar disponibilidad, cotizar la estancia y responder preguntas frecuentes y políticas de cancelación.",
        en: "It has tools to check availability, quote the stay and answer frequently asked questions and cancellation policies.",
        pt: "Tem ferramentas para verificar a disponibilidade, fazer o orçamento da hospedagem e responder perguntas frequentes e políticas de cancelamento.",
        fr: "Il dispose d'outils pour vérifier la disponibilité, établir le devis du séjour et répondre aux questions fréquentes et aux conditions d'annulation.",
      },
      {
        es: "Cuando el huésped pide hablar con una persona, el agente etiqueta el contacto en GoHighLevel y deja de responder para que el equipo continúe.",
        en: "When a guest asks to talk to a person, the agent tags the contact in GoHighLevel and stops replying so the team can take over.",
        pt: "Quando o hóspede pede para falar com uma pessoa, o agente etiqueta o contato no GoHighLevel e para de responder para que a equipe continue.",
        fr: "Quand un voyageur demande à parler à une personne, l'agent étiquette le contact dans GoHighLevel et cesse de répondre pour que l'équipe prenne le relais.",
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
    lastUpdated: "2026-10-12",
  },
];
