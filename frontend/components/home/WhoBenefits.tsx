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
    icon: Landmark,
    description:
      "Monitor hundreds of vulnerable slope sectors simultaneously across state command centers, prioritizing resource deployment before disaster strikes.",
  },
  {
    num: "02",
    role: "Border Roads Organisation (BRO)",
    icon: Car,
    description:
      "Identify high-altitude arterial highways, bridges, and tunnels at elevated risk before debris flows block critical supply lines.",
  },
  {
    num: "03",
    role: "Emergency Response (NDRF)",
    icon: Flame,
    description:
      "Access 12 to 24-hour predictive lookaheads to preposition rescue battalions and plan safe evacuation corridors.",
  },
  {
    num: "04",
    role: "Field Geological Teams",
    icon: Compass,
    description:
      "Submit geo-tagged ground photos, crack measurements, and piezometer readings from rugged mountain terrain with offline sync.",
  },
  {
    num: "05",
    role: "Himalayan Communities",
    icon: Home,
    description:
      "Receive transparent, multilingual SMS early warning broadcasts when physical slope indicators in their village reach critical levels.",
  },
  {
    num: "06",
    role: "District Administration & Police",
    icon: Building2,
    description:
      "Coordinate targeted traffic stoppages, temporary checkpoint diversions, and public safety announcements with verified spatial data.",
  },
];

export function WhoBenefits() {
  return (
    <section id="section-12" className="w-full bg-[#0d0d0d] py-20 md:py-28 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
            <span>Stakeholder Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
            Who Benefits From SANKET
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#bbbbbb] font-light leading-relaxed">
            Engineered to bridge central disaster planning and on-the-ground mountain protection.
          </p>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFICIARIES.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={item.num}
                className="bg-[#1a1a1a] border border-[#3c3c3c] p-8 flex flex-col justify-between hover:border-white hover:-translate-y-1 transition-all duration-150 group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 bg-[#0d0d0d] border border-[#3c3c3c] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 bg-[#0d0d0d] border border-[#3c3c3c] text-[11px] font-mono font-bold text-white uppercase">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-sans uppercase">
                    {item.role}
                  </h3>

                  <p className="text-sm text-[#bbbbbb] font-light leading-relaxed">
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
