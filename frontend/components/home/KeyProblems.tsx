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
    corner: "rounded-tl-[4.5rem] rounded-tr-[2rem] rounded-br-[2.5rem] rounded-bl-[2rem]",
  },
  {
    icon: Timer,
    num: "02",
    title: "Delayed Physical Detection",
    description:
      "Subsurface pore pressure weakens slopes days before detachment, but traditional systems only notify agencies after asphalt breaks away.",
    corner: "rounded-tr-[4.5rem] rounded-tl-[2rem] rounded-bl-[2.5rem] rounded-br-[2rem]",
  },
  {
    icon: FileQuestion,
    num: "03",
    title: "Actionless Raw Telemetry",
    description:
      "Emergency responders receive raw sensor dumps without automated Common Alerting Protocol (CAP) dispatches or micro-zone evacuation routing.",
    corner: "rounded-bl-[4.5rem] rounded-br-[2rem] rounded-tl-[2.5rem] rounded-tr-[2rem]",
  },
];

export function KeyProblems() {
  return (
    <section id="section-06" className="w-full bg-[#F0EBE5]/40 py-20 md:py-28 border-t border-[#DED8CF]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#5D7052] mb-4">
            <span>Critical Industry Bottlenecks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#2C2C24]">
            Why Traditional Warning Systems Fail
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#78786C] font-normal leading-relaxed">
            Legacy landslide warning networks rely solely on broad weather alerts. SANKET breaks through three critical operational limitations.
          </p>
        </div>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map((problem) => {
            const IconComponent = problem.icon;
            return (
              <StaggerItem
                key={problem.title}
                className={`bg-[#FEFEFA] border border-[#DED8CF] p-8 flex flex-col justify-between hover:border-[#5D7052] hover:-translate-y-1 hover:rotate-0.5 shadow-[0_4px_20px_-2px_rgba(93,112,82,0.10)] hover:shadow-[0_20px_40px_-10px_rgba(93,112,82,0.18)] transition-all duration-300 group cursor-default ${problem.corner}`}
              >
                <div>
                  {/* Top Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#5D7052]/10 flex items-center justify-center text-[#5D7052] group-hover:bg-[#5D7052] group-hover:text-[#F3F4F1] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-[#F0EBE5] rounded-full text-xs font-bold text-[#5D7052]">
                      GAP {problem.num}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-serif font-bold text-[#2C2C24] mb-3">
                    {problem.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm text-[#78786C] font-normal leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DED8CF]/60 text-xs font-bold uppercase tracking-wider text-[#5D7052]">
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
