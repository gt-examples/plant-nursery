export type Category = "indoor" | "outdoor" | "succulent" | "flowering" | "tree";

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
  categories: Category[];
  careGuide: {
    watering: string;
    sunlight: string;
    soil: string;
    temperature: string;
    humidity: string;
    fertilizing: string;
  };
  tips: string[];
  seasonalInfo: string;
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
    categories: ["indoor"],
    careGuide: {
      watering: "Water every 1-2 weeks, allowing soil to dry out between waterings. Reduce frequency in winter.",
      sunlight: "Bright, indirect light. Can tolerate medium light but growth will slow. Avoid direct sunlight which scorches leaves.",
      soil: "Well-draining potting mix with perlite. A peat-based mix with added orchid bark works well.",
      temperature: "18-30°C. Keep away from cold drafts and temperatures below 10°C.",
      humidity: "Prefers 60%+ humidity. Mist regularly or use a humidifier in dry environments.",
      fertilizing: "Feed monthly during spring and summer with a balanced liquid fertilizer. Stop in winter.",
    },
    tips: [
      "Rotate the pot quarterly for even growth on all sides.",
      "Clean leaves with a damp cloth to remove dust and improve photosynthesis.",
      "Use a moss pole or trellis to support climbing growth and encourage larger leaves.",
      "Yellow leaves usually indicate overwatering — check the soil moisture before watering again.",
    ],
    seasonalInfo: "Grows actively in spring and summer. Reduce watering in autumn and winter when growth slows. New leaves unfurl more slowly in cooler months.",
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
    categories: ["outdoor", "flowering"],
    careGuide: {
      watering: "Water deeply but infrequently. Allow soil to dry completely between waterings. Overwatering causes root rot.",
      sunlight: "Full sun, at least 6-8 hours daily. More sun produces more fragrant blooms.",
      soil: "Sandy, well-draining soil with a slightly alkaline pH. Avoid heavy clay or constantly moist soil.",
      temperature: "Hardy to -15°C once established. Prefers warm, dry summers.",
      humidity: "Prefers low humidity. Good air circulation prevents fungal diseases.",
      fertilizing: "Minimal feeding needed. A light application of compost in spring is sufficient. Over-fertilizing reduces fragrance.",
    },
    tips: [
      "Prune after flowering to maintain compact shape and prevent woody, leggy growth.",
      "Harvest flower spikes just as the buds begin to open for the strongest fragrance.",
      "Plant in raised beds or mounds if your soil is heavy clay to improve drainage.",
      "Excellent companion plant that repels pests like mosquitoes and deer.",
    ],
    seasonalInfo: "Blooms in late spring to early summer. Prune lightly after the first flush to encourage a second bloom. Cut back by one-third in early spring before new growth appears.",
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
    categories: ["indoor"],
    careGuide: {
      watering: "Water when the top 5cm of soil feels dry. Use room-temperature water and ensure thorough drainage.",
      sunlight: "Bright, filtered light near an east or south-facing window. Avoid sudden changes in light exposure.",
      soil: "Well-draining potting mix. A blend of standard potting soil, perlite, and pine bark works well.",
      temperature: "16-24°C. Extremely sensitive to cold drafts and sudden temperature changes.",
      humidity: "Prefers moderate to high humidity, around 40-60%. Brown leaf edges indicate low humidity.",
      fertilizing: "Feed every two weeks during the growing season with a diluted liquid fertilizer. Pause in winter.",
    },
    tips: [
      "Find a spot and leave it — fiddle leaf figs dislike being moved and may drop leaves in protest.",
      "Wipe leaves monthly with a damp cloth to keep them glossy and free of dust.",
      "If the trunk is thin and weak, gently shake it for a few minutes daily to strengthen it.",
      "Brown spots on leaves can indicate either overwatering or bacterial infection — inspect roots if unsure.",
    ],
    seasonalInfo: "Active growth occurs from spring through early autumn. Expect very little growth in winter. Reduce watering frequency by half during the dormant season.",
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
    categories: ["outdoor", "tree"],
    careGuide: {
      watering: "Keep soil consistently moist but not waterlogged. Water deeply during hot, dry periods. Mulch to retain moisture.",
      sunlight: "Morning sun with afternoon shade is ideal. Too much direct sun can scorch delicate leaves.",
      soil: "Rich, slightly acidic soil with excellent drainage. Amend with compost and organic matter.",
      temperature: "Hardy to -20°C. Protect from harsh winter winds and late spring frosts that can damage new growth.",
      humidity: "Tolerates a range of humidity levels. Leaf scorch in dry conditions indicates a need for more water.",
      fertilizing: "Apply a slow-release fertilizer in early spring. Avoid high-nitrogen fertilizers which promote weak growth.",
    },
    tips: [
      "Prune in late winter while dormant to shape the canopy and remove crossing branches.",
      "Container specimens need protection from freezing — move to a sheltered location in winter.",
      "Avoid planting in exposed, windy sites which can damage the delicate foliage.",
      "Leaf scorch is common in hot summers — increase watering and provide afternoon shade.",
    ],
    seasonalInfo: "Leaves emerge in spring with vibrant reds and greens. Summer foliage provides dappled shade. The spectacular autumn color display lasts several weeks before leaves drop for winter dormancy.",
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
    categories: ["indoor", "flowering"],
    careGuide: {
      watering: "Water once a week by soaking the roots for 10-15 minutes, then drain completely. Never let roots sit in water.",
      sunlight: "Bright, indirect light. An east-facing window is ideal. Leaves should be olive green — dark green means too little light.",
      soil: "Orchid bark mix or sphagnum moss. Never use standard potting soil which suffocates the roots.",
      temperature: "18-27°C during the day. A 5-10 degree drop at night helps trigger blooming.",
      humidity: "50-70% humidity is ideal. Place on a humidity tray or group with other plants.",
      fertilizing: "Feed weekly with a diluted orchid fertilizer during active growth. Use the 'weakly, weekly' approach.",
    },
    tips: [
      "After flowers drop, cut the spike above a node to encourage a secondary bloom spike.",
      "Healthy roots are firm and green or silvery. Mushy brown roots should be trimmed away.",
      "Repot every 1-2 years when the bark medium begins to decompose.",
      "Transparent pots let you monitor root health and allow roots to photosynthesize.",
    ],
    seasonalInfo: "Typically blooms in winter, with flowers lasting 2-3 months. The rest period in summer is when the plant grows new leaves and roots. A cooler autumn triggers flower spike development.",
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
    categories: ["outdoor"],
    careGuide: {
      watering: "Water when the top layer of soil begins to dry. Never allow the soil to dry out completely. Frequency varies by season.",
      sunlight: "Full sun outdoors. Junipers are outdoor trees and will decline indoors. At least 4-6 hours of direct sun daily.",
      soil: "Akadama, pumice, and lava rock mix for excellent drainage and aeration. Avoid organic-heavy mixes.",
      temperature: "Hardy to -10°C. Needs a winter dormancy period with cold temperatures. Protect from extreme freezes.",
      humidity: "Moderate humidity. Morning misting is beneficial in dry climates but avoid keeping foliage constantly wet.",
      fertilizing: "Feed every two weeks during the growing season with a balanced bonsai fertilizer. Reduce to monthly in autumn.",
    },
    tips: [
      "Never bring a juniper bonsai permanently indoors — it requires outdoor conditions and seasonal changes.",
      "Pinch new growth rather than cutting with scissors to maintain the natural look of the foliage pads.",
      "Wire branches in autumn when they are most flexible. Remove wire before it cuts into the bark.",
      "Brown foliage does not recover. Ensure you maintain good watering habits to prevent dieback.",
    ],
    seasonalInfo: "Active growth occurs in spring and summer. Wiring and major structural pruning are best done in autumn. Winter dormancy is essential — the tree needs cold temperatures to remain healthy long-term.",
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
    categories: ["indoor", "succulent"],
    careGuide: {
      watering: "Water every 2-6 weeks depending on light and temperature. Allow soil to dry completely between waterings.",
      sunlight: "Tolerates low light to bright indirect light. Grows fastest in bright, indirect conditions.",
      soil: "Well-draining cactus or succulent mix. Add extra perlite for improved drainage.",
      temperature: "15-30°C. Avoid temperatures below 10°C which can cause cold damage to leaves.",
      humidity: "Tolerates dry air well. No special humidity requirements, making it perfect for heated homes.",
      fertilizing: "Feed once in spring and once in summer with a diluted all-purpose fertilizer. Skip autumn and winter.",
    },
    tips: [
      "The most common killer is overwatering — when in doubt, wait another week before watering.",
      "Divide overcrowded plants in spring by separating the root ball into sections.",
      "Remove individual damaged leaves by cutting them at the soil line with a clean blade.",
      "NASA research identified this plant as one of the best for filtering indoor air pollutants.",
    ],
    seasonalInfo: "Grows steadily year-round in indoor conditions. Growth is fastest in the warm months of spring and summer. Winter watering should be reduced to once a month or less.",
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
    categories: ["outdoor", "tree", "flowering"],
    careGuide: {
      watering: "Water deeply once a week during the first two years. Established trees are more drought tolerant but benefit from watering in dry spells.",
      sunlight: "Full sun, at least 6 hours daily. More sunlight produces more prolific blooming.",
      soil: "Rich, well-draining soil. Slightly acidic to neutral pH. Amend heavy clay with compost before planting.",
      temperature: "Hardy to -25°C. Requires winter chill hours to produce spring blossoms. Not suited for tropical climates.",
      humidity: "Average humidity is fine. Good air circulation helps prevent fungal diseases common in cherry trees.",
      fertilizing: "Apply a balanced fertilizer in early spring before bloom. Avoid fertilizing after midsummer to allow the tree to prepare for dormancy.",
    },
    tips: [
      "Plant in a sheltered spot to protect delicate blossoms from strong spring winds.",
      "Prune after flowering, not in winter, to avoid removing next year's flower buds.",
      "Watch for aphids and caterpillars in spring — a strong water spray dislodges most pests.",
      "Fallen petals create a beautiful carpet effect — consider planting near a path or patio to enjoy it.",
    ],
    seasonalInfo: "The famous bloom period lasts only 1-2 weeks in early to mid-spring. Summer brings full green foliage. Autumn color is golden to amber. Winter reveals an elegant branching structure.",
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
    categories: ["indoor", "succulent"],
    careGuide: {
      watering: "Water deeply every 2-3 weeks. Allow the soil to dry completely between waterings. Reduce to monthly in winter.",
      sunlight: "Bright, direct or indirect light. Gradually acclimate to direct sun to avoid sunburn on leaves.",
      soil: "Sandy, fast-draining cactus mix. Add coarse sand or perlite to standard potting soil.",
      temperature: "13-27°C. Cannot tolerate frost. Bring indoors when temperatures drop below 10°C.",
      humidity: "Prefers dry conditions. Average household humidity is fine. Avoid misting.",
      fertilizing: "Feed once in spring with a diluted succulent fertilizer. Aloe is a light feeder and over-fertilizing causes soft, weak growth.",
    },
    tips: [
      "Harvest outer leaves first for gel — they are the oldest and most mature.",
      "Pups (offsets) can be separated and repotted once they are about 10cm tall.",
      "Terracotta pots are ideal because they allow the soil to dry evenly and prevent overwatering.",
      "If leaves are thin and curled, the plant is using its water reserves and needs a drink.",
    ],
    seasonalInfo: "Most active growth occurs in spring and summer. Mature plants may produce a tall flower spike in summer. Reduce watering significantly in winter when the plant enters a rest period.",
  },
];

