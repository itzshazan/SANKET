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
    <div className="min-h-screen bg-[#E0E5EC] flex flex-col selection:bg-[#6C63FF] selection:text-white">
      <AboutHero />
      <CorePrinciples />
      <div className="mt-auto">
        <FinalContactCTA />
      </div>
    </div>
  );
}
