"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

import { joinClassNames } from "@/lib/class-names";

interface BadgeTooltipProps {
  /** Text of the badge. */
  label: string;
  /** One-line explanation, shown in the bubble and always read by screen readers. */
  description: string;
  /** Decorative icon before the label. */
  icon?: ReactNode;
}

/** Which badge edge the bubble lines up with, and how wide it may grow (px). */
interface Placement {
  edge: "start" | "end";
  room: number | null;
}

/** Space kept between the bubble and the edge of its card or the screen (px). */
const edgeGap = 12;

/** Widest the bubble gets (18rem at the default font size, px). */
const bubbleMaxWidth = 288;

/**
 * A badge whose explanation opens in a small bubble below it: on mouse hover, on
 * keyboard focus (focus-visible) and on tap, where a second tap, a tap outside, Escape
 * or moving focus away closes it. The pointer can move onto the bubble without closing
 * it (WCAG 1.4.13).
 *
 * The badge is a button so it can take focus and taps. It sits one layer above
 * --layer-raised, the level of a project card's stretched link (::after over the whole
 * card), so the link keeps covering the rest of the card while the badge stays usable.
 *
 * Screen readers get the explanation from a visually hidden copy linked with
 * aria-describedby: it is read on focus and also in browse mode, with or without the
 * bubble. The bubble itself is aria-hidden so nothing is read twice.
 *
 * The bubble opens toward the side with more room inside the card (or the page), so it
 * never overflows a card or the screen. In a row the badge gives way first (a high
 * flex-shrink): its text wraps before the status beside it on a card has to.
 */
export function BadgeTooltip({ label, description, icon }: BadgeTooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [placement, setPlacement] = useState<Placement>({
    edge: "start",
    room: null,
  });
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const descriptionId = useId();
  const isOpen = isHovered || isFocused || isPinned;

  useEffect(() => {
    if (!isOpen) return;

    function close() {
      setIsHovered(false);
      setIsFocused(false);
      setIsPinned(false);
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    function handlePointerDown(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) close();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  /** Measures the room on each side of the badge, inside its card or the page. */
  function updatePlacement() {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const badge = wrapper.getBoundingClientRect();
    const area = (
      wrapper.closest("article") ?? document.body
    ).getBoundingClientRect();
    const areaStart = Math.max(area.left, 0) + edgeGap;
    const areaEnd =
      Math.min(area.right, document.documentElement.clientWidth) - edgeGap;
    const roomAfterStart = areaEnd - badge.left;
    const roomBeforeEnd = badge.right - areaStart;

    setPlacement(
      roomAfterStart >= bubbleMaxWidth || roomAfterStart >= roomBeforeEnd
        ? { edge: "start", room: roomAfterStart }
        : { edge: "end", room: roomBeforeEnd },
    );
  }

  return (
    <span
      ref={wrapperRef}
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse") return;
        updatePlacement();
        setIsHovered(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setIsHovered(false);
      }}
      className="relative z-[calc(var(--layer-raised)+1)] inline-flex max-w-full shrink-[999]"
    >
      <button
        type="button"
        aria-describedby={descriptionId}
        onFocus={(event) => {
          if (!event.currentTarget.matches(":focus-visible")) return;
          updatePlacement();
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
          setIsPinned(false);
        }}
        onClick={() => {
          updatePlacement();
          setIsPinned((pinned) => !pinned);
        }}
        className="gradient-ring inline-flex cursor-help items-center gap-1.5 rounded-tag border px-2.5 py-0.5 text-left text-small leading-snug font-bold text-balance text-heading [--ring-fill:var(--color-page)] [--ring-opacity:1]"
      >
        {icon}
        {label}
      </button>
      <span id={descriptionId} className="sr-only">
        {description}
      </span>

      {isOpen ? (
        <span
          aria-hidden="true"
          style={{
            maxWidth:
              placement.room === null
                ? undefined
                : `min(${bubbleMaxWidth}px, ${Math.floor(placement.room)}px)`,
          }}
          className={joinClassNames(
            "absolute top-full w-max max-w-72 pt-2",
            placement.edge === "start" ? "left-0" : "right-0",
          )}
        >
          <span className="block rounded-control border border-hairline bg-raised-strong px-3 py-2 text-small leading-snug font-normal text-body shadow-(--shadow-floating)">
            {description}
          </span>
        </span>
      ) : null}
    </span>
  );
}
