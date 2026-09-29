import React from "react";

export function Testimonials() {
  const reviews = [
    {
      quote:
        "The Yuzu & Mountain Pine has the aromatic precision of a high-end Amaro without the heavy sugar load. It is on our pairing menu all season.",
      author: "Elena Rostova",
      title: "Head Sommelier, Restaurant Aster",
      location: "San Francisco",
    },
    {
      quote:
        "Finally, a non-alcoholic sparkling drink where you can actually taste the raw fruit oils and wild botanical tannins rather than synthetic citrus acid.",
      author: "Julian Vance",
      title: "Beverage Director & Author",
      location: "Portland",
    },
    {
      quote:
        "The Marionberry Sumac is stunning over clear ice with a twist of orange peel. Vibrant, punchy, and deeply restorative.",
      author: "Chef Marcus Thorne",
      title: "Founder, Wildwood Hearth",
      location: "Seattle",
    },
  ];

  return (
    <section className="py-20 bg-[#F5F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#57665E]">
            Critical Acclaim
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#13221C] mt-1 tracking-tight">
            Loved by Sommeliers &amp; Chefs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.author}
              className="p-8 rounded-3xl bg-white border border-[#13221C]/10 flex flex-col justify-between shadow-sm"
            >
              <p className="text-sm text-[#38463F] leading-relaxed italic">
                &ldquo;{rev.quote}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-[#13221C]/10">
                <div className="font-display font-bold text-sm text-[#13221C]">
                  {rev.author}
                </div>
                <div className="text-xs text-[#6B7971]">
                  {rev.title} • {rev.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
