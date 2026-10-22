// Public facts used across the site. Update here, not in components.
//
// Only publish what is actually serving. The v2 model is prepared below but
// is NOT live; see PENDING_V2.

export type Crop = { name: string; classes: number };

/** Crop names for the serving model. Empty because the names have not been
 *  supplied, so components say "nine crops" and hide the list. */
export const CROPS: Crop[] = [];

/** The serving model. */
export const PLANTOLOGIST = {
  crops: 9,
  diseaseClasses: 64,
  top1: "90.3%",
};

/** NOT LIVE. The commercial v2 model, ready for when it becomes the serving
 *  default. To switch: set CROPS to PENDING_V2.crops, set PLANTOLOGIST.crops
 *  to 29 and the class count to 157, and replace the accuracy figure with one
 *  measured on THIS model. The 90.3% above was measured on the 9-crop,
 *  64-class model and does not describe v2.
 *
 *  Note the wording changes too: v2's classes cover diseases, pests,
 *  deficiencies and healthy, so they are "classes", not "disease classes".
 *
 *  The research model covers more crops than these, but fourteen of them have
 *  no commercial classes, so that wider count is not for publication. */
export const PENDING_V2 = {
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
 *  This is the full training set. PENDING_V2 above is the narrower list of
 *  crops with commercial classes, which is a different claim. */
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

export const hasCrops = CROPS.length > 0;

/** "nine crops: a, b and c" when the names exist, otherwise "nine crops". */
export const cropsPhrase = hasCrops
  ? `nine crops: ${formatList(CROPS.map((c) => c.name.toLowerCase()))}`
  : "nine crops";

if (!hasCrops) {
  console.warn("facts.ts: CROPS is empty – crop list hidden");
}
