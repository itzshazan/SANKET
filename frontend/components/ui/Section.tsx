"use client";

import React from "react";

export function Section({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={`py-20 md:py-28 w-full bg-[#FDFCF8] text-[#2C2C24] relative ${className}`} {...props}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF0E8] text-[#5D7052] text-xs font-bold uppercase tracking-wider mb-4 border border-[#5D7052]/30">
          <span>{pill}</span>
          <span className="text-[#5D7052]/40">|</span>
          <span className="text-[10px] tracking-widest text-[#5D7052]">{statusText}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#2C2C24] leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg font-normal text-[#78786C] leading-relaxed max-w-2xl ${
            isCentered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
