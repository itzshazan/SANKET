"use client";

import React, { useState } from "react";
import {
  Satellite,
  Layers,
  Brain,
  Bell,
  CheckCircle,
  Activity,
  ArrowRight,
  Radio
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
  const Icon = current.icon;

  return (
    <section id="section-07" className="w-full bg-[#E0E5EC] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF] mb-4">
            End-to-End Pipeline
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#3D4852] tracking-tight">
            How SANKET Predicts Slope Failure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280]">
            From raw satellite radar feeds to instant emergency response alerts in 4 continuous stages.
          </p>
        </div>

        {/* Tactile Tab Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 max-w-4xl mx-auto">
          {PHASES.map((phase, idx) => {
            const isActive = idx === activeTab;
            const PhaseIcon = phase.icon;
            return (
              <button
                key={phase.name}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl flex items-center justify-center gap-2.5 font-display font-bold text-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#E0E5EC] text-[#6C63FF] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)]"
                    : "bg-[#E0E5EC] text-[#3D4852] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.6)] hover:text-[#6C63FF] hover:shadow-[8px_8px_16px_rgba(163,177,198,0.7)]"
                }`}
              >
                <PhaseIcon className="w-4 h-4" />
                <span>{phase.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Display Card */}
        <div className="rounded-[32px] bg-[#E0E5EC] shadow-[12px_12px_24px_rgba(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.8)] p-6 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Details (Span 7) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF]">
                  {current.badge}
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#3D4852] leading-tight">
                  {current.headline}
                </h3>

                <ul className="space-y-3 pt-2">
                  {current.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#6B7280]">
                      <div className="w-5 h-5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#38B2AC] shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Inset Telemetry Screen (Span 5) */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-[28px] bg-[#E0E5EC] shadow-[inset_8px_8px_16px_rgba(163,177,198,0.7),inset_-8px_-8px_16px_rgba(255,255,255,0.6)] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#6C63FF] uppercase tracking-wider">
                      {current.visualTitle}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#38B2AC] animate-pulse" />
                  </div>

                  <p className="text-xs text-[#6B7280]">
                    {current.visualSummary}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {current.visualData.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-[#E0E5EC] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.6)] flex items-center justify-between text-xs"
                      >
                        <span className="text-[#3D4852] font-medium">{item.label}</span>
                        <div className="flex items-center gap-2 font-mono">
                          <span className="font-bold text-[#3D4852]">{item.value}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#6C63FF]/15 text-[#6C63FF] font-bold">
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
