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
    <section id="section-03" className="w-full bg-[#FDFCF8] py-8 sm:py-10 overflow-hidden relative border-y border-[#DED8CF]/60">
      {/* Side Fade Gradients */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#FDFCF8] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#FDFCF8] to-transparent z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 mb-4 text-center">
        <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#78786C]">
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
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[#DED8CF] shadow-[0_4px_20px_-2px_rgba(93,112,82,0.10)] text-[#2C2C24] hover:border-[#5D7052] hover:scale-105 transition-all duration-200 shrink-0 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#5D7052]/10 text-[#5D7052] flex items-center justify-center group-hover:bg-[#5D7052] group-hover:text-white transition-colors">
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-sm font-sans font-bold text-[#2C2C24]">
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
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[#DED8CF] shadow-[0_4px_20px_-2px_rgba(93,112,82,0.10)] text-[#2C2C24] hover:border-[#5D7052] hover:scale-105 transition-all duration-200 shrink-0 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#5D7052]/10 text-[#5D7052] flex items-center justify-center group-hover:bg-[#5D7052] group-hover:text-white transition-colors">
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-sm font-sans font-bold text-[#2C2C24]">
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
