"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
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
    <div className="pt-28 sm:pt-36 min-h-screen bg-[#E0E5EC] text-[#3D4852] pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-xs font-mono font-bold text-[#6C63FF] mb-4">
            Platform Intelligence FAQs
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#3D4852] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280]">
            Everything you need to know about SANKET&apos;s physics-based landslide prediction algorithms, sensor pipelines, and alert dissemination networks.
          </p>
        </div>

        {/* Feature Tags */}
        <div className="max-w-3xl mx-auto mb-12 grid gap-3 sm:grid-cols-3">
          {[
            "AI predictive pore modeling",
            "Sentinel-2 & sensor fusion",
            "Multi-channel CAP alert protocol",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] p-3 text-xs font-mono font-bold text-[#3D4852] text-center"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Tactile Neumorphic Accordion List */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className={`rounded-[28px] bg-[#E0E5EC] transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "shadow-[inset_6px_6px_12px_rgba(163,177,198,0.7),inset_-6px_-6px_12px_rgba(255,255,255,0.6)]"
                    : "shadow-[8px_8px_16px_rgba(163,177,198,0.6),-8px_-8px_16px_rgba(255,255,255,0.6)] hover:shadow-[10px_10px_20px_rgba(163,177,198,0.7),-10px_-10px_20px_rgba(255,255,255,0.7)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 shrink-0 ${
                        isOpen
                          ? "bg-[#6C63FF] text-white shadow-[2px_2px_6px_rgba(108,99,255,0.4)]"
                          : "bg-[#E0E5EC] text-[#3D4852] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]"
                      }`}
                    >
                      Q{index + 1}
                    </div>
                    <span className="text-base sm:text-lg font-display font-extrabold text-[#3D4852] group-hover:text-[#6C63FF] transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-xl bg-[#E0E5EC] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6)] rotate-180 text-[#6C63FF]"
                        : "shadow-[3px_3px_6px_rgba(163,177,198,0.6),-3px_-3px_6px_rgba(255,255,255,0.6)] text-[#6B7280]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 sm:px-7 sm:pb-7 animate-in fade-in duration-200">
                    <div className="p-4 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-[#38B2AC] text-white text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        A
                      </span>
                      <p className="text-sm sm:text-base text-[#3D4852] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Pod */}
        <div className="mt-16 text-center p-8 rounded-[32px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] space-y-4">
          <h3 className="text-xl font-display font-extrabold text-[#3D4852]">
            Have a custom agency deployment or sensor integration question?
          </h3>
          <p className="text-sm text-[#6B7280] max-w-md mx-auto">
            Our engineering team supports state disaster authority telemetry and regional digital elevation model ingestion.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#6C63FF] text-white font-display font-bold text-sm shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.6)] hover:bg-[#7B73FF] hover:translate-y-[-1px] transition-all"
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
