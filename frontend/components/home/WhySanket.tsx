"use client";

import React from "react";
import { Database, Eye, MapPin, BellRing, Sparkles } from "lucide-react";
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
    <section id="section-13" className="w-full bg-[#FDFCF8] py-20 md:py-28 border-y border-[#DED8CF]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#5D7052] mb-4">
            <span>System Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#2C2C24]">
            More Than Detection. Built For Early Action.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#78786C] font-normal leading-relaxed">
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
                className="bg-[#FEFEFA] border border-[#DED8CF] rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between hover:border-[#5D7052] shadow-[0_4px_20px_-2px_rgba(93,112,82,0.10)] hover:shadow-[0_20px_40px_-10px_rgba(93,112,82,0.18)] transition-all duration-300 group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#5D7052]/10 text-[#5D7052] flex items-center justify-center group-hover:bg-[#5D7052] group-hover:text-[#F3F4F1] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#5D7052] bg-[#EBF0E8] px-3 py-1 rounded-full">
                      {diff.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2C2C24] mb-3">
                    {diff.title}
                  </h3>

                  <p className="text-base text-[#78786C] font-normal leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DED8CF]/60 flex items-center justify-between text-xs font-bold">
                  <span className="text-[#78786C] uppercase tracking-wider">Core Pillar</span>
                  <span className="text-[#5D7052]">● ACTIVE</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Centered Wabi-Sabi Pull Quote */}
        <div className="max-w-3xl mx-auto mt-16 text-center p-8 sm:p-12 bg-[#EBF0E8] border border-[#5D7052]/40 rounded-[2.5rem] shadow-soft">
          <blockquote className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C24] leading-snug">
            &ldquo;One platform. Multiple signals. Clearer decisions.&rdquo;
          </blockquote>
          <div className="text-xs font-bold uppercase tracking-wider text-[#5D7052] mt-4">
            The SANKET Foundation Principle
          </div>
        </div>
      </div>
    </section>
  );
}
