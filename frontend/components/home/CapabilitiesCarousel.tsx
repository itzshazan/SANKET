"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Brain,
  Satellite,
  Eye,
  MapPin,
  AlertTriangle,
  Smartphone,
  Play,
  Pause
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../ui/Section";
import { ScrollReveal, ScaleReveal } from "../shared/ScrollReveal";

interface CapabilityItem {
  id: number;
  category: string;
  headline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  stat: string;
  statLabel: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: 1,
    category: "AI Predictive Analytics",
    headline: "How AI models assess landslide susceptibility from multi-source environmental data",
    description: "Continuous risk scoring across terrain zones using precipitation history, volumetric soil moisture, and geomorphological inputs.",
    icon: Brain,
    tag: "SANKET ML Engine",
    stat: "94.2%",
    statLabel: "Predictive Precision",
  },
  {
    id: 2,
    category: "Remote Sensing",
    headline: "How satellite monitoring detects terrain shifts and surface changes at scale",
    description: "Sentinel-2 multispectral and radar imagery processed to track vegetation loss (NDVI), slope deformation, and ground shifts across entire mountain ranges.",
    icon: Satellite,
    tag: "Sentinel-2 & InSAR",
    stat: "10m",
    statLabel: "Spatial Resolution",
  },
  {
    id: 3,
    category: "Computer Vision",
    headline: "How computer vision identifies cracks, debris and blockages in ground and aerial imagery",
    description: "Custom-trained CV segmentation models analyze drone feeds, roadside camera photos, and mobile uploads to flag surface failure indicators.",
    icon: Eye,
    tag: "Edge & Cloud CV",
    stat: "< 1.2s",
    statLabel: "Inference Latency",
  },
  {
    id: 4,
    category: "GIS Spatial Intelligence",
    headline: "How dynamic risk maps visualize where risk is rising across vulnerable regions",
    description: "PostGIS-powered vector tiles and dynamic heatmaps projecting elevation contours, critical transportation corridors, and hazard buffer zones.",
    icon: MapPin,
    tag: "PostGIS Layers",
    stat: "Live",
    statLabel: "Vector Tile Streaming",
  },
  {
    id: 5,
    category: "Early Warning Protocols",
    headline: "How SANKET converts elevated risk scores into understandable, tiered alerts",
    description: "Multi-channel warnings (SMS, mobile app, voice calls) dispatched automatically when combined physical indicators cross critical safety thresholds.",
    icon: AlertTriangle,
    tag: "CAP Alert Protocol",
    stat: "4 Tiers",
    statLabel: "Normal to Emergency",
  },
  {
    id: 6,
    category: "Field Intelligence",
    headline: "How field reports feed ground-truth observations back into the AI risk picture",
    description: "Geo-tagged photo submissions and tension crack observations from field personnel are instantly fused with satellite datasets to calibrate risk models.",
    icon: Smartphone,
    tag: "Ground-Truth Fusion",
    stat: "Instant",
    statLabel: "GPS Telemetry Sync",
  },
];

const AUTO_PLAY_DURATION = 5000; // 5 seconds per slide

