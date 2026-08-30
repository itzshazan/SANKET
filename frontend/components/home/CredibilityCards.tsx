"use client";

import React from "react";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../shared/ScrollReveal";

export function CredibilityCards() {
  return (
    <section id="section-04" className="w-full bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Smart India Hackathon */}
          <StaggerItem className="bg-[#1a1a1a] text-white p-8 sm:p-10 flex flex-col justify-between border border-[#3c3c3c] min-h-[340px] relative overflow-hidden group">
            {/* Top M Stripe */}
            <div className="absolute top-0 left-0 right-0 h-[3px] flex">
              <div className="w-1/3 bg-[#0066b1]" />
              <div className="w-1/3 bg-[#1c69d4]" />
              <div className="w-1/3 bg-[#e22718]" />
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0d0d0d] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-6">
                <Award className="w-4 h-4 text-[#1c69d4]" />
                Smart India Hackathon
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4 font-sans uppercase">
                National-level solution for India&apos;s geohazard risk challenge
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#bbbbbb] font-light leading-relaxed max-w-lg">
                Selected for SIH — addressing urgent geohazard monitoring in critical Himalayan and Western Ghats corridors through continuous remote sensing.
              </p>
            </div>

            {/* Link */}
            <div className="relative z-10 pt-6 mt-6 border-t border-[#262626]">
              <a
                href="#section-13"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[1.5px] text-white hover:text-[#1c69d4] transition-colors group/link"
              >
                <span>View project architecture</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </a>
            </div>
          </StaggerItem>

          {/* Card 2: Institutional Protocols */}
          <StaggerItem className="bg-[#1a1a1a] text-white p-8 sm:p-10 flex flex-col justify-between border border-[#3c3c3c] min-h-[340px] relative overflow-hidden group">
            {/* Top Border White Accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-white" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0d0d0d] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-6">
                <ShieldCheck className="w-4 h-4 text-white" />
                Institutional Protocols
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4 font-sans uppercase">
                Engineered around NDMA and highway authority response protocols
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#bbbbbb] font-light leading-relaxed max-w-lg">
                Built around the operational needs of real response teams, multi-tier disaster authorities, and highway clearance commanders.
              </p>
            </div>

            {/* Link */}
            <div className="relative z-10 pt-6 mt-6 border-t border-[#262626]">
              <a
                href="#section-10"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[1.5px] text-white hover:text-[#1c69d4] transition-colors group/link"
              >
                <span>Explore warning protocol</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </a>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
