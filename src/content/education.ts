import type { Education } from "@/types/content";

/** Studies. Source: Kevin's CV. */
export const education: Education[] = [
  {
    id: "universidad-modelo",
    degree: {
      es: "Ingeniería en Desarrollo de Tecnologías y Software",
      en: "Software and Technology Development Engineering",
    },
    institution: "Universidad Modelo",
    location: { es: "Cholul, Yucatán", en: "Cholul, Yucatán" },
    period: { start: "2023-08" },
    note: { es: "7.º semestre", en: "7th semester" },
    expectedGraduation: "2027-08",
  },
];
