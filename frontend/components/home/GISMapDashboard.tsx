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
    { id: "z1", name: "Zone 1 — Chamoli Valley", risk: "Watch", score: 0.54, color: "#EAB308", rainfall: "88 mm", elev: "2,140m", coords: "30.41° N, 79.32° E" },
    { id: "z2", name: "Zone 2 — Rishikesh-Badrinath NH", risk: "Warning", score: 0.72, color: "#1C69D4", rainfall: "116 mm", elev: "1,820m", coords: "30.34° N, 78.96° E" },
    { id: "z3", name: "Zone 3 — Munsiari Escarpment", risk: "Normal", score: 0.28, color: "#0066B1", rainfall: "42 mm", elev: "2,290m", coords: "30.06° N, 80.24° E" },
    { id: "z4", name: "Zone 4 — Kedarnath Corridor", risk: "Danger", score: 0.89, color: "#E22718", rainfall: "158 mm", elev: "2,650m", coords: "30.73° N, 79.06° E" },
  ];

  const currentZone = riskZones.find((z) => z.name === selectedZone) || riskZones[3];

  return (
    <div className="w-full bg-[#1a1a1a] border border-[#3c3c3c] shadow-2xl overflow-hidden font-sans text-white text-left relative">
      {/* 4px M Tricolor Accent Bar */}
      <div className="flex h-[3px] w-full">
        <div className="w-1/3 bg-[#0066b1]" />
        <div className="w-1/3 bg-[#1c69d4]" />
        <div className="w-1/3 bg-[#e22718]" />
      </div>

      <div className="p-4 sm:p-6">
        {/* Top Application Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-[#262626]">
          {/* Left: Engine Status */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#0d0d0d] border border-[#3c3c3c] flex items-center justify-center text-white">
              <Satellite className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[1.5px] text-white block">
                SANKET GIS Spatial Risk Engine v3.2
              </span>
              <span className="text-[10px] text-[#7e7e7e] font-light">
                Sentinel-2 InSAR Doppler Telemetry · 10m DEM Grid
              </span>
            </div>
          </div>

          {/* Center: Layer Selector Buttons (BMW M Sharp Rectangular Tabs) */}
          <div className="flex items-center gap-1 p-1 bg-[#0d0d0d] border border-[#262626]">
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
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-[1px] transition-all duration-150 cursor-pointer ${
                  activeLayer === layer.id
                    ? "bg-white text-black"
                    : "text-[#bbbbbb] hover:text-white"
                }`}
              >
                {layer.label}
              </button>
            ))}
          </div>

          {/* Right: Live Stream Pulse */}
          <div className="flex items-center gap-2 px-3 py-1 bg-[#0d0d0d] border border-[#3c3c3c] text-xs font-mono text-[#e6e6e6]">
            <span className="w-2 h-2 rounded-full bg-[#e22718] animate-pulse" />
            <span className="tracking-wider">LIVE TELEMETRY</span>
          </div>
        </div>

        {/* Main Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Side: Map Interactive Canvas Viewport (Span 8) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative h-[320px] sm:h-[380px] w-full bg-[#000000] overflow-hidden p-4 flex flex-col justify-between text-white border border-[#262626]">
              {/* Top Overlay Badge */}
              <div className="flex items-center justify-between z-10">
                <div className="px-3 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono text-[#bbbbbb] uppercase tracking-wider">
                  Sector: {currentZone.name}
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-mono font-bold text-white uppercase tracking-wider" style={{ backgroundColor: currentZone.color }}>
                    Risk: {currentZone.risk} ({Math.round(currentZone.score * 100)}%)
                  </span>
                </div>
              </div>

              {/* Vector Topography Grid */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
                <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
                  <path d="M 0 150 Q 150 40 300 130 T 600 90" fill="none" stroke="#1c69d4" strokeWidth="2" strokeDasharray="6 4" />
                  <path d="M 0 190 Q 200 110 350 200 T 600 140" fill="none" stroke="#0066b1" strokeWidth="1.5" />
                  <path d="M 0 240 Q 120 180 300 230 T 600 180" fill="none" stroke="#3c3c3c" strokeWidth="1" />
                </svg>
              </div>

              {/* Hotspot Indicator with M Red */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#e22718]/20 animate-ping absolute" />
                <div className="w-6 h-6 rounded-full bg-[#e22718] shadow-[0_0_12px_rgba(226,39,24,0.9)] flex items-center justify-center text-white text-[10px] font-bold">
                  !
                </div>
                <span className="text-[11px] font-mono font-bold text-white bg-[#1a1a1a] border border-[#e22718] px-2.5 py-0.5 mt-1.5 uppercase tracking-wider">
                  Scarp Shear Slip (FoS: 0.91)
                </span>
              </div>

              {/* Bottom Controls inside Viewport */}
              <div className="flex items-center justify-between z-10 text-xs font-mono text-[#7e7e7e]">
                <div className="p-2 bg-[#1a1a1a] border border-[#262626]">
                  Coords: {currentZone.coords} · Elev: {currentZone.elev}
                </div>
                <div className="p-2 bg-[#1a1a1a] border border-[#262626]">
                  IMD 24h Rain: {rainfall24h} mm
                </div>
              </div>
            </div>

            {/* Zone Selector Cells */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {riskZones.map((zone) => {
                const isSelected = zone.name === selectedZone;
                return (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZone(zone.name)}
                    className={`p-3 text-left transition-all duration-150 cursor-pointer border ${
                      isSelected
                        ? "bg-[#262626] border-white text-white"
                        : "bg-[#0d0d0d] border-[#262626] hover:bg-[#1a1a1a] text-[#bbbbbb]"
                    }`}
                  >
                    <div className="text-xs font-bold uppercase tracking-wider truncate text-white">
                      {zone.name.split("—")[1] || zone.name}
                    </div>
                    <div className="text-[11px] font-mono mt-1 font-bold" style={{ color: zone.color }}>
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
            <div className="p-4 bg-[#0d0d0d] border border-[#262626] space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[1.5px] text-white">Pore Water Pressure</span>
                <span className="text-xs font-mono font-bold text-white">{moistureLevel}%</span>
              </div>
              <div className="h-1.5 bg-black overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#0066b1] via-[#1c69d4] to-[#e22718] transition-all duration-500"
                  style={{ width: `${Math.min(100, moistureLevel)}%` }}
                />
              </div>
              <div className="text-xs text-[#7e7e7e] font-light leading-relaxed">
                Hydrostatic pressure reduces slope shear friction beyond 75% saturation limit.
              </div>
            </div>

            {/* Spec Cell 2: Surface Displacement */}
            <div className="p-4 bg-[#0d0d0d] border border-[#262626] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[1.5px] text-white">InSAR Displacement</span>
                <span className="text-xs font-mono font-bold text-[#e22718]">+14.2 mm / 6d</span>
              </div>
              <div className="text-xs text-[#7e7e7e] font-light leading-relaxed">
                Downslope line-of-sight scarp creep detected along NH-58 kilometer marker 142.
              </div>
            </div>

            {/* Spec Cell 3: Common Alert Status */}
            <div className="p-4 bg-[#0d0d0d] border border-[#262626] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[1.5px] text-white">CAP Protocol</span>
                <span className="px-2 py-0.5 bg-white text-black text-[10px] font-mono font-bold uppercase tracking-wider">
                  ACTIVE
                </span>
              </div>
              <p className="text-xs text-[#7e7e7e] font-light leading-relaxed">
                Multi-channel broadcast ready: SMS, District Siren, BRO Command Center feeds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
