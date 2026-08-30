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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md py-3.5 border-b border-[#3c3c3c] shadow-2xl text-white"
            : "bg-black py-4 border-b border-[#262626] text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Signature BMW M SANKET Emblem */}
            <Link
              href="/"
              onClick={scrollToTop}
              className="group flex items-center gap-3 select-none cursor-pointer"
              title="Return to top of page"
            >
              {/* M Tricolor Badge Icon */}
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

            {/* Center: BMW M Uppercase Letterspaced Nav */}
            <nav className="hidden lg:flex items-center space-x-1 font-sans">
              {/* Platform Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("platform")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] transition-colors cursor-pointer ${
                    activeDropdown === "platform"
                      ? "text-white bg-[#1a1a1a]"
                      : "text-[#bbbbbb] hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setActiveDropdown(activeDropdown === "platform" ? null : "platform")}
                >
                  Platform
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "platform" ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>

                {activeDropdown === "platform" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px] z-50 animate-in fade-in duration-150">
                    <div className="bg-[#1a1a1a] border border-[#3c3c3c] shadow-2xl p-5 grid grid-cols-2 gap-3">
                      <Link
                        href="/#section-07"
                        onClick={() => setActiveDropdown(null)}
                        className="p-3.5 bg-[#0d0d0d] border border-[#262626] hover:border-[#3c3c3c] hover:bg-[#262626] transition-all group"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <Layers className="w-4 h-4 text-[#1c69d4]" />
                          <span className="font-bold text-xs uppercase tracking-[1px] text-white">
                            4-Stage Pipeline
                          </span>
                        </div>
                        <p className="text-xs text-[#7e7e7e]">
                          Observe, Analyze, Predict & Warn architecture.
                        </p>
                      </Link>

                      <Link
                        href="/#section-08"
                        onClick={() => setActiveDropdown(null)}
                        className="p-3.5 bg-[#0d0d0d] border border-[#262626] hover:border-[#3c3c3c] hover:bg-[#262626] transition-all group"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <Satellite className="w-4 h-4 text-[#0066b1]" />
                          <span className="font-bold text-xs uppercase tracking-[1px] text-white">
                            Sentinel InSAR Radar
                          </span>
                        </div>
                        <p className="text-xs text-[#7e7e7e]">
                          Millimeter-scale slope deformation tracking.
                        </p>
                      </Link>

                      <Link
                        href="/#section-09"
                        onClick={() => setActiveDropdown(null)}
                        className="p-3.5 bg-[#0d0d0d] border border-[#262626] hover:border-[#3c3c3c] hover:bg-[#262626] transition-all group"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <Eye className="w-4 h-4 text-[#e22718]" />
                          <span className="font-bold text-xs uppercase tracking-[1px] text-white">
                            Edge Computer Vision
                          </span>
                        </div>
                        <p className="text-xs text-[#7e7e7e]">
                          Visual scarp and tension crack segmentation.
                        </p>
                      </Link>

                      <Link
                        href="/#section-01"
                        onClick={() => setActiveDropdown(null)}
                        className="p-3.5 bg-[#0d0d0d] border border-[#262626] hover:border-[#3c3c3c] hover:bg-[#262626] transition-all group"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <MapPin className="w-4 h-4 text-white" />
                          <span className="font-bold text-xs uppercase tracking-[1px] text-white">
                            Spatial GIS Dashboard
                          </span>
                        </div>
                        <p className="text-xs text-[#7e7e7e]">
                          10m micro-zone risk classification engine.
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={`px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] transition-colors ${
                  pathname === "/about"
                    ? "text-white bg-[#1a1a1a]"
                    : "text-[#bbbbbb] hover:text-white hover:bg-white/5"
                }`}
              >
                About
              </Link>

              <Link
                href="/#section-10"
                className="px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#bbbbbb] hover:text-white hover:bg-white/5 transition-colors"
              >
                Early Warning
              </Link>

              <Link
                href="/faqs"
                className={`px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] transition-colors ${
                  pathname === "/faqs"
                    ? "text-white bg-[#1a1a1a]"
                    : "text-[#bbbbbb] hover:text-white hover:bg-white/5"
                }`}
              >
                FAQs
              </Link>

              <Link
                href="/contact"
                className={`px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] transition-colors ${
                  pathname === "/contact"
                    ? "text-white bg-[#1a1a1a]"
                    : "text-[#bbbbbb] hover:text-white hover:bg-white/5"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right: Signature BMW M Rectangular Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/#section-15"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-[1.5px] rounded-none hover:bg-[#e6e6e6] active:scale-[0.98] transition-all duration-150 cursor-pointer"
              >
                <span>Request Sandbox</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:bg-[#1a1a1a] transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black text-white pt-24 px-6 flex flex-col justify-between pb-8 animate-in fade-in duration-200">
          <div className="space-y-4 font-sans">
            <Link
              href="/"
              onClick={() => {
                closeMobile();
                if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="block text-xl font-bold uppercase tracking-wider py-2 border-b border-[#262626]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMobile}
              className="block text-xl font-bold uppercase tracking-wider py-2 border-b border-[#262626]"
            >
              About
            </Link>
            <Link
              href="/#section-07"
              onClick={closeMobile}
              className="block text-xl font-bold uppercase tracking-wider py-2 border-b border-[#262626]"
            >
              Platform Pipeline
            </Link>
            <Link
              href="/#section-10"
              onClick={closeMobile}
              className="block text-xl font-bold uppercase tracking-wider py-2 border-b border-[#262626]"
            >
              Early Warning
            </Link>
            <Link
              href="/faqs"
              onClick={closeMobile}
              className="block text-xl font-bold uppercase tracking-wider py-2 border-b border-[#262626]"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              onClick={closeMobile}
              className="block text-xl font-bold uppercase tracking-wider py-2 border-b border-[#262626]"
            >
              Contact
            </Link>
          </div>

          <div className="pt-6">
            <Link
              href="/#section-15"
              onClick={closeMobile}
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-white text-black font-bold uppercase tracking-[1.5px] text-xs text-center"
            >
              <span>Request Agency Sandbox</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}