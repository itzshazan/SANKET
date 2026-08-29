"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeader } from "../ui/Section";
import { trackCtaClick } from "@/lib/analytics";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ProcessStep {
  id: string;
  step: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  ctaHref: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
  metric: string;
  metricLabel: string;
  marker: string;
  stageCode: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "discover",
    step: "01",
    label: "DISCOVER",
    title: "Uncover Opportunities. Define Strategy.",
    description:
      "We analyze your operational bottlenecks, business objectives, and technical constraints to architect a high-impact AI strategy and roadmap.",
    bullets: [
      "Operational workflow audit & bottleneck identification",
      "AI feasibility analysis, ROI modeling & tech stack evaluation",
      "Comprehensive system architecture blueprint & milestone timeline",
    ],
    cta: "Book Discovery Call",
    ctaHref: "/contact",
    secondaryCta: "View Services",
    secondaryCtaHref: "/services",
    metric: "100%",
    metricLabel: "Strategic Alignment",
    marker: "Stage 01 · Alignment",
    stageCode: "STAGE_01_DISCOVER",
  },
  {
    id: "design",
    step: "02",
    label: "DESIGN",
    title: "Architect Workflows. Craft Interfaces.",
    description:
      "We transform strategic insights into intuitive user journeys, high-fidelity UI systems, and interactive prototypes tailored for human-AI collaboration.",
    bullets: [
      "Human-in-the-loop AI interaction design & user journeys",
      "Design systems, reusable component tokens & crisp typography",
      "Interactive clickable prototypes validated against business goals",
    ],
    cta: "Explore Our Solutions",
    ctaHref: "/services",
    secondaryCta: "See Case Studies",
    secondaryCtaHref: "/work",
    metric: "10x",
    metricLabel: "Design Velocity",
    marker: "Stage 02 · Systems",
    stageCode: "STAGE_02_DESIGN",
  },
  {
    id: "build",
    step: "03",
    label: "BUILD",
    title: "Engineer Scalable AI & Software Systems.",
    description:
      "We turn approved concepts into robust, production-grade applications powered by modern LLMs, autonomous agents, and resilient cloud architectures.",
    bullets: [
      "Full-stack web applications, cloud infrastructure & API integrations",
      "Autonomous agent pipelines, custom RAG & private model fine-tuning",
      "Enterprise-grade security, automated testing & strict type safety",
    ],
    cta: "View Our Work",
    ctaHref: "/work",
    secondaryCta: "Start a Project",
    secondaryCtaHref: "/contact",
    metric: "99.9%",
    metricLabel: "System Reliability",
    marker: "Stage 03 · Production",
    stageCode: "STAGE_03_BUILD",
  },
  {
    id: "launch-evolve",
    step: "04",
    label: "LAUNCH & EVOLVE",
    title: "Deploy Seamlessly. Continuously Optimize.",
    description:
      "We execute smooth zero-downtime launches, monitor live model telemetry, and continuously evolve the system with real-world feedback and data.",
    bullets: [
      "Zero-downtime deployment & enterprise cloud provisioning",
      "24/7 telemetry, agent observability & latency optimization",
      "Continuous model retraining, feature iteration & A/B testing",
    ],
    cta: "Launch Your Product",
    ctaHref: "/contact",
    secondaryCta: "Contact Us",
    secondaryCtaHref: "/contact",
    metric: "24/7",
    metricLabel: "Active Telemetry",
    marker: "Stage 04 · Scale",
    stageCode: "STAGE_04_EVOLVE",
  },
];

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

const lerp = (from: number, to: number, amount: number) =>
  from + (to - from) * amount;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}



// Dedicated reading pause window: 50% hold time for starting card, 40% for intermediate cards
const HOLD_RATIO_START = 0.50;
const HOLD_RATIO_MID = 0.40;
// TOTAL_STAGES = 3.6 provides a balanced delay after all 4 cards stack together before unpinning
const TOTAL_STAGES = 3.6;

