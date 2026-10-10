import type { YearMonth } from "@/types/content";

/** What Kevin is looking for. */
export type AvailabilityStatus = "open-to-offers" | "open-to-freelance";

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
 * Kevin's availability, shown in the hero above the calls to action. He has not given
 * it yet, so it stays empty and the site shows nothing. Fill it only with his own
 * answers; the types above list the allowed values.
 */
export const availability: Availability = {
  status: null,
  modalities: [],
  availableFrom: null,
};
