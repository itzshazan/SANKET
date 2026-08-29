"use client";

import React, { useActionState, useEffect, useRef, useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { trackContactSubmit } from "@/lib/analytics";
import { WorldMap } from "./WorldMap";
import { CheckCircle2, Loader2 } from "lucide-react";

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className = "" }: ContactSectionProps) {
  const [projectDesc, setProjectDesc] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    message: "",
  });

  // Handle ?service= query param for prefilling
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const service = params.get("service");
      if (service) {
        setProjectDesc(
          `I am interested in ${service}.\n\nPlease provide more information on how Zobique Labs can help our team.`
        );
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // Track submission and scroll on success
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      const params = new URLSearchParams(window.location.search);
      const service = params.get("service") || undefined;
      trackContactSubmit(service);
    }
  }, [state.success]);

  return (
    <section
      id="contact"
      className={`w-full py-14 sm:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 flex justify-center bg-background text-foreground ${className}`}
    >
      {/* Main Outer Container Card - Full max-w-7xl Width matching Why Zobique Labs Section */}
      <div className="relative w-full max-w-7xl rounded-2xl sm:rounded-[30px] p-4 sm:p-8 md:p-10 lg:p-12 border bg-surface border-border shadow-[0_20px_50px_rgba(0,0,0,0.05)]">

        {/* Two-Column Responsive Grid Layout with Generous Space Between Left & Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-start">

          {/* ================= LEFT COLUMN: CONTACT INFO & WORLD MAP ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">

            {/* Top Info Header */}
            <div className="space-y-4 sm:space-y-5">

              {/* Heading */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight leading-tight text-foreground">
                  Let&apos;s Build Something Intelligent Together
                </h2>

                {/* Description */}
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed max-w-lg text-muted">
                  Have a challenge only AI can solve? We&apos;d love to hear about it. Whether you&apos;re exploring automation, building custom AI solutions, or just have a question - our team is ready to help turn your ideas into reality.
                </p>
              </div>

              {/* Contact Details - Stacked row by row on small screens, inline with dots on sm+ */}
              <div className="pt-1 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-2 sm:gap-y-1.5 sm:gap-x-2 text-xs font-medium text-[#4A4A4A]">
                <div className="flex items-center gap-1.5">
                  <span className="shrink-0 font-semibold text-[#2D3748]">General Inquiries:</span>
                  <a
                    href="mailto:contact@zobique.com"
                    className="text-foreground hover:text-[#C2410C] transition-colors font-medium break-all"
                  >
                    contact@zobique.com
                  </a>
                </div>
                <span className="hidden sm:inline text-border select-none mx-1">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="shrink-0 font-semibold text-[#2D3748]">Call Us:</span>
                  <a
                    href="tel:+919045597305"
                    className="text-foreground hover:text-[#C2410C] transition-colors font-medium whitespace-nowrap"
                  >
                    +91 90455 97305
                  </a>
                </div>
                <span className="hidden sm:inline text-border select-none mx-1">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="shrink-0 font-semibold text-[#2D3748]">Support:</span>
                  <a
                    href="mailto:support@zobique.com"
                    className="text-foreground hover:text-[#C2410C] transition-colors font-medium break-all"
                  >
                    support@zobique.com
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom World Map Section */}
            <div className="pt-4 sm:pt-5 w-full mt-auto">
              <div className="w-full max-w-full">
                <WorldMap isDark={false} />
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: COMPACT PREMIUM BLACK FORM PANEL WITH SHARP BORDERS ================= */}
          <div className="lg:col-span-5 flex flex-col justify-center w-full">
            <div
              ref={formRef}
              className="relative overflow-hidden rounded-xl px-4 py-7 sm:px-6 sm:py-10 md:px-7 md:py-11 border bg-gradient-to-br from-[#1a1a1a] to-[#050505] border-white/[0.12] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_32px_90px_-16px_rgba(0,0,0,0.2)] transition-shadow duration-500 ease-out w-full max-w-full sm:max-w-[460px] mx-auto lg:ml-auto lg:mr-0"
            >
              {/* Technical Grid Pattern Overlay */}
              <div
                className="absolute -top-1 -right-1 w-56 h-56 sm:w-64 sm:h-64 pointer-events-none z-0"
                style={{
                  maskImage: "radial-gradient(circle at 100% 0%, black 25%, transparent 75%)",
                  WebkitMaskImage: "radial-gradient(circle at 100% 0%, black 25%, transparent 75%)",
                }}
                aria-hidden="true"
              >
                {/* SVG Technical Grid */}
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern
                      id="form-tech-grid-dark"
                      width="24"
                      height="24"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 24 0 L 0 0 0 24"
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#form-tech-grid-dark)" />
                </svg>
              </div>

              {/* Form Content */}
              <div className="relative z-10">
                {state.success ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center mx-auto text-[#FF6600]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">Message Received</h3>
                    <p className="text-xs text-neutral-300 max-w-xs mx-auto leading-relaxed">
                      {state.message || "Thank you! Our engineering team will reach out to schedule a consultation promptly."}
                    </p>
                  </div>
                ) : (
                  <form action={formAction} className="space-y-4">
                    {state.message && !state.success && (
                      <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-md text-red-300 text-xs font-medium">
                        {state.message}
                      </div>
                    )}

                    {/* Field: Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-neutral-300"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Shazan"
                        className="w-full px-3.5 py-2.5 rounded-md text-xs sm:text-sm transition-all duration-200 outline-none border shadow-xs bg-[#161822] border-[#252A38] text-neutral-100 placeholder:text-neutral-500 focus:bg-[#1A1D29] focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]"
                      />
                    </div>

                    {/* Field: Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-neutral-300"
                      >
                        Work Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-md text-xs sm:text-sm transition-all duration-200 outline-none border shadow-xs bg-[#161822] border-[#252A38] text-neutral-100 placeholder:text-neutral-500 focus:bg-[#1A1D29] focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]"
                      />
                    </div>

                    {/* Field: Company */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="company"
                        className="block text-xs font-semibold text-neutral-300"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        placeholder="Zobique"
                        className="w-full px-3.5 py-2.5 rounded-md text-xs sm:text-sm transition-all duration-200 outline-none border shadow-xs bg-[#161822] border-[#252A38] text-neutral-100 placeholder:text-neutral-500 focus:bg-[#1A1D29] focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]"
                      />
                    </div>

                    {/* Field: Message */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold text-neutral-300"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={3}
                        value={projectDesc}
                        onChange={(e) => setProjectDesc(e.target.value)}
                        placeholder="Tell us about the operational bottleneck you are trying to solve..."
                        className="w-full px-3.5 py-2.5 rounded-md text-xs sm:text-sm transition-all duration-200 outline-none border shadow-xs resize-none min-h-[90px] bg-[#161822] border-[#252A38] text-neutral-100 placeholder:text-neutral-500 focus:bg-[#1A1D29] focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]"
                      />
                    </div>

                    {/* Honeypot Spam Protection (Hidden) */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isPending}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-md shadow-orange-500/20 disabled:opacity-60 active:scale-[0.98] bg-[#C2410C] hover:bg-[#9A3412] text-white border border-white/10"
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <span>Send Message</span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
