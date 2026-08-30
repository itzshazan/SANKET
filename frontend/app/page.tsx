import dynamic from "next/dynamic";
import { Hero } from "../components/home/Hero";
import { StatsBar } from "../components/home/StatsBar";
import { BeneficiaryMarquee } from "../components/home/BeneficiaryMarquee";
import { CredibilityCards } from "../components/home/CredibilityCards";
import { RiskProgression } from "../components/home/RiskProgression";
import { KeyProblems } from "../components/home/KeyProblems";
import { SolutionOverview } from "../components/home/SolutionOverview";
import { CapabilitiesCarousel } from "../components/home/CapabilitiesCarousel";
import { AICVDeepDive } from "../components/home/AICVDeepDive";
import { EarlyWarning } from "../components/home/EarlyWarning";
import { FieldReporting } from "../components/home/FieldReporting";
import { WhoBenefits } from "../components/home/WhoBenefits";
import { WhySanket } from "../components/home/WhySanket";
import { TechStackMarquee } from "../components/home/TechStackMarquee";
import { FinalContactCTA } from "../components/home/FinalContactCTA";

export const metadata = {
  title: "SANKET | AI-Powered Landslide Early Warning System",
  description:
    "Predict landslides before they happen. SANKET combines satellite imagery, rainfall feeds, soil moisture, and AI to deliver location-specific early warnings.",
  alternates: {
    canonical: "/",
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SANKET",
  applicationCategory: "EmergencyApplication",
  operatingSystem: "Web, Cloud, GIS",
  description:
    "AI-powered landslide early warning and risk intelligence platform uniting satellite remote sensing, IoT environmental feeds, and computer vision.",
  url: "https://sanket.in",
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#E0E5EC] flex flex-col selection:bg-[#6C63FF] selection:text-white">
        {/* Section 01 · HERO (#213318) */}
        <Hero />

        {/* Section 02 · STATS BAR (#1A2614) */}
        <StatsBar />

        {/* Section 03 · BENEFICIARY MARQUEE (#FFFFFF) */}
        <BeneficiaryMarquee />

        {/* Section 04 · CREDIBILITY / PROOF CARDS (#F8F9F6) */}
        <CredibilityCards />

        {/* Section 05 · PROBLEM — RISK PROGRESSION CAROUSEL (#FFFFFF) */}
        <RiskProgression />

        {/* Section 06 · KEY PROBLEMS GRID (#F8F9F6) */}
        <KeyProblems />

        {/* Section 07 · SOLUTION OVERVIEW — TABBED PROCESS STEPPER (#FFFFFF) */}
        <SolutionOverview />

        {/* Section 08 · CORE CAPABILITIES — HORIZONTAL SCROLL CAROUSEL (#1A2614) */}
        <CapabilitiesCarousel />

        {/* Section 09 · AI + COMPUTER VISION — DEEP DIVE (#FFFFFF) */}
        <AICVDeepDive />

        {/* Section 10 · EARLY WARNING SYSTEM (#F8F9F6) */}
        <EarlyWarning />

        {/* Section 11 · FIELD REPORTING — 4-STEP FLOW (#FFFFFF) */}
        <FieldReporting />

        {/* Section 12 · WHO BENEFITS — 6-CARD GRID (#F8F9F6) */}
        <WhoBenefits />

        {/* Section 13 · WHY SANKET — DIFFERENTIATOR GRID (#213318) */}
        <WhySanket />

        {/* Section 14 · TECH STACK MARQUEE (#F8F9F6) */}
        <TechStackMarquee />

        {/* Section 15 · CONTACT / FINAL CTA (#273C1E) */}
        <FinalContactCTA />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
    </>
  );
}
