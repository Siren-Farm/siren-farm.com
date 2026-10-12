// Public facts used across the site. Update here, not in components.

export type Crop = { name: string; classes: number };

/** The commercial model's crop coverage. These are the crops a client can
 *  actually be served on, so these are the ones we publish. The research
 *  model covers more, including crops with no commercial classes yet; do not
 *  publish that wider count. */
export const CROPS: Crop[] = [
  { name: "Apple", classes: 4 },
  { name: "Banana", classes: 7 },
  { name: "Bell pepper", classes: 2 },
  { name: "Blueberry", classes: 1 },
  { name: "Cashew", classes: 5 },
  { name: "Cassava", classes: 5 },
  { name: "Cherry", classes: 2 },
  { name: "Chestnut", classes: 3 },
  { name: "Chili", classes: 2 },
  { name: "Citrus", classes: 25 },
  { name: "Coffee", classes: 3 },
  { name: "Corn", classes: 10 },
  { name: "Date palm", classes: 10 },
  { name: "Grape", classes: 7 },
  { name: "Groundnut", classes: 4 },
  { name: "Guava", classes: 7 },
  { name: "Mango", classes: 8 },
  { name: "Olive", classes: 3 },
  { name: "Papaya", classes: 3 },
  { name: "Peach", classes: 2 },
  { name: "Potato", classes: 4 },
  { name: "Pumpkin", classes: 1 },
  { name: "Raspberry", classes: 1 },
  { name: "Rice", classes: 3 },
  { name: "Soybean", classes: 8 },
  { name: "Strawberry", classes: 2 },
  { name: "Sugarcane", classes: 10 },
  { name: "Tomato", classes: 12 },
  { name: "Wheat", classes: 3 },
];

export const PLANTOLOGIST = {
  crops: CROPS.length,
  // classes cover diseases, pests, deficiencies and healthy, so they are not
  // all "disease classes". Say "classes" unless you mean diseases only.
  classes: CROPS.reduce((total, crop) => total + crop.classes, 0),
  // No published accuracy figure. The old 90.3% was measured on a 9-crop,
  // 64-class model and does not describe this one. Do not reattach it.
  // Any replacement needs the number AND what it was measured on.
  top1: null as string | null,
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

export const hasCrops = CROPS.length > 0;

/** "29 crops" */
export const cropCountPhrase = `${PLANTOLOGIST.crops} crops`;

if (!hasCrops) {
  console.warn("facts.ts: CROPS is empty – crop list hidden");
}
