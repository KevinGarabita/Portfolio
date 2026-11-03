/**
 * Splits `text` around the first `phrase`, so the phrase can be drawn on its own (the
 * orange words of the hero statement). Throws when the phrase is not in the text: a
 * highlight that silently vanished after a copy edit would go unnoticed.
 */
export function splitAroundPhrase(
  text: string,
  phrase: string | undefined,
): [before: string, phrase: string, after: string] {
  if (!phrase) return [text, "", ""];

  const start = text.indexOf(phrase);
  if (start === -1) {
    throw new Error(`"${phrase}" is not part of "${text}"`);
  }
  return [text.slice(0, start), phrase, text.slice(start + phrase.length)];
}
