"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 sm:pt-40 pb-20 selection:bg-[#e22718] selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white hover:border-white transition-all mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        {/* Document Card */}
        <div className="bg-[#1a1a1a] border border-[#3c3c3c] p-8 sm:p-12 space-y-8 relative overflow-hidden">
          {/* Top M Stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] flex">
            <div className="w-1/3 bg-[#0066b1]" />
            <div className="w-1/3 bg-[#1c69d4]" />
            <div className="w-1/3 bg-[#e22718]" />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0d0d0d] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Operational Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight font-sans">
              Terms of Service
            </h1>
            <p className="text-xs font-mono text-[#7e7e7e] mt-2 uppercase tracking-wider">
              Last updated: August 2026
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#bbbbbb] font-light leading-relaxed font-sans">
            <p>
              Welcome to SANKET. By accessing the platform, GIS layers, or early warning broadcast feeds, you agree to these Terms of Service.
            </p>

            <div className="p-6 bg-[#0d0d0d] border border-[#262626] space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">1. Warning Intelligence & Usage</h2>
              <p className="text-xs sm:text-sm">
                SANKET provides predictive probability estimates, sensor telemetry, and satellite segmentation to assist disaster management authorities and highway agencies. Outputs are designed for emergency situational awareness and decision support.
              </p>
            </div>

            <div className="p-6 bg-[#0d0d0d] border border-[#262626] space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">2. Intellectual Property & Innovation</h2>
              <p className="text-xs sm:text-sm">
                The platform architecture, AI pipeline models, and visual design are protected intellectual property developed for the Smart India Hackathon.
              </p>
            </div>

            <div className="p-6 bg-[#0d0d0d] border border-[#262626] space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">3. Agency Partnerships</h2>
              <p className="text-xs sm:text-sm">
                For state sandbox deployments or institutional API integrations, contact team@sanket.in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
