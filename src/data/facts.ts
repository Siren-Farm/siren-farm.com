// Public facts used across the site. Update here, not in components.

/** The nine crops Plantologist and Pluvora are trained on.
 *  Empty until the names are supplied. While empty, components say
 *  "nine crops" and hide the list. */
export const CROPS: string[] = [];

export const PLANTOLOGIST = {
  top1: "90.3%",
  diseaseClasses: 64,
  crops: 9,
};

export const STATUS_AS_OF = "October 2026";

export const LEGAL = {
  name: "Siren - Agricultura e Tecnologia, Lda",
  nipc: "517 215 497",
  registeredOffice:
    "Quinta de Nandufe, Rua Fundadores Sporting Clube de Nandufe, 3460-355 Tondela, Portugal",
  email: "hi@siren-farm.com",
};

/** "a, b and c" */
export function formatList(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

/** True when the crop names are available and the list can be shown. */
export const hasCrops = CROPS.length > 0;

/** "nine crops: a, b and c" when the names exist, otherwise "nine crops". */
export const cropsPhrase = hasCrops
  ? `nine crops: ${formatList(CROPS)}`
  : "nine crops";

if (!hasCrops) {
  console.warn("facts.ts: CROPS is empty – crop list hidden");
}
