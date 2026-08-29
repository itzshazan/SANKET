"use client";

import React from "react";
import { FolderGit2, Clock, HelpCircle, Layers, Timer, FileQuestion } from "lucide-react";
import { SectionHeader } from "../ui/Section";
import { StaggerContainer, StaggerItem, ScrollReveal } from "../shared/ScrollReveal";

const PROBLEMS = [
  {
    icon: FolderGit2,
    num: "01",
    title: "Fragmented Data",
    description:
      "Environmental, satellite, rainfall feeds and geospatial data sit in separate silos across agencies — no unified real-time risk picture exists.",
  },
  {
    icon: Timer,
    num: "02",
    title: "Delayed Detection",
    description:
      "Early indicators such as ground tension cracks, localized saturation, and slope creep are difficult to spot and correlate before catastrophic failure.",
  },
  {
    icon: FileQuestion,
    num: "03",
    title: "Unclear Decision-Making",
    description:
      "Disaster management teams need location-specific, tiered actionable intelligence with exact response playbooks — not disconnected raw sensor dumps.",
  },
];

export function KeyProblems() {
  return (
    <section id="section-06" className="w-full bg-[#F8F9F6] border-b border-[#E3E8DF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            pill="The Challenge"
            title="Why Current Systems Fall Short."
            subtitle="Traditional landslide detection systems operate reactively after the slope fails. SANKET is built to break through these critical bottlenecks."
            className="text-center mx-auto"
          />
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {PROBLEMS.map((problem) => {
            const IconComponent = problem.icon;
            return (
              <StaggerItem
                key={problem.title}
                className="relative rounded-2xl bg-white border border-[#E3E8DF] border-t-[3px] border-t-[#C8EA3B] p-8 sm:p-9 shadow-sm hover-card-light flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Top Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#C8EA3B]/15 flex items-center justify-center text-[#213318] group-hover:scale-110 group-hover:bg-[#C8EA3B]/25 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-[#213318]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#586650]/60 group-hover:text-[#213318] transition-colors">
                      GAP {problem.num}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1A2614] mb-3">
                    {problem.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm sm:text-base text-[#586650] leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E3E8DF]/60 text-xs font-mono text-[#7E9473]">
                  Solved by SANKET Pipeline
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
