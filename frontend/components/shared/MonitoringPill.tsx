"use client";

import React, { useState, useEffect } from "react";
import { Activity, ShieldCheck, Wifi } from "lucide-react";

export function MonitoringPill() {
  const [timestamp, setTimestamp] = useState<string>("");
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimestamp(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center">
      <div 
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#E0E5EC] shadow-[6px_6px_12px_rgba(163,177,198,0.7),-6px_-6px_12px_rgba(255,255,255,0.8)] text-xs font-mono text-[#3D4852] cursor-pointer hover:shadow-[8px_8px_16px_rgba(163,177,198,0.8)] active:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6)] transition-all duration-300"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38B2AC] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38B2AC]"></span>
        </span>
        <span className="font-bold text-[#3D4852]">Telemetry Active</span>
        <span className="text-[#6B7280] hidden md:inline">|</span>
        <span className="text-[#6C63FF] text-[11px] hidden md:inline font-mono font-bold">Sentinel InSAR</span>

        {expanded && (
          <div className="absolute bottom-full left-0 mb-3 w-64 p-4 rounded-2xl bg-[#E0E5EC] shadow-[12px_12px_24px_rgba(163,177,198,0.8),-12px_-12px_24px_rgba(255,255,255,0.9)] text-left font-sans text-xs text-[#3D4852] space-y-2 pointer-events-auto">
            <div className="flex items-center justify-between pb-2 border-b border-[#A3B1C6]/30">
              <span className="font-bold text-[#3D4852] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38B2AC]" /> SANKET Sentinel
              </span>
              <span className="text-[10px] text-[#6C63FF] font-mono font-bold">{timestamp}</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Active Sensors:</span>
                <span className="text-[#3D4852] font-mono font-bold">1,420 nodes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Satellite Pass:</span>
                <span className="text-[#38B2AC] font-mono font-bold">Sentinel-2 (Synced)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Risk State:</span>
                <span className="text-[#38B2AC] font-mono font-bold">Normal (Zone 1-4)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
