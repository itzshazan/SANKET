"use client";

import React from "react";
import {
  Building2,
  Car,
  Flame,
  Home,
  Landmark,
  Compass
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "../shared/ScrollReveal";

const BENEFICIARIES = [
  {
    num: "01",
    role: "Disaster Authorities (NDMA/SDMA)",
    color: "#5D7052",
    bg: "#EBF0E8",
    icon: Landmark,
    description:
      "Monitor hundreds of vulnerable slope sectors simultaneously across state command centers, prioritizing resource deployment before disaster strikes.",
    corner: "rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-[2rem] rounded-bl-[2rem]",
  },
  {
    num: "02",
    role: "Border Roads Organisation (BRO)",
    color: "#C18C5D",
    bg: "#F9F1EB",
    icon: Car,
    description:
      "Identify high-altitude arterial highways, bridges, and tunnels at elevated risk before debris flows block critical supply lines.",
    corner: "rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-[2rem] rounded-br-[2rem]",
  },
  {
    num: "03",
    role: "Emergency Response (NDRF)",
    color: "#A85448",
    bg: "#FBF0EE",
    icon: Flame,
    description:
      "Access 12 to 24-hour predictive lookaheads to preposition rescue battalions and plan safe evacuation corridors.",
    corner: "rounded-tl-[3.5rem] rounded-tr-[2rem] rounded-br-[3.5rem] rounded-bl-[2rem]",
  },
  {
    num: "04",
    role: "Field Geological Teams",
    color: "#5D7052",
    bg: "#EBF0E8",
    icon: Compass,
    description:
      "Submit geo-tagged ground photos, crack measurements, and piezometer readings from rugged mountain terrain with offline sync.",
    corner: "rounded-tr-[3.5rem] rounded-tl-[2rem] rounded-bl-[3.5rem] rounded-br-[2rem]",
  },
  {
    num: "05",
    role: "Himalayan Communities",
    color: "#C18C5D",
    bg: "#F9F1EB",
    icon: Home,
    description:
      "Receive transparent, multilingual SMS early warning broadcasts when physical slope indicators in their village reach critical levels.",
    corner: "rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-[2rem] rounded-bl-[2rem]",
  },
  {
    num: "06",
    role: "District Administration & Police",
    color: "#4A4A40",
    bg: "#F0EBE5",
    icon: Building2,
    description:
      "Coordinate targeted traffic stoppages, temporary checkpoint diversions, and public safety announcements with verified spatial data.",
    corner: "rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-[2rem] rounded-br-[2rem]",
  },
];

export function WhoBenefits() {
  return (
    <section id="section-12" className="w-full bg-[#F0EBE5]/40 py-20 md:py-28 border-t border-[#DED8CF]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#5D7052] mb-4">
            <span>Stakeholder Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#2C2C24]">
            Who Benefits From SANKET
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#78786C] font-normal leading-relaxed">
            Engineered to bridge central disaster planning and on-the-ground mountain protection.
          </p>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFICIARIES.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={item.num}
                className={`bg-[#FEFEFA] border border-[#DED8CF] p-8 flex flex-col justify-between hover:border-[#5D7052] hover:-translate-y-1 hover:rotate-0.5 shadow-[0_4px_20px_-2px_rgba(93,112,82,0.10)] hover:shadow-[0_20px_40px_-10px_rgba(93,112,82,0.18)] transition-all duration-300 group cursor-default ${item.corner}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors"
                      style={{ backgroundColor: item.bg, color: item.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ backgroundColor: item.bg, color: item.color }}
                    >
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#2C2C24] mb-3">
                    {item.role}
                  </h3>

                  <p className="text-sm text-[#78786C] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
