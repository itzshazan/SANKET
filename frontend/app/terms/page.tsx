import { Section } from "../../components/ui/Section";

export const metadata = {
  title: "Terms of Service | SANKET",
  description:
    "Review the terms of service and usage guidelines for SANKET's landslide risk intelligence platform.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Section className="py-20 md:py-32 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[#1A2614] mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-lg text-[#586650]">
          <p className="mb-6 text-sm font-mono">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <p className="mb-6">
            Welcome to SANKET. By accessing the platform, GIS layers, or early warning broadcast feeds, you agree to these Terms of Service.
          </p>

          <h2 className="text-2xl font-display font-semibold text-[#1A2614] mt-8 mb-4">1. Use of Warning Services</h2>
          <p className="mb-6">
            SANKET provides algorithmic probability estimates, sensor telemetry, and satellite segmentation to assist disaster management authorities, road agencies, and emergency teams. Outputs are designed for situational awareness and emergency decision support.
          </p>

          <h2 className="text-2xl font-display font-semibold text-[#1A2614] mt-8 mb-4">2. Intellectual Property</h2>
          <p className="mb-6">
            The platform architecture, AI pipeline models, and visual design are protected intellectual property developed for the Smart India Hackathon.
          </p>

          <h2 className="text-2xl font-display font-semibold text-[#1A2614] mt-8 mb-4">3. Contact</h2>
          <p className="mb-6">
            For operational agreements or institutional partnerships, please contact Shazankhan324@gmail.com.
          </p>
        </div>
      </Section>
    </div>
  );
}
