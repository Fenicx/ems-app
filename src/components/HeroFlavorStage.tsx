"use client";

import React, { useState } from "react";
import { FLAVORS } from "@/data/flavors";
import { Flavor } from "@/types";
import { CanRender } from "./CanRender";

interface HeroFlavorStageProps {
  onAddToCart: (flavor: Flavor) => void;
}

export function HeroFlavorStage({ onAddToCart }: HeroFlavorStageProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeFlavor = FLAVORS[selectedIndex];

  return (
    <section
      id="flavors"
      className="relative overflow-hidden pt-10 pb-20 md:py-24 transition-colors duration-700"
    >
      {/* Dynamic Ambient Background Aura */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${activeFlavor.bgGradient} opacity-35 transition-all duration-1000 -z-10`}
      />

      {/* Floating carbonation micro-bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className="absolute left-[15%] bottom-0 w-3 h-3 rounded-full bg-white/40 animate-rise-bubble"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute left-[45%] bottom-0 w-2 h-2 rounded-full bg-white/50 animate-rise-bubble"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        />
        <div
          className="absolute left-[70%] bottom-0 w-4 h-4 rounded-full bg-white/30 animate-rise-bubble"
          style={{ animationDuration: "7s", animationDelay: "1s" }}
        />
        <div
          className="absolute left-[85%] bottom-0 w-2.5 h-2.5 rounded-full bg-white/45 animate-rise-bubble"
          style={{ animationDuration: "5s", animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Headline */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13221C]/5 border border-[#13221C]/10 text-xs font-semibold text-[#13221C] mb-4">
            <span>Whole-Plant Extraction</span>
            <span className="w-1 h-1 rounded-full bg-[#13221C]" />
            <span>4g Fruit Sugar</span>
            <span className="w-1 h-1 rounded-full bg-[#13221C]" />
            <span>Pure Mountain Spring Water</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#13221C] leading-[1.05]">
            Sparkling soda brewed with real botanical harvests.
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-[#425048] max-w-2xl leading-relaxed">
            No lab-made natural flavors or synthetic extracts. We cold-macerate whole heirloom fruits, wild conifer needles, and mountain herbs into a crisp, unfiltered effervescence.
          </p>
        </div>

        {/* Interactive Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Flavor Switcher Selector & Tasting Details */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#68766E]">
              Select Harvest Batch
            </div>

            {/* Flavor Tabs */}
            <div className="flex flex-col gap-2.5">
              {FLAVORS.map((flavor, index) => {
                const isSelected = selectedIndex === index;
                return (
                  <button
                    key={flavor.id}
                    onClick={() => setSelectedIndex(index)}
                    className={`group text-left p-4 rounded-2xl transition-all duration-300 border text-sm flex items-center justify-between ${
                      isSelected
                        ? "bg-white shadow-md border-[#13221C]/20 scale-[1.02]"
                        : "bg-white/40 hover:bg-white/70 border-transparent text-[#55635B]"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className="w-4 h-4 rounded-full border border-black/10 transition-transform group-hover:scale-110 flex-shrink-0"
                        style={{ backgroundColor: flavor.accentColor }}
                      />
                      <div>
                        <div className="font-display font-bold text-base text-[#13221C] leading-snug">
                          {flavor.name}
                        </div>
                        <div className="text-xs text-[#6A7870] font-normal">
                          {flavor.subtitle}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#13221C]/5 text-[#13221C]">
                      {flavor.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Flavor Tasting Note Tags */}
            <div className="p-5 rounded-2xl bg-white/70 border border-[#13221C]/10 backdrop-blur-sm">
              <div className="text-xs font-bold text-[#13221C] mb-2.5">
                Key Tasting Notes
              </div>
              <div className="flex flex-wrap gap-2">
                {activeFlavor.tasteNotes.map((note) => (
                  <span
                    key={note}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#13221C]/5 text-[#13221C] border border-[#13221C]/10"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Center: Hero Can Showcase */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center py-6 relative">
            <div className="animate-float-can relative">
              <CanRender flavor={activeFlavor} size="hero" />
            </div>

            <p className="mt-4 text-xs font-medium text-[#54625A] italic text-center">
              &ldquo;{activeFlavor.tagline}&rdquo;
            </p>
          </div>

          {/* Right: Flavor Metrics Radar & Order Card */}
          <div className="lg:col-span-4 order-3 flex flex-col gap-6">
            <div className="p-6 rounded-3xl bg-white/85 border border-[#13221C]/10 shadow-lg backdrop-blur-sm flex flex-col gap-5">
              <div className="flex items-start justify-between border-b border-[#13221C]/10 pb-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#13221C]">
                    {activeFlavor.name}
                  </h3>
                  <p className="text-xs text-[#5D6B63] mt-0.5">
                    Source: {activeFlavor.nutrition.source}
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-display font-extrabold text-2xl text-[#13221C]">
                    ${activeFlavor.price}
                  </div>
                  <div className="text-[11px] text-[#6A7870] font-medium">
                    12-Can Case (12 fl oz)
                  </div>
                </div>
              </div>

              {/* Sensory Sliders */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#13221C] tracking-wide">
                  Palate Profile
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-[#46544C] mb-1">
                    <span>Tart Citrus Snap</span>
                    <span>{activeFlavor.metrics.tartness}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#E5E9E2] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${activeFlavor.metrics.tartness}%`,
                        backgroundColor: activeFlavor.accentColor,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-[#46544C] mb-1">
                    <span>Botanical Depth</span>
                    <span>{activeFlavor.metrics.botanicalDepth}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#E5E9E2] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${activeFlavor.metrics.botanicalDepth}%`,
                        backgroundColor: activeFlavor.accentColor,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-[#46544C] mb-1">
                    <span>Effervescence &amp; Spark</span>
                    <span>{activeFlavor.metrics.effervescence}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#E5E9E2] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${activeFlavor.metrics.effervescence}%`,
                        backgroundColor: activeFlavor.accentColor,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Nutrition Snippet */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#13221C]/10 text-xs">
                <div className="p-2.5 rounded-xl bg-[#F5F7F2]">
                  <div className="text-[10px] uppercase text-[#73827A] font-bold">Calories</div>
                  <div className="font-bold text-[#13221C] mt-0.5">{activeFlavor.nutrition.calories} kcal / can</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F5F7F2]">
                  <div className="text-[10px] uppercase text-[#73827A] font-bold">Real Sugar</div>
                  <div className="font-bold text-[#13221C] mt-0.5">{activeFlavor.nutrition.sugar}</div>
                </div>
              </div>

              {/* CTA Action */}
              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={() => onAddToCart(activeFlavor)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#13221C] text-[#F5F7F2] font-display font-bold text-sm hover:bg-[#273B32] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md"
                >
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
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>Add 12-Can Case to Crate</span>
                </button>

                <a
                  href="#builder"
                  className="w-full py-2.5 text-center text-xs font-semibold text-[#54625A] hover:text-[#13221C] transition-colors"
                >
                  Or mix into a custom 4-flavor variety pack
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
