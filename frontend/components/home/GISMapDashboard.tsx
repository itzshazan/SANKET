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
  const [riskScore, setRiskScore] = useState<number>(0.84);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // Live telemetry simulation tick
  useEffect(() => {
    const interval = setInterval(() => {
      setMoistureLevel((prev) => +(prev + (Math.random() * 0.8 - 0.4)).toFixed(1));
      setRainfall24h((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const riskZones = [
    { id: "z1", name: "Zone 1 — Chamoli Valley", risk: "Watch", score: 0.54, color: "#F5C518", rainfall: "88 mm", elev: "2,140m", coords: "30.41° N, 79.32° E" },
    { id: "z2", name: "Zone 2 — Rishikesh-Badrinath NH", risk: "Warning", score: 0.72, color: "#F07B20", rainfall: "116 mm", elev: "1,820m", coords: "30.34° N, 78.96° E" },
    { id: "z3", name: "Zone 3 — Munsiari Escarpment", risk: "Normal", score: 0.28, color: "#C8EA3B", rainfall: "42 mm", elev: "2,290m", coords: "30.06° N, 80.24° E" },
    { id: "z4", name: "Zone 4 — Kedarnath Corridor", risk: "Danger", score: 0.89, color: "#E03030", rainfall: "158 mm", elev: "2,650m", coords: "30.73° N, 79.06° E" },
  ];

  const currentZone = riskZones.find((z) => z.name === selectedZone) || riskZones[3];

  return (
    <div className="w-full rounded-2xl md:rounded-3xl bg-[#1A2614] border border-[#37502B] shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(200,234,59,0.06)] overflow-hidden font-sans">
      {/* Top Application Bar */}
      <div className="bg-[#213318] border-b border-[#37502B] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Window Controls & Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E03030]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5C518]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8EA3B]" />
          </div>
          <span className="text-xs font-mono font-semibold text-white flex items-center gap-2">
            <Satellite className="w-3.5 h-3.5 text-[#C8EA3B]" /> SANKET GIS Spatial Risk Engine v3.2
          </span>
        </div>

        {/* Center/Right: Layer Switchers */}
        <div className="flex items-center gap-1 bg-[#1A2614] p-1 rounded-lg border border-[#37502B] text-xs font-mono">
          <button
            onClick={() => setActiveLayer("susceptibility")}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeLayer === "susceptibility"
                ? "bg-[#C8EA3B] text-[#1A2614] font-bold shadow-xs"
                : "text-[#C5D7BD] hover:text-white"
            }`}
          >
            AI Susceptibility
          </button>
          <button
            onClick={() => setActiveLayer("rainfall")}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeLayer === "rainfall"
                ? "bg-[#C8EA3B] text-[#1A2614] font-bold shadow-xs"
                : "text-[#C5D7BD] hover:text-white"
            }`}
          >
            Rainfall Feed
          </button>
          <button
            onClick={() => setActiveLayer("satellite")}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeLayer === "satellite"
                ? "bg-[#C8EA3B] text-[#1A2614] font-bold shadow-xs"
                : "text-[#C5D7BD] hover:text-white"
            }`}
          >
            Sentinel-2 NIR
          </button>
          <button
            onClick={() => setActiveLayer("sensors")}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeLayer === "sensors"
                ? "bg-[#C8EA3B] text-[#1A2614] font-bold shadow-xs"
                : "text-[#C5D7BD] hover:text-white"
            }`}
          >
            IoT Nodes
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#C8EA3B]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8EA3B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8EA3B]"></span>
          </span>
          <span>SYNC ACTIVE</span>
        </div>
      </div>

      {/* Main Interactive Workspace Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] md:min-h-[500px]">
        {/* Left Side: Interactive Map Viewport (Span 8) */}
        <div className="lg:col-span-8 relative bg-[#121A0E] overflow-hidden flex items-center justify-center p-4">
          {/* Topographic Contour Background Mesh */}
          <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(55,80,43,0.4)" strokeWidth="0.75" />
              </pattern>
              <linearGradient id="risk-danger-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(224,48,48,0.4)" />
                <stop offset="60%" stopColor="rgba(240,123,32,0.2)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />

            {/* Topographic Contour Curves */}
            <path d="M -50 120 Q 150 40 350 140 T 750 120 T 1150 90" fill="none" stroke="#37502B" strokeWidth="1.5" />
            <path d="M -50 200 Q 180 140 400 240 T 800 200 T 1150 180" fill="none" stroke="#37502B" strokeWidth="1.2" />
            <path d="M -50 300 Q 220 220 460 340 T 850 280 T 1150 260" fill="none" stroke="#37502B" strokeWidth="1.5" />
            <path d="M -50 400 Q 200 320 480 430 T 900 380 T 1150 350" fill="none" stroke="#37502B" strokeWidth="1" />

            {/* Critical Risk Zone Overlay (Kedarnath Corridor) */}
            <ellipse cx="62%" cy="42%" rx="130" ry="85" fill="url(#risk-danger-glow)" />
            <path d="M 480 180 Q 560 140 680 210 T 780 250" fill="none" stroke="#E03030" strokeWidth="2.5" strokeDasharray="4 4" className="animate-pulse" />

            {/* Intermediate Risk Warning Zone (Rishikesh NH) */}
            <circle cx="34%" cy="65%" r="65" fill="rgba(240,123,32,0.18)" />
            <circle cx="34%" cy="65%" r="65" stroke="#F07B20" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>

          {/* Map Overlay Pins & Interactive Hotspots */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            {/* Top Stats Chips on Map */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div className="bg-[#1A2614]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#37502B] text-white flex items-center gap-2">
                <span className="text-[#7E9473]">BOUNDS:</span>
                <span className="text-[#C8EA3B]">Himalayan Sub-Region IV</span>
              </div>
              <div className="bg-[#1A2614]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#37502B] text-[#C5D7BD] flex items-center gap-3">
                <span>ELEV: <strong className="text-white">1,400m – 3,850m</strong></span>
                <span>SLOPE: <strong className="text-white">&gt; 38° CRITICAL</strong></span>
              </div>
            </div>

            {/* Center Hotspot Markers */}
            <div className="relative w-full h-[260px] my-auto">
              {riskZones.map((zone, idx) => {
                const isSelected = selectedZone === zone.name;
                const positions = [
                  { top: "60%", left: "70%" },
                  { top: "65%", left: "30%" },
                  { top: "25%", left: "20%" },
                  { top: "35%", left: "60%" },
                ];
                const pos = positions[idx];

                return (
                  <div
                    key={zone.id}
                    onClick={() => setSelectedZone(zone.name)}
                    style={{ top: pos.top, left: pos.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  >
                    <div className="relative flex items-center justify-center">
                      <span
                        className="animate-ping absolute inline-flex h-8 w-8 rounded-full opacity-60"
                        style={{ backgroundColor: zone.color }}
                      />
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center border-2 transition-transform duration-200 group-hover:scale-125 ${
                          isSelected ? "scale-110 shadow-[0_0_16px_rgba(200,234,59,0.8)]" : ""
                        }`}
                        style={{ backgroundColor: "#1A2614", borderColor: zone.color }}
                      >
                        <AlertTriangle className="w-3.5 h-3.5" style={{ color: zone.color }} />
                      </div>

                      {/* Tooltip on pin */}
                      <div
                        className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#213318] border border-[#37502B] text-[11px] font-mono whitespace-nowrap text-white shadow-xl transition-all ${
                          isSelected ? "opacity-100 scale-100" : "opacity-0 group-hover:opacity-100 scale-95"
                        }`}
                      >
                        <span className="font-bold">{zone.name.split("—")[0]}</span>:{" "}
                        <span style={{ color: zone.color }} className="font-bold uppercase">
                          {zone.risk} ({Math.round(zone.score * 100)}%)
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom GIS Navigation & Legend Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[#1A2614]/90 backdrop-blur-md p-2.5 rounded-xl border border-[#37502B]">
              <div className="flex items-center gap-3 text-[11px] font-mono text-[#C5D7BD]">
                <span className="text-[#7E9473]">RISK TIERS:</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#C8EA3B]" /> Normal</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#F5C518]" /> Watch</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#F07B20]" /> Warning</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#E03030]" /> Danger</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#C5D7BD]">
                <button className="p-1 rounded bg-[#213318] hover:bg-[#37502B] text-white" title="Zoom In"><ZoomIn className="w-3.5 h-3.5" /></button>
                <button className="p-1 rounded bg-[#213318] hover:bg-[#37502B] text-white" title="Zoom Out"><ZoomOut className="w-3.5 h-3.5" /></button>
                <button className="p-1 rounded bg-[#213318] hover:bg-[#37502B] text-white" title="Reset View"><RefreshCw className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Selected Zone Telemetry & AI Diagnostic Inspector (Span 4) */}
        <div className="lg:col-span-4 bg-[#213318] border-t lg:border-t-0 lg:border-l border-[#37502B] p-5 flex flex-col justify-between">
          <div className="space-y-5">
            {/* Zone Selector Header */}
            <div>
              <div className="text-[10px] font-mono font-bold tracking-widest text-[#7E9473] uppercase mb-1">
                Active Zone Inspector
              </div>
              <h3 className="text-base font-display font-bold text-white leading-tight">
                {currentZone.name}
              </h3>
              <div className="text-xs font-mono text-[#C5D7BD] mt-0.5">
                {currentZone.coords} · {currentZone.elev}
              </div>
            </div>

            {/* Risk Threat Score Gauge */}
            <div className="p-3.5 rounded-xl bg-[#1A2614] border border-[#37502B] space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#C8EA3B]" /> Susceptibility Score
                </span>
                <span
                  className="px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase"
                  style={{
                    backgroundColor: `${currentZone.color}20`,
                    color: currentZone.color,
                    border: `1px solid ${currentZone.color}50`,
                  }}
                >
                  {currentZone.risk} · {(currentZone.score * 100).toFixed(0)}%
                </span>
              </div>
              {/* Score Bar */}
              <div className="w-full h-2 rounded-full bg-[#273C1E] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${currentZone.score * 100}%`,
                    backgroundColor: currentZone.color,
                  }}
                />
              </div>
            </div>

            {/* Environmental Feed Readings */}
            <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
              <div className="p-3 rounded-xl bg-[#1A2614] border border-[#37502B]">
                <span className="text-[10px] text-[#7E9473] block mb-1">24H PRECIPITATION</span>
                <span className="text-sm font-bold text-white">{currentZone.rainfall}</span>
                <span className="text-[10px] text-[#F07B20] block mt-0.5">Threshold &gt;100mm</span>
              </div>
              <div className="p-3 rounded-xl bg-[#1A2614] border border-[#37502B]">
                <span className="text-[10px] text-[#7E9473] block mb-1">SOIL SATURATION</span>
                <span className="text-sm font-bold text-white">{moistureLevel}%</span>
                <span className="text-[10px] text-[#C8EA3B] block mt-0.5">Volumetric 0.44m³</span>
              </div>
            </div>

            {/* Automated AI Recommendation Banner */}
            <div className="p-3 rounded-xl bg-[#273C1E] border border-[#37502B] text-xs space-y-1.5">
              <div className="text-[11px] font-bold text-[#C8EA3B] flex items-center gap-1.5 uppercase font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" /> Automated SANKET Dispatch
              </div>
              <p className="text-[#C5D7BD] text-[11px] leading-relaxed">
                {currentZone.risk === "Danger"
                  ? "Evacuation advisory ready. Alert triggered to State Disaster Management Authority (SDMA) & Local Highway Patrol."
                  : currentZone.risk === "Warning"
                  ? "Alert level elevated. Frequency of satellite radar interferometry (InSAR) increased to 12h cycle."
                  : "Sensor telemetry within baseline thresholds. Routine 24/7 background AI scanning active."}
              </p>
            </div>
          </div>

          {/* Bottom Action / View Details */}
          <div className="pt-4 border-t border-[#37502B]">
            <a
              href="#section-10"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#C8EA3B] text-[#1A2614] font-display font-semibold text-xs uppercase tracking-wider hover:bg-[#E4F76E] transition-colors text-center cursor-pointer shadow-xs"
            >
              View Early Warning Protocols &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
