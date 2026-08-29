"use client";

import React from "react";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../shared/ScrollReveal";

export function CredibilityCards() {
  return (
    <section id="section-04" className="w-full bg-[#F8F9F6] border-b border-[#E3E8DF] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Smart India Hackathon */}
          <StaggerItem className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#E3E8DF] bg-[#213318] p-8 md:p-10 flex flex-col justify-between shadow-sm group hover:border-[#C8EA3B] hover-card-rise transition-all duration-300 min-h-[320px]">
            {/* Background Texture & Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#213318] via-[#1A2614] to-[#121A0E] opacity-95" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8EA3B] opacity-[0.08] blur-[80px] rounded-full pointer-events-none group-hover:opacity-[0.14] transition-opacity" />
            
            {/* Top Badge */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8EA3B] text-[#1A2614] text-xs font-mono font-bold uppercase tracking-wider mb-6">
                <Award className="w-4 h-4 text-[#1A2614]" />
                Smart India Hackathon
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight mb-4">
                Built as a national-level solution for India&apos;s disaster risk challenge
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#C5D7BD] leading-relaxed max-w-lg">
                Selected for SIH — one of the country&apos;s largest innovation programs, addressing urgent geohazard monitoring in critical Himalayan and Western Ghats corridors.
              </p>
            </div>

            {/* Bottom Link */}
            <div className="relative z-10 pt-6 mt-6 border-t border-[#37502B]">
              <a
                href="#section-13"
                className="inline-flex items-center gap-2 text-sm font-display font-semibold text-[#C8EA3B] hover:text-white transition-colors group/link"
              >
                <span>View the project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </a>
            </div>
          </StaggerItem>

          {/* Card 2: Government-Aligned */}
          <StaggerItem className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#E3E8DF] bg-[#273C1E] p-8 md:p-10 flex flex-col justify-between shadow-sm group hover:border-[#C8EA3B] hover-card-rise transition-all duration-300 min-h-[320px]">
            {/* Background Texture & Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#273C1E] via-[#213318] to-[#1A2614] opacity-95" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C8EA3B] opacity-[0.06] blur-[80px] rounded-full pointer-events-none group-hover:opacity-[0.12] transition-opacity" />

            {/* Top Badge */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A2614] text-white border border-[#37502B] text-xs font-mono font-bold uppercase tracking-wider mb-6">
                <ShieldCheck className="w-4 h-4 text-[#C8EA3B]" />
                Government-Aligned
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight mb-4">
                Designed to integrate with NDMA and state disaster management workflows
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#C5D7BD] leading-relaxed max-w-lg">
                Built around the operational needs of real government response teams, early warning dissemination protocols, and highway clearing operations.
              </p>
            </div>

            {/* Bottom Link */}
            <div className="relative z-10 pt-6 mt-6 border-t border-[#37502B]">
              <a
                href="#section-10"
                className="inline-flex items-center gap-2 text-sm font-display font-semibold text-[#C8EA3B] hover:text-white transition-colors group/link"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </a>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
