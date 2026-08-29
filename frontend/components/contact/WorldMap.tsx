"use client";

import React, { useMemo } from "react";
import { WORLD_PATHS } from "./world-paths";

interface WorldMapProps {
  isDark?: boolean;
  className?: string;
}

interface MapHub {
  name: string;
  x: number; // percentage
  y: number; // percentage
  labelOffset: string;
  isPrimary?: boolean;
}

const GLOBAL_HUBS: MapHub[] = [
  {
    name: "USA",
    x: 27.5,
    y: 31.5,
    labelOffset: "-top-6 -left-3",
  },
  {
    name: "Germany",
    x: 52.8,
    y: 21.0,
    labelOffset: "-top-6 -left-4",
  },
  {
    name: "France",
    x: 50.3,
    y: 24.8,
    labelOffset: "top-4 -left-5",
  },
  {
    name: "Russia",
    x: 76.0,
    y: 19.5,
    labelOffset: "top-5 left-1/2 -translate-x-1/2",
  },
  {
    name: "India",
    x: 71.8,
    y: 39.5,
    labelOffset: "-top-6 -left-4",
    isPrimary: true,
  },
  {
    name: "Nigeria",
    x: 52.5,
    y: 50.0,
    labelOffset: "top-5 left-1/2 -translate-x-1/2",
  },
  {
    name: "Brazil",
    x: 37.3,
    y: 69.0,
    labelOffset: "-top-1 left-7",
  },
  {
    name: "Japan",
    x: 86.0,
    y: 31.0,
    labelOffset: "top-5 left-1/2 -translate-x-1/2",
  },
  {
    name: "Australia",
    x: 85.0,
    y: 77.0,
    labelOffset: "-top-6 left-1/2 -translate-x-1/2",
  },
];

export function WorldMap({ isDark = false, className = "" }: WorldMapProps) {
  const pathsWithClass = useMemo(() => {
    return WORLD_PATHS.replace(/<path\b([^>]*)>/g, (_, attrs) => {
      // Check if this path belongs to one of our highlighted countries
      const isHighlighted =
        /\b(United States|Russian Federation|France|Japan|Australia|Germany|India|Nigeria|Brazil)\b/i.test(attrs) ||
        /\bid=["'](US|RU|FR|JP|AU|DE|IN|NG|BR)["']/i.test(attrs);

      const extraClass = isHighlighted ? "world-country-path world-country-highlighted" : "world-country-path";

      if (/class=["']/.test(attrs)) {
        const updatedAttrs = attrs.replace(/class=["']([^"']*)["']/, `class="$1 ${extraClass}"`);
        return `<path ${updatedAttrs}>`;
      } else {
        return `<path class="${extraClass}" ${attrs}>`;
      }
    });
  }, []);

  return (
    <div
      className={`relative w-full select-none rounded-2xl bg-[radial-gradient(#E2E8F0_1.2px,transparent_1.2px)] [background-size:22px_22px] p-2 sm:p-4 md:p-6 ${className}`}
    >
      {/* Dynamic Styling with Highlighted Zobique Theme Countries */}
      <style>{`
        .world-country-path {
          fill: ${isDark ? "#1E222D" : "#D4D4DA"};
          stroke: ${isDark ? "rgba(255, 255, 255, 0.18)" : "#B4B4BE"};
          stroke-width: 0.65px;
          vector-effect: non-scaling-stroke;
          stroke-linejoin: round;
          stroke-linecap: round;
          transition: fill 0.3s ease, stroke 0.3s ease;
        }
        .world-country-path:hover {
          fill: ${isDark ? "#292E3D" : "#C4C4CA"};
        }

        /* ── All 9 Highlighted Countries in Request a Quote Color (#C2410C) ── */
        .world-country-highlighted {
          fill: #C2410C !important;
          stroke: #7C2D12 !important;
          stroke-width: 0.85px !important;
          filter: drop-shadow(0 3px 8px rgba(194, 65, 12, 0.35));
        }

        .world-svg-drop-shadow {
          filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.08));
        }
      `}</style>

      {/* SVG Map Container (2000 x 857 Aspect Ratio) */}
      <div className="relative w-full aspect-[2000/857] overflow-visible">
        <svg
          viewBox="0 0 2000 857"
          className="w-full h-full block world-svg-drop-shadow"
          aria-hidden="true"
        >
          <g dangerouslySetInnerHTML={{ __html: pathsWithClass }} />
        </svg>

        {/* ── Country Target Hotspots & Labels ── */}
        {GLOBAL_HUBS.map((hub) => (
          <div
            key={hub.name}
            className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{
              left: `${hub.x}%`,
              top: `${hub.y}%`,
            }}
          >
            {/* Pulsing Radial Glow Atmosphere */}
            <div className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#C2410C]/20 blur-xs animate-pulse" />

            {/* Ripple Wave Ping */}
            <div className="absolute w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full bg-[#C2410C]/30 animate-ping" />

            {/* Concentric Target Ring (Compact White Border + Orange Core) */}
            <div className="relative z-10 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 rounded-full border-[1.5px] border-white bg-[#C2410C] flex items-center justify-center shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
              {/* Inner White Donut Center */}
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-white" />
            </div>

            {/* Country Text Label */}
            <span
              className={`absolute font-extrabold text-gray-900 text-[10px] sm:text-[11px] md:text-xs tracking-tight whitespace-nowrap drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] select-none ${hub.labelOffset}`}
            >
              {hub.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
