"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    category: "AI Predictive Physics",
    headline: "Evaluates pore water pressure and dynamic shear strength across terrain zones",
    description: "Calculates continuous failure likelihood by correlating rainfall intensity with digital elevation terrain models and in-situ sensor feeds.",
    icon: Brain,
    tag: "SANKET ML Engine",
    stat: "94.2%",
    statLabel: "Predictive Precision",
  },
  {
    id: 2,
    category: "Remote Sensing & InSAR",
    headline: "Detects millimeter-level ground deformation from Sentinel-2 radar passes",
    description: "Multi-temporal satellite radar interferometry tracks slope creeping, scarp fissures, and vegetation stress across vast mountain corridors.",
    icon: Satellite,
    tag: "ESA Sentinel-2",
    stat: "10m",
    statLabel: "Spatial DEM Grid",
  },
  {
    id: 3,
    category: "Computer Vision Edge",
    headline: "Identifies tension cracks and road subsidence in drone and CCTV imagery",
    description: "Custom deep segmentation models analyze roadside feeds to flag scarp fractures and debris flow before road collapses happen.",
    icon: Eye,
    tag: "Edge YOLO / UNet",
    stat: "< 1.2s",
    statLabel: "Inference Latency",
  },
  {
    id: 4,
    category: "GIS Command Console",
    headline: "Interactive geospatial mapping with real-time risk zone overlays",
    description: "Aggregates slope, aspect, rainfall forecasts, and past landslide inventories into a single unified map interface for district responders.",
    icon: MapPin,
    tag: "Leaflet & MapLibre",
    stat: "24/7",
    statLabel: "Live GIS Telemetry",
  },
  {
    id: 5,
    category: "CAP Alert Protocol",
    headline: "Dispatches automated multi-channel early warnings to agencies and travelers",
    description: "Formats standard OASIS Common Alerting Protocol messages for instant broadcast via SMS, siren systems, and institutional APIs.",
    icon: AlertTriangle,
    tag: "OASIS CAP v1.2",
    stat: "< 3s",
    statLabel: "Dispatch Speed",
  },
  {
    id: 6,
    category: "Offline Field Reporting",
    headline: "Ground-truth reporting app with offline cryptographic synchronization",
    description: "Empowers field survey teams to record geotagged hazard photos in remote valleys with automatic sync on network reconnection.",
    icon: Smartphone,
    tag: "IndexedDB Mesh",
    stat: "100%",
    statLabel: "Offline Capable",
  },
];

export function CapabilitiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i === 0 ? CAPABILITIES.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === CAPABILITIES.length - 1 ? 0 : i + 1));

  const current = CAPABILITIES[currentIndex];
  const Icon = current.icon;

  return (
    <section id="section-08" className="w-full bg-[#0d0d0d] py-20 md:py-28 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
              Engineering Built For Geological Precision
            </h2>
          </div>

          {/* BMW M Circular Carousel Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#3c3c3c] flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black active:scale-95 transition-all cursor-pointer"
              aria-label="Previous capability"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#3c3c3c] flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black active:scale-95 transition-all cursor-pointer"
              aria-label="Next capability"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Capability Card Display */}
        <div className="bg-[#1a1a1a] border border-[#3c3c3c] p-8 sm:p-14 relative overflow-hidden">
          {/* Top M Stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] flex">
            <div className="w-1/3 bg-[#0066b1]" />
            <div className="w-1/3 bg-[#1c69d4]" />
            <div className="w-1/3 bg-[#e22718]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column (Span 8) */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-11 h-11 bg-[#0d0d0d] border border-[#3c3c3c] flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-[#0d0d0d] border border-[#3c3c3c] text-xs font-mono font-bold text-white uppercase tracking-[1px] block">
                      {current.category}
                    </span>
                    <span className="text-xs font-mono text-[#7e7e7e] mt-1 block">
                      {current.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight font-sans uppercase">
                  {current.headline}
                </h3>

                <p className="text-base sm:text-lg text-[#bbbbbb] font-light leading-relaxed max-w-2xl">
                  {current.description}
                </p>

                <div className="pt-2">
                  <a
                    href="#section-15"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[1.5px] text-white hover:text-[#1c69d4] transition-colors"
                  >
                    <span>Request sandbox integration</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Spec Pod (Span 4) */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-xs p-8 bg-[#0d0d0d] border border-[#262626] flex flex-col items-center justify-center text-center space-y-2">
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
                    {current.stat}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[1.5px] text-[#7e7e7e]">
                    {current.statLabel}
                  </div>
                  <div className="w-8 h-0.5 bg-white mt-2" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
