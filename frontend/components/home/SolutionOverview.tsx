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
    name: "Observe",
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
    name: "Analyze",
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
    name: "Predict",
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
    name: "Warn",
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
    <section id="section-07" className="w-full bg-[#FDFCF8] py-20 md:py-28 border-t border-[#DED8CF]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#5D7052] mb-4">
            <span>End-to-End Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#2C2C24]">
            How SANKET Predicts Slope Failure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#78786C] font-normal leading-relaxed">
            From raw satellite radar feeds to instant emergency response alerts in 4 continuous stages.
          </p>
        </div>

        {/* Tab Selector Buttons (Organic Pill Tabs) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-2xl mx-auto">
          {PHASES.map((phase, idx) => {
            const isActive = idx === activeTab;
            const PhaseIcon = phase.icon;
            return (
              <button
                key={phase.name}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 flex items-center justify-center gap-2 text-sm font-bold rounded-full transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-[#5D7052] text-[#F3F4F1] border-[#5D7052] shadow-soft scale-105"
                    : "bg-[#FEFEFA] text-[#4A4A40] border-[#DED8CF] hover:bg-[#F0EBE5]"
                }`}
              >
                <PhaseIcon className="w-4 h-4" />
                <span>{phase.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Display Card */}
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
                <span className="inline-block px-3.5 py-1.5 bg-[#EBF0E8] text-[#5D7052] rounded-full text-xs font-bold">
                  {current.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C24] leading-snug">
                  {current.headline}
                </h3>

                <ul className="space-y-3 pt-2">
                  {current.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-[#78786C]">
                      <CheckCircle2 className="w-5 h-5 text-[#5D7052] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Spec Pod (Span 5) */}
              <div className="lg:col-span-5">
                <div className="p-6 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF] space-y-4 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#5D7052]">
                      {current.visualTitle}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5D7052] animate-pulse" />
                  </div>

                  <p className="text-xs text-[#78786C]">
                    {current.visualSummary}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    {current.visualData.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 bg-[#FEFEFA] rounded-xl border border-[#DED8CF] flex items-center justify-between text-xs"
                      >
                        <span className="text-[#78786C]">{item.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#2C2C24] font-serif">{item.value}</span>
                          <span className="text-[10px] px-2.5 py-0.5 bg-[#EBF0E8] text-[#5D7052] rounded-full font-bold">
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
