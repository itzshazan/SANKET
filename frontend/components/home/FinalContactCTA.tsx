"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";

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
    <section id="section-15" className="w-full bg-black text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white">
              <span>Agency Sandbox Onboarding</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.05] font-sans uppercase">
              Deploy SANKET On Your Highway Corridor.
            </h2>

            <p className="text-base sm:text-lg text-[#bbbbbb] font-light leading-relaxed">
              Connect your regional digital elevation model (DEM) and evaluate live pore pressure telemetry in under 48 hours. No physical hardware installation required to begin satellite InSAR coverage.
            </p>

            {/* Friction Reducers */}
            <div className="space-y-3 pt-4 border-t border-[#262626]">
              <div className="flex items-start gap-3 text-sm text-[#bbbbbb] font-light">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>Pre-calibrated test datasets for Chamoli, Kedarnath & Western Ghats</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#bbbbbb] font-light">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>Standard OASIS Common Alerting Protocol (CAP) API webhooks</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#bbbbbb] font-light">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>Direct ingestion of state automatic weather station (AWS) rainfall feeds</span>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-[#7e7e7e]">
              Direct Inquiries: <a href="mailto:team@sanket.in" className="text-white underline font-bold">team@sanket.in</a> · Smart India Hackathon
            </div>
          </div>

          {/* Right Column: Dark Form Card (Span 6) */}
          <div className="lg:col-span-6">
            <div className="bg-[#1a1a1a] text-white p-8 sm:p-10 border border-[#3c3c3c] shadow-2xl relative overflow-hidden">
              {/* Top M Stripe */}
              <div className="absolute top-0 left-0 right-0 h-[3px] flex">
                <div className="w-1/3 bg-[#0066b1]" />
                <div className="w-1/3 bg-[#1c69d4]" />
                <div className="w-1/3 bg-[#e22718]" />
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#0d0d0d] border border-[#3c3c3c] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white font-sans">
                    Agency Sandbox Invitation Dispatched
                  </h3>
                  <p className="text-sm text-[#bbbbbb] font-light max-w-sm mx-auto leading-relaxed">
                    API credentials and digital sandbox corridor access have been dispatched to your official email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold text-white uppercase tracking-wider">
                      Full Name & Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. A. K. Verma — Chief Operations Officer"
                      className="w-full px-4 py-3 bg-[#0d0d0d] border border-[#3c3c3c] text-white placeholder:text-[#7e7e7e] text-sm focus:outline-none focus:border-white transition-all rounded-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-bold text-white uppercase tracking-wider">
                        Agency / Department *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="State Disaster Authority"
                        className="w-full px-4 py-3 bg-[#0d0d0d] border border-[#3c3c3c] text-white placeholder:text-[#7e7e7e] text-sm focus:outline-none focus:border-white transition-all rounded-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-bold text-white uppercase tracking-wider">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="officer@gov.in"
                        className="w-full px-4 py-3 bg-[#0d0d0d] border border-[#3c3c3c] text-white placeholder:text-[#7e7e7e] text-sm focus:outline-none focus:border-white transition-all rounded-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold text-white uppercase tracking-wider">
                      Target Mountain Sector / Highway *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      placeholder="e.g. NH-58 Chamoli Sector / Western Ghats"
                      className="w-full px-4 py-3 bg-[#0d0d0d] border border-[#3c3c3c] text-white placeholder:text-[#7e7e7e] text-sm focus:outline-none focus:border-white transition-all rounded-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-white text-black font-bold text-xs uppercase tracking-[1.5px] hover:bg-[#e6e6e6] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-60 rounded-none shadow-sm"
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
