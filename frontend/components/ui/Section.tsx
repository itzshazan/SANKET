"use client";

import React from "react";
import { motion } from "framer-motion";

export function SectionScanline({ dark = false }: { dark?: boolean }) {
  return (
    <div className="relative w-full h-[1.5px] overflow-hidden opacity-60 mb-6 sm:mb-8 pointer-events-none">
      {/* Track line */}
      <div className={`absolute inset-0 ${dark ? "bg-[#37502B]/40" : "bg-[#E3E8DF]"}`} />
      {/* Moving Laser Beam */}
      <div className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-[#C8EA3B] to-transparent animate-laser-scan shadow-[0_0_12px_#C8EA3B]" />
    </div>
  );
}

export function Section({
  className = "",
  children,
  showScanline = false,
  dark = false,
  ...props
}: React.HTMLAttributes<HTMLElement> & { showScanline?: boolean; dark?: boolean }) {
  return (
    <section className={`py-20 md:py-28 w-full overflow-x-clip relative ${className}`} {...props}>
      {showScanline && <SectionScanline dark={dark} />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  pill,
  title,
  subtitle,
  dark = false,
  className = "",
  statusText = "LIVE FEED",
}: {
  pill?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
  statusText?: string;
}) {
  const isCentered = className.includes("text-center") || !className.includes("text-left");

  return (
    <div className={`mb-12 md:mb-16 relative ${className}`}>
      {/* Subtle Top Glowing Laser Sweep */}
      <div className={`h-[1px] w-full max-w-xs mx-auto mb-6 relative overflow-hidden ${isCentered ? "" : "mr-auto"}`}>
        <div className={`absolute inset-0 ${dark ? "bg-[#37502B]" : "bg-[#E3E8DF]"}`} />
        <div className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[#C8EA3B] to-transparent animate-laser-scan" />
      </div>

      {pill && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider mb-4 border transition-all ${
          dark
            ? "bg-[#C8EA3B]/10 text-[#C8EA3B] border-[#C8EA3B]/25 shadow-[0_0_15px_rgba(200,234,59,0.1)]"
            : "bg-[#213318]/5 text-[#213318] border-[#213318]/15"
        }`}>
          <span className="w-2 h-2 rounded-full bg-[#C8EA3B] animate-pulse" />
          <span>{pill}</span>
          <span className="opacity-40">|</span>
          <span className="text-[10px] tracking-widest font-mono opacity-80">{statusText}</span>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight leading-[1.15] mb-4 ${
          dark ? "text-white" : "text-[#1A2614]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl ${
            isCentered ? "mx-auto" : ""
          } ${dark ? "text-[#C5D7BD]" : "text-[#586650]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
