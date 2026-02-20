import { T, Var, Currency } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslatedPlants, plants as rawPlants } from "@/lib/plants";
import type { Category } from "@/lib/plants";

export function generateStaticParams() {
  return rawPlants.map((p) => ({ slug: p.id }));
}

export default async function PlantDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const gt = await getGT();
  const plants = await getTranslatedPlants(gt);
  const plant = plants.find((p) => p.id === slug);

  if (!plant) notFound();

  const difficultyLabel = {
    easy: gt("Easy"),
    moderate: gt("Moderate"),
    expert: gt("Expert"),
  }[plant.difficulty];

  const seasonLabel = {
    spring: gt("Spring"),
    summer: gt("Summer"),
    autumn: gt("Autumn"),
    winter: gt("Winter"),
    "year-round": gt("Year-round"),
  }[plant.season];

  const waterLabel = {
    low: gt("Low"),
    moderate: gt("Moderate water needs"),
    high: gt("High"),
  }[plant.waterNeeds];

  const lightLabel = {
    "full-sun": gt("Full sun"),
    "partial-shade": gt("Partial shade"),
    "full-shade": gt("Full shade"),
  }[plant.light];

  const categoryLabels: Record<Category, string> = {
    indoor: gt("Indoor"),
    outdoor: gt("Outdoor"),
    succulent: gt("Succulent"),
    flowering: gt("Flowering"),
    tree: gt("Tree"),
  };

  const difficultyColors = {
    easy: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    moderate: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    expert: "text-red-400 bg-red-400/10 border-red-400/20",
  };

  const careItems = [
    { label: gt("Watering"), value: plant.careGuide.watering },
    { label: gt("Sunlight"), value: plant.careGuide.sunlight },
    { label: gt("Soil"), value: plant.careGuide.soil },
    { label: gt("Temperature"), value: plant.careGuide.temperature },
    { label: gt("Humidity"), value: plant.careGuide.humidity },
    { label: gt("Fertilizing"), value: plant.careGuide.fertilizing },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <Link
              href="/"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              {gt("Plant Nursery")}
            </Link>
            <span className="text-neutral-700">/</span>
            <span className="text-sm font-semibold text-neutral-100">
              {plant.name}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/plant-nursery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-emerald-400 transition-colors mb-8"
        >
          ← {gt("Back to catalog")}
        </Link>

        {/* Hero section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-semibold text-neutral-100 mb-1">
                {plant.name}
              </h1>
              <p className="text-sm text-neutral-500 italic">{plant.species}</p>
            </div>
            <span className="text-2xl font-semibold text-emerald-400">
              <Currency currency="USD">{plant.price}</Currency>
            </span>
          </div>

          <p className="text-base text-neutral-400 leading-relaxed max-w-3xl mb-6">
            {plant.description}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${difficultyColors[plant.difficulty]}`}
            >
              {difficultyLabel}
            </span>
            {plant.categories.map((cat) => (
              <span
                key={cat}
                className="text-xs font-medium px-2.5 py-1 rounded-full border border-neutral-700 text-neutral-400"
              >
                {categoryLabels[cat]}
              </span>
            ))}
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <T>
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
              <span className="text-xs text-neutral-500 block mb-1">Season</span>
              <p className="text-sm font-medium text-neutral-200"><Var>{seasonLabel}</Var></p>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
              <span className="text-xs text-neutral-500 block mb-1">Growth rate</span>
              <p className="text-sm font-medium text-neutral-200"><Var>{plant.growthRate}</Var></p>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
              <span className="text-xs text-neutral-500 block mb-1">Water</span>
              <p className="text-sm font-medium text-neutral-200"><Var>{waterLabel}</Var></p>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
              <span className="text-xs text-neutral-500 block mb-1">Light</span>
              <p className="text-sm font-medium text-neutral-200"><Var>{lightLabel}</Var></p>
            </div>
          </T>
        </div>

        {/* Care Guide */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-neutral-100 mb-6">
            {gt("Care Guide")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {careItems.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-5"
              >
                <h3 className="text-sm font-semibold text-emerald-400 mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Growing Tips */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-neutral-100 mb-6">
            {gt("Growing Tips")}
          </h2>
          <div className="space-y-3">
            {plant.tips.map((tip, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-lg border border-neutral-800 bg-neutral-900/50 p-4"
              >
                <span className="text-emerald-400 font-semibold text-sm shrink-0">
                  {i + 1}.
                </span>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Seasonal Info */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-neutral-100 mb-4">
            {gt("Seasonal Information")}
          </h2>
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-5">
            <p className="text-sm text-neutral-400 leading-relaxed">
              {plant.seasonalInfo}
            </p>
          </div>
        </section>

        {/* Max height */}
        <T>
          <section className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-5 mb-12">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-500">Maximum height</span>
              <span className="text-sm font-semibold text-neutral-200"><Var>{plant.maxHeight}</Var></span>
            </div>
          </section>
        </T>
      </main>
    </div>
  );
}
