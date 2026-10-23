// Public facts used across the site. Update here, not in components.
//
// These figures describe the v2 model (training report v2, 5 October 2026).
// They are published on the assumption that v2 is the serving default.
// Do not merge a branch carrying them until that is confirmed.

export type Crop = { name: string; classes: number };

/** The model behind every published figure. The accuracy is measured on a
 *  held-out image set, not in the field, and `measuredOn` must travel with
 *  `top1` wherever the figure appears so it is never read as field accuracy.
 *  Pluvora never gets this figure; it is the irrigation and timing layer. */
export const PLANTOLOGIST = {
  crops: 43,
  diseaseClasses: 248,
  top1: "93.1%",
  measuredOn: "on a held-out image set",
};

/** Crops with commercial classes, 29 of the 43, with the number of classes
 *  per crop. This is coverage a client can be served on, which is a narrower
 *  claim than "trained on". Not rendered anywhere at present. */
export const COMMERCIAL_CROPS = {
  cropCount: 29,
  classCount: 157,
  crops: [
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
  ] satisfies Crop[],
};

/** Crops our models are trained on (models in testing). Source: training
 *  report v2, Oct 2026. Alphabetical; the ticker cycles them in this order.
 *  This is the full training set; COMMERCIAL_CROPS above is the narrower
 *  list a client can be served on, which is a different claim. */
export const TESTING_CROPS: string[] = [
  "Apple", "Banana", "Basil", "Bean", "Bell pepper", "Blueberry", "Broccoli",
  "Cabbage", "Carrot", "Cashew", "Cassava", "Cauliflower", "Celery", "Cherry",
  "Chestnut", "Chili", "Citrus", "Coffee", "Corn", "Cucumber", "Date palm",
  "Eggplant", "Garlic", "Ginger", "Grape", "Groundnut", "Guava", "Lettuce",
  "Mango", "Olive", "Papaya", "Peach", "Plum", "Potato", "Pumpkin", "Raspberry",
  "Rice", "Soybean", "Strawberry", "Sugarcane", "Tobacco", "Tomato", "Wheat",
];

export type CropIcon = "chestnut" | "grape" | "citrus" | "avocado";

/** Crops where our tools are running in the field. Each entry is confirmed
 *  individually before it is added, and each needs an icon in
 *  src/assets/crops/<icon>.svg. While empty, the Deployed panel does not
 *  render and the Testing panel takes the full width. */
export const DEPLOYED_CROPS: { name: string; icon: CropIcon }[] = [
  // { name: "Chestnut", icon: "chestnut" },
  // { name: "Grapes", icon: "grape" },
  // { name: "Citrus", icon: "citrus" },
  // { name: "Avocado", icon: "avocado" },
];

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

/** "43 crops" */
export const cropsPhrase = `${PLANTOLOGIST.crops} crops`;

// The published count and the ticker's list describe the same model. If one
// is updated without the other, fail the build rather than ship a mismatch.
if (TESTING_CROPS.length !== PLANTOLOGIST.crops) {
  throw new Error(
    `facts.ts: PLANTOLOGIST.crops is ${PLANTOLOGIST.crops} but TESTING_CROPS has ${TESTING_CROPS.length} entries`
  );
}
