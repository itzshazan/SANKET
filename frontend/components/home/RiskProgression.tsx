"use client";

import React, { useState, useEffect } from "react";
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
  Activity
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StageData {
  id: number;
  label: string;
  dotColor: string;
  riskName: string;
  headline: string;
  description: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  telemetry: { label: string; value: string }[];
}

const STAGES: StageData[] = [
  {
    id: 1,
    label: "Stage 1 · Precipitation",
    dotColor: "#38B2AC",
    riskName: "Normal Baseline",
    headline: "Intense rainfall saturates slope topsoil",
    description: "Prolonged rainfall begins pushing soil moisture beyond standard infiltration capacity in high-angle mountain terrain.",
    icon: CloudRain,
    telemetry: [
      { label: "Precipitation Rate", value: "45 mm/hr" },
      { label: "Pore Water Pressure", value: "12 kPa (Stable)" },
      { label: "Factor of Safety (FoS)", value: "1.48" },
    ],
  },
  {
    id: 2,
    label: "Stage 2 · Subsurface Moisture",
    dotColor: "#D69E2E",
    riskName: "Watch Tier",
    headline: "Water accumulation weakens internal soil cohesion",
    description: "Saturated soil loses internal shear strength, increasing pore water pressure along the interface between soil overburden and bedrock.",
    icon: Droplets,
    telemetry: [
      { label: "Volumetric Moisture", value: "82% Saturation" },
      { label: "Pore Water Pressure", value: "38 kPa (Elevated)" },
      { label: "Factor of Safety (FoS)", value: "1.18" },
    ],
  },
  {
    id: 3,
    label: "Stage 3 · Micro-Displacement",
    dotColor: "#DD6B20",
    riskName: "Warning Tier",
    headline: "InSAR radar and computer vision detect tension cracks",
    description: "Early physical surface deformation appears: scarp fissures, toe bulge displacement, and subtle lateral creep visible in Sentinel-2 feeds.",
    icon: Mountain,
    telemetry: [
      { label: "Surface Creep Rate", value: "+14 mm/week" },
      { label: "Pore Water Pressure", value: "65 kPa (Critical)" },
      { label: "Factor of Safety (FoS)", value: "1.04" },
    ],
  },
  {
    id: 4,
    label: "Stage 4 · Imminent Failure",
    dotColor: "#E53E3E",
    riskName: "Danger / Alert",
    headline: "Shear strength drops below gravitational driving force",
    description: "Gravitational forces overcome slope friction. Rapid acceleration begins, triggering automated CAP emergency warning dispatches.",
    icon: AlertOctagon,
    telemetry: [
      { label: "Displacement Rate", value: "&gt;4.2 cm/hr" },
      { label: "Pore Water Pressure", value: "92 kPa (Extreme)" },
      { label: "Factor of Safety (FoS)", value: "0.86" },
    ],
  },
  {
    id: 5,
    label: "Stage 5 · Mass Movement",
    dotColor: "#E53E3E",
    riskName: "Mass Failure",
    headline: "Full debris flow and slope detachment occurs",
    description: "Unstable mass collapses down-slope across road infrastructure and drainage valleys, requiring rapid evacuation and clearing.",
    icon: Flame,
    telemetry: [
      { label: "Mass Volume", value: "~18,000 m³" },
      { label: "Velocity", value: "18 m/sec" },
      { label: "Impact Corridor", value: "NH-58 Km 142" },
    ],
  },
];

export function RiskProgression() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const current = STAGES[activeStage];
  const Icon = current.icon;

  return (
    <section id="section-05" className="w-full bg-[#E0E5EC] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF] mb-4">
            Subsurface Physics Modeling
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#3D4852] tracking-tight">
            How Slopes Fail: From Saturation to Collapse
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280]">
            SANKET captures the critical window between Stage 1 rainfall and Stage 4 detachment—where standard warning systems react too late.
          </p>
        </div>

        {/* Molded Stage Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {STAGES.map((stage, idx) => {
            const isActive = idx === activeStage;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStage(idx);
                  setIsPlaying(false);
                }}
                className={`p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] border-l-4"
                    : "bg-[#E0E5EC] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.6)] hover:shadow-[8px_8px_16px_rgba(163,177,198,0.7)]"
                }`}
                style={{ borderLeftColor: isActive ? stage.dotColor : "transparent" }}
              >
                <span className="text-[11px] font-mono font-bold block" style={{ color: stage.dotColor }}>
                  {stage.label}
                </span>
                <span className="text-xs font-bold text-[#3D4852] mt-1 block truncate">
                  {stage.riskName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Stage Display Card */}
        <div className="rounded-[32px] bg-[#E0E5EC] shadow-[12px_12px_24px_rgba(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.8)] p-6 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Stage Details (Span 7) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] flex items-center justify-center" style={{ color: current.dotColor }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: current.dotColor }}>
                      {current.riskName}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#3D4852]">
                      {current.headline}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                  {current.description}
                </p>

                {/* Play / Next Controls */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E0E5EC] shadow-[4px_4px_8px_rgba(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.6)] active:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6)] text-xs font-mono font-bold text-[#3D4852] hover:text-[#6C63FF] transition-all"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? "Pause Auto-Run" : "Auto-Run Physics"}</span>
                  </button>

                  <button
                    onClick={() => setActiveStage((prev) => (prev + 1) % STAGES.length)}
                    className="p-2 rounded-xl bg-[#E0E5EC] shadow-[4px_4px_8px_rgba(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.6)] active:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6)] text-[#3D4852] hover:text-[#6C63FF] transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Inset Telemetry Gauges (Span 5) */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-[24px] bg-[#E0E5EC] shadow-[inset_6px_6px_12px_rgba(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.5)] space-y-4">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#6C63FF] flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5" /> Simulated Field Telemetry
                  </div>

                  <div className="space-y-3">
                    {current.telemetry.map((item) => (
                      <div
                        key={item.label}
                        className="p-3 rounded-xl bg-[#E0E5EC] shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.6)] flex items-center justify-between"
                      >
                        <span className="text-xs text-[#6B7280]">{item.label}</span>
                        <span className="text-xs font-mono font-bold text-[#3D4852]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