function getCardPresentation(
  index: number,
  globalProgress: number,
  deckHeight: number,
  rowHeight: number,
  stepCount: number
) {
  const safeDeckHeight = Math.max(deckHeight, rowHeight * stepCount);
  const totalTransitions = Math.max(stepCount - 1, 1);

  // raw ranges from 0.0 to TOTAL_STAGES (e.g. 0.0 to 5.2)
  const raw = clamp(globalProgress) * TOTAL_STAGES;
  const currentActiveStep = Math.min(Math.floor(raw), totalTransitions);
  const segmentProgress = raw - Math.min(currentActiveStep, totalTransitions - 1);

  // Calculate transition factor t: 0 during hold window, eases 0->1 during transition
  let t = 0;
  if (currentActiveStep < totalTransitions) {
    const currentHoldRatio = currentActiveStep === 0 ? HOLD_RATIO_START : HOLD_RATIO_MID;
    if (segmentProgress > currentHoldRatio) {
      const transitionProgress =
        (segmentProgress - currentHoldRatio) / (1 - currentHoldRatio);
      t = easeInOutCubic(clamp(transitionProgress));
    }
  } else {
    // When all 4 cards are stacked together (final stage, raw in [3.0, 5.2]), card is 100% in place
    t = 1;
  }

  // 1. Cards before current active step: collapsed and stacked at the top
  if (index < currentActiveStep) {
    const settledDepth = (stepCount - index) * 1.5;

    return {
      cardStyle: {
        top: index * rowHeight,
        height: rowHeight,
        zIndex: 10 + index * 10,
        opacity: 1,
        transform: `translate3d(0, 0, ${settledDepth.toFixed(1)}px) rotateX(-0.35deg)`,
      },
      innerStyle: {
        opacity: 0,
        pointerEvents: "none" as const,
      },
      collapsed: true,
    };
  }

  // 2. Current active base card
  if (index === currentActiveStep) {
    const fullHeight = safeDeckHeight - index * rowHeight;
    const currentHeight =
      currentActiveStep === totalTransitions
        ? fullHeight
        : lerp(fullHeight, rowHeight, t);
    const settlingDepth =
      currentActiveStep === totalTransitions
        ? 0
        : t * (stepCount - index) * 1.5;
    const settlingPitch = currentActiveStep === totalTransitions ? 0 : -0.35 * t;

    return {
      cardStyle: {
        top: index * rowHeight,
        height: currentHeight,
        zIndex: 10 + index * 10,
        opacity: 1,
        transform: `translate3d(0, 0, ${settlingDepth.toFixed(1)}px) rotateX(${settlingPitch.toFixed(2)}deg)`,
      },
      innerStyle: {
        opacity: currentActiveStep === totalTransitions ? 1 : 1 - t,
        pointerEvents: (currentActiveStep === totalTransitions || t < 0.5
          ? "auto"
          : "none") as "none" | "auto",
      },
      collapsed: currentActiveStep === totalTransitions ? false : t > 0.6,
    };
  }

  // 3. Incoming card that slides UP and OVER the previous card with 3D tactile pitch
  if (index === currentActiveStep + 1) {
    const fullHeight = safeDeckHeight - index * rowHeight;
    const currentOffset = (1 - t) * fullHeight;
    const pitchAngle = (1 - t) * 2.25;
    const lift = Math.sin(Math.PI * t) * 18;

    return {
      cardStyle: {
        top: index * rowHeight,
        height: fullHeight,
        zIndex: 10 + index * 10,
        opacity: t > 0 ? 1 : 0,
        transform: `translate3d(0, ${currentOffset.toFixed(1)}px, ${lift.toFixed(1)}px) rotateX(${pitchAngle.toFixed(2)}deg)`,
      },
      innerStyle: {
        opacity: t,
        pointerEvents: (t > 0.5 ? "auto" : "none") as "none" | "auto",
      },
      collapsed: false,
    };
  }

  // 4. Future cards waiting below
  return {
    cardStyle: {
      top: index * rowHeight,
      height: safeDeckHeight - index * rowHeight,
      zIndex: 10 + index * 10,
      opacity: 0,
      transform: "translateY(100%)",
    },
    innerStyle: {
      opacity: 0,
      pointerEvents: "none" as const,
    },
    collapsed: false,
  };
}

