import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "AI Sales Agent",
  description:
    "Build an AI sales agent that qualifies leads, follows up, updates CRM data, and supports outbound revenue workflows for your business.",
  alternates: {
    canonical: "/solutions/ai-sales-agent",
  },
};

export default function AISalesAgentPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="AI Sales Agent"
        subtitle="Turn sales operations into a revenue engine."
        description="An AI sales agent can qualify leads, enrich prospect data, schedule follow-ups, and keep your pipeline moving without depending on manual SDR work for every step."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Sales Workflows That Keep Moving</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">From inbound inquiry to booked meeting.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                AI sales agents can handle a large share of prospect qualification and pipeline hygiene, keeping your sales team focused on the highest-value conversations rather than repetitive admin work.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Lead qualification</strong> by budget, use case, urgency, and fit.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">CRM updates</strong> with notes, scoring, and routing logic.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Email and follow-up</strong> built around your sales process and messaging.</p></li>
              </ul>
            </div>
            <div className="lg:h-[450px] h-[260px] sm:h-[320px] bg-background rounded-xl border border-border p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-5 shadow-lg">
                  <div className="flex items-center justify-between mb-5"><span className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Pipeline</span><span className="text-xs text-primary">Live</span></div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border border-border p-3"><span className="text-sm text-foreground">New lead</span><span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Qualified</span></div>
                    <div className="flex items-center justify-between rounded-lg border border-border p-3"><span className="text-sm text-foreground">Demo booked</span><span className="text-xs px-2 py-1 rounded-full bg-[#10A37F]/10 text-[#10A37F]">Booked</span></div>
                    <div className="flex items-center justify-between rounded-lg border border-border p-3"><span className="text-sm text-foreground">Proposal</span><span className="text-xs px-2 py-1 rounded-full bg-[#1A73E8]/10 text-[#1A73E8]">Sent</span></div>
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
