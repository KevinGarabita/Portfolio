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

/**
 * Screenshots of a case study. Every image is visible in the page as a thumbnail (the
 * first desktop one at full width), so nothing depends on JavaScript. Each thumbnail
 * is a button that opens a larger view in a native <dialog>: Escape and the close
 * button close it, the arrow keys and the previous/next buttons move between images,
 * the position is announced politely, and focus returns to the thumbnail on close.
 */
export function ProjectGallery({ images, labels }: ProjectGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // The image on screen, for the close handler (it returns focus to its thumbnail).
  const openIndexRef = useRef<number | null>(null);
  const imageCount = images.length;

  useEffect(() => {
    openIndexRef.current = openIndex;
  }, [openIndex]);

  function openAt(index: number) {
    setOpenIndex(index);
    dialogRef.current?.showModal();
  }

  function showRelative(step: number) {
    setOpenIndex((current) =>
      current === null ? current : (current + step + imageCount) % imageCount,
    );
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function handleClose() {
      const lastIndex = openIndexRef.current;
      setOpenIndex(null);
      if (lastIndex !== null) thumbnailRefs.current[lastIndex]?.focus();
    }

    function handleKeyDown(event: KeyboardEvent) {
      const step =
        event.key === "ArrowLeft" ? -1 : event.key === "ArrowRight" ? 1 : 0;
      if (step === 0) return;
      setOpenIndex((current) =>
        current === null ? current : (current + step + imageCount) % imageCount,
      );
    }

    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("keydown", handleKeyDown);
    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageCount]);

  const openImage = openIndex === null ? null : images[openIndex];
  const hasSeveralImages = imageCount > 1;

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
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-media border border-hairline bg-raised"
            >
              <span className="sr-only">{labels.enlarge}: </span>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes={
                  index === 0 && image.viewport === "desktop"
                    ? "(min-width: 1280px) 1200px, 100vw"
                    : "(min-width: 640px) 50vw, 100vw"
                }
                className={joinClassNames(
                  "w-full transition-transform duration-700 ease-emphasized group-hover:scale-[1.02]",
                  index === 0 && image.viewport === "desktop"
                    ? "h-auto"
                    : image.viewport === "mobile"
                      ? "aspect-9/16 object-cover object-top"
                      : "aspect-16/10 object-cover object-top",
                )}
              />
              <span
                aria-hidden="true"
                className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-tag border border-hairline bg-page px-3 py-1 text-small font-bold text-heading opacity-90 transition-opacity group-hover:opacity-100"
              >
                <ExpandIcon className="size-4 text-accent" />
                {labels.enlarge}
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
          <div className="flex size-full flex-col gap-4 p-4 sm:p-6">
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
                sizes="100vw"
                className="min-h-0 w-auto max-w-full flex-1 object-contain"
              />
              <figcaption className="max-w-prose text-center text-small text-muted">
                {openImage.alt}
              </figcaption>
            </figure>

            {hasSeveralImages ? (
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => showRelative(-1)}
                  className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-2 rounded-control border border-control-border bg-raised px-4 font-bold text-heading transition-colors hover:bg-raised-strong"
                >
                  <ChevronLeftIcon />
                  <span className="max-sm:sr-only">{labels.previous}</span>
                </button>
                <button
                  type="button"
                  onClick={() => showRelative(1)}
                  className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-2 rounded-control border border-control-border bg-raised px-4 font-bold text-heading transition-colors hover:bg-raised-strong"
                >
                  <span className="max-sm:sr-only">{labels.next}</span>
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
