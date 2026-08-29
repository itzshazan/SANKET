"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Section } from "../ui/Section";

export function WorkHero() {
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
      "[data-wh='badge']",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
    .fromTo(
      "[data-wh='title']",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.2"
    )
    .fromTo(
      "[data-wh='sub']",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.3"
    )
    .fromTo(
      "[data-wh='buttons']",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.3"
    )
    .fromTo(
      "[data-wh='image']",
      { opacity: 0, scale: 0.95, filter: "blur(4px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.8 },
      "-=0.6"
    );
  }, { scope: ref, dependencies: [mounted] });

  const initialHide = mounted ? { opacity: 0 } : {};

  return (
    <div ref={ref}>
      <Section className="pt-32 pb-24 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">
          
          {/* Left Column: Content */}
          <div className="space-y-6 flex flex-col items-start text-left">
            <div data-wh="badge" className="inline-block" style={initialHide as React.CSSProperties}>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF6600]">
                Our Work
              </span>
            </div>
            
            <h1
              data-wh="title"
              className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-foreground leading-[1.1] max-w-2xl"
              style={initialHide as React.CSSProperties}
            >
              From Idea to Impact
            </h1>
            
            <p
              data-wh="sub"
              className="text-lg md:text-xl text-muted max-w-xl leading-relaxed"
              style={initialHide as React.CSSProperties}
            >
              We help businesses move past manual, repetitive work by replacing it with AI systems that actually deliver measurable results. Explore how we&apos;ve partnered with teams to build smarter, faster, and more scalable solutions.
            </p>

            <div 
              data-wh="buttons" 
              className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto" 
              style={initialHide as React.CSSProperties}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg h-12 px-6 sm:px-8 border border-transparent bg-[#C2410C] hover:bg-[#9A3412] text-white shadow-[0_4px_14px_rgba(194,65,12,0.25)] active:scale-[0.98] w-full sm:w-auto"
              >
                Book Discovery Call
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg h-12 px-6 sm:px-8 border border-border bg-surface hover:bg-muted/10 text-foreground w-full sm:w-auto"
              >
                Explore services &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div 
            data-wh="image" 
            className="relative w-full aspect-square lg:aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl border border-white/5 bg-surface/50"
            style={initialHide as React.CSSProperties}
          >
            <Image
              src="/our_work_zqlabs.png"
              alt="Our Work at Zobique Labs"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </Section>
    </div>
  );
}
