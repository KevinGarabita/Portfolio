"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  ExpandIcon,
} from "@/components/ui/icons";
import { joinClassNames } from "@/lib/class-names";

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  viewport: "desktop" | "mobile";
}

export interface GalleryLabels {
  enlarge: string;
  dialogLabel: string;
  close: string;
  previous: string;
  next: string;
  /** "Imagen 2 de 5", one per image (functions cannot cross to a client component). */
  positions: string[];
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  labels: GalleryLabels;
}

/** Grid placement: the first desktop screenshot spans the row; phone screenshots take one column. */
function getThumbnailClassNames(image: GalleryImage, index: number): string {
  if (image.viewport === "mobile") return "col-span-1";
  return index === 0 ? "col-span-2 sm:col-span-4" : "col-span-2";
}

/** Columns each thumbnail takes from sm up (getThumbnailClassNames). */
function getWideColumnSpan(image: GalleryImage, index: number): number {
  if (image.viewport === "mobile") return 1;
  return index === 0 ? 4 : 2;
}

/**
 * next/image `sizes` of each thumbnail: the width it is drawn at, so the browser picks
 * a sharp file without downloading a larger one. The gallery is as wide as the page
 * container (1200 px from 1280 px, 1328 px from 1800 px): two columns on phones, four
 * from sm, so one column is 282 px (314 px from 1800 px) on large screens.
 *
 * From sm up, a desktop screenshot that shares its row with phone screenshots is
 * stretched to their height (9:16) and cropped at the sides, so it is drawn wider than
 * its half of the row. The rows are worked out the way CSS grid places the items: in
 * order, and an item that does not fit in what is left of a row starts the next one.
 */
function getThumbnailSizes(images: GalleryImage[]): string[] {
  const rowOfImage: number[] = [];
  const rowsWithPhones = new Set<number>();
  let row = 0;
  let usedColumns = 0;
  images.forEach((image, index) => {
    const span = getWideColumnSpan(image, index);
    if (usedColumns + span > 4) {
      row += 1;
      usedColumns = 0;
    }
    usedColumns += span;
    rowOfImage[index] = row;
    if (image.viewport === "mobile") rowsWithPhones.add(row);
  });

  return images.map((image, index) => {
    if (image.viewport === "mobile") {
      return "(min-width: 1800px) 314px, (min-width: 1280px) 282px, (min-width: 640px) 25vw, 50vw";
    }
    if (getWideColumnSpan(image, index) === 4) {
      return "(min-width: 1800px) 1328px, (min-width: 1280px) 1200px, 100vw";
    }
    // Width drawn when cropped to the phone screenshots' height, in columns.
    const croppedColumns = rowsWithPhones.has(rowOfImage[index] ?? -1)
      ? (16 / 9) * (image.width / image.height)
      : 0;
    if (croppedColumns <= 2) {
      return "(min-width: 1800px) 652px, (min-width: 1280px) 588px, (min-width: 640px) 50vw, 100vw";
    }
    return `(min-width: 1800px) ${Math.round(314 * croppedColumns)}px, (min-width: 1280px) ${Math.round(282 * croppedColumns)}px, (min-width: 640px) ${Math.round(25 * croppedColumns)}vw, 100vw`;
  });
}

/**
 * Screenshots of a case study. Every image is visible in the page as a thumbnail (the
 * first desktop one at full width), so nothing depends on JavaScript. Each thumbnail
 * is a button that opens a larger view in a native modal <dialog> (the page behind
 * becomes inert):
 * - focus moves to the close button when it opens, and Tab / Shift+Tab cycle through
 *   the dialog's buttons instead of leaving for the browser's toolbar;
 * - Escape and the close button close it, and focus returns to the thumbnail that
 *   opened it;
 * - the arrow keys and the previous/next buttons move between images (wrapping at both
 *   ends), and the position is announced politely.
 */
