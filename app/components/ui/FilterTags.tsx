"use client";

import { X } from "lucide-react";

type Props = {
  tags: string[];
  selected: string[];
  onChange: (next: string[]) => void;
};

export function FilterTags({ tags, selected, onChange }: Props) {
  const toggle = (tag: string) => {
    onChange(selected.includes(tag) ? selected.filter((t) => t !== tag) : [...selected, tag]);
  };

  const clear = () => onChange([]);

  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="flex flex-col gap-3 rounded-2xl border border-[#e5e7eb] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span className="font-medium text-slate-900">Filter</span>
          <span className="text-slate-500">({selected.length ? `${selected.length} selected` : "all"})</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            const active = selected.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggle(tag)}
                className={[
                  "rounded-full px-3 py-1 text-xs transition",
                  active
                    ? "border border-[#22c55e] bg-[#22c55e] text-white"
                    : "border border-[#e5e7eb] bg-[#f3f4f6] text-slate-700 hover:border-[#86efac]",
                ].join(" ")}
              >
                {tag}
              </button>
            );
          })}

          {selected.length > 0 && (
            <button
              type="button"
              onClick={clear}
              className="inline-flex items-center gap-1 rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-xs text-slate-700 transition hover:border-[#86efac]"
            >
              <X className="h-3.5 w-3.5 text-[#22c55e]" />
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

