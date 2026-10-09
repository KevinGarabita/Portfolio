import { readFile } from "node:fs/promises";
import { join } from "node:path";

import type { ImageResponse } from "next/og";

/**
 * Shared layout of the generated link-preview images (app/[lang]/opengraph-image.tsx and
 * app/[lang]/projects/[slug]/opengraph-image.tsx). next/og only understands flexbox and
 * inline styles, so the design tokens are repeated here as plain values: ink background,
 * off-white text and one solid orange block. No gradients and no photo: with the photo
 * the PNG weighed 470-600 KB, and WhatsApp tends to drop preview images over ~300 KB.
 * Text only, each image is about 50 KB.
 */

const colors = {
  ink: "#15110e",
  heading: "#f9f7f5",
  body: "#e3dfdc",
  muted: "#b2aca7",
  accent: "#e9894b",
};

const fontFamily = "Atkinson Hyperlegible Next";

// Read once per server process. next/og needs TTF or OTF files, not the woff2 that
// next/font serves to browsers.
const [regularFont, boldFont] = await Promise.all([
  readFile(
    join(
      process.cwd(),
      "src/assets/fonts/AtkinsonHyperlegibleNext-Regular.ttf",
    ),
  ),
  readFile(
    join(process.cwd(), "src/assets/fonts/AtkinsonHyperlegibleNext-Bold.ttf"),
  ),
]);

/** 1200×630, the size Facebook, LinkedIn, X and WhatsApp crop the least, plus the fonts. */
export const openGraphImageOptions: ConstructorParameters<
  typeof ImageResponse
>[1] = {
  width: 1200,
  height: 630,
  fonts: [
    { name: fontFamily, data: regularFont, weight: 400, style: "normal" },
    { name: fontFamily, data: boldFont, weight: 700, style: "normal" },
  ],
};

/** Orange square with the "KG" monogram, the same mark as the favicon. */
function Monogram({ size }: { size: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        backgroundColor: colors.accent,
        color: colors.ink,
        fontSize: Math.round(size * 0.46),
        fontWeight: 700,
      }}
    >
      KG
    </div>
  );
}

interface OpenGraphCardProps {
  /** Short line next to the monogram, such as the owner's name on a project card. */
  eyebrow?: string;
  title: string;
  /** 96 for a short title such as the name; smaller for project names that may wrap. */
  titleSize: number;
  subtitle: string;
  footer: string;
}

export function OpenGraphCard({
  eyebrow,
  title,
  titleSize,
  subtitle,
  footer,
}: OpenGraphCardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "72px 80px",
        backgroundColor: colors.ink,
        fontFamily,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Monogram size={eyebrow ? 64 : 88} />
        {eyebrow ? (
          <div
            style={{
              marginLeft: 24,
              fontSize: 32,
              fontWeight: 700,
              color: colors.heading,
            }}
          >
            {eyebrow}
          </div>
        ) : null}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: titleSize,
            fontWeight: 700,
            lineHeight: 1.08,
            color: colors.heading,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 40,
            lineHeight: 1.25,
            color: colors.body,
          }}
        >
          {subtitle}
        </div>
      </div>
      <div style={{ fontSize: 28, lineHeight: 1.3, color: colors.muted }}>
        {footer}
      </div>
    </div>
  );
}
