"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  CloudRain,
  Droplets,
  Mountain,
  AlertOctagon,
  Flame,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  CheckCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../ui/Section";
import { ScrollReveal, ScaleReveal } from "../shared/ScrollReveal";

interface StageData {
  id: number;
  label: string;
  dotColor: string;
  pillBg: string;
  riskName: string;
  headline: string;
  description: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  telemetry: { label: string; value: string }[];
}

const STAGES: StageData[] = [
  {
    id: 1,
    label: "Heavy Rainfall · Stage 1 of 5",
    dotColor: "#C8EA3B",
    pillBg: "rgba(200,234,59,0.15)",
    riskName: "Normal / Baseline",
    headline: "Precipitation saturates the ground rapidly",
    description: "Intense or prolonged rainfall begins pushing soil moisture beyond normal absorption capacity in mountain slopes.",
    icon: CloudRain,
    telemetry: [
      { label: "Precipitation Rate", value: "45 mm/hr" },
      { label: "Pore Water Pressure", value: "Low (Normal)" },
      { label: "Slope Cohesion Factor", value: "1.45 (Stable)" },
    ],
  },
  {
    id: 2,
    label: "Soil Saturation · Stage 2 of 5",
    dotColor: "#F5C518",
    pillBg: "rgba(245,197,24,0.15)",
    riskName: "Watch Stage",
    headline: "Water accumulation weakens soil cohesion",
    description: "Saturated soil loses structural integrity, increasing pore water pressure within the bedrock and overburden layers.",
    icon: Droplets,
    telemetry: [
      { label: "Volumetric Moisture", value: "82% Saturation" },
      { label: "Pore Water Pressure", value: "Moderate Elevated" },
      { label: "Slope Cohesion Factor", value: "1.18 (Watch)" },
    ],
  },
  {
    id: 3,
    label: "Slope Instability · Stage 3 of 5",
    dotColor: "#F07B20",
    pillBg: "rgba(240,123,32,0.15)",
    riskName: "Warning Stage",
    headline: "Vulnerable slopes become progressively unstable",
    description: "Shear stress begins to exceed shear strength — the slope enters a critical shear band zone requiring active telemetry.",
    icon: Mountain,
    telemetry: [
      { label: "Subsurface Shear Strain", value: "+4.2 mm/day" },
      { label: "Safety Factor (FoS)", value: "1.02 (Threshold)" },
      { label: "Slope Angle", value: "41° Critical" },
    ],
  },
  {
    id: 4,
    label: "Ground Changes · Stage 4 of 5",
    dotColor: "#F07B20",
    pillBg: "rgba(240,123,32,0.15)",
    riskName: "Warning / Action",
    headline: "Cracks, debris and surface deformation appear",
    description: "Physical indicators emerge — detectable by Sentinel-2 satellite imagery, InSAR interferometry, and ground field reports.",
    icon: AlertOctagon,
    telemetry: [
      { label: "Surface Crack Width", value: "12–25 cm" },
      { label: "InSAR Displacement", value: "+18 mm/wk" },
      { label: "Debris Accumulation", value: "Toe of Slope" },
    ],
  },
  {
    id: 5,
    label: "Landslide · Stage 5 of 5",
    dotColor: "#E03030",
    pillBg: "rgba(224,48,48,0.15)",
    riskName: "Danger / Emergency",
    headline: "Instability develops into a destructive event",
    description: "Mass movement occurs — infrastructure, highway corridors, and residential communities in the runout path are at severe risk.",
    icon: Flame,
    telemetry: [
      { label: "Failure Volume", value: "> 120,000 m³" },
      { label: "Downslope Velocity", value: "24 m/s" },
      { label: "Runout Distance", value: "1.4 km" },
    ],
  },
];

const AUTO_PLAY_DURATION = 5000; // 5 seconds per slide

