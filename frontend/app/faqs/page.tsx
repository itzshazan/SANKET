"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";
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
    <div className="pt-32 sm:pt-40 min-h-screen bg-[#FDFCF8] text-[#2C2C24] pb-24 selection:bg-[#5D7052] selection:text-[#F3F4F1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EBF0E8] border border-[#5D7052]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#5D7052] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Platform FAQs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#2C2C24]">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#78786C] font-normal leading-relaxed">
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
              className="bg-[#FEFEFA] border border-[#DED8CF] rounded-full p-3 text-xs font-bold text-[#5D7052] text-center shadow-2xs"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="bg-[#FEFEFA] border border-[#DED8CF] rounded-3xl shadow-soft transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-9 h-9 rounded-2xl flex items-center justify-center text-xs font-serif font-bold transition-all shrink-0 ${
                        isOpen
                          ? "bg-[#5D7052] text-[#F3F4F1]"
                          : "bg-[#EBF0E8] text-[#5D7052]"
                      }`}
                    >
                      Q{index + 1}
                    </div>
                    <span className="text-base sm:text-lg font-serif font-bold text-[#2C2C24] group-hover:text-[#5D7052] transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full bg-[#F0EBE5] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#5D7052] bg-[#EBF0E8]" : "text-[#78786C]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 sm:px-7 sm:pb-7 animate-in fade-in duration-200">
                    <div className="p-5 bg-[#FDFCF8] rounded-2xl border border-[#DED8CF] text-sm text-[#78786C] leading-relaxed font-sans">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Pod */}
        <div className="mt-16 text-center p-8 sm:p-12 bg-[#FEFEFA] border border-[#DED8CF] rounded-[2.5rem] shadow-soft space-y-4">
          <h3 className="text-2xl font-serif font-bold text-[#2C2C24]">
            Have a custom agency deployment or sensor integration question?
          </h3>
          <p className="text-sm text-[#78786C] max-w-md mx-auto leading-relaxed">
            Our engineering team supports state disaster authority telemetry and regional digital elevation model ingestion.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#5D7052] text-[#F3F4F1] font-bold text-sm rounded-full hover:bg-[#4C5D42] hover:scale-105 active:scale-95 transition-all shadow-soft"
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
