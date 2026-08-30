"use client";

import Link from "next/link";
import { ArrowRight, Award, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#F0EBE5]/80 text-[#2C2C24] border-t border-[#DED8CF] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#DED8CF]">
          {/* Col 1: Brand (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#5D7052] flex items-center justify-center text-[#F3F4F1] shadow-soft">
                <span className="font-serif font-bold text-lg leading-none">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#2C2C24] font-serif">
                SANKET
              </span>
            </Link>

            <p className="text-sm text-[#78786C] font-normal max-w-sm leading-relaxed">
              AI-Powered Landslide Early Warning and Risk Intelligence Platform. Grounded in soil physics, remote sensing, and community protection.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FEFEFA] border border-[#DED8CF] rounded-full text-xs font-bold text-[#5D7052] shadow-2xs">
              <Award className="w-4 h-4 text-[#C18C5D]" />
              <span>Smart India Hackathon</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (Span 3) */}
          <div className="lg:col-span-3 space-y-4 font-sans text-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5D7052] block">
              Platform Architecture
            </span>
            <ul className="space-y-2.5 text-sm text-[#4A4A40]">
              <li>
                <Link href="/#section-07" className="hover:text-[#5D7052] transition-colors">
                  4-Stage Pipeline
                </Link>
              </li>
              <li>
                <Link href="/#section-01" className="hover:text-[#5D7052] transition-colors">
                  GIS Command Engine
                </Link>
              </li>
              <li>
                <Link href="/#section-08" className="hover:text-[#5D7052] transition-colors">
                  InSAR Radar Telemetry
                </Link>
              </li>
              <li>
                <Link href="/#section-09" className="hover:text-[#5D7052] transition-colors">
                  Computer Vision Models
                </Link>
              </li>
              <li>
                <Link href="/#section-10" className="hover:text-[#5D7052] transition-colors">
                  CAP Alert Dissemination
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sandbox Card (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5D7052] block">
              Agency Sandbox Access
            </span>
            
            <div className="p-6 bg-[#FEFEFA] border border-[#DED8CF] rounded-[2rem] shadow-soft space-y-3">
              <h4 className="font-serif font-bold text-[#2C2C24] text-base">
                Test Your Mountain Corridor
              </h4>
              <p className="text-xs text-[#78786C] leading-relaxed">
                Evaluate real-time pore pressure feeds and satellite displacement risk for your district.
              </p>
              <Link
                href="/#section-15"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#5D7052] hover:text-[#4C5D42] transition-colors pt-1"
              >
                <span>Request Sandbox Credentials</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#78786C]">
          <div>
            © {currentYear} SANKET Platform. Open Environmental Architecture.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#5D7052] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#5D7052] transition-colors">
              Terms of Service
            </Link>
            <Link href="/faqs" className="hover:text-[#5D7052] transition-colors">
              System FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
