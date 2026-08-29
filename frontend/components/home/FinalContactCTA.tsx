"use client";

import React, { useState } from "react";
import { Mail, Award, CheckCircle2, Loader2, Send, MapPin, Shield } from "lucide-react";
import { SlideReveal } from "../shared/ScrollReveal";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 16.59c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.182 8.182 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
    </svg>
  );
}

export function FinalContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate brief network submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="section-15" className="w-full bg-[#273C1E] border-b border-[#37502B] py-20 md:py-28 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8EA3B] opacity-[0.04] blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact & Project Info (Span 5) */}
          <SlideReveal direction="left" className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-[1.1] mb-4">
                Don&apos;t Wait for the Landslide.
              </h2>

              <p className="text-base sm:text-lg text-[#C5D7BD] leading-relaxed">
                Turn environmental and geospatial data into actionable risk intelligence.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 pt-4 border-t border-[#37502B]">
              <div className="p-4 rounded-2xl bg-[#213318] border border-[#37502B] flex items-center gap-4 hover-card-rise">
                <div className="w-10 h-10 rounded-xl bg-[#1A2614] text-[#C8EA3B] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7E9473] block">
                    Inquiries
                  </span>
                  <a href="mailto:Shazankhan324@gmail.com" className="text-sm font-sans font-bold text-white hover:text-[#C8EA3B] transition-colors">
                    Shazankhan324@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#213318] border border-[#37502B] flex items-center gap-4 hover:border-[#25D366]/50 hover-card-rise transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#1A2614] text-[#25D366] flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7E9473] block">
                    WhatsApp / Direct Desk
                  </span>
                  <a
                    href="https://wa.me/919045597305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-sans font-bold text-white hover:text-[#25D366] transition-colors"
                  >
                    +91 90455 97305
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#213318] border border-[#37502B] flex items-center gap-4 hover-card-rise">
                <div className="w-10 h-10 rounded-xl bg-[#1A2614] text-[#C8EA3B] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7E9473] block">
                    Built For
                  </span>
                  <span className="text-sm font-sans font-bold text-white">
                    Smart India Hackathon (SIH 2026)
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#213318] border border-[#37502B] flex items-center gap-4 hover-card-rise">
                <div className="w-10 h-10 rounded-xl bg-[#1A2614] text-[#C8EA3B] flex items-center justify-center shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7E9473] block">
                    Open Repository
                  </span>
                  <a href="https://github.com/itzshazan" target="_blank" rel="noopener noreferrer" className="text-sm font-mono font-medium text-[#C8EA3B] hover:underline">
                    github.com/itzshazan
                  </a>
                </div>
              </div>
            </div>
          </SlideReveal>

          {/* Right Column: Demo Request Form (Span 7) */}
          <SlideReveal direction="right" className="lg:col-span-7">
            <div className="rounded-3xl bg-[#213318] border border-[#37502B] p-6 sm:p-10 shadow-2xl relative overflow-hidden hover-card-rise">
              <div className="pb-6 border-b border-[#37502B] mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    Request an Institutional Demo
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C5D7BD] mt-1">
                    Connect your regional terrain or explore SANKET for disaster management.
                  </p>
                </div>
                <Shield className="w-6 h-6 text-[#C8EA3B] hidden sm:block shrink-0" />
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#C8EA3B]/20 border border-[#C8EA3B] flex items-center justify-center mx-auto text-[#C8EA3B]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white">
                    Demo Request Submitted
                  </h4>
                  <p className="text-sm text-[#C5D7BD] max-w-sm mx-auto leading-relaxed">
                    Thank you! The SANKET engineering team will contact you promptly with access to the sandbox GIS portal.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-medium text-[#C5D7BD]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Anand Verma"
                        className="w-full px-4 py-3 rounded-xl bg-[#1A2614] border border-[#37502B] text-white placeholder:text-[#7E9473] text-sm focus:outline-none focus:border-[#C8EA3B] focus:ring-1 focus:ring-[#C8EA3B] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-medium text-[#C5D7BD]">
                        Organization / Agency *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="State Disaster Management Authority (SDMA)"
                        className="w-full px-4 py-3 rounded-xl bg-[#1A2614] border border-[#37502B] text-white placeholder:text-[#7E9473] text-sm focus:outline-none focus:border-[#C8EA3B] focus:ring-1 focus:ring-[#C8EA3B] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-medium text-[#C5D7BD]">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="anand.verma@gov.in"
                        className="w-full px-4 py-3 rounded-xl bg-[#1A2614] border border-[#37502B] text-white placeholder:text-[#7E9473] text-sm focus:outline-none focus:border-[#C8EA3B] focus:ring-1 focus:ring-[#C8EA3B] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-medium text-[#C5D7BD]">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#1A2614] border border-[#37502B] text-white placeholder:text-[#7E9473] text-sm focus:outline-none focus:border-[#C8EA3B] focus:ring-1 focus:ring-[#C8EA3B] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-medium text-[#C5D7BD]">
                      Region of Interest & Notes *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the vulnerable mountain corridor or monitoring requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#1A2614] border border-[#37502B] text-white placeholder:text-[#7E9473] text-sm focus:outline-none focus:border-[#C8EA3B] focus:ring-1 focus:ring-[#C8EA3B] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#C8EA3B] text-[#1A2614] font-display font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-[#E4F76E] shadow-[0_0_20px_rgba(200,234,59,0.3)] hover:shadow-[0_0_30px_rgba(200,234,59,0.5)] btn-spring cursor-pointer disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Request Institutional Demo</span>
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </SlideReveal>
        </div>
      </div>
    </section>
  );
}
