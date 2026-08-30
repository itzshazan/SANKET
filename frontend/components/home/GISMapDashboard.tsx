"use client";

import React, { useState, useEffect } from "react";
import {
  Satellite,
  Activity,
  AlertTriangle,
  Compass,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RefreshCw,
  Eye,
  Sliders,
  CheckCircle2
} from "lucide-react";

export function GISMapDashboard() {
  const [activeLayer, setActiveLayer] = useState<"susceptibility" | "rainfall" | "satellite" | "sensors">("susceptibility");
  const [selectedZone, setSelectedZone] = useState<string>("Zone 4 — Kedarnath Corridor");
  const [moistureLevel, setMoistureLevel] = useState<number>(78);
  const [rainfall24h, setRainfall24h] = useState<number>(142);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoistureLevel((prev) => +(prev + (Math.random() * 0.8 - 0.4)).toFixed(1));
      setRainfall24h((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const riskZones = [
    { id: "z1", name: "Zone 1 — Chamoli Valley", risk: "Watch", score: 0.54, color: "#C18C5D", rainfall: "88 mm", elev: "2,140m", coords: "30.41° N, 79.32° E" },
    { id: "z2", name: "Zone 2 — Rishikesh-Badrinath NH", risk: "Warning", score: 0.72, color: "#AB774B", rainfall: "116 mm", elev: "1,820m", coords: "30.34° N, 78.96° E" },
    { id: "z3", name: "Zone 3 — Munsiari Escarpment", risk: "Normal", score: 0.28, color: "#5D7052", rainfall: "42 mm", elev: "2,290m", coords: "30.06° N, 80.24° E" },
    { id: "z4", name: "Zone 4 — Kedarnath Corridor", risk: "Danger", score: 0.89, color: "#A85448", rainfall: "158 mm", elev: "2,650m", coords: "30.73° N, 79.06° E" },
  ];

  const currentZone = riskZones.find((z) => z.name === selectedZone) || riskZones[3];

  return (
    <div className="w-full bg-[#FEFEFA] border border-[#DED8CF] rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(93,112,82,0.15)] overflow-hidden font-sans text-[#2C2C24] text-left relative p-6 sm:p-8">
      {/* Top Application Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#DED8CF]/70">
        {/* Left: Engine Status */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#5D7052]/10 flex items-center justify-center text-[#5D7052]">
            <Satellite className="w-5 h-5" />
          </div>
          <div>
            <span className="text-base font-serif font-bold text-[#2C2C24] block">
              SANKET GIS Spatial Risk Engine
            </span>
            <span className="text-xs text-[#78786C]">
              Sentinel-2 InSAR Doppler Telemetry · 10m DEM Grid
            </span>
          </div>
        </div>

        {/* Center: Layer Selector Buttons (Organic Pill Tabs) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F0EBE5] rounded-full border border-[#DED8CF]/60">
          {(
            [
              { id: "susceptibility", label: "Pore Risk" },
              { id: "rainfall", label: "Precipitation" },
              { id: "satellite", label: "InSAR Radar" },
              { id: "sensors", label: "IoT Sensors" },
            ] as const
          ).map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                activeLayer === layer.id
                  ? "bg-[#5D7052] text-[#F3F4F1] shadow-xs"
                  : "text-[#4A4A40] hover:text-[#5D7052]"
              }`}
            >
              {layer.label}
            </button>
          ))}
        </div>

        {/* Right: Live Stream Pulse */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full text-xs font-bold text-[#5D7052]">
          <span className="w-2 h-2 rounded-full bg-[#5D7052] animate-pulse" />
          <span className="tracking-wide">LIVE TELEMETRY</span>
        </div>
      </div>

      {/* Main Grid Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Map Interactive Canvas Viewport (Span 8) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="relative h-[320px] sm:h-[380px] w-full bg-[#2C2C24] rounded-2xl overflow-hidden p-5 flex flex-col justify-between text-white border border-[#DED8CF]">
            {/* Top Overlay Badge */}
            <div className="flex items-center justify-between z-10">
              <div className="px-3.5 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-xs font-mono text-white">
                Sector: {currentZone.name}
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-wider" style={{ backgroundColor: currentZone.color }}>
                  Risk: {currentZone.risk} ({Math.round(currentZone.score * 100)}%)
                </span>
              </div>
            </div>

            {/* Vector Topography Grid */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
                <path d="M 0 150 Q 150 40 300 130 T 600 90" fill="none" stroke="#7B926E" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M 0 190 Q 200 110 350 200 T 600 140" fill="none" stroke="#C18C5D" strokeWidth="1.5" />
                <path d="M 0 240 Q 120 180 300 230 T 600 180" fill="none" stroke="#E6DCCD" strokeWidth="1" />
              </svg>
            </div>

            {/* Hotspot Indicator */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#A85448]/30 animate-ping absolute" />
              <div className="w-7 h-7 rounded-full bg-[#A85448] shadow-[0_0_15px_rgba(168,84,72,0.8)] flex items-center justify-center text-white text-xs font-bold">
                !
              </div>
              <span className="text-xs font-bold text-white bg-black/70 backdrop-blur-sm border border-[#A85448] px-3 py-1 rounded-full mt-2">
                Scarp Shear Slip (FoS: 0.91)
              </span>
            </div>

            {/* Bottom Controls inside Viewport */}
            <div className="flex items-center justify-between z-10 text-xs font-mono text-[#E6DCCD]">
              <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                Coords: {currentZone.coords} · Elev: {currentZone.elev}
              </div>
              <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                IMD Rain: {rainfall24h} mm
              </div>
            </div>
          </div>

          {/* Zone Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {riskZones.map((zone) => {
              const isSelected = zone.name === selectedZone;
              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.name)}
                  className={`p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-[#EBF0E8] border-[#5D7052] text-[#2C2C24] shadow-xs"
                      : "bg-[#FDFCF8] border-[#DED8CF] hover:bg-[#F0EBE5] text-[#4A4A40]"
                  }`}
                >
                  <div className="text-xs font-bold font-serif truncate text-[#2C2C24]">
                    {zone.name.split("—")[1] || zone.name}
                  </div>
                  <div className="text-xs mt-1 font-bold" style={{ color: zone.color }}>
                    {zone.risk} · {Math.round(zone.score * 100)}%
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Technical Spec Cells (Span 4) */}
        <div className="lg:col-span-4 space-y-3">
          {/* Spec Cell 1: Pore Water Saturation */}
          <div className="p-5 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF] space-y-2.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5D7052]">Pore Water Pressure</span>
              <span className="text-xs font-bold text-[#2C2C24]">{moistureLevel}%</span>
            </div>
            <div className="h-2 bg-[#F0EBE5] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#5D7052] to-[#C18C5D] rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, moistureLevel)}%` }}
              />
            </div>
            <div className="text-xs text-[#78786C] leading-relaxed">
              Hydrostatic pressure reduces slope shear friction beyond 75% saturation limit.
            </div>
          </div>

          {/* Spec Cell 2: Surface Displacement */}
          <div className="p-5 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF] space-y-2 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C18C5D]">InSAR Displacement</span>
              <span className="text-xs font-bold text-[#A85448]">+14.2 mm / 6d</span>
            </div>
            <div className="text-xs text-[#78786C] leading-relaxed">
              Downslope line-of-sight scarp creep detected along NH-58 kilometer marker 142.
            </div>
          </div>

          {/* Spec Cell 3: Common Alert Status */}
          <div className="p-5 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF] space-y-2 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5D7052]">CAP Protocol</span>
              <span className="px-2.5 py-0.5 bg-[#EBF0E8] text-[#5D7052] rounded-full text-[11px] font-bold">
                ACTIVE
              </span>
            </div>
            <p className="text-xs text-[#78786C] leading-relaxed">
              Multi-channel broadcast ready: SMS, District Siren, BRO Command Center feeds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
