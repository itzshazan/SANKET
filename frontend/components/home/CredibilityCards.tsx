"use client";

import React from "react";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../shared/ScrollReveal";

export function CredibilityCards() {
  return (
    <section id="section-04" className="w-full bg-[#E0E5EC] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Smart India Hackathon */}
          <StaggerItem className="rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] p-8 sm:p-10 flex flex-col justify-between hover:shadow-[12px_12px_24px_rgba(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.7)] hover:translate-y-[-2px] transition-all duration-300 min-h-[320px] group">
            <div>
              {/* Top Inset Badge Well */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] text-xs font-mono font-bold uppercase tracking-wider text-[#6C63FF] mb-6">
                <Award className="w-4 h-4 text-[#6C63FF]" />
                Smart India Hackathon
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#3D4852] leading-tight mb-4">
                National-level solution for India&apos;s geohazard risk challenge
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-lg">
                Selected for SIH — addressing urgent geohazard monitoring in critical Himalayan and Western Ghats corridors through continuous remote sensing.
              </p>
            </div>

            {/* Bottom Link */}
            <div className="pt-6 mt-6 border-t border-[#A3B1C6]/30">
              <a
                href="#section-13"
                className="inline-flex items-center gap-2 text-sm font-display font-bold text-[#6C63FF] group-hover:text-[#3D4852] transition-colors group/link"
              >
                <span>View project architecture</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </a>
            </div>
          </StaggerItem>

          {/* Card 2: Government-Aligned */}
          <StaggerItem className="rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] p-8 sm:p-10 flex flex-col justify-between hover:shadow-[12px_12px_24px_rgba(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.7)] hover:translate-y-[-2px] transition-all duration-300 min-h-[320px] group">
            <div>
              {/* Top Inset Badge Well */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] text-xs font-mono font-bold uppercase tracking-wider text-[#38B2AC] mb-6">
                <ShieldCheck className="w-4 h-4 text-[#38B2AC]" />
                Institutional Protocols
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#3D4852] leading-tight mb-4">
                Engineered around NDMA and highway authority response protocols
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-lg">
                Built around the operational needs of real response teams, multi-tier disaster authorities, and highway clearance commanders.
              </p>
            </div>

            {/* Bottom Link */}
            <div className="pt-6 mt-6 border-t border-[#A3B1C6]/30">
              <a
                href="#section-10"
                className="inline-flex items-center gap-2 text-sm font-display font-bold text-[#6C63FF] group-hover:text-[#3D4852] transition-colors group/link"
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
