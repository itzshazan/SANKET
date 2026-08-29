"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface BrandBannerProps {
  className?: string;
}

export function BrandBanner({ className = "" }: BrandBannerProps) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const wrapRef = useRef<HTMLDivElement>(null);
  const cachedRectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (wrapRef.current) {
      cachedRectRef.current = wrapRef.current.getBoundingClientRect();
    }
    setHovered(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cachedRectRef.current && wrapRef.current) {
      cachedRectRef.current = wrapRef.current.getBoundingClientRect();
    }
    const rect = cachedRectRef.current;
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cachedRectRef.current = null;
    setHovered(false);
  }, []);

  const spotlightMaskStyle: React.CSSProperties = hovered
    ? {
        maskImage: `radial-gradient(circle 260px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0,0,0,0.85) 50%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(circle 260px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0,0,0,0.85) 50%, transparent 100%)`,
      }
    : {
        maskImage: "radial-gradient(circle 0px at -1000px -1000px, transparent, transparent)",
        WebkitMaskImage: "radial-gradient(circle 0px at -1000px -1000px, transparent, transparent)",
      };

  return (
    <section
      className={`w-full overflow-hidden select-none ${className}`}
      style={{
        background: "transparent",
        width: "100%",
        fontFamily: "Inter, -apple-system, sans-serif",
      }}
    >
      {/* SVG Vector Wordmark zone that spans exact 100% width of the footer container */}
      <div
        ref={wrapRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-full flex items-end justify-center cursor-crosshair overflow-hidden pt-4"
      >
        {/* Layer 1: Ghosted Base Text (Always visible faintly with rich contrast) */}
        <div className="w-full flex items-end justify-center pointer-events-none">
          <svg
            viewBox="0 0 1200 170"
            className="w-full h-auto max-h-[220px] select-none overflow-visible"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="wordmarkGhostGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
                <stop offset="45%" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.01)" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="68%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="900"
              fontSize="196"
              letterSpacing="-0.045em"
              fill="url(#wordmarkGhostGrad)"
              className="font-black select-none"
            >
              Zobique Labs
            </text>
          </svg>
        </div>

        {/* Layer 2: Full White Spotlight Revealed Layer */}
        <div
          className="absolute inset-0 w-full flex items-end justify-center pointer-events-none transition-opacity duration-200"
          style={{
            opacity: hovered ? 1 : 0,
            ...spotlightMaskStyle,
          }}
        >
          <svg
            viewBox="0 0 1200 170"
            className="w-full h-auto max-h-[220px] select-none overflow-visible"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <text
              x="50%"
              y="68%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="900"
              fontSize="196"
              letterSpacing="-0.045em"
              fill="#ffffff"
              className="font-black select-none"
            >
              Zobique Labs
            </text>
          </svg>
        </div>

        {/* Screen Reader Accessible Label */}
        <span className="sr-only">Zobique Labs</span>
      </div>
    </section>
  );
}

export default BrandBanner;
