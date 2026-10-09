/**
 * Joins class names and skips empty or false values: joinClassNames("a", isOpen && "b").
 * It does not resolve conflicts, so callers must not pass two classes for the same property.
 */
export function joinClassNames(
  ...classNames: (string | false | null | undefined)[]
): string {
  return classNames.filter(Boolean).join(" ");
}
