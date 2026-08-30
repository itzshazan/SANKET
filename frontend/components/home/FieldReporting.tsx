"use client";

import React, { useState } from "react";
import {
  Camera,
  MapPin,
  Send,
  Brain,
  Smartphone,
  ShieldCheck,
  Wifi,
  Compass,
  CheckCircle2,
  Lock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    step: 1,
    badge: "STAGE 01 · CAPTURE",
    title: "Photograph the Geohazard Evidence",
    desc: "Field responders capture tension cracks, toe bulging, or debris accumulation using the mobile app camera with on-device quality checks.",
    icon: Camera,
    mockupDetail: "Resolution: 4032 x 3024 HDR",
    mockupSub: "Feature Extraction: Scarp Tension Fracture",
    mockupStatus: "Crack Width: 22 cm Detected",
    mockupStatusColor: "#C18C5D",
  },
  {
    step: 2,
    badge: "STAGE 02 · GEOTAG",
    title: "Attach Precise Spatial Coordinates",
    desc: "Sub-meter GNSS coordinates and slope azimuth are embedded directly into report metadata with zero manual entry required.",
    icon: MapPin,
    mockupDetail: "GNSS: 30.4124° N, 79.3248° E",
    mockupSub: "Slope Azimuth: 142° SE · Chamoli Sector",
    mockupStatus: "Altitude: 2,140m ASL",
    mockupStatusColor: "#5D7052",
  },
  {
    step: 3,
    badge: "STAGE 03 · DISPATCH",
    title: "Encrypted & Offline Mesh Sync",
    desc: "Report is compressed, cryptographically signed, and transmitted with offline storage if cellular internet is unavailable in deep valleys.",
    icon: Send,
    mockupDetail: "Payload: 480 KB (AES-256 GCM)",
    mockupSub: "Local Storage: Cached in Secure SQLite",
    mockupStatus: "Sync: Instant Auto-Dispatch on 4G",
    mockupStatusColor: "#5D7052",
  },
  {
    step: 4,
    badge: "STAGE 04 · FUSION",
    title: "Instant Live Model Recalibration",
    desc: "Ground evidence fuses with satellite InSAR and precipitation feeds, immediately updating the zone risk level across central consoles.",
    icon: Brain,
    mockupDetail: "Data Fusion: Ground Photo + InSAR Radar",
    mockupSub: "Factor of Safety Recalibrated: 1.08 -> 0.92",
    mockupStatus: "Zone Status: WARNING Tier Broadcast",
    mockupStatusColor: "#A85448",
  },
];

export function FieldReporting() {
  const [activeStep, setActiveStep] = useState(0);
  const current = STEPS[activeStep];

  return (
    <section id="section-11" className="w-full bg-[#FDFCF8] py-20 md:py-28 border-t border-[#DED8CF]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#5D7052] mb-4">
            <Smartphone className="w-3.5 h-3.5 text-[#5D7052]" />
            <span>Field Ground-Truth Reporting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#2C2C24]">
            How Field Observations Reach SANKET
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#78786C] font-normal leading-relaxed">
            Empowering patrol teams with instant, offline-capable geological hazard reporting in remote mountain corridors.
          </p>
        </div>

        {/* 4-Step Stepper Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {STEPS.map((step, idx) => {
            const isActive = idx === activeStep;
            const StepIcon = step.icon;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-[#FEFEFA] text-[#2C2C24] border-[#5D7052] shadow-soft scale-[1.01]"
                    : "bg-[#FDFCF8] text-[#4A4A40] border-[#DED8CF] hover:bg-[#F0EBE5]"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isActive ? "bg-[#5D7052] text-[#F3F4F1]" : "bg-[#5D7052]/10 text-[#5D7052]"}`}>
                    <StepIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold" style={{ color: isActive ? "#5D7052" : "#78786C" }}>
                    Stage 0{step.step}
                  </span>
                </div>
                <span className="text-xs font-bold block truncate font-serif">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Display Container */}
        <div className="bg-[#FEFEFA] border border-[#DED8CF] rounded-[2.5rem] p-8 sm:p-12 shadow-soft">
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
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#EBF0E8] text-xs font-bold text-[#5D7052]">
                  {current.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C24]">
                  {current.title}
                </h3>

                <p className="text-base text-[#78786C] font-normal leading-relaxed">
                  {current.desc}
                </p>

                <div className="p-4 rounded-2xl bg-[#FDFCF8] border border-[#DED8CF] flex items-center gap-3 text-xs font-bold text-[#2C2C24]">
                  <ShieldCheck className="w-5 h-5 text-[#5D7052] shrink-0" />
                  <span>Encrypted Offline Cache with Automatic Mesh Reconnect</span>
                </div>
              </div>

              {/* Right Column: Clean Organic Mobile Simulation (Span 5) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm p-6 rounded-[2.5rem] bg-[#F0EBE5]/70 border border-[#DED8CF] shadow-float space-y-4">
                  {/* Top Mobile Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#DED8CF]">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#5D7052] text-[#F3F4F1] flex items-center justify-center font-serif text-xs font-bold">
                        S
                      </div>
                      <span className="font-serif font-bold text-xs text-[#2C2C24]">
                        SANKET Field Scout
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-[#DED8CF] text-[11px] font-bold text-[#5D7052] shadow-2xs">
                      <Wifi className="w-3 h-3" />
                      <span>LIVE SYNC</span>
                    </div>
                  </div>

                  {/* Clean Content Card */}
                  <div className="p-5 rounded-2xl bg-[#FEFEFA] border border-[#DED8CF] shadow-xs space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#78786C]">
                      <span className="font-bold uppercase tracking-wider text-[10px]">
                        Active Ingestion Record
                      </span>
                      <span className="flex items-center gap-1 text-[#5D7052] font-bold text-[11px]">
                        <Lock className="w-3 h-3" /> Encrypted
                      </span>
                    </div>

                    <div className="text-sm font-serif font-bold text-[#2C2C24]">
                      {current.mockupDetail}
                    </div>

                    <p className="text-xs text-[#78786C]">
                      {current.mockupSub}
                    </p>

                    <div className="pt-2 border-t border-[#DED8CF]/60 flex items-center justify-between">
                      <span className="text-xs font-bold" style={{ color: current.mockupStatusColor }}>
                        ● {current.mockupStatus}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Footer Info */}
                  <div className="flex items-center justify-between px-2 text-[11px] text-[#78786C]">
                    <span className="flex items-center gap-1">
                      <Compass className="w-3 h-3 text-[#C18C5D]" /> 2,140m ASL
                    </span>
                    <span>NDMA Geo-Schema v2.4</span>
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
