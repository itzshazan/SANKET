"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Section } from "../ui/Section";

export function ServiceHero({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
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
      "[data-sh='title']",
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(
      "[data-sh='sub']",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.35"
    );
  }, { scope: ref, dependencies: [mounted] });

  const initialHide = mounted ? { opacity: 0 } : {};

  return (
    <div ref={ref}>
      <Section className="pt-32 pb-24 border-b border-border bg-background text-center flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1
            data-sh="title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight"
            style={initialHide as React.CSSProperties}
          >
            {title}
          </h1>
          <p
            data-sh="sub"
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted max-w-2xl mx-auto leading-relaxed"
            style={initialHide as React.CSSProperties}
          >
            {subtitle}
          </p>
        </div>
      </Section>
    </div>
  );
}
