"use client";

import { Section, SectionHeader } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Carousel, SlideData } from "../ui/carousel";

export function ServiceCategories() {
  const slides: SlideData[] = [
    {
      badge: "AI Applications & Products",
      subHeader: "zobique",
      title: "How modern businesses build custom AI software and intelligent workflow engines tailored to their operations",
      description: "From concept to full-scale AI production products designed around your operating model and proprietary data.",
      button: "View the story",
      href: "/services/ai-application-development",
      src: "/services/ai_app.png",
    },
    {
      badge: "Autonomous Workflows",
      subHeader: "zobique",
      title: "How autonomous AI agents reason, use tools, and execute end-to-end business operations 24/7",
      description: "Multi-agent systems engineered with deterministic guardrails and human-in-the-loop oversight.",
      button: "View the story",
      href: "/services/ai-agent-development",
      src: "/services/agent_dev.png",
    },
    {
      badge: "Team Augmentation",
      subHeader: "zobique",
      title: "How custom AI copilots assist sales, support, and internal operations with real-time intelligence",
      description: "Context-aware assistants trained on your private knowledge base to multiply operational throughput.",
      button: "View the story",
      href: "/services/ai-copilot-development",
      src: "/services/copilot_dev.png",
    },
    {
      badge: "Enterprise AI & Security",
      subHeader: "zobique",
      title: "How enterprise organizations deploy secure private AI systems with strict governance and zero data leakage",
      description: "Secure private architectures, fine-grained access control, and dedicated deployments built for compliance.",
      button: "View the story",
      href: "/services/enterprise-ai",
      src: "/services/enterprise_ai.png",
    },
  ];

  return (
    <section className="border-b border-border bg-background relative overflow-hidden py-14 sm:py-20 lg:py-24 w-full overflow-x-clip">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title="AI Solutions Built Around Business Outcomes"
            subtitle="Production-grade AI architectures tailored to your specific operations, team workflows, and growth targets."
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12"
          />
        </Reveal>

        <Reveal>
          <div className="w-full">
            <Carousel slides={slides} autoPlayInterval={4000} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
