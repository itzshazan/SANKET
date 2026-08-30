"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatItem {
  value: string;
  label: string;
  renderCount: (progress: number) => string;
}

const STATS: StatItem[] = [
  {
    value: "4",
    label: "Physical Risk Tiers",
    renderCount: (p) => `${Math.round(p * 4)}`,
  },
  {
    value: "6+",
    label: "Fused Ingestion Feeds",
    renderCount: (p) => `${Math.round(p * 6)}+`,
  },
  {
    value: "24/7",
    label: "Continuous Telemetry",
    renderCount: (p) => `${Math.round(p * 24)}/7`,
  },
  {
    value: "5",
    label: "CAP Alert Channels",
    renderCount: (p) => `${Math.round(p * 5)}`,
  },
  {
    value: "100%",
    label: "Location-Specific Risk",
    renderCount: (p) => `${Math.round(p * 100)}%`,
  },
];

function StatCounter({ stat }: { stat: StatItem }) {
  const [displayValue, setDisplayValue] = useState(() => stat.renderCount(0));
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const duration = 1500;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            const eased = 1 - Math.pow(1 - progress, 3);

            setDisplayValue(stat.renderCount(eased));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(stat.renderCount(1));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [stat]);

  return <span ref={ref}>{displayValue}</span>;
}

export function StatsBar() {
  return (
    <section id="section-02" className="w-full bg-[#E0E5EC] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 sm:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-[28px] bg-[#E0E5EC] shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.7)] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[10px_10px_20px_rgba(163,177,198,0.7),-10px_-10px_20px_rgba(255,255,255,0.8)]"
            >
              <div className="w-full py-3 mb-2 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#6C63FF] tracking-tight">
                  <StatCounter stat={stat} />
                </span>
              </div>
              <div className="text-xs sm:text-sm font-sans font-medium text-[#6B7280]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
