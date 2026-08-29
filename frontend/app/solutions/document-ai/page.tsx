import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "Document AI Services",
  description:
    "Automate document processing with AI-powered document extraction, classification, and workflow routing for operations-heavy organizations.",
  alternates: {
    canonical: "/solutions/document-ai",
  },
};

export default function DocumentAIPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="Document AI"
        subtitle="Turn paper-heavy workflows into intelligent automated systems."
        description="Document AI helps businesses extract, classify, and act on information from contracts, invoices, PDFs, forms, and operations documents without expensive manual entry."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Extract the Signal from Every File</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">High-volume document workflows, without the manual bottleneck.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                AI-powered document processing reads unstructured files, identifies the important information, routes the task, and pushes the structured result into the system of record. This reduces delays, errors, and review effort.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Invoice processing</strong> for faster approvals and shorter payment cycles.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Contract analysis</strong> for clause detection, risk review, and issue flagging.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Forms and intake handling</strong> for faster onboarding and more accurate data capture.</p></li>
              </ul>
            </div>
            <div className="lg:h-[500px] h-[280px] sm:h-[360px] bg-background rounded-xl border border-border p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-5 shadow-lg">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-5">Parsed Output</div>
                  <div className="space-y-3 rounded-xl border border-border p-4 bg-background">
                    <div className="w-3/4 h-2 rounded-full bg-border"></div>
                    <div className="w-full h-2 rounded-full bg-border"></div>
                    <div className="w-2/3 h-2 rounded-full bg-border"></div>
                  </div>
                  <div className="mt-5 flex justify-between text-xs text-muted">
                    <span>Invoice 082</span>
                    <span className="text-primary">Validated</span>
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
