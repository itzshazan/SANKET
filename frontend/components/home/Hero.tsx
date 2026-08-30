"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { GISMapDashboard } from "./GISMapDashboard";

export function Hero() {
  return (
    <section
      id="section-01"
      className="relative w-full bg-black text-white pt-32 sm:pt-40 md:pt-44 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* M Tricolor Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#1a1a1a] border border-[#3c3c3c] mb-8 text-xs font-mono font-bold tracking-[1.5px] uppercase text-white">
          <div className="flex h-3 w-4 skew-x-[-15deg] overflow-hidden">
            <div className="w-1/3 bg-[#0066b1]" />
            <div className="w-1/3 bg-[#1c69d4]" />
            <div className="w-1/3 bg-[#e22718]" />
          </div>
          <span>Predictive Geohazard Intelligence</span>
        </div>

        {/* BMW M Display-XL Headline in Confident UPPERCASE */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[0.98] mb-6 sm:mb-8 font-sans uppercase">
          Predict Landslides <br className="hidden sm:inline" />
          <span className="text-white">Before They Strike.</span>
        </h1>

        {/* Subtext in BMW Type Light (Weight 300) */}
        <p className="text-base sm:text-lg md:text-xl text-[#bbbbbb] font-light max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12">
          SANKET unites ESA Sentinel-2 radar passes, precipitation forecasts, subsurface pore pressure physics, and computer vision with European-engineered precision.
        </p>

        {/* BMW M Rectangular Button Pair */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20">
          <a
            href="#section-07"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm uppercase tracking-[1.5px] px-8 py-4 bg-white text-black hover:bg-[#e6e6e6] active:scale-[0.98] transition-all duration-150 cursor-pointer"
          >
            <span>See How It Works</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#section-15"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm uppercase tracking-[1.5px] px-8 py-4 bg-transparent text-white border border-[#3c3c3c] hover:border-white hover:bg-white/5 transition-all duration-150 cursor-pointer"
          >
            <span>Request Agency Sandbox</span>
          </a>
        </div>

        {/* Embedded GIS Map Dashboard */}
        <div className="w-full max-w-7xl mx-auto pt-2">
          <GISMapDashboard />
        </div>
      </div>
    </section>
  );
}
