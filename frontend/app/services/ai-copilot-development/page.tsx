import { InnerServiceHero } from "../../../components/services/InnerServiceHero";
import { CopilotSolutionsGrid } from "../../../components/services/CopilotSolutionsGrid";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";

export const metadata = {
  title: "Custom AI Copilot Development",
  description:
    "Build AI copilots for sales, support, research, and operations with Zobique Labs's custom AI assistant development services.",
  alternates: {
    canonical: "/services/ai-copilot-development",
  },
  openGraph: {
    images: [
      {
        url: "/services/featured/customer_support_agent_v3.png",
        width: 1200,
        height: 1200,
        alt: "AI copilot development service preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/services/featured/customer_support_agent_v3.png"],
  },
};

export default function AICopilotDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <InnerServiceHero
        title="AI Copilot Development"
        subtitle="Assistants built for specific teams and business functions."
        description="AI copilots help employees move faster - drafting work, surfacing answers, guiding decisions, and automating repetitive support tasks without removing human control."
      />
      <CopilotSolutionsGrid />
      <SharedBottomSections />
      <FinalCTA />
    </div>
  );
}
