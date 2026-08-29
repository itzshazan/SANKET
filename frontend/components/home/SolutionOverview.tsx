"use client";

import React, { useState, useEffect } from "react";
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
import { SectionHeader } from "../ui/Section";
import { ScrollReveal, SlideReveal } from "../shared/ScrollReveal";

interface PhaseItem {
  id: number;
  name: string;
  badge: string;
  headline: string;
  bullets: string[];
  primaryCta: string;
  secondaryCta: string;
  icon: React.ComponentType<{ className?: string }>;
  visualTitle: string;
  visualSummary: string;
  visualData: { label: string; value: string; status: string }[];
}

const PHASES: PhaseItem[] = [
  {
    id: 1,
    name: "OBSERVE",
    badge: "Phase 1 of 5",
    headline: "Continuously monitors multi-source environmental feeds across vulnerable slope corridors.",
    bullets: [
      "Satellite imagery ingestion via automated Sentinel-2 & Landsat pipelines",
      "Real-time precipitation forecasts and IoT soil moisture telemetry feeds",
      "Visual ground photo and geological report collection from field officers",
    ],
    primaryCta: "Explore Data Sources",
    secondaryCta: "See Capabilities →",
    icon: Satellite,
    visualTitle: "Multi-Source Sensor Ingestion Stream",
    visualSummary: "Raw environmental, satellite and ground observations ingested every 15 minutes.",
    visualData: [
      { label: "Sentinel-2 Multispectral", value: "Level-2A BOA", status: "Active (Synced)" },
      { label: "IMD Precipitation Stream", value: "3km Grid Mesh", status: "Active (Synced)" },
      { label: "IoT Piezometer Mesh", value: "24 Node Points", status: "Live Feed" },
    ],
  },
  {
    id: 2,
    name: "ANALYZE",
    badge: "Phase 2 of 5",
    headline: "Processes raw multi-spectral data into calibrated soil moisture, vegetation & slope matrices.",
    bullets: [
      "Calculates volumetric water content and rainfall infiltration depth",
      "Detects NDVI vegetation stress and surface cover disturbance",
      "Generates digital elevation models (DEM) and critical slope angle maps",
    ],
    primaryCta: "View Deep Dive",
    secondaryCta: "Methodology Whitepaper →",
    icon: Layers,
    visualTitle: "Geophysical Feature Extraction",
    visualSummary: "Transforms raw optical, radar, and weather matrices into physical terrain susceptibility indicators.",
    visualData: [
      { label: "Volumetric Soil Saturation", value: "84.2%", status: "Elevated" },
      { label: "NDVI Vegetation Loss", value: "-14.8%", status: "Warning" },
      { label: "Slope Shear Potential", value: "1.08 FoS", status: "Critical" },
    ],
  },
  {
    id: 3,
    name: "PREDICT",
    badge: "Phase 3 of 5",
    headline: "Applies physics-informed ML algorithms to calculate site-specific landslide probability.",
    bullets: [
      "Custom XGBoost and neural net ensemble models trained on regional terrain",
      "Dynamic risk scores refreshed automatically with each new rainfall scan",
      "Probability curves with customizable threshold sensitivities",
    ],
    icon: Brain,
    visualTitle: "AI Susceptibility & Forecast Engine",
    visualSummary: "Probabilistic ensemble model combining physics slope stability equations with gradient-boosted trees.",
    visualData: [
      { label: "Landslide Risk Score", value: "88 / 100", status: "Danger" },
      { label: "Model Confidence Level", value: "94.6%", status: "High" },
      { label: "Failure Probability Window", value: "6–18 Hours", status: "Active Alert" },
    ],
    primaryCta: "See Risk Map",
    secondaryCta: "AI Architecture →",
  },
  {
    id: 4,
    name: "ALERT",
    badge: "Phase 4 of 5",
    headline: "Generates multi-tiered warnings before slope failure conditions become irreversible.",
    bullets: [
      "Four standardized severity levels: Normal, Watch, Warning, Danger",
      "Automated CAP-compliant broadcasts to emergency response networks",
      "Direct SMS, WhatsApp, and siren trigger integration for local communities",
    ],
    icon: Bell,
    visualTitle: "Early Warning & Dispatch Hub",
    visualSummary: "Automated alert orchestration system broadcasting targeted warnings to emergency response teams.",
    visualData: [
      { label: "Active Warning Level", value: "Level 3: WARNING", status: "Dispatched" },
      { label: "Evacuation Buffer Radius", value: "1.8 km", status: "Flagged" },
      { label: "SMS / WhatsApp Broadcast", value: "14,200 Recipients", status: "Delivered" },
    ],
    primaryCta: "Warning Protocols",
    secondaryCta: "Alert Channels →",
  },
  {
    id: 5,
    name: "RESPOND",
    badge: "Phase 5 of 5",
    headline: "Equips disaster response agencies with actionable intelligence to coordinate field response.",
    bullets: [
      "Interactive incident map with real-time road blockage alerts",
      "Priority evacuation zones and resource deployment recommendations",
      "Post-event damage assessment feeds and drone survey integration",
    ],
    icon: CheckCircle,
    visualTitle: "Incident Response Command View",
    visualSummary: "Real-time coordination dashboard for highway patrol, emergency services, and rescue operations.",
    visualData: [
      { label: "Traffic Diversion Plan", value: "Route 7 Activated", status: "Enforced" },
      { label: "Rescue Unit Standby", value: "Battalion 8 NDRF", status: "Positioned" },
      { label: "Post-Event Aerial Drone", value: "Survey Scheduled", status: "Standby" },
    ],
    primaryCta: "Institutional Demo",
    secondaryCta: "Who Benefits? →",
  },
];

