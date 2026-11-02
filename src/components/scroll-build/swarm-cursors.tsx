import type { Ref } from "react";

import { CURSOR_COLORS } from "./config";
import {
  ArrowGlyph,
  CrossGlyph,
  IBeamGlyph,
  ResizeGlyph,
} from "./cursor-glyphs";

interface SwarmCursorsProps {
  ref: Ref<HTMLDivElement>;
}

/**
 * The build cursors and their selection boxes, one per colour, hidden until the engine
 * moves them. Decorative: hidden from screen readers and never in the way of the
 * pointer. The engine finds them by class (.sb-cursor, .sb-selection) and shows the
 * glyph its data-glyph names; it uses fewer of them on phones.
 */
export function SwarmCursors({ ref }: SwarmCursorsProps) {
  return (
    <div ref={ref} aria-hidden="true">
      {CURSOR_COLORS.map((color) => (
        <div
          key={`cursor-${color}`}
          className="sb-cursor"
          data-color={color}
          data-glyph="arrow"
          style={{ color }}
        >
          <div className="sb-ring" />
          <div className="sb-glyph sb-glyph-arrow">
            <ArrowGlyph color={color} />
          </div>
          <div className="sb-glyph sb-glyph-ibeam">
            <IBeamGlyph color={color} />
          </div>
          <div className="sb-glyph sb-glyph-cross">
            <CrossGlyph color={color} />
          </div>
          <div className="sb-glyph sb-glyph-resize">
            <ResizeGlyph color={color} />
          </div>
          <span className="sb-chip" style={{ background: color }} />
        </div>
      ))}
      {CURSOR_COLORS.map((color) => (
        <div
          key={`selection-${color}`}
          className="sb-selection"
          style={{ color, borderColor: color, background: `${color}14` }}
        >
          <i className="sb-handle" />
          <i className="sb-handle" />
          <i className="sb-handle" />
          <i className="sb-handle" />
          <b className="sb-size" style={{ background: color }} />
        </div>
      ))}
    </div>
  );
}
