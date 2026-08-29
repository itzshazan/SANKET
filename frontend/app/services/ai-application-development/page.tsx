import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "AI Application Development Company",
  description:
    "Build custom AI applications for your business with Zobique Labs's AI product development and automation services.",
  alternates: {
    canonical: "/services/ai-application-development",
  },
  openGraph: {
    images: [
      {
        url: "/services/featured/AI_tutor.jpg",
        width: 1200,
        height: 1200,
        alt: "AI application development service preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/services/featured/AI_tutor.jpg"],
  },
};

export default function AIApplicationDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="AI Application Development"
        subtitle="Custom AI products built around your exact use case."
        description="We design and build AI-powered applications that solve real business problems - from internal productivity tools to end-user products that scale with your company."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">AI Applications That Fit Your Workflow</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Built for the work you already do, not generic templates.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                Off-the-shelf software rarely fits the way your business actually operates. We build custom AI applications around your process, your data, and your business goals.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">AI tutor</strong> systems for personalized learning and coaching.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Research assistants</strong> that summarize large volumes of information.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Knowledge tools</strong> for faster answers across internal documents and business data.</p></li>
              </ul>
            </div>
            <div className="lg:h-[600px] h-[300px] sm:h-[400px] bg-background rounded-xl border border-border flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group">
              <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border border-border/50 rounded-lg bg-surface/50 backdrop-blur-sm flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl mx-auto mb-4 flex items-center justify-center border border-primary/30"><span className="w-8 h-8 bg-primary rounded-lg block animate-pulse"></span></div>
                  <p className="text-foreground font-semibold">Custom App Logic</p>
                </div>
              </div>
            </div>
          </GridItem>

          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="lg:h-[400px] h-[250px] sm:h-[300px] bg-background rounded-xl border border-border flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group order-2 lg:order-1">
              <div className="absolute w-64 h-64 bg-[#10A37F]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border border-border/50 rounded-lg bg-surface/50 backdrop-blur-sm flex items-center justify-center relative flex-col gap-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-surface border border-border rounded-lg flex items-center justify-center font-mono text-xs text-muted shadow-sm">Data</div>
                  <div className="w-12 h-12 bg-surface border border-border rounded-lg flex items-center justify-center font-mono text-xs text-muted shadow-sm">Docs</div>
                  <div className="w-12 h-12 bg-surface border border-border rounded-lg flex items-center justify-center font-mono text-xs text-muted shadow-sm">APIs</div>
                </div>
                <div className="w-8 h-8 flex flex-col justify-center items-center gap-1 opacity-50">
                  <span className="w-1 h-1 bg-foreground rounded-full block animate-bounce"></span>
                  <span className="w-1 h-1 bg-foreground rounded-full block animate-bounce" style={{ animationDelay: '100ms' }}></span>
                  <span className="w-1 h-1 bg-foreground rounded-full block animate-bounce" style={{ animationDelay: '200ms' }}></span>
                </div>
                <div className="px-6 py-3 bg-primary/10 border border-primary/30 text-primary rounded-lg font-semibold shadow-sm">Trained Model</div>
              </div>
            </div>
            <div className="order-1 lg:order-2 min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Model Integration & Fine-Tuning</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Teach AI your domain, your terminology, and your logic.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We combine frontier models with your proprietary data, business rules, and workflows so the system understands context and behaves like it is part of your team.
              </p>
            </div>
          </GridItem>
        </Grid>
      </Section>

      <SharedBottomSections />
      <FinalCTA />
    </div>
  );
}
