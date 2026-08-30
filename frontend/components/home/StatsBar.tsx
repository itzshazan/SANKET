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
    label: "Fused Data Feeds",
    renderCount: (p) => `${Math.round(p * 6)}+`,
  },
  {
    value: "24/7",
    label: "Telemetry Lookahead",
    renderCount: (p) => `${Math.round(p * 24)}/7`,
  },
  {
    value: "5",
    label: "CAP Alert Channels",
    renderCount: (p) => `${Math.round(p * 5)}`,
  },
  {
    value: "100%",
    label: "Micro-Zone Precision",
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
    <section id="section-02" className="w-full bg-[#FDFCF8] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F0EBE5]/60 border border-[#DED8CF] rounded-[2.5rem] p-8 sm:p-12 shadow-soft">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#DED8CF]/80">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center text-center px-4 ${
                  idx > 0 && idx % 2 === 0 ? "pt-6 md:pt-0" : ""
                }`}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#5D7052] tracking-tight mb-2">
                  <StatCounter stat={stat} />
                </div>
                <div className="text-xs sm:text-sm font-bold font-sans text-[#78786C]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
