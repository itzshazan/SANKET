"use client";

import React from "react";
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Globe,
  Server,
  Eye,
  Activity,
  Layers,
  BarChart3,
  Sparkles,
  Zap,
  TrendingUp,
  LineChart,
  Palette
} from "lucide-react";

function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    </svg>
  );
}

const STACK_COLUMNS = [
  {
    category: "Frontend & Spatial UI",
    badge: "Client Layer",
    color: "#5D7052",
    bg: "#EBF0E8",
    corner: "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem]",
    items: [
      { name: "React + Vite", icon: Code2 },
      { name: "Tailwind", icon: Palette },
      { name: "MapLibre", icon: Globe },
      { name: "Recharts", icon: BarChart3 },
    ],
  },
  {
    category: "Backend & Geospatial DB",
    badge: "Services Layer",
    color: "#C18C5D",
    bg: "#F9F1EB",
    corner: "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-[1.5rem] rounded-br-[1.5rem]",
    items: [
      { name: "Python", icon: Terminal },
      { name: "FastAPI", icon: Zap },
      { name: "PostgreSQL", icon: Database },
      { name: "PostGIS", icon: Layers },
      { name: "SQLAlchemy", icon: Server },
    ],
  },
  {
    category: "Machine Learning & AI",
    badge: "Physics AI",
    color: "#A85448",
    bg: "#FBF0EE",
    corner: "rounded-tl-[3rem] rounded-tr-[1.5rem] rounded-br-[3rem] rounded-bl-[1.5rem]",
    items: [
      { name: "XGBoost", icon: TrendingUp },
      { name: "LightGBM", icon: Cpu },
      { name: "PyTorch", icon: BrainIcon },
      { name: "Scikit-learn", icon: LineChart },
      { name: "OpenCV", icon: Eye },
      { name: "SHAP", icon: Activity },
    ],
  },
];

const ALL_TECH_PILLS = [
  { name: "React + Vite", cat: "Frontend", icon: Code2, color: "#5D7052" },
  { name: "Tailwind", cat: "Styling", icon: Palette, color: "#5D7052" },
  { name: "MapLibre", cat: "Spatial Map", icon: Globe, color: "#5D7052" },
  { name: "Recharts", cat: "Telemetry Viz", icon: BarChart3, color: "#5D7052" },
  { name: "Python", cat: "Backend Core", icon: Terminal, color: "#C18C5D" },
  { name: "FastAPI", cat: "Async API", icon: Zap, color: "#C18C5D" },
  { name: "PostgreSQL", cat: "Database", icon: Database, color: "#C18C5D" },
  { name: "PostGIS", cat: "Spatial DB", icon: Layers, color: "#C18C5D" },
  { name: "SQLAlchemy", cat: "ORM", icon: Server, color: "#C18C5D" },
  { name: "XGBoost", cat: "ML Booster", icon: TrendingUp, color: "#A85448" },
  { name: "LightGBM", cat: "Fast Gradient", icon: Cpu, color: "#A85448" },
  { name: "PyTorch", cat: "Neural Nets", icon: BrainIcon, color: "#A85448" },
  { name: "Scikit-learn", cat: "ML Pipeline", icon: LineChart, color: "#A85448" },
  { name: "OpenCV", cat: "Edge CV", icon: Eye, color: "#A85448" },
  { name: "SHAP", cat: "XAI Explainability", icon: Activity, color: "#A85448" },
];

export function TechStackMarquee() {
  return (
    <section id="section-14" className="w-full bg-[#F0EBE5]/40 py-16 sm:py-20 overflow-hidden relative border-b border-[#DED8CF]/70">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#5D7052] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Open Architecture Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#2C2C24]">
          Modern Geospatial & Machine Learning Stack
        </h2>
        <p className="mt-3 text-base text-[#78786C] font-normal leading-relaxed max-w-xl mx-auto">
          Scientific computing, geospatial databases, and deep neural vision fused into a unified risk intelligence engine.
        </p>
      </div>

      {/* 3 Compact Column Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {STACK_COLUMNS.map((col) => (
            <div
              key={col.category}
              className={`bg-[#FEFEFA] border border-[#DED8CF] p-6 sm:p-7 flex flex-col justify-between shadow-soft hover:shadow-float hover:-translate-y-1 transition-all duration-300 ${col.corner}`}
            >
              <div>
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-3 py-0.5 rounded-full text-xs font-bold"
                    style={{ backgroundColor: col.bg, color: col.color }}
                  >
                    {col.badge}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#2C2C24] mb-5">
                  {col.category}
                </h3>

                {/* Compact Tactile Pill Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {col.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FDFCF8] border border-[#DED8CF] hover:border-[#5D7052] hover:bg-white hover:scale-105 transition-all duration-200 shadow-2xs group cursor-default"
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: col.bg, color: col.color }}
                        >
                          <ItemIcon className="w-3 h-3" />
                        </div>
                        <span className="font-serif font-bold text-xs text-[#2C2C24]">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-[#DED8CF]/60 text-[11px] font-bold uppercase tracking-wider text-[#78786C]">
                {col.items.length} Modules Integrated
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Moving Marquee Ticker */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#F0EBE5]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#F0EBE5]/90 to-transparent z-10 pointer-events-none" />

        <div className="marquee-container flex w-full overflow-hidden select-none">
          <div className="flex shrink-0 gap-3.5 sm:gap-5 animate-marquee-left py-1.5 pr-3.5 sm:pr-5">
            {ALL_TECH_PILLS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={`pill-t1-${item.name}-${idx}`}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FEFEFA] border border-[#DED8CF] shadow-2xs text-[#2C2C24] hover:border-[#5D7052] hover:scale-105 transition-all duration-200 shrink-0 group"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-serif font-bold text-[#2C2C24]">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex shrink-0 gap-3.5 sm:gap-5 animate-marquee-left py-1.5 pr-3.5 sm:pr-5" aria-hidden="true">
            {ALL_TECH_PILLS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={`pill-t2-${item.name}-${idx}`}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FEFEFA] border border-[#DED8CF] shadow-2xs text-[#2C2C24] hover:border-[#5D7052] hover:scale-105 transition-all duration-200 shrink-0 group"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-serif font-bold text-[#2C2C24]">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
