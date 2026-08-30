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
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#FEFEFA]/90 backdrop-blur-md border border-[#DED8CF] shadow-[0_4px_20px_-2px_rgba(93,112,82,0.15)] text-xs font-sans text-[#2C2C24] cursor-pointer hover:border-[#5D7052] hover:scale-105 transition-all duration-200"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5D7052] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5D7052]"></span>
        </span>
        <span className="font-bold text-[#2C2C24]">Telemetry Active</span>
        <span className="text-[#DED8CF] hidden md:inline">|</span>
        <span className="text-[#5D7052] text-xs hidden md:inline font-bold">Sentinel InSAR</span>

        {expanded && (
          <div className="absolute bottom-full left-0 mb-3 w-64 p-5 rounded-[2rem] bg-[#FEFEFA] border border-[#DED8CF] shadow-[0_20px_40px_-10px_rgba(93,112,82,0.2)] text-left font-sans text-xs text-[#2C2C24] space-y-2.5 pointer-events-auto">
            <div className="flex items-center justify-between pb-2 border-b border-[#DED8CF]/60">
              <span className="font-bold text-[#2C2C24] flex items-center gap-1.5 font-serif">
                <ShieldCheck className="w-4 h-4 text-[#5D7052]" /> SANKET Sentinel
              </span>
              <span className="text-xs text-[#5D7052] font-bold">{timestamp}</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-[#78786C]">Active Sensors:</span>
                <span className="text-[#2C2C24] font-bold">1,420 nodes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78786C]">Satellite Pass:</span>
                <span className="text-[#5D7052] font-bold">Sentinel-2 (Synced)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78786C]">Risk State:</span>
                <span className="text-[#5D7052] font-bold">Normal (Zone 1-4)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
