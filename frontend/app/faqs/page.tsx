"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How does SANKET predict landslides before they occur?",
    answer: "SANKET continuously aggregates multispectral satellite imagery (Sentinel-2), real-time rainfall forecasts, digital elevation terrain models (DEM), and soil moisture sensor telemetry. Our AI models analyze the dynamic balance between pore water pressure and slope shear strength to flag impending failure hours before mass movement occurs."
  },
  {
    question: "What satellites and data sources are integrated?",
    answer: "SANKET ingests ESA Sentinel-2 (optical & InSAR radar interferometry), IMD high-resolution meteorological precipitation feeds, IoT piezometers, and geo-tagged photographic field reports from response teams on the ground."
  },
  {
    question: "How does the Computer Vision pipeline work?",
    answer: "Our computer vision models run both at the edge and in cloud pipelines to detect physical surface deformation indicators — including tension cracks, toe bulges, debris accumulation, and road subsidence — from roadside cameras, drone feeds, and field uploads."
  },
  {
    question: "How are early warnings delivered to authorities and communities?",
    answer: "Warnings are formatted according to the Common Alerting Protocol (CAP) and dispatched across multiple redundant channels: high-priority SMS broadcasts, mobile app push notifications with live evacuation routing, GIS dashboard alerts, and automated IVR voice calls."
  },
  {
    question: "Is SANKET aligned with NDMA and state disaster protocols?",
    answer: "Yes. SANKET is built specifically around the operational needs of National and State Disaster Management Authorities (NDMA/SDMA), Border Roads Organisation (BRO), and first responders, supporting multi-tier coordination from central command to field units."
  },
  {
    question: "Can SANKET operate in offline or low-connectivity mountain regions?",
    answer: "Yes. The SANKET field reporting mobile app features offline cryptographic caching and localized mesh sync so that field observations are securely captured without internet and synced the moment connectivity is re-established."
  }
];

export default function FAQPage() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="pt-32 sm:pt-40 min-h-screen bg-black text-white pb-24 selection:bg-[#e22718] selection:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#1a1a1a] border border-[#3c3c3c] text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
            <span>Platform FAQs</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans uppercase">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#bbbbbb] font-light leading-relaxed">
            Everything you need to know about SANKET&apos;s physics-based landslide prediction algorithms, sensor pipelines, and alert dissemination networks.
          </p>
        </div>

        {/* Feature Tags */}
        <div className="max-w-2xl mx-auto mb-12 grid gap-3 sm:grid-cols-3">
          {[
            "AI predictive pore modeling",
            "Sentinel-2 & sensor fusion",
            "Multi-channel CAP alert protocol",
          ].map((item) => (
            <div
              key={item}
              className="bg-[#1a1a1a] border border-[#3c3c3c] p-3 text-xs font-mono font-bold uppercase tracking-wider text-white text-center"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-[#3c3c3c] transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-8 h-8 flex items-center justify-center text-xs font-mono font-bold transition-all shrink-0 ${
                        isOpen
                          ? "bg-white text-black"
                          : "bg-[#0d0d0d] text-white border border-[#262626]"
                      }`}
                    >
                      Q{index + 1}
                    </div>
                    <span className="text-base sm:text-lg font-bold uppercase tracking-wide text-white group-hover:text-[#1c69d4] transition-colors leading-snug font-sans">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 bg-[#0d0d0d] border border-[#262626] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : "text-[#7e7e7e]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 sm:px-7 sm:pb-7 animate-in fade-in duration-150">
                    <div className="p-5 bg-[#0d0d0d] border border-[#262626] text-sm text-[#bbbbbb] font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Pod */}
        <div className="mt-16 text-center p-8 sm:p-10 bg-[#1a1a1a] border border-[#3c3c3c] space-y-4">
          <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-white font-sans">
            Have a custom agency deployment or sensor integration question?
          </h3>
          <p className="text-sm text-[#bbbbbb] font-light max-w-md mx-auto leading-relaxed">
            Our engineering team supports state disaster authority telemetry and regional digital elevation model ingestion.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-bold uppercase tracking-[1.5px] text-xs hover:bg-[#e6e6e6] transition-all"
            >
              <span>Contact Technical Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
