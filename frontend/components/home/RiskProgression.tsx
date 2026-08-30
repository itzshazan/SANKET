"use client";

import React, { useState, useEffect } from "react";
import {
  CloudRain,
  Droplets,
  Mountain,
  AlertOctagon,
  Flame,
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
    label: "Stage 1 · Rain",
    dotColor: "#5D7052",
    riskName: "Normal Baseline",
    headline: "Intense rainfall saturates slope topsoil",
    description: "Prolonged precipitation pushes soil moisture beyond standard infiltration capacity in high-angle mountain terrain.",
    icon: CloudRain,
    telemetry: [
      { label: "Precipitation Rate", value: "45 mm/hr" },
      { label: "Pore Water Pressure", value: "12 kPa (Stable)" },
      { label: "Factor of Safety (FoS)", value: "1.48" },
    ],
  },
  {
    id: 2,
    label: "Stage 2 · Moisture",
    dotColor: "#C18C5D",
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
    label: "Stage 3 · Displacement",
    dotColor: "#AB774B",
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
    label: "Stage 4 · Failure",
    dotColor: "#A85448",
    riskName: "Danger / Alert",
    headline: "Shear strength drops below gravitational driving force",
    description: "Gravitational forces overcome slope friction. Rapid acceleration begins, triggering automated CAP emergency warning dispatches.",
    icon: AlertOctagon,
    telemetry: [
      { label: "Displacement Rate", value: ">4.2 cm/hr" },
      { label: "Pore Water Pressure", value: "92 kPa (Extreme)" },
      { label: "Factor of Safety (FoS)", value: "0.86" },
    ],
  },
  {
    id: 5,
    label: "Stage 5 · Movement",
    dotColor: "#A85448",
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
    <section id="section-05" className="w-full bg-[#FDFCF8] py-20 md:py-28 border-t border-[#DED8CF]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#5D7052] mb-4">
            <span>Subsurface Physics Modeling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#2C2C24]">
            How Slopes Fail: Saturation To Collapse
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#78786C] font-normal leading-relaxed">
            SANKET captures the critical window between Stage 1 rainfall and Stage 4 detachment—where standard warning systems react too late.
          </p>
        </div>

        {/* Stage Selector Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {STAGES.map((stage, idx) => {
            const isActive = idx === activeStage;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStage(idx);
                  setIsPlaying(false);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-[#5D7052] border-[#5D7052] text-[#F3F4F1] shadow-soft scale-105"
                    : "bg-[#FEFEFA] border-[#DED8CF] text-[#4A4A40] hover:bg-[#F0EBE5]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: isActive ? "#F3F4F1" : stage.dotColor }} />
                  <span>{stage.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Stage Display Card */}
        <div className="bg-[#FEFEFA] border border-[#DED8CF] rounded-[2.5rem] p-8 sm:p-12 shadow-soft">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column (Span 7) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#5D7052]/10 flex items-center justify-center" style={{ color: current.dotColor }}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider block" style={{ color: current.dotColor }}>
                      {current.riskName}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C24]">
                      {current.headline}
                    </h3>
                  </div>
                </div>

                <p className="text-base text-[#78786C] font-normal leading-relaxed">
                  {current.description}
                </p>

                {/* Controls */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-2 px-6 py-2.5 bg-[#5D7052] text-[#F3F4F1] hover:bg-[#4C5D42] rounded-full transition-all text-sm font-bold shadow-xs hover:scale-105 active:scale-95"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isPlaying ? "Pause" : "Auto-Run"}</span>
                  </button>

                  <button
                    onClick={() => setActiveStage((prev) => (prev + 1) % STAGES.length)}
                    className="w-10 h-10 rounded-full bg-[#F0EBE5] text-[#2C2C24] border border-[#DED8CF] hover:bg-[#E6DCCD] transition-all flex items-center justify-center"
                    aria-label="Next stage"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Spec Cells (Span 5) */}
              <div className="lg:col-span-5">
                <div className="p-6 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF] space-y-4 shadow-2xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5D7052] flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#5D7052]" /> Field Physics Telemetry
                  </div>

                  <div className="space-y-2.5">
                    {current.telemetry.map((item) => (
                      <div
                        key={item.label}
                        className="p-3.5 bg-[#FEFEFA] rounded-xl border border-[#DED8CF] flex items-center justify-between text-xs"
                      >
                        <span className="text-[#78786C]">{item.label}</span>
                        <span className="font-bold text-[#2C2C24] font-serif">{item.value}</span>
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
