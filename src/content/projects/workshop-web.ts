import { sameInEveryLanguage } from "@/i18n/localize";
import type { Project } from "@/types/content";

/**
 * Live screen and host panel for the Appolo diagnostic workshop (Kobler y Asociados).
 * Source: the WorkShop-Web repository (README, code, tests and git history up to
 * 9 October 2026). The event backend (Supabase and the n8n flows) lives outside that
 * repository, so only the web app is described here. No credentials, keys, internal
 * URLs or participant data.
 */
export const workshopWeb: Project = {
  slug: "workshop-web",
  name: {
    es: "Diagnóstico en vivo para el workshop Appolo",
    en: "Live diagnostic for the Appolo workshop",
    pt: "Diagnóstico ao vivo para o workshop Appolo",
    fr: "Diagnostic en direct pour l'atelier Appolo",
  },
  client: "Kobler y Asociados",
  category: "kobler",
  context: sameInEveryLanguage("Kobler y Asociados"),
  period: { start: "2026-10" },
  kind: "web-app",
  isFeatured: true,
  teamSetup: "individual",
  summary: {
    es: "Web para un workshop presencial de diagnóstico empresarial: la sala responde por WhatsApp, una pantalla proyectada muestra las respuestas en vivo y el presentador avanza las preguntas desde un panel protegido con PIN.",
    en: "Web app for an in-person business diagnostic workshop: the audience answers on WhatsApp, a projected screen shows the answers live, and the presenter moves through the questions from a PIN-protected panel.",
    pt: "Aplicação web para um workshop presencial de diagnóstico empresarial: o público responde pelo WhatsApp, uma tela projetada mostra as respostas ao vivo e o apresentador avança as perguntas em um painel protegido por PIN.",
    fr: "Application web pour un atelier de diagnostic d'entreprise en présentiel : la salle répond sur WhatsApp, un écran projeté affiche les réponses en direct et l'animateur fait avancer les questions depuis un panneau protégé par un code PIN.",
  },
  problem: {
    es: "En el workshop presencial de Appolo, los asistentes responden por WhatsApp un diagnóstico empresarial de 20 preguntas en tres secciones (visión y liderazgo, orden operativo y automatización), más una pregunta abierta de cierre. Hacía falta proyectar a la sala lo que va respondiendo, en vivo, y que el presentador condujera el cuestionario desde la laptop o el celular sin que el navegador viera las claves del backend.",
    en: "At the in-person Appolo workshop, attendees answer a 20-question business diagnostic on WhatsApp, split into three sections (vision and leadership, operational order, and automation), plus a closing open question. The room needed to see its answers projected live, and the presenter needed to run the questionnaire from a laptop or phone without exposing the backend keys to the browser.",
    pt: "No workshop presencial da Appolo, os participantes respondem pelo WhatsApp a um diagnóstico empresarial de 20 perguntas em três seções (visão e liderança, organização operacional e automação), além de uma pergunta aberta de encerramento. Era preciso projetar para a sala o que ela vai respondendo, ao vivo, e permitir que o apresentador conduzisse o questionário pelo notebook ou pelo celular sem expor as chaves do backend ao navegador.",
    fr: "Lors de l'atelier Appolo en présentiel, les participants répondent sur WhatsApp à un diagnostic d'entreprise de 20 questions réparties en trois sections (vision et leadership, organisation opérationnelle et automatisation), suivies d'une question ouverte de clôture. Il fallait projeter en direct les réponses de la salle et permettre à l'animateur de piloter le questionnaire depuis un ordinateur portable ou un téléphone, sans exposer les clés du backend au navigateur.",
  },
  solution: {
    es: "La web tiene dos vistas. La pantalla en vivo, de solo lectura, muestra el QR para entrar por WhatsApp, la pregunta activa con sus barras, el promedio de cada sección al cerrarse, una nube de palabras para la pregunta abierta y los resultados de la sala. El panel del host, protegido con PIN, sirve para avanzar y reenviar preguntas, enviar los resultados, cerrar la sesión y abrir una nueva. La web lee el estado con una RPC de Supabase, escucha avisos por Supabase Realtime y manda las órdenes del host a n8n a través de funciones serverless en Vercel.",
    en: "The web app has two views. The live screen is read-only: it shows the QR code to join on WhatsApp, the active question with its bars, each section's average when the section closes, a word cloud for the open question, and the room's results. The host panel, protected by a PIN, is used to advance and resend questions, send the results, close the session and open a new one. The app reads the state through a Supabase RPC, listens for notices over Supabase Realtime, and sends the host's commands to n8n through serverless functions on Vercel.",
    pt: "A aplicação tem duas visões. A tela ao vivo, somente leitura, mostra o QR code para entrar pelo WhatsApp, a pergunta ativa com suas barras, a média de cada seção quando ela termina, uma nuvem de palavras para a pergunta aberta e os resultados da sala. O painel do host, protegido por PIN, serve para avançar e reenviar perguntas, enviar os resultados, encerrar a sessão e abrir uma nova. A aplicação lê o estado com uma RPC do Supabase, recebe avisos pelo Supabase Realtime e envia os comandos do host ao n8n por meio de funções serverless na Vercel.",
    fr: "L'application comporte deux vues. L'écran en direct, en lecture seule, affiche le QR code pour rejoindre la session sur WhatsApp, la question en cours avec ses barres, la moyenne de chaque section à sa clôture, un nuage de mots pour la question ouverte et les résultats de la salle. Le panneau de l'animateur, protégé par un code PIN, permet d'avancer et de renvoyer les questions, d'envoyer les résultats, de clôturer la session et d'en ouvrir une nouvelle. L'application lit l'état via une RPC Supabase, reçoit des notifications par Supabase Realtime et transmet les commandes de l'animateur à n8n via des fonctions serverless sur Vercel.",
  },
  role: {
    es: "Escribí el código de este repositorio: las dos vistas en React y TypeScript, las funciones serverless del host, la sincronización con Supabase, el modo demo y las pruebas con Vitest y Testing Library. El backend del evento (la base de datos en Supabase y los flujos de n8n del bot de WhatsApp) vive fuera del repositorio; la web solo lee su estado y le manda las órdenes del host.",
    en: "I wrote the code in this repository: both views in React and TypeScript, the host's serverless functions, the Supabase sync, the demo mode, and the tests with Vitest and Testing Library. The event backend (the Supabase database and the n8n flows behind the WhatsApp bot) lives outside the repository; the web app only reads its state and sends it the host's commands.",
    pt: "Escrevi o código deste repositório: as duas visões em React e TypeScript, as funções serverless do host, a sincronização com o Supabase, o modo demo e os testes com Vitest e Testing Library. O backend do evento (o banco de dados no Supabase e os fluxos do n8n do bot de WhatsApp) fica fora do repositório; a aplicação apenas lê o estado dele e envia os comandos do host.",
    fr: "J'ai écrit le code de ce dépôt : les deux vues en React et TypeScript, les fonctions serverless de l'animateur, la synchronisation avec Supabase, le mode démo et les tests avec Vitest et Testing Library. Le backend de l'événement (la base de données Supabase et les flux n8n du bot WhatsApp) se trouve en dehors du dépôt ; l'application se contente de lire son état et de lui transmettre les commandes de l'animateur.",
  },
  results: [
    {
      es: "El presentador conduce el evento desde la laptop o el celular, y la sala ve en vivo sus respuestas agregadas, sin nombres ni teléfonos.",
      en: "The presenter runs the event from a laptop or phone, and the room sees its aggregated answers live, with no names or phone numbers.",
      pt: "O apresentador conduz o evento pelo notebook ou pelo celular, e a sala vê ao vivo as respostas agregadas, sem nomes nem telefones.",
      fr: "L'animateur pilote l'événement depuis un ordinateur portable ou un téléphone, et la salle voit ses réponses agrégées en direct, sans noms ni numéros de téléphone.",
    },
  ],
  highlights: [
    {
      es: "Pantalla pensada para proyectarse: QR de ingreso por WhatsApp, barras en vivo de la pregunta activa, el promedio de cada sección durante unos segundos al cerrarse y, al final, los resultados de la sala: promedio por sección, etapa de las empresas, principales cuellos de botella, la forma más común de llevar la agenda y nube de palabras.",
      en: "A screen designed to be projected: a QR code to join on WhatsApp, live bars for the active question, each section's average for a few seconds when it closes and, at the end, the room's results: average per section, company stage, top bottlenecks, the most common way of managing schedules, and a word cloud.",
      pt: "Tela pensada para projeção: QR code de entrada pelo WhatsApp, barras ao vivo da pergunta ativa, a média de cada seção por alguns segundos quando ela termina e, no final, os resultados da sala: média por seção, estágio das empresas, principais gargalos, a forma mais comum de organizar a agenda e nuvem de palavras.",
      fr: "Un écran conçu pour la projection : QR code pour rejoindre la session sur WhatsApp, barres en direct pour la question en cours, moyenne de chaque section pendant quelques secondes à sa clôture et, à la fin, les résultats de la salle : moyenne par section, stade des entreprises, principaux goulets d'étranglement, façon la plus courante de gérer l'agenda et nuage de mots.",
    },
    {
      es: "Panel del host para laptop o celular: se entra con PIN, las órdenes se mandan de una en una (un doble clic en «Siguiente» envía una sola) y las delicadas piden confirmación explícita.",
      en: "Host panel for laptop or phone: it opens with a PIN, commands are sent one at a time (a double click on “Next” sends only one), and sensitive ones ask for explicit confirmation.",
      pt: "Painel do host para notebook ou celular: o acesso é por PIN, os comandos são enviados um de cada vez (um clique duplo em “Próxima” envia apenas um) e os comandos sensíveis pedem confirmação explícita.",
      fr: "Panneau de l'animateur pour ordinateur portable ou téléphone : l'accès se fait par code PIN, les commandes partent une par une (un double clic sur « Suivant » n'en envoie qu'une) et les commandes sensibles demandent une confirmation explicite.",
    },
    {
      es: "Sincronización en vivo: cada aviso de Supabase Realtime dispara una consulta del estado completo, con un máximo de dos consultas por segundo y un sondeo de respaldo cada 5 segundos (cada 3 si el canal se cae).",
      en: "Live sync: every Supabase Realtime notice triggers a query for the full state, with at most two queries per second and a fallback poll every 5 seconds (every 3 if the channel drops).",
      pt: "Sincronização ao vivo: cada aviso do Supabase Realtime dispara uma consulta do estado completo, com no máximo duas consultas por segundo e uma consulta periódica de reserva a cada 5 segundos (a cada 3 se o canal cair).",
      fr: "Synchronisation en direct : chaque notification Supabase Realtime déclenche une requête de l'état complet, avec au plus deux requêtes par seconde et une interrogation de secours toutes les 5 secondes (toutes les 3 si le canal tombe).",
    },
    {
      es: "Modo demo que simula un evento completo en bucle con datos inventados y pasa por el mismo sincronizador, para revisar las vistas y el diseño sin una sala real.",
      en: "A demo mode that loops through a full simulated event with made-up data and goes through the same sync logic, to review the views and the design without a real audience.",
      pt: "Modo demo que simula um evento completo em loop com dados fictícios e passa pelo mesmo sincronizador, para revisar as telas e o design sem uma sala real.",
      fr: "Un mode démo qui simule en boucle un événement complet avec des données fictives et passe par le même synchroniseur, pour vérifier les vues et le design sans vraie salle.",
    },
    {
      es: "Mientras está abierta, la pantalla evita que el equipo entre en reposo y esconde el cursor a los 3 segundos sin moverlo.",
      en: "While it is open, the screen keeps the computer from going to sleep and hides the cursor after 3 seconds without movement.",
      pt: "Enquanto está aberta, a tela impede que o computador entre em repouso e esconde o cursor após 3 segundos sem movimento.",
      fr: "Tant qu'il est ouvert, l'écran empêche l'ordinateur de se mettre en veille et masque le curseur après 3 secondes d'inactivité.",
    },
  ],
  stack: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "React Router",
    "Supabase",
    "Vercel",
    "Vitest",
  ],
  integrations: ["Supabase Realtime", "n8n", "WhatsApp"],
  images: [
    {
      src: "/images/projects/workshop-web/room-results.webp",
      alt: {
        es: "Resultados de la sala en la pantalla proyectada con datos de ejemplo: promedio por sección, etapa de las empresas, principales cuellos de botella, agenda predominante, porcentajes de leads en chats y de empresas listas para automatizar, y nube de palabras.",
        en: "Room results on the projected screen with sample data: average per section, company stage, top bottlenecks, most common scheduling method, the share with leads in chats and the share ready to automate, and a word cloud.",
        pt: "Resultados da sala na tela projetada com dados de exemplo: média por seção, estágio das empresas, principais gargalos, agenda predominante, percentuais de leads em chats e de empresas prontas para automatizar, e nuvem de palavras.",
        fr: "Résultats de la salle sur l'écran projeté avec des données d'exemple : moyenne par section, stade des entreprises, principaux goulots d'étranglement, agenda dominant, pourcentages de leads dans les chats et d'entreprises prêtes à automatiser, et nuage de mots.",
      },
      width: 1600,
      height: 900,
      viewport: "desktop",
    },
    {
      src: "/images/projects/workshop-web/live-question.webp",
      alt: {
        es: "Pregunta en vivo en la pantalla proyectada con datos de ejemplo: el texto de la pregunta, cuatro opciones con barras, porcentaje y número de personas, y el contador de quienes ya respondieron.",
        en: "Live question on the projected screen with sample data: the question text, four options with bars, percentages and head counts, and a counter of who has already answered.",
        pt: "Pergunta ao vivo na tela projetada com dados de exemplo: o texto da pergunta, quatro opções com barras, percentual e número de pessoas, e o contador de quem já respondeu.",
        fr: "Question en direct sur l'écran projeté avec des données d'exemple : l'énoncé de la question, quatre options avec barres, pourcentage et nombre de personnes, et le compteur de ceux qui ont déjà répondu.",
      },
      width: 1600,
      height: 900,
      viewport: "desktop",
    },
    {
      src: "/images/projects/workshop-web/lobby-join-qr.webp",
      alt: {
        es: "Lobby de la pantalla proyectada con datos de ejemplo: código QR para entrar por WhatsApp con un número de muestra, contador de participantes y radiografía del auditorio por posición, industria, tamaño de la empresa y años tomando decisiones.",
        en: "Lobby of the projected screen with sample data: a QR code to join on WhatsApp with a placeholder number, a participant counter, and an audience breakdown by role, industry, company size and years making decisions.",
        pt: "Lobby da tela projetada com dados de exemplo: código QR para entrar pelo WhatsApp com um número fictício, contador de participantes e raio-x do público por cargo, setor, porte da empresa e anos tomando decisões.",
        fr: "Accueil de l'écran projeté avec des données d'exemple : code QR pour rejoindre via WhatsApp avec un numéro fictif, compteur de participants et radiographie du public par poste, secteur, taille de l'entreprise et années de prise de décision.",
      },
      width: 1600,
      height: 900,
      viewport: "desktop",
    },
    {
      src: "/images/projects/workshop-web/closing-word-cloud.webp",
      alt: {
        es: "Pregunta de cierre en la pantalla proyectada con datos de ejemplo: «En una palabra, ¿qué necesita tu empresa para crecer?» y una nube de palabras con las respuestas de la sala.",
        en: "Closing question on the projected screen with sample data: “In one word, what does your company need to grow?” and a word cloud of the room's answers.",
        pt: "Pergunta de encerramento na tela projetada com dados de exemplo: “Em uma palavra, do que a sua empresa precisa para crescer?” e uma nuvem de palavras com as respostas da sala.",
        fr: "Question de clôture sur l'écran projeté avec des données d'exemple : « En un mot, de quoi votre entreprise a-t-elle besoin pour grandir ? » et un nuage de mots avec les réponses de la salle.",
      },
      width: 1600,
      height: 900,
      viewport: "desktop",
    },
  ],
  links: [],
  decisions: [
    {
      es: "El navegador nunca ve la clave secreta de Supabase, la clave de host de la sesión ni la URL de n8n: el panel habla con tres funciones serverless propias, que validan el PIN y leen de Supabase la sesión vigente en cada petición en lugar de guardarla en variables de entorno.",
      en: "The browser never sees the Supabase secret key, the session's host key or the n8n URL: the panel talks to three serverless functions of its own, which check the PIN and read the current session from Supabase on every request instead of keeping it in environment variables.",
      pt: "O navegador nunca vê a chave secreta do Supabase, a chave de host da sessão nem a URL do n8n: o painel conversa com três funções serverless próprias, que validam o PIN e leem do Supabase a sessão vigente a cada requisição, em vez de guardá-la em variáveis de ambiente.",
      fr: "Le navigateur ne voit jamais la clé secrète Supabase, la clé d'animateur de la session ni l'URL de n8n : le panneau s'adresse à trois fonctions serverless dédiées, qui vérifient le code PIN et lisent la session en cours dans Supabase à chaque requête au lieu de la stocker dans des variables d'environnement.",
    },
    {
      es: "El PIN se compara en tiempo constante, sobre su hash para que la duración tampoco dependa de su longitud, y cada intento fallido tarda unos 600 ms.",
      en: "The PIN is compared in constant time, on its hash so the duration does not depend on its length either, and each failed attempt takes about 600 ms.",
      pt: "O PIN é comparado em tempo constante, sobre o seu hash, para que a duração também não dependa do tamanho, e cada tentativa malsucedida leva cerca de 600 ms.",
      fr: "Le code PIN est comparé en temps constant, sur son hash pour que la durée ne dépende pas non plus de sa longueur, et chaque tentative échouée prend environ 600 ms.",
    },
    {
      es: "La pantalla solo recibe agregados anónimos: nunca nombres ni teléfonos de los asistentes.",
      en: "The screen only receives anonymous aggregates: never attendees' names or phone numbers.",
      pt: "A tela recebe apenas dados agregados e anônimos: nunca nomes nem telefones dos participantes.",
      fr: "L'écran ne reçoit que des données agrégées anonymes : jamais les noms ni les numéros de téléphone des participants.",
    },
    {
      es: "El cierre de cada sección se calcula solo con la respuesta de la RPC y la hora del servidor, así que la pantalla lo muestra bien aunque se recargue.",
      en: "Each section's closing is worked out only from the RPC response and the server's clock, so the screen shows it correctly even after a reload.",
      pt: "O encerramento de cada seção é calculado apenas com a resposta da RPC e o horário do servidor; assim, a tela o mostra corretamente mesmo depois de ser recarregada.",
      fr: "La clôture de chaque section est calculée uniquement à partir de la réponse de la RPC et de l'heure du serveur : l'écran l'affiche donc correctement même après un rechargement.",
    },
  ],
  failureHandling: [
    {
      es: "Si la red falla, la pantalla conserva lo último que mostró, enseña un aviso discreto de «Reconectando…» y se pone al día sola al volver la conexión. Una consulta que tarda más de 8 segundos se cancela y la siguiente la reintenta.",
      en: "If the network fails, the screen keeps the last thing it showed, displays a discreet “Reconnecting…” notice and catches up on its own when the connection returns. A query that takes longer than 8 seconds is cancelled and the next one retries it.",
      pt: "Se a rede falhar, a tela mantém o último conteúdo exibido, mostra um aviso discreto de “Reconectando…” e se atualiza sozinha quando a conexão volta. Uma consulta que demora mais de 8 segundos é cancelada e a seguinte tenta de novo.",
      fr: "Si le réseau tombe, l'écran conserve le dernier affichage, montre un discret « Reconnexion… » et se remet à jour tout seul au retour de la connexion. Une requête qui dépasse 8 secondes est annulée et la suivante la relance.",
    },
    {
      es: "Si una vista falla, aparece «Algo salió mal» y la página se recarga sola a los 10 segundos.",
      en: "If a view crashes, a “Something went wrong” message appears and the page reloads itself after 10 seconds.",
      pt: "Se uma tela falhar, aparece a mensagem “Algo deu errado” e a página se recarrega sozinha depois de 10 segundos.",
      fr: "Si une vue plante, le message « Un problème est survenu » s'affiche et la page se recharge d'elle-même au bout de 10 secondes.",
    },
    {
      es: "Si dos personas tienen el panel abierto, solo se crea una sesión nueva, y las órdenes del panel que se quedó mirando la anterior no se aplican: el servidor responde con la sesión vigente y el panel avisa y pasa a ella.",
      en: "If two people have the panel open, only one new session is created, and commands from the panel still looking at the old one are not applied: the server replies with the current session, and the panel warns and switches to it.",
      pt: "Se duas pessoas estiverem com o painel aberto, só uma sessão nova é criada, e os comandos do painel que ficou olhando a anterior não são aplicados: o servidor responde com a sessão vigente, e o painel avisa e passa para ela.",
      fr: "Si deux personnes ont le panneau ouvert, une seule nouvelle session est créée, et les commandes du panneau resté sur l'ancienne ne sont pas appliquées : le serveur renvoie la session en cours, et le panneau prévient puis bascule dessus.",
    },
    {
      es: "Reintentar repite la última orden tal cual; al avanzar, la orden lleva la pregunta de la que parte, así que un reintento no se salta preguntas.",
      en: "Retrying repeats the last command exactly; when advancing, the command carries the question it starts from, so a retry never skips a question.",
      pt: "Tentar de novo repete o último comando exatamente igual; ao avançar, o comando leva a pergunta de onde parte, então uma nova tentativa não pula perguntas.",
      fr: "Réessayer répète la dernière commande à l'identique ; pour avancer, la commande indique la question de départ, si bien qu'une nouvelle tentative ne saute jamais de question.",
    },
  ],
  lastUpdated: "2026-10-09",
};
