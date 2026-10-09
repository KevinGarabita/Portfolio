import { readFile } from "node:fs/promises";
import { join } from "node:path";

import type { ImageResponse } from "next/og";

import { brandColors } from "@/lib/brand-colors";

/**
 * Shared layout of the generated link-preview images (app/[lang]/opengraph-image.tsx and
 * app/[lang]/projects/[slug]/opengraph-image.tsx). next/og only understands flexbox and
 * inline styles and cannot read CSS variables, so the palette comes from
 * lib/brand-colors.ts: deep black background, warm white text, the orange-to-red
 * gradient on the monogram and a thin bar at the top. No photo: with the photo the PNG
 * weighed 470-600 KB, and WhatsApp tends to drop preview images over ~300 KB.
 */

const colors = {
  page: brandColors.blackDeep,
  heading: brandColors.whiteWarm,
  body: brandColors.whiteWarm,
  muted: brandColors.grayText,
  onAccent: brandColors.blackDeep,
};

const brandGradient = `linear-gradient(135deg, ${brandColors.orangeVibrant}, ${brandColors.redSignal})`;

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

/** The "KG" monogram on the brand gradient, the same mark as the favicon. */
function Monogram({ size }: { size: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.22),
        backgroundImage: brandGradient,
        color: colors.onAccent,
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
        backgroundColor: colors.page,
        // A faint orange glow in the top-right corner, like the site's background.
        backgroundImage: `radial-gradient(circle at 100% 0%, ${brandColors.orangeVibrant}33, transparent 55%)`,
        fontFamily,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 10,
          backgroundImage: brandGradient,
        }}
      />
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
