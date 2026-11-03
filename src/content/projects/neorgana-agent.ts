import { sameInEveryLanguage } from "@/i18n/localize";
import type { Project } from "@/types/content";

/**
 * Neorgana's patient journey, team work at Kobler y Asociados (credited "En equipo en
 * Kobler y Asociados"): the layered architecture was the agency's plan, which Kevin carried
 * out with Kobler's IT director (Kevin, 3 November 2026; the director is not named on the
 * site). It has its own file only because it is longer than the agents in kobler.ts. Sources: Kevin's
 * project document (3 November 2026, with his corrections: one Zoom Server-to-Server app
 * per doctor) and the WhatsApp agent's n8n flow as it was on that day. Parts the document
 * marks as in development or pending are only in nextSteps. The n8n flows are never shown
 * as images (Kevin's rule). Images: the cover is a Gemini composition around the real
 * screenshot; the rest are real captures of Kevin's test contact (WhatsApp Web and Appolo,
 * 3 November 2026; the agent chat from a test run that day), with the consultant's name,
 * booking, quote and storage links blurred. No staff names, IDs, credentials or patient
 * data.
 */
export const neorganaAgent: Project = {
  slug: "neorgana-agent",
  name: {
    es: "Recorrido del paciente automatizado para Neorgana",
    en: "Automated patient journey for Neorgana",
    pt: "Jornada do paciente automatizada para a Neorgana",
    fr: "Parcours patient automatisé pour Neorgana",
  },
  client: "Neorgana",
  category: "kobler",
  context: sameInEveryLanguage("Kobler y Asociados"),
  status: "in-production",
  kind: "ai-automation",
  // The one agent on the home page: the hero's AI promise needs a live agent as proof.
  isFeatured: true,
  teamSetup: "team",
  tagline: {
    es: "Del primer WhatsApp a la cotización: cada paciente llega al consultor adecuado.",
    en: "From the first WhatsApp message to the quote, each patient reaches the right consultant.",
    pt: "Do primeiro WhatsApp ao orçamento: cada paciente chega ao consultor certo.",
    fr: "Du premier WhatsApp au devis : chaque patient arrive chez le bon consultant.",
  },
  summary: {
    es: "Sistema para una clínica de medicina regenerativa con pacientes de varios países: un agente de IA por WhatsApp asigna consultor, agenda la videollamada y, después, sale la cotización.",
    en: "A system for a regenerative medicine clinic with patients from many countries: a WhatsApp AI agent assigns the consultant, books the video call and, afterwards, the quote goes out.",
    pt: "Sistema para uma clínica de medicina regenerativa com pacientes de vários países: um agente de IA no WhatsApp atribui o consultor, agenda a videochamada e, depois, sai o orçamento.",
    fr: "Un système pour une clinique de médecine régénérative aux patients de nombreux pays : un agent d'IA sur WhatsApp attribue le consultant, réserve l'appel vidéo, puis le devis part.",
  },
  problem: {
    es: "Cada paciente pasaba por muchos pasos manuales, en dos idiomas y varias zonas horarias: llegar al consultor correcto, la videollamada, el resumen médico y la cotización del protocolo.",
    en: "Each patient went through many manual steps, in two languages and several time zones: reaching the right consultant, the video call, the medical summary and the protocol quote.",
    pt: "Cada paciente passava por muitas etapas manuais, em dois idiomas e vários fusos horários: chegar ao consultor certo, a videochamada, o resumo médico e o orçamento do protocolo.",
    fr: "Chaque patient passait par de nombreuses étapes manuelles, en deux langues et plusieurs fuseaux horaires : trouver le bon consultant, l'appel vidéo, le résumé médical et le devis.",
  },
  solution: {
    es: "Appolo (GoHighLevel) como CRM, n8n con la lógica, Zoom para las videollamadas y OpenAI para el agente, que elige consultor por padecimiento, idioma y región. Cada etapa dispara la siguiente.",
    en: "Appolo (GoHighLevel) as the CRM, n8n for the logic, Zoom for the video calls and OpenAI for the agent, which picks the consultant by condition, language and region. Each stage triggers the next.",
    pt: "Appolo (GoHighLevel) como CRM, n8n com a lógica, Zoom para as videochamadas e OpenAI para o agente, que escolhe o consultor por condição, idioma e região. Cada etapa dispara a seguinte.",
    fr: "Appolo (GoHighLevel) comme CRM, n8n pour la logique, Zoom pour les appels vidéo et OpenAI pour l'agent, qui choisit le consultant selon la condition, la langue et la région. Chaque étape lance la suivante.",
  },
  howItWorks: [
    {
      es: "Antes de llegar a n8n, un servidor propio descarta los mensajes de contactos marcados para no recibir respuestas automáticas, lo que evita bucles y ahorra ejecuciones. El agente de WhatsApp responde en el idioma del paciente, entiende notas de voz e imágenes y reúne de forma conversacional tres datos: padecimiento, idioma y región. Con ellos filtra a seis consultores; si varios cumplen, envía como máximo dos calendarios en un orden de prioridad, y si ninguno cumple o el paciente quiere cancelar, pasa la conversación a una persona del equipo. Antes de mandar un calendario revisa si el paciente ya tiene una cita, y al mandarlo etiqueta al contacto con el envío y su idioma.",
      en: "Before anything reaches n8n, a dedicated server drops messages from contacts flagged to get no automatic replies, which prevents loops and saves executions. The WhatsApp agent replies in the patient's language, understands voice notes and images, and gathers three facts in conversation: condition, language and region. With them it filters six consultants; if several match, it sends at most two calendars in a set priority order, and if none match or the patient wants to cancel, it hands the conversation to a team member. Before sending a calendar it checks whether the patient already has an appointment, and when it sends one it tags the contact with the send and their language.",
      pt: "Antes de chegar ao n8n, um servidor próprio descarta as mensagens de contatos marcados para não receber respostas automáticas, o que evita loops e economiza execuções. O agente de WhatsApp responde no idioma do paciente, entende áudios e imagens e reúne em conversa três dados: condição, idioma e região. Com eles filtra seis consultores; se vários atendem, envia no máximo dois calendários em uma ordem de prioridade, e se nenhum atende ou o paciente quer cancelar, passa a conversa para uma pessoa da equipe. Antes de enviar um calendário verifica se o paciente já tem uma consulta, e ao enviá-lo marca o contato com o envio e o idioma.",
      fr: "Avant d'arriver à n8n, un serveur dédié écarte les messages des contacts marqués pour ne pas recevoir de réponses automatiques, ce qui évite les boucles et économise des exécutions. L'agent WhatsApp répond dans la langue du patient, comprend les notes vocales et les images, et recueille en conversation trois informations : condition, langue et région. Il filtre ainsi six consultants ; si plusieurs conviennent, il envoie au plus deux calendriers selon un ordre de priorité, et si aucun ne convient ou si le patient veut annuler, il passe la conversation à un membre de l'équipe. Avant d'envoyer un calendrier, il vérifie si le patient a déjà un rendez-vous, et à l'envoi il étiquette le contact avec l'envoi et sa langue.",
    },
    {
      es: "Cuando el paciente agenda, n8n crea la oportunidad en el pipeline y la reunión de Zoom con la app Server-to-Server de su doctor, y guarda las referencias de la reunión y la cita en la oportunidad. Si el paciente no entra a la llamada, al minuto 10 recibe el link por WhatsApp y al 20 la opción de reagendar o cancelar, solo mientras el consultor sigue conectado. Al terminar, el aviso de Zoom cierra la reunión, mueve la oportunidad y le manda al paciente un mensaje de agradecimiento. Con la transcripción, una IA redacta el resumen de la consulta; cuando el consultor lo aprueba, el PDF llega al paciente por correo y por WhatsApp, con botones para confirmarlo o pedir cambios. Después, el consultor elige el protocolo en un campo con los SKU del catálogo de productos de Appolo y pone la etiqueta send_protocol: n8n crea la cotización con el precio del catálogo, la envía y mueve la oportunidad a Cotización Enviada. Las plantillas de WhatsApp existen en español y en inglés, y el sistema elige la versión según la etiqueta de idioma del contacto.",
      en: "When the patient books, n8n creates the opportunity in the pipeline and the Zoom meeting with their doctor's Server-to-Server app, and stores the meeting and appointment references on the opportunity. If the patient does not join the call, at minute 10 they get the link on WhatsApp and at minute 20 the option to reschedule or cancel, only while the consultant is still on the call. When it ends, Zoom's notice closes the meeting, moves the opportunity and sends the patient a thank-you message. From the transcript, an AI drafts the consultation summary; once the consultant approves it, the PDF reaches the patient by email and on WhatsApp, with buttons to confirm it or ask for changes. Then the consultant picks the protocol in a field holding the SKUs of Appolo's product catalog and adds the send_protocol tag: n8n creates the quote with the catalog price, sends it and moves the opportunity to Quote Sent. The WhatsApp templates exist in Spanish and English, and the system picks the version from the contact's language tag.",
      pt: "Quando o paciente agenda, o n8n cria a oportunidade no pipeline e a reunião do Zoom com o app Server-to-Server do seu médico, e guarda as referências da reunião e da consulta na oportunidade. Se o paciente não entra na chamada, no minuto 10 recebe o link pelo WhatsApp e no 20 a opção de reagendar ou cancelar, só enquanto o consultor continua conectado. Ao terminar, o aviso do Zoom encerra a reunião, move a oportunidade e envia ao paciente uma mensagem de agradecimento. Com a transcrição, uma IA redige o resumo da consulta; quando o consultor o aprova, o PDF chega ao paciente por e-mail e pelo WhatsApp, com botões para confirmá-lo ou pedir mudanças. Depois, o consultor escolhe o protocolo em um campo com os SKUs do catálogo de produtos do Appolo e coloca a etiqueta send_protocol: o n8n cria o orçamento com o preço do catálogo, envia-o e move a oportunidade para Orçamento Enviado. Os modelos de WhatsApp existem em espanhol e inglês, e o sistema escolhe a versão pela etiqueta de idioma do contato.",
      fr: "Quand le patient réserve, n8n crée l'opportunité dans le pipeline et la réunion Zoom avec l'application Server-to-Server de son médecin, et enregistre les références de la réunion et du rendez-vous sur l'opportunité. Si le patient ne rejoint pas l'appel, il reçoit le lien sur WhatsApp à la 10e minute et la possibilité de reporter ou d'annuler à la 20e, seulement tant que le consultant est encore connecté. À la fin, la notification de Zoom clôt la réunion, déplace l'opportunité et envoie au patient un message de remerciement. À partir de la transcription, une IA rédige le résumé de la consultation ; une fois validé par le consultant, le PDF arrive au patient par e-mail et sur WhatsApp, avec des boutons pour le confirmer ou demander des modifications. Ensuite, le consultant choisit le protocole dans un champ contenant les SKU du catalogue de produits d'Appolo et ajoute l'étiquette send_protocol : n8n crée le devis au prix du catalogue, l'envoie et déplace l'opportunité vers Devis envoyé. Les modèles WhatsApp existent en espagnol et en anglais, et le système choisit la version selon l'étiquette de langue du contact.",
    },
  ],
  role: {
    es: "Proyecto en equipo en Kobler y Asociados: junto con el director de TI ejecuté la arquitectura por capas que planeó la agencia, con los flujos en n8n, las automatizaciones en Appolo y las plantillas de WhatsApp.",
    en: "A team project at Kobler y Asociados: with the IT director, I carried out the layered architecture the agency planned, building the n8n flows, the Appolo automations and the WhatsApp templates.",
    pt: "Projeto em equipe na Kobler y Asociados: com o diretor de TI, executei a arquitetura em camadas planejada pela agência, com os fluxos no n8n, as automações no Appolo e os modelos de WhatsApp.",
    fr: "Projet d'équipe chez Kobler y Asociados : avec le directeur informatique, j'ai mis en œuvre l'architecture en couches prévue par l'agence : flux n8n, automatisations Appolo et modèles WhatsApp.",
  },
  results: [
    {
      es: "Cada paciente llega al consultor que habla su idioma, atiende su región y conoce su padecimiento.",
      en: "Each patient reaches the consultant who speaks their language, covers their region and handles their condition.",
      pt: "Cada paciente chega ao consultor que fala seu idioma, atende sua região e conhece sua condição.",
      fr: "Chaque patient arrive chez le consultant qui parle sa langue, couvre sa région et connaît sa condition.",
    },
    {
      es: "Al agendar, la oportunidad en el CRM y la reunión de Zoom con la app de su doctor se crean solas.",
      en: "When a patient books, the CRM opportunity and the Zoom meeting with their doctor's app are created on their own.",
      pt: "Ao agendar, a oportunidade no CRM e a reunião do Zoom com o app do médico são criadas sozinhas.",
      fr: "À la réservation, l'opportunité dans le CRM et la réunion Zoom avec l'app du médecin se créent seules.",
    },
    {
      es: "El consultor elige el protocolo y la cotización sale sola, sin enviarse dos veces.",
      en: "The consultant picks the protocol and the quote goes out on its own, never twice.",
      pt: "O consultor escolhe o protocolo e o orçamento sai sozinho, sem ser enviado duas vezes.",
      fr: "Le consultant choisit le protocole et le devis part tout seul, jamais en double.",
    },
  ],
  highlights: [
    {
      es: "Responde en el idioma del paciente, entiende notas de voz e imágenes y nunca da diagnósticos ni consejos médicos.",
      en: "It replies in the patient's language, understands voice notes and images, and never gives diagnoses or medical advice.",
      pt: "Responde no idioma do paciente, entende áudios e imagens e nunca dá diagnósticos nem conselhos médicos.",
      fr: "Il répond dans la langue du patient, comprend les notes vocales et les images, et ne donne jamais de diagnostic ni de conseil médical.",
    },
    {
      es: "Si el paciente no entra a la llamada, recibe el link al minuto 10 y la opción de reagendar al 20, mientras el consultor sigue conectado.",
      en: "If the patient does not join the call, they get the link at minute 10 and the option to reschedule at 20, while the consultant is still on.",
      pt: "Se o paciente não entra na chamada, recebe o link no minuto 10 e a opção de reagendar no 20, enquanto o consultor segue conectado.",
      fr: "Si le patient ne rejoint pas l'appel, il reçoit le lien à la 10e minute et l'option de reporter à la 20e, tant que le consultant est là.",
    },
    {
      es: "La IA reúne datos, pero el protocolo lo decide una persona: la cotización solo sale cuando el consultor la autoriza.",
      en: "The AI gathers the facts, but a person decides the protocol: the quote only goes out when the consultant approves it.",
      pt: "A IA reúne os dados, mas uma pessoa decide o protocolo: o orçamento só sai quando o consultor o autoriza.",
      fr: "L'IA recueille les informations, mais c'est une personne qui décide du protocole : le devis ne part que si le consultant l'autorise.",
    },
    {
      es: "Plantillas de WhatsApp en español y en inglés: el sistema elige la versión según el idioma del contacto.",
      en: "WhatsApp templates in Spanish and English: the system picks the version from the contact's language.",
      pt: "Modelos de WhatsApp em espanhol e inglês: o sistema escolhe a versão pelo idioma do contato.",
      fr: "Des modèles WhatsApp en espagnol et en anglais : le système choisit la version selon la langue du contact.",
    },
  ],
  stack: ["n8n", "OpenAI API"],
  integrations: ["WhatsApp", "Zoom", "GoHighLevel"],
  images: [
    {
      src: "/images/projects/neorgana-agent/cover-whatsapp-clinic.webp",
      alt: {
        es: "Ilustración: una mano sostiene un celular en la recepción de una clínica; en la pantalla, la conversación con el agente de WhatsApp de Neorgana, con el nombre de la consultora y su link difuminados.",
        en: "Illustration: a hand holds a phone in a clinic's reception; on screen, the conversation with Neorgana's WhatsApp agent, with the consultant's name and link blurred.",
        pt: "Ilustração: uma mão segura um celular na recepção de uma clínica; na tela, a conversa com o agente de WhatsApp da Neorgana, com o nome da consultora e o link desfocados.",
        fr: "Illustration : une main tient un téléphone dans l'accueil d'une clinique ; à l'écran, la conversation avec l'agent WhatsApp de Neorgana, le nom de la consultante et son lien floutés.",
      },
      width: 1600,
      height: 893,
      viewport: "desktop",
    },
    {
      src: "/images/projects/neorgana-agent/whatsapp-agent-chat.webp",
      alt: {
        es: "Captura de una conversación de prueba con el agente: el paciente pide información para su hijo, el agente pregunta padecimiento, región e idioma, y responde con la consultora adecuada y su calendario para agendar por Zoom (nombre y link difuminados).",
        en: "Screenshot of a test conversation with the agent: the patient asks for information for their son, the agent asks for the condition, region and language, and replies with the right consultant and her calendar to book on Zoom (name and link blurred).",
        pt: "Captura de uma conversa de teste com o agente: o paciente pede informações para o filho, o agente pergunta condição, região e idioma, e responde com a consultora certa e o calendário para agendar pelo Zoom (nome e link desfocados).",
        fr: "Capture d'une conversation de test avec l'agent : le patient demande des informations pour son fils, l'agent demande la condition, la région et la langue, puis répond avec la bonne consultante et son calendrier pour réserver sur Zoom (nom et lien floutés).",
      },
      width: 520,
      height: 804,
      viewport: "mobile",
    },
    {
      src: "/images/projects/neorgana-agent/whatsapp-appointment-confirmed-16x10.webp",
      alt: {
        es: "Mensajes automáticos de WhatsApp: la confirmación de la consulta virtual con fecha y hora, y el aviso de cancelación con la opción de agendar otro horario (links difuminados).",
        en: "Automatic WhatsApp messages: the virtual consultation's confirmation with date and time, and the cancellation notice with the option to book another time (links blurred).",
        pt: "Mensagens automáticas de WhatsApp: a confirmação da consulta virtual com data e hora, e o aviso de cancelamento com a opção de agendar outro horário (links desfocados).",
        fr: "Messages WhatsApp automatiques : la confirmation de la consultation virtuelle avec date et heure, et l'avis d'annulation avec la possibilité de réserver un autre créneau (liens floutés).",
      },
      width: 1200,
      height: 750,
      viewport: "desktop",
    },
    {
      src: "/images/projects/neorgana-agent/whatsapp-call-reminder-16x10.webp",
      alt: {
        es: "Recordatorio de WhatsApp cuando el paciente no ha entrado: «Your virtual consultation is starting now», con los botones Join meeting, Reschedule y Cancel Meeting.",
        en: "WhatsApp reminder when the patient has not joined: “Your virtual consultation is starting now”, with Join meeting, Reschedule and Cancel Meeting buttons.",
        pt: "Lembrete de WhatsApp quando o paciente não entrou: “Your virtual consultation is starting now”, com os botões Join meeting, Reschedule e Cancel Meeting.",
        fr: "Rappel WhatsApp quand le patient n'a pas rejoint l'appel : « Your virtual consultation is starting now », avec les boutons Join meeting, Reschedule et Cancel Meeting.",
      },
      width: 1200,
      height: 750,
      viewport: "desktop",
    },
    {
      src: "/images/projects/neorgana-agent/whatsapp-thank-you-16x10.webp",
      alt: {
        es: "Mensaje de agradecimiento tras la consulta: explica que el chat se compartirá con el equipo de Neorgana, da el WhatsApp y el correo de la clínica y tiene un botón Continue.",
        en: "Thank-you message after the consultation: it explains the chat will be shared with the Neorgana team, gives the clinic's WhatsApp and email, and has a Continue button.",
        pt: "Mensagem de agradecimento após a consulta: explica que o chat será compartilhado com a equipe da Neorgana, informa o WhatsApp e o e-mail da clínica e tem um botão Continue.",
        fr: "Message de remerciement après la consultation : il explique que le chat sera partagé avec l'équipe de Neorgana, donne le WhatsApp et l'e-mail de la clinique, avec un bouton Continue.",
      },
      width: 1200,
      height: 750,
      viewport: "desktop",
    },
    {
      src: "/images/projects/neorgana-agent/whatsapp-ai-summary-16x10.webp",
      alt: {
        es: "Resumen de la consulta por WhatsApp: un PDF de muestra, un mensaje que avisa que se preparó con ayuda de IA y los botones All correct y Needs changes.",
        en: "Consultation summary on WhatsApp: a sample PDF, a message noting it was prepared with the help of AI, and All correct and Needs changes buttons.",
        pt: "Resumo da consulta pelo WhatsApp: um PDF de exemplo, uma mensagem avisando que foi preparado com ajuda de IA e os botões All correct e Needs changes.",
        fr: "Résumé de la consultation sur WhatsApp : un PDF d'exemple, un message précisant qu'il a été préparé avec l'aide de l'IA, et les boutons All correct et Needs changes.",
      },
      width: 1200,
      height: 750,
      viewport: "desktop",
    },
    {
      src: "/images/projects/neorgana-agent/whatsapp-quote-16x10.webp",
      alt: {
        es: "Cotización por WhatsApp: el aviso de que la cotización personalizada del protocolo está lista, con el depósito del 50% para apartar fechas (link difuminado).",
        en: "Quote on WhatsApp: the notice that the personalized protocol estimate is ready, with the 50% deposit to secure dates (link blurred).",
        pt: "Orçamento pelo WhatsApp: o aviso de que o orçamento personalizado do protocolo está pronto, com o depósito de 50% para reservar as datas (link desfocado).",
        fr: "Devis sur WhatsApp : l'avis que le devis personnalisé du protocole est prêt, avec l'acompte de 50 % pour réserver les dates (lien flouté).",
      },
      width: 1200,
      height: 750,
      viewport: "desktop",
    },
    {
      src: "/images/projects/neorgana-agent/appolo-quote-lock-16x10.webp",
      alt: {
        es: "Conversación del contacto de prueba en Appolo: la oportunidad pasa de Citas Atendidas a Cotización Enviada, una nota interna avisa que no se creó una cotización repetida y debajo sale la cotización por WhatsApp (links difuminados).",
        en: "The test contact's conversation in Appolo: the opportunity moves from attended appointments to quote sent, an internal note says no duplicate quote was created, and below the quote goes out on WhatsApp (links blurred).",
        pt: "Conversa do contato de teste no Appolo: a oportunidade passa de consultas atendidas para orçamento enviado, uma nota interna avisa que não foi criado um orçamento repetido e abaixo sai o orçamento pelo WhatsApp (links desfocados).",
        fr: "Conversation du contact de test dans Appolo : l'opportunité passe des rendez-vous honorés au devis envoyé, une note interne indique qu'aucun devis en double n'a été créé, puis le devis part sur WhatsApp (liens floutés).",
      },
      width: 1200,
      height: 750,
      viewport: "desktop",
    },
  ],
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
        es: "El agente reúne padecimiento, idioma y región",
        en: "The agent gathers condition, language and region",
        pt: "O agente reúne condição, idioma e região",
        fr: "L'agent recueille condition, langue et région",
      },
      tool: "OpenAI",
    },
    {
      label: {
        es: "Envía el calendario del consultor adecuado",
        en: "Sends the right consultant's calendar",
        pt: "Envia o calendário do consultor certo",
        fr: "Envoie le calendrier du bon consultant",
      },
      tool: "GoHighLevel",
    },
    {
      label: {
        es: "Al agendar se crean la oportunidad y la reunión",
        en: "Booking creates the opportunity and the meeting",
        pt: "Ao agendar, criam-se a oportunidade e a reunião",
        fr: "La réservation crée l'opportunité et la réunion",
      },
      tool: "Zoom",
    },
    {
      label: {
        es: "Recordatorios si el paciente no entra a la llamada",
        en: "Reminders if the patient does not join the call",
        pt: "Lembretes se o paciente não entra na chamada",
        fr: "Rappels si le patient ne rejoint pas l'appel",
      },
      tool: "WhatsApp",
    },
    {
      label: {
        es: "El consultor elige el protocolo y sale la cotización",
        en: "The consultant picks the protocol and the quote goes out",
        pt: "O consultor escolhe o protocolo e sai o orçamento",
        fr: "Le consultant choisit le protocole et le devis part",
      },
      tool: "GoHighLevel",
    },
  ],
  decisions: [
    {
      es: "Una persona en cada decisión: la IA reúne datos, pero el protocolo lo elige el consultor y la cotización se dispara con una etiqueta explícita (send_protocol), no con el cambio de un campo. Si algo sale mal, el consultor corrige y la vuelve a mandar.",
      en: "A person at each decision: the AI gathers the facts, but the consultant picks the protocol and the quote is triggered by an explicit tag (send_protocol), not by a field change. If something goes wrong, the consultant fixes it and sends it again.",
      pt: "Uma pessoa em cada decisão: a IA reúne os dados, mas o consultor escolhe o protocolo e o orçamento é disparado por uma etiqueta explícita (send_protocol), não pela mudança de um campo. Se algo der errado, o consultor corrige e envia de novo.",
      fr: "Une personne à chaque décision : l'IA recueille les informations, mais le consultant choisit le protocole et le devis est déclenché par une étiquette explicite (send_protocol), pas par la modification d'un champ. En cas d'erreur, le consultant corrige et renvoie.",
    },
    {
      es: "Escala con datos, no con ramas: los protocolos son productos del catálogo identificados por SKU en un solo campo, en lugar de una etiqueta por protocolo, y los doctores y las sedes viven en tablas. Sumar un doctor es agregar una fila.",
      en: "It scales with data, not branches: protocols are catalog products identified by SKU in a single field, instead of one tag per protocol, and doctors and locations live in tables. Adding a doctor means adding a row.",
      pt: "Escala com dados, não com ramificações: os protocolos são produtos do catálogo identificados por SKU em um único campo, em vez de uma etiqueta por protocolo, e médicos e sedes ficam em tabelas. Incluir um médico é adicionar uma linha.",
      fr: "Il évolue par les données, pas par les branches : les protocoles sont des produits du catalogue identifiés par SKU dans un seul champ, au lieu d'une étiquette par protocole, et médecins et sites vivent dans des tables. Ajouter un médecin, c'est ajouter une ligne.",
    },
    {
      es: "Cada doctor tiene su propia app Server-to-Server de Zoom, y una tabla relaciona a cada doctor con la suya. El flujo pide el token del doctor que corresponde en cada reunión, sin una credencial fija por doctor en n8n.",
      en: "Each doctor has their own Zoom Server-to-Server app, and a table maps each doctor to theirs. The flow requests the right doctor's token for each meeting, with no fixed per-doctor credential in n8n.",
      pt: "Cada médico tem seu próprio app Server-to-Server do Zoom, e uma tabela relaciona cada médico ao seu. O fluxo pede o token do médico certo em cada reunião, sem uma credencial fixa por médico no n8n.",
      fr: "Chaque médecin a sa propre application Zoom Server-to-Server, et une table associe chaque médecin à la sienne. Le flux demande le jeton du bon médecin pour chaque réunion, sans identifiant fixe par médecin dans n8n.",
    },
    {
      es: "Lo que se puede automatizar sin IA se automatiza sin IA, y cada cambio se prueba con un contacto de prueba dedicado, sin tocar los flujos de producción.",
      en: "Whatever can be automated without AI is automated without AI, and every change is tested with a dedicated test contact, without touching the production flows.",
      pt: "O que pode ser automatizado sem IA é automatizado sem IA, e cada mudança é testada com um contato de teste dedicado, sem mexer nos fluxos de produção.",
      fr: "Ce qui peut être automatisé sans IA l'est sans IA, et chaque changement est testé avec un contact de test dédié, sans toucher aux flux de production.",
    },
  ],
  failureHandling: [
    {
      es: "Zoom reintenta sus avisos, así que una misma reunión se procesaba dos veces: el flujo descarta los avisos repetidos por el identificador de la reunión.",
      en: "Zoom retries its notices, so the same meeting was processed twice: the flow drops repeated notices by the meeting's identifier.",
      pt: "O Zoom reenvia seus avisos, então a mesma reunião era processada duas vezes: o fluxo descarta os avisos repetidos pelo identificador da reunião.",
      fr: "Zoom renvoie ses notifications, si bien qu'une même réunion était traitée deux fois : le flux écarte les notifications répétées grâce à l'identifiant de la réunion.",
    },
    {
      es: "Cuando alguien entraba antes que el anfitrión, quedaban sesiones cortas que parecían cancelaciones: ahora se valida una ventana de tiempo y la entrada antes del anfitrión se limita a 5 minutos.",
      en: "When someone joined before the host, short sessions were left that looked like cancellations: a time window is now checked and joining before the host is limited to 5 minutes.",
      pt: "Quando alguém entrava antes do anfitrião, ficavam sessões curtas que pareciam cancelamentos: agora se valida uma janela de tempo e a entrada antes do anfitrião é limitada a 5 minutos.",
      fr: "Quand quelqu'un rejoignait avant l'hôte, il restait de courtes sessions qui ressemblaient à des annulations : une fenêtre de temps est désormais vérifiée et l'accès avant l'hôte est limité à 5 minutes.",
    },
    {
      es: "Si una cita cambia de doctor, una rama de reparación actualiza la reunión de Zoom y los campos de la oportunidad sin tocar la rama que la crea.",
      en: "If an appointment moves to another doctor, a repair branch updates the Zoom meeting and the opportunity's fields without touching the branch that creates it.",
      pt: "Se uma consulta muda de médico, uma ramificação de reparo atualiza a reunião do Zoom e os campos da oportunidade sem mexer na ramificação que a cria.",
      fr: "Si un rendez-vous change de médecin, une branche de réparation met à jour la réunion Zoom et les champs de l'opportunité sans toucher à la branche qui la crée.",
    },
    {
      es: "Un candado evita mandar dos veces la misma cotización: si ya existe una vigente con el mismo producto y precio, el sistema no crea otra y le deja al consultor una nota con qué hacer.",
      en: "A lock prevents sending the same quote twice: if a current one with the same product and price exists, the system does not create another and leaves the consultant a note on what to do.",
      pt: "Uma trava evita enviar duas vezes o mesmo orçamento: se já existe um vigente com o mesmo produto e preço, o sistema não cria outro e deixa ao consultor uma nota com o que fazer.",
      fr: "Un verrou empêche d'envoyer deux fois le même devis : s'il en existe déjà un en cours avec le même produit et le même prix, le système n'en crée pas d'autre et laisse au consultant une note sur la marche à suivre.",
    },
  ],
  nextSteps: {
    es: "En desarrollo: al terminar la videollamada, una IA analiza la consulta y llena la sede y el número de células para el consultor (sin elegir el protocolo). Pendiente: el pago en línea con Stripe en dólares y euros, y una web app de logística del viaje (vuelos, estancia, chofer e itinerario).",
    en: "In development: when the video call ends, an AI analyses the consultation and fills in the location and the cell count for the consultant (without choosing the protocol). Pending: online payment with Stripe in dollars and euros, and a travel logistics web app (flights, stay, driver and itinerary).",
    pt: "Em desenvolvimento: ao terminar a videochamada, uma IA analisa a consulta e preenche a sede e o número de células para o consultor (sem escolher o protocolo). Pendente: o pagamento online com Stripe em dólares e euros, e um app web de logística da viagem (voos, hospedagem, motorista e itinerário).",
    fr: "En développement : à la fin de l'appel vidéo, une IA analyse la consultation et renseigne le site et le nombre de cellules pour le consultant (sans choisir le protocole). En attente : le paiement en ligne avec Stripe en dollars et en euros, et une application web de logistique du voyage (vols, séjour, chauffeur et itinéraire).",
  },
  lastUpdated: "2026-11-03",
};
