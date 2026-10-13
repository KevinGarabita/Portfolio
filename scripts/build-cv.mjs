/**
 * Prints the CV sources (docs/cv/kevin-garabita-cv-<language>.html) to the PDFs the site
 * links (public/cv/kevin-garabita-cv-<language>.pdf) with the installed Chrome, and fails
 * unless each PDF is exactly one Letter page. Run it with `npm run cv`.
 *
 * Chrome comes from CHROME_PATH, or else its default Windows path. It runs headless with
 * a throwaway profile, so an open Chrome window is not touched, and without the date,
 * title and URL it otherwise prints in the page margins. The PDF takes its title from
 * the source's <title>. No dependencies: only Node and Chrome.
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const chromePath =
  process.env.CHROME_PATH ??
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const languages = ["es", "en"];

/** US Letter in PDF points (1/72 inch). */
const letterPage = { width: 612, height: 792 };

/** The page objects of a PDF: "/Type /Page", not "/Type /Pages" (the page tree). */
function readPages(pdf) {
  const text = pdf.toString("latin1");
  const pageCount = text.match(/\/Type\s*\/Page(?![a-zA-Z])/g)?.length ?? 0;
  const mediaBoxes = [
    ...text.matchAll(
      /\/MediaBox\s*\[\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\]/g,
    ),
  ].map(([, left, bottom, right, top]) => ({
    width: Number(right) - Number(left),
    height: Number(top) - Number(bottom),
  }));
  return { pageCount, mediaBoxes };
}

function printToPdf(sourcePath, outputPath) {
  const profileDirectory = mkdtempSync(join(tmpdir(), "cv-chrome-"));
  try {
    const result = spawnSync(
      chromePath,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        "--disable-extensions",
        "--log-level=3",
        `--user-data-dir=${profileDirectory}`,
        "--no-pdf-header-footer",
        `--print-to-pdf=${outputPath}`,
        pathToFileURL(sourcePath).href,
      ],
      { stdio: "inherit", timeout: 120_000 },
    );
    if (result.error) throw result.error;
    if (result.status !== 0) {
      throw new Error(`Chrome exited with code ${result.status}`);
    }
  } finally {
    // Chrome's helper processes can hold the profile for a moment after it exits.
    rmSync(profileDirectory, {
      recursive: true,
      force: true,
      maxRetries: 10,
      retryDelay: 200,
    });
  }
}

if (!existsSync(chromePath)) {
  console.error(
    `Chrome not found at "${chromePath}". Set CHROME_PATH to the Chrome executable.`,
  );
  process.exit(1);
}

for (const language of languages) {
  const sourcePath = join(
    repositoryRoot,
    "docs",
    "cv",
    `kevin-garabita-cv-${language}.html`,
  );
  const outputPath = join(
    repositoryRoot,
    "public",
    "cv",
    `kevin-garabita-cv-${language}.pdf`,
  );

  printToPdf(sourcePath, outputPath);

  const { pageCount, mediaBoxes } = readPages(readFileSync(outputPath));
  const isLetter = mediaBoxes.every(
    ({ width, height }) =>
      Math.round(width) === letterPage.width &&
      Math.round(height) === letterPage.height,
  );
  if (pageCount !== 1 || mediaBoxes.length === 0 || !isLetter) {
    console.error(
      `${relative(repositoryRoot, outputPath)} has ${pageCount} pages (expected one Letter page). Shorten ${relative(repositoryRoot, sourcePath)}.`,
    );
    process.exit(1);
  }
  console.log(
    `${relative(repositoryRoot, sourcePath)} -> ${relative(repositoryRoot, outputPath)} (1 Letter page)`,
  );
}
