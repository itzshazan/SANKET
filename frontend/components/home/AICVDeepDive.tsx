"use client";

import React, { useState } from "react";
import { Camera, Satellite, ArrowDown, CheckCircle2 } from "lucide-react";

export function AICVDeepDive() {
  const [showMask, setShowMask] = useState(true);

  return (
    <section id="section-09" className="w-full bg-black py-20 md:py-28 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
            <span>Visual Intelligence & Edge Inference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
            Computer Vision Surface Deformation Engine
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#bbbbbb] font-light leading-relaxed">
            SANKET uses deep segmentation models to detect micro-cracks and scarp displacement before massive slope collapse.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left Panel: Ground Image Analysis Flow */}
          <div className="bg-[#1a1a1a] border border-[#3c3c3c] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#0d0d0d] border border-[#3c3c3c] flex items-center justify-center text-white">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                      Ground Image Analysis Pipeline
                    </h3>
                    <span className="text-xs font-mono text-[#7e7e7e]">
                      Mobile Photo / Road Camera Feed
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 bg-white text-black text-[10px] font-mono font-bold uppercase">
                  YOLOv8 & UNet
                </span>
              </div>

              {/* Step Flow */}
              <div className="space-y-3">
                <div className="p-3.5 bg-[#0d0d0d] border border-[#262626] flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-bold uppercase tracking-wider">1. Image Ingestion</span>
                  <span className="text-[#7e7e7e]">4K Telephoto / Drone</span>
                </div>
                <div className="flex justify-center text-white">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-3.5 bg-[#0d0d0d] border border-[#262626] flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-bold uppercase tracking-wider">2. Edge Inference</span>
                  <span className="text-white font-bold">84ms GPU Latency</span>
                </div>
                <div className="flex justify-center text-white">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-4 bg-[#0d0d0d] border border-[#262626] space-y-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    3. Geohazard Segmentations:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-light text-[#bbbbbb]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      <span>Tension Cracks (92%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      <span>Road Subsidence (88%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      <span>Toe Bulging (95%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      <span>Loose Talus Flow (84%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#262626] flex items-center justify-between text-xs font-mono text-[#7e7e7e] uppercase tracking-wider">
              <span>Inference: Mobile GPU Edge</span>
              <span className="text-white font-bold">Confidence: 94.8%</span>
            </div>
          </div>

          {/* Right Panel: Satellite Scarp Segmentation Switcher */}
          <div className="bg-[#1a1a1a] border border-[#3c3c3c] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Header with Mask Toggle Switch */}
              <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#0d0d0d] border border-[#3c3c3c] flex items-center justify-center text-white">
                    <Satellite className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                      Satellite Scarp Mask Switcher
                    </h3>
                    <span className="text-xs font-mono text-[#7e7e7e]">
                      Sentinel-2 Kedarnath Scarp Area
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setShowMask(!showMask)}
                  className={`px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-[1px] transition-all cursor-pointer ${
                    showMask
                      ? "bg-white text-black"
                      : "bg-[#0d0d0d] text-white border border-[#3c3c3c]"
                  }`}
                >
                  {showMask ? "AI MASK: ON" : "AI MASK: OFF"}
                </button>
              </div>

              {/* Visual Preview Viewport */}
              <div className="relative h-60 w-full bg-black border border-[#262626] overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 opacity-40 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <path d="M 10 160 Q 120 40 240 120 T 390 80" fill="none" stroke="#1c69d4" strokeWidth="2" />
                    <path d="M 10 180 Q 150 90 290 170 T 390 130" fill="none" stroke="#0066b1" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* AI Mask Overlay */}
                {showMask ? (
                  <div className="relative z-10 p-5 bg-[#1a1a1a]/95 border border-[#e22718] text-center space-y-2 max-w-xs text-white">
                    <div className="inline-block px-2.5 py-0.5 bg-[#e22718] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                      ACTIVE SCARP ANOMALY
                    </div>
                    <div className="text-xs font-mono font-bold text-white uppercase">
                      Predicted Debris: 14,200 m²
                    </div>
                    <div className="text-[11px] text-[#bbbbbb] font-light">
                      InSAR Vector: -18.4 mm/week downslope
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 text-xs font-mono text-[#7e7e7e] bg-[#1a1a1a] px-4 py-2 border border-[#3c3c3c] uppercase tracking-wider">
                    Raw 10m Optical Satellite Composite
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#262626] flex items-center justify-between text-xs font-mono text-[#7e7e7e] uppercase tracking-wider">
              <span>Overlay: ESA Sentinel-2 InSAR</span>
              <span className="text-white font-bold">Precision: 10m Grid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
