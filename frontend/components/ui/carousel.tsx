"use client";

import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface SlideData {
  title: string;
  description?: string;
  badge?: string;
  button?: string;
  src: string;
  href?: string;
  subHeader?: string;
}

interface CarouselProps {
  slides: SlideData[];
  autoPlayInterval?: number; // in ms, default 6000, 0 to disable
  className?: string;
}

export function Carousel({
  slides,
  autoPlayInterval = 4000,
  className = "",
}: CarouselProps) {
  const n = slides.length;
  // Start in the middle clone set (index n corresponds to real index 0)
  const [virtualIndex, setVirtualIndex] = useState(n);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Triple the slides array for seamless infinite looping on both sides
  const extendedSlides = useMemo(() => {
    return [...slides, ...slides, ...slides];
  }, [slides]);

  // Current real index (0 to n - 1)
  const realIndex = ((virtualIndex % n) + n) % n;

  // Responsive container width via non-blocking ResizeObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentBoxSize
          ? entry.contentBoxSize[0]?.inlineSize || entry.contentRect.width
          : entry.contentRect?.width || 0;
        if (width > 0) setContainerWidth(width);
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Re-enable transitions after an instant jump
  useEffect(() => {
    if (!enableTransition) {
      const frame = requestAnimationFrame(() => {
        setEnableTransition(true);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [enableTransition]);

  const handlePrevious = useCallback(() => {
    setVirtualIndex((prev) => prev - 1);
  }, []);

  const handleNext = useCallback(() => {
    setVirtualIndex((prev) => prev + 1);
  }, []);

  // Seamless jump without animation when reaching edge clone sets
  const handleAnimationComplete = () => {
    if (virtualIndex >= n * 2) {
      setEnableTransition(false);
      setVirtualIndex((prev) => prev - n);
    } else if (virtualIndex < n) {
      setEnableTransition(false);
      setVirtualIndex((prev) => prev + n);
    }
  };

  // Robust Autoplay Timer with 4-second cycle
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoplay = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
    if (autoPlayInterval > 0 && !isPaused) {
      autoPlayTimerRef.current = setInterval(() => {
        setVirtualIndex((prev) => prev + 1);
      }, autoPlayInterval);
    }
  }, [autoPlayInterval, isPaused]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [resetAutoplay, virtualIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrevious, handleNext]);

  // Responsive slide sizing for landscape cards
  let slideWidth = 1020;
  let gap = 20;

  if (containerWidth < 640) {
    slideWidth = Math.max(containerWidth * 0.98, containerWidth - 8);
    gap = 10;
  } else if (containerWidth < 1024) {
    slideWidth = Math.min(containerWidth * 0.94, 860);
    gap = 16;
  } else {
    slideWidth = Math.min(containerWidth * 0.88, 1080);
    gap = 20;
  }

  // Calculate target offset so virtualIndex is always centered
  const targetOffset =
    containerWidth / 2 - virtualIndex * (slideWidth + gap) - slideWidth / 2;

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden py-2 sm:py-4 select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Viewport Stage */}
      <div className="relative w-full overflow-visible py-1 sm:py-2">
        <motion.div
          className="flex items-center"
          animate={{ x: targetOffset }}
          transition={
            enableTransition
              ? {
                  type: "spring",
                  stiffness: 220,
                  damping: 28,
                  mass: 0.9,
                }
              : { duration: 0 }
          }
          onAnimationComplete={handleAnimationComplete}
          drag="x"
          dragConstraints={{ left: targetOffset, right: targetOffset }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -40) {
              handleNext();
            } else if (info.offset.x > 40) {
              handlePrevious();
            }
          }}
        >
          {extendedSlides.map((slide, index) => {
            const isCurrent = index === virtualIndex;

            return (
              <div
                key={index}
                onClick={() => {
                  if (!isCurrent) setVirtualIndex(index);
                }}
                style={{
                  width: `${slideWidth}px`,
                  marginRight: `${gap}px`,
                }}
                className={`relative flex-shrink-0 flex flex-col md:flex-row min-h-[420px] md:min-h-[420px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500 bg-[#0f1117] ${
                  isCurrent
                    ? "opacity-100 scale-100 z-10 border-white/20"
                    : "opacity-50 hover:opacity-80 scale-[0.96] z-0 border-white/10"
                }`}
              >
                {/* Left Panel: Clean Dark Content Area */}
                <div className="flex-1 md:w-[55%] p-4 sm:p-7 md:p-9 lg:p-10 flex flex-col justify-between text-left z-10">
                  {/* Top: Category Badge */}
                  <div>
                    {slide.badge && (
                      <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold tracking-wide bg-white/10 text-white/90 border border-white/15">
                        {slide.badge}
                      </span>
                    )}
                  </div>

                  {/* Middle: Brand + Headline + Description */}
                  <div className="my-4 sm:my-6">
                    {/* Brand Header */}
                    <div className="flex items-center gap-1.5 mb-2.5 sm:mb-3">
                      <span className="text-base sm:text-xl font-bold tracking-tight text-[#FF6600]">
                        {slide.subHeader || "zobique"}
                      </span>
                      <span className="text-base sm:text-xl font-semibold text-white">
                        labs
                      </span>
                    </div>

                    {/* Bold Headline */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-extrabold text-white tracking-tight leading-[1.25]">
                      {slide.title}
                    </h3>

                    {/* Contextual Description */}
                    {slide.description && (
                      <p className="mt-2.5 text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed">
                        {slide.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom: Story Link */}
                  <div>
                    {slide.href ? (
                      <Link
                        href={slide.href}
                        onClick={(e) => {
                          if (!isCurrent) {
                            e.preventDefault();
                            setVirtualIndex(index);
                          }
                        }}
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white hover:text-[#FF6600] transition-colors group cursor-pointer"
                      >
                        <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-[#FF6600]">
                          {slide.button || "View the story"}
                        </span>
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5 font-sans">
                          &rarr;
                        </span>
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white hover:text-[#FF6600] transition-colors group cursor-pointer">
                        <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-[#FF6600]">
                          {slide.button || "View the story"}
                        </span>
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5 font-sans">
                          &rarr;
                        </span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Panel: Standardized 3D Illustration Showcase Frame */}
                <div className="w-full md:w-[48%] flex items-center justify-center p-3.5 sm:p-6 md:p-8 lg:p-10 border-t md:border-t-0 md:border-l border-white/10 bg-[#12141d]/50">
                  <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl md:rounded-[22px] overflow-hidden bg-[#1a1c27]/40 flex items-center justify-center">
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover object-center rounded-2xl md:rounded-[22px] transition-transform duration-700 ease-out"
                      style={{
                        transform: isCurrent ? "scale(1.02)" : "scale(1.0)",
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Floating Centered Flat Pill Controls (< 1 / 4 >) */}
      <div className="flex items-center justify-center mt-6 sm:mt-8">
        <div className="inline-flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#11131a] text-white border border-white/15">
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous Slide"
            className="p-1 sm:p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all active:scale-90 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Slide Indicator Counter */}
          <span className="text-xs sm:text-sm font-mono font-semibold tracking-wider text-white/90 select-none">
            {realIndex + 1} / {n}
          </span>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Slide"
            className="p-1 sm:p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all active:scale-90 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
