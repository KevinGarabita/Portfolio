import type { Project } from "@/types/content";

import { koblerHighlights } from "../experience";
import { placeholderText } from "../placeholder";

/** Work done at Kobler y Asociados, shown together as "Proyectos en Kobler". */
export const koblerProjects: Project[] = [
  {
    slug: "motosureste-suzuki-agent",
    name: {
      es: "Agente conversacional para Motosureste Suzuki",
      en: "Conversational agent for Motosureste Suzuki",
    },
    client: "Motosureste Suzuki",
    category: "kobler",
    context: { es: "Kobler y Asociados", en: "Kobler y Asociados" },
    isFeatured: false,
    teamSetup: "team",
    summary: placeholderText(
      "Resumen de una o dos frases para la tarjeta del proyecto.",
    ),
    problem: placeholderText(
      "Problema: el CV indica que los asesores atendían todas las conversaciones. ¿Qué más puedes confirmar de cómo era antes del agente?",
    ),
    solution: placeholderText(
      "Solución: cómo funciona el flujo del agente, a grandes rasgos.",
    ),
    role: placeholderText(
      "Rol: qué parte hiciste tú dentro del equipo de Kobler.",
    ),
    results: [
      placeholderText(
        "Resultado. El CV dice que los asesores dejaron de atender todas las conversaciones; ¿algo más que puedas confirmar?",
      ),
    ],
    highlights: [
      koblerHighlights.fiveAgents,
      koblerHighlights.motosuresteSuzuki,
    ],
    stack: ["n8n", "OpenAI API"],
    integrations: ["GoHighLevel", "WhatsApp"],
    images: [],
    links: [],
    lastUpdated: "2026-10-09",
  },
  {
    slug: "neorgana-agent",
    name: {
      es: "Agente conversacional para Neorgana",
      en: "Conversational agent for Neorgana",
    },
    client: "Neorgana",
    category: "kobler",
    context: { es: "Kobler y Asociados", en: "Kobler y Asociados" },
    isFeatured: false,
    teamSetup: "team",
    summary: placeholderText(
      "Resumen de una o dos frases para la tarjeta del proyecto.",
    ),
    problem: placeholderText(
      "Problema: cómo se agendaban las consultas antes del agente.",
    ),
    solution: placeholderText(
      "Solución: cómo funciona el flujo del agente, a grandes rasgos.",
    ),
    role: placeholderText(
      "Rol: qué parte hiciste tú dentro del equipo de Kobler.",
    ),
    results: [placeholderText("Resultado que puedas confirmar.")],
    highlights: [koblerHighlights.fiveAgents, koblerHighlights.neorgana],
    stack: ["n8n", "OpenAI API"],
    integrations: ["GoHighLevel", "WhatsApp", "Zoom"],
    images: [],
    links: [],
    lastUpdated: "2026-10-09",
  },
];
