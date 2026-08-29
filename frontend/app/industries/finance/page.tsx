import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "AI for Finance",
  description:
    "Use AI automation and document intelligence for finance teams to reduce operational overhead, improve document handling, and speed decisions.",
  alternates: {
    canonical: "/industries/finance",
  },
};

export default function FinanceAIPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="AI for Finance"
        subtitle="Automate the workflows behind faster financial operations."
        description="Finance teams handle contracts, invoices, approvals, reconciliations, and reporting. AI systems can turn that operational volume into a more efficient, lower-risk workflow."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Finance Operations With Better Intelligence</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Document-heavy processes, faster turnaround, fewer manual errors.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                AI helps finance teams extract data from invoices, validate transactions, identify exceptions, and route approvals with less friction. It improves visibility without requiring a larger operations team to manage a growing workload.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Invoice processing</strong> that reads, validates, and routes transactions automatically.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Contract analysis</strong> for key clauses, obligations, and approval workflows.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Exception handling</strong> that flags unusual items and routes them for review.</p></li>
              </ul>
            </div>
            <div className="lg:h-[500px] h-[280px] sm:h-[360px] bg-background rounded-xl border border-border p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-5 shadow-lg">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-5">Finance Workflow</div>
                  <div className="space-y-4">
                    <div className="rounded-xl border border-border bg-background p-3 text-sm text-foreground">Invoice received</div>
                    <div className="rounded-xl border border-border bg-background p-3 text-sm text-foreground">Data extraction</div>
                    <div className="rounded-xl border border-primary/30 bg-primary/5 p-3 text-sm text-primary font-semibold">Approval-ready output</div>
                  </div>
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
