"use client";

import React from "react";
import { Database, Eye, MapPin, Radio } from "lucide-react";

export function CorePrinciples() {
  const principles = [
    {
      icon: Database,
      color: "#5D7052",
      bg: "#EBF0E8",
      title: "Multi-Signal Fusion",
      description: "We correlate Sentinel-2 radar displacement, slope DEMs, and volumetric moisture to eliminate blindspots."
    },
    {
      icon: Eye,
      color: "#C18C5D",
      bg: "#F9F1EB",
      title: "Computer Vision Verification",
      description: "Visual tension crack and scarp segmentation validates remote sensing inferences against field photographic evidence."
    },
    {
      icon: MapPin,
      color: "#A85448",
      bg: "#FBF0EE",
      title: "10m Micro-Zone Precision",
      description: "Actionable failure probabilities mapped to exact 10m coordinates and highway milestones rather than broad regional bulletins."
    },
    {
      icon: Radio,
      color: "#5D7052",
      bg: "#EBF0E8",
      title: "CAP Protocol Warnings",
      description: "Tiered hazard alerts dispatched across SMS, web push, and automated siren webhooks to ensure zero delayed evacuations."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F0EBE5]/40 text-[#2C2C24] border-t border-[#DED8CF]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#5D7052]">
            <span>Architectural Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#2C2C24]">
            Engineering Rigor For Life-Critical Early Warning
          </h2>
          <p className="text-base sm:text-lg text-[#78786C] font-normal leading-relaxed">
            Geohazard prediction requires deterministic physics modeling, high-reliability infrastructure, and seamless multi-agency interoperability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {principles.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#FEFEFA] border border-[#DED8CF] rounded-3xl shadow-soft hover:shadow-float hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: p.bg, color: p.color }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#2C2C24] mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#78786C] leading-relaxed">
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
