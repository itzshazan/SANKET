"use client";

import React, { useMemo } from "react";

export function GlowingGrid() {
  const colSpacing = 145;
  const rowSpacing = 145;
  const numCols = 8;
  const numRows = 12; // Spanning from above top navbar down below the dashboard image

  // Intersections across the entire full-height grid, scaling gradually from left to right (cols 1 through 8)
  const bulbIntersections = useMemo(() => {
    const list: {
      x: number;
      y: number;
      sizeScale: number;
      opacityScale: number;
      delay: number;
    }[] = [];

    // Columns 1 through 6 across rows 0 through 11 (Main Star Area)
    for (let col = 1; col <= 6; col++) {
      const progress = (col - 1) / 5; // 0.0 at col 1 -> 1.0 at col 6
      
      // Gradually bigger from left to right (0.45x on left -> 1.35x on right)
      const sizeScale = 0.45 + progress * 0.90;
      const opacityScale = 0.65 + progress * 0.35;

      for (let row = 0; row <= 11; row++) {
        list.push({
          x: col * colSpacing,
          y: row * rowSpacing,
          sizeScale,
          opacityScale,
          delay: ((col * 3 + row * 2) % 16) * 0.22,
        });
      }
    }

    // Tiny stars on the left upward extensions
    for (let col = -3; col <= 0; col++) {
      for (let row = 0; row <= numRows; row++) {
        const x = col * colSpacing;
        const y = row * rowSpacing - (1 * colSpacing - x);
        list.push({
          x,
          y,
          sizeScale: 0.32, // increased size to make them visible
          opacityScale: 0.45, // increased opacity to make them visible
          delay: ((Math.abs(col) * 3 + row * 2) % 16) * 0.22,
        });
      }
    }

    // Tiny stars on the right downward extensions
    for (let col = 7; col <= numCols; col++) {
      for (let row = 0; row <= numRows; row++) {
        const x = col * colSpacing;
        const y = row * rowSpacing + (x - 6 * colSpacing); // '+' to incline towards bottom
        list.push({
          x,
          y,
          sizeScale: 0.35, // increased size to make them visible
          opacityScale: 0.5, // increased opacity to make them visible
          delay: ((col * 3 + row * 2) % 16) * 0.22,
        });
      }
    }

    return list;
  }, []);

  const extraLeftCols = 3; // 3 extra columns extending towards the center on the left
  const minX = -extraLeftCols * colSpacing; // -435px
  const totalWidth = numCols * colSpacing;
  const totalHeight = numRows * rowSpacing;
  const svgViewWidth = totalWidth - minX;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Upper-right warm ambient studio flare extending above top navbar */}
      <div
        className="absolute -top-36 right-0 lg:right-[3%] w-[700px] lg:w-[900px] h-[850px] rounded-full opacity-60 blur-[130px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 35%, rgba(255,140,0,0.16) 0%, rgba(255,102,0,0.05) 50%, transparent 75%)",
        }}
      />

      {/* Lower-right secondary warm ambient glow (behind and below dashboard image) */}
      <div
        className="absolute top-[45%] right-0 lg:right-[5%] w-[600px] lg:w-[800px] h-[750px] rounded-full opacity-45 blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 50%, rgba(255,140,0,0.12) 0%, rgba(255,102,0,0.04) 50%, transparent 75%)",
        }}
      />

      {/* Full-Height 3D Perspective Stage spanning wide to extend horizontal lines towards center */}
      <div
        className="hidden sm:block absolute -top-36 right-0 xl:right-[1%] w-[84%] min-w-[760px] max-w-[1300px] h-[135%] min-h-[1750px] overflow-hidden"
        style={{ perspective: "1150px" }}
      >
        {/* 3D Transformed Grid Plane receding towards the left across full height */}
        <div
          className="absolute -top-6 -right-14 w-[1500px] h-[1850px]"
          style={{
            transform: "rotateY(-34deg) rotateX(10deg) rotateZ(1deg) translateZ(0)",
            transformOrigin: "top right",
            transformStyle: "preserve-3d",
            maskImage: "radial-gradient(ellipse 95% 95% at 75% 42%, black 65%, transparent 98%)",
            WebkitMaskImage: "radial-gradient(ellipse 95% 95% at 75% 42%, black 65%, transparent 98%)",
          }}
        >
          {/* Unified SVG Mesh: Lines and Glowing Bulbs */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={`${minX} 0 ${svgViewWidth} ${totalHeight}`}
            style={{ overflow: "visible" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Outer bloom radial gradient */}
              <radialGradient id="bulbBloomGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF7700" stopOpacity="0.45" />
                <stop offset="45%" stopColor="#FF8800" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#FFAA00" stopOpacity="0" />
              </radialGradient>

              {/* Mid ring radial gradient */}
              <radialGradient id="bulbRingGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFE066" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#FF9900" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#FF6600" stopOpacity="0.15" />
              </radialGradient>
            </defs>

            {/* 1. Vertical grid lines (including left extended columns) */}
            {Array.from({ length: numCols + 1 + extraLeftCols }).map((_, idx) => {
              const c = idx - extraLeftCols;
              const x = c * colSpacing;
              const hasStars = c >= 1 && c <= 6;
              const starBottomY = 11 * rowSpacing;

              if (hasStars) {
                return (
                  <React.Fragment key={`v-${c}`}>
                    {/* Top extension (outside star area): Dotted & inclined up-right */}
                    <line
                      x1={x}
                      y1={0}
                      x2={x + totalHeight}
                      y2={-totalHeight}
                      stroke="rgba(0, 0, 0, 0.22)"
                      strokeWidth={1}
                      strokeDasharray="4 5"
                    />

                    {/* Inner active star segment: Solid Black */}
                    <line
                      x1={x}
                      y1={0}
                      x2={x}
                      y2={starBottomY}
                      stroke="#000000"
                      strokeWidth={1.2}
                    />

                    {/* Outer bottom extension (outside star area): Dotted & less visible */}
                    <line
                      x1={x}
                      y1={starBottomY}
                      x2={x}
                      y2={totalHeight}
                      stroke="rgba(0, 0, 0, 0.22)"
                      strokeWidth={1}
                      strokeDasharray="4 5"
                    />
                  </React.Fragment>
                );
              }

              // Outer peripheral columns (left extended columns & far right col 9): Dotted & less visible
              return (
                <path
                  key={`v-${c}`}
                  d={`M ${x + totalHeight} ${-totalHeight} L ${x} 0 L ${x} ${totalHeight}`}
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.18)"
                  strokeWidth={1}
                  strokeDasharray="4 5"
                />
              );
            })}

            {/* 2. Horizontal perspective lines extending far left towards center */}
            {Array.from({ length: numRows + 1 }).map((_, r) => {
              const y = r * rowSpacing;
              const isStarRow = r <= 11;
              const leftStarX = 1 * colSpacing;
              const rightStarX = 6 * colSpacing;

              if (isStarRow) {
                return (
                  <React.Fragment key={`h-${r}`}>
                    {/* Left extension reaching far out towards the center: Dotted & subtle (Upward incline) */}
                    <line
                      x1={minX}
                      y1={y - (leftStarX - minX)}
                      x2={leftStarX}
                      y2={y}
                      stroke="rgba(0, 0, 0, 0.22)"
                      strokeWidth={1}
                      strokeDasharray="4 5"
                    />

                    {/* Inside star area: Solid Black */}
                    <line
                      x1={leftStarX}
                      y1={y}
                      x2={rightStarX}
                      y2={y}
                      stroke="#000000"
                      strokeWidth={1.2}
                    />

                    {/* Right extension outside stars: Dotted & less visible (Downward incline) */}
                    <line
                      x1={rightStarX}
                      y1={y}
                      x2={totalWidth}
                      y2={y + (totalWidth - rightStarX)}
                      stroke="rgba(0, 0, 0, 0.22)"
                      strokeWidth={1}
                      strokeDasharray="4 5"
                    />
                  </React.Fragment>
                );
              }

              // Bottom rows outside star area: Dotted & less visible (with upward left and downward right inclines)
              return (
                <path
                  key={`h-${r}`}
                  d={`M ${minX} ${y - (leftStarX - minX)} L ${leftStarX} ${y} L ${rightStarX} ${y} L ${totalWidth} ${y + (totalWidth - rightStarX)}`}
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.18)"
                  strokeWidth={1}
                  strokeDasharray="4 5"
                />
              );
            })}
            {/* 3. Top extension horizontal rows to complete the 45-degree up-right mesh */}
            {Array.from({ length: numRows }).map((_, r) => {
              const negR = r + 1;
              const y = -negR * rowSpacing;
              const shift = negR * rowSpacing; // Shift right to match the 45-degree incline of columns
              const startX = minX + shift;
              const endX = totalWidth + shift;

              return (
                <line
                  key={`top-h-${negR}`}
                  x1={startX}
                  y1={y}
                  x2={endX}
                  y2={y}
                  stroke="rgba(0, 0, 0, 0.22)"
                  strokeWidth={1}
                  strokeDasharray="4 5"
                />
              );
            })}

            {/* 4. Glowing Stars / Bulbs on all intersections scaling gradually from left to right */}
            {bulbIntersections.map((bulb, idx) => {
              const cx = bulb.x;
              const cy = bulb.y;

              return (
                <g
                  key={`bulb-${idx}`}
                  style={{
                    transformOrigin: `${cx}px ${cy}px`,
                    opacity: bulb.opacityScale,
                  }}
                >
                  {/* Layer A: Large Outer Diffuse Bloom */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={22 * bulb.sizeScale}
                    fill="url(#bulbBloomGrad)"
                    style={{
                      animation: "svgBulbBloom 3.5s ease-in-out infinite",
                      animationDelay: `${bulb.delay}s`,
                      transformOrigin: `${cx}px ${cy}px`,
                    }}
                  />

                  {/* Layer B: Golden Glowing Halo Ring */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={10 * bulb.sizeScale}
                    fill="url(#bulbRingGrad)"
                    stroke="#FFA31A"
                    strokeWidth={Math.max(0.8, 1.2 * bulb.sizeScale)}
                    style={{
                      filter: `drop-shadow(0 0 ${4 * bulb.sizeScale}px rgba(255, 140, 0, 0.75))`,
                      animation: "svgBulbRing 3.5s ease-in-out infinite",
                      animationDelay: `${bulb.delay}s`,
                      transformOrigin: `${cx}px ${cy}px`,
                    }}
                  />

                  {/* Layer C: Luminous White-Hot Center Bulb */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={3.8 * bulb.sizeScale}
                    fill="#FFFDF2"
                    style={{
                      filter: `drop-shadow(0 0 ${2.5 * bulb.sizeScale}px #FFE066) drop-shadow(0 0 ${6 * bulb.sizeScale}px #FF6600)`,
                      animation: "svgBulbCore 3.5s ease-in-out infinite",
                      animationDelay: `${bulb.delay}s`,
                      transformOrigin: `${cx}px ${cy}px`,
                    }}
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Seamless bottom fade into pure white at the very bottom section boundary */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      {/* Smooth breathing animation keyframes */}
      <style>{`
        @keyframes svgBulbCore {
          0%, 100% {
            opacity: 0.85;
            transform: scale(0.92);
          }
          50% {
            opacity: 1;
            transform: scale(1.18);
          }
        }
        @keyframes svgBulbRing {
          0%, 100% {
            opacity: 0.7;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.12);
          }
        }
        @keyframes svgBulbBloom {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.85);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.25);
          }
        }
      `}</style>
    </div>
  );
}