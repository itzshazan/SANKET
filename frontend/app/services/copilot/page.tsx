import { InnerServiceHero } from "../../../components/services/InnerServiceHero";
import { CopilotSolutionsGrid } from "../../../components/services/CopilotSolutionsGrid";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";

export const metadata = {
  title: "AI Copilot Development",
  description:
    "Build custom AI copilots for sales, support, operations, and internal teams with Zobique Labs's AI assistant development services.",
  alternates: {
    canonical: "/services/copilot",
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
        subtitle="Smart assistants for your team."
        description="Unlike agents that work independently, a Copilot works alongside your employees in real time, suggesting, drafting, and assisting at every step. Your team always stays in control and makes the final call."
      />
      <CopilotSolutionsGrid />
      <SharedBottomSections />
      <FinalCTA />
    </div>
  );
}
