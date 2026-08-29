"use client";

import React from "react";
import {
  ArrowDown,
  Smartphone,
  Mail,
  Bell,
  Volume2,
  CheckCircle2,
  AlertTriangle,
  Radio,
  Layers,
  PhoneCall
} from "lucide-react";
import { SectionHeader } from "../ui/Section";
import { ScrollReveal, StaggerContainer, StaggerItem, SlideReveal } from "../shared/ScrollReveal";

const RISK_LEVELS = [
  {
    level: "Normal",
    color: "#C8EA3B",
    bgClass: "bg-[#C8EA3B]/10",
    meaning: "No significant risk indicators",
    action: "Routine monitoring only",
  },
  {
    level: "Watch",
    color: "#F5C518",
    bgClass: "bg-[#F5C518]/10",
    meaning: "Some indicators elevated",
    action: "Increase observation frequency & verify sensor telemetry",
  },
  {
    level: "Warning",
    color: "#F07B20",
    bgClass: "bg-[#F07B20]/10",
    meaning: "Multiple indicators elevated & cross-threshold",
    action: "Notify disaster authorities, prepare response & traffic teams",
  },
  {
    level: "Danger",
    color: "#E03030",
    bgClass: "bg-[#E03030]/10",
    meaning: "Critical risk threshold reached (Impending failure)",
    action: "Immediate action required, road closures & execute evacuation",
  },
];

const CHANNELS = [
  {
    title: "SMS Broadcast",
    icon: Smartphone,
    description: "Direct priority text alerts to registered field officers and local resident contacts.",
    tag: "Sub-Second Latency",
  },
  {
    title: "Email Reports",
    icon: Mail,
    description: "Detailed GIS risk summary reports with topographic coordinates and probability matrices.",
    tag: "Automated PDF/GIS",
  },
  {
    title: "Mobile App Push",
    icon: Bell,
    description: "Instant push notifications with interactive live hazard map views and navigation rerouting.",
    tag: "SANKET Mobile",
  },
  {
    title: "Automated Voice Calls",
    icon: PhoneCall,
    description: "High-priority IVR automated calls and siren integration for critical Danger-level warnings.",
    tag: "High-Priority Voice",
  },
];

export function EarlyWarning() {
  return (
    <section id="section-10" className="w-full bg-[#F8F9F6] border-b border-[#E3E8DF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            pill="Actionable Protocol"
            title="From Prediction to Action."
            subtitle="Identifying risk is only the first step. SANKET converts elevated risk into understandable alerts that support timely monitoring and response."
            className="text-center mx-auto"
          />
        </ScrollReveal>

        {/* Upper Split: Trigger Logic + Risk Level Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* Left: Alert Trigger Logic Panel (Span 4) */}
          <SlideReveal direction="left" className="lg:col-span-4 rounded-3xl bg-[#213318] border border-[#37502B] p-6 sm:p-8 text-white flex flex-col justify-between shadow-md hover-card-rise">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C8EA3B] uppercase tracking-wider mb-6">
                <Radio className="w-4 h-4" /> Trigger Logic Pipeline
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-[#1A2614] border border-[#37502B] flex items-center justify-between">
                  <span className="text-white font-semibold">1. Risk Score Rises</span>
                  <span className="text-[#C8EA3B]">AI Model Check</span>
                </div>
                <div className="flex justify-center text-[#C8EA3B]">
                  <ArrowDown className="w-4 h-4 text-[#C8EA3B]" />
                </div>

                <div className="p-3.5 rounded-xl bg-[#1A2614] border border-[#37502B] flex items-center justify-between">
                  <span className="text-white font-semibold">2. Multiple Indicators Align</span>
                  <span className="text-[#F5C518]">Rain + Soil + Slope</span>
                </div>
                <div className="flex justify-center text-[#C8EA3B]">
                  <ArrowDown className="w-4 h-4 text-[#C8EA3B]" />
                </div>

                <div className="p-3.5 rounded-xl bg-[#1A2614] border border-[#37502B] flex items-center justify-between">
                  <span className="text-white font-semibold">3. Threshold Crossed</span>
                  <span className="text-[#F07B20]">Safety Factor &lt; 1.0</span>
                </div>
                <div className="flex justify-center text-[#C8EA3B]">
                  <ArrowDown className="w-4 h-4 text-[#C8EA3B]" />
                </div>

                <div className="p-3.5 rounded-xl bg-[#1A2614] border border-[#37502B] flex items-center justify-between">
                  <span className="text-white font-semibold">4. Alert Dispatched</span>
                  <span className="text-[#E03030] font-bold">Multi-Channel</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#37502B] text-[11px] font-mono text-[#C5D7BD]">
              Deterministic multi-agency routing adhering to Common Alerting Protocol (CAP).
            </div>
          </SlideReveal>

          {/* Right: Risk Level -> Action Table (Span 8) */}
          <SlideReveal direction="right" className="lg:col-span-8 rounded-3xl bg-white border border-[#E3E8DF] p-6 sm:p-8 shadow-sm flex flex-col justify-between overflow-hidden hover-card-light">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E3E8DF] mb-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-[#1A2614]">
                    Tiered Risk Classification Matrix
                  </h3>
                  <p className="text-xs sm:text-sm text-[#586650] mt-1">
                    Clear mappings from quantitative sensor thresholds to field actions.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-[#213318] bg-[#F8F9F6] px-3 py-1.5 rounded-full border border-[#E3E8DF]">
                  4 Action Levels
                </span>
              </div>

              {/* Responsive Table / Cards */}
              <div className="space-y-3">
                {RISK_LEVELS.map((r) => (
                  <div
                    key={r.level}
                    className="p-4 rounded-2xl border border-[#E3E8DF] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#C8EA3B] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-3 h-3 rounded-full shrink-0 animate-pulse"
                        style={{ backgroundColor: r.color }}
                      />
                      <span className="text-sm font-display font-bold text-[#1A2614] w-20">
                        {r.level}
                      </span>
                      <span className="text-xs text-[#586650]">
                        {r.meaning}
                      </span>
                    </div>

                    <div className="text-xs font-mono font-semibold text-[#213318] sm:text-right bg-[#F8F9F6] sm:bg-transparent p-2 sm:p-0 rounded-lg">
                      {r.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#E3E8DF] flex items-center justify-between text-xs font-mono text-[#7E9473]">
              <span>Real-time calibration based on live sensor confidence</span>
              <span className="text-[#1A2614] font-bold">100% Automated Dissemination</span>
            </div>
          </SlideReveal>
        </div>

        {/* Bottom: 4 Alert Channel Cards */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#586650] font-bold">
              Multi-Channel Dissemination Network
            </span>
          </div>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHANNELS.map((ch) => {
              const IconComponent = ch.icon;
              return (
                <StaggerItem
                  key={ch.title}
                  className="p-6 rounded-2xl bg-white border border-[#E3E8DF] shadow-xs hover:border-[#C8EA3B] hover-card-light transition-all duration-300 flex flex-col justify-between group cursor-default"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#C8EA3B]/15 flex items-center justify-center text-[#213318] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 text-[#213318]" />
                      </div>
                      <span className="text-[10px] font-mono text-[#7E9473] bg-[#F8F9F6] px-2 py-0.5 rounded border border-[#E3E8DF]">
                        {ch.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-display font-bold text-[#1A2614] mb-2">
                      {ch.title}
                    </h4>

                    <p className="text-xs text-[#586650] leading-relaxed">
                      {ch.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E3E8DF]/60 text-[11px] font-mono text-[#C8EA3B] font-bold text-right">
                    ACTIVE CHANNEL
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
