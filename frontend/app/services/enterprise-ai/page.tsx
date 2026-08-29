import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "Enterprise AI Solutions",
  description:
    "Deploy secure enterprise AI systems, private knowledge access, and AI automation for business operations with Zobique Labs.",
  alternates: {
    canonical: "/services/enterprise-ai",
  },
  openGraph: {
    images: [
      {
        url: "/services/featured/document_ai.png",
        width: 1200,
        height: 1200,
        alt: "Enterprise AI solutions service preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/services/featured/document_ai.png"],
  },
};

export default function EnterpriseAISolutionsPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="Enterprise AI Solutions"
        subtitle="Secure AI systems that operate inside real business workflows."
        description="We help organizations deploy private AI systems, automate high-value operations, and connect enterprise knowledge securely into the decisions and work their teams already do every day."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Enterprise Knowledge & Search</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Private, permission-aware AI access to the knowledge your teams already rely on.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                We connect your documents, policies, contracts, and internal knowledge sources into a secure AI system that retrieves and answers using your business context - without exposing sensitive data to uncontrolled environments.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Document AI</strong> for structured extraction and review workflows.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Knowledge assistants</strong> for employees and operations teams needing instant answers.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Private RAG</strong> for secure knowledge retrieval with governance and audit controls.</p></li>
              </ul>
            </div>
            <div className="lg:h-[600px] h-[300px] sm:h-[400px] bg-background rounded-xl border border-border flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group">
              <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border-transparent rounded-lg bg-transparent flex flex-col items-center justify-center relative p-8">
                <div className="absolute inset-0 pointer-events-none opacity-[0.1]" style={{ backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  <g stroke="currentColor" strokeWidth="1.5" fill="none" className="opacity-20">
                    <path d="M 30% 25% C 30% 40%, 50% 40%, 50% 50%" strokeDasharray="4 4" />
                    <path d="M 50% 25% C 50% 40%, 50% 40%, 50% 50%" strokeDasharray="4 4" />
                    <path d="M 70% 25% C 70% 40%, 50% 40%, 50% 50%" strokeDasharray="4 4" />
                    <path d="M 50% 50% L 50% 75%" strokeDasharray="4 4" />
                  </g>
                </svg>
                <div className="flex gap-4 md:gap-8 w-full justify-center relative z-10 top-[-20px]">
                  <div className="w-14 h-20 md:w-16 md:h-24 bg-surface border border-border rounded shadow-lg relative flex flex-col items-center justify-start p-2 gap-1.5 group-hover:-translate-y-2 transition-transform duration-500"><div className="w-full h-1.5 bg-primary/20 rounded-full mb-1"></div><div className="w-3/4 h-1.5 bg-border rounded-full self-start"></div><div className="w-full h-1.5 bg-border rounded-full"></div><div className="w-1/2 h-1.5 bg-border rounded-full self-start"></div><div className="absolute -bottom-2 -right-2 bg-background border border-border rounded text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 text-muted shadow-sm">PDF</div></div>
                  <div className="w-14 h-20 md:w-16 md:h-24 bg-surface border border-border rounded shadow-lg relative flex flex-col items-center justify-start p-2 gap-1.5 group-hover:-translate-y-4 transition-transform duration-500"><div className="w-3/4 h-1.5 bg-primary/20 rounded-full mb-1 self-start"></div><div className="w-full h-1.5 bg-border rounded-full"></div><div className="w-5/6 h-1.5 bg-border rounded-full"></div><div className="w-1/2 h-1.5 bg-border rounded-full self-start"></div><div className="absolute -bottom-2 -right-2 bg-background border border-border rounded text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 text-muted shadow-sm">DOC</div></div>
                  <div className="w-14 h-20 md:w-16 md:h-24 bg-surface border border-border rounded shadow-lg relative flex flex-col items-center justify-start p-2 gap-1.5 group-hover:-translate-y-2 transition-transform duration-500"><div className="w-full h-1.5 bg-primary/20 rounded-full mb-1"></div><div className="w-full h-1.5 bg-border rounded-full"></div><div className="w-2/3 h-1.5 bg-border rounded-full self-start"></div><div className="absolute -bottom-2 -right-2 bg-background border border-border rounded text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 text-muted shadow-sm">CSV</div></div>
                </div>
                <div className="relative z-10 flex flex-col items-center my-6 md:my-8"><div className="w-40 md:w-48 h-12 md:h-14 bg-surface border border-primary/30 rounded-xl flex items-center justify-center text-sm font-bold text-primary shadow-[0_0_20px_rgba(242,101,34,0.15)] relative overflow-hidden">Vector Embeddings</div></div>
                <div className="w-64 md:w-72 bg-surface border border-border rounded-xl p-4 flex flex-col gap-3 relative z-10 shadow-lg group-hover:border-primary/30 transition-colors"><div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0"><div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div></div><div className="w-3/4 h-2 bg-border rounded-full"></div></div><div className="w-full h-2 bg-border rounded-full"></div><div className="w-5/6 h-2 bg-border rounded-full"></div><div className="w-full h-16 bg-background rounded-lg border border-border mt-2 flex flex-col p-3 relative overflow-hidden gap-2"><div className="w-4/5 h-2 bg-primary/40 rounded-full"></div><div className="w-full h-2 bg-primary/20 rounded-full"></div><div className="w-2/3 h-2 bg-primary/20 rounded-full"></div></div></div>
              </div>
            </div>
          </GridItem>
        </Grid>
      </Section>

      <Section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-4">Business outcomes</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Reduce operational drag with AI built around your business context
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { value: "Private knowledge access", label: "connect internal systems without exposing company data" },
              { value: "Workflow automation", label: "route repetitive work into structured AI-driven execution" },
              { value: "Operational visibility", label: "monitor decisions, exceptions, and business impact in production" },
            ].map((item) => (
              <div key={item.value} className="rounded-xl border border-border bg-surface p-6 text-center shadow-sm">
                <div className="text-xl font-bold text-foreground mb-2">{item.value}</div>
                <p className="text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <SharedBottomSections />
      <FinalCTA />
    </div>
  );
}
