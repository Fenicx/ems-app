"use client";

import React from "react";
import { Flavor } from "@/types";

interface CanRenderProps {
  flavor: Flavor;
  size?: "hero" | "compact" | "thumbnail";
}

export function CanRender({ flavor, size = "hero" }: CanRenderProps) {
  const isHero = size === "hero";
  const isCompact = size === "compact";

  const height = isHero ? "h-[380px] sm:h-[460px] md:h-[500px]" : isCompact ? "h-[220px]" : "h-[120px]";
  const width = isHero ? "w-[180px] sm:w-[220px] md:w-[240px]" : isCompact ? "w-[110px]" : "w-[60px]";

  return (
    <div
      className={`relative ${width} ${height} flex items-center justify-center select-none transition-transform duration-500`}
    >
      {/* Glow shadow under can */}
      <div
        className="absolute -bottom-4 w-3/4 h-6 rounded-full blur-xl opacity-60 transition-all duration-700"
        style={{ backgroundColor: flavor.accentColor }}
      />

      {/* Main SVG Soda Can Container */}
      <svg
        viewBox="0 0 200 420"
        className="w-full h-full drop-shadow-2xl overflow-visible transition-all duration-700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Top Gradient */}
          <linearGradient id="metalRim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8A8E89" />
            <stop offset="25%" stopColor="#DDE2DA" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="75%" stopColor="#BDC3BB" />
            <stop offset="100%" stopColor="#6C726B" />
          </linearGradient>

          {/* Can Body Sheen Gradient */}
          <linearGradient id={`bodySheen-${flavor.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={flavor.canColor} stopOpacity="1" />
            <stop offset="20%" stopColor={flavor.canColor} stopOpacity="0.9" />
            <stop offset="42%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="58%" stopColor={flavor.canColor} stopOpacity="0.8" />
            <stop offset="85%" stopColor={flavor.canColor} stopOpacity="1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
          </linearGradient>

          {/* Label Banner Gradient */}
          <linearGradient id={`labelGrad-${flavor.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={flavor.accentColor} stopOpacity="0.95" />
            <stop offset="100%" stopColor={flavor.ringColor} stopOpacity="0.85" />
          </linearGradient>

          {/* Lip Shadow */}
          <linearGradient id="lipShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Can Top Ring Rim */}
        <ellipse cx="100" cy="22" rx="68" ry="12" fill="url(#metalRim)" />
        <ellipse cx="100" cy="22" rx="60" ry="9" fill="#9BA29A" />
        <ellipse cx="100" cy="23" rx="46" ry="6" fill="#6A7069" />

        {/* Tab & Opener Detail */}
        <ellipse cx="100" cy="23" rx="14" ry="4" fill="#D9DFD7" stroke="#5F665E" strokeWidth="1" />
        <rect x="97" y="16" width="6" height="12" rx="2" fill="#E4EAE2" />

        {/* Top Taper Neck */}
        <path
          d="M32 22 C32 40, 20 54, 18 70 L182 70 C180 54, 168 40, 168 22 Z"
          fill="url(#metalRim)"
        />

        {/* Body of Can */}
        <rect
          x="18"
          y="70"
          width="164"
          height="315"
          rx="6"
          fill={flavor.canColor}
        />

        {/* Dynamic Sheen Overlay */}
        <rect
          x="18"
          y="70"
          width="164"
          height="315"
          rx="6"
          fill={`url(#bodySheen-${flavor.id})`}
        />

        {/* Botanical Pattern Texture Layer */}
        <g opacity="0.18">
          <circle cx="100" cy="150" r="45" stroke={flavor.accentColor} strokeWidth="2" strokeDasharray="4 6" />
          <path
            d="M60 210 Q100 170 140 210 Q100 250 60 210"
            fill={flavor.accentColor}
          />
          <path
            d="M70 290 Q100 260 130 290 Q100 320 70 290"
            fill={flavor.accentColor}
          />
          <line x1="18" y1="130" x2="182" y2="130" stroke={flavor.accentColor} strokeWidth="1" strokeDasharray="3 4" />
          <line x1="18" y1="330" x2="182" y2="330" stroke={flavor.accentColor} strokeWidth="1" strokeDasharray="3 4" />
        </g>

        {/* Central Label Art Badge */}
        <rect
          x="32"
          y="140"
          width="136"
          height="165"
          rx="4"
          fill={`url(#labelGrad-${flavor.id})`}
          opacity="0.95"
        />

        {/* Inner Label Border */}
        <rect
          x="36"
          y="144"
          width="128"
          height="157"
          rx="2"
          fill="none"
          stroke="#13221C"
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />

        {/* Label Typography: Brand Mark */}
        <text
          x="100"
          y="166"
          textAnchor="middle"
          fill="#13221C"
          fontSize="13"
          fontWeight="800"
          letterSpacing="4"
          fontFamily="var(--font-space-grotesk), sans-serif"
        >
          POMO
        </text>

        <text
          x="100"
          y="178"
          textAnchor="middle"
          fill="#13221C"
          fontSize="7"
          fontWeight="600"
          letterSpacing="2"
          opacity="0.8"
        >
          BOTANICAL SODA
        </text>

        {/* Horizontal Label Divider */}
        <line x1="50" y1="186" x2="150" y2="186" stroke="#13221C" strokeWidth="1" opacity="0.4" />

        {/* Flavor Name on Can */}
        <text
          x="100"
          y="212"
          textAnchor="middle"
          fill="#13221C"
          fontSize="15"
          fontWeight="800"
          letterSpacing="0.5"
          fontFamily="var(--font-space-grotesk), sans-serif"
        >
          {flavor.name.split(" & ")[0]}
        </text>

        <text
          x="100"
          y="228"
          textAnchor="middle"
          fill="#13221C"
          fontSize="10"
          fontWeight="700"
          opacity="0.9"
        >
          &amp; {flavor.name.split(" & ")[1] || "EXTRACT"}
        </text>

        {/* Botanical Emblem */}
        <g transform="translate(100, 256) scale(0.7)">
          <circle cx="0" cy="0" r="14" fill="#13221C" opacity="0.12" />
          <path
            d="M0 -10 C5 -5, 8 2, 0 10 C-8 2, -5 -5, 0 -10 Z"
            fill="#13221C"
            opacity="0.75"
          />
          <line x1="0" y1="-8" x2="0" y2="8" stroke={flavor.accentColor} strokeWidth="1" />
        </g>

        {/* Can Volume & Stats */}
        <text
          x="100"
          y="288"
          textAnchor="middle"
          fill="#13221C"
          fontSize="8"
          fontWeight="600"
          letterSpacing="1"
          opacity="0.7"
        >
          12 FL OZ (355 ML) • 4G SUGAR
        </text>

        {/* Bottom Taper & Base */}
        <path
          d="M18 385 C20 400, 32 410, 42 415 L158 415 C168 410, 180 400, 182 385 Z"
          fill="url(#metalRim)"
        />
        <ellipse cx="100" cy="415" rx="58" ry="4" fill="#4B524A" />

        {/* Condensation Droplets for hyper-fresh tactile vibe */}
        <g opacity="0.6">
          <ellipse cx="50" cy="115" rx="2.5" ry="4" fill="#FFFFFF" opacity="0.7" />
          <ellipse cx="145" cy="160" rx="3" ry="5" fill="#FFFFFF" opacity="0.8" />
          <ellipse cx="42" cy="245" rx="2" ry="3.5" fill="#FFFFFF" opacity="0.6" />
          <ellipse cx="158" cy="310" rx="3.5" ry="5.5" fill="#FFFFFF" opacity="0.7" />
          <ellipse cx="135" cy="350" rx="2.5" ry="4" fill="#FFFFFF" opacity="0.6" />
        </g>

        {/* Subtle Vertical Highlight Line */}
        <line
          x1="65"
          y1="70"
          x2="65"
          y2="385"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeOpacity="0.15"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
