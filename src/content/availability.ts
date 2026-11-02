import type { YearMonth } from "@/types/content";

/** What Kevin is looking for. */
export type AvailabilityStatus =
  "open-to-offers" | "open-to-freelance" | "open-to-offers-and-freelance";

/** A work arrangement he accepts. */
export type WorkModality = "remote" | "hybrid" | "on-site";

export interface Availability {
  /** Empty (null) hides the whole availability line. */
  status: AvailabilityStatus | null;
  /** Arrangements he accepts, in the order to show them. Empty: not shown. */
  modalities: WorkModality[];
  /** First month he can start, "YYYY-MM". Empty (null): not shown. */
  availableFrom: YearMonth | null;
}

/**
 * Kevin's availability, shown in the hero and in Contact above the calls to action. He
 * accepts every work arrangement (12 October 2026) and is open to both employment and
 * freelance work (2 November 2026). His start month is not confirmed, so it stays empty.
 * Fill it only with his own answer.
 */
export const availability: Availability = {
  status: "open-to-offers-and-freelance",
  modalities: ["remote", "hybrid", "on-site"],
  availableFrom: null,
};
