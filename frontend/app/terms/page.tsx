"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2C2C24] pt-32 sm:pt-40 pb-20 selection:bg-[#5D7052] selection:text-[#F3F4F1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FEFEFA] border border-[#DED8CF] rounded-full text-xs font-bold uppercase tracking-wider text-[#5D7052] hover:border-[#5D7052] shadow-2xs hover:scale-105 transition-all mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        {/* Document Card */}
        <div className="bg-[#FEFEFA] border border-[#DED8CF] rounded-[2.5rem] p-8 sm:p-12 space-y-8 shadow-soft">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full text-xs font-bold text-[#5D7052] mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Operational Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2C24] tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-[#78786C] mt-2">
              Last updated: August 2026
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#78786C] leading-relaxed font-sans">
            <p>
              Welcome to SANKET. By accessing the platform, GIS layers, or early warning broadcast feeds, you agree to these Terms of Service.
            </p>

            <div className="p-6 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF] space-y-2">
              <h2 className="text-base font-serif font-bold text-[#2C2C24]">1. Warning Intelligence & Usage</h2>
              <p className="text-xs sm:text-sm">
                SANKET provides predictive probability estimates, sensor telemetry, and satellite segmentation to assist disaster management authorities and highway agencies. Outputs are designed for emergency situational awareness and decision support.
              </p>
            </div>

            <div className="p-6 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF] space-y-2">
              <h2 className="text-base font-serif font-bold text-[#2C2C24]">2. Intellectual Property & Innovation</h2>
              <p className="text-xs sm:text-sm">
                The platform architecture, AI pipeline models, and visual design are protected intellectual property developed for the Smart India Hackathon.
              </p>
            </div>

            <div className="p-6 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF] space-y-2">
              <h2 className="text-base font-serif font-bold text-[#2C2C24]">3. Agency Partnerships</h2>
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
