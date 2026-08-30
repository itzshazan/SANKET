"use client";

import React, { useState } from "react";
import {
  Camera,
  MapPin,
  Send,
  Brain,
  CheckCircle2,
  Smartphone,
  ShieldCheck,
  UploadCloud,
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
  const Icon = current.icon;

  return (
    <section id="section-11" className="w-full bg-[#E0E5EC] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF] mb-4">
            Field Ground-Truth Reporting
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#3D4852] tracking-tight">
            How Field Observations Reach SANKET
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280]">
            Empowering patrol teams with instant, offline-capable geological hazard reporting.
          </p>
        </div>

        {/* Tactile 4-Step Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {STEPS.map((step, idx) => {
            const isActive = idx === activeStep;
            const StepIcon = step.icon;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] border-l-4 border-[#6C63FF]"
                    : "bg-[#E0E5EC] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.6)] hover:shadow-[8px_8px_16px_rgba(163,177,198,0.7)]"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-xl bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6)] flex items-center justify-center text-[#6C63FF]">
                    <StepIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#6C63FF]">
                    Step 0{step.step}
                  </span>
                </div>
                <span className="text-xs font-bold text-[#3D4852] block truncate">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Molded Display Container */}
        <div className="rounded-[32px] bg-[#E0E5EC] shadow-[12px_12px_24px_rgba(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.8)] p-8 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column (Span 7) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF]">
                  {current.badge}
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#3D4852]">
                  {current.title}
                </h3>

                <p className="text-base text-[#6B7280] leading-relaxed">
                  {current.desc}
                </p>

                <div className="p-4 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] flex items-center gap-3 text-xs font-mono text-[#3D4852]">
                  <ShieldCheck className="w-5 h-5 text-[#38B2AC] shrink-0" />
                  <span>Encrypted Offline Cache with Automatic Mesh Reconnect</span>
                </div>
              </div>

              {/* Right Column: Inset Mobile Simulation (Span 5) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm p-6 rounded-[28px] bg-[#E0E5EC] shadow-[inset_8px_8px_16px_rgba(163,177,198,0.7),inset_-8px_-8px_16px_rgba(255,255,255,0.6)] space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#6B7280]">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-[#6C63FF]" />
                      <span>SANKET Field App</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#38B2AC]">
                      <Wifi className="w-3.5 h-3.5" />
                      <span>SYNCED</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#E0E5EC] shadow-[4px_4px_8px_rgba(163,177,198,0.5),-4px_-4px_8px_rgba(255,255,255,0.6)] space-y-2">
                    <div className="text-[11px] font-mono text-[#6B7280]">
                      Telemetry Stream
                    </div>
                    <div className="text-xs font-mono font-bold text-[#3D4852]">
                      {current.mockupDetail}
                    </div>
                    <div className="text-xs font-mono text-[#6C63FF] font-bold">
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
