import { sameInEveryLanguage } from "@/i18n/localize";
import type { Project } from "@/types/content";

const imageDir = "/images/projects/controltec-pest-control-crm";

/**
 * Field service management system built for Controltec Fumigaciones (freelance). The
 * slug keeps "crm" so existing links keep working; the repo renamed it to a field
 * service system on 2026-10-28 because it has no leads, pipeline or campaigns.
 */
export const controltecPestControlCrm: Project = {
  slug: "controltec-pest-control-crm",
  name: {
    es: "Gestión de servicios de control de plagas",
    en: "Pest Control Field Service Software",
    pt: "Gestão de serviços de controle de pragas",
    fr: "Gestion des interventions antiparasitaires",
  },
  client: "Controltec Fumigaciones",
  category: "freelance",
  context: sameInEveryLanguage("Freelance"),
  status: "in-development",
  statusNote: {
    es: "entrega prevista: diciembre 2026",
    en: "expected delivery: December 2026",
    pt: "entrega prevista: dezembro de 2026",
    fr: "livraison prévue : décembre 2026",
  },
  period: { start: "2026-07" },
  kind: "web-app",
  isFeatured: true,
  teamSetup: "individual",
  tagline: {
    es: "Reportes de servicio firmados en sitio, incluso sin señal, y listos para una auditoría.",
    en: "Service reports signed on-site, even with no signal, and ready for an audit.",
    pt: "Relatórios de serviço assinados no local, mesmo sem sinal, e prontos para auditoria.",
    fr: "Rapports d'intervention signés sur place, même sans réseau, et prêts pour un audit.",
  },
  summary: {
    es: "Sistema para una empresa de control de plagas: la oficina agenda y cobra, el técnico llena el reporte en sitio incluso sin señal y el cliente consulta sus certificados en un portal.",
    en: "A system for a pest control company: the office schedules and bills, technicians fill in reports on-site even with no signal, and clients check their certificates in a portal.",
    pt: "Sistema para uma empresa de controle de pragas: o escritório agenda e cobra, o técnico preenche o relatório no local mesmo sem sinal e o cliente consulta seus certificados em um portal.",
    fr: "Un système pour une entreprise de lutte antiparasitaire : le bureau planifie et encaisse, le technicien remplit le rapport sur place même sans réseau, et le client consulte ses certificats dans un portail.",
  },
  problem: {
    es: "En una auditoría sanitaria hay que demostrar qué pasó en cada visita, pero los reportes eran formatos impresos, los certificados se hacían a mano y en bodegas y sótanos no hay señal.",
    en: "In a health audit the company must prove what happened at every visit, but reports were printed forms, certificates were written by hand, and warehouses and basements have no signal.",
    pt: "Em uma auditoria sanitária é preciso comprovar o que aconteceu em cada visita, mas os relatórios eram formulários impressos, os certificados eram feitos à mão e em depósitos e subsolos não há sinal.",
    fr: "Lors d'un audit sanitaire, il faut prouver ce qui s'est passé à chaque visite, mais les rapports étaient des formulaires papier, les certificats étaient rédigés à la main et les entrepôts et sous-sols n'ont pas de réseau.",
  },
  solution: {
    es: "Una API en FastAPI atiende una web con tres vistas (oficina, campo y portal del cliente) y una app de campo en React Native. El técnico escanea el QR de cada estación y el reporte se firma en el teléfono.",
    en: "A FastAPI API serves a web app with three views (office, field and client portal) and a React Native field app. Technicians scan each station's QR code and the report is signed on the phone.",
    pt: "Uma API em FastAPI atende uma aplicação web com três visões (escritório, campo e portal do cliente) e um app de campo em React Native. O técnico escaneia o QR de cada estação e o relatório é assinado no celular.",
    fr: "Une API FastAPI dessert une application web à trois vues (bureau, terrain et portail client) et une application de terrain React Native. Le technicien scanne le QR code de chaque station et le rapport est signé sur le téléphone.",
  },
  howItWorks: [
    {
      es: "Una sola API en FastAPI atiende a una web con tres vistas (oficina, campo y portal del cliente) y a una app móvil de campo. En la oficina se agenda, se lleva la cartera de clientes con sus direcciones y estaciones, se cotiza y se da seguimiento a los cobros. En campo, el técnico abre su jornada, escanea el QR de las estaciones que revisa y completa el reporte en cuatro pasos: estaciones, productos aplicados, evidencias y firmas del cliente y del técnico. Al firmar, el sistema emite el certificado cuando corresponde; cuando el servicio queda pagado, archiva el PDF del reporte con la forma de pago y se lo envía al cliente por WhatsApp. En el portal, cada cliente consulta sus servicios, sus próximas visitas, sus estaciones y sus certificados.",
      en: "A single FastAPI API serves a web app with three views (office, field and client portal) and a mobile field app. In the office, staff schedule visits, manage clients with their addresses and stations, prepare quotes and follow up on payments. In the field, the technician opens their day, scans the QR code of the stations they check and completes the report in four steps: stations, applied products, evidence, and the client's and technician's signatures. On signing, the system issues the certificate when it applies; once the service is paid, it archives the report PDF with the payment method and sends it to the client on WhatsApp. In the portal, each client checks their services, upcoming visits, stations and certificates.",
      pt: "Uma única API em FastAPI atende a uma aplicação web com três visões (escritório, campo e portal do cliente) e a um app móvel de campo. No escritório, a equipe agenda as visitas, gerencia os clientes com seus endereços e estações, faz orçamentos e acompanha os pagamentos. Em campo, o técnico abre sua jornada, escaneia o QR code das estações que verifica e completa o relatório em quatro etapas: estações, produtos aplicados, comprovações e assinaturas do cliente e do técnico. Ao assinar, o sistema emite o certificado quando for o caso; quando o serviço é pago, arquiva o PDF do relatório com a forma de pagamento e o envia ao cliente pelo WhatsApp. No portal, cada cliente consulta seus serviços, as próximas visitas, suas estações e seus certificados.",
      fr: "Une seule API FastAPI dessert une application web à trois vues (bureau, terrain et portail client) et une application mobile de terrain. Au bureau, l'équipe planifie les visites, gère les clients avec leurs adresses et leurs stations, établit les devis et suit les paiements. Sur le terrain, le technicien ouvre sa journée, scanne le QR code des stations qu'il contrôle et complète le rapport en quatre étapes : stations, produits appliqués, justificatifs et signatures du client et du technicien. À la signature, le système émet le certificat lorsque c'est nécessaire ; une fois l'intervention payée, il archive le PDF du rapport avec le mode de paiement et l'envoie au client sur WhatsApp. Dans le portail, chaque client consulte ses interventions, ses prochaines visites, ses stations et ses certificats.",
    },
    {
      es: "Integré la API de WhatsApp Cloud de Meta para enviarle al cliente su reporte firmado en PDF, adjunto a una plantilla aprobada, y Google Maps para ubicar en el mapa las direcciones de los clientes y abrir la ruta desde el teléfono del técnico.",
      en: "I integrated Meta's WhatsApp Cloud API to send the client their signed report as a PDF attached to an approved template, and Google Maps to pin client addresses on the map and open directions from the technician's phone.",
      pt: "Integrei a WhatsApp Cloud API da Meta para enviar ao cliente o relatório assinado em PDF, anexado a uma mensagem de modelo aprovada, e o Google Maps para marcar no mapa os endereços dos clientes e abrir a rota no celular do técnico.",
      fr: "J'ai intégré la WhatsApp Cloud API de Meta pour envoyer au client son rapport signé en PDF, joint à un message modèle approuvé, et Google Maps pour situer les adresses des clients sur la carte et ouvrir l'itinéraire depuis le téléphone du technicien.",
    },
    {
      es: "La oficina tiene agenda por mes, semana, día y técnico, clientes con sus direcciones y estaciones, servicios recurrentes, ingresos y cuentas por cobrar, y reportes que se filtran y se exportan a Excel. La pantalla de tendencias muestra el porcentaje de hallazgos graves contra el año anterior, las estaciones que reinciden y las que hay que reponer.",
      en: "The office side has a schedule by month, week, day and technician, clients with their addresses and stations, recurring services, income and receivables, and reports that can be filtered and exported to Excel. The trends screen shows the share of serious findings against the previous year, the stations with repeat findings and the ones that need replacing.",
      pt: "O escritório tem agenda por mês, semana, dia e técnico, clientes com seus endereços e estações, serviços recorrentes, receitas e contas a receber, e relatórios que podem ser filtrados e exportados para Excel. A tela de tendências mostra a porcentagem de constatações graves em relação ao ano anterior, as estações reincidentes e as que precisam ser repostas.",
      fr: "Côté bureau : un planning par mois, semaine, jour et technicien, les clients avec leurs adresses et leurs stations, les interventions récurrentes, les recettes et les créances, et des rapports filtrables et exportables vers Excel. L'écran des tendances montre la part de constats graves par rapport à l'année précédente, les stations à constats répétés et celles à remplacer.",
    },
    {
      es: "Las cotizaciones salen como un documento formal: la oficina redacta secciones numeradas, como qué incluye el servicio, la garantía y las condiciones de pago, puede copiarlas de otra cotización, y el PDF lleva el espacio para la firma de aceptación del cliente y de la empresa.",
      en: "Quotes go out as a formal document: the office writes numbered sections, such as what the service includes, the warranty and the payment terms, can copy them from another quote, and the PDF has room for the acceptance signatures of the client and the company.",
      pt: "Os orçamentos saem como um documento formal: o escritório redige seções numeradas, como o que o serviço inclui, a garantia e as condições de pagamento, pode copiá-las de outro orçamento, e o PDF traz o espaço para as assinaturas de aceite do cliente e da empresa.",
      fr: "Les devis partent sous forme de document formel : le bureau rédige des sections numérotées, comme ce que comprend l'intervention, la garantie et les conditions de paiement, peut les copier d'un autre devis, et le PDF prévoit les signatures d'acceptation du client et de l'entreprise.",
    },
  ],
  role: {
    es: "Lo desarrollo solo, de punta a punta: base de datos en Supabase, API en FastAPI, web en React con Material UI, app de campo en React Native, integraciones con WhatsApp y Google Maps, y más de mil pruebas automatizadas.",
    en: "I build it on my own, end to end: the Supabase database, the FastAPI API, the React web app with Material UI, the React Native field app, the WhatsApp and Google Maps integrations, and over a thousand automated tests.",
    pt: "Desenvolvo sozinho, de ponta a ponta: banco de dados no Supabase, API em FastAPI, aplicação web em React com Material UI, app de campo em React Native, integrações com WhatsApp e Google Maps e mais de mil testes automatizados.",
    fr: "Je le développe seul, de bout en bout : la base Supabase, l'API FastAPI, l'application web React avec Material UI, l'application de terrain React Native, les intégrations WhatsApp et Google Maps, et plus de mille tests automatisés.",
  },
  results: [
    {
      es: "El cliente contrató también el mantenimiento.",
      en: "The client also contracted ongoing maintenance.",
      pt: "O cliente também contratou a manutenção.",
      fr: "Le client a également souscrit la maintenance.",
    },
    {
      es: "El sistema ya está desplegado en el dominio de la empresa.",
      en: "The system is already deployed on the company's own domain.",
      pt: "O sistema já está implantado no domínio da empresa.",
      fr: "Le système est déjà déployé sur le domaine de l'entreprise.",
    },
    {
      es: "El backend ya tiene más de mil pruebas automatizadas.",
      en: "The backend already has more than a thousand automated tests.",
      pt: "O backend já tem mais de mil testes automatizados.",
      fr: "Le backend compte déjà plus de mille tests automatisés.",
    },
  ],
  highlights: [
    {
      es: "Cada estación tiene un QR: el técnico lo escanea y registra en sitio el hallazgo, el estado, las plagas y una foto.",
      en: "Each station has a QR code: the technician scans it and records the finding, condition, pests and a photo on-site.",
      pt: "Cada estação tem um QR code: o técnico o escaneia e registra no local a constatação, o estado, as pragas e uma foto.",
      fr: "Chaque station a un QR code : le technicien le scanne et enregistre sur place le constat, l'état, les nuisibles et une photo.",
    },
    {
      es: "Lo firmado ya no cambia: el PDF del reporte y el certificado quedan archivados como evidencia para auditorías.",
      en: "What is signed never changes: the report PDF and the certificate are archived as audit evidence.",
      pt: "O que foi assinado não muda mais: o PDF do relatório e o certificado ficam arquivados como evidência para auditorias.",
      fr: "Ce qui est signé ne change plus : le PDF du rapport et le certificat sont archivés comme preuves d'audit.",
    },
    {
      es: "La app de campo funciona sin señal y envía todo sola al volver la conexión, sin duplicar reportes ni cobros.",
      en: "The field app works with no signal and sends everything on its own when the connection returns, without duplicating reports or payments.",
      pt: "O app de campo funciona sem sinal e envia tudo sozinho quando a conexão volta, sem duplicar relatórios nem pagamentos.",
      fr: "L'application de terrain fonctionne sans réseau et envoie tout d'elle-même au retour de la connexion, sans dupliquer rapports ni paiements.",
    },
    {
      es: "El cliente recibe su reporte firmado por WhatsApp, y la oficina ve las tendencias de hallazgos por estación.",
      en: "Clients get their signed report on WhatsApp, and the office sees finding trends per station.",
      pt: "O cliente recebe o relatório assinado pelo WhatsApp, e o escritório vê as tendências de constatações por estação.",
      fr: "Le client reçoit son rapport signé sur WhatsApp, et le bureau suit l'évolution des constats par station.",
    },
  ],
  stack: [
    "FastAPI",
    "React",
    "React Native",
    "Supabase",
    "Python",
    "TypeScript",
    "Expo",
    "Material UI",
    "PostgreSQL",
    "Render",
  ],
  integrations: ["WhatsApp Cloud API (Meta)", "Google Maps"],
  images: [
    {
      src: `${imageDir}/weekly-agenda.webp`,
      alt: {
        es: "Agenda semanal de la oficina con servicios de ejemplo: completados en verde, en curso en naranja, programados en azul y uno cancelado",
        en: "Office weekly schedule with sample services: completed in green, in progress in orange, scheduled in blue and one cancelled",
        pt: "Agenda semanal do escritório com serviços de exemplo: concluídos em verde, em andamento em laranja, agendados em azul e um cancelado",
        fr: "Planning hebdomadaire du bureau avec des interventions d'exemple : terminées en vert, en cours en orange, planifiées en bleu et une annulée",
      },
      width: 1440,
      height: 900,
      viewport: "desktop",
    },
    {
      src: `${imageDir}/station-trends.webp`,
      alt: {
        es: "Tendencias de estaciones con datos de ejemplo: porcentaje mensual de hallazgos graves contra el año anterior, estaciones que requieren atención, direcciones con más alertas y plagas más frecuentes",
        en: "Station trends with sample data: monthly share of serious findings against the previous year, stations that need attention, addresses with the most alerts and the most frequent pests",
        pt: "Tendências das estações com dados de exemplo: porcentagem mensal de constatações graves em relação ao ano anterior, estações que precisam de atenção, endereços com mais alertas e pragas mais frequentes",
        fr: "Tendances des stations avec des données d'exemple : part mensuelle de constats graves par rapport à l'année précédente, stations à surveiller, adresses avec le plus d'alertes et nuisibles les plus fréquents",
      },
      width: 1440,
      height: 900,
      viewport: "desktop",
    },
    {
      src: `${imageDir}/field-stations-step.webp`,
      alt: {
        es: "Paso de estaciones del reporte de campo en el teléfono, con datos de ejemplo: cuatro de doce estaciones revisadas, cada una con su hallazgo",
        en: "Stations step of the field report on a phone, with sample data: four of twelve stations checked, each with its finding",
        pt: "Etapa de estações do relatório de campo no celular, com dados de exemplo: quatro de doze estações verificadas, cada uma com sua constatação",
        fr: "Étape des stations du rapport de terrain sur téléphone, avec des données d'exemple : quatre stations sur douze contrôlées, chacune avec son constat",
      },
      width: 780,
      height: 1688,
      viewport: "mobile",
    },
    {
      src: `${imageDir}/station-capture-form.webp`,
      alt: {
        es: "Captura de una estación en el teléfono, con datos de ejemplo: ingesta parcial, estación útil, ratón detectado y una observación",
        en: "Capturing a station on a phone, with sample data: partial bait consumption, station in working order, a mouse detected and a note",
        pt: "Registro de uma estação no celular, com dados de exemplo: consumo parcial da isca, estação em bom estado, rato detectado e uma observação",
        fr: "Saisie d'une station sur téléphone, avec des données d'exemple : consommation partielle de l'appât, station en bon état, souris détectée et une observation",
      },
      width: 780,
      height: 1688,
      viewport: "mobile",
    },
    {
      src: `${imageDir}/customer-portal.webp`,
      alt: {
        es: "Portal del cliente en el teléfono, con datos de ejemplo: último reporte y último certificado para descargar, próxima visita y número de estaciones",
        en: "Client portal on a phone, with sample data: latest report and latest certificate to download, next visit and number of stations",
        pt: "Portal do cliente no celular, com dados de exemplo: último relatório e último certificado para baixar, próxima visita e número de estações",
        fr: "Portail client sur téléphone, avec des données d'exemple : dernier rapport et dernier certificat à télécharger, prochaine visite et nombre de stations",
      },
      width: 780,
      height: 1688,
      viewport: "mobile",
    },
  ],
  links: [],
  decisions: [
    {
      es: "FastAPI es la única puerta a los datos: ni el navegador ni la app hablan con Supabase, y las fotos, firmas y PDF se sirven a través de la API.",
      en: "FastAPI is the only way into the data: neither the browser nor the app talks to Supabase, and photos, signatures and PDFs are served through the API.",
      pt: "O FastAPI é a única porta de acesso aos dados: nem o navegador nem o app falam com o Supabase, e as fotos, assinaturas e PDFs são servidos pela API.",
      fr: "FastAPI est le seul accès aux données : ni le navigateur ni l'application ne communiquent avec Supabase, et les photos, signatures et PDF sont servis par l'API.",
    },
    {
      es: "Los permisos se asignan por capacidad y no por rol. Cada endpoint declara la que exige, y un registro fuera del alcance del usuario responde 404 para no revelar qué clientes existen.",
      en: "Permissions are granted by capability, not by role. Each endpoint declares the one it requires, and a record outside the user's scope returns 404 so it does not reveal which clients exist.",
      pt: "As permissões são concedidas por capacidade, não por perfil. Cada endpoint declara a que exige, e um registro fora do alcance do usuário responde 404 para não revelar quais clientes existem.",
      fr: "Les permissions sont accordées par capacité et non par rôle. Chaque endpoint déclare celle qu'il exige, et un enregistrement hors du périmètre de l'utilisateur renvoie 404 pour ne pas révéler quels clients existent.",
    },
    {
      es: "Un reporte firmado no se edita: el PDF se genera una sola vez, cuando el servicio queda pagado, a partir de lo que se firmó, y no se vuelve a generar con catálogos que pudieron cambiar después.",
      en: "A signed report is never edited: the PDF is generated only once, when the service is paid, from what was signed, and it is not regenerated from catalogs that may have changed since.",
      pt: "Um relatório assinado nunca é editado: o PDF é gerado uma única vez, quando o serviço é pago, a partir do que foi assinado, e não é gerado de novo com catálogos que possam ter mudado depois.",
      fr: "Un rapport signé n'est jamais modifié : le PDF est généré une seule fois, quand l'intervention est payée, à partir de ce qui a été signé, et n'est pas régénéré à partir de catalogues qui auraient pu changer depuis.",
    },
    {
      es: "La regla de que un técnico no tenga dos servicios encimados vive en PostgreSQL, con una restricción EXCLUDE, así que se cumple aunque dos personas agenden al mismo tiempo.",
      en: "The rule that a technician cannot have two overlapping services lives in PostgreSQL, as an EXCLUDE constraint, so it holds even when two people schedule at the same time.",
      pt: "A regra de que um técnico não pode ter dois serviços sobrepostos fica no PostgreSQL, com uma restrição EXCLUDE, então é cumprida mesmo quando duas pessoas agendam ao mesmo tempo.",
      fr: "La règle qui interdit à un technicien d'avoir deux interventions qui se chevauchent vit dans PostgreSQL, sous forme de contrainte EXCLUDE : elle tient même si deux personnes planifient en même temps.",
    },
    {
      es: "Se desarrolla contra un Supabase local en Docker con datos anonimizados. El backend, la web y la app se niegan a arrancar en desarrollo si apuntan a producción.",
      en: "Development runs against a local Supabase in Docker with anonymized data. The backend, the web app and the mobile app refuse to start in development if they point to production.",
      pt: "O desenvolvimento usa um Supabase local no Docker com dados anonimizados. O backend, a aplicação web e o app se recusam a iniciar em desenvolvimento se apontarem para produção.",
      fr: "Le développement se fait sur un Supabase local dans Docker avec des données anonymisées. Le backend, l'application web et l'application mobile refusent de démarrer en développement s'ils pointent vers la production.",
    },
  ],
  failureHandling: [
    {
      es: "El aviso por WhatsApp corre en segundo plano después de responder: si falla, el servicio queda completado y cobrado igual. Solo reintenta, hasta tres veces, los errores transitorios, y el PDF se sube a Meta una sola vez por envío.",
      en: "The WhatsApp notice runs in the background after the response is sent: if it fails, the service is still completed and paid. Only transient errors are retried, up to three times, and the PDF is uploaded to Meta only once per send.",
      pt: "O aviso pelo WhatsApp roda em segundo plano depois da resposta: se falhar, o serviço continua concluído e pago. Só os erros temporários são repetidos, até três vezes, e o PDF é enviado à Meta uma única vez por envio.",
      fr: "L'avis WhatsApp s'exécute en arrière-plan après l'envoi de la réponse : s'il échoue, l'intervention reste terminée et payée. Seules les erreurs temporaires sont relancées, jusqu'à trois fois, et le PDF n'est envoyé à Meta qu'une fois par envoi.",
    },
    {
      es: "En la app de campo, cada acción entra a una cola en SQLite. El cierre del reporte y la declaración de pago llevan una llave generada en el teléfono, así que reenviarlos tras perder la respuesta no crea un segundo reporte ni un segundo ingreso.",
      en: "In the field app, every action goes into a SQLite queue. Closing the report and declaring the payment carry a key generated on the phone, so resending them after a lost response does not create a second report or a second income record.",
      pt: "No app de campo, cada ação entra em uma fila no SQLite. O fechamento do relatório e a declaração de pagamento levam uma chave gerada no celular; assim, reenviá-los depois de perder a resposta não cria um segundo relatório nem uma segunda receita.",
      fr: "Dans l'application de terrain, chaque action entre dans une file SQLite. La clôture du rapport et la déclaration de paiement portent une clé générée sur le téléphone ; les renvoyer après une réponse perdue ne crée donc ni second rapport ni seconde recette.",
    },
    {
      es: "Si el servidor rechaza un envío, nada se borra: queda en «Requiere atención» con el motivo, y el técnico decide si lo reintenta, lo corrige o lo descarta.",
      en: "If the server rejects a submission, nothing is deleted: it stays under “Needs attention” with the reason, and the technician decides whether to retry, fix or discard it.",
      pt: "Se o servidor rejeitar um envio, nada é apagado: ele fica em “Requer atenção” com o motivo, e o técnico decide se tenta de novo, corrige ou descarta.",
      fr: "Si le serveur rejette un envoi, rien n'est supprimé : il reste dans « Nécessite une action » avec le motif, et le technicien décide de le relancer, de le corriger ou de l'abandonner.",
    },
  ],
  nextSteps: {
    es: "Compilar y probar la app en iOS, hacer que la cámara del teléfono abra la app al escanear una etiqueta (hoy abre la web) y construir el módulo de egresos.",
    en: "Build and test the app on iOS, make the phone's camera open the app when scanning a label (today it opens the web app) and build the expenses module.",
    pt: "Compilar e testar o app no iOS, fazer a câmera do celular abrir o app ao escanear uma etiqueta (hoje abre a versão web) e desenvolver o módulo de despesas.",
    fr: "Compiler et tester l'application sur iOS, faire en sorte que l'appareil photo du téléphone ouvre l'application en scannant une étiquette (aujourd'hui il ouvre la version web) et développer le module des dépenses.",
  },
  lastUpdated: "2026-11-02",
};
