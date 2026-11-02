import { supportedLocales } from "@/i18n/locales";

import {
  DEBUG_QUERY_PARAMETER,
  REPLAY_PER_SESSION,
  SESSION_STORAGE_KEY,
  START_TIMEOUT,
} from "./config";

/** The home page of any language: /es, /en/... */
const homePathPattern = `^/(${supportedLocales.join("|")})/?$`;

/**
 * Runs before the first paint, in <head>: on the home page it sets html.sb (the
 * blueprint) and html.sb-intro (the intro), so the page never flashes built and then
 * turns blue. It skips the build with reduced motion and once seen in this session
 * (unless REPLAY_PER_SESSION or ?debug-build), and the intro when the visitor lands on a
 * section (#contact) or comes back with the browser's back button (the browser restores
 * the scroll). Any error leaves the page as it is.
 *
 * If ScrollBuildProvider has not marked data-sb-ready after START_TIMEOUT (JavaScript
 * failed or is very slow), the blueprint is removed and data-sb-timeout tells the
 * provider not to start later.
 */
const script = `(function () {
  try {
    var html = document.documentElement;
    if (!new RegExp(${JSON.stringify(homePathPattern)}).test(location.pathname)) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var debug = new URLSearchParams(location.search).has(${JSON.stringify(DEBUG_QUERY_PARAMETER)});
    if (!debug && !${REPLAY_PER_SESSION} && sessionStorage.getItem(${JSON.stringify(SESSION_STORAGE_KEY)})) return;
    html.classList.add("sb");
    var navigation = performance.getEntriesByType("navigation")[0];
    if (!location.hash && !(navigation && navigation.type === "back_forward")) {
      html.classList.add("sb-intro");
    }
    setTimeout(function () {
      if (html.hasAttribute("data-sb-ready")) return;
      html.classList.remove("sb", "sb-intro");
      html.setAttribute("data-sb-timeout", "");
    }, ${START_TIMEOUT});
  } catch (error) {}
})();`;

export function ScrollBuildScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
