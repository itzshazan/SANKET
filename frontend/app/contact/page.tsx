import { FinalContactCTA } from "@/components/home/FinalContactCTA";
import { EarlyWarning } from "@/components/home/EarlyWarning";

export const metadata = {
  title: "Contact & Demo | SANKET",
  description:
    "Request an institutional demonstration or integrate SANKET's landslide early warning system for your state or regional road network.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#C8EA3B] selection:text-[#1A2614] pt-12">
      <FinalContactCTA />
      <EarlyWarning />
    </div>
  );
}
