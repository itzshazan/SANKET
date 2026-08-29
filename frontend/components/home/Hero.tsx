"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Satellite, Layers, Activity } from "lucide-react";
import { GISMapDashboard } from "./GISMapDashboard";

export function Hero() {
  return (
    <section id="section-01" className="relative w-full bg-[#213318] text-white pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-24 overflow-hidden border-b border-[#37502B]">
      {/* Background Satellite Topographic Texture & Intensive Seismic Wave Matrix */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dynamic Satellite Mesh Grid */}
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(200, 234, 59, 0.45) 1.5px, transparent 1.5px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Dynamic Multi-Layered Seismic & Elevation Wave Animation */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[140%] max-w-[1500px] h-[550px] pointer-events-none overflow-visible">
          {/* Intense Central Glow behind Headline */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#C8EA3B]/25 via-[#E4F76E]/20 to-[#273C1E]/50 blur-[110px] rounded-full animate-glow-breathe" />

          {/* Concentric Seismic Pulse Wave Rings */}
          <div className="absolute top-1/2 left-1/2 w-[420px] h-[260px] rounded-[100%] border-2 border-[#C8EA3B]/50 shadow-[0_0_35px_rgba(200,234,59,0.35)] animate-wave-ring" />
          <div className="absolute top-1/2 left-1/2 w-[620px] h-[360px] rounded-[100%] border border-[#E4F76E]/40 shadow-[0_0_50px_rgba(228,247,110,0.25)] animate-wave-ring [animation-delay:1.6s]" />
          <div className="absolute top-1/2 left-1/2 w-[820px] h-[460px] rounded-[100%] border border-[#C8EA3B]/30 shadow-[0_0_60px_rgba(200,234,59,0.15)] animate-wave-ring [animation-delay:3.2s]" />

          {/* SVG Flowing Undulating Sine Waves */}
          <svg
            className="w-[200%] h-full opacity-85 -ml-[50%]"
            viewBox="0 0 1600 400"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Vibrant Lime to Emerald Gradient */}
              <linearGradient id="hero-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C8EA3B" stopOpacity="0.1" />
                <stop offset="25%" stopColor="#C8EA3B" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#E4F76E" stopOpacity="1" />
                <stop offset="75%" stopColor="#C8EA3B" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#C8EA3B" stopOpacity="0.1" />
              </linearGradient>

              <linearGradient id="hero-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#25D366" stopOpacity="0.1" />
                <stop offset="35%" stopColor="#C8EA3B" stopOpacity="0.9" />
                <stop offset="65%" stopColor="#E4F76E" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#25D366" stopOpacity="0.1" />
              </linearGradient>

              <linearGradient id="hero-wave-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C8EA3B" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#213318" stopOpacity="0.0" />
              </linearGradient>

              <filter id="wave-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Wave 1 - High Energy Primary Sine Wave */}
            <path
              className="animate-wave-1"
              d="M 0 200 C 200 120, 400 280, 600 170 C 800 60, 1000 310, 1200 180 C 1400 90, 1600 250, 1800 190 L 1800 400 L 0 400 Z"
              fill="url(#hero-wave-fill)"
            />
            <path
              className="animate-wave-1"
              d="M 0 200 C 200 120, 400 280, 600 170 C 800 60, 1000 310, 1200 180 C 1400 90, 1600 250, 1800 190"
              stroke="url(#hero-wave-grad-1)"
              strokeWidth="3.5"
              filter="url(#wave-glow)"
            />

            {/* Wave 2 - Counter Harmonic Sine Wave */}
            <path
              className="animate-wave-2"
              d="M 0 230 C 250 310, 500 130, 750 250 C 1000 330, 1250 140, 1500 220 C 1650 260, 1800 170, 1950 240"
              stroke="url(#hero-wave-grad-2)"
              strokeWidth="2.5"
              strokeDasharray="6 3"
              filter="url(#wave-glow)"
            />

            {/* Wave 3 - Fine Topographic Contour Wave */}
            <path
              className="animate-wave-3"
              d="M 0 160 C 300 240, 600 90, 900 210 C 1200 290, 1500 110, 1800 170"
              stroke="#C8EA3B"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />
          </svg>
        </div>

        {/* Ambient Side Lighting Glows */}
        <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-[#273C1E] opacity-75 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 -right-32 w-[550px] h-[550px] bg-[#1A2614] opacity-85 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-element">
        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6 sm:mb-8 drop-shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
          Predict Landslides <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E4F76E] to-[#C8EA3B] drop-shadow-[0_0_35px_rgba(200,234,59,0.45)]">
            Before They Happen.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#C5D7BD] max-w-3xl mx-auto font-normal leading-relaxed mb-10 sm:mb-12">
          SANKET combines satellite, rainfall, terrain and AI to identify risk and deliver timely warnings.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
          <a
            href="#section-07"
            className="w-full sm:w-auto inline-flex items-center justify-center font-display font-bold text-sm sm:text-base px-8 py-4 rounded-xl bg-[#C8EA3B] text-[#1A2614] hover:bg-[#E4F76E] shadow-[0_0_30px_rgba(200,234,59,0.35)] btn-spring cursor-pointer"
          >
            See How It Works
          </a>

          <a
            href="#section-01"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-display font-semibold text-sm sm:text-base px-6 py-4 rounded-xl text-[#C8EA3B] hover:text-white btn-spring group cursor-pointer"
          >
            View Risk Map
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>

        {/* Below Fold: Full-Width Interactive GIS Map Dashboard */}
        <div className="w-full max-w-6xl mx-auto text-left">
          <GISMapDashboard />
        </div>
      </div>
    </section>
  );
}
