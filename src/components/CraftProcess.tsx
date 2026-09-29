import React from "react";

export function CraftProcess() {
  const steps = [
    {
      title: "Cold Fruit Maceration",
      detail:
        "Whole citrus and wild berries are crushed under gentle pressure and steep at 4°C for 48 hours to pull delicate volatile essential oils without cooked off-notes.",
      ingredient: "Whole Heirloom Citrus & Berries",
    },
    {
      title: "Whole-Botanical Infusion",
      detail:
        "Hand-foraged conifer needles, mountain sage, sumac, and raw rhizomes are steeped in micro-batches to create complex herbaceous backbone without bitter extracts.",
      ingredient: "Forest Needles, Sage, Wild Sumac",
    },
    {
      title: "Alpine Spring Carbonation",
      detail:
        "Infusions are blended with cold mountain spring water and carbonated to 3.8 volumes of CO2 for a champagne-fine effervescence that cleanses the palate.",
      ingredient: "Pure Mineral Spring Water",
    },
    {
      title: "Raw Cold Canning",
      detail:
        "Packaged in 100% infinitely recyclable aluminum cans with zero pasteurization burn, preserving lively botanical polyphenols and vibrant fruit aromatics.",
      ingredient: "BPA-NI Infinitely Recyclable Aluminum",
    },
  ];

  return (
    <section id="brew" className="py-24 bg-[#F5F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#57665E]">
            Botanical Extraction
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#13221C] mt-2 tracking-tight">
            How we brew without flavor chemicals or concentrates.
          </h2>
          <p className="mt-4 text-base text-[#47554D] leading-relaxed">
            Industrial soda relies on artificial essences and refined sugar syrups. We treat sparkling soda like a fine pet-nat or culinary tea — extracting flavor strictly from whole botanicals.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="p-6 rounded-3xl bg-white border border-[#13221C]/10 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#13221C] text-[#F3E97A]">
                  Phase {index + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#E65C38] opacity-60 group-hover:scale-150 transition-transform" />
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-[#13221C] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#526058] leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#13221C]/5">
                <div className="text-[10px] uppercase font-bold text-[#74827A]">
                  Key Medium
                </div>
                <div className="text-xs font-semibold text-[#13221C] mt-0.5">
                  {step.ingredient}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nutritional Comparison Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#13221C] text-[#F5F7F2] grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div>
            <div className="text-xs uppercase font-bold text-[#F3E97A] tracking-wider">
              The POMO Standard
            </div>
            <h3 className="font-display font-bold text-2xl mt-1">
              Pure botanical clarity.
            </h3>
            <p className="text-xs text-[#9BB1A6] mt-2">
              Tested for active polyphenols, zero artificial sweeteners (no stevia or erythritol aftertaste).
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center lg:col-span-2 border-t lg:border-t-0 lg:border-l border-white/15 pt-6 lg:pt-0 lg:pl-8">
            <div className="p-3 rounded-2xl bg-white/5">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#F3E97A]">
                4g
              </div>
              <div className="text-[11px] text-[#C1D2C8] mt-1">
                Whole fruit sugar (never high fructose)
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/5">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#F3E97A]">
                30-36
              </div>
              <div className="text-[11px] text-[#C1D2C8] mt-1">
                Real fruit calories per 12 oz can
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/5">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#F3E97A]">
                100%
              </div>
              <div className="text-[11px] text-[#C1D2C8] mt-1">
                Foraged &amp; cold-macerated botanicals
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
