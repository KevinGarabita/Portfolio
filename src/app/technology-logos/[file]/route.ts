import {
  technologyLogos,
  type TechnologyLogo,
  type VectorLogo,
} from "@/content/technology-logos";

/**
 * Each vector logo of the skills list as its own SVG file (/technology-logos/python.svg),
 * written at build time from src/content/technology-logos.ts. Drawn inline, the 22 logos
 * were about 32 KB of path data that the home page carried twice (in the HTML and in the
 * React Server Components payload): more than half of the compressed HTML, for a section
 * far below the fold. As files they load lazily, only when the visitor gets there.
 *
 * The URL ends in .svg, so proxy.ts (which skips any path with an extension) does not
 * send it to a language.
 */
export const dynamic = "force-static";
export const dynamicParams = false;

const fileExtension = ".svg";

function isVectorLogo(definition: TechnologyLogo): definition is VectorLogo {
  return "path" in definition;
}

export function generateStaticParams() {
  return Object.entries(technologyLogos)
    .filter(([, definition]) => isVectorLogo(definition))
    .map(([id]) => ({ file: `${id}${fileExtension}` }));
}

export async function GET(
  _request: Request,
  { params }: RouteContext<"/technology-logos/[file]">,
) {
  const { file } = await params;
  const id = file.slice(0, -fileExtension.length);
  const definition: TechnologyLogo | undefined =
    technologyLogos[id as keyof typeof technologyLogos];

  if (
    !file.endsWith(fileExtension) ||
    !definition ||
    !isVectorLogo(definition)
  ) {
    return new Response(null, { status: 404 });
  }

  const shape = definition.clip
    ? `<clipPath id="c"><path d="${definition.clip}"/></clipPath><path d="${definition.path}" clip-path="url(#c)"/>`
    : `<path d="${definition.path}"/>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${definition.viewBox}" fill="${definition.color}">${shape}</svg>`;

  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8" },
  });
}