function CheckIcon() {
  return (
    <span className="pcd-check" aria-hidden="true">
      <svg viewBox="0 0 20 20" focusable="false">
        <circle cx="10" cy="10" r="8.4" />
        <path d="m6.2 10.2 2.5 2.5 5.1-5.5" />
      </svg>
    </span>
  );
}

function StepKickerContent({
  step,
  stepIndex,
  totalSteps,
}: {
  step: ProcessStep;
  stepIndex: number;
  totalSteps: number;
}) {
  return (
    <div className="pcd-step-text">
      <span className="pcd-step-label">{step.label}</span>
      <span className="pcd-step-status-chip">
        Phase {stepIndex + 1} of {totalSteps}
      </span>
    </div>
  );
}

/* =========================================================================
   DYNAMIC RIGHT-SIDE VISUALS FOR EACH ZOBIQUE LABS STAGE
   ========================================================================= */

// Visual 1: Discover (nowaterdiscover.png)
function DiscoverVisual() {
  return (
    <div className="pcd-visual-shell relative overflow-hidden flex items-center justify-center bg-[#0B0D13] group">
      <Image
        src="/nowaterdiscover.png"
        alt="Discover - Uncover Opportunities & Define Strategy"
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 344px, (max-width: 1024px) 480px, 420px"
        priority
      />
    </div>
  );
}

// Visual 2: Design (nwewewdesign.png)
function DesignVisual() {
  return (
    <div className="pcd-visual-shell relative overflow-hidden flex items-center justify-center bg-[#0B0D13] group">
      <Image
        src="/nwewewdesign.png"
        alt="Design - UI Systems, Component Tokens & Wireframes"
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 344px, (max-width: 1024px) 480px, 420px"
      />
    </div>
  );
}

// Visual 3: Build (broooo3.png)
function BuildVisual() {
  return (
    <div className="pcd-visual-shell relative overflow-hidden flex items-center justify-center bg-[#0B0D13] group">
      <Image
        src="/broooo3.png"
        alt="Build - Code, Autonomous Agents & System Architecture"
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 344px, (max-width: 1024px) 480px, 420px"
      />
    </div>
  );
}

// Visual 4: Launch & Evolve (last2.png)
function LaunchVisual() {
  return (
    <div className="pcd-visual-shell relative overflow-hidden flex items-center justify-center bg-[#0B0D13] group">
      <Image
        src="/last2.png"
        alt="Launch & Evolve - Deploy, Live Telemetry & Continuous Optimization"
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 344px, (max-width: 1024px) 480px, 420px"
      />
    </div>
  );
}

function DynamicProcessVisual({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <DiscoverVisual />;
    case 1:
      return <DesignVisual />;
    case 2:
      return <BuildVisual />;
    case 3:
    default:
      return <LaunchVisual />;
  }
}

/* =========================================================================
   MAIN PROCESS CARD DECK SECTION COMPONENT
   ========================================================================= */

