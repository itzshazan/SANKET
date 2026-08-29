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
  { name: "Disaster Management Authorities", icon: ShieldAlert },
  { name: "Road & Highway Agencies", icon: Car },
  { name: "Emergency Response Teams", icon: Flame },
  { name: "Field & Geological Teams", icon: Compass },
  { name: "State Governments (SDMAs)", icon: Landmark },
  { name: "Local Mountain Communities", icon: Home },
  { name: "Infrastructure & Border Bodies", icon: Building2 },
];

export function BeneficiaryMarquee() {
  // Duplicate for seamless infinite loop
  const items = [...INSTITUTIONS, ...INSTITUTIONS, ...INSTITUTIONS];

  return (
    <section id="section-03" className="w-full bg-[#FFFFFF] border-b border-[#E3E8DF] py-6 sm:py-8 overflow-hidden relative">
      {/* Left and Right Fade Gradients */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#586650] font-semibold">
          Engineered for Key Public & Disaster Response Institutions
        </span>
      </div>

      <div className="flex w-max animate-marquee-left gap-4 sm:gap-6 py-1">
        {items.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#F8F9F6] border border-[#E3E8DF] text-[#586650] hover:text-[#1A2614] hover:border-[#C8EA3B] hover:bg-white transition-all shadow-xs shrink-0 select-none group"
            >
              <div className="w-6 h-6 rounded-full bg-[#213318]/5 group-hover:bg-[#C8EA3B]/20 flex items-center justify-center text-[#213318] group-hover:text-[#1A2614] transition-colors">
                <IconComponent className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-sans font-semibold tracking-tight">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
