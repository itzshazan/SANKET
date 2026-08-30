"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, Loader2, Send, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

export function FinalContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    region: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="section-15" className="w-full bg-[#E0E5EC] py-20 md:py-28 text-[#3D4852]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF]">
              Agency Sandbox Onboarding
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#3D4852] tracking-tight leading-[1.12]">
              Deploy SANKET On Your Highway Corridor.
            </h2>

            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
              Connect your regional digital elevation model (DEM) and evaluate live pore pressure telemetry in under 48 hours. No physical hardware installation required to begin satellite InSAR coverage.
            </p>

            {/* Inset Friction Reducers */}
            <div className="space-y-3 pt-4 border-t border-[#A3B1C6]/30">
              <div className="flex items-start gap-3 text-sm text-[#3D4852]">
                <div className="w-5 h-5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6)] flex items-center justify-center text-[#38B2AC] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Pre-calibrated test datasets for Chamoli, Kedarnath & Western Ghats</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#3D4852]">
                <div className="w-5 h-5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6)] flex items-center justify-center text-[#38B2AC] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Standard OASIS Common Alerting Protocol (CAP) API webhooks</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#3D4852]">
                <div className="w-5 h-5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6)] flex items-center justify-center text-[#38B2AC] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Direct ingestion of state automatic weather station (AWS) rainfall feeds</span>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-[#6B7280]">
              Direct Inquiries: <a href="mailto:team@sanket.in" className="text-[#6C63FF] underline font-bold">team@sanket.in</a> · Smart India Hackathon
            </div>
          </div>

          {/* Right Column: Molded Submission Form (Span 6) */}
          <div className="lg:col-span-6">
            <div className="rounded-[32px] bg-[#E0E5EC] shadow-[12px_12px_24px_rgba(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.8)] p-8 sm:p-10">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.6)] flex items-center justify-center mx-auto text-[#38B2AC]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-display font-extrabold text-[#3D4852]">
                    Agency Sandbox Invitation Dispatched
                  </h3>
                  <p className="text-sm text-[#6B7280] max-w-sm mx-auto leading-relaxed">
                    API credentials and digital sandbox corridor access have been dispatched to your official email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold text-[#3D4852]">
                      Full Name & Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. A. K. Verma — Chief Operations Officer"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#E0E5EC] shadow-[inset_6px_6px_10px_rgba(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.6)] text-[#3D4852] placeholder:text-[#A0AEC0] text-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-bold text-[#3D4852]">
                        Agency / Department *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="State Disaster Authority"
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#E0E5EC] shadow-[inset_6px_6px_10px_rgba(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.6)] text-[#3D4852] placeholder:text-[#A0AEC0] text-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-bold text-[#3D4852]">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="officer@gov.in"
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#E0E5EC] shadow-[inset_6px_6px_10px_rgba(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.6)] text-[#3D4852] placeholder:text-[#A0AEC0] text-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold text-[#3D4852]">
                      Target Mountain Sector / Highway *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      placeholder="e.g. NH-58 Chamoli Sector / Western Ghats"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#E0E5EC] shadow-[inset_6px_6px_10px_rgba(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.6)] text-[#3D4852] placeholder:text-[#A0AEC0] text-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition-all"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#6C63FF] text-white font-display font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-[#7B73FF] shadow-[8px_8px_16px_rgba(163,177,198,0.7),-8px_-8px_16px_rgba(255,255,255,0.8)] hover:translate-y-[-1px] active:translate-y-[0.5px] active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.35)] transition-all cursor-pointer disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Generating Sandbox Access...</span>
                        </>
                      ) : (
                        <>
                          <span>Request Agency Sandbox Access</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
