import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "AI Workflow Automation",
  description:
    "Build intelligent AI workflow automation systems that connect data, decisions, approvals, and actions across your business operations.",
  alternates: {
    canonical: "/services/ai-workflow-automation",
  },
  openGraph: {
    images: [
      {
        url: "/services/featured/ai_research_assistant_v3.png",
        width: 1200,
        height: 1200,
        alt: "AI workflow automation service preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/services/featured/ai_research_assistant_v3.png"],
  },
};

export default function AIWorkflowAutomationPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="AI Workflow Automation"
        subtitle="Operations that adapt, decide, and act."
        description="AI workflow automation connects your systems, data, and decisions into a business process that can handle exceptions, make recommendations, and complete tasks without constant manual intervention."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">From Static Rules To Intelligent Execution</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Build business flows that work under real-world conditions.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                Traditional automation follows if/then logic. AI workflow automation adds interpretation, classification, summarization, decision-support, and autonomous action when the scenario is clear enough to proceed safely.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Sales pipelines</strong> automatically route deals, draft outreach, and update CRM records.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Operations approvals</strong> classify exceptions and escalate only the issues that need human review.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Customer service flows</strong> match requests to the right response, tool, or team.</p></li>
              </ul>
            </div>
            <div className="lg:h-[500px] h-[280px] sm:h-[360px] bg-background rounded-xl border border-border p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-5 shadow-lg">
                  <div className="grid grid-cols-3 gap-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">
                    <div className="rounded-xl border border-border p-3">Ingest</div>
                    <div className="rounded-xl border border-border p-3 bg-primary/10 text-primary">Reason</div>
                    <div className="rounded-xl border border-border p-3">Act</div>
                  </div>
                  <div className="mt-5 h-32 rounded-xl border border-dashed border-border flex items-center justify-center text-sm text-muted">Stateful workflow orchestration</div>
                </div>
              </div>
            </div>
          </GridItem>
        </Grid>
      </Section>

      <SharedBottomSections />
      <FinalCTA />
    </div>
  );
}
