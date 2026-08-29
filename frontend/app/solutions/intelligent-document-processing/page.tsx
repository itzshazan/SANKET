import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "Intelligent Document Processing",
  description:
    "Deploy intelligent document processing systems that capture, validate, and route critical business information from invoices, contracts, and forms.",
  alternates: {
    canonical: "/solutions/intelligent-document-processing",
  },
};

export default function IntelligentDocumentProcessingPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="Intelligent Document Processing"
        subtitle="Automate the processing of high-volume business documents."
        description="Intelligent document processing goes beyond OCR. It classifies documents, extracts business-critical data, validates patterns, and routes the result into your workflows."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">A Document Workflow Built For Precision</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Capture, validate, approve, and route.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                The strongest document processing systems do more than extract text. They understand context, detect anomalies, apply business rules, and send exceptions to the right person for review.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Classification</strong> identifies the type of document and route.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Extraction</strong> captures amounts, identifiers, dates, names, and policy details.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Validation</strong> matches transactions with ERP, CRM, or accounting systems.</p></li>
              </ul>
            </div>
            <div className="lg:h-[500px] h-[280px] sm:h-[360px] bg-background rounded-xl border border-border p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-5 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Document</span>
                    <span className="text-xs text-primary">AI Review</span>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full rounded-xl border border-border p-3"><div className="w-2/3 h-2 bg-border rounded-full"></div></div>
                    <div className="w-full rounded-xl border border-border p-3"><div className="w-full h-2 bg-border rounded-full"></div></div>
                    <div className="w-full rounded-xl border border-border p-3"><div className="w-1/2 h-2 bg-border rounded-full"></div></div>
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
