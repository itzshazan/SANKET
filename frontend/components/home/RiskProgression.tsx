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
    dotColor: "#0066B1",
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
    dotColor: "#EAB308",
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
    dotColor: "#1C69D4",
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
    dotColor: "#E22718",
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
    dotColor: "#E22718",
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
    <section id="section-05" className="w-full bg-black py-20 md:py-28 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
            <span>Subsurface Physics Modeling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
            How Slopes Fail: Saturation To Collapse
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#bbbbbb] font-light leading-relaxed">
            SANKET captures the critical window between Stage 1 rainfall and Stage 4 detachment—where standard warning systems react too late.
          </p>
        </div>

        {/* Stage Selector Cells */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
          {STAGES.map((stage, idx) => {
            const isActive = idx === activeStage;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStage(idx);
                  setIsPlaying(false);
                }}
                className={`p-4 text-left transition-all duration-150 cursor-pointer border ${
                  isActive
                    ? "bg-[#262626] border-white text-white"
                    : "bg-[#0d0d0d] border-[#262626] text-[#bbbbbb] hover:bg-[#1a1a1a]"
                }`}
              >
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider block" style={{ color: isActive ? "#ffffff" : stage.dotColor }}>
                  {stage.label}
                </span>
                <span className="text-xs font-bold uppercase mt-1 block truncate">
                  {stage.riskName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Stage Display Card */}
        <div className="bg-[#1a1a1a] border border-[#3c3c3c] p-6 sm:p-10">
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
                  <div className="w-12 h-12 bg-[#0d0d0d] border border-[#3c3c3c] flex items-center justify-center" style={{ color: current.dotColor }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider block" style={{ color: current.dotColor }}>
                      {current.riskName}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-sans">
                      {current.headline}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#bbbbbb] font-light leading-relaxed">
                  {current.description}
                </p>

                {/* Controls */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-[#e6e6e6] transition-all text-xs font-bold uppercase tracking-[1.5px]"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? "Pause" : "Auto-Run"}</span>
                  </button>

                  <button
                    onClick={() => setActiveStage((prev) => (prev + 1) % STAGES.length)}
                    className="p-2.5 bg-[#0d0d0d] text-white border border-[#3c3c3c] hover:bg-[#262626] transition-all"
                    aria-label="Next stage"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Spec Cells (Span 5) */}
              <div className="lg:col-span-5">
                <div className="p-6 bg-[#0d0d0d] border border-[#262626] space-y-4">
                  <div className="text-xs font-mono font-bold uppercase tracking-[1.5px] text-white flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-[#1c69d4]" /> Field Physics Telemetry
                  </div>

                  <div className="space-y-2">
                    {current.telemetry.map((item) => (
                      <div
                        key={item.label}
                        className="p-3 bg-[#1a1a1a] border border-[#262626] flex items-center justify-between text-xs"
                      >
                        <span className="text-[#7e7e7e] uppercase tracking-wider">{item.label}</span>
                        <span className="font-mono font-bold text-white">{item.value}</span>
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
