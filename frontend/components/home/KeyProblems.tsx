"use client";

import React from "react";
import { FolderGit2, Timer, FileQuestion } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../shared/ScrollReveal";

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
    <section id="section-06" className="w-full bg-[#0d0d0d] py-20 md:py-28 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
            <span>Critical Industry Bottlenecks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
            Why Traditional Warning Systems Fail
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#bbbbbb] font-light leading-relaxed">
            Legacy landslide warning networks rely solely on broad weather alerts. SANKET breaks through three critical operational limitations.
          </p>
        </div>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map((problem) => {
            const IconComponent = problem.icon;
            return (
              <StaggerItem
                key={problem.title}
                className="bg-[#1a1a1a] border border-[#3c3c3c] p-8 flex flex-col justify-between hover:border-white hover:-translate-y-1 transition-all duration-150 group cursor-default"
              >
                <div>
                  {/* Top Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 bg-[#0d0d0d] border border-[#3c3c3c] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 bg-[#0d0d0d] border border-[#3c3c3c] text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                      GAP {problem.num}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-white mb-3 font-sans uppercase">
                    {problem.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm text-[#bbbbbb] font-light leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#262626] text-xs font-mono font-bold uppercase tracking-wider text-[#1c69d4]">
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
