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
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl rounded-2xl border border-[#37502B] bg-[#1A2614]/95 p-4 shadow-2xl backdrop-blur-xl text-white">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#C8EA3B] shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-mono font-bold text-white uppercase tracking-wider">Privacy & Telemetry Consent</p>
            <p className="text-xs text-[#C5D7BD] mt-0.5 leading-relaxed">
              SANKET uses analytics cookies to optimize GIS tile streaming and portal performance.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center font-mono text-xs">
          <button
            type="button"
            onClick={() => handleConsent(false)}
            className="rounded-lg border border-[#37502B] px-3.5 py-2 text-[#C5D7BD] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => handleConsent(true)}
            className="rounded-lg bg-[#C8EA3B] px-4 py-2 font-bold text-[#1A2614] hover:bg-[#E4F76E] shadow-sm transition-colors cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
