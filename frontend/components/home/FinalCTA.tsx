"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Section } from "../ui/Section";
import Link from "next/link";
import { Phone, Mail, Calendar, ArrowRight, Check } from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";

gsap.registerPlugin(ScrollTrigger);

const BENEFITS = [
  "No hiring or onboarding, automation goes live in weeks",
  "Dedicated automation engineer on every account",
  "Flexible engagement models, month-to-month or project-based",
];

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useGSAP(() => {
    if (!mounted || !ref.current) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      "[data-cta='card']",
      { opacity: 0, y: 50, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8 }
    )
      .fromTo(
        "[data-cta='heading']",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.4"
      )
      .fromTo(
        "[data-cta='subtitle']",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.2"
      )
      .fromTo(
        "[data-cta='benefit']",
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.35, stagger: 0.08 },
        "-=0.15"
      )
      .fromTo(
        "[data-cta='button']",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
        "-=0.1"
      )
      .fromTo(
        "[data-cta='contact']",
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.6 },
        "-=0.5"
      );
  }, { scope: ref, dependencies: [mounted] });

  const initialHide = mounted ? { opacity: 0 } : {};

  return (
    <div ref={ref}>
      <Section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div
          data-cta="card"
          className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden bg-primary shadow-xl"
          style={initialHide as React.CSSProperties}
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -top-16 -right-10 w-56 h-56 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 w-48 h-48 rounded-full bg-white/10" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-6 p-6 sm:p-10 lg:p-14">
            {/* Left: pitch */}
            <div className="flex flex-col justify-center text-white">
              <h2
                data-cta="heading"
                className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight leading-[1.1] mb-4"
                style={initialHide as React.CSSProperties}
              >
                Ready to Automate the Work Slowing You Down?
              </h2>
              <p
                data-cta="subtitle"
                className="text-white/90 text-base sm:text-lg mb-7 max-w-xl"
                style={initialHide as React.CSSProperties}
              >
                Join businesses using our AI automation to cut manual work,
                lower operating costs, and scale output without adding
                headcount.
              </p>

              <ul className="space-y-3 mb-9">
                {BENEFITS.map((b) => (
                  <li
                    key={b}
                    data-cta="benefit"
                    className="flex items-start gap-3 text-sm sm:text-base text-white/95"
                    style={initialHide as React.CSSProperties}
                  >
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full border border-white/60 flex items-center justify-center">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <div data-cta="button" style={initialHide as React.CSSProperties}>
                  <Link
                    href="/contact"
                    onClick={() => trackCtaClick("Book Discovery Call", "final_cta")}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-primary font-semibold py-3 px-7 rounded-md transition-colors text-base shadow-sm"
                  >
                    Book Discovery Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div data-cta="button" style={initialHide as React.CSSProperties}>
                  <Link
                    href="/about"
                    onClick={() => trackCtaClick("Know More", "final_cta")}
                    className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-7 rounded-md transition-colors border border-white/70 text-base"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: contact card */}
            <div
              data-cta="contact"
              className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-center shadow-lg"
              style={initialHide as React.CSSProperties}
            >
              <h3 className="text-xl font-bold text-foreground mb-2">
                Get in Touch
              </h3>
              <p className="text-sm text-muted mb-6">
                Our team will scope a tailored automation plan for your
                business - no commitment required.
              </p>

              <div className="space-y-5">
                <a href="tel:+919045597305" className="flex items-start gap-3 group">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-foreground">
                      Call Us / WhatsApp
                    </span>
                    <span className="block text-sm text-muted group-hover:text-primary transition-colors">
                      +91 90455 97305
                    </span>
                  </span>
                </a>

                <a href="mailto:support@zobique.com" className="flex items-start gap-3 group">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-foreground">
                      Email Us
                    </span>
                    <span className="block text-sm text-muted group-hover:text-primary transition-colors">
                      support@zobique.com
                    </span>
                  </span>
                </a>

                <Link href="/contact" onClick={() => trackCtaClick("Schedule a Meeting", "final_cta_contact_card")} className="flex items-start gap-3 group">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-primary" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-foreground">
                      Schedule a Meeting
                    </span>
                    <span className="block text-sm text-primary font-medium group-hover:underline">
                      Choose a time that works for you
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}