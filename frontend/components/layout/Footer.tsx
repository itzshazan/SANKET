"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck, Activity } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 16.59c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.182 8.182 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#E0E5EC] text-[#3D4852] pt-16 sm:pt-24 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Molded Card Container */}
        <div className="rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] p-8 sm:p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Column (Span 4) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#E0E5EC] shadow-[4px_4px_8px_rgba(163,177,198,0.7),-4px_-4px_8px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <span className="w-6 h-6 rounded-xl bg-[#6C63FF] text-white flex items-center justify-center font-display font-extrabold text-xs">
                    S
                  </span>
                </div>
                <span className="text-2xl font-display font-extrabold tracking-tight text-[#3D4852]">
                  SANKET
                </span>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF]">
                AI-Powered Landslide Early Warning
              </div>

              <p className="text-sm text-[#6B7280] leading-relaxed max-w-sm">
                Uniting satellite remote sensing, IoT subsurface moisture feeds, and computer vision to predict slope failures hours before mass movement.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/itzshazan/SANKET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-[#E0E5EC] shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:shadow-[7px_7px_14px_rgba(163,177,198,0.7),-7px_-7px_14px_rgba(255,255,255,0.6)] active:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#3D4852] hover:text-[#6C63FF] transition-all duration-300"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/918434778107?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20SANKET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-[#E0E5EC] shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:shadow-[7px_7px_14px_rgba(163,177,198,0.7),-7px_-7px_14px_rgba(255,255,255,0.6)] active:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#3D4852] hover:text-[#38B2AC] transition-all duration-300"
                  aria-label="WhatsApp Support"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 1: Platform (Span 3) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#3D4852] mb-4">
                Platform Modules
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/#section-01" className="text-[#6B7280] hover:text-[#6C63FF] transition-colors">
                    Live Kedarnath Risk Map
                  </Link>
                </li>
                <li>
                  <Link href="/#section-05" className="text-[#6B7280] hover:text-[#6C63FF] transition-colors">
                    Pore Pressure Simulator
                  </Link>
                </li>
                <li>
                  <Link href="/#section-09" className="text-[#6B7280] hover:text-[#6C63FF] transition-colors">
                    Computer Vision Scarp Detector
                  </Link>
                </li>
                <li>
                  <Link href="/#section-10" className="text-[#6B7280] hover:text-[#6C63FF] transition-colors">
                    Common Alerting Protocol (CAP)
                  </Link>
                </li>
                <li>
                  <Link href="/#section-11" className="text-[#6B7280] hover:text-[#6C63FF] transition-colors">
                    Field Intelligence App
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Navigation & Quick Links (Span 2) */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#3D4852] mb-4">
                Explore
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/about" className="text-[#6B7280] hover:text-[#6C63FF] transition-colors">
                    About Project
                  </Link>
                </li>
                <li>
                  <Link href="/#section-07" className="text-[#6B7280] hover:text-[#6C63FF] transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#section-06" className="text-[#6B7280] hover:text-[#6C63FF] transition-colors">
                    System Comparison
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="text-[#6B7280] hover:text-[#6C63FF] transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#6B7280] hover:text-[#6C63FF] transition-colors">
                    Agency Sandbox Access
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Sandbox Request CTA Card (Span 3) */}
            <div className="lg:col-span-3">
              <div className="p-6 rounded-[24px] bg-[#E0E5EC] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-[#6C63FF]">
                  Agency Deployment
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Connect state DEM raster layers and test alert protocols in your designated mountain sector.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#6C63FF] text-white font-display font-bold text-xs uppercase tracking-wider hover:bg-[#7B73FF] shadow-[4px_4px_8px_rgba(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.6)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)] transition-all duration-300"
                >
                  Request Sandbox <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#6B7280] px-4">
          <div>
            © {new Date().getFullYear()} SANKET · Smart India Hackathon. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <Link href="/privacy" className="hover:text-[#6C63FF] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#6C63FF] transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-[#6C63FF] transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
