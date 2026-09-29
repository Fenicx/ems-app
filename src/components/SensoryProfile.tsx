"use client";

import React, { useState } from "react";
import { FLAVORS } from "@/data/flavors";
import { CanRender } from "./CanRender";
import { Flavor } from "@/types";

interface SensoryProfileProps {
  onAddToCart: (flavor: Flavor) => void;
}

export function SensoryProfile({ onAddToCart }: SensoryProfileProps) {
  const [activeTab, setActiveTab] = useState(FLAVORS[0].id);
  const current = FLAVORS.find((f) => f.id === activeTab) || FLAVORS[0];

  return (
    <section id="sensory" className="py-20 bg-[#ECEEE6] border-y border-[#222926]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#57665E]">
              Sensory Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#13221C] mt-1 tracking-tight">
              Tasting Notes &amp; Botanical Lineage
            </h2>
          </div>
          <p className="text-sm text-[#4E5B54] max-w-md">
            Every can balances wild-foraged aromatics, unfiltered citrus acid, and fine mineral effervescence.
          </p>
        </div>

        {/* Flavor Selector Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {FLAVORS.map((flavor) => {
            const isActive = flavor.id === activeTab;
            return (
              <button
                key={flavor.id}
                onClick={() => setActiveTab(flavor.id)}
                className={`p-4 rounded-2xl text-left transition-all border ${
                  isActive
                    ? "bg-[#13221C] text-white border-[#13221C] shadow-md"
                    : "bg-white/60 hover:bg-white text-[#2B3831] border-black/5"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: flavor.accentColor }}
                  />
                  <span className="text-[11px] font-semibold opacity-75">
                    {flavor.badge}
                  </span>
                </div>
                <div className="font-display font-bold text-sm leading-tight">
                  {flavor.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Expanded Profile Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#13221C]/10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Can visual */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 bg-[#F5F7F2] rounded-2xl">
            <CanRender flavor={current} size="compact" />
            <div className="text-center mt-3">
              <span className="text-xs font-bold text-[#13221C]">
                {current.name}
              </span>
              <div className="text-[11px] text-[#67756D]">
                {current.nutrition.source}
              </div>
            </div>
          </div>

          {/* Flavor breakdown details */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-[#13221C]">
                {current.subtitle}
              </h3>
              <p className="mt-2 text-sm text-[#47544D] leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Matrix details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#F5F7F2] border border-[#13221C]/5">
                <div className="text-xs font-bold text-[#13221C] mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E65C38]" />
                  <span>Harvest &amp; Botanical Origin</span>
                </div>
                <p className="text-xs text-[#526058] leading-normal">
                  {current.nutrition.source} with {current.nutrition.botanicals}.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F7F2] border border-[#13221C]/5">
                <div className="text-xs font-bold text-[#13221C] mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E65C38]" />
                  <span>Sommelier Culinary Pairing</span>
                </div>
                <p className="text-xs text-[#526058] leading-normal">
                  {current.pairing}
                </p>
              </div>
            </div>

            {/* Aromatics Tag Cloud */}
            <div>
              <div className="text-xs font-bold text-[#13221C] mb-2">
                Aromatic Layering
              </div>
              <div className="flex flex-wrap gap-2">
                {current.tasteNotes.map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1.5 rounded-xl bg-[#ECEFE8] text-xs font-semibold text-[#1F2C25]"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#13221C]/10 gap-4">
              <div>
                <span className="text-xs text-[#6A7870]">Direct from harvest:</span>
                <div className="font-display font-bold text-xl text-[#13221C]">
                  ${current.price}{" "}
                  <span className="text-xs font-normal text-[#6A7870]">
                    / 12 cans with carbon-neutral shipping
                  </span>
                </div>
              </div>

              <button
                onClick={() => onAddToCart(current)}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#13221C] text-[#F5F7F2] font-semibold text-xs hover:bg-[#2B3E34] active:scale-95 transition-all"
              >
                Add {current.name.split(" & ")[0]} to Crate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
