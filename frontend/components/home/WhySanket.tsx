"use client";

import React from "react";
import { Database, Eye, MapPin, BellRing, Sparkles } from "lucide-react";
import { SectionHeader } from "../ui/Section";
import { StaggerContainer, StaggerItem, ScrollReveal, ScaleReveal } from "../shared/ScrollReveal";

const DIFFERENTIATORS = [
  {
    num: "01",
    icon: Database,
    title: "Multi-Source Intelligence",
    description:
      "Satellite remote sensing, precipitation models, in-situ soil moisture, terrain slope DEMs, and historical failure catalogs unified in one real-time data engine — eliminating fragmented sources and manual cross-correlation.",
  },
  {
    num: "02",
    icon: Eye,
    title: "AI + Computer Vision",
    description:
      "Predictive machine learning risk modeling paired directly with automated visual segmentation — environmental sensor numbers and ground imagery evidence working in synchronized harmony.",
  },
  {
    num: "03",
    icon: MapPin,
    title: "Location-Aware Risk",
    description:
      "PostGIS spatial visualization makes it unequivocally clear *where* risk is rising down to specific 10m micro-zones and highway milestones, not vague regional bulletins.",
  },
  {
    num: "04",
    icon: BellRing,
    title: "Actionable Warnings",
    description:
      "Continuous risk scores are translated directly into tiered hazard classifications and deterministic response action plans — delivering clarity to decision-makers instead of overwhelming raw datasets.",
  },
];

export function WhySanket() {
  return (
    <section id="section-13" className="w-full bg-[#213318] border-b border-[#37502B] py-20 md:py-28 text-white relative overflow-hidden">
      {/* Background Subtle Mesh & Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(200, 234, 59, 0.4) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8EA3B] opacity-[0.05] blur-[140px] rounded-full animate-glow-breathe" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            pill="Why SANKET"
            title="More Than Detection. Built for Early Action."
            subtitle="SANKET brings multiple layers of intelligence together so risk can be understood earlier, visualized clearly and acted on more effectively."
            dark={true}
            className="text-center mx-auto"
          />
        </ScrollReveal>

        {/* 2x2 Differentiator Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {DIFFERENTIATORS.map((diff) => {
            const IconComponent = diff.icon;
            return (
              <StaggerItem
                key={diff.title}
                className="p-8 sm:p-10 rounded-3xl bg-[#273C1E] border border-[#37502B] hover:border-[#C8EA3B] hover-card-rise flex flex-col justify-between group shadow-lg hover:shadow-[0_0_30px_rgba(200,234,59,0.15)] cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#1A2614] border border-[#37502B] flex items-center justify-center text-[#C8EA3B] group-hover:scale-110 group-hover:border-[#C8EA3B]/40 group-hover:bg-[#1A2614]/80 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-mono font-bold text-[#C8EA3B]">
                      {diff.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                    {diff.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#C5D7BD] leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#37502B] text-xs font-mono text-[#7E9473] flex items-center justify-between">
                  <span>SANKET Core Architectural Pillar</span>
                  <span className="text-[#C8EA3B] font-bold">● ACTIVE</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Centered Pull Quote with ScaleReveal */}
        <ScaleReveal delay={0.2} className="max-w-3xl mx-auto mt-16 sm:mt-20 text-center p-8 rounded-3xl bg-[#1A2614] border border-[#37502B] shadow-2xl hover-card-rise">
          <blockquote className="text-2xl sm:text-3xl font-display font-bold text-[#C8EA3B] italic leading-tight">
            &ldquo;One platform. Multiple signals. Clearer decisions.&rdquo;
          </blockquote>
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#7E9473] mt-3">
            The SANKET Foundation Principle
          </div>
        </ScaleReveal>
      </div>
    </section>
  );
}
