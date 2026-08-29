"use client";

import React from "react";
import { SectionHeader } from "../ui/Section";
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Database,
  Globe,
  Server,
  Cloud,
  Eye,
  Satellite,
  GitBranch,
  Box
} from "lucide-react";

const ROW1_AI_ML = [
  { name: "Python", cat: "Core Engine", icon: Terminal },
  { name: "TensorFlow", cat: "Deep Learning", icon: Cpu },
  { name: "PyTorch", cat: "Neural Nets", icon: BrainIcon },
  { name: "Scikit-learn", cat: "Risk Classifier", icon: Code2 },
  { name: "OpenCV", cat: "Image Analysis", icon: Eye },
  { name: "LangChain", cat: "Intelligence Synthesis", icon: Layers },
  { name: "Sentinel-2", cat: "ESA Earth Obs", icon: Satellite },
  { name: "NDVI Index", cat: "Vegetation Loss", icon: Layers },
  { name: "Rasterio", cat: "Geospatial Rasters", icon: Database },
  { name: "GeoPandas", cat: "Spatial Analysis", icon: Globe },
];

const ROW2_PLATFORM = [
  { name: "FastAPI", cat: "Async API", icon: Server },
  { name: "PostgreSQL", cat: "Relational DB", icon: Database },
  { name: "PostGIS", cat: "Spatial DB Extension", icon: Globe },
  { name: "React 19", cat: "Web UI", icon: Code2 },
  { name: "Next.js", cat: "App Router", icon: Server },
  { name: "Mapbox GL", cat: "Vector Tiles", icon: Globe },
  { name: "Leaflet", cat: "Interactive Maps", icon: Globe },
  { name: "Supabase", cat: "Real-time Relays", icon: Database },
  { name: "Docker", cat: "Microservices", icon: Box },
  { name: "Vercel Edge", cat: "CDN Network", icon: Cloud },
  { name: "AWS Cloud", cat: "Compute Clusters", icon: Cloud },
  { name: "Git Versioning", cat: "CI/CD Pipeline", icon: GitBranch },
];

function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    </svg>
  );
}

export function TechStackMarquee() {
  const row1Extended = [...ROW1_AI_ML, ...ROW1_AI_ML, ...ROW1_AI_ML];
  const row2Extended = [...ROW2_PLATFORM, ...ROW2_PLATFORM, ...ROW2_PLATFORM];

  return (
    <section id="section-14" className="w-full bg-[#F8F9F6] border-b border-[#E3E8DF] py-20 md:py-28 overflow-hidden relative">
      {/* Left and Right Edge Fade Gradients */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#F8F9F6] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#F8F9F6] to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          pill="Enterprise Architecture"
          title="Powered By"
          subtitle="The technology stack behind SANKET's intelligence pipeline."
          className="text-center mx-auto mb-12"
        />
      </div>

      {/* Row 1: AI / ML / Remote Sensing (Scrolling Left) */}
      <div className="mb-4">
        <div className="flex w-max animate-marquee-left gap-4 py-1">
          {row1Extended.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={`${item.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#E3E8DF] shadow-xs shrink-0 select-none group hover:border-[#C8EA3B] transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-[#213318] text-[#C8EA3B] flex items-center justify-center">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-sans font-bold text-[#1A2614]">
                    {item.name}
                  </div>
                  <div className="text-[10px] font-mono text-[#7E9473]">
                    {item.cat}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Platform / Infrastructure (Scrolling Right) */}
      <div>
        <div className="flex w-max animate-marquee-right gap-4 py-1">
          {row2Extended.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={`${item.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#F8F9F6] border border-[#E3E8DF] shadow-xs shrink-0 select-none group hover:border-[#C8EA3B] transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-white border border-[#E3E8DF] text-[#213318] flex items-center justify-center">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-sans font-semibold text-[#586650]">
                    {item.name}
                  </div>
                  <div className="text-[10px] font-mono text-[#7E9473]">
                    {item.cat}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
