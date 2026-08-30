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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: "SANKET",
  url: siteUrl,
  description:
    "AI-powered landslide early warning and risk intelligence platform designed for disaster management authorities and communities.",
  areaServed: "India",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "disaster response",
    email: "Shazankhan324@gmail.com",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col font-sans text-[#3D4852] bg-[#E0E5EC] selection:bg-[#6C63FF] selection:text-white" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ScrollProgressBar />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <MonitoringPill />
          <AnalyticsConsent />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
