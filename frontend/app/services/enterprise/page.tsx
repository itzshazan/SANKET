import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "Enterprise AI Solutions",
  description:
    "Deploy secure enterprise AI systems, knowledge search, automation, and governance frameworks with Zobique Labs's AI transformation services.",
  alternates: {
    canonical: "/services/enterprise",
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
      {/* Hero Section */}
      <InnerServiceHero
        title="Secure AI For Business Systems"
        subtitle="Enterprise-grade deployments, security, and governance."
        description="Scale your operations with advanced AI systems built for security, compliance, and massive data volumes. We build end-to-end solutions tailored to complex enterprise environments."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">

          {/* Enterprise Knowledge & Search */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Enterprise Knowledge & Search</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Unify your company&apos;s proprietary data into a single, instantly searchable system.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                Connects all your company&apos;s documents and data into one AI system that answers questions accurately, using your own information instead of generic internet knowledge.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Document AI</strong> - Automatically reads, classifies, and extracts key data from contracts, policies, and files.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Policy Assistant</strong> - Answers employee questions strictly based on your company handbook.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Knowledge Base Assistant</strong> - Helps support and IT teams instantly find the right troubleshooting guide.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Enterprise Search</strong> - Lets employees find any file across all company tools just by describing what they need.</p>
                </li>
              </ul>
            </div>
            <div className="lg:h-[600px] h-[300px] sm:h-[400px] bg-background rounded-xl border border-border flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group">
              <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border-transparent rounded-lg bg-transparent flex flex-col items-center justify-center relative p-8">
                {/* Dotted Grid Background */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.1]" style={{ backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

                {/* Connecting SVG Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  <g stroke="currentColor" strokeWidth="1.5" fill="none" className="opacity-20">
                    <path d="M 30% 25% C 30% 40%, 50% 40%, 50% 50%" strokeDasharray="4 4" />
                    <path d="M 50% 25% C 50% 40%, 50% 40%, 50% 50%" strokeDasharray="4 4" />
                    <path d="M 70% 25% C 70% 40%, 50% 40%, 50% 50%" strokeDasharray="4 4" />
                    <path d="M 50% 50% L 50% 75%" strokeDasharray="4 4" />
                  </g>
                </svg>

                {/* Top: Documents */}
                <div className="flex gap-4 md:gap-8 w-full justify-center relative z-10 top-[-20px]">
                  {/* Doc 1 */}
                  <div className="w-14 h-20 md:w-16 md:h-24 bg-surface border border-border rounded shadow-lg relative flex flex-col items-center justify-start p-2 gap-1.5 group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-full h-1.5 bg-primary/20 rounded-full mb-1"></div>
                    <div className="w-3/4 h-1.5 bg-border rounded-full self-start"></div>
                    <div className="w-full h-1.5 bg-border rounded-full"></div>
                    <div className="absolute -bottom-2 -right-2 bg-background border border-border rounded text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 text-muted shadow-sm">PDF</div>
                  </div>
                  {/* Doc 2 */}
                  <div className="w-14 h-20 md:w-16 md:h-24 bg-surface border border-border rounded shadow-lg relative flex flex-col items-center justify-start p-2 gap-1.5 group-hover:-translate-y-4 transition-transform duration-500">
                    <div className="w-3/4 h-1.5 bg-primary/20 rounded-full mb-1 self-start"></div>
                    <div className="w-full h-1.5 bg-border rounded-full"></div>
                    <div className="w-5/6 h-1.5 bg-border rounded-full"></div>
                    <div className="w-1/2 h-1.5 bg-border rounded-full self-start"></div>
                    <div className="absolute -bottom-2 -right-2 bg-background border border-border rounded text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 text-muted shadow-sm">DOC</div>
                  </div>
                  {/* Doc 3 */}
                  <div className="w-14 h-20 md:w-16 md:h-24 bg-surface border border-border rounded shadow-lg relative flex flex-col items-center justify-start p-2 gap-1.5 group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-full h-1.5 bg-primary/20 rounded-full mb-1"></div>
                    <div className="w-full h-1.5 bg-border rounded-full"></div>
                    <div className="w-2/3 h-1.5 bg-border rounded-full self-start"></div>
                    <div className="absolute -bottom-2 -right-2 bg-background border border-border rounded text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 text-muted shadow-sm">CSV</div>
                  </div>
                </div>

                {/* Middle: Vector DB */}
                <div className="relative z-10 flex flex-col items-center my-6 md:my-8">
                  <div className="w-40 md:w-48 h-12 md:h-14 bg-surface border border-primary/30 rounded-xl flex items-center justify-center text-sm font-bold text-primary shadow-[0_0_20px_rgba(242,101,34,0.15)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                    Vector Embeddings
                  </div>
                </div>

                {/* Bottom: AI Search Output */}
                <div className="w-64 md:w-72 bg-surface border border-border rounded-xl p-4 flex flex-col gap-3 relative z-10 shadow-lg group-hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0"><div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div></div>
                    <div className="w-3/4 h-2 bg-border rounded-full"></div>
                  </div>
                  <div className="w-full h-2 bg-border rounded-full"></div>
                  <div className="w-5/6 h-2 bg-border rounded-full"></div>
                  <div className="w-full h-16 bg-background rounded-lg border border-border mt-2 flex flex-col p-3 relative overflow-hidden gap-2">
                    <div className="w-4/5 h-2 bg-primary/40 rounded-full"></div>
                    <div className="w-full h-2 bg-primary/20 rounded-full"></div>
                    <div className="w-2/3 h-2 bg-primary/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </GridItem>

          {/* Enterprise AI Chatbots & Workflow Automation */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="bg-background rounded-xl border border-border flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden group min-h-[350px] sm:min-h-[400px]">
              <div className="absolute w-64 h-64 bg-[#10A37F]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 right-0 top-0"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Enterprise AI Chatbots</h2>
                <p className="text-base sm:text-lg md:text-xl text-primary mb-4 font-medium">Secure, highly-available conversational AI.</p>
                <p className="text-muted leading-relaxed">
                  Secure, highly-available conversational AI deployments integrated directly into your infrastructure. Built to handle thousands or even millions of conversations at once, whether for customers on your website or employees across your organization, without compromising on security.
                </p>
              </div>
              <div className="w-full h-32 mt-8 bg-transparent border-transparent p-4 flex flex-col gap-4 relative z-10 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: `radial-gradient(circle at 1.5px 1.5px, currentColor 1px, transparent 1px)`, backgroundSize: '16px 16px' }} />

                {/* Connecting Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 border-dashed"></div>

                <div className="bg-surface border border-border rounded-lg p-3 w-[80%] self-start shadow-md flex items-center gap-3 relative z-10 group-hover:-translate-y-1 transition-transform">
                  <div className="w-6 h-6 rounded-full bg-muted/20 shrink-0 border border-border"></div>
                  <div className="w-full h-2 bg-border rounded-full"></div>
                </div>
                <div className="bg-surface border border-[#10A37F]/30 rounded-lg p-3 w-[80%] self-end shadow-lg shadow-[#10A37F]/5 flex items-center gap-3 relative z-10 group-hover:-translate-y-1 transition-transform">
                  <div className="w-full h-2 bg-[#10A37F]/20 rounded-full"></div>
                  <div className="w-6 h-6 rounded-full bg-[#10A37F]/10 border border-[#10A37F]/30 shrink-0 flex items-center justify-center"><div className="w-2.5 h-2.5 rounded-full bg-[#10A37F] animate-pulse"></div></div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl border border-border flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden group min-h-[350px] sm:min-h-[400px]">
              <div className="absolute w-64 h-64 bg-[#1A73E8]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 left-0 bottom-0"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Enterprise Workflow Automation</h2>
                <p className="text-base sm:text-lg md:text-xl text-primary mb-4 font-medium">End-to-end AI-enhanced automation.</p>
                <p className="text-muted leading-relaxed">
                  End-to-end AI-enhanced automation for complex business operations. Upgrades traditional rule-based automation so it can also handle exceptions and make smart decisions on its own, instead of breaking every time something falls outside the script.
                </p>
              </div>
              <div className="w-full h-32 mt-8 bg-transparent border-transparent p-4 flex items-center justify-between relative z-10 gap-2 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

                <div className="w-14 h-14 bg-surface border border-border rounded shadow-md flex items-center justify-center z-10 group-hover:scale-110 transition-transform relative">
                  <div className="w-5 h-5 rounded-sm border-2 border-muted/50"></div>
                </div>
                <div className="h-0.5 bg-border flex-1 border-dashed relative">
                  <div className="absolute top-1/2 left-0 w-2 h-2 bg-[#1A73E8] rounded-full -translate-y-1/2 animate-[ping_2s_infinite]"></div>
                </div>
                <div className="w-14 h-14 bg-surface border border-[#1A73E8]/40 rounded shadow-lg flex items-center justify-center z-10 shadow-[#1A73E8]/10 group-hover:scale-110 transition-transform relative">
                  <div className="absolute inset-0 bg-[#1A73E8]/5 rounded"></div>
                  <div className="w-6 h-6 rounded-full border-[3px] border-[#1A73E8] border-r-transparent animate-spin"></div>
                </div>
                <div className="h-0.5 bg-border flex-1 border-dashed relative">
                  <div className="absolute top-1/2 left-0 w-2 h-2 bg-green-500 rounded-full -translate-y-1/2 animate-[ping_2s_infinite_500ms]"></div>
                </div>
                <div className="w-14 h-14 bg-surface border border-green-500/40 rounded shadow-lg flex items-center justify-center z-10 shadow-green-500/10 group-hover:scale-110 transition-transform relative">
                  <div className="absolute inset-0 bg-green-500/5 rounded"></div>
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </GridItem>

          {/* Intelligent Document Processing & Predictive Analytics */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="bg-background rounded-xl border border-border flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden group min-h-[350px] sm:min-h-[400px]">
              <div className="absolute w-64 h-64 bg-[#F26522]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 right-0 top-0"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Intelligent Document Processing</h2>
                <p className="text-base sm:text-lg md:text-xl text-primary mb-4 font-medium">Extract, classify, and process high volumes.</p>
                <p className="text-muted leading-relaxed">
                  Extract, classify, and process high volumes of unstructured documents at scale. Built for businesses drowning in paperwork, like insurance or logistics. It digitizes and extracts data from millions of documents automatically, with no manual data entry.
                </p>
              </div>
              <div className="w-full h-32 mt-8 bg-transparent border-transparent p-4 flex items-center justify-center relative z-10 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`, backgroundSize: '16px 16px' }} />

                {/* Connecting lines behind */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  <path d="M 30% 50% L 50% 50%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                  <path d="M 70% 50% L 50% 50%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                </svg>

                <div className="relative w-16 h-24 bg-surface border border-border rounded shadow-md flex flex-col items-center justify-center rotate-[-15deg] group-hover:rotate-[-25deg] transition-transform z-10 group-hover:-translate-x-3">
                  <div className="w-2/3 h-1.5 bg-border rounded-full mb-2"></div>
                  <div className="w-1/2 h-1.5 bg-border rounded-full"></div>
                  <span className="absolute bottom-2 text-[9px] font-bold text-muted">INVOICE</span>
                </div>

                <div className="relative w-20 h-24 bg-surface border border-[#F26522]/30 rounded-lg shadow-xl flex flex-col items-center justify-center z-20 scale-110 shadow-[#F26522]/10 px-3 group-hover:scale-125 transition-transform bg-white/90 backdrop-blur-sm">
                  <div className="w-full flex items-center justify-between mb-1.5"><span className="text-[7px] font-bold text-[#F26522]">name:</span><div className="w-1/2 h-1 bg-[#F26522]/40 rounded-full"></div></div>
                  <div className="w-full flex items-center justify-between mb-1.5"><span className="text-[7px] font-bold text-[#F26522]">total:</span><div className="w-1/3 h-1 bg-[#F26522]/40 rounded-full"></div></div>
                  <div className="w-full flex items-center justify-between"><span className="text-[7px] font-bold text-[#F26522]">date:</span><div className="w-2/3 h-1 bg-[#F26522]/40 rounded-full"></div></div>
                  <span className="absolute -top-2 bg-[#F26522] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full shadow-md shadow-[#F26522]/30">JSON</span>
                </div>

                <div className="relative w-16 h-24 bg-surface border border-border rounded shadow-md flex flex-col items-center justify-center rotate-[15deg] group-hover:rotate-[25deg] transition-transform z-10 group-hover:translate-x-3">
                  <div className="w-3/4 h-1.5 bg-border rounded-full mb-1.5"></div>
                  <div className="w-full h-1.5 bg-border rounded-full mb-1.5"></div>
                  <div className="w-1/2 h-1.5 bg-border rounded-full"></div>
                  <span className="absolute bottom-2 text-[9px] font-bold text-muted">CONTRACT</span>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl border border-border flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden group min-h-[350px] sm:min-h-[400px]">
              <div className="absolute w-64 h-64 bg-[#4D6BFE]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 left-0 bottom-0"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Predictive Analytics & BI</h2>
                <p className="text-base sm:text-lg md:text-xl text-primary mb-4 font-medium">Advanced business forecasting.</p>
                <p className="text-muted leading-relaxed">
                  Advanced business forecasting and real-time decision support systems. Studies your historical business data to forecast what&apos;s coming next, and lets leadership ask plain-English questions like &quot;Why did sales drop last quarter?&quot; and get instant answers and charts.
                </p>
              </div>
              <div className="w-full h-32 mt-8 bg-transparent border-transparent p-6 flex items-end justify-between relative z-10 gap-3 overflow-hidden">
                {/* Horizontal grid lines for chart */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-6">
                  <div className="w-full h-px bg-border/40 border-dashed"></div>
                  <div className="w-full h-px bg-border/40 border-dashed"></div>
                  <div className="w-full h-px bg-border/40 border-dashed"></div>
                </div>

                {/* Trend line SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                  <path d="M 10% 80% L 30% 60% L 50% 70% L 70% 30% L 90% 10%" stroke="#4D6BFE" strokeWidth="2.5" fill="none" className="group-hover:stroke-[4px] transition-all" />
                  <circle cx="90%" cy="10%" r="5" fill="#4D6BFE" className="animate-pulse shadow-[0_0_10px_rgba(77,107,254,0.8)]" />
                </svg>

                <div className="w-full bg-border/60 rounded-t-sm h-[20%] relative z-10 group-hover:h-[25%] transition-all"></div>
                <div className="w-full bg-border/60 rounded-t-sm h-[40%] relative z-10 group-hover:h-[45%] transition-all"></div>
                <div className="w-full bg-border/60 rounded-t-sm h-[30%] relative z-10 group-hover:h-[35%] transition-all"></div>
                <div className="w-full bg-[#4D6BFE]/40 rounded-t-sm h-[70%] relative z-10 border-t border-[#4D6BFE]/60 group-hover:h-[75%] transition-all"></div>
                <div className="w-full bg-[#4D6BFE] rounded-t-sm h-[90%] relative z-10 shadow-[0_0_20px_rgba(77,107,254,0.4)] border-t border-[#4D6BFE] group-hover:h-[95%] transition-all"></div>
              </div>
            </div>
          </GridItem>

          {/* Industry-Specific AI */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 lg:h-[600px] h-[300px] sm:h-[400px] bg-background rounded-xl border border-border flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group">
              <div className="absolute w-64 h-64 bg-[#10A37F]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full rounded-lg bg-transparent flex flex-col items-center justify-center relative p-8 gap-4">
                <div className="absolute inset-0 pointer-events-none opacity-[0.1]" style={{ backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

                {/* Central AI Brain */}
                <div className="relative w-24 h-24 bg-surface border border-border rounded-xl shadow-xl flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-foreground/5 rounded-xl animate-pulse"></div>
                  <svg className="w-10 h-10 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>

                {/* Connecting SVG lines from center to 4 corners */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                  <path d="M 50% 50% L 20% 20%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-20" />
                  <path d="M 50% 50% L 80% 20%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-20" />
                  <path d="M 50% 50% L 20% 80%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-20" />
                  <path d="M 50% 50% L 80% 80%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-20" />
                </svg>

                {/* The 4 industries */}
                <div className="absolute inset-0 w-full h-full pointer-events-none p-6 md:p-12">
                  <div className="relative w-full h-full">
                    {/* Top Left */}
                    <div className="absolute top-0 left-0 w-24 md:w-32 bg-surface border border-border rounded-lg shadow-md p-3 md:p-4 flex flex-col items-center transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform">
                      <div className="w-8 h-8 rounded-full bg-[#10A37F]/10 border border-[#10A37F]/20 flex items-center justify-center mb-2"><div className="w-3 h-3 bg-[#10A37F] rounded-full shadow-[0_0_8px_rgba(16,163,127,0.8)]"></div></div>
                      <span className="text-[10px] md:text-xs font-bold text-foreground">Healthcare</span>
                    </div>
                    {/* Top Right */}
                    <div className="absolute top-0 right-0 w-24 md:w-32 bg-surface border border-border rounded-lg shadow-md p-3 md:p-4 flex flex-col items-center transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                      <div className="w-8 h-8 rounded-full bg-[#1A73E8]/10 border border-[#1A73E8]/20 flex items-center justify-center mb-2"><div className="w-3 h-3 bg-[#1A73E8] rounded-full shadow-[0_0_8px_rgba(26,115,232,0.8)]"></div></div>
                      <span className="text-[10px] md:text-xs font-bold text-foreground">Finance</span>
                    </div>
                    {/* Bottom Left */}
                    <div className="absolute bottom-0 left-0 w-24 md:w-32 bg-surface border border-border rounded-lg shadow-md p-3 md:p-4 flex flex-col items-center transform group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform">
                      <div className="w-8 h-8 rounded-full bg-[#F26522]/10 border border-[#F26522]/20 flex items-center justify-center mb-2"><div className="w-3 h-3 bg-[#F26522] rounded-full shadow-[0_0_8px_rgba(242,101,34,0.8)]"></div></div>
                      <span className="text-[10px] md:text-xs font-bold text-foreground">Retail</span>
                    </div>
                    {/* Bottom Right */}
                    <div className="absolute bottom-0 right-0 w-24 md:w-32 bg-surface border border-border rounded-lg shadow-md p-3 md:p-4 flex flex-col items-center transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform">
                      <div className="w-8 h-8 rounded-full bg-[#4D6BFE]/10 border border-[#4D6BFE]/20 flex items-center justify-center mb-2"><div className="w-3 h-3 bg-[#4D6BFE] rounded-full shadow-[0_0_8px_rgba(77,107,254,0.8)]"></div></div>
                      <span className="text-[10px] md:text-xs font-bold text-foreground">Manufacturing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Industry-Specific AI</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Custom models fine-tuned with domain expertise.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                Custom models fine-tuned with domain expertise and industry compliance standards. Tailored AI packages built around the specific rules, risks, and requirements of your industry.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-[#10A37F]/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10A37F] mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Healthcare (HIPAA-compliant)</strong> - Patient triage, medical imaging analysis, secure health data handling.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-[#1A73E8]/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Financial Services</strong> - Fraud detection, algorithmic trading, automated loan underwriting.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-[#F26522]/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F26522] mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Retail & Logistics</strong> - Inventory optimization, dynamic pricing, personalized recommendations.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-[#4D6BFE]/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4D6BFE] mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Manufacturing</strong> - Supply chain optimization, predictive maintenance for equipment.</p>
                </li>
              </ul>
            </div>
          </GridItem>

          {/* Voice AI & Security */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="bg-background rounded-xl border border-border flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden group min-h-[350px] sm:min-h-[400px]">
              <div className="absolute w-64 h-64 bg-[#1A73E8]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 right-0 top-0"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Voice AI Solutions</h2>
                <p className="text-base sm:text-lg md:text-xl text-primary mb-4 font-medium">Conversational voice agents.</p>
                <p className="text-muted leading-relaxed">
                  Conversational voice agents for automated customer support and outbound call automation. AI that can hold natural, two-way phone conversations, handling support calls, outbound outreach, and real-time transcription without sounding robotic or scripted.
                </p>
              </div>
              <div className="w-full h-32 mt-8 bg-transparent border-transparent p-4 flex items-center justify-center relative z-10 gap-3 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`, backgroundSize: '16px 16px' }} />

                {/* Voice waveform animation */}
                <div className="flex items-center gap-1.5 h-16">
                  <div className="w-2.5 h-6 bg-[#1A73E8]/40 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
                  <div className="w-2.5 h-10 bg-[#1A73E8]/60 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" style={{ animationDelay: '100ms' }}></div>
                  <div className="w-2.5 h-14 bg-[#1A73E8] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] shadow-[0_0_15px_rgba(26,115,232,0.6)] group-hover:scale-y-125 transition-transform" style={{ animationDelay: '200ms' }}></div>
                  <div className="w-2.5 h-8 bg-[#1A73E8]/80 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]" style={{ animationDelay: '300ms' }}></div>
                  <div className="w-2.5 h-4 bg-[#1A73E8]/40 rounded-full animate-[pulse_1.1s_ease-in-out_infinite]" style={{ animationDelay: '400ms' }}></div>
                </div>

                {/* Processing node */}
                <div className="w-14 h-14 bg-surface border border-[#1A73E8]/30 rounded-full flex items-center justify-center ml-6 relative shadow-lg shadow-[#1A73E8]/10 group-hover:scale-110 transition-transform">
                  <div className="absolute inset-0 rounded-full border-2 border-[#1A73E8]/40 animate-ping opacity-30"></div>
                  <svg className="w-6 h-6 text-[#1A73E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl border border-border flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden group min-h-[350px] sm:min-h-[400px]">
              <div className="absolute w-64 h-64 bg-[#10A37F]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 left-0 bottom-0"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">AI Security & Governance</h2>
                <p className="text-base sm:text-lg md:text-xl text-primary mb-4 font-medium">Enterprise-grade protection built in.</p>
                <p className="text-muted leading-relaxed">
                  Strict access controls, audit logging, and defenses against LLM-specific vulnerabilities. Enterprise-grade protection built into every deployment, including role-based access, data encryption, and defenses against AI-specific risks like prompt injection attacks.
                </p>
              </div>
              <div className="w-full h-32 mt-8 bg-transparent border-transparent p-4 flex items-center justify-center relative z-10 gap-8 overflow-hidden">
                {/* Security Grid */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`, backgroundSize: '16px 16px' }} />

                {/* Glowing Shield/Lock Node */}
                <div className="relative w-16 h-16 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <div className="absolute inset-0 border-2 border-dashed border-[#10A37F]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-2 border-2 border-[#10A37F]/50 rounded-full"></div>
                  <div className="absolute inset-0 m-auto w-7 h-9 border-[2.5px] border-[#10A37F] rounded-t-full rounded-b-sm bg-surface flex items-center justify-center shadow-[0_0_20px_rgba(16,163,127,0.4)]">
                    <div className="w-2 h-2.5 bg-[#10A37F] rounded-sm"></div>
                  </div>
                </div>

                {/* Code/Logs scanning */}
                <div className="flex flex-col gap-2 w-full max-w-[140px] relative">
                  {/* Scanner line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#10A37F] shadow-[0_0_10px_rgba(16,163,127,1)] group-hover:translate-y-[40px] transition-transform duration-1000 z-10"></div>
                  <div className="w-full h-2 bg-muted/20 rounded-full"></div>
                  <div className="w-5/6 h-2 bg-muted/20 rounded-full"></div>
                  <div className="w-3/4 h-2 bg-muted/20 rounded-full"></div>
                  <div className="w-full h-2 bg-[#10A37F]/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </GridItem>

        </Grid>
      </Section>

      <SharedBottomSections />

      {/* CTA Section */}
      <FinalCTA />

    </div>
  );
}
