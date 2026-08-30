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
    <section id="section-13" className="w-full bg-black text-white py-20 md:py-28 border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
            <span>System Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
            More Than Detection. Built For Early Action.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#bbbbbb] font-light leading-relaxed">
            SANKET unifies multiple intelligence streams so risk is understood earlier, mapped clearly, and acted upon safely.
          </p>
        </div>

        {/* 2x2 Differentiator Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIFFERENTIATORS.map((diff) => {
            const IconComponent = diff.icon;
            return (
              <StaggerItem
                key={diff.title}
                className="bg-[#1a1a1a] border border-[#3c3c3c] p-8 sm:p-10 flex flex-col justify-between hover:border-white transition-all duration-150 group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 bg-[#0d0d0d] border border-[#3c3c3c] text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-white uppercase">
                      {diff.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans uppercase">
                    {diff.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#bbbbbb] font-light leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#262626] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#7e7e7e] uppercase tracking-wider">Core Pillar</span>
                  <span className="text-white font-bold">● ACTIVE</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Centered Pull Quote in BMW M Card */}
        <div className="max-w-3xl mx-auto mt-16 text-center p-8 sm:p-10 bg-[#1a1a1a] border border-[#3c3c3c] relative overflow-hidden">
          {/* Top M Stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] flex">
            <div className="w-1/3 bg-[#0066b1]" />
            <div className="w-1/3 bg-[#1c69d4]" />
            <div className="w-1/3 bg-[#e22718]" />
          </div>

          <blockquote className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white leading-tight font-sans">
            &ldquo;One platform. Multiple signals. Clearer decisions.&rdquo;
          </blockquote>
          <div className="text-xs font-mono uppercase tracking-[2px] text-[#7e7e7e] mt-4 font-bold">
            The SANKET Foundation Principle
          </div>
        </div>
      </div>
    </section>
  );
}
