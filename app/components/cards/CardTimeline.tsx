"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { format } from "date-fns";
import type { GameCard, GameUpdate, NewsMatch } from "@/lib/types";
import { ScrollTimestamp } from "@/app/components/ui/ScrollTimestamp";

type TimelineItem =
  | {
      kind: "news";
      id: string;
      date: Date;
      title: string;
      subtitle: string;
      tags: string[];
      url: string;
      source: string;
      cardId: string;
    }
  | {
      kind: "update";
      id: string;
      date: Date;
      title: string;
      subtitle: string;
      tags: string[];
      category: string;
    };

type Props = {
  cards: GameCard[];
  news: NewsMatch[];
  updates: GameUpdate[];
  selectedTags: string[];
};

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export function CardTimeline({ cards, news, updates, selectedTags }: Props) {
  const cardNameById = useMemo(() => {
    const map = new Map<string, string>();
    cards.forEach((c) => map.set(c.id, c.name));
    return map;
  }, [cards]);

  const allItems: TimelineItem[] = useMemo(() => {
    const newsItems: TimelineItem[] = news.map((n) => ({
      kind: "news",
      id: n.id,
      date: n.date,
      title: n.headline,
      subtitle: n.summary,
      tags: n.tags ?? [],
      url: n.url,
      source: n.source,
      cardId: n.cardId,
    }));

    const updateItems: TimelineItem[] = updates.map((u) => ({
      kind: "update",
      id: u.id,
      date: u.date,
      title: u.title,
      subtitle: u.description,
      tags: [u.category],
      category: u.category,
    }));

    return [...newsItems, ...updateItems].sort((a, b) => b.date.getTime() - a.date.getTime());
  }, [news, updates]);

  const filtered = useMemo(() => {
    if (!selectedTags.length) return allItems;
    const set = new Set(selectedTags);
    return allItems.filter((it) => it.tags?.some((t) => set.has(t)));
  }, [allItems, selectedTags]);

  const groups = useMemo(() => {
    const map = new Map<string, TimelineItem[]>();
    for (const item of filtered) {
      const key = format(item.date, "yyyy");
      map.set(key, [...(map.get(key) ?? []), item]);
    }
    // Ensure stable order within year (already sorted globally)
    return Array.from(map.entries()).sort((a, b) => Number(b[0]) - Number(a[0]));
  }, [filtered]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const entries = root.querySelectorAll<HTMLElement>("[data-timestamp]");
    if (!entries.length) return;

    const observer = new IntersectionObserver(
      (obsEntries) => {
        // pick the entry closest to top (smallest positive boundingClientRect.top)
        const visible = obsEntries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            top: e.boundingClientRect.top,
            label: (e.target as HTMLElement).dataset.timestamp ?? null,
          }))
          .filter((v) => v.label);

        if (!visible.length) return;

        visible.sort((a, b) => Math.abs(a.top) - Math.abs(b.top));
        setActiveLabel(visible[0]!.label);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.75],
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    entries.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  const availableTags = useMemo(() => {
    const fromNews = news.flatMap((n) => n.tags ?? []);
    const fromUpdates = updates.map((u) => u.category);
    return uniq([...fromNews, ...fromUpdates]).sort((a, b) => a.localeCompare(b));
  }, [news, updates]);

  return (
    <section
      id="timeline"
      className="relative bg-gradient-to-b from-[#f9fafb] via-white to-[#f3f4f6] pb-16"
      ref={containerRef}
    >
      <ScrollTimestamp label={activeLabel} />

      <div className="mx-auto w-full max-w-6xl px-6 pt-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Timeline
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              News matches and Energetic milestones, grouped by year.
            </p>
          </div>

          <div className="text-xs text-slate-500">
            Showing <span className="text-slate-800">{filtered.length}</span> items
            {selectedTags.length ? (
              <>
                {" "}
                for <span className="text-slate-800">{selectedTags.join(", ")}</span>
              </>
            ) : (
              <>
                {" "}
                (all tags: <span className="text-slate-800">{availableTags.length}</span>)
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 w-full max-w-6xl px-6">
        <div className="grid gap-8">
          {groups.map(([year, items]) => (
            <div
              key={year}
              className="rounded-3xl border border-[#e5e7eb] bg-white p-5 shadow-sm"
            >
              <div className="flex items-baseline justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#f9fafb] to-[#f3f4f6] px-4 py-3">
                <h3 className="text-lg font-semibold text-slate-900">{year}</h3>
                <span className="text-xs text-slate-500">{items.length} items</span>
              </div>

              <div className="mt-5 grid gap-4">
                {items.map((item, idx) => {
                  const ts = format(item.date, "MMM yyyy");
                  const pill = item.kind === "news" ? "News match" : item.category;
                  const accent =
                    item.kind === "news" ? "border-[#bbf7d0]" : "border-[#dcfce7]";

                  return (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.35, delay: idx * 0.02 }}
                      data-timestamp={ts}
                      className={[
                        "group rounded-2xl border bg-white p-5 transition shadow-sm",
                        "border-[#e5e7eb] hover:border-[#86efac]",
                        accent,
                      ].join(" ")}
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full border border-[#e5e7eb] bg-[#f3f4f6] px-2 py-0.5 text-[11px] text-slate-700">
                              {pill}
                            </span>
                            <time className="text-[11px] text-slate-500">{ts}</time>
                            {item.kind === "news" ? (
                              <span className="text-[11px] text-slate-500">
                                • {item.source}
                              </span>
                            ) : null}
                          </div>

                          <h4 className="mt-2 text-pretty text-base font-semibold text-slate-900">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.subtitle}</p>
                        </div>

                        {item.kind === "news" ? (
                          <a
                            className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#e5e7eb] bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-[#86efac]"
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Open
                            <ExternalLink className="h-3.5 w-3.5 text-[#22c55e]" />
                          </a>
                        ) : null}
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {item.kind === "news" ? (
                          <span className="rounded-full border border-[#bbf7d0] bg-[#dcfce7] px-2 py-0.5 text-[11px] text-slate-700">
                            Card:{" "}
                            <span className="text-slate-900">
                              {cardNameById.get(item.cardId) ?? item.cardId}
                            </span>
                          </span>
                        ) : null}

                        {uniq(item.tags).slice(0, 6).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-[#bbf7d0] bg-[#dcfce7] px-2 py-0.5 text-[11px] text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

