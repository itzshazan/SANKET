import Link from "next/link";
import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "AI Agent Growth System | Revenue-Focused AI Automation",
  description:
    "Deploy an AI agent growth system that qualifies leads, manages outbound follow-up, and converts inbound demand into pipeline with measurable revenue impact.",
  alternates: {
    canonical: "/solutions/ai-agent-growth",
  },
};

export default function AIAgentGrowthPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="AI Agent Growth System"
        subtitle="Revenue operations powered by AI agents."
        description="An AI agent growth system turns inbound interest, lead routing, and follow-up coordination into an always-on revenue machine - without adding operational drag to your sales team."
      />

      <Section className="border-y border-border bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Grid className="gap-12 lg:gap-20">
            <GridItem mdColSpan={12} className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">What it does</p>
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">Build pipeline while your team stays focused on closing.</h2>
                <p className="mt-5 text-lg text-muted leading-relaxed">
                  This system qualifies prospects, captures buying intent, enriches contact data, and keeps the pipeline moving with highly structured follow-up logic. It’s designed specifically to turn interest into pipeline velocity.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Core workflow</p>
                <ul className="space-y-4 text-sm text-muted">
                  <li className="rounded-lg border border-border bg-surface p-3"><strong className="text-foreground">1.</strong> Capture inbound request and route by intent</li>
                  <li className="rounded-lg border border-border bg-surface p-3"><strong className="text-foreground">2.</strong> Qualify budget, urgency, and business fit</li>
                  <li className="rounded-lg border border-border bg-surface p-3"><strong className="text-foreground">3.</strong> Enrich and sync CRM records automatically</li>
                  <li className="rounded-lg border border-border bg-surface p-3"><strong className="text-foreground">4.</strong> Trigger outreach and meeting booking workflows</li>
                </ul>
              </div>
            </GridItem>
          </Grid>
        </div>
      </Section>

      <Section className="py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-4">Revenue impact</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">A growth engine for teams that need faster conversion</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Faster response time", value: "Instant qualification" },
              { label: "Higher pipeline quality", value: "Intent-based routing" },
              { label: "Lower manual admin", value: "CRM + outreach automation" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-surface p-6 text-center shadow-sm">
                <div className="text-lg font-bold text-foreground mb-2">{item.value}</div>
                <p className="text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-background py-20">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-surface p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-4">Why it matters</p>
          <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-5">Most bottlenecks are not in demand generation; they are in follow-through.</h3>
          <p className="text-lg text-muted leading-relaxed mb-6">
            The best AI sales systems do not replace salespeople. They remove the repetitive admin and lead handling that slows down the sales motion, so your team can spend more time on conversations that matter.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact?service=AI%20Agent%20Growth%20System" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white">
              Book a revenue systems consult
            </Link>
            <Link href="/services/ai-agent-development" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground">
              Explore agent development
            </Link>
          </div>
        </div>
      </Section>

      <SharedBottomSections />
      <FinalCTA />
    </div>
  );
}
