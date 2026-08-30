"use client";

import React, { useState } from "react";
import {
  Satellite,
  Layers,
  Brain,
  Bell,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PhaseItem {
  id: number;
  name: string;
  badge: string;
  headline: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string }>;
  visualTitle: string;
  visualSummary: string;
  visualData: { label: string; value: string; status: string }[];
}

const PHASES: PhaseItem[] = [
  {
    id: 1,
    name: "OBSERVE",
    badge: "Stage 01 · Ingestion",
    headline: "Continuously monitors multi-source environmental feeds across vulnerable corridors.",
    bullets: [
      "Satellite radar ingestion via ESA Sentinel-2 InSAR displacement pipelines",
      "Real-time IMD precipitation telemetry and district sensor feeds",
      "Cryptographically verified geological photo reports from field responders",
    ],
    icon: Satellite,
    visualTitle: "Multi-Source Ingestion Stream",
    visualSummary: "Raw environmental, satellite and ground observations ingested every 15 minutes.",
    visualData: [
      { label: "Sentinel-2 InSAR", value: "Level-2A BOA", status: "Synced" },
      { label: "IMD Precipitation Stream", value: "3km Grid Mesh", status: "Synced" },
      { label: "IoT Piezometer Mesh", value: "24 Probe Nodes", status: "Active" },
    ],
  },
  {
    id: 2,
    name: "ANALYZE",
    badge: "Stage 02 · Physics",
    headline: "Computes hydrostatic pore water pressure against slope shear friction.",
    bullets: [
      "Calculates volumetric soil saturation against high-resolution DEM slopes",
      "Integrates Mohr-Coulomb failure criteria for dynamic Factor of Safety",
      "Cross-references historical monsoon trigger thresholds in real-time",
    ],
    icon: Layers,
    visualTitle: "Subsurface Shear Analysis",
    visualSummary: "Dynamic pore pressure equilibrium calculated at 10m micro-zone scale.",
    visualData: [
      { label: "Pore Water Pressure", value: "68.4 kPa", status: "Elevated" },
      { label: "Factor of Safety (FoS)", value: "1.08", status: "Watch" },
      { label: "Slope Angle Gradient", value: "41.2°", status: "High Risk" },
    ],
  },
  {
    id: 3,
    name: "PREDICT",
    badge: "Stage 03 · AI Engine",
    headline: "Identifies early physical deformation before sudden catastrophic slope collapse.",
    bullets: [
      "Computer vision detects tension cracks, road subsidence, and toe bulging",
      "AI models forecast failure probability 6 to 24 hours in advance",
      "Assigns standardized 4-tier risk levels to specific highway corridors",
    ],
    icon: Brain,
    visualTitle: "Predictive Hazard Classifier",
    visualSummary: "Computer vision segmentation verified against InSAR deformation vectors.",
    visualData: [
      { label: "Crack Growth Velocity", value: "+2.4 cm/d", status: "Critical" },
      { label: "Collapse Likelihood", value: "89%", status: "Danger" },
      { label: "Lead Time Window", value: "14 Hours", status: "Actionable" },
    ],
  },
  {
    id: 4,
    name: "WARN",
    badge: "Stage 04 · Alerting",
    headline: "Dispatches multi-channel Common Alerting Protocol warnings to agencies and travelers.",
    bullets: [
      "Priority SMS broadcasts with localized evacuation and avoidance maps",
      "Direct API integration with NDMA, BRO, and District Disaster Management units",
      "Automated road closure advisories sent to highway control rooms",
    ],
    icon: Bell,
    visualTitle: "CAP Alert Dissemination",
    visualSummary: "Automated high-priority emergency notifications routed to responders.",
    visualData: [
      { label: "Disaster Alert Format", value: "OASIS CAP v1.2", status: "Active" },
      { label: "SMS Broadcast Hub", value: "12,400 Users", status: "Dispatched" },
      { label: "Agency Feed Sync", value: "BRO Command", status: "Connected" },
    ],
  },
];

export function SolutionOverview() {
  const [activeTab, setActiveTab] = useState(0);
  const current = PHASES[activeTab];

  return (
    <section id="section-07" className="w-full bg-black py-20 md:py-28 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
            <span>End-to-End Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
            How SANKET Predicts Slope Failure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#bbbbbb] font-light leading-relaxed">
            From raw satellite radar feeds to instant emergency response alerts in 4 continuous stages.
          </p>
        </div>

        {/* Tab Selector Buttons (BMW M Sharp Uppercase Tabs) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
          {PHASES.map((phase, idx) => {
            const isActive = idx === activeTab;
            const PhaseIcon = phase.icon;
            return (
              <button
                key={phase.name}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 flex items-center justify-center gap-2 text-xs font-bold font-sans uppercase tracking-[1.5px] transition-all duration-150 cursor-pointer border ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "bg-[#1a1a1a] text-[#bbbbbb] border-[#3c3c3c] hover:bg-[#262626] hover:text-white"
                }`}
              >
                <PhaseIcon className="w-3.5 h-3.5" />
                <span>{phase.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Display Card */}
        <div className="bg-[#1a1a1a] border border-[#3c3c3c] p-8 sm:p-12">
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
                <span className="inline-block px-3 py-1 bg-[#0d0d0d] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white">
                  {current.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-sans uppercase">
                  {current.headline}
                </h3>

                <ul className="space-y-3 pt-2">
                  {current.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#bbbbbb] font-light">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Technical Spec Box (Span 5) */}
              <div className="lg:col-span-5">
                <div className="p-6 bg-[#0d0d0d] border border-[#262626] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-[1.5px]">
                      {current.visualTitle}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#1c69d4] animate-pulse" />
                  </div>

                  <p className="text-xs text-[#7e7e7e] font-light">
                    {current.visualSummary}
                  </p>

                  <div className="space-y-2 pt-2">
                    {current.visualData.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#1a1a1a] border border-[#262626] flex items-center justify-between text-xs"
                      >
                        <span className="text-[#bbbbbb] uppercase tracking-wider">{item.label}</span>
                        <div className="flex items-center gap-2 font-mono">
                          <span className="font-bold text-white">{item.value}</span>
                          <span className="text-[10px] px-2 py-0.5 bg-white text-black font-bold uppercase">
                            {item.status}
                          </span>
                        </div>
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
