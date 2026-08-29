import { AboutHero } from "../../components/about/AboutHero";
import { CorePrinciples } from "../../components/about/CorePrinciples";
import { FinalContactCTA } from "../../components/home/FinalContactCTA";

export const metadata = {
  title: "About SANKET | AI-Powered Landslide Early Warning System",
  description:
    "Learn how SANKET combines satellite remote sensing, IoT environmental feeds, and AI computer vision to predict and mitigate landslide hazards across India.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#C8EA3B] selection:text-[#1A2614]">
      <AboutHero />
      <CorePrinciples />
      <div className="mt-auto">
        <FinalContactCTA />
      </div>
    </div>
  );
}
