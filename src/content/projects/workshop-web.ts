import { sameInEveryLanguage } from "@/i18n/localize";
import type { Project } from "@/types/content";

/**
 * The Appolo diagnostic workshop ("Diagnóstico Appolo"), built by Kevin alone while he
 * worked at Kobler y Asociados (credited "Hecho en Kobler y Asociados").
 * Sources: the WorkShop-Web repository (README, code, tests, the versioned Supabase schema
 * and git history up to 22 October 2026, the APPOLO-2026 script) and Kevin's answers
 * (12 October 2026): he built the whole system on his own with Claude Code, the web app and
 * also the event backend (the Supabase database and the n8n flows of the WhatsApp bot); the
 * n8n flows live outside that repository and are described only as far as the repository
 * shows them. In production. Screenshots taken on 2 November 2026 from a local run: the
 * projected screens from the app's own demo mode (simulated data, labelled as such) and the
 * host panel against a local Supabase with a fictional room. No credentials, keys, internal
 * URLs or participant data.
 * The event and its outcome come from Kevin (3 November 2026): Raúl Salas, owner of Kobler,
 * used it at the Yucatán Tech Week (Enterwork, 23 October 2026, 33 attendees, the companies
 * named in `event`) to present Appolo; the answers were saved as GoHighLevel custom fields
 * on each contact; each attendee got their diagnostic, a 20% discount on their first Appolo
 * implementation and a link to book a meeting with Raúl; and Kobler now uses it to diagnose
 * new clients, not only at events. The team photo is Kobler's and is credited to it.
 */
