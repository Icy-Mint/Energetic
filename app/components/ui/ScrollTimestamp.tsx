"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";

type Props = {
  label: string | null;
};

export function ScrollTimestamp({ label }: Props) {
  return (
    <div className="pointer-events-none sticky top-4 z-20 mx-auto w-full max-w-6xl px-6">
      <div className="flex justify-end">
        <AnimatePresence mode="wait">
          {label ? (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: -6, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(6px)" }}
              transition={{ duration: 0.22 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#86efac] bg-white px-3 py-1 text-xs text-slate-700 shadow-sm"
            >
              <Clock className="h-3.5 w-3.5 text-[#22c55e]" />
              {label}
            </motion.div>
          ) : (
            <span key="empty" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

