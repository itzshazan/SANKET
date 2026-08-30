"use client";

import React from "react";
import { ShieldCheck, Satellite } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 bg-black text-white text-center flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-2">
          <span>Smart India Hackathon</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none font-sans uppercase">
          Predict. Prepare. Protect.
        </h1>

        <p className="text-lg sm:text-xl text-[#bbbbbb] font-light max-w-3xl mx-auto leading-relaxed">
          SANKET is an AI-powered landslide early warning and risk intelligence platform engineered to safeguard mountain communities and critical highway corridors.
        </p>
      </div>

      <div className="relative z-10 mt-16 sm:mt-20 text-left max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 bg-[#1a1a1a] border border-[#3c3c3c] p-8 sm:p-10">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1c69d4]">
            <Satellite className="w-4 h-4" /> The Scientific Vision
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-sans uppercase">
            Early Physics-Based Detection
          </h3>
          <p className="text-sm text-[#bbbbbb] font-light leading-relaxed">
            Landslides rarely strike without subsurface precursors. SANKET fuses Sentinel-2 InSAR radar passes, high-resolution DEM terrain gradients, rainfall forecasts, and piezometer sensors to calculate impending failure hours before mass displacement.
          </p>
        </div>

        <div className="space-y-4 bg-[#1a1a1a] border border-[#3c3c3c] p-8 sm:p-10 relative overflow-hidden">
          {/* Top M Stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] flex">
            <div className="w-1/3 bg-[#0066b1]" />
            <div className="w-1/3 bg-[#1c69d4]" />
            <div className="w-1/3 bg-[#e22718]" />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white">
            <ShieldCheck className="w-4 h-4 text-white" /> Institutional Integration
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-sans uppercase">
            Direct NDMA / BRO Alignment
          </h3>
          <p className="text-sm text-[#bbbbbb] font-light leading-relaxed">
            Built around the operational needs of state disaster management authorities, border road engineers, and first responder battalions, providing deterministic early warnings with zero ambiguous noise.
          </p>
        </div>
      </div>
    </section>
  );
}
