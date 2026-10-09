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

/** A tool's logo in its brand colour. Decorative: the tool's name is always beside it. */
export function TechnologyLogo({ logo, className }: TechnologyLogoProps) {
  const clipId = useId();
  const { viewBox, color, path, ...rest } = technologyLogos[logo];
  const clip = "clip" in rest ? rest.clip : undefined;

  return (
    <svg
      viewBox={viewBox}
      fill={color}
      aria-hidden="true"
      focusable="false"
      className={joinClassNames("size-6 shrink-0", className)}
    >
      {clip ? (
        <clipPath id={clipId}>
          <path d={clip} />
        </clipPath>
      ) : null}
      <path d={path} clipPath={clip ? `url(#${clipId})` : undefined} />
    </svg>
  );
}
