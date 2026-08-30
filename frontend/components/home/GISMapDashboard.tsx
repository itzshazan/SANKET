"use client";

import React, { useState, useEffect } from "react";
import {
  Layers,
  MapPin,
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

  // Live telemetry simulation tick
  useEffect(() => {
    const interval = setInterval(() => {
      setMoistureLevel((prev) => +(prev + (Math.random() * 0.8 - 0.4)).toFixed(1));
      setRainfall24h((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const riskZones = [
    { id: "z1", name: "Zone 1 — Chamoli Valley", risk: "Watch", score: 0.54, color: "#D69E2E", rainfall: "88 mm", elev: "2,140m", coords: "30.41° N, 79.32° E" },
    { id: "z2", name: "Zone 2 — Rishikesh-Badrinath NH", risk: "Warning", score: 0.72, color: "#DD6B20", rainfall: "116 mm", elev: "1,820m", coords: "30.34° N, 78.96° E" },
    { id: "z3", name: "Zone 3 — Munsiari Escarpment", risk: "Normal", score: 0.28, color: "#38B2AC", rainfall: "42 mm", elev: "2,290m", coords: "30.06° N, 80.24° E" },
    { id: "z4", name: "Zone 4 — Kedarnath Corridor", risk: "Danger", score: 0.89, color: "#E53E3E", rainfall: "158 mm", elev: "2,650m", coords: "30.73° N, 79.06° E" },
  ];

  const currentZone = riskZones.find((z) => z.name === selectedZone) || riskZones[3];

  return (
    <div className="w-full rounded-[32px] bg-[#E0E5EC] shadow-[12px_12px_24px_rgba(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.8)] overflow-hidden font-sans p-4 sm:p-6 text-[#3D4852]">
      {/* Top Application Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-[#A3B1C6]/30">
        {/* Left: Engine Status */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#6C63FF]">
            <Satellite className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-[#3D4852] block">
              SANKET GIS Spatial Risk Engine
            </span>
            <span className="text-[10px] text-[#6B7280]">
              Active Sentinel-2 InSAR Sync · 10m DEM
            </span>
          </div>
        </div>

        {/* Center: Tactile Layer Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)]">
          {(
            [
              { id: "susceptibility", label: "Pore Risk" },
              { id: "rainfall", label: "Precipitation" },
              { id: "satellite", label: "InSAR Displacement" },
              { id: "sensors", label: "IoT Sensors" },
            ] as const
          ).map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 cursor-pointer ${
                activeLayer === layer.id
                  ? "bg-[#6C63FF] text-white shadow-[3px_3px_6px_rgba(108,99,255,0.4)]"
                  : "text-[#6B7280] hover:text-[#3D4852]"
              }`}
            >
              {layer.label}
            </button>
          ))}
        </div>

        {/* Right: Live Stream Pulse */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono text-[#38B2AC]">
          <span className="w-2 h-2 rounded-full bg-[#38B2AC] animate-pulse" />
          <span>LIVE TELEMETRY</span>
        </div>
      </div>

      {/* Main Grid Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Map Interactive Canvas Viewport (Span 8) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="relative h-[320px] sm:h-[400px] w-full rounded-2xl bg-[#E0E5EC] shadow-[inset_8px_8px_16px_rgba(163,177,198,0.7),inset_-8px_-8px_16px_rgba(255,255,255,0.6)] overflow-hidden border-none p-4 flex flex-col justify-between">
            {/* Top Overlay Badge */}
            <div className="flex items-center justify-between z-10">
              <div className="px-3.5 py-1.5 rounded-xl bg-[#E0E5EC]/90 shadow-[4px_4px_8px_rgba(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.6)] text-xs font-mono font-bold text-[#3D4852] backdrop-blur-sm">
                Sector: {currentZone.name}
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold text-white shadow-sm" style={{ backgroundColor: currentZone.color }}>
                  Risk: {currentZone.risk} ({Math.round(currentZone.score * 100)}%)
                </span>
              </div>
            </div>

            {/* Visual Topographic Mesh Representation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
                <path d="M 0 150 Q 150 40 300 130 T 600 90" fill="none" stroke="#6C63FF" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M 0 190 Q 200 110 350 200 T 600 140" fill="none" stroke="#38B2AC" strokeWidth="1.5" />
                <path d="M 0 240 Q 120 180 300 230 T 600 180" fill="none" stroke="#A3B1C6" strokeWidth="1" />
              </svg>
            </div>

            {/* Hotspot Indicators */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#E53E3E]/20 animate-ping absolute" />
              <div className="w-6 h-6 rounded-full bg-[#E53E3E] shadow-[0_0_12px_rgba(229,62,62,0.6)] flex items-center justify-center text-white text-[10px] font-bold">
                !
              </div>
              <span className="text-[11px] font-mono font-bold text-[#E53E3E] bg-[#E0E5EC] px-2 py-0.5 rounded-md shadow-[2px_2px_4px_rgba(163,177,198,0.6)] mt-1">
                Scarp Shear Slip (FoS: 0.91)
              </span>
            </div>

            {/* Bottom Controls inside Viewport */}
            <div className="flex items-center justify-between z-10 text-xs font-mono text-[#6B7280]">
              <div className="p-2 rounded-xl bg-[#E0E5EC] shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.6)]">
                Coords: {currentZone.coords} · Elev: {currentZone.elev}
              </div>
              <div className="p-2 rounded-xl bg-[#E0E5EC] shadow-[3px_3px_6px_rgba(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.6)]">
                IMD 24h Rain: {rainfall24h} mm
              </div>
            </div>
          </div>

          {/* Zone Selector Pods */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {riskZones.map((zone) => {
              const isSelected = zone.name === selectedZone;
              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.name)}
                  className={`p-3 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] border-l-4"
                      : "bg-[#E0E5EC] shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:shadow-[7px_7px_14px_rgba(163,177,198,0.7)]"
                  }`}
                  style={{ borderLeftColor: isSelected ? zone.color : "transparent" }}
                >
                  <div className="text-[11px] font-bold text-[#3D4852] truncate">
                    {zone.name.split("—")[1] || zone.name}
                  </div>
                  <div className="text-[10px] font-mono mt-1" style={{ color: zone.color }}>
                    {zone.risk} · {Math.round(zone.score * 100)}%
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Tactile Telemetry Pods (Span 4) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Telemetry Pod 1: Pore Water Saturation */}
          <div className="p-5 rounded-2xl bg-[#E0E5EC] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.6)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#3D4852]">Pore Water Saturation</span>
              <span className="text-xs font-mono font-bold text-[#6C63FF]">{moistureLevel}%</span>
            </div>
            {/* Sunken Progress Bar */}
            <div className="h-3 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.7),inset_-2px_-2px_4px_rgba(255,255,255,0.6)] overflow-hidden p-0.5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#38B2AC] via-[#D69E2E] to-[#E53E3E] transition-all duration-500"
                style={{ width: `${Math.min(100, moistureLevel)}%` }}
              />
            </div>
            <div className="text-[11px] text-[#6B7280]">
              Threshold: Critical at &gt;75% saturation. Hydrostatic pressure reduces friction angle by 34%.
            </div>
          </div>

          {/* Telemetry Pod 2: Surface Displacement */}
          <div className="p-5 rounded-2xl bg-[#E0E5EC] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.6)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#3D4852]">InSAR Velocity</span>
              <span className="text-xs font-mono font-bold text-[#E53E3E]">+14.2 mm / 6d</span>
            </div>
            <div className="text-[11px] text-[#6B7280]">
              Downslope line-of-sight scarp creep detected along NH-58 kilometer marker 142.
            </div>
          </div>

          {/* Telemetry Pod 3: Common Alert Status */}
          <div className="p-5 rounded-2xl bg-[#E0E5EC] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.6)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#3D4852]">CAP Dispatch Ready</span>
              <span className="px-2 py-0.5 rounded-md bg-[#38B2AC]/20 text-[#38B2AC] text-[10px] font-mono font-bold">
                ACTIVE
              </span>
            </div>
            <p className="text-[11px] text-[#6B7280]">
              Automated multi-channel broadcast enabled: SMS, District Siren, BRO Command Center feeds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
