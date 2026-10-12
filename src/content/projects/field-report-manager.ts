import { sameInEveryLanguage } from "@/i18n/localize";
import type { Project } from "@/types/content";

/**
 * Field report manager built for UxmalTechnologies (freelance). Finished in August 2026
 * and never used in production, so no text here may suggest it is live or in use.
 */
export const fieldReportManager: Project = {
  slug: "field-report-manager",
  name: {
    es: "Gestor de reportes de campo",
    en: "Field Report Manager",
    pt: "Gestor de relatórios de campo",
    fr: "Gestionnaire de rapports de terrain",
  },
  client: "UxmalTechnologies",
  category: "freelance",
  context: sameInEveryLanguage("Freelance"),
  status: "completed-unreleased",
  period: { start: "2026-06", end: "2026-08" },
  kind: "web-app",
  isFeatured: false,
  teamSetup: "individual",
  tagline: {
    es: "Reportes de campo con fotos desde el celular, revisados y aprobados en un solo lugar.",
    en: "Field reports with photos from the phone, reviewed and approved in one place.",
    pt: "Relatórios de campo com fotos pelo celular, revisados e aprovados em um só lugar.",
    fr: "Rapports de terrain avec photos sur mobile, vérifiés et approuvés au même endroit.",
  },
  summary: {
    es: "Aplicación web para que los técnicos de instalación registren cada reporte con sus fotos desde el teléfono y el supervisor lo revise y apruebe. La diseñé para sustituir un flujo de tres pasos por WhatsApp y captura manual.",
    en: "Web app for installation technicians to log each report with its photos from their phone, and for the supervisor to review and approve it. I designed it to replace a three-step process built on WhatsApp and manual data entry.",
    pt: "Aplicação web para os técnicos de instalação registrarem cada relatório com as fotos pelo celular e o supervisor revisá-lo e aprová-lo. Eu a projetei para substituir um processo de três etapas baseado no WhatsApp e em digitação manual.",
    fr: "Application web qui permet aux techniciens d'installation d'enregistrer chaque rapport avec ses photos depuis leur téléphone, et au superviseur de le vérifier et de l'approuver. Je l'ai conçue pour remplacer un processus en trois étapes fondé sur WhatsApp et la saisie manuelle.",
  },
  problem: {
    es: "Cada reporte de instalación pasa por tres pasos: el técnico llena un formato por WhatsApp, otra persona captura esos datos a mano y las fotos de evidencia se envían aparte. La misma información se escribe dos veces y las fotos quedan separadas del reporte al que pertenecen.",
    en: "Each installation report goes through three steps: the technician fills out a form over WhatsApp, another person types that data in by hand, and the evidence photos are sent separately. The same information is written twice, and the photos are kept apart from the report they belong to.",
    pt: "Cada relatório de instalação passa por três etapas: o técnico preenche um formulário pelo WhatsApp, outra pessoa digita esses dados à mão e as fotos de comprovação são enviadas à parte. A mesma informação é escrita duas vezes, e as fotos ficam separadas do relatório a que pertencem.",
    fr: "Chaque rapport d'installation passe par trois étapes : le technicien remplit un formulaire sur WhatsApp, une autre personne ressaisit ces données à la main et les photos justificatives sont envoyées à part. La même information est saisie deux fois, et les photos restent séparées du rapport auquel elles appartiennent.",
  },
  solution: {
    es: "El técnico captura el reporte desde el teléfono en cuatro secciones (información general, cliente, instalación y georreferencias) y sube las ocho fotos de evidencia que pide cada instalación. El servidor asigna el técnico, el supervisor y el equipo a partir de la sesión, y el campo de la ONT solo ofrece los equipos que ese técnico tiene asignados. Al enviarlo, el reporte pasa a revisión: el supervisor lo revisa, corrige lo necesario y lo aprueba, y en ese momento el sistema genera el PDF con los datos y las fotos. El historial se exporta a Excel por rango de fechas. Un administrador gestiona usuarios, equipos y el inventario de ONTs, que se importa desde Excel.",
    en: "The technician fills in the report from their phone in four sections (general information, customer, installation, and geolocation) and uploads the eight evidence photos each installation requires. The server assigns the technician, supervisor, and team from the session, and the ONT field only lists the devices assigned to that technician. Once submitted, the report goes to review: the supervisor checks it, fixes what is needed, and approves it, and at that point the system generates the PDF with the data and photos. The history can be exported to Excel by date range. An administrator manages users, teams, and the ONT inventory, which is imported from Excel.",
    pt: "O técnico preenche o relatório pelo celular em quatro seções (informações gerais, cliente, instalação e georreferência) e envia as oito fotos de comprovação que cada instalação exige. O servidor define o técnico, o supervisor e a equipe a partir da sessão, e o campo da ONT só mostra os equipamentos atribuídos a esse técnico. Depois de enviado, o relatório vai para revisão: o supervisor o confere, corrige o que for preciso e o aprova, e nesse momento o sistema gera o PDF com os dados e as fotos. O histórico pode ser exportado para Excel por período. Um administrador gerencia usuários, equipes e o inventário de ONTs, que é importado do Excel.",
    fr: "Le technicien remplit le rapport depuis son téléphone en quatre sections (informations générales, client, installation et géolocalisation) et téléverse les huit photos justificatives exigées pour chaque installation. Le serveur attribue le technicien, le superviseur et l'équipe à partir de la session, et le champ ONT ne propose que les équipements attribués à ce technicien. Une fois envoyé, le rapport passe en revue : le superviseur le vérifie, corrige ce qu'il faut et l'approuve, et le système génère alors le PDF avec les données et les photos. L'historique s'exporte vers Excel par période. Un administrateur gère les utilisateurs, les équipes et l'inventaire des ONT, importé depuis Excel.",
  },
  role: {
    es: "Lo desarrollé solo, de principio a fin: la API en FastAPI, el frontend en React y TypeScript, el modelo de datos y las migraciones en Supabase, la autenticación con Supabase Auth y el acceso por rol, la generación del PDF, la exportación a Excel y el despliegue en Render, con integración continua en GitHub Actions.",
    en: "I built it on my own, end to end: the FastAPI API, the React and TypeScript frontend, the data model and migrations in Supabase, authentication with Supabase Auth and role-based access, PDF generation, the Excel export, and the deployment on Render, with continuous integration on GitHub Actions.",
    pt: "Desenvolvi sozinho, de ponta a ponta: a API em FastAPI, o frontend em React e TypeScript, o modelo de dados e as migrações no Supabase, a autenticação com Supabase Auth e o acesso por perfil, a geração do PDF, a exportação para Excel e o deploy no Render, com integração contínua no GitHub Actions.",
    fr: "Je l'ai développée seul, de bout en bout : l'API FastAPI, le frontend en React et TypeScript, le modèle de données et les migrations dans Supabase, l'authentification avec Supabase Auth et l'accès par rôle, la génération du PDF, l'export vers Excel et le déploiement sur Render, avec intégration continue sur GitHub Actions.",
  },
  results: [
    {
      es: "Quedó terminada en agosto de 2026, con el ciclo completo: captura en campo, revisión y aprobación del supervisor, PDF, exportación a Excel e inventario de ONTs.",
      en: "Finished in August 2026 with the full cycle: field capture, supervisor review and approval, PDF, Excel export, and the ONT inventory.",
      pt: "Ficou pronta em agosto de 2026, com o ciclo completo: registro em campo, revisão e aprovação do supervisor, PDF, exportação para Excel e inventário de ONTs.",
      fr: "Terminée en août 2026, avec le cycle complet : saisie sur le terrain, vérification et approbation du superviseur, PDF, export vers Excel et inventaire des ONT.",
    },
    {
      es: "El diseño elimina la doble captura: los datos y las fotos se registran una sola vez, en el mismo reporte.",
      en: "The design removes double entry: the data and photos are recorded once, in the same report.",
      pt: "O design elimina a digitação dupla: os dados e as fotos são registrados uma única vez, no mesmo relatório.",
      fr: "La conception supprime la double saisie : les données et les photos sont enregistrées une seule fois, dans le même rapport.",
    },
    {
      es: "Cada reporte aprobado queda como un PDF con sus datos y sus ocho fotos, listo para descargar desde el panel del supervisor.",
      en: "Each approved report is stored as a PDF with its data and its eight photos, ready to download from the supervisor's panel.",
      pt: "Cada relatório aprovado fica salvo como um PDF com os dados e as oito fotos, pronto para baixar no painel do supervisor.",
      fr: "Chaque rapport approuvé est conservé en PDF avec ses données et ses huit photos, prêt à être téléchargé depuis le tableau de bord du superviseur.",
    },
  ],
  highlights: [
    {
      es: "Diseñé un formulario único para sustituir el flujo de tres pasos (formato por WhatsApp, captura manual por otra persona y evidencias aparte): el técnico registra el reporte y adjunta sus fotos, con los datos conocidos precargados.",
      en: "Designed a single form to replace the three-step workflow (a WhatsApp form, manual data entry by another person, and separate evidence): the technician logs the report and attaches the photos, with known data pre-filled.",
      pt: "Projetei um formulário único para substituir o fluxo de três etapas (formulário pelo WhatsApp, digitação manual por outra pessoa e comprovações à parte): o técnico registra o relatório e anexa as fotos, com os dados já conhecidos preenchidos.",
      fr: "J'ai conçu un formulaire unique pour remplacer le processus en trois étapes (formulaire sur WhatsApp, ressaisie manuelle par une autre personne et justificatifs à part) : le technicien enregistre le rapport et joint ses photos, avec les données connues préremplies.",
    },
    {
      es: "Implementé autenticación con Supabase Auth y acceso por rol: cada técnico ve solo sus reportes y cada supervisor, los de sus técnicos asignados.",
      en: "Implemented authentication with Supabase Auth and role-based access: each technician sees only their own reports, and each supervisor sees those of their assigned technicians.",
      pt: "Implementei autenticação com Supabase Auth e acesso por perfil: cada técnico vê apenas os próprios relatórios, e cada supervisor vê os dos técnicos atribuídos a ele.",
      fr: "J'ai mis en place l'authentification avec Supabase Auth et l'accès par rôle : chaque technicien ne voit que ses propres rapports, et chaque superviseur ceux des techniciens qui lui sont attribués.",
    },
    {
      es: "Inventario de ONTs: el administrador las importa desde Excel con una vista previa de nuevas, existentes y repetidas; el supervisor las asigna a cada técnico, y un reporte solo acepta una ONT asignada a quien lo captura.",
      en: "ONT inventory: the administrator imports devices from Excel with a preview of new, existing, and repeated entries; the supervisor assigns them to each technician, and a report only accepts an ONT assigned to whoever fills it in.",
      pt: "Inventário de ONTs: o administrador importa os equipamentos do Excel com uma prévia dos novos, existentes e repetidos; o supervisor os atribui a cada técnico, e um relatório só aceita uma ONT atribuída a quem o preenche.",
      fr: "Inventaire des ONT : l'administrateur importe les équipements depuis Excel avec un aperçu des nouveaux, des existants et des doublons ; le superviseur les attribue à chaque technicien, et un rapport n'accepte qu'un ONT attribué à la personne qui le remplit.",
    },
    {
      es: "Hecho para trabajar en campo con mala señal: las fotos se comprimen en el teléfono antes de subirse, las peticiones se reintentan cuando falla la red y el formulario avisa antes de cerrarse si hay fotos sin guardar.",
      en: "Built for fieldwork with poor signal: photos are compressed on the phone before upload, requests are retried when the network fails, and the form warns before closing if there are unsaved photos.",
      pt: "Feito para o trabalho de campo com sinal fraco: as fotos são comprimidas no celular antes do envio, as requisições são repetidas quando a rede falha e o formulário avisa antes de fechar se houver fotos não salvas.",
      fr: "Conçue pour le terrain avec un signal faible : les photos sont compressées sur le téléphone avant l'envoi, les requêtes sont relancées quand le réseau échoue et le formulaire prévient avant de se fermer s'il reste des photos non enregistrées.",
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
      src: "/images/projects/field-report-manager/supervisor-validation-panel.webp",
      alt: {
        es: "Panel de validación del supervisor con datos de ejemplo: contadores de reportes pendientes y liquidados, botón para exportar a Excel y tabla de reportes con descarga de PDF.",
        en: "Supervisor validation panel with sample data: counts of pending and settled reports, an Excel export button, and a report table with PDF downloads.",
        pt: "Painel de validação do supervisor com dados de exemplo: contadores de relatórios pendentes e liquidados, botão para exportar para Excel e tabela de relatórios com download do PDF.",
        fr: "Tableau de validation du superviseur avec des données d'exemple : compteurs de rapports en attente et soldés, bouton d'export vers Excel et tableau des rapports avec téléchargement du PDF.",
      },
      width: 1440,
      height: 900,
      viewport: "desktop",
    },
    {
      src: "/images/projects/field-report-manager/technician-report-form.webp",
      alt: {
        es: "Formulario del técnico en el teléfono con datos de ejemplo: sección de instalación con tecnología, tipo de orden, ONT asignada, distrito, terminal, par y metraje.",
        en: "Technician form on a phone with sample data: installation section with technology, order type, assigned ONT, district, terminal, pair, and cable length.",
        pt: "Formulário do técnico no celular com dados de exemplo: seção de instalação com tecnologia, tipo de ordem, ONT atribuída, distrito, terminal, par e metragem.",
        fr: "Formulaire du technicien sur téléphone avec des données d'exemple : section installation avec technologie, type d'ordre, ONT attribué, district, terminal, paire et longueur de câble.",
      },
      width: 750,
      height: 1624,
      viewport: "mobile",
    },
    {
      src: "/images/projects/field-report-manager/technician-evidence-photos.webp",
      alt: {
        es: "Paso de evidencias en el teléfono con fotos de ejemplo: cada foto tiene su espacio y el botón para enviar a revisión se activa al completar las ocho.",
        en: "Evidence step on a phone with sample photos: each photo has its own slot, and the submit-for-review button turns on once all eight are in.",
        pt: "Etapa de comprovações no celular com fotos de exemplo: cada foto tem seu espaço, e o botão para enviar à revisão é ativado quando as oito estão completas.",
        fr: "Étape des justificatifs sur téléphone avec des photos d'exemple : chaque photo a son emplacement, et le bouton d'envoi en revue s'active une fois les huit ajoutées.",
      },
      width: 750,
      height: 1624,
      viewport: "mobile",
    },
    {
      src: "/images/projects/field-report-manager/supervisor-report-review.webp",
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
  lastUpdated: "2026-10-12",
};
