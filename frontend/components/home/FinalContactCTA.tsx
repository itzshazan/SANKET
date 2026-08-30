"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, ArrowRight, Sparkles } from "lucide-react";

export function FinalContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    region: "",
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
    <section id="section-15" className="w-full bg-[#FDFCF8] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#5D7052] text-[#F3F4F1] rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_-10px_rgba(93,112,82,0.35)] relative overflow-hidden">
          {/* Ambient blurred blob */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C18C5D]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            {/* Left Column (Span 6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-bold uppercase tracking-wider text-white">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Agency Sandbox Onboarding</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                Deploy SANKET On Your Highway Corridor.
              </h2>

              <p className="text-base sm:text-lg text-[#EBF0E8] font-normal leading-relaxed">
                Connect your regional digital elevation model (DEM) and evaluate live pore pressure telemetry in under 48 hours. No physical hardware installation required to begin satellite InSAR coverage.
              </p>

              {/* Friction Reducers */}
              <div className="space-y-3 pt-4 border-t border-white/20">
                <div className="flex items-start gap-3 text-sm text-[#F3F4F1]">
                  <CheckCircle2 className="w-5 h-5 text-[#C18C5D] shrink-0 mt-0.5" />
                  <span>Pre-calibrated test datasets for Chamoli, Kedarnath & Western Ghats</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#F3F4F1]">
                  <CheckCircle2 className="w-5 h-5 text-[#C18C5D] shrink-0 mt-0.5" />
                  <span>Standard OASIS Common Alerting Protocol (CAP) API webhooks</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#F3F4F1]">
                  <CheckCircle2 className="w-5 h-5 text-[#C18C5D] shrink-0 mt-0.5" />
                  <span>Direct ingestion of state automatic weather station (AWS) rainfall feeds</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#EBF0E8]">
                Direct Inquiries: <a href="mailto:team@sanket.in" className="text-white underline font-bold">team@sanket.in</a> · Smart India Hackathon
              </div>
            </div>

            {/* Right Column: Clean White Form Card (Span 6) */}
            <div className="lg:col-span-6">
              <div className="bg-[#FEFEFA] text-[#2C2C24] p-8 sm:p-10 rounded-[2.5rem] shadow-2xl border border-[#DED8CF]">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#EBF0E8] text-[#5D7052] flex items-center justify-center mx-auto shadow-soft">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#2C2C24]">
                      Agency Sandbox Dispatched
                    </h3>
                    <p className="text-sm text-[#78786C] max-w-sm mx-auto leading-relaxed">
                      API credentials and digital sandbox corridor access have been dispatched to your official email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#2C2C24] uppercase tracking-wider">
                        Full Name & Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. A. K. Verma — Chief Operations Officer"
                        className="w-full px-5 py-3.5 rounded-full bg-[#FDFCF8] border border-[#DED8CF] text-[#2C2C24] placeholder:text-[#78786C] text-sm focus:outline-none focus:border-[#5D7052] focus:ring-2 focus:ring-[#5D7052]/20 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#2C2C24] uppercase tracking-wider">
                          Agency / Department *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="State Disaster Authority"
                          className="w-full px-5 py-3.5 rounded-full bg-[#FDFCF8] border border-[#DED8CF] text-[#2C2C24] placeholder:text-[#78786C] text-sm focus:outline-none focus:border-[#5D7052] focus:ring-2 focus:ring-[#5D7052]/20 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#2C2C24] uppercase tracking-wider">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="officer@gov.in"
                          className="w-full px-5 py-3.5 rounded-full bg-[#FDFCF8] border border-[#DED8CF] text-[#2C2C24] placeholder:text-[#78786C] text-sm focus:outline-none focus:border-[#5D7052] focus:ring-2 focus:ring-[#5D7052]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#2C2C24] uppercase tracking-wider">
                        Target Mountain Sector / Highway *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        placeholder="e.g. NH-58 Chamoli Sector / Western Ghats"
                        className="w-full px-5 py-3.5 rounded-full bg-[#FDFCF8] border border-[#DED8CF] text-[#2C2C24] placeholder:text-[#78786C] text-sm focus:outline-none focus:border-[#5D7052] focus:ring-2 focus:ring-[#5D7052]/20 transition-all"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-[#5D7052] text-[#F3F4F1] font-bold text-base hover:bg-[#4C5D42] hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-60 shadow-soft"
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
      </div>
    </section>
  );
}
