import Image from "next/image";
import { useId } from "react";

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
 * beside it. Vector logos are inline SVG; a multicolour logo that only exists as an
 * image (HighLevel) is a small PNG.
 */
export function TechnologyLogo({ logo, className }: TechnologyLogoProps) {
  const clipId = useId();
  const definition: (typeof technologyLogos)[TechnologyLogoId] =
    technologyLogos[logo];
  const sizeClassName = joinClassNames("size-6 shrink-0", className);

  if ("src" in definition) {
    return (
      <Image
        src={definition.src}
        alt=""
        width={24}
        height={24}
        unoptimized
        className={sizeClassName}
      />
    );
  }

  const clip = "clip" in definition ? definition.clip : undefined;

  return (
    <svg
      viewBox={definition.viewBox}
      fill={definition.color}
      aria-hidden="true"
      focusable="false"
      className={sizeClassName}
    >
      {clip ? (
        <clipPath id={clipId}>
          <path d={clip} />
        </clipPath>
      ) : null}
      <path
        d={definition.path}
        clipPath={clip ? `url(#${clipId})` : undefined}
      />
    </svg>
  );
}
