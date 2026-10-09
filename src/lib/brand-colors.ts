/**
 * The raw palette for places CSS variables cannot reach: the generated link-preview
 * images (next/og only takes plain values) and the viewport theme colour. Keep it in
 * sync with section 2 of src/app/globals.css; components use the CSS roles instead.
 */
export const brandColors = {
  blackDeep: "#0a0a0a",
  blackSurface: "#141414",
  blackLine: "#2a2a2a",
  grayText: "#a3a3a3",
  whiteWarm: "#f5f5f5",
  orangeVibrant: "#ff6a00",
  redSignal: "#e5252a",
} as const;
