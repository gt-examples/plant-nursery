"use client";

import { useState } from "react";
import type { Category } from "@/lib/plants";

interface CategoryFilterProps {
  categories: { id: Category; label: string }[];
  allLabel: string;
  children: (activeCategory: Category | null) => React.ReactNode;
}

export default function CategoryFilter({ categories, allLabel, children }: CategoryFilterProps) {
  const [active, setActive] = useState<Category | null>(null);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActive(null)}
          className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
            active === null
              ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-400"
              : "border-neutral-700 bg-neutral-900 text-neutral-400 hover:border-neutral-600 hover:text-neutral-300"
          }`}
        >
          {allLabel}
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(active === cat.id ? null : cat.id)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
              active === cat.id
                ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-400"
                : "border-neutral-700 bg-neutral-900 text-neutral-400 hover:border-neutral-600 hover:text-neutral-300"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      {children(active)}
    </div>
  );
}
