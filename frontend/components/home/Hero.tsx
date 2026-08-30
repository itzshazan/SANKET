"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="section-01"
      className="relative w-full bg-[#FDFCF8] text-[#2C2C24] pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Ambient Large Blurred Color Washes */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#5D7052]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-[30rem] h-[30rem] bg-[#C18C5D]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Soft Organic Pill Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full mb-8 text-xs font-bold uppercase tracking-wider text-[#5D7052] shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#5D7052]" />
          <span>Predictive Geohazard Intelligence</span>
        </div>

        {/* Fraunces Serif Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-serif font-bold tracking-tight text-[#2C2C24] max-w-5xl mx-auto leading-[1.08] mb-6 sm:mb-8">
          Predict Landslides <br className="hidden sm:inline" />
          <span className="text-[#5D7052] italic">Before They Strike.</span>
        </h1>

        {/* Nunito Rounded Body Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-[#78786C] font-normal max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12">
          SANKET unites ESA Sentinel-2 radar passes, precipitation forecasts, subsurface pore pressure physics, and computer vision with gentle, organic precision.
        </p>

        {/* Tactile Pill Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#section-07"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-base px-8 py-4 bg-[#5D7052] text-[#F3F4F1] rounded-full hover:bg-[#4C5D42] hover:scale-105 active:scale-95 shadow-[0_4px_20px_-2px_rgba(93,112,82,0.25)] transition-all duration-300 cursor-pointer"
          >
            <span>See How It Works</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#section-15"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-base px-8 py-4 bg-transparent text-[#C18C5D] border-2 border-[#C18C5D] rounded-full hover:bg-[#C18C5D]/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Request Agency Sandbox</span>
          </a>
        </div>
      </div>
    </section>
  );
}