export function CapabilitiesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);
  const currentCap = CAPABILITIES[activeIndex];

  // Infinite Next & Prev handlers
  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % CAPABILITIES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + CAPABILITIES.length) % CAPABILITIES.length);
  };

  // Auto-play interval loop
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % CAPABILITIES.length);
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, activeIndex]);

  return (
    <section id="section-08" className="w-full bg-[#1A2614] border-b border-[#37502B] py-20 md:py-28 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C8EA3B] opacity-[0.04] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <SectionHeader
            pill="Platform Intelligence"
            title="Intelligence Built for Landslide Risk Monitoring."
            subtitle="Predictive analytics, remote sensing, computer vision and geospatial intelligence — in one platform."
            statusText="AWS-STYLE MULTI-NODE SLIDER"
            dark={true}
            className="text-center mx-auto"
          />
        </ScrollReveal>

        {/* Quick Category Tab Selectors */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {CAPABILITIES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                className={`py-2 px-1 text-center rounded-xl text-xs font-mono transition-all duration-300 cursor-pointer truncate ${
                  activeIndex === idx
                    ? "bg-[#C8EA3B] text-[#1A2614] font-bold shadow-[0_0_20px_rgba(200,234,59,0.35)] scale-[1.03]"
                    : "bg-[#213318]/80 text-[#C5D7BD] border border-[#37502B] hover:bg-[#37502B] hover:text-white"
                }`}
              >
                0{c.id} {c.category.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AWS-Style Multi-Card Track Viewport with Side Peek Cards */}
      <div
        className="w-full relative py-6 select-none overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex items-center"
          animate={{
            x: `calc(50% - (${activeIndex} * (min(86vw, 920px) + 24px) + min(86vw, 920px) / 2))`,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
        >
          {CAPABILITIES.map((cap, idx) => {
            const isActive = activeIndex === idx;
            const CapIcon = cap.icon;

            return (
              <div
                key={cap.id}
                onClick={() => {
                  if (!isActive) setActiveIndex(idx);
                }}
                style={{ width: "min(86vw, 920px)", marginRight: "24px" }}
                className={`shrink-0 rounded-3xl transition-all duration-500 overflow-hidden relative border ${
                  isActive
                    ? "bg-gradient-to-br from-[#273C1E] via-[#1F3017] to-[#162310] border-2 border-[#C8EA3B] shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(200,234,59,0.15)] scale-100 opacity-100 z-20"
                    : "bg-[#1A2614]/70 border-[#37502B] scale-[0.93] opacity-40 hover:opacity-75 cursor-pointer z-10 blur-[0.3px]"
                }`}
              >
                {/* Active countdown auto-play progress bar */}
                {isActive && isPlaying && !isHovered && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#37502B] overflow-hidden z-30">
                    <motion.div
                      key={activeIndex}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                      className="h-full bg-[#C8EA3B]"
                    />
                  </div>
                )}

                <div className="p-6 sm:p-10 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Capability Content (Span 7) */}
                    <div className="md:col-span-7 space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#C8EA3B]/15 text-[#C8EA3B] border border-[#C8EA3B]/30 uppercase">
                          {cap.category}
                        </span>
                        <span className="text-[11px] font-mono text-[#7E9473] bg-white/5 px-2.5 py-1 rounded border border-[#37502B]">
                          {cap.tag}
                        </span>
                      </div>

                      {/* Headline */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                        {cap.headline}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#C5D7BD] leading-relaxed">
                        {cap.description}
                      </p>

                      {/* Metric Tag & Link */}
                      <div className="pt-4 border-t border-[#37502B] flex items-center justify-between">
                        <a
                          href="#section-07"
                          className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-[#C8EA3B] hover:text-white transition-colors group"
                        >
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </a>

                        <div className="text-right">
                          <div className="text-xl font-display font-extrabold text-[#C8EA3B]">{cap.stat}</div>
                          <div className="text-[10px] font-mono text-[#7E9473]">{cap.statLabel}</div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Visual Graphic (Span 5) */}
                    <div className="md:col-span-5 flex flex-col items-center justify-center">
                      <div className="w-full aspect-square rounded-2xl bg-[#1A2614] border border-[#37502B] p-6 flex flex-col items-center justify-between text-center relative overflow-hidden shadow-inner">
                        <div className="relative z-10 w-full flex justify-between items-center text-[10px] font-mono text-[#7E9473]">
                          <span>CAPABILITY 0{cap.id}</span>
                          <span className="text-[#C8EA3B] font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C8EA3B] animate-pulse" />
                            AI ACTIVE
                          </span>
                        </div>

                        <div className="relative z-10 my-auto">
                          <div className="w-20 h-20 rounded-2xl bg-[#C8EA3B]/15 border border-[#C8EA3B]/40 flex items-center justify-center text-[#C8EA3B] shadow-[0_0_30px_rgba(200,234,59,0.3)] transition-transform duration-500 hover:scale-110">
                            <CapIcon className="w-10 h-10" />
                          </div>
                        </div>

                        <div className="relative z-10 w-full text-center">
                          <span className="text-xs font-mono font-bold text-white block">
                            {cap.category}
                          </span>
                          <span className="text-[11px] text-[#C5D7BD]">
                            SANKET Intelligence Layer 0{cap.id}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* AWS-Style Centered Floating Bottom Navigation Pill */}
      <div className="flex justify-center mt-6">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#1A2614]/90 backdrop-blur-md border border-[#37502B] text-white shadow-2xl">
          <button
            onClick={handlePrev}
            className="p-1.5 rounded-full text-[#C5D7BD] hover:text-[#C8EA3B] hover:bg-[#213318] transition-colors cursor-pointer"
            aria-label="Previous Capability"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-full text-[#C5D7BD] hover:text-[#C8EA3B] hover:bg-[#213318] transition-colors cursor-pointer"
            aria-label={isPlaying ? "Pause auto loop" : "Play auto loop"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <span className="text-xs font-mono font-bold text-[#C8EA3B] tracking-wider px-2">
            {activeIndex + 1} / {CAPABILITIES.length}
          </span>

          <button
            onClick={handleNext}
            className="p-1.5 rounded-full text-[#C5D7BD] hover:text-[#C8EA3B] hover:bg-[#213318] transition-colors cursor-pointer"
            aria-label="Next Capability"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
