"use client";

import { Section } from "../ui/Section";
import { Database, Eye, MapPin, Radio } from "lucide-react";

export function CorePrinciples() {
  const principles = [
    {
      icon: Database,
      title: "Multi-Signal Ingestion",
      description: "We correlate multispectral satellite indices (NDVI), slope DEMs, and volumetric moisture to eliminate dangerous blindspots."
    },
    {
      icon: Eye,
      title: "Computer Vision Ground-Truth",
      description: "Visual crack and debris segmentation validates remote sensing inferences directly against photographic field evidence."
    },
    {
      icon: MapPin,
      title: "Micro-Zone Spatial Resolution",
      description: "Actionable risk probabilities mapped to exact 10m x 10m coordinates and highway chainages rather than vague regional text."
    },
    {
      icon: Radio,
      title: "Deterministic Multi-Channel Warnings",
      description: "Tiered hazard alerts dispatched across SMS, web push, and automated voice systems to ensure zero delayed evacuations."
    }
  ];

  return (
    <Section className="py-16 sm:py-24 bg-[#F8F9F6] border-b border-[#E3E8DF]">
      <div className="max-w-4xl mb-12 sm:mb-16 space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#213318]">
          Our Pillars
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-[#1A2614]">
          Engineering Rigor for Life-Critical Early Warning
        </h2>
        <p className="text-base sm:text-lg text-[#586650] leading-relaxed">
          Disaster risk prediction requires deterministic data verification, high-reliability infrastructure, and seamless multi-agency interoperability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {principles.map((p, idx) => {
          const IconComponent = p.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E3E8DF] shadow-xs hover:border-[#C8EA3B] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#213318] text-[#C8EA3B] flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-display font-bold text-[#1A2614] mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-[#586650] leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
