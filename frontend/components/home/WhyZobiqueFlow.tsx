"use client";

import { SectionHeader } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

export function WhyZobiqueFlow() {
  return (
    <section className="relative py-[100px] pb-[130px] bg-[#FAFAF8] text-[#0A0A0A] border-b border-border overflow-hidden">
      {/* Premium subtle background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #0A0A0A 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#FF5A1F] opacity-[0.04] blur-[100px]" />
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#FAFAF8] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#FAFAF8] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader title="Why Zobique Labs" className="mb-14" />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[190px] lg:auto-rows-[180px] gap-[18px]">
            {/* 1: Custom Built Solutions - HERO */}
            <div className="relative col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 sm:row-span-1 lg:row-span-2 group">
              {/* Glowing Gradient Shadow */}
              <div className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-br from-[#FF5A1F] via-[#FF8A00] to-[#FF5A1F] opacity-0 blur-[14px] transition-all duration-500 group-hover:opacity-[0.35] group-hover:-translate-y-[5px]" />

              <div className="relative h-full rounded-2xl p-8 flex flex-col justify-end overflow-hidden border-[1.5px] border-[#0A0A0A] transition-all duration-500 group-hover:-translate-y-[5px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#050505] z-0" />
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FF5A1F] opacity-[0.08] blur-[80px] rounded-full z-0 group-hover:opacity-[0.15] transition-opacity duration-700" />
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

                <svg className="absolute inset-0 pointer-events-none w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" viewBox="0 0 400 400" preserveAspectRatio="xMaxYMid meet" xmlns="http://www.w3.org/2000/svg">
                  {/* Background Tech Details (Left Side) */}
                  <g stroke="#FF5A1F" fill="none" className="group-hover:opacity-100 transition-opacity duration-500">
                    <path d="M -10 90 L 60 90 L 110 140 L 150 140" strokeWidth="1" opacity="0.3" strokeDasharray="2 4" />
                    <circle cx="60" cy="90" r="1.5" fill="#FF5A1F" opacity="0.5" />
                    <circle cx="110" cy="140" r="1.5" fill="#FF5A1F" opacity="0.5" />
                    <path d="M 20 230 L 70 230 L 100 200" strokeWidth="1" opacity="0.2" />
                    <circle cx="70" cy="230" r="1.5" fill="#FF5A1F" opacity="0.3" />

                    <g transform="translate(15, 140)" opacity="0.6">
                      <path d="M 40 20 L 80 40 L 40 60 L 0 40 Z" strokeWidth="1" fill="rgba(255,90,31,0.02)" />
                      <path d="M 40 50 L 80 70 L 40 90 L 0 70 Z" strokeWidth="1" strokeDasharray="2 3" opacity="0.5" />
                      <path d="M 40 20 L 40 50 M 80 40 L 80 70 M 0 40 L 0 70" strokeWidth="1" opacity="0.4" />
                      <circle cx="40" cy="20" r="2" fill="#FF5A1F" opacity="0.8" />
                      <circle cx="80" cy="40" r="1.5" fill="#FF5A1F" opacity="0.8" />
                    </g>

                    <path d="M 95 180 L 130 180 L 150 120" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                    <circle cx="95" cy="180" r="2" fill="#FF5A1F" opacity="0.6" />
                  </g>

                  {/* Main Isometric Architecture (Right Side) */}
                  <g transform="translate(130, 40)" stroke="#FF5A1F" fill="none" className="group-hover:opacity-100 transition-opacity duration-500">
                    <path d="M 120 40 L 120 160" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                    <path d="M 220 80 L 220 200" strokeWidth="1" opacity="0.3" />
                    <path d="M 20 80 L 20 200" strokeWidth="1" opacity="0.3" />
                    <path d="M 120 160 L 220 200 L 120 240 L 20 200 Z" strokeWidth="1" fill="rgba(255,90,31,0.02)" opacity="0.5" />
                    <path d="M 20 200 L 220 200 M 120 160 L 120 240" strokeWidth="0.5" opacity="0.2" />
                    <path d="M 120 100 L 220 140 L 120 180 L 20 140 Z" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                    <path d="M 120 40 L 220 80 L 120 120 L 20 80 Z" strokeWidth="1.5" fill="rgba(255,90,31,0.04)" opacity="0.8" />
                    <path d="M 20 80 L 220 80 M 120 40 L 120 120" strokeWidth="0.5" opacity="0.4" />

                    <g transform="translate(0, -15)">
                      <path d="M 120 60 L 160 76 L 120 92 L 80 76 Z" strokeWidth="1" opacity="0.3" fill="rgba(255,90,31,0.05)" />
                      <path d="M 120 40 L 160 56 L 120 72 L 80 56 Z" strokeWidth="1.5" fill="rgba(255,90,31,0.15)" opacity="0.9" />
                      <path d="M 120 60 L 120 40 M 160 76 L 160 56 M 120 92 L 120 72 M 80 76 L 80 56" strokeWidth="1.5" opacity="0.9" />
                    </g>

                    <path d="M 120 120 L 120 240" strokeWidth="1.5" opacity="0.6" />

                    <circle cx="120" cy="40" r="2.5" fill="#FF5A1F" opacity="0.8" />
                    <circle cx="220" cy="80" r="2.5" fill="#FF5A1F" opacity="0.8" />
                    <circle cx="20" cy="80" r="2.5" fill="#FF5A1F" opacity="0.8" />
                    <circle cx="120" cy="120" r="3.5" fill="#FF5A1F" />
                    <circle cx="120" cy="160" r="2" fill="#FF5A1F" opacity="0.4" />
                    <circle cx="220" cy="200" r="2" fill="#FF5A1F" opacity="0.4" />
                    <circle cx="20" cy="200" r="2" fill="#FF5A1F" opacity="0.4" />
                    <circle cx="120" cy="240" r="3" fill="#FF5A1F" opacity="0.6" />
                  </g>
                </svg>
                <h3 className="text-[25px] text-white font-bold tracking-[-.01em] mb-2 relative z-10">Custom Built Solutions</h3>
                <p className="text-[13.6px] leading-[1.55] text-[#B9B6AF] relative z-10 max-w-[82%]">We don&apos;t sell templates. Every system is engineered specifically for your unique business workflows.</p>
              </div>
            </div>

            {/* 2: Enterprise Security */}
            <div className="relative col-span-1 sm:col-span-2 lg:col-span-2 group">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#FF5A1F] to-[#FF8A00] opacity-0 blur-[10px] transition-all duration-500 group-hover:opacity-[0.15] group-hover:-translate-y-[5px]" />

              <div className="relative h-full rounded-2xl p-8 flex flex-col justify-end overflow-hidden border-[1.5px] border-[#0A0A0A] bg-white transition-all duration-500 group-hover:-translate-y-[5px] group-hover:border-[#FF5A1F]">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 z-0" />
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#FF5A1F] opacity-[0.03] blur-[50px] rounded-full z-0 group-hover:opacity-[0.06] transition-opacity duration-700" />

                <svg className="absolute inset-0 pointer-events-none w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" viewBox="0 0 400 200" preserveAspectRatio="xMaxYMid meet" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(300,10)" opacity="0.9" className="group-hover:opacity-100 transition-opacity duration-500">
                    <path d="M40 0 L78 14 V54 C78 84 58 104 40 112 C22 104 2 84 2 54 V14 Z" fill="none" stroke="#0A0A0A" strokeWidth="1.3" opacity="0.10" className="group-hover:stroke-[#0A0A0A] group-hover:opacity-20 transition-all duration-500" />
                    <rect x="24" y="52" width="32" height="26" rx="3" fill="none" stroke="#FF5A1F" strokeWidth="1.4" opacity="0.7" className="group-hover:strokeWidth-[1.8] transition-all duration-500" />
                    <path d="M30 52 V42 a10 10 0 0 1 20 0 V52" fill="none" stroke="#FF5A1F" strokeWidth="1.4" opacity="0.7" className="group-hover:strokeWidth-[1.8] transition-all duration-500" />
                  </g>
                </svg>
                <h3 className="text-[19px] text-[#0A0A0A] font-bold tracking-[-.01em] mb-2 relative z-10">Enterprise Security</h3>
                <p className="text-[13.6px] leading-[1.55] text-[#6B6B68] relative z-10 max-w-[90%]">Built with strict data privacy, SOC2 compliance standards, and robust role-based access controls.</p>
              </div>
            </div>

            {/* 3: Fast Delivery */}
            <div className="relative col-span-1 lg:col-span-1 group">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#FF5A1F] to-[#FF8A00] opacity-0 blur-[10px] transition-all duration-500 group-hover:opacity-[0.15] group-hover:-translate-y-[5px]" />

              <div className="relative h-full rounded-2xl p-8 flex flex-col justify-end overflow-hidden border-[1.5px] border-[#0A0A0A] bg-white transition-all duration-500 group-hover:-translate-y-[5px] group-hover:border-[#FF5A1F]">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 z-0" />
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#FF5A1F] opacity-[0.03] blur-[50px] rounded-full z-0 group-hover:opacity-[0.06] transition-opacity duration-700" />

                <svg className="absolute inset-0 pointer-events-none w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" viewBox="0 0 200 200" preserveAspectRatio="xMaxYMax meet" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#FF5A1F" strokeLinecap="round" opacity="0.55" className="group-hover:opacity-80 transition-opacity duration-500">
                    <line x1="120" y1="150" x2="185" y2="150" strokeWidth="6" className="group-hover:strokeWidth-[7] transition-all duration-500" />
                    <line x1="100" y1="165" x2="150" y2="165" strokeWidth="6" className="group-hover:strokeWidth-[7] transition-all duration-500" />
                    <line x1="135" y1="180" x2="185" y2="180" strokeWidth="6" className="group-hover:strokeWidth-[7] transition-all duration-500" />
                  </g>
                </svg>
                <h3 className="text-[19px] text-[#0A0A0A] font-bold tracking-[-.01em] mb-2 relative z-10">Fast Delivery</h3>
                <p className="text-[13.6px] leading-[1.55] text-[#6B6B68] relative z-10 max-w-[90%]">Rapid prototyping into production, quickly.</p>
              </div>
            </div>

            {/* 4: Modern AI Stack */}
            <div className="relative col-span-1 lg:col-span-1 group">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#FF5A1F] to-[#FF8A00] opacity-0 blur-[10px] transition-all duration-500 group-hover:opacity-[0.15] group-hover:-translate-y-[5px]" />

              <div className="relative h-full rounded-2xl p-8 flex flex-col justify-end overflow-hidden border-[1.5px] border-[#0A0A0A] bg-white transition-all duration-500 group-hover:-translate-y-[5px] group-hover:border-[#FF5A1F]">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 z-0" />
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#FF5A1F] opacity-[0.03] blur-[50px] rounded-full z-0 group-hover:opacity-[0.06] transition-opacity duration-700" />

                <svg className="absolute inset-0 pointer-events-none w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" viewBox="0 0 200 200" preserveAspectRatio="xMaxYMin meet" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#0A0A0A" strokeWidth="1.2" opacity="0.14" className="group-hover:opacity-20 transition-opacity duration-500">
                    <line x1="160" y1="30" x2="130" y2="60" />
                    <line x1="160" y1="30" x2="180" y2="65" />
                    <line x1="130" y1="60" x2="150" y2="90" />
                    <line x1="180" y1="65" x2="150" y2="90" />
                  </g>
                  <g fill="#FF5A1F" opacity="0.8" className="group-hover:opacity-100 transition-opacity duration-500">
                    <circle cx="160" cy="30" r="4" className="group-hover:r-[5] transition-all duration-500" />
                    <circle cx="130" cy="60" r="3.5" className="group-hover:r-[4.5] transition-all duration-500" />
                    <circle cx="180" cy="65" r="3.5" className="group-hover:r-[4.5] transition-all duration-500" />
                    <circle cx="150" cy="90" r="4.5" className="group-hover:r-[5.5] transition-all duration-500" />
                  </g>
                </svg>
                <h3 className="text-[19px] text-[#0A0A0A] font-bold tracking-[-.01em] mb-2 relative z-10">Modern AI Stack</h3>
                <p className="text-[13.6px] leading-[1.55] text-[#6B6B68] relative z-10 max-w-[90%]">Frontier models from OpenAI, Anthropic, and Google - integrated seamlessly.</p>
              </div>
            </div>

            {/* 5: Long-Term Support */}
            <div className="relative col-span-1 sm:col-span-2 lg:col-span-2 group">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#FF5A1F] to-[#FF8A00] opacity-0 blur-[10px] transition-all duration-500 group-hover:opacity-[0.15] group-hover:-translate-y-[5px]" />

              <div className="relative h-full rounded-2xl p-8 flex flex-col justify-end overflow-hidden border-[1.5px] border-[#0A0A0A] bg-white transition-all duration-500 group-hover:-translate-y-[5px] group-hover:border-[#FF5A1F]">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 z-0" />
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#FF5A1F] opacity-[0.03] blur-[50px] rounded-full z-0 group-hover:opacity-[0.06] transition-opacity duration-700" />

                <svg className="absolute inset-0 pointer-events-none w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" viewBox="0 0 400 200" preserveAspectRatio="xMaxYMid meet" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(330,100)" fill="none" opacity="0.9" className="group-hover:opacity-100 transition-opacity duration-500">
                    <circle r="70" stroke="#0A0A0A" strokeWidth="1" opacity="0.09" className="group-hover:opacity-15 transition-opacity duration-500" />
                    <circle r="46" stroke="#0A0A0A" strokeWidth="1" opacity="0.12" className="group-hover:opacity-20 transition-opacity duration-500" />
                    <circle r="24" stroke="#FF5A1F" strokeWidth="1.4" opacity="0.6" className="group-hover:strokeWidth-[1.8] group-hover:opacity-90 transition-all duration-500" />
                    <circle cx="24" cy="0" r="4" fill="#FF5A1F" />
                  </g>
                </svg>
                <h3 className="text-[19px] text-[#0A0A0A] font-bold tracking-[-.01em] mb-2 relative z-10">Long-Term Support</h3>
                <p className="text-[13.6px] leading-[1.55] text-[#6B6B68] relative z-10 max-w-[90%]">We monitor, maintain, and continuously improve your systems post-deployment.</p>
              </div>
            </div>

            {/* 6: Business-First Approach */}
            <div className="relative col-span-1 sm:col-span-2 lg:col-span-2 group">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#FF5A1F] to-[#FF8A00] opacity-0 blur-[10px] transition-all duration-500 group-hover:opacity-[0.15] group-hover:-translate-y-[5px]" />

              <div className="relative h-full rounded-2xl p-8 flex flex-col justify-end overflow-hidden border-[1.5px] border-[#0A0A0A] bg-white transition-all duration-500 group-hover:-translate-y-[5px] group-hover:border-[#FF5A1F]">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 z-0" />
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#FF5A1F] opacity-[0.03] blur-[50px] rounded-full z-0 group-hover:opacity-[0.06] transition-opacity duration-700" />

                <svg className="absolute inset-0 pointer-events-none w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" viewBox="0 0 400 200" preserveAspectRatio="xMaxYMax meet" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.85" className="group-hover:opacity-100 transition-opacity duration-500">
                    <rect x="290" y="150" width="18" height="30" fill="#0A0A0A" opacity="0.10" className="group-hover:opacity-[0.15] transition-opacity duration-500" />
                    <rect x="316" y="130" width="18" height="50" fill="#0A0A0A" opacity="0.14" className="group-hover:opacity-[0.2] transition-opacity duration-500" />
                    <rect x="342" y="105" width="18" height="75" fill="#FF5A1F" opacity="0.65" className="group-hover:opacity-90 transition-opacity duration-500" />
                    <path d="M290 140 L316 118 L342 95 L368 70" stroke="#FF5A1F" strokeWidth="2" fill="none" strokeLinecap="round" className="group-hover:strokeWidth-[2.5] transition-all duration-500" />
                    <path d="M356 70 L368 70 L368 82" stroke="#FF5A1F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:strokeWidth-[2.5] transition-all duration-500" />
                  </g>
                </svg>
                <h3 className="text-[19px] text-[#0A0A0A] font-bold tracking-[-.01em] mb-2 relative z-10">Business-First Approach</h3>
                <p className="text-[13.6px] leading-[1.55] text-[#6B6B68] relative z-10 max-w-[90%]">Measurable ROI and real business problems solved - not hype.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
