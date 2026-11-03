/**
 * The raw palette for places CSS variables cannot reach: the generated link-preview
 * images (next/og only takes plain values) and the viewport theme colour. Keep it in
 * sync with section 2 of src/app/globals.css; components use the CSS roles instead.
 */
export const brandColors = {
  blackDeep: "#0b0a09",
  blackSurface: "#151311",
  blackLine: "#2c2824",
  grayText: "#aaa39b",
  whiteWarm: "#f6f3ee",
  orangeVibrant: "#ff6a00",
  redSignal: "#e5252a",
} as const;