export const categoryList: Category[] = ["indoor", "outdoor", "succulent", "flowering", "tree"];

/**
 * Returns translated plant data. Must be called from a server component context.
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
    monstera: gt("A tropical favorite known for its dramatic split leaves. Thrives indoors with bright, indirect light."),
    lavender: gt("Fragrant perennial with purple flower spikes. Excellent for borders, herb gardens, and pollinators."),
    "fiddle-leaf": gt("Statement plant with large, violin-shaped leaves. Prefers consistent conditions and bright, filtered light."),
    "japanese-maple": gt("Ornamental tree prized for its delicate, deeply lobed leaves and spectacular autumn color."),
    orchid: gt("Elegant flowering plant that blooms for months. Perfect for windowsills and indoor displays."),
    bonsai: gt("Classic bonsai species requiring careful pruning and shaping. Rewards patience with timeless beauty."),
    "snake-plant": gt("Nearly indestructible succulent with upright, sword-shaped leaves. Excellent air purifier."),
    "cherry-blossom": gt("Iconic flowering tree celebrated for its brief, spectacular spring bloom of pale pink blossoms."),
    "aloe-vera": gt("Medicinal succulent with thick, gel-filled leaves. Low maintenance and useful for minor burns and skin care."),
  };

  const careGuides: Record<string, Plant["careGuide"]> = {
    monstera: {
      watering: gt("Water every 1-2 weeks, allowing soil to dry out between waterings. Reduce frequency in winter."),
      sunlight: gt("Bright, indirect light. Can tolerate medium light but growth will slow. Avoid direct sunlight which scorches leaves."),
      soil: gt("Well-draining potting mix with perlite. A peat-based mix with added orchid bark works well."),
      temperature: gt("18-30°C. Keep away from cold drafts and temperatures below 10°C."),
      humidity: gt("Prefers 60%+ humidity. Mist regularly or use a humidifier in dry environments."),
      fertilizing: gt("Feed monthly during spring and summer with a balanced liquid fertilizer. Stop in winter."),
    },
    lavender: {
      watering: gt("Water deeply but infrequently. Allow soil to dry completely between waterings. Overwatering causes root rot."),
      sunlight: gt("Full sun, at least 6-8 hours daily. More sun produces more fragrant blooms."),
      soil: gt("Sandy, well-draining soil with a slightly alkaline pH. Avoid heavy clay or constantly moist soil."),
      temperature: gt("Hardy to -15°C once established. Prefers warm, dry summers."),
      humidity: gt("Prefers low humidity. Good air circulation prevents fungal diseases."),
      fertilizing: gt("Minimal feeding needed. A light application of compost in spring is sufficient. Over-fertilizing reduces fragrance."),
    },
    "fiddle-leaf": {
      watering: gt("Water when the top 5cm of soil feels dry. Use room-temperature water and ensure thorough drainage."),
      sunlight: gt("Bright, filtered light near an east or south-facing window. Avoid sudden changes in light exposure."),
      soil: gt("Well-draining potting mix. A blend of standard potting soil, perlite, and pine bark works well."),
      temperature: gt("16-24°C. Extremely sensitive to cold drafts and sudden temperature changes."),
      humidity: gt("Prefers moderate to high humidity, around 40-60%. Brown leaf edges indicate low humidity."),
      fertilizing: gt("Feed every two weeks during the growing season with a diluted liquid fertilizer. Pause in winter."),
    },
    "japanese-maple": {
      watering: gt("Keep soil consistently moist but not waterlogged. Water deeply during hot, dry periods. Mulch to retain moisture."),
      sunlight: gt("Morning sun with afternoon shade is ideal. Too much direct sun can scorch delicate leaves."),
      soil: gt("Rich, slightly acidic soil with excellent drainage. Amend with compost and organic matter."),
      temperature: gt("Hardy to -20°C. Protect from harsh winter winds and late spring frosts that can damage new growth."),
      humidity: gt("Tolerates a range of humidity levels. Leaf scorch in dry conditions indicates a need for more water."),
      fertilizing: gt("Apply a slow-release fertilizer in early spring. Avoid high-nitrogen fertilizers which promote weak growth."),
    },
    orchid: {
      watering: gt("Water once a week by soaking the roots for 10-15 minutes, then drain completely. Never let roots sit in water."),
      sunlight: gt("Bright, indirect light. An east-facing window is ideal. Leaves should be olive green — dark green means too little light."),
      soil: gt("Orchid bark mix or sphagnum moss. Never use standard potting soil which suffocates the roots."),
      temperature: gt("18-27°C during the day. A 5-10 degree drop at night helps trigger blooming."),
      humidity: gt("50-70% humidity is ideal. Place on a humidity tray or group with other plants."),
      fertilizing: gt("Feed weekly with a diluted orchid fertilizer during active growth. Use the 'weakly, weekly' approach."),
    },
    bonsai: {
      watering: gt("Water when the top layer of soil begins to dry. Never allow the soil to dry out completely. Frequency varies by season."),
      sunlight: gt("Full sun outdoors. Junipers are outdoor trees and will decline indoors. At least 4-6 hours of direct sun daily."),
      soil: gt("Akadama, pumice, and lava rock mix for excellent drainage and aeration. Avoid organic-heavy mixes."),
      temperature: gt("Hardy to -10°C. Needs a winter dormancy period with cold temperatures. Protect from extreme freezes."),
      humidity: gt("Moderate humidity. Morning misting is beneficial in dry climates but avoid keeping foliage constantly wet."),
      fertilizing: gt("Feed every two weeks during the growing season with a balanced bonsai fertilizer. Reduce to monthly in autumn."),
    },
    "snake-plant": {
      watering: gt("Water every 2-6 weeks depending on light and temperature. Allow soil to dry completely between waterings."),
      sunlight: gt("Tolerates low light to bright indirect light. Grows fastest in bright, indirect conditions."),
      soil: gt("Well-draining cactus or succulent mix. Add extra perlite for improved drainage."),
      temperature: gt("15-30°C. Avoid temperatures below 10°C which can cause cold damage to leaves."),
      humidity: gt("Tolerates dry air well. No special humidity requirements, making it perfect for heated homes."),
      fertilizing: gt("Feed once in spring and once in summer with a diluted all-purpose fertilizer. Skip autumn and winter."),
    },
    "cherry-blossom": {
      watering: gt("Water deeply once a week during the first two years. Established trees are more drought tolerant but benefit from watering in dry spells."),
      sunlight: gt("Full sun, at least 6 hours daily. More sunlight produces more prolific blooming."),
      soil: gt("Rich, well-draining soil. Slightly acidic to neutral pH. Amend heavy clay with compost before planting."),
      temperature: gt("Hardy to -25°C. Requires winter chill hours to produce spring blossoms. Not suited for tropical climates."),
      humidity: gt("Average humidity is fine. Good air circulation helps prevent fungal diseases common in cherry trees."),
      fertilizing: gt("Apply a balanced fertilizer in early spring before bloom. Avoid fertilizing after midsummer to allow the tree to prepare for dormancy."),
    },
    "aloe-vera": {
      watering: gt("Water deeply every 2-3 weeks. Allow the soil to dry completely between waterings. Reduce to monthly in winter."),
      sunlight: gt("Bright, direct or indirect light. Gradually acclimate to direct sun to avoid sunburn on leaves."),
      soil: gt("Sandy, fast-draining cactus mix. Add coarse sand or perlite to standard potting soil."),
      temperature: gt("13-27°C. Cannot tolerate frost. Bring indoors when temperatures drop below 10°C."),
      humidity: gt("Prefers dry conditions. Average household humidity is fine. Avoid misting."),
      fertilizing: gt("Feed once in spring with a diluted succulent fertilizer. Aloe is a light feeder and over-fertilizing causes soft, weak growth."),
    },
  };

  const tipsMap: Record<string, string[]> = {
    monstera: [
      gt("Rotate the pot quarterly for even growth on all sides."),
      gt("Clean leaves with a damp cloth to remove dust and improve photosynthesis."),
      gt("Use a moss pole or trellis to support climbing growth and encourage larger leaves."),
      gt("Yellow leaves usually indicate overwatering — check the soil moisture before watering again."),
    ],
    lavender: [
      gt("Prune after flowering to maintain compact shape and prevent woody, leggy growth."),
      gt("Harvest flower spikes just as the buds begin to open for the strongest fragrance."),
      gt("Plant in raised beds or mounds if your soil is heavy clay to improve drainage."),
      gt("Excellent companion plant that repels pests like mosquitoes and deer."),
    ],
    "fiddle-leaf": [
      gt("Find a spot and leave it — fiddle leaf figs dislike being moved and may drop leaves in protest."),
      gt("Wipe leaves monthly with a damp cloth to keep them glossy and free of dust."),
      gt("If the trunk is thin and weak, gently shake it for a few minutes daily to strengthen it."),
      gt("Brown spots on leaves can indicate either overwatering or bacterial infection — inspect roots if unsure."),
    ],
    "japanese-maple": [
      gt("Prune in late winter while dormant to shape the canopy and remove crossing branches."),
      gt("Container specimens need protection from freezing — move to a sheltered location in winter."),
      gt("Avoid planting in exposed, windy sites which can damage the delicate foliage."),
      gt("Leaf scorch is common in hot summers — increase watering and provide afternoon shade."),
    ],
    orchid: [
      gt("After flowers drop, cut the spike above a node to encourage a secondary bloom spike."),
      gt("Healthy roots are firm and green or silvery. Mushy brown roots should be trimmed away."),
      gt("Repot every 1-2 years when the bark medium begins to decompose."),
      gt("Transparent pots let you monitor root health and allow roots to photosynthesize."),
    ],
    bonsai: [
      gt("Never bring a juniper bonsai permanently indoors — it requires outdoor conditions and seasonal changes."),
      gt("Pinch new growth rather than cutting with scissors to maintain the natural look of the foliage pads."),
      gt("Wire branches in autumn when they are most flexible. Remove wire before it cuts into the bark."),
      gt("Brown foliage does not recover. Ensure you maintain good watering habits to prevent dieback."),
    ],
    "snake-plant": [
      gt("The most common killer is overwatering — when in doubt, wait another week before watering."),
      gt("Divide overcrowded plants in spring by separating the root ball into sections."),
      gt("Remove individual damaged leaves by cutting them at the soil line with a clean blade."),
      gt("NASA research identified this plant as one of the best for filtering indoor air pollutants."),
    ],
    "cherry-blossom": [
      gt("Plant in a sheltered spot to protect delicate blossoms from strong spring winds."),
      gt("Prune after flowering, not in winter, to avoid removing next year's flower buds."),
      gt("Watch for aphids and caterpillars in spring — a strong water spray dislodges most pests."),
      gt("Fallen petals create a beautiful carpet effect — consider planting near a path or patio to enjoy it."),
    ],
    "aloe-vera": [
      gt("Harvest outer leaves first for gel — they are the oldest and most mature."),
      gt("Pups (offsets) can be separated and repotted once they are about 10cm tall."),
      gt("Terracotta pots are ideal because they allow the soil to dry evenly and prevent overwatering."),
      gt("If leaves are thin and curled, the plant is using its water reserves and needs a drink."),
    ],
  };

  const seasonalInfoMap: Record<string, string> = {
    monstera: gt("Grows actively in spring and summer. Reduce watering in autumn and winter when growth slows. New leaves unfurl more slowly in cooler months."),
    lavender: gt("Blooms in late spring to early summer. Prune lightly after the first flush to encourage a second bloom. Cut back by one-third in early spring before new growth appears."),
    "fiddle-leaf": gt("Active growth occurs from spring through early autumn. Expect very little growth in winter. Reduce watering frequency by half during the dormant season."),
    "japanese-maple": gt("Leaves emerge in spring with vibrant reds and greens. Summer foliage provides dappled shade. The spectacular autumn color display lasts several weeks before leaves drop for winter dormancy."),
    orchid: gt("Typically blooms in winter, with flowers lasting 2-3 months. The rest period in summer is when the plant grows new leaves and roots. A cooler autumn triggers flower spike development."),
    bonsai: gt("Active growth occurs in spring and summer. Wiring and major structural pruning are best done in autumn. Winter dormancy is essential — the tree needs cold temperatures to remain healthy long-term."),
    "snake-plant": gt("Grows steadily year-round in indoor conditions. Growth is fastest in the warm months of spring and summer. Winter watering should be reduced to once a month or less."),
    "cherry-blossom": gt("The famous bloom period lasts only 1-2 weeks in early to mid-spring. Summer brings full green foliage. Autumn color is golden to amber. Winter reveals an elegant branching structure."),
    "aloe-vera": gt("Most active growth occurs in spring and summer. Mature plants may produce a tall flower spike in summer. Reduce watering significantly in winter when the plant enters a rest period."),
  };

  return plants.map((p) => ({
    ...p,
    name: names[p.id] ?? p.name,
    description: descriptions[p.id] ?? p.description,
    careGuide: careGuides[p.id] ?? p.careGuide,
    tips: tipsMap[p.id] ?? p.tips,
    seasonalInfo: seasonalInfoMap[p.id] ?? p.seasonalInfo,
  }));
}
