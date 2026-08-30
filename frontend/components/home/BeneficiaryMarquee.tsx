"use client";

import React from "react";
import {
  Building2,
  Car,
  Flame,
  Landmark,
  Home,
  ShieldAlert,
  Compass
} from "lucide-react";

const INSTITUTIONS = [
  { name: "Disaster Management Authorities (NDMA)", icon: ShieldAlert },
  { name: "Border Roads Organisation (BRO)", icon: Car },
  { name: "National Disaster Response Force (NDRF)", icon: Flame },
  { name: "State Disaster Authorities (SDMA)", icon: Landmark },
  { name: "Field Geological Survey Teams", icon: Compass },
  { name: "Mountain Highway Networks", icon: Building2 },
  { name: "Local Himalayan Communities", icon: Home },
];

export function BeneficiaryMarquee() {
  return (
    <section id="section-03" className="w-full bg-[#0d0d0d] py-8 sm:py-10 overflow-hidden relative border-b border-[#262626]">
      {/* Side Fade Gradients */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] font-sans font-bold uppercase tracking-[1.5px] text-[#7e7e7e]">
          Operational Integration Across Frontline Authorities
        </span>
      </div>

      {/* Infinite Seamless Moving Track */}
      <div className="marquee-container flex w-full overflow-hidden select-none">
        {/* Track 1 */}
        <div className="flex shrink-0 gap-4 sm:gap-6 animate-marquee-left py-2 pr-4 sm:pr-6">
          {INSTITUTIONS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={`track1-${item.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-2.5 bg-[#1a1a1a] border border-[#3c3c3c] text-white hover:border-white transition-all duration-150 shrink-0 group"
              >
                <div className="w-7 h-7 bg-[#262626] text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Track 2 (Seamless Duplicate) */}
        <div className="flex shrink-0 gap-4 sm:gap-6 animate-marquee-left py-2 pr-4 sm:pr-6" aria-hidden="true">
          {INSTITUTIONS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={`track2-${item.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-2.5 bg-[#1a1a1a] border border-[#3c3c3c] text-white hover:border-white transition-all duration-150 shrink-0 group"
              >
                <div className="w-7 h-7 bg-[#262626] text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