const AUTO_CYCLE_DURATION = 4500; // 4.5 seconds per phase

export function SolutionOverview() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const activePhase = PHASES[activePhaseIndex];

  // Auto-cycle one by one in loop
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActivePhaseIndex((prev) => (prev + 1) % PHASES.length);
    }, AUTO_CYCLE_DURATION);

    return () => clearInterval(timer);
  }, [isHovered, activePhaseIndex]);

  return (
    <section id="section-07" className="w-full bg-[#FFFFFF] border-b border-[#E3E8DF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            pill="End-to-End Intelligence Pipeline"
            title="Meet SANKET."
            subtitle="From scattered environmental data to actionable risk intelligence."
            statusText="AUTO-CYCLING PIPELINE"
            className="text-center mx-auto"
          />
        </ScrollReveal>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-start"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Column: 5-Phase Vertical Stepper (Span 5) */}
          <SlideReveal direction="left" className="lg:col-span-5 space-y-3">
            {PHASES.map((phase, idx) => {
              const isActive = activePhaseIndex === idx;
              const IconComponent = phase.icon;

              return (
                <div
                  key={phase.id}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden border relative ${
                    isActive
                      ? "bg-[#213318] text-white border-[#37502B] shadow-lg scale-[1.01]"
                      : "bg-[#F8F9F6] text-[#586650] border-[#E3E8DF] hover:bg-[#E3E8DF]/60 hover:text-[#1A2614]"
                  }`}
                >
                  {/* Active countdown auto-advance indicator bar */}
                  {isActive && !isHovered && (
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#37502B] overflow-hidden">
                      <motion.div
                        key={activePhaseIndex}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: AUTO_CYCLE_DURATION / 1000, ease: "linear" }}
                        className="h-full bg-[#C8EA3B]"
                      />
                    </div>
                  )}

                  {/* Stepper Tab Header */}
                  <div className="p-4 sm:p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-[#C8EA3B] text-[#1A2614] font-bold shadow-[0_0_15px_rgba(200,234,59,0.4)]"
                            : "bg-[#FFFFFF] text-[#213318] border border-[#E3E8DF]"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-mono tracking-wider font-bold block" style={{ color: isActive ? "#C8EA3B" : "#7E9473" }}>
                          {phase.badge}
                        </span>
                        <h4 className="text-base sm:text-lg font-display font-bold">
                          {phase.name}
                        </h4>
                      </div>
                    </div>

                    <div className="text-xs font-mono font-bold" style={{ color: isActive ? "#C8EA3B" : "#586650" }}>
                      0{phase.id}
                    </div>
                  </div>

                  {/* Expanded Summary when active */}
                  {isActive && (
                    <div className="px-5 pb-5 pt-1 border-t border-[#37502B]/60 text-xs sm:text-sm space-y-3">
                      <p className="text-[#C5D7BD] font-medium leading-relaxed">
                        {phase.headline}
                      </p>
                      <ul className="space-y-2">
                        {phase.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-white/90">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C8EA3B] mt-1.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </SlideReveal>

          {/* Right Column: Dynamic Rich Visual Inspector for Selected Phase (Span 7) */}
          <SlideReveal direction="right" className="lg:col-span-7">
            <div className="rounded-3xl bg-[#1A2614] border border-[#37502B] p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden hover-card-rise">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8EA3B] opacity-[0.06] blur-[90px] pointer-events-none" />

              {/* Top Header of Visual Shell */}
              <div className="flex items-center justify-between pb-4 border-b border-[#37502B]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C8EA3B]">
                  <Activity className="w-4 h-4 text-[#C8EA3B] animate-pulse" />
                  <span className="font-bold uppercase tracking-wider">{activePhase.name} PIPELINE EXECUTION</span>
                </div>
                <span className="text-[11px] font-mono text-[#7E9473] bg-[#213318] px-2 py-0.5 rounded border border-[#37502B]">
                  NODE ID: SANKET-0{activePhase.id}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Main Visual Headline & Summary */}
                  <div className="my-6 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {activePhase.visualTitle}
                    </h3>
                    <p className="text-sm text-[#C5D7BD] leading-relaxed">
                      {activePhase.visualSummary}
                    </p>
                  </div>

                  {/* Real-time Data Table for Phase */}
                  <div className="space-y-3 font-mono text-xs mb-8">
                    {activePhase.visualData.map((row, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#213318] border border-[#37502B] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <span className="text-[#C5D7BD]">{row.label}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-white font-bold">{row.value}</span>
                          <span className="px-2 py-0.5 rounded bg-[#C8EA3B]/10 text-[#C8EA3B] border border-[#C8EA3B]/25 text-[10px]">
                            {row.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Phase Action CTAs */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#37502B]">
                    <a
                      href="#section-15"
                      className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg bg-[#C8EA3B] text-[#1A2614] hover:bg-[#E4F76E] btn-spring cursor-pointer"
                    >
                      {activePhase.primaryCta}
                    </a>

                    <a
                      href="#section-08"
                      className="text-xs font-display font-semibold text-[#C8EA3B] hover:text-white transition-colors"
                    >
                      {activePhase.secondaryCta}
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </SlideReveal>
        </div>
      </div>
    </section>
  );
}
