import type { BuildStatus } from "./engine";

const statusText: Record<BuildStatus, string> = {
  intro: "Intro…",
  building: "Construyendo…",
  waiting: "Haz scroll para seguir construyendo",
  done: "Página lista",
};

interface BuildDebugProps {
  status: BuildStatus | null;
  onReplay: () => void;
}

/**
 * Development only, behind ?debug-build: the build's status and a button that plays it
 * again from the intro. Visitors never see it.
 */
export function BuildDebug({ status, onReplay }: BuildDebugProps) {
  return (
    <div className="fixed right-4 bottom-4 z-(--layer-header) flex items-center gap-2.5 rounded-tag border border-hairline bg-raised py-1.5 pr-1.5 pl-3.5 font-mono text-small text-muted">
      <span
        aria-hidden="true"
        className={
          status === "done"
            ? "size-2 rounded-full bg-whatsapp"
            : "size-2 rounded-full bg-(--blueprint)"
        }
      />
      <span role="status">{status ? statusText[status] : ""}</span>
      <button
        type="button"
        onClick={onReplay}
        className="cursor-pointer rounded-tag border border-hairline bg-page px-2.5 py-1 text-heading"
      >
        Repetir
      </button>
    </div>
  );
}
