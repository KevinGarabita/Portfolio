import { sameInEveryLanguage } from "@/i18n/localize";
import type { Project } from "@/types/content";

const imageDir = "/images/projects/controltec-pest-control-crm";

/** Pest control CRM built for Controltec Fumigaciones (freelance). */
export const controltecPestControlCrm: Project = {
  slug: "controltec-pest-control-crm",
  name: {
    es: "CRM para control de plagas",
    en: "Pest Control CRM",
    pt: "CRM para controle de pragas",
    fr: "CRM de lutte antiparasitaire",
  },
  client: "Controltec Fumigaciones",
  category: "freelance",
  context: sameInEveryLanguage("Freelance"),
  status: "in-development",
  statusNote: {
    es: "Entrega prevista: diciembre 2026",
    en: "Expected delivery: December 2026",
    pt: "Entrega prevista: dezembro de 2026",
    fr: "Livraison prévue : décembre 2026",
  },
  period: { start: "2026-07" },
  kind: "web-app",
  isFeatured: true,
  buildMethod: "ai-assisted",
  teamSetup: "individual",
  summary: {
    es: "CRM para una empresa de control de plagas. Los técnicos escanean el QR de cada estación y llenan el reporte en sitio, la oficina agenda y cotiza, y cada cliente consulta en un portal sus reportes firmados.",
    en: "CRM for a pest control company. Technicians scan the QR code on each station and fill in the report on-site, the office schedules and quotes, and each client checks their signed reports in a portal.",
    pt: "CRM para uma empresa de controle de pragas. Os técnicos escaneiam o QR code de cada estação e preenchem o relatório no local, o escritório agenda e faz orçamentos, e cada cliente consulta seus relatórios assinados em um portal.",
    fr: "CRM pour une entreprise de lutte antiparasitaire. Les techniciens scannent le QR code de chaque station et remplissent le rapport sur place, le bureau planifie et établit les devis, et chaque client consulte ses rapports signés dans un portail.",
  },
  problem: {
    es: "En una auditoría sanitaria, una empresa de control de plagas tiene que demostrar qué pasó en cada visita: qué estaciones se revisaron, qué se encontró, qué producto se aplicó y quién firmó. El reporte de servicio era el formato impreso de la empresa y el certificado de control de plagas se expedía a mano. Además, los técnicos trabajan en bodegas y sótanos donde la señal se pierde.",
    en: "In a health audit, a pest control company has to prove what happened at every visit: which stations were checked, what was found, which product was applied and who signed. The service report was the company's printed form, and the pest control certificate was issued by hand. On top of that, technicians work in warehouses and basements where the signal drops.",
    pt: "Em uma auditoria sanitária, uma empresa de controle de pragas precisa comprovar o que aconteceu em cada visita: quais estações foram verificadas, o que foi encontrado, qual produto foi aplicado e quem assinou. O relatório de serviço era o formulário impresso da empresa, e o certificado de controle de pragas era emitido à mão. Além disso, os técnicos trabalham em depósitos e subsolos onde o sinal cai.",
    fr: "Lors d'un audit sanitaire, une entreprise de lutte antiparasitaire doit prouver ce qui s'est passé à chaque visite : quelles stations ont été contrôlées, ce qui a été trouvé, quel produit a été appliqué et qui a signé. Le rapport d'intervention était le formulaire papier de l'entreprise, et le certificat de lutte antiparasitaire était rédigé à la main. De plus, les techniciens travaillent dans des entrepôts et des sous-sols où le signal se perd.",
  },
  solution: {
    es: "Una sola API en FastAPI atiende a una web con tres vistas y a una app móvil. En la oficina se agenda, se lleva la cartera de clientes con sus direcciones y estaciones, se cotiza y se da seguimiento a los cobros. En campo, el técnico abre su jornada, escanea el QR de cada estación y completa el reporte en cuatro pasos: estaciones, productos aplicados, evidencias y firmas del cliente y del técnico. Al firmar, el sistema archiva el PDF, emite el certificado cuando corresponde y avisa al cliente por WhatsApp. En el portal, cada cliente consulta sus servicios, sus próximas visitas, sus estaciones y sus certificados.",
    en: "A single FastAPI API serves a web app with three views and a mobile app. In the office, staff schedule visits, manage clients with their addresses and stations, prepare quotes and follow up on payments. In the field, the technician opens their day, scans the QR code on each station and completes the report in four steps: stations, applied products, evidence, and the client's and technician's signatures. On signing, the system archives the PDF, issues the certificate when it applies and notifies the client on WhatsApp. In the portal, each client checks their services, upcoming visits, stations and certificates.",
    pt: "Uma única API em FastAPI atende a uma aplicação web com três visões e a um app móvel. No escritório, a equipe agenda as visitas, gerencia os clientes com seus endereços e estações, faz orçamentos e acompanha os pagamentos. Em campo, o técnico abre sua jornada, escaneia o QR code de cada estação e completa o relatório em quatro etapas: estações, produtos aplicados, comprovações e assinaturas do cliente e do técnico. Ao assinar, o sistema arquiva o PDF, emite o certificado quando for o caso e avisa o cliente pelo WhatsApp. No portal, cada cliente consulta seus serviços, as próximas visitas, suas estações e seus certificados.",
    fr: "Une seule API FastAPI dessert une application web à trois vues et une application mobile. Au bureau, l'équipe planifie les visites, gère les clients avec leurs adresses et leurs stations, établit les devis et suit les paiements. Sur le terrain, le technicien ouvre sa journée, scanne le QR code de chaque station et complète le rapport en quatre étapes : stations, produits appliqués, justificatifs et signatures du client et du technicien. À la signature, le système archive le PDF, émet le certificat lorsque c'est nécessaire et prévient le client sur WhatsApp. Dans le portail, chaque client consulte ses interventions, ses prochaines visites, ses stations et ses certificats.",
  },
  role: {
    es: "Desarrollo el proyecto solo, de punta a punta. Diseñé la base de datos en Supabase (PostgreSQL) y la mantengo con migraciones versionadas; construí la API en FastAPI, organizada por módulos de negocio; implementé la web en React, TypeScript y Material UI a partir de un prototipo en Figma, y la app de campo con Expo y React Native. Integré WhatsApp Cloud API y Google Maps, configuré el despliegue en Render y escribí más de mil pruebas automatizadas para el backend.",
    en: "I build the project on my own, end to end. I designed the database in Supabase (PostgreSQL) and maintain it through versioned migrations; built the FastAPI API, organized by business module; implemented the web app in React, TypeScript and Material UI from a Figma prototype, and the field app with Expo and React Native. I integrated the WhatsApp Cloud API and Google Maps, set up the deployment on Render and wrote more than a thousand automated tests for the backend.",
    pt: "Desenvolvo o projeto sozinho, de ponta a ponta. Projetei o banco de dados no Supabase (PostgreSQL) e o mantenho com migrações versionadas; construí a API em FastAPI, organizada por módulos de negócio; implementei a aplicação web em React, TypeScript e Material UI a partir de um protótipo no Figma, e o app de campo com Expo e React Native. Integrei a WhatsApp Cloud API e o Google Maps, configurei o deploy no Render e escrevi mais de mil testes automatizados para o backend.",
    fr: "Je développe le projet seul, de bout en bout. J'ai conçu la base de données dans Supabase (PostgreSQL) et je la fais évoluer avec des migrations versionnées ; j'ai construit l'API FastAPI, organisée par modules métier ; j'ai réalisé l'application web en React, TypeScript et Material UI à partir d'un prototype Figma, ainsi que l'application de terrain avec Expo et React Native. J'ai intégré la WhatsApp Cloud API et Google Maps, configuré le déploiement sur Render et écrit plus de mille tests automatisés pour le backend.",
  },
  results: [
    {
      es: "El cliente contrató también el mantenimiento.",
      en: "The client also contracted ongoing maintenance.",
      pt: "O cliente também contratou a manutenção.",
      fr: "Le client a également souscrit la maintenance.",
    },
  ],
  highlights: [
    {
      es: "Cada estación de control lleva una etiqueta con código QR. El técnico la escanea y registra en sitio el hallazgo (por ejemplo, el consumo del cebo), el estado del dispositivo, las plagas encontradas y una fotografía. El reporte no se puede firmar mientras falte una estación del servicio.",
      en: "Each control station has a QR label. The technician scans it and records on-site the finding (for example, bait consumption), the device's condition, the pests found and a photo. The report cannot be signed while a station of the service is still missing.",
      pt: "Cada estação de controle tem uma etiqueta com QR code. O técnico a escaneia e registra no local a constatação (por exemplo, o consumo da isca), o estado do dispositivo, as pragas encontradas e uma foto. O relatório não pode ser assinado enquanto faltar alguma estação do serviço.",
      fr: "Chaque station de contrôle porte une étiquette avec un QR code. Le technicien la scanne et enregistre sur place le constat (par exemple, la consommation d'appât), l'état du dispositif, les nuisibles trouvés et une photo. Le rapport ne peut pas être signé tant qu'il manque une station de l'intervention.",
    },
    {
      es: "Cuando firman el cliente y el técnico, el sistema genera el PDF con el formato de la empresa y lo archiva sin cambios: es la evidencia que se presenta en una auditoría. Si el cliente es persona moral y se aplicaron productos, también emite el certificado de control de plagas con la firma del propietario.",
      en: "Once the client and the technician sign, the system generates the PDF in the company's format and archives it unchanged: it is the evidence shown in an audit. If the client is a legal entity and products were applied, it also issues the pest control certificate with the owner's signature.",
      pt: "Quando o cliente e o técnico assinam, o sistema gera o PDF no formato da empresa e o arquiva sem alterações: é a evidência apresentada em uma auditoria. Se o cliente for pessoa jurídica e houver aplicação de produtos, também emite o certificado de controle de pragas com a assinatura do proprietário.",
      fr: "Une fois que le client et le technicien ont signé, le système génère le PDF au format de l'entreprise et l'archive sans modification : c'est la preuve présentée lors d'un audit. Si le client est une personne morale et que des produits ont été appliqués, il émet aussi le certificat de lutte antiparasitaire avec la signature du propriétaire.",
    },
    {
      es: "Integré la API de WhatsApp Cloud de Meta para enviar una plantilla al cliente cuando se firma su reporte, y Google Maps para ubicar en el mapa las direcciones de los clientes y abrir la ruta desde el teléfono del técnico.",
      en: "I integrated Meta's WhatsApp Cloud API to send the client a template message when their report is signed, and Google Maps to pin client addresses on the map and open directions from the technician's phone.",
      pt: "Integrei a WhatsApp Cloud API da Meta para enviar ao cliente uma mensagem de modelo quando o relatório dele é assinado, e o Google Maps para marcar no mapa os endereços dos clientes e abrir a rota no celular do técnico.",
      fr: "J'ai intégré la WhatsApp Cloud API de Meta pour envoyer au client un message modèle lorsque son rapport est signé, et Google Maps pour situer les adresses des clients sur la carte et ouvrir l'itinéraire depuis le téléphone du technicien.",
    },
    {
      es: "La app de campo, hecha con Expo y React Native, permite terminar el reporte completo sin señal: guarda cada paso en el teléfono y lo envía sola cuando vuelve la conexión, sin duplicar reportes ni cobros.",
      en: "The field app, built with Expo and React Native, lets the technician finish the whole report without signal: it stores every step on the phone and sends it on its own when the connection returns, without duplicating reports or payments.",
      pt: "O app de campo, feito com Expo e React Native, permite concluir o relatório inteiro sem sinal: guarda cada etapa no celular e a envia sozinho quando a conexão volta, sem duplicar relatórios nem pagamentos.",
      fr: "L'application de terrain, réalisée avec Expo et React Native, permet de terminer tout le rapport sans réseau : elle enregistre chaque étape sur le téléphone et l'envoie d'elle-même au retour de la connexion, sans dupliquer ni rapports ni paiements.",
    },
    {
      es: "La oficina tiene agenda por mes, semana, día y técnico, clientes con sus direcciones y estaciones, cotizaciones en PDF, servicios recurrentes, ingresos y cuentas por cobrar, y estadísticas de plagas y tendencias de estaciones.",
      en: "The office side has a schedule by month, week, day and technician, clients with their addresses and stations, PDF quotes, recurring services, income and receivables, and statistics on pests and station trends.",
      pt: "O escritório tem agenda por mês, semana, dia e técnico, clientes com seus endereços e estações, orçamentos em PDF, serviços recorrentes, receitas e contas a receber, e estatísticas de pragas e tendências das estações.",
      fr: "Côté bureau : un planning par mois, semaine, jour et technicien, les clients avec leurs adresses et leurs stations, des devis en PDF, les interventions récurrentes, les recettes et les créances, et des statistiques sur les nuisibles et l'évolution des stations.",
    },
  ],
  stack: [
    "FastAPI",
    "Python",
    "React",
    "TypeScript",
    "Material UI",
    "Expo",
    "React Native",
    "Supabase",
    "PostgreSQL",
    "Render",
  ],
  integrations: ["WhatsApp Cloud API (Meta)", "Google Maps"],
  images: [
    {
      src: `${imageDir}/office-dashboard.webp`,
      alt: {
        es: "Tablero de oficina con datos de ejemplo: servicios de la semana, servicios por día y carga por técnico",
        en: "Office dashboard with sample data: the week's services, services per day and workload per technician",
        pt: "Painel do escritório com dados de exemplo: serviços da semana, serviços por dia e carga por técnico",
        fr: "Tableau de bord du bureau avec des données d'exemple : interventions de la semaine, interventions par jour et charge par technicien",
      },
      width: 1440,
      height: 900,
      viewport: "desktop",
    },
    {
      src: `${imageDir}/weekly-schedule.webp`,
      alt: {
        es: "Agenda semanal con servicios de ejemplo, de colores según su estado",
        en: "Weekly schedule with sample services, colored by status",
        pt: "Agenda semanal com serviços de exemplo, coloridos conforme o status",
        fr: "Planning hebdomadaire avec des interventions d'exemple, colorées selon leur statut",
      },
      width: 1440,
      height: 900,
      viewport: "desktop",
    },
    {
      src: `${imageDir}/field-report-stations.webp`,
      alt: {
        es: "Paso de estaciones del reporte de campo con datos de ejemplo: tres de seis estaciones capturadas",
        en: "Stations step of the field report with sample data: three of six stations recorded",
        pt: "Etapa de estações do relatório de campo com dados de exemplo: três de seis estações registradas",
        fr: "Étape des stations du rapport de terrain avec des données d'exemple : trois stations sur six enregistrées",
      },
      width: 750,
      height: 1624,
      viewport: "mobile",
    },
    {
      src: `${imageDir}/station-inspection-form.webp`,
      alt: {
        es: "Formulario de inspección de una estación con datos de ejemplo: hallazgo, estado del dispositivo y plaga detectada",
        en: "Station inspection form with sample data: finding, device condition and detected pest",
        pt: "Formulário de inspeção de uma estação com dados de exemplo: constatação, estado do dispositivo e praga detectada",
        fr: "Formulaire d'inspection d'une station avec des données d'exemple : constat, état du dispositif et nuisible détecté",
      },
      width: 750,
      height: 1624,
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
      es: "Un reporte firmado no se edita: el PDF se archiva al momento de firmar y no se vuelve a generar con catálogos que pudieron cambiar después.",
      en: "A signed report is never edited: the PDF is archived at signing time and is not regenerated from catalogs that may have changed since.",
      pt: "Um relatório assinado nunca é editado: o PDF é arquivado no momento da assinatura e não é gerado de novo com catálogos que possam ter mudado depois.",
      fr: "Un rapport signé n'est jamais modifié : le PDF est archivé au moment de la signature et n'est pas régénéré à partir de catalogues qui auraient pu changer depuis.",
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
      es: "El aviso por WhatsApp corre en segundo plano después de responder: si falla, el reporte queda firmado igual. Solo reintenta, hasta tres veces, los errores transitorios.",
      en: "The WhatsApp notice runs in the background after the response is sent: if it fails, the report is still signed. Only transient errors are retried, up to three times.",
      pt: "O aviso pelo WhatsApp roda em segundo plano depois da resposta: se falhar, o relatório continua assinado. Só os erros temporários são repetidos, até três vezes.",
      fr: "L'avis WhatsApp s'exécute en arrière-plan après l'envoi de la réponse : s'il échoue, le rapport reste signé. Seules les erreurs temporaires sont relancées, jusqu'à trois fois.",
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
    es: "Lo que sigue: compilar y probar la app en iOS, hacer que la cámara del teléfono abra la app al escanear una etiqueta (hoy abre la web) y construir el módulo de egresos.",
    en: "Next: build and test the app on iOS, make the phone's camera open the app when scanning a label (today it opens the web app) and build the expenses module.",
    pt: "Próximos passos: compilar e testar o app no iOS, fazer a câmera do celular abrir o app ao escanear uma etiqueta (hoje abre a versão web) e desenvolver o módulo de despesas.",
    fr: "Prochaines étapes : compiler et tester l'application sur iOS, faire en sorte que l'appareil photo du téléphone ouvre l'application en scannant une étiquette (aujourd'hui il ouvre la version web) et développer le module des dépenses.",
  },
  lastUpdated: "2026-10-09",
};
