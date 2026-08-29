import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "AI Consulting Services",
  description:
    "Get AI strategy, opportunity mapping, architecture, and implementation support from Zobique Labs's practical AI consulting team.",
  alternates: {
    canonical: "/services/ai-consulting",
  },
  openGraph: {
    images: [
      {
        url: "/services/featured/fractional_CTO.jpg",
        width: 1200,
        height: 1200,
        alt: "AI consulting service preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/services/featured/fractional_CTO.jpg"],
  },
};

export default function AIConsultingPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="AI Consulting"
        subtitle="Strategy that leads to real implementation."
        description="The best AI strategy is not a deck. It is a clear roadmap to business value, technical feasibility, and production deployment."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">AI Advice That Maps to Business Value</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Consult → Design → Build → Deploy → Optimize.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                We help organizations identify the highest-value AI opportunities, define the right architecture, and turn the strategy into a practical implementation plan that your teams can actually execute.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">AI opportunity mapping</strong> to identify the workflows with the strongest ROI.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Architecture planning</strong> for integrations, security, knowledge access, and deployment.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Implementation roadmaps</strong> that reduce risk and create a clear path to value.</p></li>
              </ul>
            </div>
            <div className="lg:h-[500px] h-[280px] sm:h-[360px] bg-background rounded-xl border border-border p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-full max-w-lg flex flex-col gap-4">
                  <div className="flex justify-between items-center rounded-xl border border-border bg-surface p-4"><span className="text-sm font-semibold text-foreground">Opportunity Scan</span><span className="text-xs text-primary">High ROI</span></div>
                  <div className="flex justify-between items-center rounded-xl border border-border bg-surface p-4"><span className="text-sm font-semibold text-foreground">Architecture Design</span><span className="text-xs text-primary">Ready</span></div>
                  <div className="flex justify-between items-center rounded-xl border border-border bg-surface p-4"><span className="text-sm font-semibold text-foreground">Prototype Sprint</span><span className="text-xs text-primary">Validate</span></div>
                  <div className="flex justify-between items-center rounded-xl border border-border bg-surface p-4"><span className="text-sm font-semibold text-foreground">Production Launch</span><span className="text-xs text-primary">Deploy</span></div>
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
