import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "AI Voice Agent Development",
  description:
    "Deploy AI voice agents for inbound calls, outbound outreach, appointment booking, qualification, and workflow execution without a human on every call.",
  alternates: {
    canonical: "/solutions/ai-voice-agent",
  },
};

export default function AIVoiceAgentPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="AI Voice Agent"
        subtitle="Handle real business conversations, not just scripted scripts."
        description="AI voice agents can answer incoming calls, qualify prospects, book appointments, answer FAQs, and hand off to a human when the conversation needs judgment."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Conversational AI With Business Context</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Real conversations. Real workflows. Real results.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                Voice AI is valuable when it is connected to your business process. It can answer questions, create bookings, update systems, and route details to the right team without creating more work for human agents.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Inbound call handling</strong> for FAQs, triage, and qualification.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Outbound calls</strong> for reminders, follow-ups, and lead nurture.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">CRM updates</strong> and note creation after each conversation.</p></li>
              </ul>
            </div>
            <div className="lg:h-[500px] h-[280px] sm:h-[360px] bg-background rounded-xl border border-border p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-5 shadow-lg">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Call</span>
                    <span className="text-xs text-primary">Live</span>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-xl border border-border p-3 text-sm text-muted">Customer: “Can you confirm my appointment?”</div>
                    <div className="rounded-xl border border-primary/30 bg-primary/5 p-3 text-sm text-foreground font-medium">AI: “Yes, I can confirm that for you and update your record.”</div>
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
