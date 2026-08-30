"use client";

import React from "react";
import { Database, Eye, MapPin, BellRing } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../shared/ScrollReveal";

const DIFFERENTIATORS = [
  {
    num: "01",
    icon: Database,
    title: "Multi-Source Sensor Ingestion",
    description:
      "Satellite remote sensing, IMD rainfall forecasts, in-situ soil piezometers, and digital elevation DEMs fused in one real-time data engine without manual correlation.",
  },
  {
    num: "02",
    icon: Eye,
    title: "AI Physics + Computer Vision",
    description:
      "Predictive pore pressure modeling combined with automated visual crack segmentation—sensor physics and drone imagery working in synchronized harmony.",
  },
  {
    num: "03",
    icon: MapPin,
    title: "10m Location-Specific Precision",
    description:
      "High-resolution GIS mapping shows exactly where risk is escalating down to specific 10m micro-zones and highway milestones, avoiding vague bulletins.",
  },
  {
    num: "04",
    icon: BellRing,
    title: "Instant Actionable Dispatches",
    description:
      "Risk indexes translate into standardized Common Alerting Protocol (CAP) dispatches with deterministic highway closure and evacuation playbooks.",
  },
];

export function WhySanket() {
  return (
    <section id="section-13" className="w-full bg-[#E0E5EC] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF] mb-4">
            System Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#3D4852] tracking-tight">
            More Than Detection. Built for Early Action.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280]">
            SANKET unifies multiple intelligence streams so risk is understood earlier, mapped clearly, and acted upon safely.
          </p>
        </div>

        {/* 2x2 Differentiator Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIFFERENTIATORS.map((diff) => {
            const Icon = diff.icon;
            return (
              <StaggerItem
                key={diff.title}
                className="rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] p-8 sm:p-10 flex flex-col justify-between hover:shadow-[12px_12px_24px_rgba(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.7)] hover:translate-y-[-2px] transition-all duration-300 group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#6C63FF] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-xl bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6)] text-xs font-mono font-bold text-[#6B7280]">
                      {diff.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#3D4852] mb-3">
                    {diff.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#A3B1C6]/30 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6B7280]">Core Architectural Pillar</span>
                  <span className="text-[#38B2AC] font-bold">● ACTIVE</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Molded Quote Card */}
        <div className="max-w-3xl mx-auto mt-16 text-center p-8 sm:p-12 rounded-[32px] bg-[#E0E5EC] shadow-[inset_8px_8px_16px_rgba(163,177,198,0.6),inset_-8px_-8px_16px_rgba(255,255,255,0.7)]">
          <blockquote className="text-2xl sm:text-3xl font-display font-extrabold text-[#3D4852] leading-tight">
            &ldquo;One platform. Multiple signals. Clearer decisions.&rdquo;
          </blockquote>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#6C63FF] mt-4">
            The SANKET Foundation Principle
          </div>
        </div>
      </div>
    </section>
  );
}
