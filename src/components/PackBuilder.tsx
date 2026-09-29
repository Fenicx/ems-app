"use client";

import React, { useState } from "react";
import { FLAVORS } from "@/data/flavors";
import { Flavor } from "@/types";
import { CanRender } from "./CanRender";

interface PackBuilderProps {
  onAddCustomCrate: (selectedCans: Flavor[]) => void;
}

export function PackBuilder({ onAddCustomCrate }: PackBuilderProps) {
  const TOTAL_SLOTS = 4;
  // Initialize with 1 of each flavor
  const [slots, setSlots] = useState<Flavor[]>(FLAVORS.slice(0, 4));

  const handleAddFlavor = (flavor: Flavor) => {
    if (slots.length < TOTAL_SLOTS) {
      setSlots([...slots, flavor]);
    }
  };

  const handleRemoveSlot = (index: number) => {
    const updated = [...slots];
    updated.splice(index, 1);
    setSlots(updated);
  };

  const handleReset = () => {
    setSlots([]);
  };

  const isFull = slots.length === TOTAL_SLOTS;

  // Compute total calories & stats
  const avgCalories = slots.length
    ? Math.round(
        slots.reduce((acc, f) => acc + f.nutrition.calories, 0) / slots.length
      )
    : 0;

  return (
    <section id="builder" className="py-24 bg-[#ECEFE8] border-t border-[#222926]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#57665E]">
            Interactive Tasting Box
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#13221C] mt-2 tracking-tight">
            Build your custom 4-can botanical flight.
          </h2>
          <p className="mt-3 text-sm text-[#4E5C53]">
            Select any 4 cans to explore all terroir profiles in one custom crate. Shipped cold in biodegradable insulated pulp packaging.
          </p>
        </div>

        {/* Builder Interactive Console */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#13221C]/10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Crate Visualizer Slots */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full bg-[#F5F7F2] p-6 rounded-3xl border-2 border-dashed border-[#13221C]/15 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#13221C]">
                  Crate Slots ({slots.length}/{TOTAL_SLOTS})
                </span>
                {slots.length > 0 && (
                  <button
                    onClick={handleReset}
                    className="text-xs text-[#E65C38] hover:underline font-semibold"
                  >
                    Clear all slots
                  </button>
                )}
              </div>

              {/* 4 Can Visual Slots */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 min-h-[260px] items-center justify-items-center">
                {Array.from({ length: TOTAL_SLOTS }).map((_, index) => {
                  const item = slots[index];
                  if (item) {
                    return (
                      <div
                        key={`${item.id}-${index}`}
                        className="flex flex-col items-center group relative p-3 rounded-2xl bg-white shadow-sm border border-[#13221C]/10 w-full"
                      >
                        <button
                          onClick={() => handleRemoveSlot(index)}
                          aria-label={`Remove ${item.name}`}
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#13221C] text-white text-xs flex items-center justify-center hover:bg-[#E65C38] transition-colors shadow-md z-10"
                        >
                          ✕
                        </button>
                        <CanRender flavor={item} size="compact" />
                        <span className="text-[11px] font-bold text-[#13221C] text-center mt-2 line-clamp-1">
                          {item.name.split(" & ")[0]}
                        </span>
                        <span className="text-[10px] text-[#67766D]">
                          {item.nutrition.calories} cal
                        </span>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={`empty-${index}`}
                      className="w-full h-full min-h-[220px] rounded-2xl border-2 border-dashed border-[#13221C]/20 flex flex-col items-center justify-center p-4 text-center bg-white/40"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#13221C]/5 flex items-center justify-center text-[#6D7D74] text-sm font-bold mb-2">
                        +
                      </span>
                      <span className="text-xs font-semibold text-[#66756C]">
                        Slot {index + 1}
                      </span>
                      <span className="text-[10px] text-[#86968D] mt-1">
                        Select a flavor
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Nutrition metrics footer for crate */}
            {slots.length > 0 && (
              <div className="flex items-center gap-6 mt-4 text-xs text-[#526057]">
                <div>
                  <span className="font-bold text-[#13221C]">{slots.length}</span>{" "}
                  cans loaded
                </div>
                <div>•</div>
                <div>
                  Avg{" "}
                  <span className="font-bold text-[#13221C]">
                    {avgCalories} kcal
                  </span>{" "}
                  per can
                </div>
                <div>•</div>
                <div>
                  <span className="font-bold text-[#13221C]">Zero</span> artificial sweeteners
                </div>
              </div>
            )}
          </div>

          {/* Right: Flavor Click-to-Add Palette & Action */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-[#13221C]">
                Pick your botanicals
              </h3>
              <p className="text-xs text-[#55635B] mt-1">
                Click any recipe below to add it into your flight.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FLAVORS.map((flavor) => {
                const countInCrate = slots.filter(
                  (s) => s.id === flavor.id
                ).length;
                return (
                  <button
                    key={flavor.id}
                    onClick={() => handleAddFlavor(flavor)}
                    disabled={isFull}
                    className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                      isFull
                        ? "opacity-50 cursor-not-allowed bg-zinc-50 border-zinc-200"
                        : "bg-[#F5F7F2] hover:bg-white hover:border-[#13221C]/30 border-[#13221C]/10 active:scale-95 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="w-3.5 h-3.5 rounded-full"
                        style={{ backgroundColor: flavor.accentColor }}
                      />
                      {countInCrate > 0 && (
                        <span className="px-1.5 py-0.5 rounded-full bg-[#13221C] text-white text-[10px] font-bold">
                          {countInCrate} in box
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="font-display font-bold text-xs text-[#13221C]">
                        {flavor.name}
                      </div>
                      <div className="text-[10px] text-[#697870] mt-0.5">
                        {flavor.tasteNotes[0]}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Pricing & Checkout Summary */}
            <div className="pt-4 border-t border-[#13221C]/10 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display font-extrabold text-2xl text-[#13221C]">
                    $18
                  </div>
                  <div className="text-[11px] text-[#697970]">
                    Custom Flight (4 × 12 fl oz)
                  </div>
                </div>
                <div className="text-right text-xs">
                  <span className="text-emerald-700 font-semibold">
                    ✓ Cold-Insulated Box
                  </span>
                </div>
              </div>

              <button
                onClick={() => onAddCustomCrate(slots)}
                disabled={!isFull}
                className={`w-full py-3.5 px-6 rounded-2xl font-display font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 ${
                  isFull
                    ? "bg-[#13221C] text-[#F5F7F2] hover:bg-[#283C32] active:scale-95"
                    : "bg-[#D6DDD3] text-[#738278] cursor-not-allowed"
                }`}
              >
                {isFull ? (
                  <>
                    <span>Add Custom Flight to Crate</span>
                    <svg
                      className="w-4 h-4 text-[#F3E97A]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                ) : (
                  <span>Select {TOTAL_SLOTS - slots.length} More Can{TOTAL_SLOTS - slots.length > 1 ? "s" : ""} to Complete Flight</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
