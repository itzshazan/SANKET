"use client";

import React from "react";
import { FolderGit2, Timer, FileQuestion } from "lucide-react";
import { StaggerContainer, StaggerItem, ScrollReveal } from "../shared/ScrollReveal";

const PROBLEMS = [
  {
    icon: FolderGit2,
    num: "01",
    title: "Fragmented Sensor Data",
    description:
      "Precipitation radars, piezometer gauges, and optical satellite feeds sit in separate agency silos without a unified predictive physics model.",
  },
  {
    icon: Timer,
    num: "02",
    title: "Delayed Physical Detection",
    description:
      "Subsurface pore pressure weakens slopes days before detachment, but traditional systems only notify agencies after asphalt breaks away.",
  },
  {
    icon: FileQuestion,
    num: "03",
    title: "Actionless Raw Telemetry",
    description:
      "Emergency responders receive raw sensor dumps without automated Common Alerting Protocol (CAP) dispatches or micro-zone evacuation routing.",
  },
];

export function KeyProblems() {
  return (
    <section id="section-06" className="w-full bg-[#E0E5EC] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF] mb-4">
            Critical Industry Bottlenecks
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#3D4852] tracking-tight">
            Why Traditional Warning Systems Fail
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280]">
            Legacy landslide warning networks rely solely on broad weather alerts. SANKET breaks through three critical operational limitations.
          </p>
        </div>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((problem) => {
            const IconComponent = problem.icon;
            return (
              <StaggerItem
                key={problem.title}
                className="rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] p-8 sm:p-10 flex flex-col justify-between hover:shadow-[12px_12px_24px_rgba(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.7)] hover:translate-y-[-2px] transition-all duration-300 group cursor-default"
              >
                <div>
                  {/* Top Inset Icon Well & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#6C63FF] group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-xl bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6B7280]">
                      GAP {problem.num}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#3D4852] mb-3">
                    {problem.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#A3B1C6]/30 text-xs font-mono font-bold text-[#6C63FF]">
                  Resolved by SANKET Pipeline
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
