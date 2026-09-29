"use client";

import React, { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#13221C] text-[#F5F7F2] pt-20 pb-12 border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F3E97A] text-[#13221C] flex items-center justify-center font-display font-extrabold text-xl">
                  P
                </div>
                <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                  POMO BOTANICALS
                </span>
              </div>
              <p className="mt-4 text-xs text-[#9BB0A5] leading-relaxed max-w-sm">
                Whole-fruit macerations, wild-foraged forest botanicals, and alpine mineral water. Unfiltered, crisp, and low sugar.
              </p>
            </div>

            <div className="mt-8 text-xs text-[#7A8E83]">
              Brewed in small seasonal lots in Hood River, OR.
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-3 text-xs">
            <span className="font-display font-bold uppercase tracking-wider text-[#F3E97A] mb-2">
              Harvest
            </span>
            <a href="#flavors" className="text-[#B9CCC2] hover:text-white transition-colors">
              Yuzu Mountain Pine
            </a>
            <a href="#flavors" className="text-[#B9CCC2] hover:text-white transition-colors">
              Blood Orange Sage
            </a>
            <a href="#flavors" className="text-[#B9CCC2] hover:text-white transition-colors">
              Marionberry Sumac
            </a>
            <a href="#flavors" className="text-[#B9CCC2] hover:text-white transition-colors">
              Meyer Lemon Pepper
            </a>
          </div>

          {/* Sourcing & Stockists */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-3 text-xs">
            <span className="font-display font-bold uppercase tracking-wider text-[#F3E97A] mb-2">
              Company
            </span>
            <a href="#brew" className="text-[#B9CCC2] hover:text-white transition-colors">
              Cold Maceration Craft
            </a>
            <a href="#builder" className="text-[#B9CCC2] hover:text-white transition-colors">
              Custom Crate Mixer
            </a>
            <a href="#sensory" className="text-[#B9CCC2] hover:text-white transition-colors">
              Sommelier Pairings
            </a>
            <span className="text-[#7A8E83]">
              Stockist Map (Coming Spring)
            </span>
          </div>

          {/* Seasonal Harvest Drop Newsletter */}
          <div className="lg:col-span-4">
            <span className="font-display font-bold uppercase tracking-wider text-[#F3E97A] text-xs">
              Seasonal Forage Bulletins
            </span>
            <p className="text-xs text-[#9BB0A5] mt-2 mb-4 leading-relaxed">
              Receive notifications when small-batch seasonal harvests (like Mountain Wild Plum &amp; Douglas Fir) are canned and released.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-2xl bg-white/10 text-[#F3E97A] text-xs font-semibold">
                ✓ You are on the priority reserve list for next harvest.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#F3E97A]"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-2xl bg-[#F3E97A] text-[#13221C] font-display font-bold text-xs hover:bg-white transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6E8177] gap-4">
          <div>
            © {new Date().getFullYear()} POMO Beverage Company. 100% Recyclable Aluminum.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Terms of Sourcing</span>
            <span className="hover:text-white cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-white cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
