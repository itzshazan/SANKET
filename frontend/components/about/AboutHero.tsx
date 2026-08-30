"use client";

import React from "react";
import { ShieldCheck, Satellite, Award } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#E0E5EC] text-[#3D4852] text-center flex flex-col items-center justify-center overflow-hidden">
      {/* Background Tactile Depth Rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full shadow-[inset_12px_12px_24px_rgba(163,177,198,0.4),inset_-12px_-12px_24px_rgba(255,255,255,0.6)] opacity-50 animate-float" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF] uppercase tracking-wider mb-2">
          <Award className="w-4 h-4 text-[#6C63FF]" />
          Smart India Hackathon (SIH 2026)
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-[#3D4852] leading-tight">
          Predict. Prepare. Protect.
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[#6B7280] font-normal max-w-3xl mx-auto leading-relaxed">
          SANKET is an AI-powered landslide early warning and risk intelligence platform engineered to safeguard mountain communities and critical highway corridors.
        </p>
      </div>

      <div className="relative z-10 mt-16 sm:mt-20 text-left max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] p-8 sm:p-10">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#6C63FF]">
            <Satellite className="w-4 h-4" /> The Scientific Vision
          </div>
          <h3 className="text-xl font-display font-extrabold text-[#3D4852]">
            Early Physics-Based Detection
          </h3>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            Landslides rarely strike without subsurface precursors. SANKET fuses Sentinel-2 InSAR radar passes, high-resolution DEM terrain gradients, rainfall forecasts, and piezometer sensors to calculate impending failure hours before mass displacement.
          </p>
        </div>

        <div className="space-y-4 rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] p-8 sm:p-10">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#38B2AC]">
            <ShieldCheck className="w-4 h-4" /> Institutional Integration
          </div>
          <h3 className="text-xl font-display font-extrabold text-[#3D4852]">
            Direct NDMA / BRO Alignment
          </h3>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            Built around the operational needs of state disaster management authorities, border road engineers, and first responder battalions, providing deterministic early warnings with zero ambiguous noise.
          </p>
        </div>
      </div>
    </section>
  );
}
