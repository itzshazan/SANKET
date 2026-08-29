"use client";

import React from "react";
import { Section } from "../ui/Section";
import { Grid, GridItem } from "../ui/Grid";
import { ShieldCheck, Satellite, Award } from "lucide-react";

export function AboutHero() {
  return (
    <Section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 border-b border-[#37502B] bg-[#213318] text-white text-center flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(200, 234, 59, 0.4) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8EA3B] opacity-[0.06] blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#C8EA3B]/10 border border-[#C8EA3B]/30 text-[#C8EA3B] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
          <Award className="w-4 h-4 text-[#C8EA3B]" />
          Smart India Hackathon (SIH 2026)
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
          Predict. Prepare. Protect.
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[#C5D7BD] font-normal max-w-3xl mx-auto leading-relaxed">
          SANKET is an AI-powered landslide early warning and risk intelligence platform engineered to safeguard mountain communities and critical highway corridors.
        </p>
      </div>

      <Grid className="relative z-10 mt-16 sm:mt-20 text-left max-w-5xl mx-auto gap-8 sm:gap-12">
        <GridItem mdColSpan={6} className="space-y-4 rounded-2xl bg-[#1A2614] border border-[#37502B] p-6 sm:p-8">
          <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#C8EA3B] flex items-center gap-2">
            <Satellite className="w-4 h-4" /> The Vision
          </h2>
          <p className="text-sm text-[#C5D7BD] leading-relaxed">
            Landslides rarely strike without geological precursors. SANKET fuses ESA Sentinel-2 remote sensing, real-time rainfall forecasts, in-situ soil moisture sensors, and computer vision to identify risk before slopes collapse.
          </p>
        </GridItem>
        <GridItem mdColSpan={6} className="space-y-4 rounded-2xl bg-[#1A2614] border border-[#37502B] p-6 sm:p-8">
          <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#C8EA3B] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> National Impact
          </h2>
          <p className="text-sm text-[#C5D7BD] leading-relaxed">
            Built in alignment with NDMA protocols and state disaster management workflows, SANKET provides actionable early warnings to highway authorities, rescue battalions, and local vulnerable populations.
          </p>
        </GridItem>
      </Grid>
    </Section>
  );
}
