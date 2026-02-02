"use client";

import { useMemo, useState } from "react";

import HeroSection from "@/app/components/hero/HeroSection";
import { LatestUpdates } from "@/app/components/updates/LatestUpdates";
import { CardTimeline } from "@/app/components/cards/CardTimeline";
import { FilterTags } from "@/app/components/ui/FilterTags";

import { gameCards } from "@/lib/data/cards";
import { newsMatches } from "@/lib/data/news-matches";
import { gameUpdates } from "@/lib/data/updates";

function uniq(arr: string[]) {
  return Array.from(new Set(arr));
}

export default function Page() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tags = useMemo(() => {
    const fromNews = newsMatches.flatMap((n) => n.tags ?? []);
    const fromUpdates = gameUpdates.map((u) => u.category);
    return uniq([...fromNews, ...fromUpdates]).sort((a, b) => a.localeCompare(b));
  }, []);

  return (
    <main className="relative min-h-screen text-slate-800">
      <HeroSection />

      <div className="pb-8">
        <FilterTags tags={tags} selected={selectedTags} onChange={setSelectedTags} />
      </div>

      <CardTimeline cards={gameCards} news={newsMatches} updates={gameUpdates} selectedTags={selectedTags} />

      <LatestUpdates updates={gameUpdates} />

      <footer className="bg-[#f9fafb]">
        <div className="mx-auto w-full max-w-6xl px-6 pb-14 pt-6 text-xs text-slate-500">
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
          <p>
            Data shown here is for demonstration and prototyping. Sources remain with their original
            publishers.
          </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

