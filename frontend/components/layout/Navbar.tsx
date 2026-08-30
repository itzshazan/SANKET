"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Layers,
  Satellite,
  Eye,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
        className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none"
      >
        <div className="max-w-6xl mx-auto pointer-events-auto">
          <div
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-[#FEFEFA]/90 backdrop-blur-md border border-[#DED8CF] shadow-[0_10px_30px_-5px_rgba(93,112,82,0.15)]"
                : "bg-white/80 backdrop-blur-md border border-[#DED8CF]/70 shadow-[0_4px_20px_-2px_rgba(93,112,82,0.10)]"
            }`}
          >
            {/* Left: Organic SANKET Logo */}
            <Link
              href="/"
              onClick={scrollToTop}
              className="group flex items-center gap-3 select-none cursor-pointer"
              title="Return to top of page"
            >
              <div className="w-9 h-9 rounded-full bg-[#5D7052] flex items-center justify-center text-[#F3F4F1] shadow-[0_2px_10px_rgba(93,112,82,0.3)] group-hover:scale-105 transition-transform">
                <span className="font-serif font-bold text-lg leading-none">S</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#2C2C24] font-serif">
                SANKET
              </span>
            </Link>

            {/* Center: Organic Rounded Nav Links */}
            <nav className="hidden lg:flex items-center space-x-1 font-sans">
              {/* Platform Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("platform")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-full transition-all cursor-pointer ${
                    activeDropdown === "platform"
                      ? "text-[#5D7052] bg-[#5D7052]/10"
                      : "text-[#4A4A40] hover:text-[#5D7052] hover:bg-[#5D7052]/5"
                  }`}
                  onClick={() => setActiveDropdown(activeDropdown === "platform" ? null : "platform")}
                >
                  Platform
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "platform" ? "rotate-180 text-[#5D7052]" : ""
                    }`}
                  />
                </button>

                {activeDropdown === "platform" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[520px] z-50 animate-in fade-in duration-200">
                    <div className="bg-[#FEFEFA] border border-[#DED8CF] rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(93,112,82,0.2)] p-5 grid grid-cols-2 gap-3">
                      <Link
                        href="/#section-07"
                        onClick={() => setActiveDropdown(null)}
                        className="p-3.5 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF]/60 hover:border-[#5D7052]/50 hover:bg-[#5D7052]/5 transition-all group"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="w-7 h-7 rounded-xl bg-[#5D7052]/10 flex items-center justify-center text-[#5D7052]">
                            <Layers className="w-4 h-4" />
                          </div>
                          <span className="font-bold text-sm text-[#2C2C24]">
                            4-Stage Pipeline
                          </span>
                        </div>
                        <p className="text-xs text-[#78786C] leading-relaxed">
                          Observe, Analyze, Predict & Warn architecture.
                        </p>
                      </Link>

                      <Link
                        href="/#section-08"
                        onClick={() => setActiveDropdown(null)}
                        className="p-3.5 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF]/60 hover:border-[#5D7052]/50 hover:bg-[#5D7052]/5 transition-all group"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="w-7 h-7 rounded-xl bg-[#C18C5D]/10 flex items-center justify-center text-[#C18C5D]">
                            <Satellite className="w-4 h-4" />
                          </div>
                          <span className="font-bold text-sm text-[#2C2C24]">
                            Sentinel InSAR Radar
                          </span>
                        </div>
                        <p className="text-xs text-[#78786C] leading-relaxed">
                          Millimeter-scale slope deformation tracking.
                        </p>
                      </Link>

                      <Link
                        href="/#section-09"
                        onClick={() => setActiveDropdown(null)}
                        className="p-3.5 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF]/60 hover:border-[#5D7052]/50 hover:bg-[#5D7052]/5 transition-all group"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="w-7 h-7 rounded-xl bg-[#A85448]/10 flex items-center justify-center text-[#A85448]">
                            <Eye className="w-4 h-4" />
                          </div>
                          <span className="font-bold text-sm text-[#2C2C24]">
                            Edge Computer Vision
                          </span>
                        </div>
                        <p className="text-xs text-[#78786C] leading-relaxed">
                          Visual scarp and tension crack segmentation.
                        </p>
                      </Link>

                      <Link
                        href="/#section-01"
                        onClick={() => setActiveDropdown(null)}
                        className="p-3.5 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF]/60 hover:border-[#5D7052]/50 hover:bg-[#5D7052]/5 transition-all group"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="w-7 h-7 rounded-xl bg-[#5D7052]/10 flex items-center justify-center text-[#5D7052]">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <span className="font-bold text-sm text-[#2C2C24]">
                            Spatial GIS Dashboard
                          </span>
                        </div>
                        <p className="text-xs text-[#78786C] leading-relaxed">
                          10m micro-zone risk classification engine.
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={`px-4 py-2 text-sm font-bold rounded-full transition-all ${
                  pathname === "/about"
                    ? "text-[#5D7052] bg-[#5D7052]/10"
                    : "text-[#4A4A40] hover:text-[#5D7052] hover:bg-[#5D7052]/5"
                }`}
              >
                About
              </Link>

              <Link
                href="/#section-10"
                className="px-4 py-2 text-sm font-bold text-[#4A4A40] hover:text-[#5D7052] hover:bg-[#5D7052]/5 rounded-full transition-all"
              >
                Early Warning
              </Link>

              <Link
                href="/faqs"
                className={`px-4 py-2 text-sm font-bold rounded-full transition-all ${
                  pathname === "/faqs"
                    ? "text-[#5D7052] bg-[#5D7052]/10"
                    : "text-[#4A4A40] hover:text-[#5D7052] hover:bg-[#5D7052]/5"
                }`}
              >
                FAQs
              </Link>

              <Link
                href="/contact"
                className={`px-4 py-2 text-sm font-bold rounded-full transition-all ${
                  pathname === "/contact"
                    ? "text-[#5D7052] bg-[#5D7052]/10"
                    : "text-[#4A4A40] hover:text-[#5D7052] hover:bg-[#5D7052]/5"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right: Tactile Moss Green Pill Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/#section-15"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#5D7052] text-[#F3F4F1] text-sm font-bold rounded-full hover:bg-[#4C5D42] hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_4px_16px_-2px_rgba(93,112,82,0.25)] cursor-pointer"
              >
                <span>Sandbox Access</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-full bg-[#5D7052]/10 flex items-center justify-center text-[#5D7052] hover:bg-[#5D7052]/20 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#2C2C24]/40 backdrop-blur-sm pt-24 px-4 pb-6 flex flex-col justify-end animate-in fade-in duration-200">
          <div className="bg-[#FEFEFA] border border-[#DED8CF] rounded-[2.5rem] p-6 shadow-2xl space-y-4 font-sans max-w-md mx-auto w-full">
            <div className="space-y-2">
              <Link
                href="/"
                onClick={() => {
                  closeMobile();
                  if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block text-lg font-bold text-[#2C2C24] py-2 px-3 rounded-xl hover:bg-[#5D7052]/10"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMobile}
                className="block text-lg font-bold text-[#2C2C24] py-2 px-3 rounded-xl hover:bg-[#5D7052]/10"
              >
                About SANKET
              </Link>
              <Link
                href="/#section-07"
                onClick={closeMobile}
                className="block text-lg font-bold text-[#2C2C24] py-2 px-3 rounded-xl hover:bg-[#5D7052]/10"
              >
                Platform Pipeline
              </Link>
              <Link
                href="/#section-10"
                onClick={closeMobile}
                className="block text-lg font-bold text-[#2C2C24] py-2 px-3 rounded-xl hover:bg-[#5D7052]/10"
              >
                Early Warning Matrix
              </Link>
              <Link
                href="/faqs"
                onClick={closeMobile}
                className="block text-lg font-bold text-[#2C2C24] py-2 px-3 rounded-xl hover:bg-[#5D7052]/10"
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                onClick={closeMobile}
                className="block text-lg font-bold text-[#2C2C24] py-2 px-3 rounded-xl hover:bg-[#5D7052]/10"
              >
                Contact
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href="/#section-15"
                onClick={closeMobile}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#5D7052] text-[#F3F4F1] font-bold text-sm rounded-full text-center shadow-soft"
              >
                <span>Request Agency Sandbox</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}