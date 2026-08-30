"use client";

import React from "react";
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

function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    </svg>
  );
}

const ROW1_AI_ML = [
  { name: "Python", cat: "Core Engine", icon: Terminal },
  { name: "TensorFlow", cat: "Deep Learning", icon: Cpu },
  { name: "PyTorch", cat: "Neural Nets", icon: BrainIcon },
  { name: "Scikit-learn", cat: "Risk Classifier", icon: Code2 },
  { name: "OpenCV", cat: "Image Analysis", icon: Eye },
  { name: "Sentinel-2", cat: "ESA Earth Obs", icon: Satellite },
  { name: "InSAR Radar", cat: "Surface Creep", icon: Satellite },
  { name: "Rasterio", cat: "Geospatial Rasters", icon: Database },
  { name: "GeoPandas", cat: "Spatial Analysis", icon: Globe },
];

const ROW2_PLATFORM = [
  { name: "FastAPI", cat: "Async API", icon: Server },
  { name: "PostgreSQL", cat: "Relational DB", icon: Database },
  { name: "PostGIS", cat: "Spatial Extension", icon: Globe },
  { name: "Next.js", cat: "App Router", icon: Server },
  { name: "React 19", cat: "Web UI", icon: Code2 },
  { name: "MapLibre GL", cat: "Vector Tiles", icon: Globe },
  { name: "Leaflet", cat: "Interactive Maps", icon: Globe },
  { name: "Docker", cat: "Microservices", icon: Box },
  { name: "Vercel Edge", cat: "CDN Network", icon: Cloud },
];

export function TechStackMarquee() {
  const row1Extended = [...ROW1_AI_ML, ...ROW1_AI_ML];
  const row2Extended = [...ROW2_PLATFORM, ...ROW2_PLATFORM];

  return (
    <section id="section-14" className="w-full bg-[#E0E5EC] py-20 md:py-28 overflow-hidden relative">
      {/* Side Fade Gradients */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#E0E5EC] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#E0E5EC] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF] mb-4">
          Open Architecture
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#3D4852] tracking-tight">
          Modern Geospatial & Machine Learning Stack
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#6B7280]">
          Built with battle-tested open-source scientific computing and scalable cloud infrastructure.
        </p>
      </div>

      {/* Row 1: AI / Geospatial Left Scroll */}
      <div className="flex w-max animate-marquee-left gap-4 sm:gap-6 py-2 mb-4">
        {row1Extended.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#E0E5EC] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.7)] text-[#3D4852] hover:text-[#6C63FF] transition-all duration-300 shrink-0 select-none group"
            >
              <div className="w-8 h-8 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#6C63FF]">
                <IconComponent className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs sm:text-sm font-sans font-bold tracking-tight block text-[#3D4852]">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-[#6B7280]">
                  {item.cat}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Row 2: Platform / Cloud Right Scroll */}
      <div className="flex w-max animate-marquee-right gap-4 sm:gap-6 py-2">
        {row2Extended.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#E0E5EC] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.7)] text-[#3D4852] hover:text-[#38B2AC] transition-all duration-300 shrink-0 select-none group"
            >
              <div className="w-8 h-8 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#38B2AC]">
                <IconComponent className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs sm:text-sm font-sans font-bold tracking-tight block text-[#3D4852]">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-[#6B7280]">
                  {item.cat}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
