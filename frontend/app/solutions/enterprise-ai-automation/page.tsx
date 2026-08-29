import Link from "next/link";
import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "Enterprise AI Automation | AI Workflow Optimization",
  description:
    "Scale enterprise AI automation with operational workflows that reduce manual work, improve visibility, and support higher-value business execution.",
  alternates: {
    canonical: "/solutions/enterprise-ai-automation",
  },
};

export default function EnterpriseAIAutomationPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="Enterprise AI Automation"
        subtitle="Operational AI that keeps the business moving."
        description="Enterprise AI automation turns fragmented team processes into a connected workflow layer - reducing friction, creating visibility, and letting your teams execute at scale without manual bottlenecks."
      />

      <Section className="border-y border-border bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Grid className="gap-12 lg:gap-20">
            <GridItem mdColSpan={12} className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Built for complexity</p>
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">Enterprise workflows are where AI creates the strongest ROI.</h2>
                <p className="mt-5 text-lg text-muted leading-relaxed">
                  When teams are managing approvals, internal knowledge, customer data, or operational triage across multiple tools, AI automation creates leverage by reducing repetitive decisions and improving workflow consistency.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Common automation layers</p>
                <ul className="space-y-4 text-sm text-muted">
                  <li className="rounded-lg border border-border bg-surface p-3">Internal knowledge retrieval and context sharing</li>
                  <li className="rounded-lg border border-border bg-surface p-3">Approval routing, escalation, and task orchestration</li>
                  <li className="rounded-lg border border-border bg-surface p-3">Data extraction and process documentation</li>
                  <li className="rounded-lg border border-border bg-surface p-3">Customer service and operations follow-up</li>
                </ul>
              </div>
            </GridItem>
          </Grid>
        </div>
      </Section>

      <Section className="py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-4">Business leverage</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Operational clarity with less friction across teams</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Lower admin overhead", value: "Automated triage" },
              { label: "Smarter handoffs", value: "Workflow orchestration" },
              { label: "Faster operations", value: "Context-aware execution" },
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-4">The opportunity</p>
          <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-5">AI is most valuable when it makes teams more capable, not just more automated.</h3>
          <p className="text-lg text-muted leading-relaxed mb-6">
            The goal is not to add AI everywhere. It is to identify the few critical workflows where better decision support, processing speed, and operational visibility create measurable business impact.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact?service=Enterprise%20AI%20Automation" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white">
              Discuss your automation roadmap
            </Link>
            <Link href="/services/enterprise-ai" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground">
              Explore enterprise AI services
            </Link>
          </div>
        </div>
      </Section>

      <SharedBottomSections />
      <FinalCTA />
    </div>
  );
}
