"use client";

import React from "react";
import {
  Building2,
  Car,
  Flame,
  Users,
  Home,
  Globe,
  Landmark,
  Compass,
  AlertTriangle
} from "lucide-react";
import { SectionHeader } from "../ui/Section";
import { StaggerContainer, StaggerItem, ScrollReveal } from "../shared/ScrollReveal";

const BENEFICIARIES = [
  {
    num: "01",
    role: "Disaster Management Authorities",
    icon: Landmark,
    iconBg: "#DDF2EC", // Mint
    description:
      "Monitor multiple vulnerable zones simultaneously across state command centers, understand changing risk trajectories, and prioritize where to allocate resources.",
  },
  {
    num: "02",
    role: "Infrastructure & Road Agencies",
    icon: Car,
    iconBg: "#ECEBFA", // Lavender
    description:
      "Identify arterial mountain highways, railway corridors, and bridges at elevated risk before catastrophic rockfalls or debris flow blockages occur.",
  },
  {
    num: "03",
    role: "Emergency Response Teams",
    icon: Flame,
    iconBg: "rgba(200,234,59,0.20)", // Lime
    description:
      "Access predictive lookaheads to preposition rescue battalions, organize rapid evacuation corridors, and coordinate targeted response maneuvers.",
  },
  {
    num: "04",
    role: "Geological & Field Teams",
    icon: Compass,
    iconBg: "#DDF2EC", // Mint
    description:
      "Submit geo-tagged ground observations, crack photographs, and sensor readings directly from rugged field terrain into the central platform without friction.",
  },
  {
    num: "05",
    role: "Local Mountain Communities",
    icon: Home,
    iconBg: "#ECEBFA", // Lavender
    description:
      "Receive transparent, localized early warning broadcasts in native languages when physical hazard indicators in their immediate village reach critical thresholds.",
  },
  {
    num: "06",
    role: "Any Region Facing Landslide Risk",
    icon: Globe,
    iconBg: "rgba(200,234,59,0.20)", // Lime
    description:
      "SANKET is engineered for rapid modular deployment across any geologically susceptible territory worldwide with standard remote sensing and DEM coverage.",
  },
];

export function WhoBenefits() {
  return (
    <section id="section-12" className="w-full bg-[#F8F9F6] border-b border-[#E3E8DF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            pill="Stakeholder Ecosystem"
            title="Built for Those Who Need to Act Early."
            subtitle="Designed for multi-agency interoperability — connecting high-level policy command with on-the-ground first responders."
            className="text-center mx-auto"
          />
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {BENEFICIARIES.map((item) => {
            const IconComponent = item.icon;
            return (
              <StaggerItem
                key={item.role}
                className="p-8 rounded-3xl bg-white border border-[#E3E8DF] hover:border-[#C8EA3B] hover-card-light flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Icon & Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#213318] group-hover:scale-110 transition-transform shadow-xs"
                      style={{ backgroundColor: item.iconBg }}
                    >
                      <IconComponent className="w-6 h-6 text-[#213318]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#586650]/60">
                      #{item.num}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#1A2614] mb-3 leading-snug">
                    {item.role}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#586650] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E3E8DF]/60 flex items-center justify-between text-xs font-mono text-[#7E9473]">
                  <span>Dedicated Stakeholder View</span>
                  <span className="text-[#1A2614] font-bold">&rarr;</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