export function ProjectGallery({ images, labels }: ProjectGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // The thumbnail that opened the dialog: focus goes back to it on close.
  const openerIndexRef = useRef<number | null>(null);
  const isOpen = openIndex !== null;
  const imageCount = images.length;

  function openAt(index: number) {
    openerIndexRef.current = index;
    setOpenIndex(index);
  }

  function showRelative(step: number) {
    setOpenIndex((current) =>
      current === null ? current : (current + step + imageCount) % imageCount,
    );
  }

  // Opened only once its content is rendered, so showModal() can move focus to the
  // close button (the first button inside) instead of the empty dialog.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && dialog && !dialog.open) dialog.showModal();
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function handleClose() {
      setOpenIndex(null);
      const openerIndex = openerIndexRef.current;
      if (openerIndex !== null) thumbnailRefs.current[openerIndex]?.focus();
    }

    // On the document, not the dialog: after a click on the image focus is on <body>,
    // and the keys must still work.
    function handleKeyDown(event: KeyboardEvent) {
      if (!dialog?.open) return;

      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        const step = event.key === "ArrowLeft" ? -1 : 1;
        setOpenIndex((current) =>
          current === null
            ? current
            : (current + step + imageCount) % imageCount,
        );
        return;
      }

      if (event.key !== "Tab") return;
      const buttons = Array.from(dialog.querySelectorAll("button"));
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      if (!first || !last) return;
      const active = document.activeElement;
      const isInside = active instanceof Node && dialog.contains(active);
      if (event.shiftKey && (active === first || !isInside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !isInside)) {
        event.preventDefault();
        first.focus();
      }
    }

    dialog.addEventListener("close", handleClose);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      dialog.removeEventListener("close", handleClose);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageCount]);

  const openImage = openIndex === null ? null : images[openIndex];
  const hasSeveralImages = imageCount > 1;
  const thumbnailSizes = getThumbnailSizes(images);

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
        {images.map((image, index) => (
          <li key={image.src} className={getThumbnailClassNames(image, index)}>
            <button
              ref={(element) => {
                thumbnailRefs.current[index] = element;
              }}
              type="button"
              onClick={() => openAt(index)}
              className="group relative block h-full w-full cursor-zoom-in overflow-hidden rounded-media border border-hairline bg-raised"
            >
              <span className="sr-only">{labels.enlarge}: </span>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes={thumbnailSizes[index]}
                className={joinClassNames(
                  "w-full transition-transform duration-700 ease-emphasized group-hover:scale-[1.02]",
                  index === 0 && image.viewport === "desktop"
                    ? "h-auto"
                    : image.viewport === "mobile"
                      ? "aspect-9/16 object-cover object-top"
                      : "aspect-16/10 object-cover object-top sm:aspect-auto sm:h-full",
                )}
              />
              <span
                aria-hidden="true"
                className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-tag border border-hairline bg-page px-2 py-1 text-small font-bold text-heading opacity-90 transition-opacity group-hover:opacity-100 sm:px-3"
              >
                <ExpandIcon className="size-4 text-accent" />
                {/* Only the large thumbnail spells it out; on small ones it would hide the shot. */}
                <span className={index === 0 ? undefined : "hidden xl:inline"}>
                  {labels.enlarge}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={labels.dialogLabel}
        className="m-0 size-full max-h-none max-w-none bg-transparent p-0 text-body backdrop:bg-page/95 backdrop:backdrop-blur-sm"
      >
        {openImage && openIndex !== null ? (
          <div className="relative flex size-full flex-col gap-4 p-4 sm:p-6 short:gap-2 short:p-3">
            <div className="flex items-center justify-between gap-4">
              <p aria-live="polite" className="text-small text-muted">
                {labels.positions[openIndex]}
              </p>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-control-border bg-raised text-heading transition-colors hover:bg-raised-strong"
              >
                <CloseIcon />
                <span className="sr-only">{labels.close}</span>
              </button>
            </div>

            <figure className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3">
              <Image
                key={openImage.src}
                src={openImage.src}
                alt={openImage.alt}
                width={openImage.width}
                height={openImage.height}
                // Never drawn wider than the file itself (maxWidth below).
                sizes={`(min-width: ${openImage.width}px) ${openImage.width}px, 100vw`}
                style={{
                  maxWidth: openImage.width,
                  maxHeight: openImage.height,
                }}
                className="min-h-0 w-auto max-w-full flex-1 object-contain"
              />
              <figcaption className="max-w-prose text-center text-small text-muted short:sr-only">
                {openImage.alt}
              </figcaption>
            </figure>

            {hasSeveralImages ? (
              // On short screens the buttons sit on the image edges to leave it the full height.
              <div className="flex items-center justify-center gap-3 short:pointer-events-none short:absolute short:inset-x-3 short:top-1/2 short:-translate-y-1/2 short:justify-between">
                <button
                  type="button"
                  onClick={() => showRelative(-1)}
                  className="pointer-events-auto inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-2 rounded-control border border-control-border bg-raised px-4 font-bold text-heading transition-colors hover:bg-raised-strong short:px-0"
                >
                  <ChevronLeftIcon />
                  <span className="max-sm:sr-only short:sr-only">
                    {labels.previous}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => showRelative(1)}
                  className="pointer-events-auto inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-2 rounded-control border border-control-border bg-raised px-4 font-bold text-heading transition-colors hover:bg-raised-strong short:px-0"
                >
                  <span className="max-sm:sr-only short:sr-only">
                    {labels.next}
                  </span>
                  <ChevronRightIcon />
                </button>
              </div>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </>
  );
}
