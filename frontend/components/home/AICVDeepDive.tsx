"use client";

import React, { useState } from "react";
import {
  Camera,
  Satellite,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Zap,
  Activity,
  Maximize2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AICVDeepDive() {
  const [showMask, setShowMask] = useState(true);
  const [selectedDetection, setSelectedDetection] = useState<number>(0);

  const detections = [
    {
      label: "Tension Cracks",
      confidence: "94.6%",
      desc: "Surface shear fissures along upper scarp rim (Width: 18–24 cm)",
      color: "#A85448",
      bg: "#FBF0EE",
    },
    {
      label: "Toe Bulging",
      confidence: "91.8%",
      desc: "Lateral volumetric soil displacement at highway embankment base",
      color: "#C18C5D",
      bg: "#F9F1EB",
    },
    {
      label: "Road Subsidence",
      confidence: "88.4%",
      desc: "Asphalt differential depression along NH-58 Kilometer marker 142",
      color: "#AB774B",
      bg: "#F9F1EB",
    },
    {
      label: "Talus Flow",
      confidence: "86.2%",
      desc: "Granular loose rock accumulation with accelerated gravity slide",
      color: "#5D7052",
      bg: "#EBF0E8",
    },
  ];

  return (
    <section id="section-09" className="w-full bg-[#FDFCF8] py-20 md:py-28 border-t border-[#DED8CF]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#5D7052] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#5D7052]" />
            <span>Visual Intelligence & Edge Inference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#2C2C24]">
            Computer Vision Surface Deformation Engine
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#78786C] font-normal leading-relaxed">
            SANKET combines deep segmentation models with multi-temporal InSAR radar to detect micro-cracks and scarp displacement before catastrophic failure.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Ground Inference Engine (Span 6) */}
          <div className="lg:col-span-6 bg-[#FEFEFA] border border-[#DED8CF] rounded-[2.5rem] p-7 sm:p-9 flex flex-col justify-between shadow-soft">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#DED8CF]/70">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#5D7052]/10 flex items-center justify-center text-[#5D7052]">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#2C2C24]">
                      Ground Optical Inference
                    </h3>
                    <p className="text-xs text-[#78786C]">
                      YOLOv8 Edge Segmentation · 84ms Latency
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-[#EBF0E8] text-[#5D7052] rounded-full text-xs font-bold">
                  Active Feed
                </span>
              </div>

              {/* Interactive Detection Cards */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#78786C] mb-1">
                  Detected Slope Surface Indicators
                </div>
                {detections.map((d, idx) => {
                  const isSelected = idx === selectedDetection;
                  return (
                    <div
                      key={d.label}
                      onClick={() => setSelectedDetection(idx)}
                      className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#FEFEFA] border-[#5D7052] shadow-soft scale-[1.01]"
                          : "bg-[#FDFCF8] border-[#DED8CF]/80 hover:bg-[#F0EBE5]/50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: d.color }}
                          />
                          <span className="font-serif font-bold text-sm text-[#2C2C24]">
                            {d.label}
                          </span>
                        </div>
                        <span
                          className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                          style={{ backgroundColor: d.bg, color: d.color }}
                        >
                          {d.confidence} match
                        </span>
                      </div>
                      <p className="text-xs text-[#78786C] leading-relaxed pl-5">
                        {d.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-6 mt-6 border-t border-[#DED8CF]/70 flex items-center justify-between text-xs text-[#78786C]">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#5D7052]" />
                <span>Edge Neural Processor Verified</span>
              </div>
              <span className="font-bold text-[#5D7052]">100% On-Device</span>
            </div>
          </div>

          {/* Right Column: Satellite InSAR & Scarp Segmentation Viewport (Span 6) */}
          <div className="lg:col-span-6 bg-[#FEFEFA] border border-[#DED8CF] rounded-[2.5rem] p-7 sm:p-9 flex flex-col justify-between shadow-soft">
            <div className="space-y-6">
              {/* Header with Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-[#DED8CF]/70">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#C18C5D]/10 flex items-center justify-center text-[#C18C5D]">
                    <Satellite className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#2C2C24]">
                      InSAR Deformation Model
                    </h3>
                    <p className="text-xs text-[#78786C]">
                      Sentinel-2 Pass · Kedarnath Corridor
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowMask(!showMask)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    showMask
                      ? "bg-[#5D7052] text-[#F3F4F1] shadow-soft scale-105"
                      : "bg-[#F0EBE5] text-[#4A4A40] border border-[#DED8CF]"
                  }`}
                >
                  {showMask ? "AI MASK: ON" : "AI MASK: OFF"}
                </button>
              </div>

              {/* Visual Beautiful Illustrated Terrain Radar Viewport */}
              <div className="relative h-[290px] w-full rounded-2xl bg-[#F0EBE5]/70 border border-[#DED8CF] overflow-hidden p-5 flex flex-col justify-between shadow-inner">
                {/* Background Topographic Contour Lines */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 500 280" fill="none">
                    {/* Topographic Elevation Isobars */}
                    <path d="M-20 220 C100 180, 220 240, 360 160 C420 120, 480 140, 520 110" stroke="#5D7052" strokeWidth="2" />
                    <path d="M-20 180 C120 140, 240 200, 370 120 C430 80, 490 100, 520 70" stroke="#7B926E" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M-20 140 C140 100, 260 160, 380 90 C440 50, 490 70, 520 40" stroke="#C18C5D" strokeWidth="1.5" />
                    <path d="M-20 100 C150 70, 280 120, 390 60 C450 30, 490 40, 520 20" stroke="#AB774B" strokeWidth="1" strokeDasharray="3 3" />
                  </svg>
                </div>

                {/* Radar Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#5D7052_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

                {/* Top Viewport Header Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="px-3.5 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-[#DED8CF] text-xs font-bold text-[#2C2C24] shadow-2xs">
                    Sector: Kedarnath North-West Face
                  </div>
                  <div className="px-3 py-1 bg-[#EBF0E8] rounded-full text-xs font-bold text-[#5D7052]">
                    10m DEM Raster
                  </div>
                </div>

                {/* AI Mask Heatmap Overlay Area */}
                {showMask ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 mx-auto max-w-sm w-full bg-white/95 backdrop-blur-md rounded-2xl border border-[#C18C5D]/50 p-4 shadow-float text-center space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-0.5 rounded-full bg-[#FBF0EE] text-[#A85448] text-[11px] font-bold uppercase tracking-wider">
                        Active Scarp Anomaly
                      </span>
                      <span className="text-xs font-bold text-[#C18C5D]">
                        -18.4 mm/week
                      </span>
                    </div>

                    <div className="text-sm font-serif font-bold text-[#2C2C24]">
                      Predicted Debris Zone: 14,200 m²
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                      <div className="p-2 rounded-xl bg-[#FDFCF8] border border-[#DED8CF] text-[#78786C]">
                        <span className="block font-bold text-[#2C2C24]">41.8°</span> Slope Angle
                      </div>
                      <div className="p-2 rounded-xl bg-[#FDFCF8] border border-[#DED8CF] text-[#78786C]">
                        <span className="block font-bold text-[#A85448]">0.88 FoS</span> Critical Limit
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="relative z-10 mx-auto px-5 py-3 bg-white/90 backdrop-blur-md rounded-full border border-[#DED8CF] text-xs font-serif font-bold text-[#78786C] shadow-soft">
                    Raw 10m Optical Satellite Composite Layer
                  </div>
                )}

                {/* Bottom Viewport Coordinate Info */}
                <div className="relative z-10 flex items-center justify-between text-xs text-[#78786C]">
                  <span className="bg-white/80 px-3 py-1 rounded-full border border-[#DED8CF]">
                    30.734° N, 79.068° E
                  </span>
                  <span className="bg-white/80 px-3 py-1 rounded-full border border-[#DED8CF]">
                    Elevation: 2,650m ASL
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-6 mt-6 border-t border-[#DED8CF]/70 flex items-center justify-between text-xs text-[#78786C]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C18C5D]" />
                <span>ESA Copernicus Sentinel-2 Level-2A</span>
              </div>
              <span className="font-bold text-[#5D7052]">Sync: 6h Pass</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
