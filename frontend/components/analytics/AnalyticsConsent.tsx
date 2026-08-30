"use client";

import { useEffect, useState } from "react";
import { setAnalyticsConsent, getStoredConsent, initAnalyticsState } from "@/lib/analytics";
import { ShieldCheck } from "lucide-react";

export function AnalyticsConsent() {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);

  useEffect(() => {
    const stored = getStoredConsent();
    setConsent(stored);
    initAnalyticsState();
  }, []);

  if (consent !== null) return null;

  const handleConsent = (granted: boolean) => {
    setAnalyticsConsent(granted);
    setConsent(granted ? "granted" : "denied");
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl bg-[#FEFEFA] p-5 rounded-[2rem] border border-[#DED8CF] shadow-[0_20px_40px_-10px_rgba(93,112,82,0.2)] text-[#2C2C24] font-sans animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[#5D7052]/10 flex items-center justify-center shrink-0 text-[#5D7052]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-bold font-serif text-[#2C2C24]">
              Privacy & Telemetry Consent
            </p>
            <p className="text-xs text-[#78786C] mt-1 leading-relaxed">
              SANKET uses analytics cookies to optimize GIS tile streaming and portal performance.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center font-sans text-xs">
          <button
            type="button"
            onClick={() => handleConsent(false)}
            className="px-5 py-2.5 rounded-full border border-[#DED8CF] text-[#78786C] hover:text-[#2C2C24] hover:bg-[#F0EBE5] transition-all cursor-pointer font-bold"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => handleConsent(true)}
            className="px-6 py-2.5 rounded-full bg-[#5D7052] text-[#F3F4F1] font-bold hover:bg-[#4C5D42] hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-soft"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
