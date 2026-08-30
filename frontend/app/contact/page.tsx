import { FinalContactCTA } from "@/components/home/FinalContactCTA";
import { EarlyWarning } from "@/components/home/EarlyWarning";

export const metadata = {
  title: "Contact & Sandbox Access | SANKET",
  description:
    "Request an institutional demonstration or integrate SANKET's landslide early warning system for your state or regional road network.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#E0E5EC] flex flex-col selection:bg-[#6C63FF] selection:text-white pt-12">
      <FinalContactCTA />
      <EarlyWarning />
    </div>
  );
}
