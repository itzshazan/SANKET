"use client";

import React, { useState, useEffect } from "react";
import {
  Camera,
  MapPin,
  Send,
  Brain,
  CheckCircle2,
  Smartphone,
  ShieldCheck,
  UploadCloud,
  Crosshair,
  Wifi
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../ui/Section";
import { ScrollReveal, StaggerContainer, StaggerItem, ScaleReveal } from "../shared/ScrollReveal";

const STEPS = [
  {
    step: 1,
    badge: "CAPTURE · Step 1 of 4",
    title: "Photograph the Evidence",
    desc: "Field personnel capture tension cracks, debris accumulation, road subsidence or any visible surface anomaly with high-resolution imagery.",
    icon: Camera,
    mockupDetail: "Image Capture: 4032 x 3024 HDR",
    mockupStatus: "Crack Geometry Detected (Width: 22cm)",
  },
  {
    step: 2,
    badge: "GEO-TAG · Step 2 of 4",
    title: "Attach Precise Location",
    desc: "Sub-meter GNSS coordinates and orientation azimuth are automatically embedded in the report metadata — zero manual coordinates entry.",
    icon: MapPin,
    mockupDetail: "GNSS Fix: 30.4124° N, 79.3248° E (±0.8m)",
    mockupStatus: "Elevation: 2,140m ASL · Slope Azimuth: 145° SE",
  },
  {
    step: 3,
    badge: "SUBMIT · Step 3 of 4",
    title: "Send to the Platform",
    desc: "The report is compressed, cryptographically signed, and transmitted directly to SANKET cloud clusters with offline fallback caching.",
    icon: Send,
    mockupDetail: "Encrypted WebSocket Payload: 480 KB",
    mockupStatus: "Sync Status: Verified at Edge Relay Node",
  },
  {
    step: 4,
    badge: "ANALYZE · Step 4 of 4",
    title: "Update the Risk Picture",
    desc: "Visual evidence is processed alongside existing satellite and rainfall feeds, immediately recalculating the susceptibility score for that zone.",
    icon: Brain,
    mockupDetail: "Model Fusion: InSAR + Ground Report",
    mockupStatus: "Zone Risk Updated: Elevated to WARNING",
  },
];

const AUTO_CYCLE_DURATION = 4500; // 4.5 seconds per step

export function FieldReporting() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const currentStep = STEPS[activeStepIndex];

  // Auto-cycle one by one in loop
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % STEPS.length);
    }, AUTO_CYCLE_DURATION);

    return () => clearInterval(timer);
  }, [isHovered, activeStepIndex]);

  return (
    <section id="section-11" className="w-full bg-[#FFFFFF] border-b border-[#E3E8DF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            pill="Ground-Truth Verification"
            title="Ground Reality Meets AI Intelligence."
            subtitle="Remote sensing gives the broad view. Field reports add what satellites miss."
            statusText="AUTO-CYCLING FIELD SYNC"
            className="text-center mx-auto"
          />
        </ScrollReveal>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 4-Step Interactive Stepper Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-12">
            {STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const IconComponent = step.icon;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                    isActive
                      ? "bg-[#213318] text-white border-[#37502B] shadow-lg scale-[1.02]"
                      : "bg-[#F8F9F6] text-[#586650] border-[#E3E8DF] hover:bg-[#E3E8DF]/60"
                  }`}
                >
                  {/* Active countdown auto-advance indicator bar */}
                  {isActive && !isHovered && (
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#37502B] overflow-hidden">
                      <motion.div
                        key={activeStepIndex}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: AUTO_CYCLE_DURATION / 1000, ease: "linear" }}
                        className="h-full bg-[#C8EA3B]"
                      />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-[#C8EA3B] text-[#1A2614] shadow-[0_0_15px_rgba(200,234,59,0.4)]"
                            : "bg-white text-[#213318] border border-[#E3E8DF]"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold" style={{ color: isActive ? "#C8EA3B" : "#7E9473" }}>
                        0{step.step}
                      </span>
                    </div>

                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-wider block mb-1"
                      style={{ color: isActive ? "#C8EA3B" : "#586650" }}
                    >
                      {step.badge}
                    </span>

                    <h4 className="text-sm sm:text-base font-display font-bold leading-tight">
                      {step.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Container */}
          <ScaleReveal duration={0.6} className="rounded-3xl bg-[#F8F9F6] border border-[#E3E8DF] p-6 sm:p-10 md:p-12 shadow-sm hover-card-light">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Detailed Step Text (Span 7) */}
              <div className="lg:col-span-7 space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep.step}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 14 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8EA3B] text-[#1A2614] text-xs font-mono font-bold">
                      <currentStep.icon className="w-3.5 h-3.5" />
                      {currentStep.badge}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#1A2614] leading-tight min-h-[64px] flex items-center">
                      {currentStep.title}
                    </h3>

                    <p className="text-base sm:text-lg text-[#586650] leading-relaxed min-h-[56px]">
                      {currentStep.desc}
                    </p>

                    <div className="pt-4 border-t border-[#E3E8DF] space-y-2 text-xs font-mono">
                      <div className="flex items-center gap-2 text-[#1A2614]">
                        <CheckCircle2 className="w-4 h-4 text-[#213318]" />
                        <span>Sub-second automated cryptographic proof and geotag validation</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#1A2614]">
                        <CheckCircle2 className="w-4 h-4 text-[#213318]" />
                        <span>Direct calibration loop for satellite radar interferometry datasets</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: Mobile / App Simulation Shell (Span 5) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm rounded-3xl bg-[#1A2614] border border-[#37502B] p-5 text-white shadow-2xl space-y-4 hover-card-rise">
                  {/* Mobile Header Bar with Live Signal Pulse */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#37502B] text-xs font-mono">
                    <span className="text-[#C8EA3B] flex items-center gap-1.5 font-bold">
                      <Smartphone className="w-3.5 h-3.5" /> SANKET Field App
                    </span>
                    <span className="text-[10px] text-[#C8EA3B] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8EA3B] animate-pulse" />
                      GPS LOCK: 3D FIX
                    </span>
                  </div>

                  {/* Simulated Field Visual Canvas */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep.step}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full aspect-[4/3] rounded-xl bg-[#213318] border border-[#37502B] relative overflow-hidden flex flex-col justify-between p-3.5"
                    >
                      {/* Active Ingestion Loading Line */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#37502B] overflow-hidden">
                        <div className="h-full bg-[#C8EA3B] animate-loading-bar w-1/3" />
                      </div>

                      <div className="flex justify-between items-center text-[10px] font-mono text-[#C5D7BD]">
                        <span className="bg-[#1A2614]/80 px-2 py-0.5 rounded">ISO 100 · f/1.8</span>
                        <span className="text-[#C8EA3B] bg-[#1A2614]/80 px-2 py-0.5 rounded">REC ●</span>
                      </div>

                      {/* Reticle / Crosshair */}
                      <div className="flex flex-col items-center justify-center text-[#C8EA3B]">
                        <Crosshair className="w-8 h-8 opacity-80 animate-pulse" />
                        <span className="text-[9px] font-mono bg-[#1A2614]/90 px-2 py-0.5 rounded mt-1">
                          CRACK ANOMALY: CONF 94%
                        </span>
                      </div>

                      <div className="text-[10px] font-mono text-white bg-[#1A2614]/90 p-1.5 rounded">
                        {currentStep.mockupDetail}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Status Bar */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep.step}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="p-2.5 rounded-xl bg-[#213318] border border-[#37502B] text-[11px] font-mono text-[#C8EA3B] flex items-center justify-between"
                    >
                      <span>{currentStep.mockupStatus}</span>
                      <span className="text-[10px] text-[#7E9473]">● SYNCED</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </ScaleReveal>
        </div>

        {/* Supporting Quote Below */}
        <div className="max-w-3xl mx-auto mt-12 p-6 rounded-2xl bg-[#F8F9F6] border-l-[3px] border-l-[#C8EA3B] border-y border-r border-[#E3E8DF] text-center sm:text-left">
          <p className="text-base sm:text-lg font-display italic text-[#586650]">
            &ldquo;Field reports can confirm what satellite data suggests — or catch what satellite data misses.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
