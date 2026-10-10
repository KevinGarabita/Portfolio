import { sameInEveryLanguage } from "@/i18n/localize";
import type { Education } from "@/types/content";

/** Studies. Source: Kevin's CV. */
export const education: Education[] = [
  {
    id: "universidad-modelo",
    degree: {
      es: "Ingeniería en Desarrollo de Tecnologías y Software",
      en: "Software and Technology Development Engineering",
      pt: "Engenharia em Desenvolvimento de Tecnologias e Software",
      fr: "Ingénierie en développement de technologies et de logiciels",
    },
    institution: "Universidad Modelo",
    location: sameInEveryLanguage("Cholul, Yucatán"),
    period: { start: "2023-08" },
    note: {
      es: "7.º semestre",
      en: "7th semester",
      pt: "7º semestre",
      fr: "7e semestre",
    },
    expectedGraduation: "2027-08",
  },
];
