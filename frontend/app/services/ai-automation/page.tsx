import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "AI Automation Services",
  description:
    "Automate repetitive business workflows with AI-powered automation, process orchestration, and workflow intelligence from Zobique Labs.",
  alternates: {
    canonical: "/services/ai-automation",
  },
  openGraph: {
    images: [
      {
        url: "/services/featured/document_ai.png",
        width: 1200,
        height: 1200,
        alt: "AI automation service preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/services/featured/document_ai.png"],
  },
};

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="AI Automation"
        subtitle="Turn repetitive operations into intelligent systems."
        description="We build AI automation that handles the boring work, learns from exceptions, and routes the right decisions to the right people without slowing your team down."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Automate the Work That Slows Teams Down</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">From intake to action, without manual handoffs.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                AI automation is not just a faster form of workflow automation. It is a system that can read context, interpret documents, classify requests, and trigger the right business action at the right time.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Lead follow-up</strong> automatically routes qualified prospects into CRM and sales workflows.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Document triage</strong> reads incoming files and classifies them for accounting, operations, or compliance.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Internal operations</strong> reduces repetitive admin tasks across HR, support, and finance.</p></li>
              </ul>
            </div>
            <div className="lg:h-[500px] h-[280px] sm:h-[360px] bg-background rounded-xl border border-border p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-5 shadow-lg">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Workflow</span>
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold">AI</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-primary"></div><div className="h-2 flex-1 rounded-full bg-border"></div></div>
                    <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-[#10A37F]"></div><div className="h-2 w-2/3 rounded-full bg-border"></div></div>
                    <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-[#1A73E8]"></div><div className="h-2 w-1/2 rounded-full bg-border"></div></div>
                    <div className="border-t border-border pt-4 mt-4">
                      <div className="flex items-center justify-between text-xs text-muted"><span>Queue</span><span>Resolved</span></div>
                    </div>
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
