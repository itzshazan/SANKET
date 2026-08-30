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
    color: "#5D7052",
    meaning: "No significant ground risk indicators",
    action: "Routine continuous satellite & sensor telemetry",
  },
  {
    level: "Watch",
    color: "#C18C5D",
    meaning: "Precipitation and soil moisture elevated",
    action: "Increase satellite pass frequency & verify piezometers",
  },
  {
    level: "Warning",
    color: "#AB774B",
    meaning: "Surface scarp displacement & high pore pressure",
    action: "Notify SDMA/NDMA commanders and prepare highway traffic teams",
  },
  {
    level: "Danger",
    color: "#A85448",
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
    <section id="section-10" className="w-full bg-[#F0EBE5]/40 py-20 md:py-28 border-t border-[#DED8CF]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#5D7052] mb-4">
            <span>Dissemination Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#2C2C24]">
            Multi-Tier Risk Matrix & Dissemination
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#78786C] font-normal leading-relaxed">
            SANKET categorizes threat levels into actionable tiers and broadcasts warnings across redundant channels.
          </p>
        </div>

        {/* 4-Tier Risk Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {RISK_LEVELS.map((item) => (
            <div
              key={item.level}
              className="bg-[#FEFEFA] border border-[#DED8CF] rounded-3xl p-6 flex flex-col justify-between hover:shadow-soft transition-all border-t-4 shadow-2xs"
              style={{ borderTopColor: item.color }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-serif font-bold text-[#2C2C24]">
                    {item.level}
                  </span>
                  <span
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>

                <p className="text-xs text-[#78786C] leading-relaxed mb-4">
                  {item.meaning}
                </p>
              </div>

              <div className="p-3.5 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF] text-xs font-bold text-[#4A4A40]">
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
                className="bg-[#FEFEFA] border border-[#DED8CF] rounded-3xl p-6 flex flex-col justify-between hover:shadow-soft hover:border-[#5D7052] transition-all shadow-2xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#5D7052]/10 text-[#5D7052] flex items-center justify-center group-hover:bg-[#5D7052] group-hover:text-[#F3F4F1] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-[#EBF0E8] text-[11px] font-bold text-[#5D7052] rounded-full">
                      {channel.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#2C2C24] mb-2">
                    {channel.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#78786C] leading-relaxed">
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
