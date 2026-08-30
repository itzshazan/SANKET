"use client";

import React from "react";
import {
  Smartphone,
  Bell,
  Volume2,
  PhoneCall,
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "../shared/ScrollReveal";

const RISK_LEVELS = [
  {
    level: "Normal",
    color: "#0066B1",
    meaning: "No significant ground risk indicators",
    action: "Routine continuous satellite & sensor telemetry",
  },
  {
    level: "Watch",
    color: "#EAB308",
    meaning: "Precipitation and soil moisture elevated",
    action: "Increase satellite pass frequency & verify piezometers",
  },
  {
    level: "Warning",
    color: "#1C69D4",
    meaning: "Surface scarp displacement & high pore pressure",
    action: "Notify SDMA/NDMA commanders and prepare highway traffic teams",
  },
  {
    level: "Danger",
    color: "#E22718",
    meaning: "Critical failure threshold exceeded (<1.0 FoS)",
    action: "Immediate road closures, siren broadcast & active evacuation",
  },
];

const CHANNELS = [
  {
    title: "Priority SMS Broadcast",
    icon: Smartphone,
    description: "Direct alerts to registered district responders and local village contacts.",
    tag: "CAP v1.2 Protocol",
  },
  {
    title: "Agency GIS Dispatch",
    icon: Bell,
    description: "Real-time incident pins dispatched to BRO and SDMA control room consoles.",
    tag: "Instant Push API",
  },
  {
    title: "Automated Voice Calls",
    icon: PhoneCall,
    description: "High-priority multilingual IVR phone calls to local checkpoint officers.",
    tag: "Fail-Safe Channel",
  },
  {
    title: "Physical Siren Systems",
    icon: Volume2,
    description: "Automated triggers for valley siren stations in extreme danger zones.",
    tag: "Hardware Mesh",
  },
];

export function EarlyWarning() {
  return (
    <section id="section-10" className="w-full bg-[#0d0d0d] py-20 md:py-28 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
            <span>Dissemination Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
            Multi-Tier Risk Matrix & Dissemination
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#bbbbbb] font-light leading-relaxed">
            SANKET categorizes threat levels into actionable tiers and broadcasts warnings across redundant channels.
          </p>
        </div>

        {/* 4-Tier Risk Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {RISK_LEVELS.map((item) => (
            <div
              key={item.level}
              className="bg-[#1a1a1a] border border-[#3c3c3c] p-6 flex flex-col justify-between hover:border-white transition-all border-t-4"
              style={{ borderTopColor: item.color }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold uppercase tracking-wider text-white">
                    {item.level}
                  </span>
                  <span
                    className="w-3 h-3"
                    style={{ backgroundColor: item.color }}
                  />
                </div>

                <p className="text-xs text-[#bbbbbb] font-light leading-relaxed mb-4">
                  {item.meaning}
                </p>
              </div>

              <div className="p-3 bg-[#0d0d0d] border border-[#262626] text-xs font-mono text-white">
                Action: {item.action}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Dissemination Channels */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <StaggerItem
                key={channel.title}
                className="bg-[#1a1a1a] border border-[#3c3c3c] p-6 flex flex-col justify-between hover:border-white transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 bg-[#0d0d0d] border border-[#3c3c3c] text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 bg-[#0d0d0d] border border-[#262626] text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                      {channel.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                    {channel.title}
                  </h3>

                  <p className="text-xs text-[#bbbbbb] font-light leading-relaxed">
                    {channel.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
