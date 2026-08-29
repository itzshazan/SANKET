"use client";

import React, { useState } from "react";
import { Camera, Satellite, ArrowDown, CheckCircle2, SlidersHorizontal, Eye, ShieldAlert, Sparkles, Activity } from "lucide-react";
import { SectionHeader } from "../ui/Section";
import { ScrollReveal, SlideReveal, ScaleReveal } from "../shared/ScrollReveal";

export function AICVDeepDive() {
  const [showMask, setShowMask] = useState(true);

  return (
    <section id="section-09" className="w-full bg-[#FFFFFF] border-b border-[#E3E8DF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            pill="Visual Intelligence"
            title="AI Sees What Humans Might Miss."
            subtitle="SANKET uses computer vision to analyze imagery for visual indicators that strengthen risk assessment and situational awareness."
            statusText="YOLOv8 INFERENCE 84ms"
            className="text-center mx-auto"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-12">
          {/* Left Panel: Ground Image Analysis Flow */}
          <SlideReveal direction="left" className="rounded-2xl md:rounded-3xl bg-[#F8F9F6] border border-[#E3E8DF] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover-card-light">
            <div>
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E3E8DF] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#213318] text-[#C8EA3B] flex items-center justify-center">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-[#1A2614]">
                      Ground Image Analysis Flow
                    </h3>
                    <span className="text-[11px] font-mono text-[#586650]">
                      Mobile Photo / Road Camera Feed
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#C8EA3B]/20 text-[#1A2614] text-[10px] font-mono font-bold">
                  YOLOv8 & ResNet
                </span>
              </div>

              {/* Vertical Step Flow */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-white border border-[#E3E8DF] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#1A2614] font-semibold">1. Ground / Roadside Photo Ingested</span>
                  <span className="text-[#7E9473]">Input 4K JPG</span>
                </div>
                <div className="flex justify-center text-[#C8EA3B]">
                  <ArrowDown className="w-4 h-4 text-[#213318]" />
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E3E8DF] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#1A2614] font-semibold">2. SANKET Computer Vision Inference</span>
                  <span className="text-[#213318] font-bold">84ms GPU Latency</span>
                </div>
                <div className="flex justify-center text-[#C8EA3B]">
                  <ArrowDown className="w-4 h-4 text-[#213318]" />
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E3E8DF] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#1A2614] font-semibold">3. Anomaly Bounding Box Classification</span>
                  <span className="text-[#E03030] font-bold">96.8% Conf.</span>
                </div>
              </div>

              {/* Detection Output Chips */}
              <div className="mt-6 pt-5 border-t border-[#E3E8DF]">
                <span className="text-xs font-mono font-bold text-[#586650] uppercase tracking-wider block mb-3">
                  Live Detected Geological Features:
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center gap-2 text-xs font-mono font-bold text-[#E03030]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E03030] animate-pulse" />
                    Crack Detected (18cm)
                  </div>
                  <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center gap-2 text-xs font-mono font-bold text-[#F07B20]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F07B20]" />
                    Debris Detected (3.2m³)
                  </div>
                  <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center gap-2 text-xs font-mono font-bold text-[#E03030]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E03030] animate-pulse" />
                    Landslide Area Flagged
                  </div>
                  <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center gap-2 text-xs font-mono font-bold text-[#F07B20]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F07B20]" />
                    Road Blockage Impending
                  </div>
                </div>
              </div>
            </div>
          </SlideReveal>

          {/* Right Panel: Satellite Image Analysis with Before / After Toggle */}
          <SlideReveal direction="right" className="rounded-2xl md:rounded-3xl bg-[#F8F9F6] border border-[#E3E8DF] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover-card-light">
            <div>
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E3E8DF] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#213318] text-[#C8EA3B] flex items-center justify-center">
                    <Satellite className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-[#1A2614]">
                      Satellite Image Segmentation
                    </h3>
                    <span className="text-[11px] font-mono text-[#586650]">
                      Sentinel-2 10m Optical & Radar InSAR
                    </span>
                  </div>
                </div>

                {/* Before / After Toggle Button */}
                <div className="flex items-center bg-[#213318] p-1 rounded-lg border border-[#37502B]">
                  <button
                    onClick={() => setShowMask(false)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      !showMask ? "bg-[#C8EA3B] text-[#1A2614] font-bold shadow-xs" : "text-[#C5D7BD] hover:text-white"
                    }`}
                  >
                    Raw Feed
                  </button>
                  <button
                    onClick={() => setShowMask(true)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      showMask ? "bg-[#C8EA3B] text-[#1A2614] font-bold shadow-xs" : "text-[#C5D7BD] hover:text-white"
                    }`}
                  >
                    AI Mask Overlay
                  </button>
                </div>
              </div>

              {/* Satellite Interactive Frame */}
              <div className="w-full aspect-[16/10] rounded-2xl bg-[#1A2614] border border-[#37502B] relative overflow-hidden flex items-center justify-center p-4">
                {/* Active Computer Vision Scanning Beam */}
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8EA3B] to-transparent shadow-[0_0_15px_#C8EA3B] animate-cv-scan z-20 pointer-events-none" />

                {/* SVG Visual representation of Satellite Terrain & Segmentation Mask */}
                <svg className="w-full h-full" viewBox="0 0 400 240" preserveAspectRatio="none">
                  {/* Base Terrain Contour Mesh */}
                  <defs>
                    <linearGradient id="sat-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E2D17" />
                      <stop offset="50%" stopColor="#273C1E" />
                      <stop offset="100%" stopColor="#1A2614" />
                    </linearGradient>
                    <pattern id="sat-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(55,80,43,0.3)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="400" height="240" fill="url(#sat-grad)" />
                  <rect width="400" height="240" fill="url(#sat-grid)" />

                  {/* Mountain Ridge Paths */}
                  <path d="M 0 160 Q 90 90 200 140 T 400 110" fill="none" stroke="#37502B" strokeWidth="2" />
                  <path d="M 0 200 Q 120 130 250 180 T 400 160" fill="none" stroke="#37502B" strokeWidth="1.5" />
                  <path d="M 0 90 Q 150 40 300 80 T 400 60" fill="none" stroke="#37502B" strokeWidth="1" />

                  {/* AI Segmentation Mask when toggled on */}
                  {showMask && (
                    <g className="animate-in fade-in duration-300">
                      {/* Critical Red Scarp Area */}
                      <path
                        d="M 160 90 Q 230 70 270 120 T 230 160 T 150 130 Z"
                        fill="rgba(224, 48, 48, 0.45)"
                        stroke="#E03030"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                      />
                      {/* Orange Debris Runout Zone */}
                      <path
                        d="M 230 140 Q 280 160 320 200 T 260 220 T 200 180 Z"
                        fill="rgba(240, 123, 32, 0.35)"
                        stroke="#F07B20"
                        strokeWidth="1.5"
                      />
                      {/* AI Bounding Box Tag */}
                      <rect x="150" y="60" width="130" height="22" rx="4" fill="#213318" stroke="#C8EA3B" strokeWidth="1" />
                      <text x="156" y="75" fill="#C8EA3B" fontSize="10" fontFamily="monospace" fontWeight="bold">
                        LANDSLIDE SCARP (98%)
                      </text>
                    </g>
                  )}
                </svg>

                {/* State Pill on image */}
                <div className="absolute bottom-3 left-3 bg-[#1A2614]/90 backdrop-blur-md px-2.5 py-1 rounded border border-[#37502B] text-[10px] font-mono text-[#C5D7BD] z-30">
                  {showMask ? "● SEGMENTATION ACTIVE (2 ZONES)" : "○ RAW MULTISPECTRAL FEED"}
                </div>
              </div>

              <div className="mt-4 text-xs font-mono text-[#586650] flex justify-between">
                <span>Model: UNet++ with ResNet-50 Backbone</span>
                <span className="text-[#1A2614] font-bold">F1 Score: 0.912</span>
              </div>
            </div>
          </SlideReveal>
        </div>

        {/* Centered Pull Quote with 3px Lime Left Border */}
        <ScaleReveal delay={0.15} className="max-w-3xl mx-auto mt-14 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#F8F9F6] border-l-[3px] border-l-[#C8EA3B] border-y border-r border-[#E3E8DF] shadow-xs text-center sm:text-left hover-card-light">
          <blockquote className="text-xl sm:text-2xl font-display font-medium italic text-[#1A2614] leading-snug">
            &ldquo;Environmental data tells us what is changing. Visual intelligence shows us where.&rdquo;
          </blockquote>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7E9473] mt-3">
            SANKET Computer Vision & Earth Observation Architecture
          </div>
        </ScaleReveal>
      </div>
    </section>
  );
}
