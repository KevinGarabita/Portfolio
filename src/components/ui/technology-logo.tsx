import Image from "next/image";

import {
  technologyLogos,
  type TechnologyLogoId,
} from "@/content/technology-logos";
import { joinClassNames } from "@/lib/class-names";

interface TechnologyLogoProps {
  logo: TechnologyLogoId;
  className?: string;
}

/**
 * A tool's logo in its brand colours, 24 px. Decorative: the tool's name is always
 * beside it. Vector logos are small SVG files written at build time from
 * content/technology-logos.ts (app/technology-logos/[file]/route.ts), not inline SVG, so
 * their path data stays out of the page; a multicolour logo that only exists as an image
 * (HighLevel) is a small PNG. Both load lazily.
 */
export function TechnologyLogo({ logo, className }: TechnologyLogoProps) {
  const definition: (typeof technologyLogos)[TechnologyLogoId] =
    technologyLogos[logo];

  return (
    <Image
      src={
        "src" in definition ? definition.src : `/technology-logos/${logo}.svg`
      }
      alt=""
      width={24}
      height={24}
      unoptimized
      className={joinClassNames("size-6 shrink-0", className)}
    />
  );
}