export const workshopWeb: Project = {
  slug: "workshop-web",
  name: {
    es: "Diagnóstico en vivo para el workshop Appolo",
    en: "Live diagnostic for the Appolo workshop",
    pt: "Diagnóstico ao vivo para o workshop Appolo",
    fr: "Diagnostic en direct pour l'atelier Appolo",
  },
  category: "kobler",
  context: sameInEveryLanguage("Kobler y Asociados"),
  status: "in-production",
  period: { start: "2026-10" },
  kind: "web-app",
  isFeatured: true,
  teamSetup: "individual",
  tagline: {
    es: "La sala responde un diagnóstico por WhatsApp y ve sus resultados en vivo en pantalla.",
    en: "The audience answers a diagnostic on WhatsApp and sees the results live on screen.",
    pt: "O público responde a um diagnóstico pelo WhatsApp e vê os resultados ao vivo na tela.",
    fr: "Le public répond à un diagnostic sur WhatsApp et voit les résultats en direct à l'écran.",
  },
  summary: {
    es: "Sistema con el que Kobler presentó Appolo en la Yucatán Tech Week: la sala responde un diagnóstico por WhatsApp y la pantalla proyecta sus respuestas en vivo.",
    en: "The system Kobler used to present Appolo at the Yucatán Tech Week: the audience answers a diagnostic on WhatsApp and the projected screen shows their answers live.",
    pt: "Sistema com o qual a Kobler apresentou o Appolo na Yucatán Tech Week: o público responde a um diagnóstico pelo WhatsApp e a tela projetada mostra as respostas ao vivo.",
    fr: "Le système avec lequel Kobler a présenté Appolo à la Yucatán Tech Week : la salle répond à un diagnostic sur WhatsApp et l'écran projeté affiche ses réponses en direct.",
  },
  problem: {
    es: "Raúl Salas, dueño de Kobler, quería mostrar Appolo con un workshop entre presentación y concurso: láminas, las preguntas del diagnóstico en pantalla y las respuestas de la sala en vivo.",
    en: "Raúl Salas, Kobler's owner, wanted to show Appolo in a workshop that mixed a presentation with a live quiz: slides, the diagnostic's questions on screen and the room's answers live.",
    pt: "Raúl Salas, dono da Kobler, queria mostrar o Appolo com um workshop entre apresentação e quiz: slides, as perguntas do diagnóstico na tela e as respostas da sala ao vivo.",
    fr: "Raúl Salas, dirigeant de Kobler, voulait montrer Appolo dans un atelier mêlant présentation et quiz : diapositives, questions du diagnostic à l'écran et réponses de la salle en direct.",
  },
  solution: {
    es: "Un agente de IA en n8n manda cada pregunta por WhatsApp y entiende la respuesta, sea una letra o un texto libre; Supabase calcula el diagnóstico y una web en React proyecta todo en vivo.",
    en: "An AI agent in n8n sends each question on WhatsApp and understands the answer, a letter or free text; Supabase works out the diagnostic and a React web app projects it all live.",
    pt: "Um agente de IA no n8n envia cada pergunta pelo WhatsApp e entende a resposta, seja uma letra ou um texto livre; o Supabase calcula o diagnóstico e uma aplicação React projeta tudo ao vivo.",
    fr: "Un agent d'IA dans n8n envoie chaque question sur WhatsApp et comprend la réponse, une lettre ou un texte libre ; Supabase calcule le diagnostic et une application React projette tout en direct.",
  },
  howItWorks: [
    {
      es: "El sistema une tres piezas: el bot de WhatsApp en n8n, la base de datos en Supabase, que también calcula el diagnóstico de cada persona, y una web con dos vistas. La pantalla en vivo, de solo lectura, sigue un guion: láminas y frases de la presentación, el QR para entrar con la radiografía del auditorio, cada pregunta con sus barras, el promedio de cada dimensión con su semáforo de madurez y, al final, los resultados de la sala. El panel del host recorre ese guion en orden: un toque proyecta la pantalla siguiente y, si es una pregunta, la abre por WhatsApp en ese mismo toque. Desde ahí también se reenvía, se envían los resultados, se modera la nube de palabras y se cierra o se abre una sesión. La web lee el estado con una RPC de Supabase, escucha avisos por Supabase Realtime y manda las órdenes del host a través de funciones serverless en Vercel.",
      en: "The system joins three pieces: the WhatsApp bot in n8n, the Supabase database, which also works out each person's diagnostic, and a web app with two views. The live screen is read-only and follows a script: the presentation's slides and quotes, the QR code to join with a snapshot of the audience, each question with its bars, each dimension's average with its maturity traffic light and, at the end, the room's results. The host panel walks through that script in order: one tap projects the next screen and, if it is a question, sends it on WhatsApp in that same tap. It is also used to resend, send the results, moderate the word cloud, and close or open a session. The app reads the state through a Supabase RPC, listens for notices over Supabase Realtime, and sends the host's commands through serverless functions on Vercel.",
      pt: "O sistema une três peças: o bot de WhatsApp no n8n, o banco de dados no Supabase, que também calcula o diagnóstico de cada pessoa, e uma aplicação web com duas visões. A tela ao vivo, somente leitura, segue um roteiro: slides e frases da apresentação, o QR code de entrada com o raio-x do público, cada pergunta com suas barras, a média de cada dimensão com o seu semáforo de maturidade e, no final, os resultados da sala. O painel do host percorre esse roteiro em ordem: um toque projeta a tela seguinte e, se for uma pergunta, envia-a pelo WhatsApp nesse mesmo toque. Por ali também se reenvia, se enviam os resultados, se modera a nuvem de palavras e se encerra ou se abre uma sessão. A aplicação lê o estado com uma RPC do Supabase, recebe avisos pelo Supabase Realtime e envia os comandos do host por meio de funções serverless na Vercel.",
      fr: "Le système réunit trois éléments : le bot WhatsApp dans n8n, la base de données Supabase, qui calcule aussi le diagnostic de chaque personne, et une application web à deux vues. L'écran en direct, en lecture seule, suit un déroulé : les diapositives et citations de la présentation, le QR code d'entrée avec la radiographie du public, chaque question avec ses barres, la moyenne de chaque dimension avec son feu de maturité et, à la fin, les résultats de la salle. Le panneau de l'animateur parcourt ce déroulé dans l'ordre : une touche projette l'écran suivant et, s'il s'agit d'une question, l'envoie sur WhatsApp dans la même action. Il sert aussi à renvoyer, envoyer les résultats, modérer le nuage de mots, et clôturer ou ouvrir une session. L'application lit l'état via une RPC Supabase, reçoit des notifications par Supabase Realtime et transmet les commandes de l'animateur via des fonctions serverless sur Vercel.",
    },
    {
      es: "Cuando el host abre una pregunta, el agente de IA se la manda a cada asistente por WhatsApp. Cada quien puede contestar con la letra de una opción o con sus propias palabras: el agente interpreta la respuesta, la compara con las opciones, registra la más adecuada y la pantalla la muestra en ese momento. Como el sistema está conectado con GoHighLevel, las respuestas quedan en campos personalizados del contacto de cada asistente; al final, cada quien recibe su diagnóstico, el descuento y el enlace para agendar con Raúl Salas.",
      en: "When the host opens a question, the AI agent sends it to each attendee on WhatsApp. People can reply with an option's letter or in their own words: the agent interprets the answer, compares it with the options, records the best match and the screen shows it right away. Because the system is connected to GoHighLevel, the answers are saved in custom fields on each attendee's contact; at the end, everyone gets their diagnostic, the discount and the link to book a meeting with Raúl Salas.",
      pt: "Quando o host abre uma pergunta, o agente de IA a envia a cada participante pelo WhatsApp. Cada um pode responder com a letra de uma opção ou com as próprias palavras: o agente interpreta a resposta, compara-a com as opções, registra a mais adequada e a tela a mostra na hora. Como o sistema está conectado ao GoHighLevel, as respostas ficam em campos personalizados do contato de cada participante; no final, cada um recebe o seu diagnóstico, o desconto e o link para agendar com Raúl Salas.",
      fr: "Quand l'animateur ouvre une question, l'agent d'IA l'envoie à chaque participant sur WhatsApp. Chacun peut répondre par la lettre d'une option ou avec ses propres mots : l'agent interprète la réponse, la compare aux options, enregistre la plus proche et l'écran l'affiche aussitôt. Comme le système est connecté à GoHighLevel, les réponses sont enregistrées dans des champs personnalisés du contact de chaque participant ; à la fin, chacun reçoit son diagnostic, la remise et le lien pour prendre rendez-vous avec Raúl Salas.",
    },
  ],
  role: {
    es: "Lo construí solo, de punta a punta, con Claude Code: la web en React y TypeScript, la base de datos en Supabase, los flujos de n8n del bot y las funciones serverless en Vercel, con pruebas en Vitest.",
    en: "I built it on my own, end to end, with Claude Code: the React and TypeScript web app, the Supabase database, the n8n flows behind the bot and the serverless functions on Vercel, with tests in Vitest.",
    pt: "Construí sozinho, de ponta a ponta, com o Claude Code: a aplicação web em React e TypeScript, o banco de dados no Supabase, os fluxos do n8n do bot e as funções serverless na Vercel, com testes no Vitest.",
    fr: "Je l'ai construit seul, de bout en bout, avec Claude Code : l'application web React et TypeScript, la base Supabase, les flux n8n du bot et les fonctions serverless sur Vercel, avec des tests Vitest.",
  },
  results: [
    {
      es: "33 asistentes lo usaron en vivo en la Yucatán Tech Week, el 23 de octubre de 2026.",
      en: "33 attendees used it live at the Yucatán Tech Week, on 23 October 2026.",
      pt: "33 participantes o usaram ao vivo na Yucatán Tech Week, em 23 de outubro de 2026.",
      fr: "33 participants l'ont utilisé en direct à la Yucatán Tech Week, le 23 octobre 2026.",
    },
    {
      es: "Cada asistente recibió su diagnóstico, un 20% de descuento en su primera implementación de Appolo y un enlace para agendar.",
      en: "Each attendee got their diagnostic, 20% off their first Appolo implementation and a link to book a meeting.",
      pt: "Cada participante recebeu o seu diagnóstico, 20% de desconto na primeira implementação do Appolo e um link para agendar.",
      fr: "Chaque participant a reçu son diagnostic, 20 % de remise sur sa première mise en place d'Appolo et un lien pour prendre rendez-vous.",
    },
    {
      es: "Hoy Kobler lo usa para diagnosticar a los clientes nuevos que llegan, no solo en eventos.",
      en: "Kobler now uses it to diagnose every new client that comes in, not only at events.",
      pt: "Hoje a Kobler o usa para diagnosticar os novos clientes que chegam, não só em eventos.",
      fr: "Kobler l'utilise désormais pour diagnostiquer chaque nouveau client, pas seulement lors d'événements.",
    },
  ],
  highlights: [
    {
      es: "Pantalla para proyectar que sigue el guion: preguntas con barras en vivo, semáforo de madurez por dimensión y los resultados de la sala.",
      en: "A projection screen that follows the script: questions with live bars, a maturity traffic light per dimension and the room's results.",
      pt: "Tela para projeção que segue o roteiro: perguntas com barras ao vivo, semáforo de maturidade por dimensão e os resultados da sala.",
      fr: "Un écran de projection qui suit le déroulé : questions avec barres en direct, feu de maturité par dimension et résultats de la salle.",
    },
    {
      es: "Panel del presentador pensado para el celular: un toque proyecta la siguiente pantalla y, si es una pregunta, la envía por WhatsApp.",
      en: "A presenter panel built for the phone: one tap projects the next screen and, if it is a question, sends it on WhatsApp.",
      pt: "Painel do apresentador pensado para o celular: um toque projeta a tela seguinte e, se for uma pergunta, envia-a pelo WhatsApp.",
      fr: "Un panneau d'animateur pensé pour le téléphone : une touche projette l'écran suivant et, s'il s'agit d'une question, l'envoie sur WhatsApp.",
    },
    {
      es: "Cada quien responde a su ritmo: quien se atrasa o llega tarde se pone al día solo.",
      en: "Everyone answers at their own pace: anyone who falls behind or arrives late catches up on their own.",
      pt: "Cada um responde no próprio ritmo: quem se atrasa ou chega tarde se atualiza sozinho.",
      fr: "Chacun répond à son rythme : ceux qui prennent du retard ou arrivent tard rattrapent la salle tout seuls.",
    },
    {
      es: "Conectado con GoHighLevel: las respuestas de cada asistente quedan guardadas en campos personalizados de su contacto.",
      en: "Connected to GoHighLevel: each attendee's answers are saved in custom fields on their contact.",
      pt: "Conectado ao GoHighLevel: as respostas de cada participante ficam salvas em campos personalizados do seu contato.",
      fr: "Connecté à GoHighLevel : les réponses de chaque participant sont enregistrées dans des champs personnalisés de son contact.",
    },
  ],
  stack: [
    "React",
    "TypeScript",
    "Supabase",
    "Vercel",
    "Tailwind CSS",
    "Vite",
    "React Router",
    "Vitest",
    "Claude Code",
  ],
  integrations: ["Supabase Realtime", "n8n", "WhatsApp", "GoHighLevel"],
  images: [
    {
      src: "/images/projects/workshop-web/room-results-maturity.webp",
      alt: {
        es: "Resultados de la sala en la pantalla proyectada con datos de ejemplo: madurez global y por dimensión con su semáforo, porcentajes con prospectos sin centralizar, con procesos definidos, listos para automatizar y que invierten en pauta digital, etapa de las empresas, principales cuellos de botella, principales retos y nube de palabras.",
        en: "Room results on the projected screen with sample data: overall and per-dimension maturity with its traffic light, the shares with uncentralized leads, with defined processes, ready to automate and investing in digital ads, company stage, top bottlenecks, top challenges, and a word cloud.",
        pt: "Resultados da sala na tela projetada com dados de exemplo: maturidade global e por dimensão com o seu semáforo, percentuais com leads não centralizados, com processos definidos, prontos para automatizar e que investem em anúncios digitais, estágio das empresas, principais gargalos, principais desafios e nuvem de palavras.",
        fr: "Résultats de la salle sur l'écran projeté avec des données d'exemple : maturité globale et par dimension avec son feu, pourcentages avec des prospects non centralisés, avec des processus définis, prêts à automatiser et qui investissent dans la publicité digitale, stade des entreprises, principaux goulets d'étranglement, principaux défis et nuage de mots.",
      },
      width: 1600,
      height: 900,
      viewport: "desktop",
    },
    {
      src: "/images/projects/workshop-web/live-question-technologies.webp",
      alt: {
        es: "Pregunta en vivo en la pantalla proyectada con datos de ejemplo: «Pregunta 7 de 10 · Automatización y servicio», «¿Qué tecnologías utilizas en tu negocio actualmente?», cinco opciones con barras, porcentaje y número de personas, la más elegida resaltada y el contador de quienes ya respondieron.",
        en: "Live question on the projected screen with sample data: “Question 7 of 10 · Automation and service”, “What technologies does your business use today?”, five options with bars, percentages and head counts, the most chosen one highlighted, and a counter of who has already answered.",
        pt: "Pergunta ao vivo na tela projetada com dados de exemplo: “Pergunta 7 de 10 · Automação e atendimento”, “Quais tecnologias você usa no seu negócio atualmente?”, cinco opções com barras, percentual e número de pessoas, a mais escolhida em destaque e o contador de quem já respondeu.",
        fr: "Question en direct sur l'écran projeté avec des données d'exemple : « Question 7 sur 10 · Automatisation et service », « Quelles technologies utilisez-vous aujourd'hui dans votre entreprise ? », cinq options avec barres, pourcentage et nombre de personnes, la plus choisie mise en avant et le compteur de ceux qui ont déjà répondu.",
      },
      width: 1600,
      height: 900,
      viewport: "desktop",
    },
    {
      src: "/images/projects/workshop-web/lobby-audience-pie.webp",
      alt: {
        es: "Sala de espera de la pantalla proyectada con datos de ejemplo: código QR para entrar por WhatsApp con un número de muestra, contador de participantes y radiografía del auditorio en gráficas de pastel por posición, industria, tamaño de la empresa, pauta digital al mes, género y edad.",
        en: "Waiting room on the projected screen with sample data: a QR code to join on WhatsApp with a placeholder number, a participant counter, and an audience snapshot in pie charts by role, industry, company size, monthly digital ad spend, gender and age.",
        pt: "Sala de espera da tela projetada com dados de exemplo: código QR para entrar pelo WhatsApp com um número fictício, contador de participantes e raio-x do público em gráficos de pizza por cargo, setor, porte da empresa, investimento mensal em anúncios digitais, gênero e idade.",
        fr: "Salle d'attente de l'écran projeté avec des données d'exemple : code QR pour rejoindre via WhatsApp avec un numéro fictif, compteur de participants et radiographie du public en camemberts par poste, secteur, taille de l'entreprise, budget mensuel de publicité digitale, genre et âge.",
      },
      width: 1600,
      height: 900,
      viewport: "desktop",
    },
    {
      src: "/images/projects/workshop-web/host-panel-laptop.webp",
      alt: {
        es: "Panel del host en una laptop con datos de ejemplo: el índice del guion por tramos, la pregunta de cierre en la sala con cuántos respondieron y cuántos van a su ritmo, las notas del presentador, la moderación de la nube con un botón «Ocultar» por palabra, y a la derecha «Siguiente pantalla», «Anterior» y más acciones.",
        en: "Host panel on a laptop with sample data: the script's index by part, the closing question on screen with how many have answered and how many are going at their own pace, the presenter's notes, word cloud moderation with a “Hide” button per word, and on the right “Next screen”, “Previous” and more actions.",
        pt: "Painel do host em um notebook com dados de exemplo: o índice do roteiro por partes, a pergunta de encerramento na sala com quantos já responderam e quantos seguem no próprio ritmo, as notas do apresentador, a moderação da nuvem com um botão “Ocultar” por palavra e, à direita, “Próxima tela”, “Anterior” e mais ações.",
        fr: "Panneau de l'animateur sur un ordinateur portable avec des données d'exemple : l'index du déroulé par partie, la question de clôture à l'écran avec le nombre de réponses et de participants qui avancent à leur rythme, les notes de l'animateur, la modération du nuage avec un bouton « Masquer » par mot, et à droite « Écran suivant », « Précédent » et d'autres actions.",
      },
      width: 1600,
      height: 900,
      viewport: "desktop",
    },
    {
      src: "/images/projects/workshop-web/section-average-traffic-light.webp",
      alt: {
        es: "Cierre de una dimensión en la pantalla proyectada con datos de ejemplo: «Sección completada · Orden operativo y comercial», el promedio de la sala en la escala del 1 al 5 con su barra, el semáforo «Estructurando» y el número de respuestas.",
        en: "End of a dimension on the projected screen with sample data: “Section completed · Operational and sales order”, the room's average on the 1-to-5 scale with its bar, the “Structuring” traffic light, and the number of answers.",
        pt: "Encerramento de uma dimensão na tela projetada com dados de exemplo: “Seção concluída · Organização operacional e comercial”, a média da sala na escala de 1 a 5 com a sua barra, o semáforo “Estruturando” e o número de respostas.",
        fr: "Fin d'une dimension sur l'écran projeté avec des données d'exemple : « Section terminée · Organisation opérationnelle et commerciale », la moyenne de la salle sur l'échelle de 1 à 5 avec sa barre, le feu « En structuration » et le nombre de réponses.",
      },
      width: 1600,
      height: 900,
      viewport: "desktop",
    },
  ],
  event: {
    description: {
      es: "Se usó en la Yucatán Tech Week, en Enterwork, el 23 de octubre de 2026: 33 asistentes, entre ellos Motosureste Suzuki, Grupo Fiat, el Gobierno del Estado de Yucatán, Noox, Anáhuac y ViaMX.",
      en: "It was used at the Yucatán Tech Week, at Enterwork, on 23 October 2026: 33 attendees, among them Motosureste Suzuki, Grupo Fiat, the Government of the State of Yucatán, Noox, Anáhuac and ViaMX.",
      pt: "Foi usado na Yucatán Tech Week, no Enterwork, em 23 de outubro de 2026: 33 participantes, entre eles Motosureste Suzuki, Grupo Fiat, o Governo do Estado de Yucatán, Noox, Anáhuac e ViaMX.",
      fr: "Il a servi à la Yucatán Tech Week, à Enterwork, le 23 octobre 2026 : 33 participants, dont Motosureste Suzuki, Grupo Fiat, le gouvernement de l'État du Yucatán, Noox, Anáhuac et ViaMX.",
    },
    photo: {
      src: "/images/projects/workshop-web/team-yucatan-tech-week.webp",
      alt: {
        es: "El equipo de Kobler y Asociados, siete personas con camisas negras y blancas, de pie en una oficina con plantas colgantes; al centro, Raúl Salas sostiene un letrero con el logotipo de Kobler.",
        en: "The Kobler y Asociados team, seven people in black and white shirts, standing in an office with hanging plants; in the middle, Raúl Salas holds a sign with the Kobler logo.",
        pt: "A equipe da Kobler y Asociados, sete pessoas de camisas pretas e brancas, em pé em um escritório com plantas penduradas; no centro, Raúl Salas segura uma placa com o logotipo da Kobler.",
        fr: "L'équipe de Kobler y Asociados, sept personnes en chemises noires et blanches, debout dans un bureau aux plantes suspendues ; au centre, Raúl Salas tient un panneau avec le logo de Kobler.",
      },
      width: 1600,
      height: 1062,
      credit: "Kobler y Asociados",
    },
  },
  links: [],
  decisions: [
    {
      es: "Sincronización en vivo: cada aviso de Supabase Realtime dispara una consulta del estado completo, con un máximo de dos consultas por segundo y un sondeo de respaldo cada 5 segundos (cada 3 si el canal se cae).",
      en: "Live sync: every Supabase Realtime notice triggers a query for the full state, with at most two queries per second and a fallback poll every 5 seconds (every 3 if the channel drops).",
      pt: "Sincronização ao vivo: cada aviso do Supabase Realtime dispara uma consulta do estado completo, com no máximo duas consultas por segundo e uma consulta periódica de reserva a cada 5 segundos (a cada 3 se o canal cair).",
      fr: "Synchronisation en direct : chaque notification Supabase Realtime déclenche une requête de l'état complet, avec au plus deux requêtes par seconde et une interrogation de secours toutes les 5 secondes (toutes les 3 si le canal tombe).",
    },
    {
      es: "El navegador nunca ve la clave secreta de Supabase, la clave de host de la sesión ni la URL de n8n: el panel habla con cinco funciones serverless propias, que validan la contraseña y leen de Supabase la sesión vigente en cada petición en lugar de guardarla en variables de entorno.",
      en: "The browser never sees the Supabase secret key, the session's host key or the n8n URL: the panel talks to five serverless functions of its own, which check the password and read the current session from Supabase on every request instead of keeping it in environment variables.",
      pt: "O navegador nunca vê a chave secreta do Supabase, a chave de host da sessão nem a URL do n8n: o painel conversa com cinco funções serverless próprias, que validam a senha e leem do Supabase a sessão vigente a cada requisição, em vez de guardá-la em variáveis de ambiente.",
      fr: "Le navigateur ne voit jamais la clé secrète Supabase, la clé d'animateur de la session ni l'URL de n8n : le panneau s'adresse à cinq fonctions serverless dédiées, qui vérifient le mot de passe et lisent la session en cours dans Supabase à chaque requête au lieu de la stocker dans des variables d'environnement.",
    },
    {
      es: "La contraseña del panel se compara en tiempo constante, sobre su hash para que la duración tampoco dependa de su longitud, y cada intento fallido tarda unos 600 ms.",
      en: "The panel's password is compared in constant time, on its hash so the duration does not depend on its length either, and each failed attempt takes about 600 ms.",
      pt: "A senha do painel é comparada em tempo constante, sobre o seu hash, para que a duração também não dependa do tamanho, e cada tentativa malsucedida leva cerca de 600 ms.",
      fr: "Le mot de passe du panneau est comparé en temps constant, sur son hash pour que la durée ne dépende pas non plus de sa longueur, et chaque tentative échouée prend environ 600 ms.",
    },
    {
      es: "Las tablas tienen RLS sin políticas: la web solo lee con una RPC que devuelve agregados anónimos, así que la pantalla nunca recibe nombres ni teléfonos de los asistentes.",
      en: "The tables have RLS with no policies: the app only reads through an RPC that returns anonymous aggregates, so the screen never receives attendees' names or phone numbers.",
      pt: "As tabelas têm RLS sem políticas: a aplicação só lê por uma RPC que devolve dados agregados e anônimos, então a tela nunca recebe nomes nem telefones dos participantes.",
      fr: "Les tables ont la RLS activée sans politique : l'application ne lit qu'à travers une RPC qui renvoie des agrégats anonymes, si bien que l'écran ne reçoit jamais les noms ni les numéros de téléphone des participants.",
    },
    {
      es: "La base manda en lo que se envía por WhatsApp (las preguntas, su orden, sus textos y sus opciones) y el guion web solo en lo que se proyecta: se ancla a cada pregunta por su id sin repetir sus textos, y una revisión avisa si el guion y la base no cuadran.",
      en: "The database owns what is sent on WhatsApp (the questions, their order, their wording and their options) and the web script owns only what is projected: it anchors to each question by its id without repeating its text, and a check warns when the script and the database do not match.",
      pt: "O banco de dados manda no que é enviado pelo WhatsApp (as perguntas, a ordem, os textos e as opções) e o roteiro web só no que é projetado: ele se ancora em cada pergunta pelo id sem repetir os textos, e uma verificação avisa quando o roteiro e o banco não batem.",
      fr: "La base de données décide de ce qui part sur WhatsApp (les questions, leur ordre, leurs énoncés et leurs options) et le déroulé web seulement de ce qui est projeté : il s'ancre à chaque question par son identifiant sans en répéter le texte, et une vérification signale quand le déroulé et la base ne concordent pas.",
    },
    {
      es: "Los cambios a la base viven en el repositorio: una foto versionada del esquema de producción y migraciones que corren en una sola transacción y se detienen sin tocar nada si la función que van a cambiar no es la versión que esperan.",
      en: "Database changes live in the repository: a versioned snapshot of the production schema, and migrations that run in a single transaction and stop without changing anything if the function they are about to change is not the version they expect.",
      pt: "As mudanças no banco ficam no repositório: uma foto versionada do esquema de produção e migrações que rodam em uma única transação e param sem alterar nada se a função que vão mudar não for a versão esperada.",
      fr: "Les changements de la base vivent dans le dépôt : un instantané versionné du schéma de production et des migrations qui s'exécutent en une seule transaction et s'arrêtent sans rien modifier si la fonction qu'elles vont changer n'est pas la version attendue.",
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
      es: "Si una parte de la respuesta de la base llega incompleta o con otra forma, solo esa parte se queda vacía y el resto de la pantalla sigue; si falta lo indispensable, la pantalla conserva el último estado bueno. Y si una vista falla, aparece «Algo salió mal» y la página se recarga sola a los 10 segundos.",
      en: "If part of the database's response arrives incomplete or in another shape, only that part is left empty and the rest of the screen carries on; if something essential is missing, the screen keeps its last good state. And if a view crashes, a “Something went wrong” message appears and the page reloads itself after 10 seconds.",
      pt: "Se uma parte da resposta do banco chegar incompleta ou com outro formato, só essa parte fica vazia e o restante da tela continua; se faltar o essencial, a tela mantém o último estado bom. E, se uma tela falhar, aparece a mensagem “Algo deu errado” e a página se recarrega sozinha depois de 10 segundos.",
      fr: "Si une partie de la réponse de la base arrive incomplète ou sous une autre forme, seule cette partie reste vide et le reste de l'écran continue ; s'il manque l'essentiel, l'écran conserve son dernier état valide. Et si une vue plante, le message « Un problème est survenu » s'affiche et la page se recharge d'elle-même au bout de 10 secondes.",
    },
    {
      es: "Si dos personas tienen el panel abierto, solo se crea una sesión nueva y las órdenes del panel que se quedó mirando la anterior no se aplican; si las dos cambian la pantalla a la vez, la segunda no pisa a la primera: el servidor avisa que la pantalla ya cambió y no escribe nada.",
      en: "If two people have the panel open, only one new session is created and commands from the panel still looking at the old one are not applied; if both change the screen at the same time, the second does not overwrite the first: the server replies that the screen has already changed and writes nothing.",
      pt: "Se duas pessoas estiverem com o painel aberto, só uma sessão nova é criada e os comandos do painel que ficou olhando a anterior não são aplicados; se as duas mudarem a tela ao mesmo tempo, a segunda não sobrescreve a primeira: o servidor avisa que a tela já mudou e não grava nada.",
      fr: "Si deux personnes ont le panneau ouvert, une seule nouvelle session est créée et les commandes du panneau resté sur l'ancienne ne sont pas appliquées ; si les deux changent l'écran en même temps, la seconde n'écrase pas la première : le serveur indique que l'écran a déjà changé et n'écrit rien.",
    },
    {
      es: "Reintentar repite la última orden tal cual; al abrir una pregunta, la orden lleva el paso del que parte, así que un reintento no se salta preguntas.",
      en: "Retrying repeats the last command exactly; when opening a question, the command carries the step it starts from, so a retry never skips a question.",
      pt: "Tentar de novo repete o último comando exatamente igual; ao abrir uma pergunta, o comando leva a etapa de onde parte, então uma nova tentativa não pula perguntas.",
      fr: "Réessayer répète la dernière commande à l'identique ; pour ouvrir une question, la commande indique l'étape de départ, si bien qu'une nouvelle tentative ne saute jamais de question.",
    },
    {
      es: "Si el bot no logra entender una respuesta tras dos aclaraciones, la deja pendiente, sigue con la siguiente y la retoma cuando la sala ya no tiene preguntas por abrir.",
      en: "If the bot cannot make sense of an answer after two clarifications, it leaves it pending, moves on to the next question, and comes back to it once the room has no more questions to open.",
      pt: "Se o bot não conseguir entender uma resposta depois de dois esclarecimentos, ele a deixa pendente, segue para a próxima e a retoma quando a sala não tem mais perguntas por abrir.",
      fr: "Si le bot ne parvient pas à comprendre une réponse après deux demandes de précision, il la laisse en attente, passe à la question suivante et y revient quand la salle n'a plus de questions à ouvrir.",
    },
  ],
  lastUpdated: "2026-11-03",
};
