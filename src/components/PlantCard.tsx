import { T, Var, Currency } from "gt-next";
import { getGT } from "gt-next/server";
import Link from "next/link";
import type { Plant } from "@/lib/plants";

const difficultyColors = {
  easy: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  moderate: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  expert: "text-red-400 bg-red-400/10 border-red-400/20",
};

const seasonColors = {
  spring: "text-pink-400",
  summer: "text-yellow-400",
  autumn: "text-orange-400",
  winter: "text-blue-400",
  "year-round": "text-neutral-400",
};

export default async function PlantCard({ plant }: { plant: Plant }) {
  const gt = await getGT();

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

  return (
    <Link
      href={`/plant/${plant.id}`}
      className="block rounded-lg border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-600 transition-colors group"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-base font-semibold text-neutral-100 group-hover:text-emerald-400 transition-colors">
            {plant.name}
          </h3>
          <p className="text-xs text-neutral-500 italic">{plant.species}</p>
        </div>
        <span className="text-lg font-semibold text-emerald-400">
          <Currency currency="USD">{plant.price}</Currency>
        </span>
      </div>

      <p className="text-sm text-neutral-400 leading-relaxed mb-4">
        {plant.description}
      </p>

      <div className="flex items-center gap-2 mb-3">
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full border ${difficultyColors[plant.difficulty]}`}
        >
          {difficultyLabel}
        </span>
        <span className={`text-xs font-medium ${seasonColors[plant.season]}`}>
          {seasonLabel}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-y-2 text-xs">
        <T>
          <div>
            <span className="text-neutral-500">Growth</span>
            <p className="text-neutral-300 font-medium">
              <Var>{plant.growthRate}</Var>
            </p>
          </div>
          <div>
            <span className="text-neutral-500">Max height</span>
            <p className="text-neutral-300 font-medium">
              <Var>{plant.maxHeight}</Var>
            </p>
          </div>
          <div>
            <span className="text-neutral-500">Water</span>
            <p className="text-neutral-300 font-medium">
              <Var>{waterLabel}</Var>
            </p>
          </div>
          <div>
            <span className="text-neutral-500">Light</span>
            <p className="text-neutral-300 font-medium">
              <Var>{lightLabel}</Var>
            </p>
          </div>
        </T>
      </div>

      <div className="mt-3 pt-3 border-t border-neutral-800">
        <span className="text-xs text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
          {gt("View care guide")} →
        </span>
      </div>
    </Link>
  );
}
