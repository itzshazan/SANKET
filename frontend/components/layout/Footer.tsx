"use client";

import Link from "next/link";
import { ShieldCheck, ArrowRight, ExternalLink, Activity } from "lucide-react";

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
    <footer className="w-full bg-[#1E2D17] border-t border-[#37502B] text-[#C5D7BD] pt-16 sm:pt-20 pb-0 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid + Brand Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-lg bg-[#C8EA3B] text-[#1A2614] flex items-center justify-center font-display font-black text-lg shadow-[0_0_20px_rgba(200,234,59,0.3)]">
                S
              </span>
              <span className="text-2xl font-display font-extrabold tracking-tight text-white">
                SANKET
              </span>
            </div>
            <p className="text-xs font-mono tracking-widest text-[#C8EA3B] uppercase">
              Predict · Prepare · Protect
            </p>
            <p className="text-sm text-[#C5D7BD]/80 leading-relaxed max-w-sm">
              An AI-powered landslide early warning and risk intelligence platform that unites satellite remote sensing, IoT environmental feeds, and computer vision to safeguard lives and infrastructure.
            </p>

            <div className="pt-2">
              <a
                href="#section-15"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#C8EA3B] text-[#1A2614] font-display font-semibold text-xs uppercase tracking-wider hover:bg-[#E4F76E] shadow-sm hover:shadow-[0_0_20px_rgba(200,234,59,0.3)] transition-all cursor-pointer"
              >
                Request a Demo <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 1: Platform (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5 text-xs text-[#7E9473]">
              <li><a href="#section-08" className="hover:text-[#C5D7BD] transition-colors">AI Risk Assessment</a></li>
              <li><a href="#section-08" className="hover:text-[#C5D7BD] transition-colors">Satellite Monitoring</a></li>
              <li><a href="#section-09" className="hover:text-[#C5D7BD] transition-colors">Computer Vision</a></li>
              <li><a href="#section-01" className="hover:text-[#C5D7BD] transition-colors">GIS Risk Maps</a></li>
              <li><a href="#section-07" className="hover:text-[#C5D7BD] transition-colors">Data Sources</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-xs text-[#7E9473]">
              <li><a href="#section-10" className="hover:text-[#C5D7BD] transition-colors">Early Warning Alerts</a></li>
              <li><a href="#section-01" className="hover:text-[#C5D7BD] transition-colors">Risk Dashboard</a></li>
              <li><a href="#section-11" className="hover:text-[#C5D7BD] transition-colors">Field Reporting</a></li>
              <li><a href="#section-10" className="hover:text-[#C5D7BD] transition-colors">Alert Channels</a></li>
            </ul>
          </div>

          {/* Column 3: Who It's For (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Who It&apos;s For
            </h3>
            <ul className="space-y-2.5 text-xs text-[#7E9473]">
              <li><a href="#section-12" className="hover:text-[#C5D7BD] transition-colors">Disaster Authorities</a></li>
              <li><a href="#section-12" className="hover:text-[#C5D7BD] transition-colors">Road Agencies</a></li>
              <li><a href="#section-12" className="hover:text-[#C5D7BD] transition-colors">Emergency Teams</a></li>
              <li><a href="#section-12" className="hover:text-[#C5D7BD] transition-colors">Field Teams</a></li>
              <li><a href="#section-12" className="hover:text-[#C5D7BD] transition-colors">Communities</a></li>
            </ul>
          </div>

          {/* Column 4: Project (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Project
            </h3>
            <ul className="space-y-2.5 text-xs text-[#7E9473]">
              <li><a href="#section-13" className="hover:text-[#C5D7BD] transition-colors">About SANKET</a></li>
              <li><a href="#section-04" className="hover:text-[#C5D7BD] transition-colors flex items-center gap-1">SIH Hackathon <span className="text-[10px] text-[#C8EA3B]">★</span></a></li>
              <li><a href="https://wa.me/919045597305" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors flex items-center gap-1"><WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp: +91 90455 97305</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5D7BD] transition-colors flex items-center gap-1">GitHub <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#section-07" className="hover:text-[#C5D7BD] transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar in Deepest Forest Dark (#1A2614) */}
      <div className="w-full bg-[#1A2614] border-t border-[#37502B] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E9473]">
          <div className="flex items-center gap-2 font-mono">
            <span>© 2025 SANKET</span>
            <span>·</span>
            <span className="text-[#C5D7BD]">Built for Smart India Hackathon</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#C5D7BD] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#C5D7BD] transition-colors">Terms of Service</Link>
            <a href="https://wa.me/919045597305" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:opacity-80 transition-opacity" aria-label="WhatsApp" title="Chat on WhatsApp (+91 90455 97305)">
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub Repository">
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
