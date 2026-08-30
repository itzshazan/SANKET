"use client";

import React from "react";
import {
  Smartphone,
  Mail,
  Bell,
  Volume2,
  PhoneCall,
  CheckCircle2,
  Radio
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "../shared/ScrollReveal";

const RISK_LEVELS = [
  {
    level: "Normal",
    color: "#38B2AC",
    meaning: "No significant ground risk indicators",
    action: "Routine continuous satellite & sensor telemetry",
  },
  {
    level: "Watch",
    color: "#D69E2E",
    meaning: "Precipitation and soil moisture elevated",
    action: "Increase satellite pass frequency & verify piezometers",
  },
  {
    level: "Warning",
    color: "#DD6B20",
    meaning: "Surface scarp displacement & high pore pressure",
    action: "Notify SDMA/NDMA commanders and prepare highway traffic teams",
  },
  {
    level: "Danger",
    color: "#E53E3E",
    meaning: "Critical failure threshold exceeded (&lt;1.0 FoS)",
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
    <section id="section-10" className="w-full bg-[#E0E5EC] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF] mb-4">
            Dissemination Network
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#3D4852] tracking-tight">
            Multi-Tier Risk Matrix & Dissemination
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280]">
            SANKET categorizes threat levels into actionable tiers and broadcasts warnings across redundant channels.
          </p>
        </div>

        {/* 4-Tier Risk Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {RISK_LEVELS.map((item) => (
            <div
              key={item.level}
              className="rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] p-6 sm:p-8 flex flex-col justify-between hover:shadow-[12px_12px_24px_rgba(163,177,198,0.7)] transition-all duration-300 border-t-4"
              style={{ borderTopColor: item.color }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-display font-extrabold text-[#3D4852]">
                    {item.level}
                  </span>
                  <span
                    className="w-3 h-3 rounded-full shadow-sm"
                    style={{ backgroundColor: item.color }}
                  />
                </div>

                <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                  {item.meaning}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#3D4852]">
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
                className="rounded-[28px] bg-[#E0E5EC] shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.5)] p-6 sm:p-7 flex flex-col justify-between hover:shadow-[10px_10px_20px_rgba(163,177,198,0.7)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#6C63FF]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6)] text-[10px] font-mono font-bold text-[#38B2AC]">
                      {channel.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-extrabold text-[#3D4852] mb-2">
                    {channel.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
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
