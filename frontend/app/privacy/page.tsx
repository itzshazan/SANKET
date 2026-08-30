"use client";

import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
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
              <Shield className="w-3.5 h-3.5" />
              <span>Data Governance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2C24] tracking-tight">
              Privacy & Telemetry Policy
            </h1>
            <p className="text-xs text-[#78786C] mt-2">
              Last updated: August 2026
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#78786C] leading-relaxed font-sans">
            <p>
              SANKET (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy of our partner agencies, disaster response authorities, and field personnel. This policy describes how telemetry, geospatial data, and agency sandbox credentials are handled.
            </p>

            <div className="p-6 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF] space-y-2">
              <h2 className="text-base font-serif font-bold text-[#2C2C24]">1. Information & Ground Telemetry We Process</h2>
              <p className="text-xs sm:text-sm">
                We ingest environmental feeds, sensor telemetry, and field observation reports (including geo-tagged coordinates, GNSS slope azimuths, and photograph evidence) submitted by authorized field personnel.
              </p>
            </div>

            <div className="p-6 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF] space-y-2">
              <h2 className="text-base font-serif font-bold text-[#2C2C24]">2. How We Use Ingested Information</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Generate location-specific landslide susceptibility scores and pore pressure calculations;</li>
                <li>Train and validate computer vision edge segmentation models;</li>
                <li>Dispatch automated Common Alerting Protocol (CAP) notifications across emergency channels;</li>
                <li>Assist highway clearing and rescue dispatch coordination.</li>
              </ul>
            </div>

            <div className="p-6 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF] space-y-2">
              <h2 className="text-base font-serif font-bold text-[#2C2C24]">3. Security & Data Sovereignty</h2>
              <p className="text-xs sm:text-sm">
                All sensor streams and telemetry payloads are encrypted in transit and at rest, aligning with Indian national data sovereignty standards and institutional security requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