export function RiskProgression() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);
  const currentStage = STAGES[activeStageIndex];

  // Infinite Next & Prev handlers
  const handleNext = () => {
    setDirection(1);
    setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveStageIndex((prev) => (prev - 1 + STAGES.length) % STAGES.length);
  };

  // Auto-play interval loop
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, activeStageIndex]);

  return (
    <section id="section-05" className="w-full bg-[#141F0F] border-b border-[#37502B] py-20 md:py-28 overflow-hidden text-white relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C8EA3B] opacity-[0.04] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <SectionHeader
            pill="Risk Timeline & Physics"
            title="The Risk Builds Before the Disaster."
            subtitle="Landslides rarely happen without warning — detecting those warnings is the hard part."
            statusText="AWS-STYLE MULTI-NODE SLIDER"
            dark={true}
            className="text-center mx-auto"
          />
        </ScrollReveal>

        {/* Stepper Pill Bar */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="grid grid-cols-5 gap-2">
            {STAGES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setDirection(idx > activeStageIndex ? 1 : -1);
                  setActiveStageIndex(idx);
                }}
                className={`py-2 px-1 text-center rounded-xl text-xs font-mono transition-all duration-300 cursor-pointer ${
                  activeStageIndex === idx
                    ? "bg-[#C8EA3B] text-[#1A2614] font-bold shadow-[0_0_20px_rgba(200,234,59,0.35)] scale-[1.03]"
                    : "bg-[#213318]/80 text-[#C5D7BD] border border-[#37502B] hover:bg-[#37502B] hover:text-white"
                }`}
              >
                <span className="hidden sm:inline">Stage </span>0{s.id}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AWS-Style Multi-Card Track Viewport with Side Peek Cards */}
      <div
        className="w-full relative py-6 select-none overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex items-center"
          animate={{
            x: `calc(50% - (${activeStageIndex} * (min(86vw, 920px) + 24px) + min(86vw, 920px) / 2))`,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
        >
          {STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            const StageIcon = stage.icon;

            return (
              <div
                key={stage.id}
                onClick={() => {
                  if (!isActive) setActiveStageIndex(idx);
                }}
                style={{ width: "min(86vw, 920px)", marginRight: "24px" }}
                className={`shrink-0 rounded-3xl transition-all duration-500 overflow-hidden relative border ${
                  isActive
                    ? "bg-gradient-to-br from-[#273C1E] via-[#1F3017] to-[#162310] border-2 border-[#C8EA3B] shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(200,234,59,0.15)] scale-100 opacity-100 z-20"
                    : "bg-[#1A2614]/70 border-[#37502B] scale-[0.93] opacity-40 hover:opacity-75 cursor-pointer z-10 blur-[0.3px]"
                }`}
              >
                {/* Active countdown auto-play progress bar */}
                {isActive && isPlaying && !isHovered && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#37502B] overflow-hidden z-30">
                    <motion.div
                      key={activeStageIndex}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                      className="h-full bg-[#C8EA3B]"
                    />
                  </div>
                )}

                <div className="p-6 sm:p-10 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Stage Metadata (Span 7) */}
                    <div className="md:col-span-7 space-y-5">
                      <div className="flex items-center justify-between">
                        <div
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold"
                          style={{
                            backgroundColor: stage.pillBg,
                            color: stage.dotColor === "#C8EA3B" ? "#1A2614" : stage.dotColor,
                          }}
                        >
                          <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: stage.dotColor }} />
                          {stage.label}
                        </div>

                        <span className="text-xs font-mono font-bold text-[#7E9473] bg-white/5 px-2.5 py-1 rounded-md border border-[#37502B]">
                          SANKET RIG #{stage.id}
                        </span>
                      </div>

                      {/* Headline */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                        {stage.headline}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#C5D7BD] leading-relaxed">
                        {stage.description}
                      </p>

                      {/* Telemetry Chips */}
                      <div className="pt-4 border-t border-[#37502B] space-y-2">
                        <span className="text-[11px] font-mono font-bold text-[#7E9473] uppercase tracking-wider block">
                          SLOPE TELEMETRY METRICS:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                          {stage.telemetry.map((t) => (
                            <div key={t.label} className="p-2.5 rounded-xl bg-[#1A2614] border border-[#37502B]">
                              <span className="text-[10px] text-[#7E9473] block">{t.label}</span>
                              <span className="font-bold text-white mt-0.5 block">{t.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Visual Telemetry Rig (Span 5) */}
                    <div className="md:col-span-5 flex flex-col items-center justify-center">
                      <div className="w-full aspect-square rounded-2xl bg-[#1A2614] border border-[#37502B] p-6 flex flex-col items-center justify-between text-center relative overflow-hidden shadow-inner">
                        {/* Concentric radar rings */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
                          <div className="w-48 h-48 rounded-full border border-[#C8EA3B]" />
                          <div className="w-32 h-32 rounded-full border border-[#C8EA3B]" />
                          <div className="w-16 h-16 rounded-full border border-[#C8EA3B]" />
                        </div>

                        <div className="relative z-10 w-full flex justify-between items-center text-[10px] font-mono text-[#7E9473]">
                          <span>SENSOR NODE #{stage.id}</span>
                          <span className="flex items-center gap-1 font-bold" style={{ color: stage.dotColor }}>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: stage.dotColor }} />
                            LIVE
                          </span>
                        </div>

                        {/* Central Animated Icon */}
                        <div className="relative z-10 my-auto">
                          <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-110"
                            style={{
                              backgroundColor: `${stage.dotColor}20`,
                              border: `1.5px solid ${stage.dotColor}`,
                              boxShadow: `0 0 30px ${stage.dotColor}35`,
                            }}
                          >
                            <StageIcon className="w-10 h-10" style={{ color: stage.dotColor }} />
                          </div>
                        </div>

                        <div className="relative z-10 w-full text-center">
                          <span className="text-xs font-mono font-bold text-white uppercase block">
                            {stage.riskName}
                          </span>
                          <span className="text-[11px] text-[#C5D7BD]">
                            SANKET Threshold Level {stage.id}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* AWS-Style Centered Floating Bottom Navigation Pill */}
      <div className="flex justify-center mt-6">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#1A2614]/90 backdrop-blur-md border border-[#37502B] text-white shadow-2xl">
          <button
            onClick={handlePrev}
            className="p-1.5 rounded-full text-[#C5D7BD] hover:text-[#C8EA3B] hover:bg-[#213318] transition-colors cursor-pointer"
            aria-label="Previous Stage"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-full text-[#C5D7BD] hover:text-[#C8EA3B] hover:bg-[#213318] transition-colors cursor-pointer"
            aria-label={isPlaying ? "Pause auto loop" : "Play auto loop"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <span className="text-xs font-mono font-bold text-[#C8EA3B] tracking-wider px-2">
            {activeStageIndex + 1} / {STAGES.length}
          </span>

          <button
            onClick={handleNext}
            className="p-1.5 rounded-full text-[#C5D7BD] hover:text-[#C8EA3B] hover:bg-[#213318] transition-colors cursor-pointer"
            aria-label="Next Stage"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
