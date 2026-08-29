import { Section } from "../../components/ui/Section";

export const metadata = {
  title: "Privacy Policy | SANKET",
  description:
    "Read the privacy policy for SANKET and understand how telemetry, geospatial data, and contact information are protected.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Section className="py-20 md:py-32 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[#1A2614] mb-8">
          Privacy & Telemetry Policy
        </h1>
        <div className="prose prose-lg text-[#586650]">
          <p className="mb-6 text-sm font-mono">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <p className="mb-6">
            SANKET (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy of our users, disaster authorities, and field teams. This Privacy Policy explains how telemetry, geospatial reports, and contact information are processed.
          </p>

          <h2 className="text-2xl font-display font-semibold text-[#1A2614] mt-8 mb-4">1. Information & Ground Telemetry We Collect</h2>
          <p className="mb-6">
            We collect environmental feeds, sensor telemetry, and field reports (including geo-tagged coordinates and photographic evidence) submitted by verified personnel. Contact information submitted for demo requests includes name, institutional agency, role, and email.
          </p>

          <h2 className="text-2xl font-display font-semibold text-[#1A2614] mt-8 mb-4">2. How We Use Information</h2>
          <p className="mb-4">Information is utilized exclusively to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Generate real-time landslide susceptibility scores and early warnings;</li>
            <li>Calibrate and train remote sensing computer vision models;</li>
            <li>Dispatch critical emergency notifications via SMS and automated channels;</li>
            <li>Coordinate disaster response and highway management workflows.</li>
          </ul>

          <h2 className="text-2xl font-display font-semibold text-[#1A2614] mt-8 mb-4">3. Data Security & Sovereignty</h2>
          <p className="mb-6">
            We implement industry-standard encryption protocols in transit and at rest, aligning with Indian national data protection standards and institutional security requirements.
          </p>

          <h2 className="text-2xl font-display font-semibold text-[#1A2614] mt-8 mb-4">4. Contact</h2>
          <p className="mb-6">
            If you have questions regarding data governance, please reach out to Shazankhan324@gmail.com.
          </p>
        </div>
      </Section>
    </div>
  );
}
