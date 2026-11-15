import { sameInEveryLanguage } from "@/i18n/localize";
import type { Project, ProjectImage } from "@/types/content";

const imageDir = "/images/projects/fumigaciones-controltec-website";

/** Desktop screenshots of the live site, taken at 1440 × 900 on 15 November 2026. */
function desktopScreenshot(
  file: string,
  alt: ProjectImage["alt"],
): ProjectImage {
  return {
    src: `${imageDir}/${file}`,
    alt,
    width: 1440,
    height: 900,
    viewport: "desktop",
  };
}

/** Phone screenshots of the live site, taken at 390 × 844 (2x) on 15 November 2026. */
function phoneScreenshot(file: string, alt: ProjectImage["alt"]): ProjectImage {
  return {
    src: `${imageDir}/${file}`,
    alt,
    width: 780,
    height: 1688,
    viewport: "mobile",
  };
}

/** Screenshots of the previous site, supplied by Kevin (1440 px wide). */
function previousSiteScreenshot(
  file: string,
  height: number,
  alt: ProjectImage["alt"],
): ProjectImage {
  return {
    src: `${imageDir}/${file}`,
    alt,
    width: 1440,
    height,
    viewport: "desktop",
  };
}

const heroDesktop = desktopScreenshot("hero-desktop.webp", {
  es: "Portada del sitio en escritorio: video de un técnico fumigando un jardín, el título «Fumigación en Mérida: adiós a las plagas. Hola a la tranquilidad.», los botones de WhatsApp y llamada, y tres reseñas de Google",
  en: "Home page on a desktop: a video of a technician spraying a garden, the headline “Fumigación en Mérida: adiós a las plagas. Hola a la tranquilidad.”, the WhatsApp and call buttons, and three Google reviews",
  pt: "Página inicial no computador: vídeo de um técnico dedetizando um jardim, o título “Fumigación en Mérida: adiós a las plagas. Hola a la tranquilidad.”, os botões de WhatsApp e ligação e três avaliações do Google",
  fr: "Page d'accueil sur ordinateur : vidéo d'un technicien traitant un jardin, le titre « Fumigación en Mérida: adiós a las plagas. Hola a la tranquilidad. », les boutons WhatsApp et appel, et trois avis Google",
});

const heroPhone = phoneScreenshot("hero-phone.webp", {
  es: "Portada del sitio en el teléfono: el técnico con su equipo, el título y los botones «Agendar por WhatsApp» y «Llamar»",
  en: "Home page on a phone: the technician with his equipment, the headline and the “Agendar por WhatsApp” and “Llamar” buttons",
  pt: "Página inicial no celular: o técnico com seu equipamento, o título e os botões “Agendar por WhatsApp” e “Llamar”",
  fr: "Page d'accueil sur téléphone : le technicien avec son équipement, le titre et les boutons « Agendar por WhatsApp » et « Llamar »",
});

const pestsDesktop = desktopScreenshot("pests-desktop.webp", {
  es: "Sección «¿Qué plaga necesitas eliminar?»: tarjetas con foto de cucarachas, termitas, roedores y alacranes, cada una con su botón de WhatsApp",
  en: "“¿Qué plaga necesitas eliminar?” section: photo cards for cockroaches, termites, rodents and scorpions, each with its WhatsApp button",
  pt: "Seção “¿Qué plaga necesitas eliminar?”: cartões com foto de baratas, cupins, roedores e escorpiões, cada um com seu botão de WhatsApp",
  fr: "Section « ¿Qué plaga necesitas eliminar? » : cartes avec photo de cafards, termites, rongeurs et scorpions, chacune avec son bouton WhatsApp",
});

const contactDesktop = desktopScreenshot("contact-desktop.webp", {
  es: "Cierre del sitio en azul: «El problema no se va solo. Agenda hoy.», el teléfono en grande, botones de llamada y WhatsApp, y el formulario de cotización",
  en: "Closing section in blue: “El problema no se va solo. Agenda hoy.”, the phone number in large type, call and WhatsApp buttons, and the quote form",
  pt: "Fechamento do site em azul: “El problema no se va solo. Agenda hoy.”, o telefone em destaque, botões de ligação e WhatsApp e o formulário de orçamento",
  fr: "Section finale en bleu : « El problema no se va solo. Agenda hoy. », le numéro en grand, les boutons appel et WhatsApp, et le formulaire de devis",
});

