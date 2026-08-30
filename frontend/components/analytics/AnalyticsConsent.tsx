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
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl rounded-[28px] bg-[#E0E5EC] p-5 sm:p-6 shadow-[12px_12px_24px_rgba(163,177,198,0.8),-12px_-12px_24px_rgba(255,255,255,0.9)] text-[#3D4852] font-sans animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] flex items-center justify-center text-[#6C63FF] shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-mono font-bold text-[#3D4852] uppercase tracking-wider">
              Privacy & Telemetry Consent
            </p>
            <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
              SANKET uses essential analytics cookies to optimize GIS tile streaming and portal performance.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-end sm:self-center font-mono text-xs">
          <button
            type="button"
            onClick={() => handleConsent(false)}
            className="px-4 py-2.5 rounded-xl bg-[#E0E5EC] text-[#6B7280] font-medium shadow-[4px_4px_8px_rgba(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.6)] hover:text-[#3D4852] active:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6)] transition-all cursor-pointer"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => handleConsent(true)}
            className="px-5 py-2.5 rounded-xl bg-[#6C63FF] text-white font-bold shadow-[4px_4px_8px_rgba(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.6)] hover:bg-[#7B73FF] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.35)] transition-all cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
