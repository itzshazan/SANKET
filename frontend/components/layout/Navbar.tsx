"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Activity,
  Layers,
  Satellite,
  Eye,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => {
    setMobileMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      if (typeof window !== "undefined") {
        const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void } }).__lenis;
        if (lenis) {
          lenis.scrollTo(0, { duration: 1 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#E0E5EC]/90 backdrop-blur-md py-3 shadow-[0_10px_20px_rgba(163,177,198,0.4)]"
            : "bg-[#E0E5EC] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Molded SANKET Logo */}
            <Link
              href="/"
              onClick={scrollToTop}
              className="group flex items-center gap-3 select-none cursor-pointer"
              title="Return to top of page"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#E0E5EC] shadow-[6px_6px_12px_rgba(163,177,198,0.7),-6px_-6px_12px_rgba(255,255,255,0.8)] group-hover:shadow-[8px_8px_16px_rgba(163,177,198,0.8),-8px_-8px_16px_rgba(255,255,255,0.9)] flex items-center justify-center transition-all duration-300 group-active:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.7),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]">
                <span className="w-7 h-7 rounded-xl bg-[#6C63FF] text-white flex items-center justify-center font-display font-extrabold text-sm shadow-[0_2px_8px_rgba(108,99,255,0.4)]">
                  S
                </span>
              </div>
              <span className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-[#3D4852]">
                SANKET
              </span>
            </Link>

            {/* Center: Tactile Neumorphic Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-2 font-sans">
              {/* Platform Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("platform")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeDropdown === "platform"
                      ? "bg-[#E0E5EC] text-[#6C63FF] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)]"
                      : "text-[#3D4852] hover:text-[#6C63FF] hover:shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)]"
                  }`}
                  onClick={() => setActiveDropdown(activeDropdown === "platform" ? null : "platform")}
                >
                  Platform
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "platform" ? "rotate-180 text-[#6C63FF]" : ""
                    }`}
                  />
                </button>

                {activeDropdown === "platform" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="rounded-[32px] bg-[#E0E5EC] shadow-[12px_12px_24px_rgba(163,177,198,0.7),-12px_-12px_24px_rgba(255,255,255,0.8)] p-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-[11px] font-mono font-bold tracking-wider text-[#6C63FF] uppercase mb-3 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5" /> Intelligence Layers
                          </div>
                          <ul className="space-y-2">
                            <li>
                              <Link
                                href="/#section-05"
                                onClick={() => setActiveDropdown(null)}
                                className="group/link flex items-start gap-3 p-2 rounded-2xl hover:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all duration-200"
                              >
                                <div className="w-8 h-8 rounded-xl bg-[#E0E5EC] shadow-[3px_3px_6px_rgba(163,177,198,0.6),-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center shrink-0">
                                  <Activity className="w-4 h-4 text-[#6C63FF]" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-[#3D4852] group-hover/link:text-[#6C63FF]">
                                    Pore Pressure Physics
                                  </div>
                                  <div className="text-[11px] text-[#6B7280]">
                                    Subsurface saturation modeling
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/#section-09"
                                onClick={() => setActiveDropdown(null)}
                                className="group/link flex items-start gap-3 p-2 rounded-2xl hover:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all duration-200"
                              >
                                <div className="w-8 h-8 rounded-xl bg-[#E0E5EC] shadow-[3px_3px_6px_rgba(163,177,198,0.6),-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center shrink-0">
                                  <Eye className="w-4 h-4 text-[#6C63FF]" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-[#3D4852] group-hover/link:text-[#6C63FF]">
                                    Computer Vision Scarp
                                  </div>
                                  <div className="text-[11px] text-[#6B7280]">
                                    Tension crack & scarp segmentation
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/#section-01"
                                onClick={() => setActiveDropdown(null)}
                                className="group/link flex items-start gap-3 p-2 rounded-2xl hover:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all duration-200"
                              >
                                <div className="w-8 h-8 rounded-xl bg-[#E0E5EC] shadow-[3px_3px_6px_rgba(163,177,198,0.6),-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center shrink-0">
                                  <MapPin className="w-4 h-4 text-[#6C63FF]" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-[#3D4852] group-hover/link:text-[#6C63FF]">
                                    GIS Micro-Zone Map
                                  </div>
                                  <div className="text-[11px] text-[#6B7280]">
                                    10m DEM contour resolution
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className="border-l border-[#A3B1C6]/30 pl-6">
                          <div className="text-[11px] font-mono font-bold tracking-wider text-[#38B2AC] uppercase mb-3 flex items-center gap-1.5">
                            <Satellite className="w-3.5 h-3.5" /> Sensor Ingestion
                          </div>
                          <div className="space-y-2">
                            <div className="p-2 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]">
                              <span className="font-bold text-xs text-[#3D4852] block">Sentinel-2 InSAR Radar</span>
                              <span className="text-[10px] text-[#6B7280]">ESA displacement interferometry</span>
                            </div>
                            <div className="p-2 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]">
                              <span className="font-bold text-xs text-[#3D4852] block">IMD Precipitation Grid</span>
                              <span className="text-[10px] text-[#6B7280]">24-hour rainfall infiltration</span>
                            </div>
                            <div className="p-2 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]">
                              <span className="font-bold text-xs text-[#3D4852] block">IoT Soil Moisture Telemetry</span>
                              <span className="text-[10px] text-[#6B7280]">In-situ piezometers & slope sensors</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Links with Neumorphic Hover Effects */}
              <Link
                href="/#section-07"
                className="px-4 py-2.5 rounded-2xl text-sm font-medium text-[#3D4852] hover:text-[#6C63FF] hover:shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] active:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                How It Works
              </Link>

              <Link
                href="/#section-06"
                className="px-4 py-2.5 rounded-2xl text-sm font-medium text-[#3D4852] hover:text-[#6C63FF] hover:shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] active:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                Comparison
              </Link>

              <Link
                href="/#section-11"
                className="px-4 py-2.5 rounded-2xl text-sm font-medium text-[#3D4852] hover:text-[#6C63FF] hover:shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] active:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                Field Results
              </Link>

              <Link
                href="/about"
                className="px-4 py-2.5 rounded-2xl text-sm font-medium text-[#3D4852] hover:text-[#6C63FF] hover:shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] active:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                About
              </Link>

              <Link
                href="/faqs"
                className="px-4 py-2.5 rounded-2xl text-sm font-medium text-[#3D4852] hover:text-[#6C63FF] hover:shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] active:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                FAQs
              </Link>
            </nav>

            {/* Right: Tactile Primary CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-display font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-2xl bg-[#6C63FF] text-white shadow-[6px_6px_14px_rgba(163,177,198,0.7),-6px_-6px_14px_rgba(255,255,255,0.8)] hover:bg-[#7B73FF] hover:shadow-[8px_8px_18px_rgba(163,177,198,0.8),-8px_-8px_18px_rgba(255,255,255,0.9)] hover:translate-y-[-1px] active:translate-y-[0.5px] active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.35),inset_-3px_-3px_6px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer"
              >
                Request Access
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-11 h-11 rounded-2xl bg-[#E0E5EC] shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.6)] active:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#3D4852]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay & Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-[#3D4852]/30 backdrop-blur-sm" onClick={closeMobile} />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#E0E5EC] shadow-[-12px_0_24px_rgba(163,177,198,0.6)] p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6">
                <Link
                  href="/"
                  onClick={(e) => {
                    closeMobile();
                    scrollToTop(e);
                  }}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#E0E5EC] shadow-[4px_4px_8px_rgba(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.7)] flex items-center justify-center">
                    <span className="w-6 h-6 rounded-lg bg-[#6C63FF] text-white flex items-center justify-center font-display font-black text-xs">
                      S
                    </span>
                  </div>
                  <span className="text-lg font-display font-extrabold text-[#3D4852]">SANKET</span>
                </Link>
                <button
                  onClick={closeMobile}
                  className="w-9 h-9 rounded-xl bg-[#E0E5EC] shadow-[4px_4px_8px_rgba(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.7)] flex items-center justify-center text-[#3D4852]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="py-6 space-y-3 font-sans text-sm">
                <Link
                  href="/#section-01"
                  onClick={closeMobile}
                  className="block font-bold text-[#3D4852] p-3 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] hover:text-[#6C63FF]"
                >
                  Live Kedarnath Map
                </Link>
                <Link
                  href="/#section-07"
                  onClick={closeMobile}
                  className="block font-bold text-[#3D4852] p-3 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] hover:text-[#6C63FF]"
                >
                  How It Works
                </Link>
                <Link
                  href="/#section-06"
                  onClick={closeMobile}
                  className="block font-bold text-[#3D4852] p-3 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] hover:text-[#6C63FF]"
                >
                  System Comparison
                </Link>
                <Link
                  href="/#section-11"
                  onClick={closeMobile}
                  className="block font-bold text-[#3D4852] p-3 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] hover:text-[#6C63FF]"
                >
                  Field Results
                </Link>
                <Link
                  href="/about"
                  onClick={closeMobile}
                  className="block font-bold text-[#3D4852] p-3 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] hover:text-[#6C63FF]"
                >
                  About SANKET
                </Link>
                <Link
                  href="/faqs"
                  onClick={closeMobile}
                  className="block font-bold text-[#3D4852] p-3 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] hover:text-[#6C63FF]"
                >
                  Platform FAQs
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="block font-bold text-[#3D4852] p-3 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] hover:text-[#6C63FF]"
                >
                  Contact & Access
                </Link>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/contact"
                onClick={closeMobile}
                className="w-full inline-flex items-center justify-center font-display font-bold text-sm px-6 py-4 rounded-2xl bg-[#6C63FF] text-white shadow-[6px_6px_14px_rgba(163,177,198,0.7),-6px_-6px_14px_rgba(255,255,255,0.8)] text-center"
              >
                Request Agency Access
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}