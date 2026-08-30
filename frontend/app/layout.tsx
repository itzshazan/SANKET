import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MonitoringPill } from "../components/shared/MonitoringPill";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import { ScrollProgressBar } from "@/components/shared/ScrollReveal";
import "./globals.css";

const AnalyticsConsent = dynamic(
  () => import("@/components/analytics/AnalyticsConsent").then((m) => m.AnalyticsConsent)
);
const WhatsAppButton = dynamic(
  () => import("../components/shared/WhatsAppButton").then((m) => m.WhatsAppButton)
);

const siteUrl = "https://sanket.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SANKET | AI-Powered Landslide Early Warning System",
    template: "%s | SANKET",
  },
  description:
    "Predict landslides before they happen. SANKET combines satellite imagery, rainfall feeds, soil moisture, and AI to deliver location-specific early warnings.",
  applicationName: "SANKET",
  keywords: [
    "SANKET",
    "Landslide Early Warning",
    "Disaster Risk Intelligence",
    "Smart India Hackathon",
    "Satellite Monitoring",
    "Sentinel-2",
    "Computer Vision Hazard Detection",
    "GIS Risk Maps",
    "NDMA Aligned",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SANKET | AI-Powered Landslide Early Warning System",
    description:
      "Predict. Prepare. Protect. SANKET combines remote sensing, IoT environmental feeds, and AI to deliver location-specific landslide warnings.",
    url: siteUrl,
    siteName: "SANKET",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SANKET | AI-Powered Landslide Early Warning System",
    description:
      "Predict. Prepare. Protect. AI-powered landslide early warning and risk intelligence platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Source+Code+Pro:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-black text-[#bbbbbb] antialiased selection:bg-[#e22718] selection:text-white flex flex-col font-sans">
        <SmoothScroll>
          <ScrollProgressBar />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <MonitoringPill />
          <WhatsAppButton />
          <AnalyticsConsent />
        </SmoothScroll>
      </body>
    </html>
  );
}
