"use client";

import React, { useActionState, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm } from "../../app/actions/contact";
import { trackContactSubmit } from "@/lib/analytics";
import { WorldMap } from "./WorldMap";
import { CheckCircle2, Loader2, ArrowRight, ChevronDown, Mail, Phone } from "lucide-react";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    message: "",
  });

  const formRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [projectDesc, setProjectDesc] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const SERVICES_OPTIONS = [
    "AI Application Development",
    "AI Agent Development",
    "AI Copilot Development",
    "Enterprise AI & Automation",
    "Generative AI & LLM Engineering",
    "AI Strategy & Consultation",
    "Other",
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      if (serviceParam) {
        const slugMap: Record<string, string> = {
          "ai-application-development": "AI Application Development",
          "ai-agent-development": "AI Agent Development",
          "ai-copilot-development": "AI Copilot Development",
          "enterprise-ai": "Enterprise AI & Automation",
          "ai-automation": "Enterprise AI & Automation",
          "ai-workflow-automation": "Enterprise AI & Automation",
        };
        const mapped = slugMap[serviceParam] || serviceParam;
        setSelectedService(mapped);
        setProjectDesc(`I am interested in the ${mapped} service.\n\nPlease provide more information on how Zobique Labs can help our team.`);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      const params = new URLSearchParams(window.location.search);
      const service = params.get("service") || undefined;
      trackContactSubmit(service);
    }
  }, [state.success]);

  return (
    <div className="w-full bg-white text-[#111111] font-sans h-auto min-h-screen overflow-visible">
      {/* ── 1. Hero Title Banner (Aligned with Navbar Logo) ── */}
      <section className="w-full bg-white pt-6 pb-4 sm:pt-8 sm:pb-5 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight"
          >
            Let&apos;s Discuss Your AI Initiative
          </motion.h1>
        </div>
      </section>

      {/* ── 2. Main White Canvas (Aligned with Navbar) ── */}
      <section className="w-full bg-white py-8 sm:py-10 lg:py-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 2-Column Responsive Layout: Left Form Column & Right Map Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            
            {/* ── Left Column: Form Box (Stationary & Aligned) ── */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 xl:col-span-5 w-full lg:-mt-10 xl:-mt-14"
            >
              {/* Form Card (Premium Light Theme) */}
              <div
                ref={formRef}
                className="relative overflow-hidden rounded-xl p-5 sm:p-6 md:p-7 border bg-white border-gray-200/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] hover:shadow-[0_28px_75px_-18px_rgba(0,0,0,0.11)] transition-shadow duration-500 ease-out w-full"
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
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern
                        id="form-tech-grid-light-contact"
                        width="24"
                        height="24"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 24 0 L 0 0 0 24"
                          fill="none"
                          stroke="rgba(0,0,0,0.035)"
                          strokeWidth="1"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#form-tech-grid-light-contact)" />
                  </svg>
                </div>

                {/* Form Content */}
                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="mb-3.5 pb-2.5 border-b border-gray-100 text-left">
                    <h2 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 leading-snug tracking-tight">
                      Provide a brief overview of your goals, and our engineering team will reach out to schedule a consultation.
                    </h2>
                  </div>

                  <AnimatePresence mode="wait">
                    {state.success ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-10 text-center space-y-4"
                      >
                        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                          <CheckCircle2 size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Message Received</h3>
                        <p className="text-xs sm:text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
                          {state.message || "Thank you! Our engineering team will review your project and get back to you shortly."}
                        </p>
                      </motion.div>
                    ) : (
                      <form action={formAction} className="space-y-3 text-left">
                        {state.message && (
                          <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs leading-relaxed">
                            {state.message}
                          </div>
                        )}

                        {/* Row 1: Name & Company */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* Name */}
                          <div className="space-y-1">
                            <label htmlFor="name" className="block text-xs font-bold text-gray-800 tracking-wide">
                              Name
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              className="w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 outline-none border shadow-xs bg-[#F8FAFC] border-gray-200 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C]"
                              placeholder="Shazan"
                            />
                          </div>

                          {/* Company */}
                          <div className="space-y-1">
                            <label htmlFor="company" className="block text-xs font-bold text-gray-800 tracking-wide">
                              Company
                            </label>
                            <input
                              id="company"
                              name="company"
                              type="text"
                              className="w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 outline-none border shadow-xs bg-[#F8FAFC] border-gray-200 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C]"
                              placeholder="Zobique"
                            />
                          </div>
                        </div>

                        {/* Row 2: Email & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* Email */}
                          <div className="space-y-1">
                            <label htmlFor="email" className="block text-xs font-bold text-gray-800 tracking-wide">
                              Work Email
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              className="w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 outline-none border shadow-xs bg-[#F8FAFC] border-gray-200 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C]"
                              placeholder="jane@example.com"
                            />
                          </div>

                          {/* Phone */}
                          <div className="space-y-1">
                            <label htmlFor="phone" className="block text-xs font-bold text-gray-800 tracking-wide">
                              Phone
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              className="w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 outline-none border shadow-xs bg-[#F8FAFC] border-gray-200 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C]"
                              placeholder="9045597305"
                            />
                          </div>
                        </div>

                        {/* Row 3: Select Service (Custom Dropdown in Request a Quote Color) */}
                        <div className="space-y-1" ref={dropdownRef}>
                          <label htmlFor="service-trigger" className="block text-xs font-bold text-gray-800 tracking-wide">
                            Select Service
                          </label>
                          <div className="relative">
                            {/* Hidden Input for Form Submission */}
                            <input type="hidden" name="service" value={selectedService} />

                            {/* Dropdown Trigger Button */}
                            <button
                              id="service-trigger"
                              type="button"
                              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                              className={`w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 outline-none border shadow-xs flex items-center justify-between text-left cursor-pointer ${
                                isDropdownOpen
                                  ? "bg-white border-[#C2410C] ring-1 ring-[#C2410C]"
                                  : "bg-[#F8FAFC] border-gray-200 hover:border-orange-300"
                              }`}
                            >
                              <span className={selectedService ? "font-semibold text-gray-900" : "text-gray-400 font-normal"}>
                                {selectedService || "Choose an AI service..."}
                              </span>
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isDropdownOpen ? "rotate-180 text-[#C2410C]" : "text-gray-500"
                                }`}
                              />
                            </button>

                            {/* Custom Floating Options Menu in Request a Quote Theme */}
                            <AnimatePresence>
                              {isDropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: -4, scale: 0.98 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: -4, scale: 0.98 }}
                                  transition={{ duration: 0.15, ease: "easeOut" }}
                                  className="absolute z-50 left-0 right-0 mt-1 bg-white border border-orange-200/80 rounded-xl shadow-[0_12px_36px_rgba(194,65,12,0.12)] py-1.5 overflow-hidden max-h-60 overflow-y-auto"
                                >
                                  {SERVICES_OPTIONS.map((svc) => {
                                    const isSelected = selectedService === svc;
                                    return (
                                      <button
                                        key={svc}
                                        type="button"
                                        onClick={() => {
                                          setSelectedService(svc);
                                          setIsDropdownOpen(false);
                                        }}
                                        className={`w-full px-3.5 py-2 text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                          isSelected
                                            ? "bg-orange-50 text-[#C2410C] font-bold"
                                            : "text-gray-700 hover:bg-orange-50/80 hover:text-[#C2410C] font-medium"
                                        }`}
                                      >
                                        <span>{svc}</span>
                                        {isSelected && (
                                          <span className="w-2 h-2 rounded-full bg-[#C2410C] flex-shrink-0" />
                                        )}
                                      </button>
                                    );
                                  })}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Row 4: Project Description */}
                        <div className="space-y-1">
                          <label htmlFor="project" className="block text-xs font-bold text-gray-800 tracking-wide">
                            Project Description
                          </label>
                          <textarea
                            id="project"
                            name="project"
                            required
                            rows={2}
                            value={projectDesc}
                            onChange={(e) => setProjectDesc(e.target.value)}
                            className="w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 outline-none border shadow-xs resize-none min-h-[60px] bg-[#F8FAFC] border-gray-200 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#C2410C] focus:ring-1 focus:ring-[#C2410C]"
                            placeholder="Tell us about the operational bottleneck you are trying to solve..."
                          />
                        </div>

                        {/* Honeypot Spam Protection (Hidden) */}
                        <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                          <label htmlFor="website">Website</label>
                          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                        </div>

                        {/* Legal Consent Disclaimer */}
                        <p className="text-[10px] leading-tight text-gray-500 font-normal pt-0.5">
                          By clicking the button, you consent for Zobique Labs to contact you at the number and email provided about Zobique Labs offers.
                        </p>

                        {/* Solid CTA Submit Button with Request a Quote Color */}
                        <motion.button
                          type="submit"
                          disabled={isPending}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className="w-full bg-[#C2410C] hover:bg-[#9A3412] text-white font-bold py-3 px-5 uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-colors shadow-md shadow-orange-950/20 cursor-pointer disabled:opacity-60 mt-1.5 rounded-lg group"
                        >
                          <span>{isPending ? "REQUESTING CONSULTATION..." : "REQUEST CONSULTATION"}</span>
                          {isPending ? (
                            <Loader2 size={14} className="animate-spin" />
                          ) : (
                            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                          )}
                        </motion.button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* ── Right Column: World Map (Wide & Fully Visible) ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center items-center w-full"
            >
              <div className="w-full">
                <WorldMap isDark={false} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. Horizontal Inquiries Section ── */}
      <section className="w-full bg-[#F9FAFB] border-t border-gray-100 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 4 Horizontal Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Card 1: General Inquiries */}
            <a
              href="mailto:contact@zobique.com"
              className="group block bg-white p-5 rounded-xl border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-orange-300 transition-all duration-300 text-left"
            >
              <span className="block text-xs font-medium text-gray-500 mb-2">
                General Inquiries
              </span>
              <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#C2410C] group-hover:text-[#9A3412] transition-colors">
                <Mail className="w-4 h-4 text-[#C2410C] flex-shrink-0" />
                <span className="truncate">contact@zobique.com</span>
              </div>
            </a>

            {/* Card 2: Executive & Partnerships */}
            <a
              href="mailto:ceo@zobique.com"
              className="group block bg-white p-5 rounded-xl border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-orange-300 transition-all duration-300 text-left"
            >
              <span className="block text-xs font-medium text-gray-500 mb-2">
                Executive & Partnerships
              </span>
              <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#C2410C] group-hover:text-[#9A3412] transition-colors">
                <Mail className="w-4 h-4 text-[#C2410C] flex-shrink-0" />
                <span className="truncate">ceo@zobique.com</span>
              </div>
            </a>

            {/* Card 3: Client Support */}
            <a
              href="mailto:support@zobique.com"
              className="group block bg-white p-5 rounded-xl border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all duration-300 text-left"
            >
              <span className="block text-xs font-medium text-gray-500 mb-2">
                Client Support
              </span>
              <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#C2410C] transition-colors">
                <Mail className="w-4 h-4 text-gray-700 flex-shrink-0" />
                <span className="truncate">support@zobique.com</span>
              </div>
            </a>

            {/* Card 4: Direct Phone */}
            <a
              href="tel:+919045597305"
              className="group block bg-white p-5 rounded-xl border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all duration-300 text-left"
            >
              <span className="block text-xs font-medium text-gray-500 mb-2">
                Direct Phone
              </span>
              <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#C2410C] transition-colors">
                <Phone className="w-4 h-4 text-gray-700 flex-shrink-0" />
                <span className="truncate">+91 90455 97305</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
