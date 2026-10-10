"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

import { CheckIcon, ChevronDownIcon } from "@/components/ui/icons";
import { joinClassNames } from "@/lib/class-names";
import type { BuildMethod, ProjectKind } from "@/types/content";

export interface FilterableProject {
  slug: string;
  kind: ProjectKind;
  technologies: string[];
  buildMethod?: BuildMethod;
  /** The project card, rendered on the server. */
  card: ReactNode;
}

interface FilterOption<Value extends string> {
  value: Value;
  label: string;
}

export interface ProjectFilterLabels {
  label: string;
  kind: string;
  technology: string;
  buildMethod: string;
  all: string;
  /** "1 proyecto" and "{count} proyectos". */
  resultsOne: string;
  resultsMany: string;
  empty: string;
  clear: string;
}

interface FilterableProjectGridProps {
  projects: FilterableProject[];
  kindOptions: FilterOption<ProjectKind>[];
  technologyOptions: FilterOption<string>[];
  buildMethodOptions: FilterOption<BuildMethod>[];
  labels: ProjectFilterLabels;
}

/** A filter pill: dark by default, outlined in orange while its filter is on. */
function pillClassNames(isActive: boolean): string {
  return joinClassNames(
    "inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-control border px-4 text-small font-bold whitespace-nowrap text-heading transition-colors",
    isActive
      ? "border-accent bg-raised-strong"
      : "border-transparent bg-raised-strong hover:border-control-border hover:bg-control-hover",
  );
}

interface FilterMenuProps<Value extends string> {
  title: string;
  allLabel: string;
  options: FilterOption<Value>[];
  selected: Value | null;
  onSelect: (value: Value | null) => void;
}

/**
 * A pill that opens a list of options ("Tecnología ▾"). Once something is chosen the pill
 * shows it ("Tecnología: React"). Disclosure pattern: the options are buttons with
 * aria-pressed; Escape or a click outside closes the list and focus returns to the pill.
 */
function FilterMenu<Value extends string>({
  title,
  allLabel,
  options,
  selected,
  onSelect,
}: FilterMenuProps<Value>) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const selectedLabel = options.find(
    (option) => option.value === selected,
  )?.label;

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function choose(value: Value | null) {
    onSelect(value);
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  const choices: { value: Value | null; label: string }[] = [
    { value: null, label: allLabel },
    ...options,
  ];

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={listId}
        onClick={() => setIsOpen((open) => !open)}
        className={pillClassNames(selected !== null)}
      >
        <span>
          {title}
          {selectedLabel ? (
            <span className="font-normal text-body">: {selectedLabel}</span>
          ) : null}
        </span>
        <ChevronDownIcon
          className={joinClassNames(
            "size-4 transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <ul
        id={listId}
        hidden={!isOpen}
        className="absolute top-full left-0 z-(--layer-header) mt-2 max-h-80 w-max max-w-[min(18rem,calc(100vw-2rem))] min-w-52 overflow-y-auto rounded-control border border-hairline bg-raised-strong p-1.5 shadow-(--shadow-floating)"
      >
        {choices.map((choice) => {
          const isSelected = choice.value === selected;
          return (
            <li key={choice.value ?? "all"}>
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => choose(choice.value)}
                className={joinClassNames(
                  "flex min-h-11 w-full cursor-pointer items-center justify-between gap-4 rounded-[0.5rem] px-3 text-left text-small transition-colors hover:bg-control-hover",
                  isSelected ? "font-bold text-heading" : "text-body",
                )}
              >
                {choice.label}
                {isSelected ? (
                  <CheckIcon className="size-4 text-accent" />
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Every project in one grid of columns (one on phones, two from sm, three from lg),
 * under a row of filter pills: type and technology open a list; how it was built is a
 * single on/off pill while only one method exists. Filters combine, and the result
 * count on the right is announced to screen readers. The cards come rendered from the
 * server; filtering only hides the ones that don't match.
 */
export function FilterableProjectGrid({
  projects,
  kindOptions,
  technologyOptions,
  buildMethodOptions,
  labels,
}: FilterableProjectGridProps) {
  const [kind, setKind] = useState<ProjectKind | null>(null);
  const [technology, setTechnology] = useState<string | null>(null);
  const [buildMethod, setBuildMethod] = useState<BuildMethod | null>(null);

  const isShown = (project: FilterableProject) =>
    (kind === null || project.kind === kind) &&
    (technology === null || project.technologies.includes(technology)) &&
    (buildMethod === null || project.buildMethod === buildMethod);
  const shownCount = projects.filter(isShown).length;
  const hasFilters =
    kind !== null || technology !== null || buildMethod !== null;
  const [onlyBuildMethod] = buildMethodOptions;

  function clearFilters() {
    setKind(null);
    setTechnology(null);
    setBuildMethod(null);
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <div
          role="group"
          aria-label={labels.label}
          className="flex flex-wrap items-center gap-2"
        >
          <FilterMenu
            title={labels.kind}
            allLabel={labels.all}
            options={kindOptions}
            selected={kind}
            onSelect={setKind}
          />
          <FilterMenu
            title={labels.technology}
            allLabel={labels.all}
            options={technologyOptions}
            selected={technology}
            onSelect={setTechnology}
          />
          {buildMethodOptions.length > 1 ? (
            <FilterMenu
              title={labels.buildMethod}
              allLabel={labels.all}
              options={buildMethodOptions}
              selected={buildMethod}
              onSelect={setBuildMethod}
            />
          ) : onlyBuildMethod ? (
            <button
              type="button"
              aria-pressed={buildMethod === onlyBuildMethod.value}
              onClick={() =>
                setBuildMethod((current) =>
                  current === onlyBuildMethod.value
                    ? null
                    : onlyBuildMethod.value,
                )
              }
              className={pillClassNames(buildMethod === onlyBuildMethod.value)}
            >
              {onlyBuildMethod.label}
            </button>
          ) : null}
          {hasFilters ? (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex min-h-11 cursor-pointer items-center px-2 text-small font-bold text-link underline underline-offset-[0.2em]"
            >
              {labels.clear}
            </button>
          ) : null}
        </div>

        <p aria-live="polite" className="text-small text-muted sm:ml-auto">
          {shownCount === 1
            ? labels.resultsOne
            : labels.resultsMany.replace("{count}", String(shownCount))}
        </p>
      </div>

      {shownCount === 0 ? (
        <p className="mt-8 rounded-section border border-dashed border-control-border p-8 text-center text-muted">
          {labels.empty}
        </p>
      ) : null}

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {projects.map((project) => (
          <li key={project.slug} hidden={!isShown(project)}>
            {project.card}
          </li>
        ))}
      </ul>
    </div>
  );
}
