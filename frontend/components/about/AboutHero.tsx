"use client";

import React from "react";
import { ShieldCheck, Satellite, Sparkles } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 bg-[#FDFCF8] text-[#2C2C24] text-center flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient Blobs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#5D7052]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#5D7052] mb-2 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Smart India Hackathon</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-[#2C2C24] leading-tight">
          Predict. Prepare. <span className="text-[#5D7052] italic">Protect.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#78786C] font-normal max-w-3xl mx-auto leading-relaxed">
          SANKET is an AI-powered landslide early warning and risk intelligence platform engineered to safeguard mountain communities and critical highway corridors.
        </p>
      </div>

      <div className="relative z-10 mt-16 sm:mt-20 text-left max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 bg-[#FEFEFA] border border-[#DED8CF] rounded-tl-[4rem] rounded-tr-[2rem] rounded-br-[3rem] rounded-bl-[2rem] p-8 sm:p-10 shadow-soft">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5D7052]">
            <Satellite className="w-4 h-4" /> The Scientific Vision
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2C2C24]">
            Early Physics-Based Detection
          </h3>
          <p className="text-sm text-[#78786C] font-normal leading-relaxed">
            Landslides rarely strike without subsurface precursors. SANKET fuses Sentinel-2 InSAR radar passes, high-resolution DEM terrain gradients, rainfall forecasts, and piezometer sensors to calculate impending failure hours before mass displacement.
          </p>
        </div>

        <div className="space-y-4 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-tr-[4rem] rounded-tl-[2rem] rounded-bl-[3rem] rounded-br-[2rem] p-8 sm:p-10 shadow-moss text-[#2C2C24]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5D7052]">
            <ShieldCheck className="w-4 h-4" /> Institutional Integration
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2C2C24]">
            Direct NDMA / BRO Alignment
          </h3>
          <p className="text-sm text-[#4A4A40] font-normal leading-relaxed">
            Built around the operational needs of state disaster management authorities, border road engineers, and first responder battalions, providing deterministic early warnings with zero ambiguous noise.
          </p>
        </div>
      </div>
    </section>
  );
}
