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
    <section className="py-20 sm:py-28 bg-[#E0E5EC] text-[#3D4852]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF]">
            Architectural Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#3D4852]">
            Engineering Rigor for Life-Critical Early Warning
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Geohazard prediction requires deterministic physics modeling, high-reliability infrastructure, and seamless multi-agency interoperability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {principles.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_24px_rgba(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.7)] hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#6C63FF] mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-[#3D4852] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
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
