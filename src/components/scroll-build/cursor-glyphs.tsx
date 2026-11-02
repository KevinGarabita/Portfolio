/**
 * The four shapes of a build cursor, drawn in its colour with a dark outline so they read
 * on any background. The arrow is a notched arrowhead, not the system cursor; its tip
 * (2, 2) is the hot spot. Each glyph is offset in globals.css (.sb-glyph-*) so that its
 * hot spot sits on the cursor's position.
 */

interface GlyphProps {
  color: string;
}

/** Move, drag and click. */
export function ArrowGlyph({ color }: GlyphProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22">
      <path
        d="M2 2 L20 9.2 L11.6 11.6 L9.2 20 Z"
        fill={color}
        fillOpacity=".88"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const iBeamPath = "M1 1.5h3l1 1 1-1h3M5 2.5v17M1 20.5h3l1-1 1 1h3";

/** Typing. */
export function IBeamGlyph({ color }: GlyphProps) {
  return (
    <svg width="10" height="22" viewBox="0 0 10 22">
      <path
        d={iBeamPath}
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d={iBeamPath}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const crossPath = "M9 1v16M1 9h16";

/** Drawing a frame and tracing a line. */
export function CrossGlyph({ color }: GlyphProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path d={crossPath} stroke="#0a0a0a" strokeWidth="3.2" />
      <path d={crossPath} stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

const resizePath = "M2 2l12 12M2 2v5M2 2h5M14 14v-5M14 14h-5";

/** Resizing. */
export function ResizeGlyph({ color }: GlyphProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d={resizePath}
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d={resizePath}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
