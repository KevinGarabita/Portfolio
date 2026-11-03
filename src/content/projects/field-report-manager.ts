import { sameInEveryLanguage } from "@/i18n/localize";
import type { Project } from "@/types/content";

/**
 * Field report manager built freelance. Finished in August 2026 and never used in
 * production, so no text here may suggest it is live or in use. The case study presents
 * only the software: no text or image here may name the client or show its logo.
 */
export const fieldReportManager: Project = {
  slug: "field-report-manager",
  name: {
    es: "Gestor de reportes de campo",
    en: "Field Report Manager",
    pt: "Gestor de relatórios de campo",
    fr: "Gestionnaire de rapports de terrain",
  },
  category: "freelance",
  context: sameInEveryLanguage("Freelance"),
  status: "completed-unreleased",
  period: { start: "2026-06", end: "2026-08" },
  kind: "web-app",
  isFeatured: true,
  teamSetup: "individual",
  tagline: {
    es: "Reportes de campo con fotos desde el celular, revisados y aprobados en un solo lugar.",
    en: "Field reports with photos from the phone, reviewed and approved in one place.",
    pt: "Relatórios de campo com fotos pelo celular, revisados e aprovados em um só lugar.",
    fr: "Rapports de terrain avec photos sur mobile, vérifiés et approuvés au même endroit.",
  },
  summary: {
    es: "Aplicación web para que los técnicos de instalación registren sus reportes con fotos desde el teléfono y el supervisor los revise y apruebe en un solo lugar.",
    en: "A web app where installation technicians log their reports with photos from their phones, and the supervisor reviews and approves them in one place.",
    pt: "Aplicação web para os técnicos de instalação registrarem os relatórios com fotos pelo celular e o supervisor revisá-los e aprová-los em um só lugar.",
    fr: "Une application web où les techniciens d'installation enregistrent leurs rapports avec photos depuis leur téléphone, et où le superviseur les vérifie et les approuve.",
  },
  problem: {
    es: "Cada reporte pasa por tres pasos: un formato por WhatsApp, otra persona que lo captura a mano y fotos que se envían aparte. La misma información se escribe dos veces.",
    en: "Each report goes through three steps: a WhatsApp form, another person typing it in by hand, and photos sent separately. The same information is written twice.",
    pt: "Cada relatório passa por três etapas: um formulário pelo WhatsApp, outra pessoa que o digita à mão e fotos enviadas à parte. A mesma informação é escrita duas vezes.",
    fr: "Chaque rapport passe par trois étapes : un formulaire sur WhatsApp, une ressaisie à la main par une autre personne et des photos envoyées à part. La même information est saisie deux fois.",
  },
  solution: {
    es: "Un solo formulario en el teléfono con las ocho fotos que pide cada instalación. El supervisor revisa, corrige y aprueba, y el sistema genera el PDF con los datos y las fotos.",
    en: "A single phone form with the eight photos each installation requires. The supervisor reviews, corrects and approves it, and the system generates the PDF with the data and photos.",
    pt: "Um único formulário no celular com as oito fotos que cada instalação exige. O supervisor revisa, corrige e aprova, e o sistema gera o PDF com os dados e as fotos.",
    fr: "Un seul formulaire sur téléphone avec les huit photos exigées pour chaque installation. Le superviseur vérifie, corrige et approuve, et le système génère le PDF avec les données et les photos.",
  },
  howItWorks: [
    {
      es: "El técnico captura el reporte desde el teléfono en cuatro secciones (información general, cliente, instalación y georreferencias) y sube las ocho fotos de evidencia que pide cada instalación. El servidor asigna el técnico, el supervisor y el equipo a partir de la sesión, y el campo de la ONT solo ofrece los equipos que ese técnico tiene asignados. Al enviarlo, el reporte pasa a revisión: el supervisor lo revisa, corrige lo necesario y lo aprueba, y en ese momento el sistema genera el PDF con los datos y las fotos. El historial se exporta a Excel por rango de fechas. Un administrador gestiona usuarios, equipos y el inventario de ONTs, que se importa desde Excel.",
      en: "The technician fills in the report from their phone in four sections (general information, customer, installation, and geolocation) and uploads the eight evidence photos each installation requires. The server assigns the technician, supervisor, and team from the session, and the ONT field only lists the devices assigned to that technician. Once submitted, the report goes to review: the supervisor checks it, fixes what is needed, and approves it, and at that point the system generates the PDF with the data and photos. The history can be exported to Excel by date range. An administrator manages users, teams, and the ONT inventory, which is imported from Excel.",
      pt: "O técnico preenche o relatório pelo celular em quatro seções (informações gerais, cliente, instalação e georreferência) e envia as oito fotos de comprovação que cada instalação exige. O servidor define o técnico, o supervisor e a equipe a partir da sessão, e o campo da ONT só mostra os equipamentos atribuídos a esse técnico. Depois de enviado, o relatório vai para revisão: o supervisor o confere, corrige o que for preciso e o aprova, e nesse momento o sistema gera o PDF com os dados e as fotos. O histórico pode ser exportado para Excel por período. Um administrador gerencia usuários, equipes e o inventário de ONTs, que é importado do Excel.",
      fr: "Le technicien remplit le rapport depuis son téléphone en quatre sections (informations générales, client, installation et géolocalisation) et téléverse les huit photos justificatives exigées pour chaque installation. Le serveur attribue le technicien, le superviseur et l'équipe à partir de la session, et le champ ONT ne propose que les équipements attribués à ce technicien. Une fois envoyé, le rapport passe en revue : le superviseur le vérifie, corrige ce qu'il faut et l'approuve, et le système génère alors le PDF avec les données et les photos. L'historique s'exporte vers Excel par période. Un administrateur gère les utilisateurs, les équipes et l'inventaire des ONT, importé depuis Excel.",
    },
  ],
  role: {
    es: "Lo desarrollé solo, de punta a punta: la API en FastAPI, el frontend en React y TypeScript, datos y autenticación en Supabase, el PDF, la exportación a Excel y el despliegue en Render con GitHub Actions.",
    en: "I built it on my own, end to end: the FastAPI API, the React and TypeScript frontend, data and auth in Supabase, the PDF, the Excel export and deployment on Render with GitHub Actions.",
    pt: "Desenvolvi sozinho, de ponta a ponta: a API em FastAPI, o frontend em React e TypeScript, dados e autenticação no Supabase, o PDF, a exportação para Excel e o deploy no Render com GitHub Actions.",
    fr: "Je l'ai développée seul, de bout en bout : l'API FastAPI, le frontend React et TypeScript, les données et l'authentification dans Supabase, le PDF, l'export Excel et le déploiement sur Render avec GitHub Actions.",
  },
  results: [
    {
      es: "Terminada en agosto de 2026 con el ciclo completo: captura, revisión, aprobación, PDF y exportación a Excel.",
      en: "Finished in August 2026 with the full cycle: capture, review, approval, PDF and Excel export.",
      pt: "Concluída em agosto de 2026 com o ciclo completo: registro, revisão, aprovação, PDF e exportação para Excel.",
      fr: "Terminée en août 2026 avec le cycle complet : saisie, vérification, approbation, PDF et export Excel.",
    },
    {
      es: "El diseño elimina la doble captura: los datos y las fotos se registran una sola vez, en el mismo reporte.",
      en: "The design removes double entry: the data and photos are recorded once, in the same report.",
      pt: "O design elimina a digitação dupla: os dados e as fotos são registrados uma única vez, no mesmo relatório.",
      fr: "La conception supprime la double saisie : les données et les photos sont enregistrées une seule fois, dans le même rapport.",
    },
    {
      es: "Cada reporte aprobado queda como un PDF con sus datos y sus ocho fotos.",
      en: "Each approved report is kept as a PDF with its data and its eight photos.",
      pt: "Cada relatório aprovado fica como um PDF com os dados e as oito fotos.",
      fr: "Chaque rapport approuvé est conservé en PDF avec ses données et ses huit photos.",
    },
  ],
  highlights: [
    {
      es: "Un formulario único con los datos conocidos precargados reemplaza el flujo de tres pasos.",
      en: "A single form with known data pre-filled replaces the three-step workflow.",
      pt: "Um formulário único com os dados conhecidos já preenchidos substitui o fluxo de três etapas.",
      fr: "Un formulaire unique avec les données connues préremplies remplace le processus en trois étapes.",
    },
    {
      es: "Acceso por rol con Supabase Auth: cada técnico ve sus reportes y cada supervisor, los de sus técnicos.",
      en: "Role-based access with Supabase Auth: each technician sees their own reports and each supervisor those of their technicians.",
      pt: "Acesso por perfil com Supabase Auth: cada técnico vê os próprios relatórios e cada supervisor, os dos seus técnicos.",
      fr: "Accès par rôle avec Supabase Auth : chaque technicien voit ses rapports et chaque superviseur ceux de ses techniciens.",
    },
    {
      es: "Inventario de ONTs importado desde Excel: un reporte solo acepta una ONT asignada a quien lo captura.",
      en: "An ONT inventory imported from Excel: a report only accepts an ONT assigned to whoever fills it in.",
      pt: "Inventário de ONTs importado do Excel: um relatório só aceita uma ONT atribuída a quem o preenche.",
      fr: "Un inventaire d'ONT importé depuis Excel : un rapport n'accepte qu'un ONT attribué à la personne qui le remplit.",
    },
    {
      es: "Hecha para mala señal: comprime las fotos en el teléfono y reintenta las peticiones cuando falla la red.",
      en: "Built for poor signal: it compresses photos on the phone and retries requests when the network fails.",
      pt: "Feita para sinal fraco: comprime as fotos no celular e repete as requisições quando a rede falha.",
      fr: "Conçue pour un signal faible : elle compresse les photos sur le téléphone et relance les requêtes quand le réseau échoue.",
    },
  ],
  stack: [
    "FastAPI",
    "React",
    "TypeScript",
    "Supabase",
    "Python",
    "Next.js",
    "Material UI",
    "PostgreSQL",
    "Docker",
    "Render",
    "GitHub Actions",
  ],
  integrations: ["Supabase Auth", "Supabase Storage"],
  images: [
    {
      src: "/images/projects/field-report-manager/validation-panel-overview.webp",
      alt: {
        es: "Panel de validación del supervisor con datos de ejemplo: contadores de solicitudes pendientes y órdenes liquidadas, botón para exportar a Excel y tabla de reportes con ONT, cliente, técnico, estado y PDF.",
        en: "Supervisor validation panel with sample data: counts of pending requests and settled orders, an Excel export button, and a report table with the ONT, customer, technician, status, and PDF.",
        pt: "Painel de validação do supervisor com dados de exemplo: contadores de solicitações pendentes e ordens liquidadas, botão para exportar para Excel e tabela de relatórios com ONT, cliente, técnico, status e PDF.",
        fr: "Tableau de validation du superviseur avec des données d'exemple : compteurs de demandes en attente et d'ordres soldés, bouton d'export vers Excel et tableau des rapports avec ONT, client, technicien, statut et PDF.",
      },
      width: 1440,
      height: 900,
      viewport: "desktop",
    },
    {
      src: "/images/projects/field-report-manager/technician-installation-form.webp",
      alt: {
        es: "Formulario del técnico en el teléfono con datos de ejemplo: las secciones de información general y cliente ya completas, y la de instalación abierta con tecnología, tipo de orden, ONT asignada, distrito, terminal, par y metraje.",
        en: "Technician form on a phone with sample data: the general information and customer sections already complete, and the installation section open with technology, order type, assigned ONT, district, terminal, pair, and cable length.",
        pt: "Formulário do técnico no celular com dados de exemplo: as seções de informações gerais e cliente já completas, e a de instalação aberta com tecnologia, tipo de ordem, ONT atribuída, distrito, terminal, par e metragem.",
        fr: "Formulaire du technicien sur téléphone avec des données d'exemple : les sections informations générales et client déjà complètes, et la section installation ouverte avec technologie, type d'ordre, ONT attribué, district, terminal, paire et longueur de câble.",
      },
      width: 750,
      height: 1624,
      viewport: "mobile",
    },
    {
      src: "/images/projects/field-report-manager/technician-evidence-readings.webp",
      alt: {
        es: "Paso de evidencias en el teléfono con fotos de ejemplo: las lecturas de potencia en la punta y en la terminal, cada una en su espacio y marcada como completada, con el botón para enviar a revisión ya activo.",
        en: "Evidence step on a phone with sample photos: the power readings at the line end and at the terminal, each in its own slot and marked complete, with the submit-for-review button already on.",
        pt: "Etapa de comprovações no celular com fotos de exemplo: as leituras de potência na ponta e na terminal, cada uma em seu espaço e marcada como concluída, com o botão para enviar à revisão já ativo.",
        fr: "Étape des justificatifs sur téléphone avec des photos d'exemple : les mesures de puissance en bout de ligne et au terminal, chacune dans son emplacement et marquée comme terminée, avec le bouton d'envoi en revue déjà actif.",
      },
      width: 750,
      height: 1624,
      viewport: "mobile",
    },
    {
      src: "/images/projects/field-report-manager/supervisor-report-evidence.webp",
      alt: {
        es: "Revisión de un reporte con datos de ejemplo: datos del expediente, del cliente y del personal asignado junto a las ocho fotos de evidencia.",
        en: "Review of a report with sample data: case, customer, and assigned staff details next to the eight evidence photos.",
        pt: "Revisão de um relatório com dados de exemplo: dados do processo, do cliente e da equipe atribuída ao lado das oito fotos de comprovação.",
        fr: "Revue d'un rapport avec des données d'exemple : informations du dossier, du client et du personnel attribué à côté des huit photos justificatives.",
      },
      width: 1440,
      height: 900,
      viewport: "desktop",
    },
  ],
  links: [],
  decisions: [
    {
      es: "Serví la API bajo /api del mismo dominio que el frontend, con una regla de rewrite en Render. Con frontend y API en dos subdominios de onrender.com, la cookie de sesión era de terceros y Safari la bloqueaba: el inicio de sesión fallaba en iPhone y funcionaba en Chrome de escritorio. El backend ahora se niega a arrancar si los dos orígenes no comparten sitio.",
      en: "I served the API under /api on the same domain as the frontend, through a rewrite rule on Render. With the frontend and API on two onrender.com subdomains, the session cookie was third-party and Safari blocked it: login failed on iPhone and worked on desktop Chrome. The backend now refuses to start if the two origins are not on the same site.",
      pt: "Servi a API em /api no mesmo domínio do frontend, com uma regra de rewrite no Render. Com o frontend e a API em dois subdomínios de onrender.com, o cookie de sessão era de terceiros e o Safari o bloqueava: o login falhava no iPhone e funcionava no Chrome do computador. Agora o backend se recusa a iniciar se as duas origens não forem do mesmo site.",
      fr: "J'ai servi l'API sous /api sur le même domaine que le frontend, grâce à une règle de réécriture sur Render. Avec le frontend et l'API sur deux sous-domaines d'onrender.com, le cookie de session était tiers et Safari le bloquait : la connexion échouait sur iPhone et fonctionnait sur Chrome pour ordinateur. Le backend refuse désormais de démarrer si les deux origines ne sont pas sur le même site.",
    },
    {
      es: "El PDF se arma con un límite de 250 KB: primero se reducen las fotos generales y se conservan nítidas las de la ONT y el formato R20, que sirven para la verificación técnica. Al aprobar el reporte, las fotos se borran del almacenamiento y el PDF queda como registro; un trabajo semanal elimina los reportes aprobados con más de un año, según la regla de retención del negocio.",
      en: "The PDF is built with a 250 KB limit: the general photos are reduced first, and the ONT and R20 form photos stay sharp because they are used for technical verification. When a report is approved, its photos are deleted from storage and the PDF remains as the record; a weekly job removes approved reports older than one year, per the business's retention rule.",
      pt: "O PDF é gerado com um limite de 250 KB: primeiro são reduzidas as fotos gerais, e as da ONT e do formulário R20 continuam nítidas, porque servem para a verificação técnica. Quando o relatório é aprovado, as fotos são apagadas do armazenamento e o PDF fica como registro; uma tarefa semanal remove os relatórios aprovados com mais de um ano, conforme a regra de retenção do negócio.",
      fr: "Le PDF est généré avec une limite de 250 Ko : les photos générales sont réduites en premier, et celles de l'ONT et du formulaire R20 restent nettes, car elles servent à la vérification technique. À l'approbation d'un rapport, ses photos sont supprimées du stockage et le PDF sert d'archive ; une tâche hebdomadaire supprime les rapports approuvés de plus d'un an, selon la règle de conservation de l'entreprise.",
    },
    {
      es: "El cliente nunca fija el estado, el técnico, el equipo ni la fecha de liquidación: los pone el servidor. Cada endpoint sensible aplica el filtro por rol y por recurso en la lectura y otra vez en la escritura, y las operaciones que pueden chocar (instalar o reasignar una ONT, aprobar o borrar un reporte) corren en funciones transaccionales de Postgres.",
      en: "The client never sets the status, technician, team, or settlement date: the server does. Every sensitive endpoint applies the role and resource filter on the read and again on the write, and operations that can collide (installing or reassigning an ONT, approving or deleting a report) run in transactional Postgres functions.",
      pt: "O cliente nunca define o status, o técnico, a equipe nem a data de liquidação: quem define é o servidor. Cada endpoint sensível aplica o filtro por perfil e por recurso na leitura e novamente na escrita, e as operações que podem entrar em conflito (instalar ou reatribuir uma ONT, aprovar ou excluir um relatório) rodam em funções transacionais do Postgres.",
      fr: "Le client ne fixe jamais le statut, le technicien, l'équipe ni la date de règlement : c'est le serveur qui s'en charge. Chaque endpoint sensible applique le filtre par rôle et par ressource à la lecture, puis de nouveau à l'écriture, et les opérations susceptibles d'entrer en conflit (installer ou réattribuer un ONT, approuver ou supprimer un rapport) s'exécutent dans des fonctions transactionnelles Postgres.",
    },
    {
      es: "Cada vulnerabilidad corregida tiene una prueba de regresión en pytest. La integración continua las ejecuta junto con pip-audit, npm audit y gitleaks.",
      en: "Every fixed vulnerability has a regression test in pytest. Continuous integration runs them alongside pip-audit, npm audit, and gitleaks.",
      pt: "Cada vulnerabilidade corrigida tem um teste de regressão no pytest. A integração contínua os executa junto com pip-audit, npm audit e gitleaks.",
      fr: "Chaque vulnérabilité corrigée a un test de non-régression dans pytest. L'intégration continue les exécute avec pip-audit, npm audit et gitleaks.",
    },
  ],
  failureHandling: [
    {
      es: "Si falla la red, cada petición se reintenta dos veces antes de mostrar el error, y si la sesión expiró se renueva una vez y se repite la petición.",
      en: "If the network fails, each request is retried twice before showing an error, and if the session has expired it is renewed once and the request is repeated.",
      pt: "Se a rede falhar, cada requisição é repetida duas vezes antes de mostrar o erro, e se a sessão tiver expirado ela é renovada uma vez e a requisição é refeita.",
      fr: "Si le réseau échoue, chaque requête est relancée deux fois avant d'afficher l'erreur, et si la session a expiré, elle est renouvelée une fois et la requête est répétée.",
    },
    {
      es: "Los botones de guardar y enviar se bloquean mientras la petición está en curso, para que un doble toque con señal lenta no cree un reporte duplicado. Si el borrador se guardó pero falló el envío a revisión, el reintento actualiza ese mismo borrador.",
      en: "The save and submit buttons are disabled while a request is in progress, so a double tap on a slow connection does not create a duplicate report. If the draft was saved but sending it to review failed, the retry updates that same draft.",
      pt: "Os botões de salvar e enviar ficam bloqueados enquanto a requisição está em andamento, para que um toque duplo com sinal lento não crie um relatório duplicado. Se o rascunho foi salvo mas o envio para revisão falhou, a nova tentativa atualiza esse mesmo rascunho.",
      fr: "Les boutons d'enregistrement et d'envoi sont désactivés pendant qu'une requête est en cours, pour qu'un double appui avec un signal lent ne crée pas de rapport en double. Si le brouillon a été enregistré mais que l'envoi en revue a échoué, la nouvelle tentative met à jour ce même brouillon.",
    },
    {
      es: "Antes de pasar a revisión o de aprobarse, el servidor valida los campos obligatorios, las ocho fotos, las coordenadas y que la ONT pertenezca al técnico, y responde con la lista exacta de lo que falta.",
      en: "Before a report goes to review or gets approved, the server checks the required fields, the eight photos, the coordinates, and that the ONT belongs to the technician, and replies with the exact list of what is missing.",
      pt: "Antes de ir para revisão ou de ser aprovado, o servidor valida os campos obrigatórios, as oito fotos, as coordenadas e se a ONT pertence ao técnico, e responde com a lista exata do que falta.",
      fr: "Avant qu'un rapport passe en revue ou soit approuvé, le serveur vérifie les champs obligatoires, les huit photos, les coordonnées et que l'ONT appartient bien au technicien, puis renvoie la liste exacte de ce qui manque.",
    },
    {
      es: "Generar el PDF y subir fotos tienen límite de concurrencia y de frecuencia; si el servidor está ocupado, responde con un mensaje claro para reintentar en lugar de quedarse colgado.",
      en: "PDF generation and photo uploads have concurrency and rate limits; when the server is busy, it replies with a clear message to try again instead of hanging.",
      pt: "A geração do PDF e o envio de fotos têm limite de concorrência e de frequência; se o servidor estiver ocupado, ele responde com uma mensagem clara para tentar de novo, em vez de travar.",
      fr: "La génération du PDF et l'envoi des photos ont des limites de simultanéité et de fréquence ; quand le serveur est occupé, il répond par un message clair invitant à réessayer au lieu de rester bloqué.",
    },
  ],
  lastUpdated: "2026-11-02",
};
