"use client";

import React from "react";

export function Section({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={`py-20 md:py-28 w-full bg-black text-white relative ${className}`} {...props}>
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
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
          <span>{pill}</span>
          <span className="text-[#3c3c3c]">|</span>
          <span className="text-[10px] tracking-widest font-mono text-white">{statusText}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.05] mb-4 font-sans uppercase">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg font-light text-[#bbbbbb] leading-relaxed max-w-2xl ${
            isCentered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
