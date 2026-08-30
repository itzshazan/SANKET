"use client";

import React from "react";

export function Section({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={`py-20 md:py-28 w-full bg-[#E0E5EC] text-[#3D4852] relative ${className}`} {...props}>
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
  className = "",
  statusText = "LIVE FEED",
}: {
  pill?: string;
  title: string;
  subtitle?: string;
  className?: string;
  statusText?: string;
}) {
  const isCentered = className.includes("text-center") || !className.includes("text-left");

  return (
    <div className={`mb-12 md:mb-16 relative ${className}`}>
      {pill && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold uppercase tracking-wider text-[#6C63FF] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#38B2AC] animate-pulse" />
          <span>{pill}</span>
          <span className="text-[#A3B1C6]">|</span>
          <span className="text-[10px] tracking-widest font-mono text-[#6B7280]">{statusText}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#3D4852] leading-[1.12] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg font-normal text-[#6B7280] leading-relaxed max-w-3xl ${
            isCentered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
