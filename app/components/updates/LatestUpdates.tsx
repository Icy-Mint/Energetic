"use client";

import { motion } from "framer-motion";
import { format } from "date-fns";
import type { GameUpdate } from "@/lib/types";
import { CalendarDays } from "lucide-react";

type Props = {
  updates: GameUpdate[];
};

export function LatestUpdates({ updates }: Props) {
  const sorted = [...updates].sort((a, b) => b.date.getTime() - a.date.getTime());
  const latest = sorted.slice(0, 6);

  return (
    <section id="updates" className="bg-[#f8f9fa] py-10 sm:py-14">
      <div className="mx-auto w-full max-w-6xl px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Latest updates
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Milestones, presentations, and changes to the Energetic decks.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((u, idx) => (
          <motion.article
            key={u.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: idx * 0.03 }}
            className="group rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-sm transition hover:border-[#86efac]"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[#dcfce7] text-[#22c55e]">
                  <CalendarDays className="h-4 w-4" />
                </span>
                <span className="rounded-full border border-[#bbf7d0] bg-[#dcfce7] px-2 py-0.5 text-[11px] text-slate-700">
                  {u.category}
                </span>
              </div>
              <time className="text-[11px] text-slate-500">{format(u.date, "MMM yyyy")}</time>
            </div>
            <h3 className="mt-3 text-base font-semibold text-slate-900">{u.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{u.description}</p>
            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
            <p className="mt-3 text-xs text-slate-500">ID: {u.id}</p>
          </motion.article>
        ))}
      </div>
      </div>
    </section>
  );
}

