'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GlobeBackground from '../globe/GlobeBackground';
import { ArrowDownRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#f3f4f6] to-[#f9fafb]">
      {/* Animated Globe Background */}
      <GlobeBackground />

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-16 pb-10 sm:pt-20"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[#bbf7d0] bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-[#22c55e]" />
          Energetic × Real-world signals
        </div>

        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          <span className="bg-gradient-to-r from-[#86efac] to-[#22c55e] bg-clip-text text-transparent">
            Matches Between Energetic
          </span>{" "}
          <span className="text-slate-900">and the Real World</span>
        </h1>

        <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
          Energetic is developed to give everyone a chance to see the scope of changes and cooperation
          needed to transform the city&apos;s energy demand and supply in time to meet goals of the
          Paris Agreement.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#timeline"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#86efac] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#22c55e]"
          >
            Explore timeline
            <ArrowDownRight className="h-4 w-4" />
          </a>
          <a
            href="#updates"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-[#86efac]"
          >
            Latest updates
            <ArrowDownRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

