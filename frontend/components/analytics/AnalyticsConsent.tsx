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
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl bg-[#1a1a1a] p-5 border border-[#3c3c3c] shadow-2xl text-white font-sans animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 bg-[#0d0d0d] border border-[#3c3c3c] flex items-center justify-center shrink-0 text-white">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Privacy & Telemetry Consent
            </p>
            <p className="text-xs text-[#bbbbbb] font-light mt-1 leading-relaxed">
              SANKET uses analytics cookies to optimize GIS tile streaming and portal performance.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center font-mono text-xs">
          <button
            type="button"
            onClick={() => handleConsent(false)}
            className="px-4 py-2 border border-[#3c3c3c] text-[#bbbbbb] hover:text-white hover:bg-[#262626] transition-all cursor-pointer uppercase tracking-wider rounded-none"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => handleConsent(true)}
            className="px-5 py-2 bg-white text-black font-bold uppercase tracking-[1.5px] hover:bg-[#e6e6e6] transition-all cursor-pointer rounded-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
