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
        className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#213318]/90 backdrop-blur-md border border-[#37502B] shadow-[0_8px_24px_rgba(0,0,0,0.3)] text-xs font-mono text-[#C5D7BD] cursor-pointer hover:border-[#C8EA3B]/60 transition-all duration-300"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8EA3B] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C8EA3B]"></span>
        </span>
        <span className="font-semibold text-white tracking-wide">Monitoring Active</span>
        <span className="text-[#7E9473] hidden md:inline">|</span>
        <span className="text-[#C8EA3B] text-[11px] hidden md:inline font-mono">Live Telemetry</span>

        {expanded && (
          <div className="absolute bottom-full left-0 mb-3 w-64 p-3.5 rounded-xl bg-[#1A2614] border border-[#37502B] shadow-2xl text-left font-sans text-xs text-[#C5D7BD] space-y-2 pointer-events-auto">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#37502B]">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C8EA3B]" /> SANKET Sentinel
              </span>
              <span className="text-[10px] text-[#C8EA3B] font-mono">{timestamp}</span>
            </div>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between">
                <span className="text-[#7E9473]">Active Sensors:</span>
                <span className="text-white font-mono">1,420 feeds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7E9473]">Satellite Pass:</span>
                <span className="text-[#C8EA3B] font-mono">Sentinel-2 (Active)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7E9473]">Risk State:</span>
                <span className="text-[#C8EA3B] font-mono">Normal (Zone A-F)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
