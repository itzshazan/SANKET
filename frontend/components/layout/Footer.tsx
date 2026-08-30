"use client";

import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white relative">
      {/* 4px M Tricolor Divider */}
      <div className="flex h-[4px] w-full">
        <div className="w-1/3 bg-[#0066b1]" />
        <div className="w-1/3 bg-[#1c69d4]" />
        <div className="w-1/3 bg-[#e22718]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#262626]">
          {/* Col 1: Brand (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c]">
                <div className="flex h-3.5 w-3.5 skew-x-[-15deg] overflow-hidden">
                  <div className="w-1/3 bg-[#0066b1]" />
                  <div className="w-1/3 bg-[#1c69d4]" />
                  <div className="w-1/3 bg-[#e22718]" />
                </div>
                <span className="font-extrabold text-sm tracking-tighter text-white">S</span>
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white font-sans uppercase">
                SANKET
              </span>
            </Link>

            <p className="text-sm text-[#bbbbbb] font-light max-w-sm leading-relaxed">
              AI-Powered Landslide Early Warning and Risk Intelligence System. Fusing satellite radar interferometry, rainfall telemetry, and edge computer vision with European-engineered precision.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold text-white uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#1c69d4]" />
              <span>Smart India Hackathon</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (Span 3) */}
          <div className="lg:col-span-3 space-y-4 font-sans text-sm">
            <span className="text-xs font-bold uppercase tracking-[1.5px] text-white block">
              Platform
            </span>
            <ul className="space-y-2.5 font-light text-xs tracking-wider uppercase">
              <li>
                <Link href="/#section-07" className="text-[#7e7e7e] hover:text-white transition-colors">
                  4-Stage Pipeline
                </Link>
              </li>
              <li>
                <Link href="/#section-01" className="text-[#7e7e7e] hover:text-white transition-colors">
                  GIS Command Engine
                </Link>
              </li>
              <li>
                <Link href="/#section-08" className="text-[#7e7e7e] hover:text-white transition-colors">
                  InSAR Radar Telemetry
                </Link>
              </li>
              <li>
                <Link href="/#section-09" className="text-[#7e7e7e] hover:text-white transition-colors">
                  Computer Vision Models
                </Link>
              </li>
              <li>
                <Link href="/#section-10" className="text-[#7e7e7e] hover:text-white transition-colors">
                  CAP Alert Dissemination
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sandbox Access (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[1.5px] text-white block">
              Agency Sandbox Access
            </span>
            
            <div className="p-6 bg-[#1a1a1a] border border-[#3c3c3c] space-y-3">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">
                Test Your Mountain Corridor
              </h4>
              <p className="text-xs text-[#bbbbbb] font-light leading-relaxed">
                Evaluate real-time pore pressure feeds and satellite displacement risk for your district.
              </p>
              <Link
                href="/#section-15"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[1px] text-white hover:text-[#1c69d4] transition-colors"
              >
                <span>Request Instant API Credentials</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7e7e7e] uppercase tracking-wider">
          <div>
            © {currentYear} SANKET Platform. Open Architecture.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/faqs" className="hover:text-white transition-colors">
              System FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
