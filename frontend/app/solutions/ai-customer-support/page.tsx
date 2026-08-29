import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "AI Customer Support Automation",
  description:
    "Build AI customer support systems that resolve issues, classify requests, answer FAQs, and escalate complex cases with the right workflow logic.",
  alternates: {
    canonical: "/solutions/ai-customer-support",
  },
};

export default function AICustomerSupportPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="AI Customer Support"
        subtitle="Resolve issues faster without losing the human experience."
        description="AI customer support systems help organizations reduce response times, answer common inquiries, classify issues, and escalate complex tickets to the right agent."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Support Workflows That Scale</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Resolve, classify, and escalate with context.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                Modern support systems do more than answer FAQs. They route issues intelligently, fetch account data, summarize the conversation, and create a smoother path from request to resolution.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Ticket classification</strong> based on issue type, urgency, and customer status.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Knowledge retrieval</strong> that surfaces the right answer from internal documentation.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Human escalation</strong> only when a situation needs judgment or exception handling.</p></li>
              </ul>
            </div>
            <div className="lg:h-[500px] h-[280px] sm:h-[360px] bg-background rounded-xl border border-border p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-5 shadow-lg">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-5">Support Queue</div>
                  <div className="space-y-3">
                    <div className="flex justify-between rounded-xl border border-border p-3"><span className="text-sm text-foreground">Billing issue</span><span className="text-xs text-primary">Resolved</span></div>
                    <div className="flex justify-between rounded-xl border border-border p-3"><span className="text-sm text-foreground">Refund request</span><span className="text-xs text-primary">Escalated</span></div>
                    <div className="flex justify-between rounded-xl border border-border p-3"><span className="text-sm text-foreground">Password reset</span><span className="text-xs text-primary">Auto-solved</span></div>
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
