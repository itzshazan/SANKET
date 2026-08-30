"use client";

import React, { useState } from "react";
import {
  Camera,
  MapPin,
  Send,
  Brain,
  Smartphone,
  ShieldCheck,
  Wifi
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    step: 1,
    badge: "STAGE 01 · CAPTURE",
    title: "Photograph the Geohazard Evidence",
    desc: "Field responders capture tension cracks, toe bulging, or debris accumulation using the mobile app camera.",
    icon: Camera,
    mockupDetail: "Resolution: 4032 x 3024 HDR",
    mockupStatus: "Crack Geometry Detected (Width: 22cm)",
  },
  {
    step: 2,
    badge: "STAGE 02 · GEOTAG",
    title: "Attach Precise Spatial Coordinates",
    desc: "Sub-meter GNSS coordinates and slope azimuth are embedded directly into report metadata with zero manual entry.",
    icon: MapPin,
    mockupDetail: "GNSS: 30.4124° N, 79.3248° E (±0.8m)",
    mockupStatus: "Elevation: 2,140m ASL · Chamoli Sector",
  },
  {
    step: 3,
    badge: "STAGE 03 · DISPATCH",
    title: "Encrypted & Offline Mesh Sync",
    desc: "Report is compressed, cryptographically signed, and transmitted with offline storage if internet is unavailable.",
    icon: Send,
    mockupDetail: "Payload: 480 KB (Encrypted)",
    mockupStatus: "Sync Status: Verified at Central Command",
  },
  {
    step: 4,
    badge: "STAGE 04 · FUSION",
    title: "Instant Live Model Recalibration",
    desc: "Ground evidence fuses with satellite InSAR and rainfall feeds, immediately updating the zone risk level.",
    icon: Brain,
    mockupDetail: "Fusion: InSAR + Ground Report",
    mockupStatus: "Zone Risk Updated: WARNING Level",
  },
];

export function FieldReporting() {
  const [activeStep, setActiveStep] = useState(0);
  const current = STEPS[activeStep];

  return (
    <section id="section-11" className="w-full bg-black py-20 md:py-28 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
            <span>Field Ground-Truth Reporting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
            How Field Observations Reach SANKET
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#bbbbbb] font-light leading-relaxed">
            Empowering patrol teams with instant, offline-capable geological hazard reporting.
          </p>
        </div>

        {/* 4-Step Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {STEPS.map((step, idx) => {
            const isActive = idx === activeStep;
            const StepIcon = step.icon;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 text-left transition-all duration-150 cursor-pointer border ${
                  isActive
                    ? "bg-[#262626] text-white border-white"
                    : "bg-[#0d0d0d] text-[#bbbbbb] border-[#262626] hover:bg-[#1a1a1a]"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-7 h-7 flex items-center justify-center ${isActive ? "bg-white text-black" : "bg-[#1a1a1a] text-white"}`}>
                    <StepIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white">
                    Step 0{step.step}
                  </span>
                </div>
                <span className="text-xs font-bold uppercase block truncate text-white">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Display Container */}
        <div className="bg-[#1a1a1a] border border-[#3c3c3c] p-8 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
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

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans uppercase">
                  {current.title}
                </h3>

                <p className="text-base text-[#bbbbbb] font-light leading-relaxed">
                  {current.desc}
                </p>

                <div className="p-4 bg-[#0d0d0d] border border-[#262626] flex items-center gap-3 text-xs font-mono text-white">
                  <ShieldCheck className="w-5 h-5 text-white shrink-0" />
                  <span>Encrypted Offline Cache with Automatic Mesh Reconnect</span>
                </div>
              </div>

              {/* Right Column: Mobile Simulation (Span 5) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm p-6 bg-[#0d0d0d] text-white border border-[#262626] space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#7e7e7e]">
                    <div className="flex items-center gap-2 text-white">
                      <Smartphone className="w-4 h-4" />
                      <span className="uppercase tracking-wider font-bold">SANKET Field App</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white font-bold">
                      <Wifi className="w-3.5 h-3.5" />
                      <span>SYNCED</span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#1a1a1a] border border-[#262626] space-y-2">
                    <div className="text-[11px] font-mono text-[#7e7e7e] uppercase tracking-wider">
                      Telemetry Stream
                    </div>
                    <div className="text-xs font-mono font-bold text-white">
                      {current.mockupDetail}
                    </div>
                    <div className="text-xs font-mono text-[#1c69d4] font-bold uppercase">
                      {current.mockupStatus}
                    </div>
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
