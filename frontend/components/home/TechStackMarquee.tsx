"use client";

import React from "react";
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Globe,
  Server,
  Cloud,
  Eye,
  Satellite,
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
  return (
    <section id="section-14" className="w-full bg-[#0d0d0d] py-20 md:py-28 overflow-hidden relative border-b border-[#262626]">
      {/* Side Fade Gradients */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
          <span>Open Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
          Modern Geospatial & Machine Learning Stack
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#bbbbbb] font-light leading-relaxed">
          Built with battle-tested open-source scientific computing and scalable cloud infrastructure.
        </p>
      </div>

      {/* Row 1: Left Scroll Track */}
      <div className="marquee-container flex w-full overflow-hidden select-none mb-4">
        <div className="flex shrink-0 gap-4 sm:gap-6 animate-marquee-left py-2 pr-4 sm:pr-6">
          {ROW1_AI_ML.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={`row1-t1-${item.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-3 bg-[#1a1a1a] border border-[#3c3c3c] text-white hover:border-white transition-all duration-150 shrink-0 group"
              >
                <div className="w-7 h-7 bg-[#0d0d0d] text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider block text-white">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#7e7e7e]">
                    {item.cat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex shrink-0 gap-4 sm:gap-6 animate-marquee-left py-2 pr-4 sm:pr-6" aria-hidden="true">
          {ROW1_AI_ML.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={`row1-t2-${item.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-3 bg-[#1a1a1a] border border-[#3c3c3c] text-white hover:border-white transition-all duration-150 shrink-0 group"
              >
                <div className="w-7 h-7 bg-[#0d0d0d] text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider block text-white">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#7e7e7e]">
                    {item.cat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Right Scroll Track */}
      <div className="marquee-container flex w-full overflow-hidden select-none">
        <div className="flex shrink-0 gap-4 sm:gap-6 animate-marquee-right py-2 pr-4 sm:pr-6">
          {ROW2_PLATFORM.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={`row2-t1-${item.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-3 bg-[#1a1a1a] border border-[#3c3c3c] text-white hover:border-white transition-all duration-150 shrink-0 group"
              >
                <div className="w-7 h-7 bg-[#0d0d0d] text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider block text-white">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#7e7e7e]">
                    {item.cat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex shrink-0 gap-4 sm:gap-6 animate-marquee-right py-2 pr-4 sm:pr-6" aria-hidden="true">
          {ROW2_PLATFORM.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={`row2-t2-${item.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-3 bg-[#1a1a1a] border border-[#3c3c3c] text-white hover:border-white transition-all duration-150 shrink-0 group"
              >
                <div className="w-7 h-7 bg-[#0d0d0d] text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider block text-white">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#7e7e7e]">
                    {item.cat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
