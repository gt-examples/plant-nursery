export interface Plant {
  id: string;
  name: string;
  species: string;
  price: number;
  difficulty: "easy" | "moderate" | "expert";
  season: "spring" | "summer" | "autumn" | "winter" | "year-round";
  growthRate: string;
  maxHeight: string;
  waterNeeds: "low" | "moderate" | "high";
  light: "full-sun" | "partial-shade" | "full-shade";
  description: string;
}

export const plants: Plant[] = [
  {
    id: "monstera",
    name: "Monstera Deliciosa",
    species: "Monstera deliciosa",
    price: 34.99,
    difficulty: "easy",
    season: "year-round",
    growthRate: "60cm/year",
    maxHeight: "3m",
    waterNeeds: "moderate",
    light: "partial-shade",
    description:
      "A tropical favorite known for its dramatic split leaves. Thrives indoors with bright, indirect light.",
  },
  {
    id: "lavender",
    name: "English Lavender",
    species: "Lavandula angustifolia",
    price: 12.49,
    difficulty: "easy",
    season: "spring",
    growthRate: "30cm/year",
    maxHeight: "60cm",
    waterNeeds: "low",
    light: "full-sun",
    description:
      "Fragrant perennial with purple flower spikes. Excellent for borders, herb gardens, and pollinators.",
  },
  {
    id: "fiddle-leaf",
    name: "Fiddle Leaf Fig",
    species: "Ficus lyrata",
    price: 49.99,
    difficulty: "moderate",
    season: "year-round",
    growthRate: "45cm/year",
    maxHeight: "3m",
    waterNeeds: "moderate",
    light: "partial-shade",
    description:
      "Statement plant with large, violin-shaped leaves. Prefers consistent conditions and bright, filtered light.",
  },
  {
    id: "japanese-maple",
    name: "Japanese Maple",
    species: "Acer palmatum",
    price: 89.99,
    difficulty: "moderate",
    season: "autumn",
    growthRate: "30cm/year",
    maxHeight: "8m",
    waterNeeds: "moderate",
    light: "partial-shade",
    description:
      "Ornamental tree prized for its delicate, deeply lobed leaves and spectacular autumn color.",
  },
  {
    id: "orchid",
    name: "Moth Orchid",
    species: "Phalaenopsis",
    price: 24.99,
    difficulty: "moderate",
    season: "winter",
    growthRate: "15cm/year",
    maxHeight: "60cm",
    waterNeeds: "low",
    light: "partial-shade",
    description:
      "Elegant flowering plant that blooms for months. Perfect for windowsills and indoor displays.",
  },
  {
    id: "bonsai",
    name: "Juniper Bonsai",
    species: "Juniperus procumbens",
    price: 64.99,
    difficulty: "expert",
    season: "year-round",
    growthRate: "5cm/year",
    maxHeight: "30cm",
    waterNeeds: "moderate",
    light: "full-sun",
    description:
      "Classic bonsai species requiring careful pruning and shaping. Rewards patience with timeless beauty.",
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    species: "Dracaena trifasciata",
    price: 18.99,
    difficulty: "easy",
    season: "year-round",
    growthRate: "20cm/year",
    maxHeight: "1.2m",
    waterNeeds: "low",
    light: "full-shade",
    description:
      "Nearly indestructible succulent with upright, sword-shaped leaves. Excellent air purifier.",
  },
  {
    id: "cherry-blossom",
    name: "Cherry Blossom",
    species: "Prunus serrulata",
    price: 119.99,
    difficulty: "moderate",
    season: "spring",
    growthRate: "60cm/year",
    maxHeight: "12m",
    waterNeeds: "moderate",
    light: "full-sun",
    description:
      "Iconic flowering tree celebrated for its brief, spectacular spring bloom of pale pink blossoms.",
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    species: "Aloe barbadensis",
    price: 9.99,
    difficulty: "easy",
    season: "summer",
    growthRate: "15cm/year",
    maxHeight: "60cm",
    waterNeeds: "low",
    light: "full-sun",
    description:
      "Medicinal succulent with thick, gel-filled leaves. Low maintenance and useful for minor burns and skin care.",
  },
];

/**
 * Returns translated plant data. Must be called from a server component context.
 * Each string is a literal so gtx-cli can extract them.
 */
export async function getTranslatedPlants(
  gt: (s: string) => string
): Promise<Plant[]> {
  const names: Record<string, string> = {
    monstera: gt("Monstera Deliciosa"),
    lavender: gt("English Lavender"),
    "fiddle-leaf": gt("Fiddle Leaf Fig"),
    "japanese-maple": gt("Japanese Maple"),
    orchid: gt("Moth Orchid"),
    bonsai: gt("Juniper Bonsai"),
    "snake-plant": gt("Snake Plant"),
    "cherry-blossom": gt("Cherry Blossom"),
    "aloe-vera": gt("Aloe Vera"),
  };

  const descriptions: Record<string, string> = {
    monstera: gt(
      "A tropical favorite known for its dramatic split leaves. Thrives indoors with bright, indirect light."
    ),
    lavender: gt(
      "Fragrant perennial with purple flower spikes. Excellent for borders, herb gardens, and pollinators."
    ),
    "fiddle-leaf": gt(
      "Statement plant with large, violin-shaped leaves. Prefers consistent conditions and bright, filtered light."
    ),
    "japanese-maple": gt(
      "Ornamental tree prized for its delicate, deeply lobed leaves and spectacular autumn color."
    ),
    orchid: gt(
      "Elegant flowering plant that blooms for months. Perfect for windowsills and indoor displays."
    ),
    bonsai: gt(
      "Classic bonsai species requiring careful pruning and shaping. Rewards patience with timeless beauty."
    ),
    "snake-plant": gt(
      "Nearly indestructible succulent with upright, sword-shaped leaves. Excellent air purifier."
    ),
    "cherry-blossom": gt(
      "Iconic flowering tree celebrated for its brief, spectacular spring bloom of pale pink blossoms."
    ),
    "aloe-vera": gt(
      "Medicinal succulent with thick, gel-filled leaves. Low maintenance and useful for minor burns and skin care."
    ),
  };

  return plants.map((p) => ({
    ...p,
    name: names[p.id] ?? p.name,
    description: descriptions[p.id] ?? p.description,
  }));
}
