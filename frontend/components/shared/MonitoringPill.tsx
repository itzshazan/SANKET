"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

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
        className="flex items-center gap-2.5 px-4 py-2 bg-[#1a1a1a]/95 backdrop-blur-md border border-[#3c3c3c] shadow-2xl text-xs font-mono text-white cursor-pointer hover:border-white transition-all duration-150 rounded-none"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e22718] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e22718]"></span>
        </span>
        <span className="font-bold uppercase tracking-wider text-white">Telemetry Active</span>
        <span className="text-[#3c3c3c] hidden md:inline">|</span>
        <span className="text-white text-[11px] hidden md:inline font-mono">Sentinel InSAR</span>

        {expanded && (
          <div className="absolute bottom-full left-0 mb-3 w-64 p-4 bg-[#1a1a1a] border border-[#3c3c3c] shadow-2xl text-left font-sans text-xs text-white space-y-2 pointer-events-auto rounded-none">
            <div className="flex items-center justify-between pb-2 border-b border-[#262626]">
              <span className="font-bold text-white uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-white" /> SANKET Sentinel
              </span>
              <span className="text-[10px] text-white font-mono font-bold">{timestamp}</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-[#7e7e7e] uppercase">Active Sensors:</span>
                <span className="text-white font-mono font-bold">1,420 nodes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7e7e7e] uppercase">Satellite Pass:</span>
                <span className="text-white font-mono font-bold">Sentinel-2 (Synced)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7e7e7e] uppercase">Risk State:</span>
                <span className="text-white font-mono font-bold">Normal (Zone 1-4)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
