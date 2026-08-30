"use client";

import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
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
              <Shield className="w-3.5 h-3.5" />
              <span>Data Governance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#3D4852] tracking-tight">
              Privacy & Telemetry Policy
            </h1>
            <p className="text-xs font-mono text-[#6B7280] mt-2">
              Last updated: August 2026
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#6B7280] leading-relaxed">
            <p>
              SANKET (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy of our partner agencies, disaster response authorities, and field personnel. This policy describes how telemetry, geospatial data, and agency sandbox credentials are handled.
            </p>

            <div className="p-6 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] space-y-3">
              <h2 className="text-base font-display font-bold text-[#3D4852]">1. Information & Ground Telemetry We Process</h2>
              <p className="text-xs sm:text-sm">
                We ingest environmental feeds, sensor telemetry, and field observation reports (including geo-tagged coordinates, GNSS slope azimuths, and photograph evidence) submitted by authorized field personnel.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] space-y-3">
              <h2 className="text-base font-display font-bold text-[#3D4852]">2. How We Use Ingested Information</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Generate location-specific landslide susceptibility scores and pore pressure calculations;</li>
                <li>Train and validate computer vision edge segmentation models;</li>
                <li>Dispatch automated Common Alerting Protocol (CAP) notifications across emergency channels;</li>
                <li>Assist highway clearing and rescue dispatch coordination.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] space-y-3">
              <h2 className="text-base font-display font-bold text-[#3D4852]">3. Security & Data Sovereignty</h2>
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
