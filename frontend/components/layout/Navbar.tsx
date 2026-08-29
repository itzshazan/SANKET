"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Shield,
  Activity,
  Layers,
  Satellite,
  Eye,
  MapPin,
  CloudRain,
  Mountain,
  AlertTriangle,
  Radio,
  FileSpreadsheet,
  Building2,
  Car,
  Flame,
  Users,
  Compass,
  ArrowRight
} from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
    setMobileExpandedSection(null);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#1A2614]/92 backdrop-blur-xl border-b border-[#37502B] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-5 border-b border-white/10"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: SANKET Logo (Smoothly scrolls to top on click) */}
            <Link
              href="/"
              onClick={scrollToTop}
              className="group flex items-center gap-2.5 select-none cursor-pointer"
              title="Return to top of page"
            >
              <span className="w-8 h-8 rounded-lg bg-[#C8EA3B] text-[#1A2614] flex items-center justify-center font-display font-black text-base shadow-[0_0_15px_rgba(200,234,59,0.35)] group-hover:scale-105 transition-transform">
                S
              </span>
              <span className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white">
                SANKET
              </span>
            </Link>

            {/* Center: Mega Menus */}
            <nav className="hidden lg:flex items-center space-x-1 font-sans">
              {/* Platform Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("platform")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-[#C5D7BD] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  onClick={() => setActiveDropdown(activeDropdown === "platform" ? null : "platform")}
                >
                  Platform
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "platform" ? "rotate-180 text-[#C8EA3B]" : ""
                      }`}
                  />
                </button>

                {activeDropdown === "platform" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[580px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="rounded-2xl bg-[#213318] border border-[#37502B] shadow-2xl p-6 overflow-hidden">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Column 1: Intelligence Layers */}
                        <div>
                          <div className="text-[11px] font-mono font-bold tracking-wider text-[#C8EA3B] uppercase mb-3 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5" /> Intelligence Layers
                          </div>
                          <ul className="space-y-2.5">
                            <li>
                              <a href="#section-08" onClick={() => setActiveDropdown(null)} className="group/link flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-white/5 transition-colors">
                                <Activity className="w-4 h-4 text-[#C8EA3B] mt-0.5 shrink-0" />
                                <div>
                                  <div className="text-xs font-semibold text-white group-hover/link:text-[#C8EA3B] transition-colors">AI Risk Assessment</div>
                                  <div className="text-[11px] text-[#C5D7BD]/70">Continuous ML terrain susceptibility</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#section-09" onClick={() => setActiveDropdown(null)} className="group/link flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-white/5 transition-colors">
                                <Eye className="w-4 h-4 text-[#C8EA3B] mt-0.5 shrink-0" />
                                <div>
                                  <div className="text-xs font-semibold text-white group-hover/link:text-[#C8EA3B] transition-colors">Computer Vision</div>
                                  <div className="text-[11px] text-[#C5D7BD]/70">Ground crack & debris detection</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#section-08" onClick={() => setActiveDropdown(null)} className="group/link flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-white/5 transition-colors">
                                <Satellite className="w-4 h-4 text-[#C8EA3B] mt-0.5 shrink-0" />
                                <div>
                                  <div className="text-xs font-semibold text-white group-hover/link:text-[#C8EA3B] transition-colors">Satellite Monitoring</div>
                                  <div className="text-[11px] text-[#C5D7BD]/70">Sentinel-2 remote sensing feeds</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#section-01" onClick={() => setActiveDropdown(null)} className="group/link flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-white/5 transition-colors">
                                <MapPin className="w-4 h-4 text-[#C8EA3B] mt-0.5 shrink-0" />
                                <div>
                                  <div className="text-xs font-semibold text-white group-hover/link:text-[#C8EA3B] transition-colors">GIS Risk Maps</div>
                                  <div className="text-[11px] text-[#C5D7BD]/70">PostGIS dynamic spatial heatmaps</div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* Column 2: Data Sources */}
                        <div className="border-l border-[#37502B] pl-6">
                          <div className="text-[11px] font-mono font-bold tracking-wider text-[#C8EA3B] uppercase mb-3 flex items-center gap-1.5">
                            <Radio className="w-3.5 h-3.5" /> Data Sources
                          </div>
                          <ul className="space-y-2.5">
                            <li className="p-1.5">
                              <div className="text-xs font-semibold text-white flex items-center gap-2">
                                <CloudRain className="w-4 h-4 text-[#C5D7BD]" /> Rainfall Data Feeds
                              </div>
                              <div className="text-[11px] text-[#C5D7BD]/70 ml-6">High-res precipitation forecasts</div>
                            </li>
                            <li className="p-1.5">
                              <div className="text-xs font-semibold text-white flex items-center gap-2">
                                <Mountain className="w-4 h-4 text-[#C5D7BD]" /> Soil Moisture Sensors
                              </div>
                              <div className="text-[11px] text-[#C5D7BD]/70 ml-6">Volumetric saturation tracking</div>
                            </li>
                            <li className="p-1.5">
                              <div className="text-xs font-semibold text-white flex items-center gap-2">
                                <Compass className="w-4 h-4 text-[#C5D7BD]" /> Terrain Slope Models
                              </div>
                              <div className="text-[11px] text-[#C5D7BD]/70 ml-6">Digital Elevation DEM analysis</div>
                            </li>
                            <li className="p-1.5">
                              <div className="text-xs font-semibold text-white flex items-center gap-2">
                                <FileSpreadsheet className="w-4 h-4 text-[#C5D7BD]" /> Historical Records
                              </div>
                              <div className="text-[11px] text-[#C5D7BD]/70 ml-6">Multi-decade incident catalogs</div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Dropdown footer bar */}
                      <div className="mt-4 pt-3 border-t border-[#37502B] flex items-center justify-between text-xs text-[#C5D7BD]">
                        <span>6+ Live Environmental Ingestion Pipelines</span>
                        <a href="#section-07" onClick={() => setActiveDropdown(null)} className="text-[#C8EA3B] font-semibold flex items-center gap-1 hover:underline">
                          See Pipeline Architecture <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-[#C5D7BD] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  onClick={() => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")}
                >
                  Solutions
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180 text-[#C8EA3B]" : ""
                      }`}
                  />
                </button>

                {activeDropdown === "solutions" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="rounded-2xl bg-[#213318] border border-[#37502B] shadow-2xl p-4 space-y-1.5">
                      <a href="#section-10" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 text-white transition-colors group">
                        <AlertTriangle className="w-4 h-4 text-[#C8EA3B]" />
                        <div>
                          <div className="text-xs font-semibold group-hover:text-[#C8EA3B] transition-colors">Early Warning Alerts</div>
                          <div className="text-[11px] text-[#C5D7BD]/70">Tiered SMS, App & Voice alerts</div>
                        </div>
                      </a>
                      <a href="#section-11" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 text-white transition-colors group">
                        <CameraIcon className="w-4 h-4 text-[#C8EA3B]" />
                        <div>
                          <div className="text-xs font-semibold group-hover:text-[#C8EA3B] transition-colors">Field Reporting</div>
                          <div className="text-[11px] text-[#C5D7BD]/70">Geo-tagged photo submissions</div>
                        </div>
                      </a>
                      <a href="#section-01" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 text-white transition-colors group">
                        <Layers className="w-4 h-4 text-[#C8EA3B]" />
                        <div>
                          <div className="text-xs font-semibold group-hover:text-[#C8EA3B] transition-colors">Risk Dashboard</div>
                          <div className="text-[11px] text-[#C5D7BD]/70">Real-time situational awareness</div>
                        </div>
                      </a>
                      <a href="#section-10" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 text-white transition-colors group">
                        <Radio className="w-4 h-4 text-[#C8EA3B]" />
                        <div>
                          <div className="text-xs font-semibold group-hover:text-[#C8EA3B] transition-colors">Alert Channels</div>
                          <div className="text-[11px] text-[#C5D7BD]/70">Multi-agency broadcast network</div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Who It's For Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("who")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-[#C5D7BD] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  onClick={() => setActiveDropdown(activeDropdown === "who" ? null : "who")}
                >
                  Who It&apos;s For
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "who" ? "rotate-180 text-[#C8EA3B]" : ""
                      }`}
                  />
                </button>

                {activeDropdown === "who" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="rounded-2xl bg-[#213318] border border-[#37502B] shadow-2xl p-4 space-y-1">
                      <a href="#section-12" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 text-white transition-colors group">
                        <Building2 className="w-4 h-4 text-[#DDF2EC]" />
                        <div>
                          <div className="text-xs font-semibold group-hover:text-[#C8EA3B]">Disaster Authorities</div>
                          <div className="text-[11px] text-[#C5D7BD]/70">NDMA & SDMA command centers</div>
                        </div>
                      </a>
                      <a href="#section-12" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 text-white transition-colors group">
                        <Car className="w-4 h-4 text-[#ECEBFA]" />
                        <div>
                          <div className="text-xs font-semibold group-hover:text-[#C8EA3B]">Road & Infrastructure Agencies</div>
                          <div className="text-[11px] text-[#C5D7BD]/70">NHAI & Border road networks</div>
                        </div>
                      </a>
                      <a href="#section-12" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 text-white transition-colors group">
                        <Flame className="w-4 h-4 text-[#C8EA3B]" />
                        <div>
                          <div className="text-xs font-semibold group-hover:text-[#C8EA3B]">Emergency Response Teams</div>
                          <div className="text-[11px] text-[#C5D7BD]/70">NDRF & first responders</div>
                        </div>
                      </a>
                      <a href="#section-12" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 text-white transition-colors group">
                        <Users className="w-4 h-4 text-[#DDF2EC]" />
                        <div>
                          <div className="text-xs font-semibold group-hover:text-[#C8EA3B]">Local Communities & Field Teams</div>
                          <div className="text-[11px] text-[#C5D7BD]/70">Vulnerable high-risk mountain zones</div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#section-01"
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-[#C5D7BD] hover:text-white hover:bg-white/5 transition-colors"
              >
                Risk Map
              </a>
              <a
                href="#section-13"
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-[#C5D7BD] hover:text-white hover:bg-white/5 transition-colors"
              >
                About
              </a>
            </nav>

            {/* Right: CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#section-15"
                className="inline-flex items-center justify-center font-display font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg bg-[#C8EA3B] text-[#1A2614] hover:bg-[#E4F76E] shadow-[0_0_20px_rgba(200,234,59,0.25)] transition-all hover:scale-105 cursor-pointer"
              >
                Request Demo
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#C5D7BD] hover:text-white hover:bg-white/10"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay & Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMobile} />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#1A2614] border-l border-[#37502B] p-6 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#37502B]">
                <Link
                  href="/"
                  onClick={(e) => {
                    closeMobile();
                    scrollToTop(e);
                  }}
                  className="flex items-center gap-2.5 cursor-pointer"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#C8EA3B] text-[#1A2614] flex items-center justify-center font-display font-black text-xs">
                    S
                  </span>
                  <span className="text-lg font-display font-bold text-white">SANKET</span>
                </Link>
                <button onClick={closeMobile} className="p-1.5 rounded-lg text-[#C5D7BD] hover:text-white hover:bg-white/10">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="py-6 space-y-4 font-sans text-sm">
                <div>
                  <button
                    onClick={() => setMobileExpandedSection(mobileExpandedSection === "platform" ? null : "platform")}
                    className="flex items-center justify-between w-full text-left font-semibold text-white py-2"
                  >
                    <span>Platform</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === "platform" ? "rotate-180 text-[#C8EA3B]" : ""}`} />
                  </button>
                  {mobileExpandedSection === "platform" && (
                    <div className="pl-3 py-2 space-y-2 border-l border-[#37502B] text-xs text-[#C5D7BD]">
                      <a href="#section-08" onClick={closeMobile} className="block py-1 hover:text-[#C8EA3B]">AI Risk Assessment</a>
                      <a href="#section-09" onClick={closeMobile} className="block py-1 hover:text-[#C8EA3B]">Computer Vision Analysis</a>
                      <a href="#section-08" onClick={closeMobile} className="block py-1 hover:text-[#C8EA3B]">Satellite Monitoring</a>
                      <a href="#section-01" onClick={closeMobile} className="block py-1 hover:text-[#C8EA3B]">GIS Risk Maps</a>
                      <a href="#section-07" onClick={closeMobile} className="block py-1 hover:text-[#C8EA3B]">Data Ingestion Feeds</a>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setMobileExpandedSection(mobileExpandedSection === "solutions" ? null : "solutions")}
                    className="flex items-center justify-between w-full text-left font-semibold text-white py-2"
                  >
                    <span>Solutions</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === "solutions" ? "rotate-180 text-[#C8EA3B]" : ""}`} />
                  </button>
                  {mobileExpandedSection === "solutions" && (
                    <div className="pl-3 py-2 space-y-2 border-l border-[#37502B] text-xs text-[#C5D7BD]">
                      <a href="#section-10" onClick={closeMobile} className="block py-1 hover:text-[#C8EA3B]">Early Warning Alerts</a>
                      <a href="#section-11" onClick={closeMobile} className="block py-1 hover:text-[#C8EA3B]">Field Reporting App</a>
                      <a href="#section-01" onClick={closeMobile} className="block py-1 hover:text-[#C8EA3B]">Risk Dashboard</a>
                      <a href="#section-10" onClick={closeMobile} className="block py-1 hover:text-[#C8EA3B]">Multi-Channel Alerts</a>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setMobileExpandedSection(mobileExpandedSection === "who" ? null : "who")}
                    className="flex items-center justify-between w-full text-left font-semibold text-white py-2"
                  >
                    <span>Who It&apos;s For</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === "who" ? "rotate-180 text-[#C8EA3B]" : ""}`} />
                  </button>
                  {mobileExpandedSection === "who" && (
                    <div className="pl-3 py-2 space-y-2 border-l border-[#37502B] text-xs text-[#C5D7BD]">
                      <a href="#section-12" onClick={closeMobile} className="block py-1 hover:text-[#C8EA3B]">Disaster Authorities</a>
                      <a href="#section-12" onClick={closeMobile} className="block py-1 hover:text-[#C8EA3B]">Road Agencies</a>
                      <a href="#section-12" onClick={closeMobile} className="block py-1 hover:text-[#C8EA3B]">Emergency Teams</a>
                      <a href="#section-12" onClick={closeMobile} className="block py-1 hover:text-[#C8EA3B]">Local Communities</a>
                    </div>
                  )}
                </div>

                <a href="#section-01" onClick={closeMobile} className="block font-semibold text-white py-2 hover:text-[#C8EA3B]">
                  Risk Map
                </a>
                <a href="#section-13" onClick={closeMobile} className="block font-semibold text-white py-2 hover:text-[#C8EA3B]">
                  About SANKET
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#37502B]">
              <a
                href="#section-15"
                onClick={closeMobile}
                className="w-full inline-flex items-center justify-center font-display font-semibold text-sm px-5 py-3 rounded-lg bg-[#C8EA3B] text-[#1A2614] hover:bg-[#E4F76E] shadow-lg text-center"
              >
                Request Demo
              </a>
              <div className="text-center text-[10px] text-[#7E9473] font-mono mt-3">
                Smart India Hackathon (SIH 2026)
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}