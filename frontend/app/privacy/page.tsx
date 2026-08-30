"use client";

import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
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
              <Shield className="w-3.5 h-3.5" />
              <span>Data Governance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight font-sans">
              Privacy & Telemetry Policy
            </h1>
            <p className="text-xs font-mono text-[#7e7e7e] mt-2 uppercase tracking-wider">
              Last updated: August 2026
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#bbbbbb] font-light leading-relaxed font-sans">
            <p>
              SANKET (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy of our partner agencies, disaster response authorities, and field personnel. This policy describes how telemetry, geospatial data, and agency sandbox credentials are handled.
            </p>

            <div className="p-6 bg-[#0d0d0d] border border-[#262626] space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">1. Information & Ground Telemetry We Process</h2>
              <p className="text-xs sm:text-sm">
                We ingest environmental feeds, sensor telemetry, and field observation reports (including geo-tagged coordinates, GNSS slope azimuths, and photograph evidence) submitted by authorized field personnel.
              </p>
            </div>

            <div className="p-6 bg-[#0d0d0d] border border-[#262626] space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">2. How We Use Ingested Information</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Generate location-specific landslide susceptibility scores and pore pressure calculations;</li>
                <li>Train and validate computer vision edge segmentation models;</li>
                <li>Dispatch automated Common Alerting Protocol (CAP) notifications across emergency channels;</li>
                <li>Assist highway clearing and rescue dispatch coordination.</li>
              </ul>
            </div>

            <div className="p-6 bg-[#0d0d0d] border border-[#262626] space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">3. Security & Data Sovereignty</h2>
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
