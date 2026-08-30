"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#E0E5EC] text-[#3D4852] pt-28 sm:pt-36 pb-20 selection:bg-[#6C63FF] selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#E0E5EC] shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.6)] text-xs font-mono font-bold text-[#6C63FF] hover:shadow-[7px_7px_14px_rgba(163,177,198,0.7)] transition-all mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        {/* Molded Document Card */}
        <div className="rounded-[32px] bg-[#E0E5EC] shadow-[12px_12px_24px_rgba(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.8)] p-8 sm:p-12 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF] mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Operational Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#3D4852] tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs font-mono text-[#6B7280] mt-2">
              Last updated: August 2026
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#6B7280] leading-relaxed">
            <p>
              Welcome to SANKET. By accessing the platform, GIS layers, or early warning broadcast feeds, you agree to these Terms of Service.
            </p>

            <div className="p-6 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] space-y-3">
              <h2 className="text-base font-display font-bold text-[#3D4852]">1. Warning Intelligence & Usage</h2>
              <p className="text-xs sm:text-sm">
                SANKET provides predictive probability estimates, sensor telemetry, and satellite segmentation to assist disaster management authorities and highway agencies. Outputs are designed for emergency situational awareness and decision support.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] space-y-3">
              <h2 className="text-base font-display font-bold text-[#3D4852]">2. Intellectual Property & Innovation</h2>
              <p className="text-xs sm:text-sm">
                The platform architecture, AI pipeline models, and visual design are protected intellectual property developed for the Smart India Hackathon.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] space-y-3">
              <h2 className="text-base font-display font-bold text-[#3D4852]">3. Agency Partnerships</h2>
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
