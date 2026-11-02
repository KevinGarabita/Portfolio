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
    es: "Sistema para un workshop presencial de diagnóstico empresarial: la sala responde a un bot de WhatsApp, la pantalla proyectada sigue el guion de la presentación con las respuestas en vivo y el presentador lo conduce desde el celular o la laptop.",
    en: "System for an in-person business diagnostic workshop: the audience answers a WhatsApp bot, the projected screen follows the presentation script with the answers live, and the presenter runs it from a phone or laptop.",
    pt: "Sistema para um workshop presencial de diagnóstico empresarial: o público responde a um bot de WhatsApp, a tela projetada segue o roteiro da apresentação com as respostas ao vivo e o apresentador conduz tudo pelo celular ou pelo notebook.",
    fr: "Système pour un atelier de diagnostic d'entreprise en présentiel : la salle répond à un bot WhatsApp, l'écran projeté suit le déroulé de la présentation avec les réponses en direct et l'animateur pilote le tout depuis un téléphone ou un ordinateur portable.",
  },
  problem: {
    es: "En el workshop presencial de Appolo, cada asistente se registra por WhatsApp y llena a su ritmo el perfil de su empresa; después, al ritmo del presentador, responde dos reflexiones, un diagnóstico de 10 preguntas puntuadas en tres dimensiones (visión y liderazgo, orden operativo y comercial, y automatización y servicio) y una pregunta abierta de cierre. Hacía falta proyectar en vivo lo que la sala va respondiendo, entre las láminas de la presentación, y que el presentador condujera todo desde el celular o la laptop sin que el navegador viera las claves del backend.",
    en: "At the in-person Appolo workshop, each attendee signs up on WhatsApp and fills in their company profile at their own pace; then, at the presenter's pace, they answer two reflection questions, a 10-question scored diagnostic across three dimensions (vision and leadership, operational and sales order, and automation and service), and a closing open question. The room needed to see its answers projected live, between the presentation's slides, and the presenter needed to run everything from a phone or laptop without exposing the backend keys to the browser.",
    pt: "No workshop presencial da Appolo, cada participante se cadastra pelo WhatsApp e preenche no próprio ritmo o perfil da sua empresa; depois, no ritmo do apresentador, responde a duas reflexões, a um diagnóstico de 10 perguntas pontuadas em três dimensões (visão e liderança, organização operacional e comercial, e automação e atendimento) e a uma pergunta aberta de encerramento. Era preciso projetar ao vivo o que a sala vai respondendo, entre os slides da apresentação, e permitir que o apresentador conduzisse tudo pelo celular ou pelo notebook sem expor as chaves do backend ao navegador.",
    fr: "Lors de l'atelier Appolo en présentiel, chaque participant s'inscrit sur WhatsApp et remplit à son rythme le profil de son entreprise ; ensuite, au rythme de l'animateur, il répond à deux questions de réflexion, à un diagnostic de 10 questions notées réparties sur trois dimensions (vision et leadership, organisation opérationnelle et commerciale, automatisation et service) et à une question ouverte de clôture. Il fallait projeter en direct les réponses de la salle, entre les diapositives de la présentation, et permettre à l'animateur de tout piloter depuis un téléphone ou un ordinateur portable, sans exposer les clés du backend au navigateur.",
  },
  solution: {
    es: "El sistema une tres piezas: el bot de WhatsApp en n8n, la base de datos en Supabase, que también calcula el diagnóstico de cada persona, y una web con dos vistas. La pantalla en vivo, de solo lectura, sigue un guion: láminas y frases de la presentación, el QR para entrar con la radiografía del auditorio, cada pregunta con sus barras, el promedio de cada dimensión con su semáforo de madurez y, al final, los resultados de la sala. El panel del host recorre ese guion en orden: un toque proyecta la pantalla siguiente y, si es una pregunta, la abre por WhatsApp en ese mismo toque. Desde ahí también se reenvía, se envían los resultados, se modera la nube de palabras y se cierra o se abre una sesión. La web lee el estado con una RPC de Supabase, escucha avisos por Supabase Realtime y manda las órdenes del host a través de funciones serverless en Vercel.",
    en: "The system joins three pieces: the WhatsApp bot in n8n, the Supabase database, which also works out each person's diagnostic, and a web app with two views. The live screen is read-only and follows a script: the presentation's slides and quotes, the QR code to join with a snapshot of the audience, each question with its bars, each dimension's average with its maturity traffic light and, at the end, the room's results. The host panel walks through that script in order: one tap projects the next screen and, if it is a question, sends it on WhatsApp in that same tap. It is also used to resend, send the results, moderate the word cloud, and close or open a session. The app reads the state through a Supabase RPC, listens for notices over Supabase Realtime, and sends the host's commands through serverless functions on Vercel.",
    pt: "O sistema une três peças: o bot de WhatsApp no n8n, o banco de dados no Supabase, que também calcula o diagnóstico de cada pessoa, e uma aplicação web com duas visões. A tela ao vivo, somente leitura, segue um roteiro: slides e frases da apresentação, o QR code de entrada com o raio-x do público, cada pergunta com suas barras, a média de cada dimensão com o seu semáforo de maturidade e, no final, os resultados da sala. O painel do host percorre esse roteiro em ordem: um toque projeta a tela seguinte e, se for uma pergunta, envia-a pelo WhatsApp nesse mesmo toque. Por ali também se reenvia, se enviam os resultados, se modera a nuvem de palavras e se encerra ou se abre uma sessão. A aplicação lê o estado com uma RPC do Supabase, recebe avisos pelo Supabase Realtime e envia os comandos do host por meio de funções serverless na Vercel.",
    fr: "Le système réunit trois éléments : le bot WhatsApp dans n8n, la base de données Supabase, qui calcule aussi le diagnostic de chaque personne, et une application web à deux vues. L'écran en direct, en lecture seule, suit un déroulé : les diapositives et citations de la présentation, le QR code d'entrée avec la radiographie du public, chaque question avec ses barres, la moyenne de chaque dimension avec son feu de maturité et, à la fin, les résultats de la salle. Le panneau de l'animateur parcourt ce déroulé dans l'ordre : une touche projette l'écran suivant et, s'il s'agit d'une question, l'envoie sur WhatsApp dans la même action. Il sert aussi à renvoyer, envoyer les résultats, modérer le nuage de mots, et clôturer ou ouvrir une session. L'application lit l'état via une RPC Supabase, reçoit des notifications par Supabase Realtime et transmet les commandes de l'animateur via des fonctions serverless sur Vercel.",
  },
  role: {
    es: "Lo construí solo, de punta a punta, con Claude Code: la web en React y TypeScript (la pantalla, el panel del host y el guion de la presentación), la base de datos en Supabase (con su RPC, Realtime, el cálculo del diagnóstico y el esquema versionado con migraciones), los flujos de n8n del bot de WhatsApp y las funciones serverless en Vercel, además del modo demo y las pruebas con Vitest y Testing Library.",
    en: "I built it on my own, end to end, with Claude Code: the React and TypeScript web app (the screen, the host panel and the presentation script), the Supabase database (with its RPC, Realtime, the diagnostic calculation and the schema versioned with migrations), the n8n flows behind the WhatsApp bot, and the serverless functions on Vercel, plus the demo mode and the tests with Vitest and Testing Library.",
    pt: "Construí sozinho, de ponta a ponta, com o Claude Code: a aplicação web em React e TypeScript (a tela, o painel do host e o roteiro da apresentação), o banco de dados no Supabase (com a RPC, o Realtime, o cálculo do diagnóstico e o esquema versionado com migrações), os fluxos do n8n do bot de WhatsApp e as funções serverless na Vercel, além do modo demo e dos testes com Vitest e Testing Library.",
    fr: "Je l'ai construit seul, de bout en bout, avec Claude Code : l'application web en React et TypeScript (l'écran, le panneau de l'animateur et le déroulé de la présentation), la base de données Supabase (avec sa RPC, Realtime, le calcul du diagnostic et le schéma versionné par migrations), les flux n8n du bot WhatsApp et les fonctions serverless sur Vercel, ainsi que le mode démo et les tests avec Vitest et Testing Library.",
  },
  results: [
    {
      es: "El presentador conduce el evento desde el celular o la laptop, y la sala ve en vivo sus respuestas agregadas, sin nombres ni teléfonos.",
      en: "The presenter runs the event from a phone or laptop, and the room sees its aggregated answers live, with no names or phone numbers.",
      pt: "O apresentador conduz o evento pelo celular ou pelo notebook, e a sala vê ao vivo as respostas agregadas, sem nomes nem telefones.",
      fr: "L'animateur pilote l'événement depuis un téléphone ou un ordinateur portable, et la salle voit ses réponses agrégées en direct, sans noms ni numéros de téléphone.",
    },
    {
      es: "Cada asistente recibe por WhatsApp su propio diagnóstico: la etapa de su empresa, su puntaje por dimensión con su semáforo, su fortaleza, su cuello de botella y acciones para los próximos 30 días, a mediano y a largo plazo.",
      en: "Each attendee gets their own diagnostic on WhatsApp: their company's stage, their score per dimension with its traffic light, their strength, their bottleneck, and actions for the next 30 days, the medium term and the long term.",
      pt: "Cada participante recebe pelo WhatsApp o seu próprio diagnóstico: o estágio da sua empresa, a sua pontuação por dimensão com o semáforo, o seu ponto forte, o seu gargalo e ações para os próximos 30 dias, a médio e a longo prazo.",
      fr: "Chaque participant reçoit sur WhatsApp son propre diagnostic : le stade de son entreprise, son score par dimension avec son feu, son point fort, son goulet d'étranglement et des actions pour les 30 prochains jours, à moyen et à long terme.",
    },
    {
      es: "Un solo sistema cubre el evento completo: el bot de WhatsApp, la base de datos, la pantalla en vivo con el guion de la presentación y el panel del presentador.",
      en: "One system covers the whole event: the WhatsApp bot, the database, the live screen with the presentation script, and the presenter's panel.",
      pt: "Um único sistema cobre o evento inteiro: o bot de WhatsApp, o banco de dados, a tela ao vivo com o roteiro da apresentação e o painel do apresentador.",
      fr: "Un seul système couvre tout l'événement : le bot WhatsApp, la base de données, l'écran en direct avec le déroulé de la présentation et le panneau de l'animateur.",
    },
  ],
  highlights: [
    {
      es: "Pantalla pensada para proyectarse que sigue el guion de la presentación: láminas y frases, el QR de ingreso con la radiografía del auditorio en barras o en pastel, cada pregunta con sus barras en vivo, el promedio de cada dimensión con su semáforo y, al final, los resultados de la sala en una sola vista: madurez global y por dimensión, etapa de las empresas, principales cuellos de botella y retos, y nube de palabras.",
      en: "A screen designed to be projected that follows the presentation script: slides and quotes, the QR code to join with an audience snapshot in bars or a pie chart, each question with live bars, each dimension's average with its traffic light and, at the end, the room's results in a single view: overall and per-dimension maturity, company stage, top bottlenecks and challenges, and a word cloud.",
      pt: "Tela pensada para projeção que segue o roteiro da apresentação: slides e frases, o QR code de entrada com o raio-x do público em barras ou em pizza, cada pergunta com suas barras ao vivo, a média de cada dimensão com o seu semáforo e, no final, os resultados da sala em uma única visão: maturidade global e por dimensão, estágio das empresas, principais gargalos e desafios, e nuvem de palavras.",
      fr: "Un écran conçu pour la projection qui suit le déroulé de la présentation : diapositives et citations, le QR code d'entrée avec la radiographie du public en barres ou en camembert, chaque question avec ses barres en direct, la moyenne de chaque dimension avec son feu et, à la fin, les résultats de la salle sur une seule vue : maturité globale et par dimension, stade des entreprises, principaux goulets d'étranglement et défis, et nuage de mots.",
    },
    {
      es: "Panel del host pensado primero para el celular y en columnas en la laptop, con atajos de teclado para un control remoto: se entra con contraseña, avanza en orden por el guion (un toque proyecta lo que sigue y, si es una pregunta, la abre por WhatsApp), muestra cuántos respondieron y cuántos van a su ritmo, y permite ocultar palabras de la nube antes de que se proyecten.",
      en: "A host panel designed for the phone first, and in columns on a laptop, with keyboard shortcuts for a remote: it opens with a password, moves through the script in order (one tap projects what comes next and, if it is a question, sends it on WhatsApp), shows how many have answered and how many are going at their own pace, and lets the host hide words from the cloud before they are projected.",
      pt: "Painel do host pensado primeiro para o celular e em colunas no notebook, com atalhos de teclado para um controle remoto: o acesso é por senha, avança em ordem pelo roteiro (um toque projeta o que vem a seguir e, se for uma pergunta, envia-a pelo WhatsApp), mostra quantos já responderam e quantos seguem no próprio ritmo, e permite ocultar palavras da nuvem antes que sejam projetadas.",
      fr: "Un panneau de l'animateur pensé d'abord pour le téléphone, et en colonnes sur ordinateur portable, avec des raccourcis clavier pour une télécommande : l'accès se fait par mot de passe, il avance dans l'ordre du déroulé (une touche projette la suite et, s'il s'agit d'une question, l'envoie sur WhatsApp), indique combien de personnes ont répondu et combien avancent à leur rythme, et permet de masquer des mots du nuage avant qu'ils ne soient projetés.",
    },
    {
      es: "Cada quien responde a su ritmo: «Siguiente» solo le envía la pregunta a quien va al corriente, quien se quedó atrás recibe la siguiente en cuanto responde la suya y quien llega tarde se pone al día al terminar su registro y su perfil.",
      en: "Everyone answers at their own pace: “Next” only sends the question to those who are up to date, anyone behind gets the next one as soon as they answer theirs, and latecomers catch up once they finish signing up and filling in their profile.",
      pt: "Cada um responde no próprio ritmo: “Próxima” só envia a pergunta a quem está em dia, quem ficou para trás recebe a seguinte assim que responde a sua e quem chega atrasado se atualiza ao terminar o cadastro e o perfil.",
      fr: "Chacun répond à son rythme : « Suivant » n'envoie la question qu'aux personnes à jour, celles qui ont pris du retard reçoivent la suivante dès qu'elles ont répondu à la leur, et les retardataires rattrapent la salle une fois leur inscription et leur profil terminés.",
    },
    {
      es: "Sincronización en vivo: cada aviso de Supabase Realtime dispara una consulta del estado completo, con un máximo de dos consultas por segundo y un sondeo de respaldo cada 5 segundos (cada 3 si el canal se cae).",
      en: "Live sync: every Supabase Realtime notice triggers a query for the full state, with at most two queries per second and a fallback poll every 5 seconds (every 3 if the channel drops).",
      pt: "Sincronização ao vivo: cada aviso do Supabase Realtime dispara uma consulta do estado completo, com no máximo duas consultas por segundo e uma consulta periódica de reserva a cada 5 segundos (a cada 3 se o canal cair).",
      fr: "Synchronisation en direct : chaque notification Supabase Realtime déclenche une requête de l'état complet, avec au plus deux requêtes par seconde et une interrogation de secours toutes les 5 secondes (toutes les 3 si le canal tombe).",
    },
    {
      es: "Modo demo que recorre en bucle el guion completo, en unos 5 minutos, con una sala inventada de 48 personas y pasa por el mismo sincronizador, para revisar las vistas y el diseño sin una sala real.",
      en: "A demo mode that loops through the whole script, in about 5 minutes, with a made-up room of 48 people and goes through the same sync logic, to review the views and the design without a real audience.",
      pt: "Modo demo que percorre em loop o roteiro completo, em cerca de 5 minutos, com uma sala fictícia de 48 pessoas e passa pelo mesmo sincronizador, para revisar as telas e o design sem uma sala real.",
      fr: "Un mode démo qui parcourt en boucle tout le déroulé, en 5 minutes environ, avec une salle fictive de 48 personnes et passe par le même synchroniseur, pour vérifier les vues et le design sans vraie salle.",
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
  links: [],
  decisions: [
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
  lastUpdated: "2026-11-02",
};
