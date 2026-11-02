/**
 * Settings of the home page's scroll build: a swarm of cursors "builds" the page as the
 * visitor scrolls. The behaviour reference is docs/scroll-build-reference.html; see
 * "Animación de construcción" in docs/decisions.md.
 */

/** false: the build plays once per browser session (sessionStorage); true: on every load. */
export const REPLAY_PER_SESSION = false;

/** sessionStorage key that marks the build as seen in this session. */
export const SESSION_STORAGE_KEY = "scroll-build:seen";

/** Query parameter that always plays the build and shows its status pill and "Replay". */
export const DEBUG_QUERY_PARAMETER = "debug-build";

/** One colour per cursor, in the order they are handed work. */
export const CURSOR_COLORS = [
  "#ff6b5e",
  "#5ee7ff",
  "#b9a6ff",
  "#ffffff",
  "#ffd166",
  "#7cffb2",
  "#ff9ad5",
  "#ffa45e",
  "#c6ff5e",
  "#ff5e9a",
  "#5effd8",
  "#e6c3ff",
] as const;

/** Cursors on screen: all of them from 640 px, half on phones. */
export const CURSOR_COUNT = { desktop: 12, mobile: 6 } as const;

/** Viewports narrower than this (px) get the mobile cursor count, orbit and timings. */
export const MOBILE_BREAKPOINT = 640;

/** On phones every duration (intro, actions, travel) is multiplied by this. */
export const MOBILE_SPEED_FACTOR = 0.8;

/** On phones the orbit radii are multiplied by this. */
export const MOBILE_ORBIT_FACTOR = 0.7;

/** Duration of each action, in ms (except typing, which depends on the text). */
export const ACTION_DURATIONS = {
  draw: 1400,
  resize: 1350,
  drag: 1100,
  click: 750,
  line: 800,
} as const;

/** Typing: ms per character, clamped between a minimum and a maximum duration. */
export const TYPE_MS_PER_CHARACTER = 45;
export const TYPE_DURATION_RANGE = { min: 650, max: 2600 } as const;

/** Share of a draw's duration spent dragging the frame; the image fades in after it. */
export const DRAW_RELEASE_AT = 0.72;

/** Share of a click's duration spent hovering before the click. */
export const CLICK_AT = 0.3;

/** An element is unlocked when its top edge passes this share of the viewport height. */
export const UNLOCK_VIEWPORT_RATIO = 0.86;

/** An unlocked element this far (px) above the viewport is finished without a cursor. */
export const PASSED_MARGIN = 40;

/** Travel between tasks: ms per px of distance, clamped to a range. */
export const TRAVEL_MS_PER_PX = 0.95;
export const TRAVEL_DURATION_RANGE = { min: 400, max: 850 } as const;

/** Sideways bend of the travel curve, as a share of the distance (random in ±this). */
export const TRAVEL_BEND = 0.35;

/** Pause after each task, in ms (random in the range). */
export const REVIEW_PAUSE_RANGE = { min: 150, max: 400 } as const;

/** A cursor with nothing to do fades out after this many ms. */
export const IDLE_FADE_AFTER = 1600;

/** Intro timings, in ms: orbit around the logo, burst to the marks, then the fade. */
export const INTRO_TIMINGS = { orbit: 2600, burst: 1000, settle: 900 } as const;

/** Orbit radius of cursor i: base + step × i (px); the orbit is squashed vertically. */
export const ORBIT_RADIUS = { base: 34, step: 11 } as const;
export const ORBIT_VERTICAL_SCALE = 0.72;

/** Angular speed of the orbit, in radians per second. */
export const ORBIT_SPEED = 2.3;

/** Drag: how far the element starts from its place (px) and its tilt (degrees). */
export const DRAG_OFFSET = {
  x: { min: 90, max: 190 },
  y: { min: 50, max: 130 },
  rotation: 7,
} as const;

/** The resize starts from this scale. */
export const RESIZE_START_SCALE = 0.3;

/**
 * Safety net of the inline script in the layout: if the build has not started this many
 * ms after the HTML arrived (JavaScript failed or is very slow), the blueprint is
 * removed and the page shows as it is.
 */
export const START_TIMEOUT = 8000;
