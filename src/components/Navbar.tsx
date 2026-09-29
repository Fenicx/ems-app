"use client";

import React, { useState } from "react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#F5F7F2]/85 border-b border-[#222926]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logotype */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#13221C] text-[#F3E97A] flex items-center justify-center font-display font-extrabold text-lg tracking-tighter group-hover:scale-105 transition-transform">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-[#13221C]">
              POMO
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#54625A] -mt-1 font-semibold">
              Botanical Soda
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3A453F]">
          <a
            href="#flavors"
            className="hover:text-[#13221C] transition-colors hover:underline underline-offset-4 decoration-[#E65C38]"
          >
            The Flavors
          </a>
          <a
            href="#sensory"
            className="hover:text-[#13221C] transition-colors hover:underline underline-offset-4 decoration-[#E65C38]"
          >
            Sensory Profiles
          </a>
          <a
            href="#brew"
            className="hover:text-[#13221C] transition-colors hover:underline underline-offset-4 decoration-[#E65C38]"
          >
            Cold Extraction
          </a>
          <a
            href="#builder"
            className="hover:text-[#13221C] transition-colors hover:underline underline-offset-4 decoration-[#E65C38]"
          >
            Build a Crate
          </a>
        </nav>

        {/* Right Action: Stockists + Cart Pill */}
        <div className="flex items-center gap-3">
          <a
            href="#builder"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-transparent border border-[#13221C]/20 hover:border-[#13221C] text-[#13221C] transition-all"
          >
            Sample 4-Pack
          </a>

          <button
            onClick={onOpenCart}
            aria-label={`Shopping cart with ${cartCount} items`}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#13221C] text-[#F5F7F2] hover:bg-[#253930] active:scale-95 transition-all text-xs font-semibold shadow-sm"
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span>Crate</span>
            <span className="w-5 h-5 rounded-full bg-[#F3E97A] text-[#13221C] text-[11px] font-bold flex items-center justify-center">
              {cartCount}
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-[#13221C] hover:bg-black/5"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 bg-[#F5F7F2] border-b border-[#222926]/10 flex flex-col gap-4 text-sm font-medium">
          <a
            href="#flavors"
            onClick={() => setMobileOpen(false)}
            className="py-2 text-[#13221C]"
          >
            The Flavors
          </a>
          <a
            href="#sensory"
            onClick={() => setMobileOpen(false)}
            className="py-2 text-[#13221C]"
          >
            Sensory Profiles
          </a>
          <a
            href="#brew"
            onClick={() => setMobileOpen(false)}
            className="py-2 text-[#13221C]"
          >
            Cold Extraction
          </a>
          <a
            href="#builder"
            onClick={() => setMobileOpen(false)}
            className="py-2 text-[#13221C]"
          >
            Build a Crate
          </a>
        </div>
      )}
    </header>
  );
}