export function Process({
  steps = PROCESS_STEPS,
  initialStep = 0,
  frameHeight = 500,
  rowHeight = 54,
  className = "",
}: {
  steps?: ProcessStep[];
  initialStep?: number;
  frameHeight?: number;
  rowHeight?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fullPinRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const [deckHeight, setDeckHeight] = useState(frameHeight);
  const [effectiveRowHeight, setEffectiveRowHeight] = useState(rowHeight);
  const [progress, setProgress] = useState(
    initialStep > 0 ? initialStep / (steps.length - 1) : 0
  );

  const stepCount = steps.length;
  const activeStep = Math.min(
    Math.floor(progress * TOTAL_STAGES + 0.1),
    stepCount - 1
  );

  const shellStyle = useMemo(
    () =>
      ({
        "--pcd-frame-height-base": `${frameHeight}px`,
        "--pcd-row-height-base": `${rowHeight}px`,
      } as React.CSSProperties),
    [frameHeight, rowHeight]
  );

  useGSAP(
    () => {
      if (!containerRef.current || !pinRef.current || !fullPinRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1025px)", () => {
        ScrollTrigger.create({
          trigger: fullPinRef.current,
          endTrigger: containerRef.current,
          start: "top 80px",
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = clamp(self.progress);
            setProgress(p);
          },
        });
      });

      return () => {
        mm.revert();
      };
    },
    { scope: containerRef, dependencies: [stepCount] }
  );

  const scrollToStep = useCallback(
    (index: number) => {
      if (!containerRef.current) return;
      if (window.matchMedia("(max-width: 1024px)").matches) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = window.scrollY + rect.top;
      const totalScrollDistance =
        containerRef.current.offsetHeight - window.innerHeight;

      // Target progress to land comfortably inside that step's reading hold window
      const stepTargetPct =
        index === 0
          ? 0
          : (index + 0.15) / TOTAL_STAGES;

      const targetScroll =
        containerTop - 80 + Math.min(stepTargetPct, 1) * totalScrollDistance;

      window.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    },
    []
  );

  useEffect(() => {
    const deckEl = deckRef.current;
    if (!deckEl) return undefined;

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (!entry) return;
        const h = entry.contentRect.height;
        if (h > 0) {
          setDeckHeight(h);
        }
      });
      observer.observe(deckEl);
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="pcd-section relative w-full border-b border-border bg-background"
      style={{ height: "650vh" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6" ref={fullPinRef}>
        <div className="mb-6">
          <SectionHeader
            title="From Idea to Production"
            subtitle="Our battle-tested product framework to take custom AI systems, web applications, and autonomous agents from initial concept to enterprise scale."
            className="!mb-0"
          />
        </div>

        <div className="pcd-wrapper" ref={pinRef}>
          <section
            className={`pcd-deck ${className}`.trim()}
            style={shellStyle}
            aria-label="Zobique Labs product development workflow"
          >
            <div className="pcd-deck-area" ref={deckRef}>
              {steps.map((step, index) => {
                const presentation = getCardPresentation(
                  index,
                  progress,
                  deckHeight,
                  effectiveRowHeight,
                  stepCount
                );

                return (
                  <article
                    className="pcd-card"
                    key={step.id}
                    style={presentation.cardStyle}
                  >
                    <div
                      className="pcd-card-inner"
                      style={presentation.innerStyle}
                    >
                      <button
                        className="pcd-card-kicker"
                        type="button"
                        aria-current={
                          index === activeStep ? "step" : undefined
                        }
                        onClick={() => scrollToStep(index)}
                      >
                        <StepKickerContent
                          step={step}
                          stepIndex={index}
                          totalSteps={stepCount}
                        />
                      </button>

                      <div className="pcd-card-panel">
                        <div className="pcd-copy">
                          <div className="pcd-copy-main">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>

                            <ul className="pcd-bullets">
                              {step.bullets.map((bullet) => (
                                <li key={bullet}>
                                  <CheckIcon />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pcd-copy-bottom">
                            <div className="pcd-cta-group">
                              <Link
                                href={step.ctaHref}
                                className="pcd-cta"
                                onClick={() =>
                                  trackCtaClick(
                                    step.cta,
                                    `process_step_${step.id}`
                                  )
                                }
                              >
                                <span>{step.cta}</span>
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </Link>

                              {step.secondaryCta && step.secondaryCtaHref && (
                                <Link
                                  href={step.secondaryCtaHref}
                                  className="pcd-cta-ghost"
                                  onClick={() =>
                                    trackCtaClick(
                                      step.secondaryCta!,
                                      `process_step_sec_${step.id}`
                                    )
                                  }
                                >
                                  {step.secondaryCta}
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>

                        <DynamicProcessVisual index={index} />
                      </div>
                    </div>

                    <button
                      className="pcd-collapsed-label"
                      style={{
                        display: presentation.collapsed ? "flex" : "none",
                      }}
                      type="button"
                      onClick={() => scrollToStep(index)}
                    >
                      <StepKickerContent
                        step={step}
                        stepIndex={index}
                        totalSteps={stepCount}
                      />
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
