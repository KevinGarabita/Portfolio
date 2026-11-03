/**
 * The raw palette for places CSS variables cannot reach: the generated link-preview
 * images (next/og only takes plain values) and the viewport theme colour. Keep it in
 * sync with section 2 of src/app/globals.css; components use the CSS roles instead.
 */
export const brandColors = {
  blackDeep: "#0a0a0b",
  blackSurface: "#121214",
  blackLine: "#27272b",
  grayText: "#a3a3a8",
  whiteWarm: "#f4f3ee",
  royal: "#1a43cf",
  royalInk: "#6b8cff",
  navy: "#0b1a3a",
} as const;
