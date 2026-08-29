"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// ────────────────────────────────────────────────────────────
// Reveal - a lightweight scroll-triggered entrance wrapper.
//
// Usage:
//   <Reveal>              → fade-up with 0s delay
//   <Reveal delay={0.15}> → staggered by 150ms
//   <Reveal direction="left" distance={60}>
//   <Reveal as="li">      → renders as <li> instead of <div>
// ────────────────────────────────────────────────────────────

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  /** Entrance direction. Default "up". */
  direction?: Direction;
  /** How far the element travels (px). Default 40. */
  distance?: number;
  /** Extra delay in seconds. Use for stagger within a group. */
  delay?: number;
  /** Duration of the entrance (seconds). Default 0.7. */
  duration?: number;
  /** Render as a different HTML element. Default "div". */
  as?: React.ElementType;
  /** Additional className. */
  className?: string;
  /** ScrollTrigger start position. Default "top 90%". */
  start?: string;
  /** Whether the animation should replay on re-enter. Default false. */
  once?: boolean;
}

const directionMap: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  direction = "up",
  distance = 40,
  delay = 0,
  duration = 0.7,
  as = "div",
  className = "",
  start = "top 90%",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useGSAP(() => {
    if (!mounted || !ref.current) return;

    const { x: dx, y: dy } = directionMap[direction];

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        x: dx * distance,
        y: dy * distance,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
        },
      }
    );
  }, { scope: ref, dependencies: [mounted] });

  const initialHide = mounted ? { opacity: 0 } : {};
  const Element = (as || "div") as React.ElementType;

  return (
    <Element
      ref={ref}
      className={className}
      style={initialHide}
    >
      {children}
    </Element>
  );
}

// ────────────────────────────────────────────────────────────
// RevealGroup - orchestrates staggered reveals for children.
//
// Usage:
//   <RevealGroup stagger={0.1} className="grid grid-cols-3">
//     <Card /> <Card /> <Card />
//   </RevealGroup>
// ────────────────────────────────────────────────────────────

interface RevealGroupProps {
  children: React.ReactNode;
  /** Stagger delay between children (seconds). Default 0.08. */
  stagger?: number;
  /** Direction for all children. Default "up". */
  direction?: Direction;
  /** Distance in px. Default 40. */
  distance?: number;
  /** Animation duration per child. Default 0.7. */
  duration?: number;
  /** Additional className on the wrapper. */
  className?: string;
  /** ScrollTrigger start. Default "top 88%". */
  start?: string;
  /** Render wrapper as a different element. Default "div". */
  as?: React.ElementType;
}

export function RevealGroup({
  children,
  stagger = 0.08,
  direction = "up",
  distance = 40,
  duration = 0.7,
  className = "",
  start = "top 88%",
  as = "div",
}: RevealGroupProps) {

  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useGSAP(() => {
    if (!mounted || !ref.current) return;

    const targets = ref.current.children;
    if (!targets.length) return;

    const { x: dx, y: dy } = directionMap[direction];

    gsap.fromTo(
      targets,
      {
        opacity: 0,
        x: dx * distance,
        y: dy * distance,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: ref, dependencies: [mounted] });

  const Element = as as React.ElementType;

  return (
    <Element ref={ref} className={className}>
      {children}
    </Element>
  );
}
