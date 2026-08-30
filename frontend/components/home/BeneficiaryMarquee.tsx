"use client";

import React from "react";
import {
  Building2,
  Car,
  Flame,
  Users,
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
  const items = [...INSTITUTIONS, ...INSTITUTIONS];

  return (
    <section id="section-03" className="w-full bg-[#E0E5EC] py-8 sm:py-10 overflow-hidden relative">
      {/* Left and Right Fade Gradients */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#E0E5EC] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#E0E5EC] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#6B7280] font-bold">
          Operational Alignment Across Response Agencies
        </span>
      </div>

      <div className="flex w-max animate-marquee-left gap-4 sm:gap-6 py-2">
        {items.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#E0E5EC] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.7)] text-[#3D4852] hover:text-[#6C63FF] hover:shadow-[8px_8px_16px_rgba(163,177,198,0.7),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-all duration-300 shrink-0 select-none group"
            >
              <div className="w-7 h-7 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#6C63FF] group-hover:text-[#38B2AC] transition-colors">
                <IconComponent className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-sans font-bold tracking-tight">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