/**
 * Website for Fumigaciones Controltec, a pest control company in Mérida (freelance),
 * live at fumigacionescontroltec.com since November 2026. It replaced a template site
 * from a business directory; the screenshots of that site came from Kevin. The facts
 * and scores come from the site's repository (controlTec-LandingPage) and its README.
 */
export const fumigacionesControltecWebsite: Project = {
  slug: "fumigaciones-controltec-website",
  name: {
    es: "Sitio web de Fumigaciones Controltec",
    en: "Fumigaciones Controltec Website",
    pt: "Site da Fumigaciones Controltec",
    fr: "Site web de Fumigaciones Controltec",
  },
  client: "Fumigaciones Controltec",
  category: "freelance",
  context: sameInEveryLanguage("Freelance"),
  status: "in-production",
  statusNote: {
    es: "en línea desde noviembre de 2026",
    en: "live since November 2026",
    pt: "no ar desde novembro de 2026",
    fr: "en ligne depuis novembre 2026",
  },
  period: { start: "2026-10", end: "2026-11" },
  kind: "website",
  isFeatured: true,
  teamSetup: "individual",
  tagline: {
    es: "Sitio para una fumigadora de Mérida, hecho para que cada visita termine en WhatsApp.",
    en: "A site for a pest control company in Mérida, built so every visit ends on WhatsApp.",
    pt: "Site para uma dedetizadora de Mérida, feito para cada visita terminar no WhatsApp.",
    fr: "Site d'un désinsectiseur de Mérida, conçu pour que chaque visite finisse sur WhatsApp.",
  },
  summary: {
    es: "Rediseñé el sitio de una empresa de control de plagas en Mérida: rápido en el teléfono, con una página por plaga para aparecer en Google y WhatsApp a un toque en cada sección.",
    en: "I rebuilt the website of a pest control company in Mérida: fast on phones, with a page per pest to show up on Google and WhatsApp one tap away in every section.",
    pt: "Refiz o site de uma empresa de controle de pragas em Mérida: rápido no celular, com uma página por praga para aparecer no Google e o WhatsApp a um toque em cada seção.",
    fr: "J'ai refait le site d'une entreprise antiparasitaire à Mérida : rapide sur téléphone, une page par nuisible pour Google et WhatsApp à portée de doigt partout.",
  },
  problem: {
    es: "El sitio anterior era una plantilla genérica de un directorio: foto de stock, las plagas en listas sin detalle, ninguna página por servicio y un formulario que solo llegaba al correo.",
    en: "The previous site was a generic template from a business directory: a stock photo, pests in bare lists, no page per service and a form that only reached an inbox.",
    pt: "O site anterior era um modelo genérico de um diretório: foto de banco de imagens, pragas em listas sem detalhe, nenhuma página por serviço e um formulário que só chegava ao e-mail.",
    fr: "L'ancien site était un modèle générique d'annuaire : photo de banque d'images, nuisibles en simples listes, aucune page par service et un formulaire qui n'arrivait que par e-mail.",
  },
  solution: {
    es: "Un sitio nuevo en Next.js, servido desde Cloudflare: video en la portada, una página por plaga, fotos de trabajos reales, mapa y una cotización que abre WhatsApp con el mensaje listo.",
    en: "A new Next.js site served from Cloudflare: a video on the home page, a page per pest, photos of real jobs, a map and a quote form that opens WhatsApp with the message ready.",
    pt: "Um site novo em Next.js, servido pela Cloudflare: vídeo na página inicial, uma página por praga, fotos de trabalhos reais, mapa e um orçamento que abre o WhatsApp com a mensagem pronta.",
    fr: "Un nouveau site Next.js servi par Cloudflare : une vidéo en accueil, une page par nuisible, des photos de vrais chantiers, une carte et un devis qui ouvre WhatsApp, message prêt.",
  },
  howItWorks: [
    {
      es: "Todo el sitio se exporta como HTML estático y se sirve desde Cloudflare, así que no hay un servidor que mantener y el hospedaje no cuesta. Lo único con código en el servidor es una función pequeña que atiende la cotización cuando el navegador no tiene JavaScript y sirve los videos por rangos de bytes, que Safari en iPhone necesita para reproducirlos.",
      en: "The whole site is exported as static HTML and served from Cloudflare, so there is no server to maintain and hosting costs nothing. The only server code is a small function that handles the quote form when the browser has no JavaScript and serves the videos by byte ranges, which Safari on iPhone needs to play them.",
      pt: "O site inteiro é exportado como HTML estático e servido pela Cloudflare, então não há servidor para manter e a hospedagem não custa nada. O único código no servidor é uma função pequena que atende o orçamento quando o navegador não tem JavaScript e serve os vídeos por intervalos de bytes, que o Safari no iPhone precisa para reproduzi-los.",
      fr: "Tout le site est exporté en HTML statique et servi par Cloudflare : aucun serveur à maintenir et un hébergement gratuit. Le seul code côté serveur est une petite fonction qui traite le devis quand le navigateur n'a pas JavaScript et sert les vidéos par plages d'octets, ce dont Safari sur iPhone a besoin pour les lire.",
    },
    {
      es: "La portada pinta primero la foto y pide el video hasta que la página terminó de cargar, para no quitarle ancho de banda en datos móviles. Solo el formulario, las flechas de las reseñas, la analítica y ese video usan JavaScript en el navegador; las imágenes se generan en WebP en varios anchos antes de publicar.",
      en: "The home page paints the photo first and only requests the video once the page has loaded, so it never competes for bandwidth on mobile data. Only the form, the review arrows, the analytics and that video use JavaScript in the browser; images are generated as WebP in several widths before publishing.",
      pt: "A página inicial mostra primeiro a foto e só pede o vídeo depois que a página terminou de carregar, para não disputar banda nos dados móveis. Só o formulário, as setas das avaliações, a análise de visitas e esse vídeo usam JavaScript no navegador; as imagens são geradas em WebP em várias larguras antes de publicar.",
      fr: "La page d'accueil affiche d'abord la photo et ne demande la vidéo qu'une fois la page chargée, pour ne pas lui voler de bande passante en données mobiles. Seuls le formulaire, les flèches des avis, la mesure d'audience et cette vidéo utilisent JavaScript ; les images sont générées en WebP en plusieurs largeurs avant la mise en ligne.",
    },
    {
      es: "Cada plaga y la sección para negocios tienen su propia página con su título, su descripción y datos estructurados de negocio local, y el nombre, la dirección y el teléfono son idénticos a los del Perfil de Negocio de Google.",
      en: "Each pest and the business section have their own page with its title, description and local business structured data, and the name, address and phone number match the Google Business Profile exactly.",
      pt: "Cada praga e a seção para empresas têm sua própria página com título, descrição e dados estruturados de negócio local, e o nome, o endereço e o telefone são idênticos aos do Perfil da Empresa no Google.",
      fr: "Chaque nuisible et la section entreprises ont leur propre page avec titre, description et données structurées d'entreprise locale, et le nom, l'adresse et le téléphone sont identiques à ceux de la fiche d'établissement Google.",
    },
  ],
  role: {
    es: "Lo hice solo, de punta a punta: diseño a partir de Figma, desarrollo en Next.js, textos y SEO local, y la publicación en Cloudflare con el dominio de la empresa.",
    en: "I did it on my own, end to end: the design from Figma, the Next.js build, the copy and local SEO, and publishing it on Cloudflare under the company's domain.",
    pt: "Fiz sozinho, de ponta a ponta: o design a partir do Figma, o desenvolvimento em Next.js, os textos e o SEO local, e a publicação na Cloudflare com o domínio da empresa.",
    fr: "Je l'ai fait seul, de bout en bout : le design depuis Figma, le développement Next.js, les textes et le SEO local, et la mise en ligne sur Cloudflare avec le domaine de l'entreprise.",
  },
  results: [
    {
      es: "En línea en el dominio de la empresa, sin pagar hospedaje: se sirve desde el plan gratuito de Cloudflare.",
      en: "Live on the company's domain with no hosting bill: it is served from Cloudflare's free plan.",
      pt: "No ar no domínio da empresa, sem pagar hospedagem: é servido pelo plano gratuito da Cloudflare.",
      fr: "En ligne sur le domaine de l'entreprise, sans frais d'hébergement : il est servi par l'offre gratuite de Cloudflare.",
    },
    {
      es: "Lighthouse en teléfono: 96 de rendimiento y 100 en accesibilidad, buenas prácticas y SEO.",
      en: "Lighthouse on mobile: 96 for performance and 100 for accessibility, best practices and SEO.",
      pt: "Lighthouse no celular: 96 de desempenho e 100 em acessibilidade, boas práticas e SEO.",
      fr: "Lighthouse sur mobile : 96 en performance et 100 en accessibilité, bonnes pratiques et SEO.",
    },
    {
      es: "Ocho plagas con su propia página, listas para búsquedas como «fumigación de termitas en Mérida».",
      en: "Eight pests with their own page, ready for searches such as “termite fumigation in Mérida”.",
      pt: "Oito pragas com página própria, prontas para buscas como “dedetização de cupins em Mérida”.",
      fr: "Huit nuisibles avec leur propre page, prêtes pour des recherches comme « traitement termites Mérida ».",
    },
  ],
  highlights: [],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Cloudflare Workers",
  ],
  integrations: ["WhatsApp", "Google Maps"],
  // The first image is the project card's and the share image's; the case study shows
  // the hero in its own frame and leaves it out of the gallery.
  images: [
    heroDesktop,
    desktopScreenshot("process-desktop.webp", {
      es: "Sección «Así trabajamos»: foto del dueño con el uniforme de la empresa y los cuatro pasos del servicio, de la llamada al seguimiento",
      en: "“Así trabajamos” section: a photo of the owner in the company uniform and the four steps of the service, from the call to the follow-up",
      pt: "Seção “Así trabajamos”: foto do dono com o uniforme da empresa e as quatro etapas do serviço, da ligação ao acompanhamento",
      fr: "Section « Así trabajamos » : photo du patron en uniforme et les quatre étapes du service, de l'appel au suivi",
    }),
    desktopScreenshot("work-gallery-desktop.webp", {
      es: "Galería «Llegamos hasta donde se esconde la plaga»: fotos de trabajos reales en techos, gimnasios, jardines y autobuses",
      en: "“Llegamos hasta donde se esconde la plaga” gallery: photos of real jobs on ceilings, in gyms, gardens and buses",
      pt: "Galeria “Llegamos hasta donde se esconde la plaga”: fotos de trabalhos reais em forros, academias, jardins e ônibus",
      fr: "Galerie « Llegamos hasta donde se esconde la plaga » : photos de vrais chantiers dans des plafonds, salles de sport, jardins et bus",
    }),
    phoneScreenshot("pests-phone.webp", {
      es: "Plagas en el teléfono: una fila por plaga con su foto y un botón de WhatsApp, y la barra fija de llamar y WhatsApp abajo",
      en: "Pests on a phone: one row per pest with its photo and a WhatsApp button, and the fixed call and WhatsApp bar at the bottom",
      pt: "Pragas no celular: uma linha por praga com foto e botão de WhatsApp, e a barra fixa de ligação e WhatsApp embaixo",
      fr: "Nuisibles sur téléphone : une ligne par nuisible avec sa photo et un bouton WhatsApp, et la barre fixe appel et WhatsApp en bas",
    }),
    phoneScreenshot("contact-phone.webp", {
      es: "Cierre en el teléfono: el número en grande, los botones «Llamar ahora» y WhatsApp, horario, dirección y formas de pago",
      en: "Closing section on a phone: the number in large type, the “Llamar ahora” and WhatsApp buttons, hours, address and payment methods",
      pt: "Fechamento no celular: o número em destaque, os botões “Llamar ahora” e WhatsApp, horário, endereço e formas de pagamento",
      fr: "Section finale sur téléphone : le numéro en grand, les boutons « Llamar ahora » et WhatsApp, horaires, adresse et moyens de paiement",
    }),
    desktopScreenshot("service-area-desktop.webp", {
      es: "Sección «Dónde trabajamos»: municipios atendidos, dirección, horario y el mapa de Google con el botón para abrir la ruta",
      en: "“Dónde trabajamos” section: the towns served, address, hours and the Google map with a button to open directions",
      pt: "Seção “Dónde trabajamos”: municípios atendidos, endereço, horário e o mapa do Google com o botão para abrir a rota",
      fr: "Section « Dónde trabajamos » : communes desservies, adresse, horaires et la carte Google avec un bouton pour l'itinéraire",
    }),
  ],
  links: [
    {
      label: sameInEveryLanguage("fumigacionescontroltec.com"),
      url: "https://fumigacionescontroltec.com/",
      kind: "live-site",
    },
  ],
  website: {
    url: "https://fumigacionescontroltec.com/",
    hero: { desktop: heroDesktop, phone: heroPhone },
    features: [
      {
        title: {
          es: "WhatsApp a un toque",
          en: "WhatsApp one tap away",
          pt: "WhatsApp a um toque",
          fr: "WhatsApp en un geste",
        },
        text: {
          es: "Cada plaga y el formulario de cotización abren WhatsApp con el mensaje ya escrito. En el teléfono, llamar y WhatsApp siempre están abajo.",
          en: "Every pest and the quote form open WhatsApp with the message already written. On phones, call and WhatsApp are always at the bottom.",
          pt: "Cada praga e o formulário de orçamento abrem o WhatsApp com a mensagem já escrita. No celular, ligar e WhatsApp ficam sempre embaixo.",
          fr: "Chaque nuisible et le formulaire de devis ouvrent WhatsApp avec le message déjà écrit. Sur téléphone, appel et WhatsApp restent en bas.",
        },
      },
      {
        title: {
          es: "Una página por plaga",
          en: "A page per pest",
          pt: "Uma página por praga",
          fr: "Une page par nuisible",
        },
        text: {
          es: "Cucarachas, termitas, roedores, alacranes y más tienen su propia página, escrita para lo que la gente de Mérida busca en Google.",
          en: "Cockroaches, termites, rodents, scorpions and more each have their own page, written for what people in Mérida search on Google.",
          pt: "Baratas, cupins, roedores, escorpiões e outras têm sua própria página, escrita para o que as pessoas de Mérida buscam no Google.",
          fr: "Cafards, termites, rongeurs, scorpions et d'autres ont leur propre page, écrite pour ce que les habitants de Mérida cherchent sur Google.",
        },
      },
      {
        title: {
          es: "Confianza a la vista",
          en: "Trust up front",
          pt: "Confiança à vista",
          fr: "La confiance d'emblée",
        },
        text: {
          es: "Licencia sanitaria, más de 20 años, reseñas de Google, el dueño en persona y fotos de trabajos reales, antes de que el cliente pregunte.",
          en: "Health license, over 20 years in business, Google reviews, the owner in person and photos of real jobs, before the client has to ask.",
          pt: "Licença sanitária, mais de 20 anos, avaliações do Google, o dono em pessoa e fotos de trabalhos reais, antes que o cliente pergunte.",
          fr: "Licence sanitaire, plus de 20 ans d'activité, avis Google, le patron en personne et des photos de vrais chantiers, avant toute question.",
        },
      },
      {
        title: {
          es: "Rápido y sin mensualidad",
          en: "Fast, with no monthly fee",
          pt: "Rápido e sem mensalidade",
          fr: "Rapide et sans abonnement",
        },
        text: {
          es: "Se publica como páginas estáticas en Cloudflare: abre rápido con datos móviles y la empresa no paga hospedaje.",
          en: "It is published as static pages on Cloudflare: it opens fast on mobile data and the company pays nothing for hosting.",
          pt: "É publicado como páginas estáticas na Cloudflare: abre rápido nos dados móveis e a empresa não paga hospedagem.",
          fr: "Il est publié en pages statiques sur Cloudflare : il s'ouvre vite en données mobiles et l'entreprise ne paie pas d'hébergement.",
        },
      },
    ],
    comparisons: [
      {
        label: {
          es: "Portada",
          en: "Home page",
          pt: "Página inicial",
          fr: "Accueil",
        },
        before: previousSiteScreenshot("before-hero.webp", 724, {
          es: "Portada del sitio anterior: foto de un técnico con traje de protección, el título en mayúsculas y un solo botón rojo «Contáctanos»",
          en: "Home page of the previous site: a photo of a technician in a protective suit, the headline in capitals and a single red “Contáctanos” button",
          pt: "Página inicial do site anterior: foto de um técnico com traje de proteção, o título em maiúsculas e um único botão vermelho “Contáctanos”",
          fr: "Accueil de l'ancien site : photo d'un technicien en combinaison, le titre en majuscules et un seul bouton rouge « Contáctanos »",
        }),
        after: heroDesktop,
      },
      {
        label: {
          es: "Plagas",
          en: "Pests",
          pt: "Pragas",
          fr: "Nuisibles",
        },
        before: previousSiteScreenshot("before-pests.webp", 726, {
          es: "Plagas en el sitio anterior: fondo rojo con tres tarjetas que solo listan nombres de plagas con viñetas",
          en: "Pests on the previous site: a red background with three cards that only list pest names as bullets",
          pt: "Pragas no site anterior: fundo vermelho com três cartões que só listam nomes de pragas com marcadores",
          fr: "Nuisibles sur l'ancien site : fond rouge et trois cartes qui ne listent que des noms de nuisibles à puces",
        }),
        after: pestsDesktop,
      },
      {
        label: {
          es: "Contacto",
          en: "Contact",
          pt: "Contato",
          fr: "Contact",
        },
        before: previousSiteScreenshot("before-contact.webp", 724, {
          es: "Contacto en el sitio anterior: un formulario de nombre, teléfono, correo y mensaje con un botón «Enviar»",
          en: "Contact on the previous site: a name, phone, email and message form with a “Enviar” button",
          pt: "Contato no site anterior: um formulário de nome, telefone, e-mail e mensagem com um botão “Enviar”",
          fr: "Contact sur l'ancien site : un formulaire nom, téléphone, e-mail et message avec un bouton « Enviar »",
        }),
        after: contactDesktop,
      },
    ],
    scores: {
      values: [
        { category: "performance", score: 96 },
        { category: "accessibility", score: 100 },
        { category: "best-practices", score: 100 },
        { category: "seo", score: 100 },
      ],
      note: {
        es: "Lighthouse 12 en modo teléfono, 12 de noviembre de 2026; el rendimiento es el más bajo de varias mediciones.",
        en: "Lighthouse 12 in mobile mode, 12 November 2026; performance is the lowest of several runs.",
        pt: "Lighthouse 12 no modo celular, 12 de novembro de 2026; o desempenho é o menor de várias medições.",
        fr: "Lighthouse 12 en mode mobile, 12 novembre 2026 ; la performance est la plus basse de plusieurs mesures.",
      },
    },
    videos: [
      {
        network: "instagram",
        url: "https://www.instagram.com/reel/DfvywpOo8j6/",
      },
      {
        network: "tiktok",
        url: "https://www.tiktok.com/@garasoftwaremx/video/7708236375979609350",
      },
    ],
    videoCover: {
      src: `${imageDir}/reel-cover.webp`,
      alt: {
        es: "Cuadro del video: el sitio abierto en un monitor, una laptop y un teléfono sobre un escritorio en penumbra con luz azul",
        en: "Frame of the video: the site open on a monitor, a laptop and a phone on a dim desk lit in blue",
        pt: "Quadro do vídeo: o site aberto em um monitor, um notebook e um celular sobre uma mesa na penumbra com luz azul",
        fr: "Image de la vidéo : le site ouvert sur un écran, un portable et un téléphone sur un bureau dans la pénombre, éclairé en bleu",
      },
      width: 720,
      height: 1280,
      viewport: "mobile",
    },
    videoSummary: {
      es: "Un recorrido corto por el sitio en monitor, laptop y teléfono.",
      en: "A short tour of the site on a monitor, a laptop and a phone.",
      pt: "Um tour rápido pelo site em monitor, notebook e celular.",
      fr: "Une courte visite du site sur écran, portable et téléphone.",
    },
  },
  decisions: [
    {
      es: "Sitio estático en vez de un servidor: no hay nada que se caiga ni que actualizar, y Cloudflare lo sirve desde cerca del visitante.",
      en: "A static site instead of a server: nothing to crash or patch, and Cloudflare serves it from close to the visitor.",
      pt: "Site estático em vez de um servidor: nada para cair nem para atualizar, e a Cloudflare o serve perto do visitante.",
      fr: "Un site statique plutôt qu'un serveur : rien qui tombe en panne ni à mettre à jour, et Cloudflare le sert au plus près du visiteur.",
    },
    {
      es: "Todos los textos, teléfonos y servicios viven en archivos de datos: cambiar un número o agregar una plaga toca un solo archivo.",
      en: "Every text, phone number and service lives in data files: changing a number or adding a pest touches a single file.",
      pt: "Todos os textos, telefones e serviços ficam em arquivos de dados: mudar um número ou adicionar uma praga mexe em um único arquivo.",
      fr: "Tous les textes, numéros et services vivent dans des fichiers de données : changer un numéro ou ajouter un nuisible ne touche qu'un fichier.",
    },
    {
      es: "Nada se inventa: cifras, licencia y reseñas son las que confirmó el negocio, y lo pendiente queda marcado en el código hasta tenerlo.",
      en: "Nothing is made up: figures, license and reviews are the ones the business confirmed, and anything pending stays flagged in the code.",
      pt: "Nada é inventado: números, licença e avaliações são os que o negócio confirmou, e o que falta fica marcado no código até existir.",
      fr: "Rien n'est inventé : chiffres, licence et avis sont ceux confirmés par l'entreprise, et ce qui manque reste signalé dans le code.",
    },
  ],
  lastUpdated: "2026-11-15",
};
