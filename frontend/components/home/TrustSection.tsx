"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "../ui/Section";
import { Reveal, RevealGroup } from "../ui/Reveal";

interface StatItem {
  value: string;
  label: string;
  renderCount: (progress: number) => string;
}

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

          const duration = 1600;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            // Ease out cubic
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

    return () => {
      observer.disconnect();
    };
  }, [stat]);

  return <span ref={ref}>{displayValue}</span>;
}

const partnerLogos = [
  { name: "NCS", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/f_auto,q_auto,w_300/v1777100591/ncs-small-logo_ucxlog.png" },
  { name: "Hobfit", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/f_auto,q_auto,w_240/v1776186102/hobfit_ypukos.png" },
  { name: "Ace10x", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/f_auto,q_auto,w_240/v1784953287/ace10x_wauorc.png" },
  { name: "Clerk", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/f_auto,q_auto,w_240/v1777102661/clerk_bzvmrq.png" },
  { name: "Appspine", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/f_auto,q_auto,w_240/v1774548949/appspine_xvlp6a.png" },
  { name: "German Leap", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/f_auto,q_auto,w_240/v1775897286/germanLeap_virujq.png" },
  { name: "Agnistoka", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/f_auto,q_auto,w_240/v1775897075/agnistoka_rikzrv.png" },
  { name: "Mera Nivas", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/f_auto,q_auto,w_240/v1775898712/meranivas_k05kpt.png" },
  { name: "Aipply", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/f_auto,q_auto,w_240/v1776186160/aipply_a4fidw.png" },
];

const proofStats: StatItem[] = [
  {
    value: "50+",
    label: "Clients served",
    renderCount: (p) => `${Math.round(p * 50)}+`,
  },
  {
    value: "2-16 wks",
    label: "Delivery time",
    renderCount: (p) => `2-${Math.max(2, Math.round(p * 16))} wks`,
  },
  {
    value: "24/7",
    label: "Automated support",
    renderCount: (p) => `${Math.round(p * 24)}/7`,
  },
  {
    value: "3x+",
    label: "Faster operations",
    renderCount: (p) => `${Math.round(p * 3)}x+`,
  },
  {
    value: "100%",
    label: "Custom-built architecture",
    renderCount: (p) => `${Math.round(p * 100)}%`,
  },
];

const proofPoints = [
  {
    eyebrow: "Featured in India Today",
    title: "Recognized for turning a career insight into a real AI business platform.",
    href: "https://www.indiatoday.in/education-today/how-i-made-it/story/how-a-btech-student-turned-friends-career-questions-into-the-ai-startup-zobique-2949089-2026-07-16",
    cta: "Read the feature",
    image: "https://res.cloudinary.com/dufaxdxsj/image/upload/f_auto,q_auto:eco,w_360/v1784954656/India_today_bi30jy.png",
    bgImage: "https://res.cloudinary.com/deht0dsks/image/upload/f_auto,q_auto:eco,w_600/v1787919123/edfdf97e-eded-41df-800d-b850b0f96d8f.png",
    bgPosition: "object-right",
    accent: "from-[#FFF4ED] via-[#FFF8F2] to-[#FFFFFF]",
    borderAccent: "border-[#F26522]/30",
    outcome: "Public proof that the work is credible, relevant, and strategically positioned in the AI ecosystem.",
  },
  {
    eyebrow: "Government-facing deployment",
    title: "Delivering a live AI service integrated directly with the National Career Service (NCS).",
    href: "https://ncs.zobique.com/",
    cta: "Visit the service",
    image: "https://res.cloudinary.com/dufaxdxsj/image/upload/f_auto,q_auto:eco,w_240/v1777100591/ncs-small-logo_ucxlog.png",
    bgImage: "/government-doc-bg.jpg",
    bgPosition: "object-right",
    accent: "from-[#F7FAFC] via-[#FFFFFF] to-[#F7FAFC]",
    borderAccent: "border-border",
    outcome: "Operational proof in a high-trust public environment, not just marketing language.",
  },
];

export function TrustSection() {
  return (
    <Section className="relative border-b border-border bg-[#FAFAF8] overflow-hidden">
      {/* Ambient premium background lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/4 -z-10 h-[400px] w-[400px] rounded-2xl bg-[#FF5A1F] opacity-[0.03] blur-[100px]" />
        <div className="absolute left-0 bottom-0 -z-10 h-[300px] w-[300px] rounded-2xl bg-[#FF5A1F] opacity-[0.02] blur-[80px]" />
      </div>

      <div className="relative z-10 w-full">
        <Reveal>
          <SectionHeader
            title="Proven AI Delivery, Not Just AI Hype"
            subtitle="The signal matters: we build in public, launch in production, and deliver systems that improve operations, support teams, and unlock measurable business growth."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mb-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {proofStats.map((stat) => (
              <div key={stat.label} className="group relative rounded-2xl border border-border bg-white p-6 md:p-7 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_12px_30px_rgba(255,90,31,0.06)] hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#FF5A1F]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF5A1F] opacity-0 blur-[30px] rounded-2xl group-hover:opacity-[0.08] transition-opacity duration-500" />
                
                <div className="relative z-10 text-3xl md:text-4xl font-extrabold tracking-tight text-foreground transition-all duration-300">
                  <StatCounter stat={stat} />
                </div>
                <div className="relative z-10 mt-3 text-[11px] uppercase tracking-[0.15em] text-muted font-semibold leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mb-14 flex w-full max-w-6xl overflow-hidden rounded-2xl border border-border/60 bg-white/60 backdrop-blur-md shadow-sm [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div
              className="absolute inset-0 pointer-events-none opacity-20 blur-[0.5px]"
              style={{
                backgroundImage: `radial-gradient(circle at 1.5px 1.5px, currentColor 1.5px, transparent 1.5px)`,
                backgroundSize: "16px 16px",
              }}
            />
            <style>{`
              @keyframes slide-infinite {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-slide-infinite {
                animation: slide-infinite 36s linear infinite;
                display: flex;
                width: max-content;
              }
              .animate-slide-infinite:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="relative z-10 animate-slide-infinite items-center gap-12 px-6 py-7 sm:gap-16 sm:px-10">
              {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                <div
                  key={`${logo.name}-${idx}`}
                  className="relative h-9 w-28 shrink-0 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 hover:scale-105 sm:h-11 sm:w-36 flex items-center justify-center"
                >
                  <Image
                    src={logo.url}
                    alt={`${logo.name} logo`}
                    fill
                    sizes="(max-width: 640px) 112px, 144px"
                    className="object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <RevealGroup stagger={0.12} className="grid gap-6 lg:grid-cols-2">
          {proofPoints.map((proof) => (
            <div key={proof.title} className="relative group lg:col-span-1 h-full" style={{ opacity: 0 }}>
              {/* Premium Gradient Shadow on Hover */}
              <div className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-br from-[#FF5A1F] via-[#FF8A00] to-[#FF5A1F] opacity-0 blur-[12px] transition-all duration-500 group-hover:opacity-[0.15] group-hover:-translate-y-1" />
              
              <article
                className={`relative h-full overflow-hidden rounded-2xl border ${proof.borderAccent} ${
                  proof.bgImage
                    ? "bg-[#F7F8F9]"
                    : `bg-gradient-to-br ${proof.accent} bg-white`
                } p-7 md:p-10 transition-transform duration-500 group-hover:-translate-y-1 shadow-sm`}
              >
                {proof.bgImage && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <Image
                      src={proof.bgImage}
                      alt={proof.eyebrow}
                      fill
                      sizes="(max-width: 640px) 340px, (max-width: 1024px) 480px, 560px"
                      quality={70}
                      className={`object-cover ${proof.bgPosition} transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100`}
                    />
                    {/* Overlay added only where text is located (left side on desktop, top on mobile), keeping the right area completely normal and clean */}
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-[#F7F8F9] from-0% via-[#F7F8F9] via-50% to-transparent to-75% md:bg-gradient-to-r md:from-[#F7F8F9] md:from-0% md:via-[#F7F8F9] md:via-55% md:to-transparent md:to-75%"
                    />
                  </div>
                )}

                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF5A1F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center h-full">
                  <div className="flex flex-col h-full justify-center space-y-5">
                    <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#FF5A1F]">
                      {proof.eyebrow}
                    </p>
                    <h3 className="text-2xl md:text-[28px] font-extrabold tracking-tight text-foreground leading-[1.15]">
                      {proof.title}
                    </h3>
                    <p className="text-[14px] leading-[1.6] text-muted-foreground">{proof.outcome}</p>
                    <div className="flex flex-wrap items-center gap-3 pt-4 mt-auto">
                      <Link
                        href={proof.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center rounded-2xl border border-border/80 bg-white/95 backdrop-blur-sm px-6 py-2.5 text-[13px] font-semibold text-foreground shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#FF5A1F]/40 hover:text-[#FF5A1F] hover:shadow-[0_4px_12px_rgba(255,90,31,0.1)] sm:w-auto sm:justify-start"
                      >
                        {proof.cta}
                        <svg className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center justify-center rounded-2xl border border-border/50 bg-white/90 backdrop-blur-sm p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] min-h-[200px] group-hover:shadow-[0_12px_40px_rgba(255,90,31,0.08)] transition-all duration-500 group-hover:border-[#FF5A1F]/20">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={proof.image}
                        alt={proof.eyebrow}
                        width={420}
                        height={260}
                        sizes="(max-width: 640px) 200px, 320px"
                        quality={70}
                        className={`h-auto max-h-32 w-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-105 ${proof.eyebrow.includes("India Today") ? "shadow-[0_18px_40px_rgba(242,101,34,0.12)] group-hover:shadow-[0_24px_50px_rgba(242,101,34,0.2)]" : ""}`}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
