import Link from "next/link";
import { Section } from "../../components/ui/Section";
import { WorkHero } from "../../components/work/WorkHero";
import { CaseStudyGrid } from "../../components/work/CaseStudyGrid";
import { FinalCTA } from "../../components/home/FinalCTA";
import { SharedBottomSections } from "../../components/shared/SharedBottomSections";

export const metadata = {
  title: "AI Case Studies & Client Work",
  description:
    "See how Zobique Labs delivers AI product development, agent systems, and enterprise automation for businesses that need measurable impact.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <WorkHero />
      <Section className="border-b border-border bg-background py-8">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-center gap-3 text-sm text-muted">
          <span className="font-medium text-foreground">Case-study focus:</span>
          <Link href="/work/zobique-career-intelligence" className="rounded-full border border-border px-3 py-1.5 hover:border-primary hover:text-primary">
            Zobique
          </Link>
          <Link href="/work/ncs-integration" className="rounded-full border border-border px-3 py-1.5 hover:border-primary hover:text-primary">
            NCS
          </Link>
          <Link href="/work/zobique-flow-eks" className="rounded-full border border-border px-3 py-1.5 hover:border-primary hover:text-primary">
            Knowledge system
          </Link>
          <Link href="/work/content-agent" className="rounded-full border border-border px-3 py-1.5 hover:border-primary hover:text-primary">
            Content operations
          </Link>
        </div>
      </Section>
      <CaseStudyGrid />
      <SharedBottomSections />
      <div className="mt-auto">
        <FinalCTA />
      </div>
    </div>
  );
}
