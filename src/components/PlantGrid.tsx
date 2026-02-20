"use client";

import type { Category, Plant } from "@/lib/plants";

interface PlantGridProps {
  plants: Plant[];
  activeCategory: Category | null;
  plantCards: Record<string, React.ReactNode>;
}

export default function PlantGrid({ plants, activeCategory, plantCards }: PlantGridProps) {
  const filtered = activeCategory
    ? plants.filter((p) => p.categories.includes(activeCategory))
    : plants;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((plant) => (
        <div key={plant.id}>{plantCards[plant.id]}</div>
      ))}
    </div>
  );
}
