"use client";

import React from "react";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../shared/ScrollReveal";

export function CredibilityCards() {
  return (
    <section id="section-04" className="w-full bg-[#FDFCF8] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Smart India Hackathon (Moss Warmth) */}
          <StaggerItem className="bg-[#EBF0E8] text-[#2C2C24] p-8 sm:p-10 flex flex-col justify-between border border-[#5D7052]/30 rounded-tl-[4.5rem] rounded-tr-[2rem] rounded-br-[3.5rem] rounded-bl-[2rem] shadow-[0_10px_30px_-5px_rgba(93,112,82,0.15)] min-h-[340px] hover:shadow-[0_20px_40px_-10px_rgba(93,112,82,0.22)] hover:-translate-y-1 transition-all duration-300 group">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#5D7052]/30 text-xs font-bold rounded-full text-[#5D7052] mb-6 shadow-2xs">
                <Award className="w-4 h-4 text-[#C18C5D]" />
                <span>Smart India Hackathon</span>
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C24] leading-snug mb-4">
                National-level solution for India&apos;s geohazard risk challenge
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#78786C] font-normal leading-relaxed max-w-lg">
                Selected for SIH — addressing urgent geohazard monitoring in critical Himalayan and Western Ghats corridors through continuous remote sensing.
              </p>
            </div>

            {/* Link */}
            <div className="pt-6 mt-6 border-t border-[#5D7052]/20">
              <a
                href="#section-13"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#5D7052] hover:text-[#4C5D42] transition-colors group/link"
              >
                <span>View project architecture</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </a>
            </div>
          </StaggerItem>

          {/* Card 2: Institutional Protocols (Terracotta Warmth) */}
          <StaggerItem className="bg-[#F9F1EB] text-[#2C2C24] p-8 sm:p-10 flex flex-col justify-between border border-[#C18C5D]/30 rounded-tr-[4.5rem] rounded-tl-[2rem] rounded-bl-[3.5rem] rounded-br-[2rem] shadow-[0_10px_30px_-5px_rgba(193,140,93,0.15)] min-h-[340px] hover:shadow-[0_20px_40px_-10px_rgba(193,140,93,0.22)] hover:-translate-y-1 transition-all duration-300 group">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#C18C5D]/30 text-xs font-bold rounded-full text-[#C18C5D] mb-6 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#5D7052]" />
                <span>Institutional Protocols</span>
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C24] leading-snug mb-4">
                Engineered around NDMA and highway authority response protocols
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#78786C] font-normal leading-relaxed max-w-lg">
                Built around the operational needs of real response teams, multi-tier disaster authorities, and highway clearance commanders.
              </p>
            </div>

            {/* Link */}
            <div className="pt-6 mt-6 border-t border-[#C18C5D]/20">
              <a
                href="#section-10"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#C18C5D] hover:text-[#AB774B] transition-colors group/link"
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
