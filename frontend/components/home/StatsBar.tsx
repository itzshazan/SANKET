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
    label: "Risk Levels",
    renderCount: (p) => `${Math.round(p * 4)}`,
  },
  {
    value: "6+",
    label: "Data Sources",
    renderCount: (p) => `${Math.round(p * 6)}+`,
  },
  {
    value: "24/7",
    label: "Continuous Monitoring",
    renderCount: (p) => `${Math.round(p * 24)}/7`,
  },
  {
    value: "5",
    label: "Alert Channels",
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
    <section id="section-02" className="w-full bg-[#1A2614] border-b border-[#37502B] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 divide-y md:divide-y-0 md:divide-x divide-[#37502B]">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center text-center px-4 ${
                idx > 0 && idx % 2 === 0 ? "pt-6 md:pt-0" : ""
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#C8EA3B] tracking-tight">
                <StatCounter stat={stat} />
              </div>
              <div className="text-xs sm:text-sm font-sans font-medium text-[#C5D7BD] mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
