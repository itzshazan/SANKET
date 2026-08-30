"use client";

import React, { useState } from "react";
import { Camera, Satellite, ArrowDown, CheckCircle2, SlidersHorizontal, Eye, ShieldAlert, Sparkles, Activity } from "lucide-react";

export function AICVDeepDive() {
  const [showMask, setShowMask] = useState(true);

  return (
    <section id="section-09" className="w-full bg-[#E0E5EC] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF] mb-4">
            Visual Intelligence & Edge Inference
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#3D4852] tracking-tight">
            Computer Vision Surface Deformation Engine
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280]">
            SANKET uses deep segmentation models to detect micro-cracks and scarp displacement before massive slope collapse.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left Panel: Ground Image Analysis Flow */}
          <div className="rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#A3B1C6]/30 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#6C63FF]">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-extrabold text-[#3D4852]">
                      Ground Image Analysis Pipeline
                    </h3>
                    <span className="text-xs font-mono text-[#6B7280]">
                      Mobile Photo / Road Camera Feed
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-[#6C63FF] text-[10px] font-mono font-bold">
                  YOLOv8 & UNet
                </span>
              </div>

              {/* Vertical Step Flow with Neumorphic Inset Pods */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#3D4852] font-bold">1. High-Res Image Ingestion</span>
                  <span className="text-[#6B7280]">4K Telephoto / Drone</span>
                </div>
                <div className="flex justify-center text-[#6C63FF]">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-3.5 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#3D4852] font-bold">2. Edge CV Inference</span>
                  <span className="text-[#6C63FF] font-bold">84ms GPU Latency</span>
                </div>
                <div className="flex justify-center text-[#6C63FF]">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-4 rounded-2xl bg-[#E0E5EC] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.7)] space-y-2">
                  <div className="text-xs font-mono font-bold text-[#3D4852]">
                    3. Geohazard Segmentations Flagged:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-2 text-[#3D4852]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38B2AC]" />
                      <span>Tension Cracks (92%)</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#3D4852]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38B2AC]" />
                      <span>Road Subsidence (88%)</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#3D4852]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38B2AC]" />
                      <span>Toe Bulging (95%)</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#3D4852]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38B2AC]" />
                      <span>Loose Talus Flow (84%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#A3B1C6]/30 flex items-center justify-between text-xs text-[#6B7280]">
              <span>Inference: Mobile GPU Edge & Cloud</span>
              <span className="font-mono font-bold text-[#38B2AC]">Confidence: 94.8%</span>
            </div>
          </div>

          {/* Right Panel: Interactive Scarp Segmentation Switcher */}
          <div className="rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Header with Mask Toggle Switch */}
              <div className="flex items-center justify-between pb-4 border-b border-[#A3B1C6]/30 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#6C63FF]">
                    <Satellite className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-extrabold text-[#3D4852]">
                      Satellite Scarp Mask Switcher
                    </h3>
                    <span className="text-xs font-mono text-[#6B7280]">
                      Sentinel-2 Kedarnath Scarp Area
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setShowMask(!showMask)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                    showMask
                      ? "bg-[#6C63FF] text-white shadow-[3px_3px_6px_rgba(108,99,255,0.4)]"
                      : "bg-[#E0E5EC] text-[#3D4852] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]"
                  }`}
                >
                  {showMask ? "AI MASK: ON" : "AI MASK: OFF"}
                </button>
              </div>

              {/* Sunken Visual Preview Viewport */}
              <div className="relative h-60 w-full rounded-2xl bg-[#E0E5EC] shadow-[inset_6px_6px_12px_rgba(163,177,198,0.7),inset_-6px_-6px_12px_rgba(255,255,255,0.6)] overflow-hidden flex items-center justify-center p-4">
                {/* Visual Topographic Texture */}
                <div className="absolute inset-0 opacity-40 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <path d="M 10 160 Q 120 40 240 120 T 390 80" fill="none" stroke="#6C63FF" strokeWidth="2" />
                    <path d="M 10 180 Q 150 90 290 170 T 390 130" fill="none" stroke="#A3B1C6" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* AI Mask Overlay */}
                {showMask ? (
                  <div className="relative z-10 p-5 rounded-2xl bg-[#E0E5EC]/90 shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.7)] text-center space-y-2 backdrop-blur-sm max-w-xs">
                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#E53E3E] text-white text-[10px] font-mono font-bold">
                      ACTIVE SCARP ANOMALY
                    </div>
                    <div className="text-xs font-mono font-bold text-[#3D4852]">
                      Predicted Debris Zone: 14,200 m²
                    </div>
                    <div className="text-[11px] text-[#6B7280]">
                      InSAR Vector: -18.4 mm/week downslope
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 text-xs font-mono text-[#6B7280] bg-[#E0E5EC] px-4 py-2 rounded-xl shadow-[3px_3px_6px_rgba(163,177,198,0.5)]">
                    Raw 10m Optical Satellite Composite
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#A3B1C6]/30 flex items-center justify-between text-xs font-mono text-[#6B7280]">
              <span>Overlay: ESA Sentinel-2 InSAR</span>
              <span className="text-[#6C63FF] font-bold">Precision: 10m Grid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
