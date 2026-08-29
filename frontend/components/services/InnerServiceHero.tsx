"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Section } from "../ui/Section";
import DotBloom from "../ui/DotBloom";

export function InnerServiceHero({
  title,
  subtitle,
  description,
  dotColor = "#c8c3b5",
  bloomColor = "#FF6600",
}: {
  title: string;
  subtitle: string;
  description: string;
  dotColor?: string;
  bloomColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useGSAP(() => {
    if (!mounted || !ref.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      "[data-hero='title']",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        "[data-hero='sub']",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        "[data-hero='desc']",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        "[data-hero='buttons']",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      );
  }, { scope: ref, dependencies: [mounted] });

  const initialHide = mounted ? { opacity: 0 } : {};

  return (
    <div ref={ref} className="relative overflow-hidden border-b border-border/50 bg-background">
      {/* Interactive DotBloom background with radial mask */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none z-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_48%,transparent_22%,black_80%)] [-webkit-mask-image:radial-gradient(ellipse_75%_65%_at_50%_48%,transparent_22%,black_80%)]">
          <DotBloom
            className="w-full h-full"
            dotColor={dotColor}
            bloomColor={bloomColor}
            background="transparent"
            speed={0.8}
            density={44}
            intensity={0.7}
            cursorRadius={150}
            cursorStrength={1.2}
            moveAmplitude={10}
            centerFade={true}
          />
        </div>
      )}

      {/* Soft gradient blend at the edges */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-background)_95%)]" />

      <Section className="py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1
            data-hero="title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
            style={initialHide as React.CSSProperties}
          >
            {title}
          </h1>
          <p
            data-hero="sub"
            className="text-lg sm:text-xl md:text-2xl text-primary font-medium mb-8"
            style={initialHide as React.CSSProperties}
          >
            {subtitle}
          </p>
          <p
            data-hero="desc"
            className="text-base sm:text-lg md:text-xl text-muted leading-relaxed"
            style={initialHide as React.CSSProperties}
          >
            {description}
          </p>
          <div
            data-hero="buttons"
            className="flex flex-col sm:flex-row gap-4 pt-8 justify-center"
            style={initialHide as React.CSSProperties}
          >
            <Link href="/contact">
              <button className="h-12 px-8 rounded-md bg-[#C2410C] text-white font-semibold text-sm hover:bg-[#9A3412] transition-colors shadow-lg shadow-orange-500/20 cursor-pointer w-full sm:w-auto">
                Book Discovery Call
              </button>
            </Link>
            <Link href="/about">
              <button className="h-12 px-8 rounded-md bg-transparent border border-border text-foreground font-semibold text-sm hover:bg-surface transition-colors cursor-pointer w-full sm:w-auto">
                Know more...
              </button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
