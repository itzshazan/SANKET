"use client";

import React from "react";
import { ArrowRight, Satellite, ShieldCheck, Activity, MapPin } from "lucide-react";
import { GISMapDashboard } from "./GISMapDashboard";

export function Hero() {
  return (
    <section
      id="section-01"
      className="relative w-full bg-[#E0E5EC] text-[#3D4852] pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Neumorphic Concentric Tactile Depth Circles (Abstract Tactile Background Art) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Outer Inset Ring */}
        <div className="w-[850px] h-[850px] rounded-full shadow-[inset_16px_16px_32px_rgba(163,177,198,0.4),inset_-16px_-16px_32px_rgba(255,255,255,0.6)] opacity-60 animate-float" />
        {/* Middle Extruded Ring */}
        <div className="absolute w-[620px] h-[620px] rounded-full shadow-[14px_14px_28px_rgba(163,177,198,0.5),-14px_-14px_28px_rgba(255,255,255,0.7)] opacity-40" />
        {/* Inner Inset Ring */}
        <div className="absolute w-[400px] h-[400px] rounded-full shadow-[inset_10px_10px_20px_rgba(163,177,198,0.5),inset_-10px_-10px_20px_rgba(255,255,255,0.7)] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-element">
        {/* Main Display Headline with Plus Jakarta Sans */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#3D4852] max-w-5xl mx-auto leading-[1.08] mb-6 sm:mb-8">
          Predict Landslides <br className="hidden sm:inline" />
          <span className="text-[#6C63FF]">
            Before They Happen.
          </span>
        </h1>

        {/* Subtext with DM Sans */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto font-normal leading-relaxed mb-10 sm:mb-12">
          SANKET combines satellite radar, rainfall telemetry, subsurface pore physics, and computer vision to identify slope failure hours in advance.
        </p>

        {/* Tactile Neumorphic Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16 sm:mb-20">
          <a
            href="#section-07"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-display font-bold text-base px-8 py-4 rounded-2xl bg-[#6C63FF] text-white shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:bg-[#7B73FF] hover:shadow-[12px_12px_20px_rgba(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] hover:translate-y-[-1px] active:translate-y-[0.5px] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.35),inset_-4px_-4px_8px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer"
          >
            <span>See How It Works</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#section-15"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-display font-bold text-base px-8 py-4 rounded-2xl bg-[#E0E5EC] text-[#3D4852] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:text-[#6C63FF] hover:shadow-[12px_12px_20px_rgba(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] hover:translate-y-[-1px] active:translate-y-[0.5px] active:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.7),inset_-4px_-4px_8px_rgba(255,255,255,0.6)] transition-all duration-300 cursor-pointer"
          >
            <span>Request Agency Sandbox</span>
          </a>
        </div>

        {/* Embedded Interactive Neumorphic GIS Map Dashboard */}
        <div className="w-full max-w-6xl mx-auto pt-2">
          <GISMapDashboard />
        </div>
      </div>
    </section>
  );
}
