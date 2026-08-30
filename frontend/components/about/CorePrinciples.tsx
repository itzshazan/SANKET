"use client";

import React from "react";
import { Database, Eye, MapPin, Radio } from "lucide-react";

export function CorePrinciples() {
  const principles = [
    {
      icon: Database,
      title: "Multi-Signal Fusion",
      description: "We correlate Sentinel-2 radar displacement, slope DEMs, and volumetric moisture to eliminate blindspots."
    },
    {
      icon: Eye,
      title: "Computer Vision Verification",
      description: "Visual tension crack and scarp segmentation validates remote sensing inferences against field photographic evidence."
    },
    {
      icon: MapPin,
      title: "10m Micro-Zone Precision",
      description: "Actionable failure probabilities mapped to exact 10m coordinates and highway milestones rather than broad regional bulletins."
    },
    {
      icon: Radio,
      title: "CAP Protocol Warnings",
      description: "Tiered hazard alerts dispatched across SMS, web push, and automated siren webhooks to ensure zero delayed evacuations."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0d0d0d] text-white border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white">
            <span>Architectural Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
            Engineering Rigor For Life-Critical Early Warning
          </h2>
          <p className="text-base sm:text-lg text-[#bbbbbb] font-light leading-relaxed">
            Geohazard prediction requires deterministic physics modeling, high-reliability infrastructure, and seamless multi-agency interoperability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {principles.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#1a1a1a] border border-[#3c3c3c] hover:border-white hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-[#0d0d0d] border border-[#3c3c3c] flex items-center justify-center text-white mb-5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-white mb-2.5 font-sans">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#bbbbbb] font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
