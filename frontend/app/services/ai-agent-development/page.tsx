import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "AI Agent Development Company",
  description:
    "Build AI agents that reason, use your business systems, and execute workflows with Zobique Labs's custom AI agent development services.",
  alternates: {
    canonical: "/services/ai-agent-development",
  },
  openGraph: {
    images: [
      {
        url: "/services/featured/recruiter_agent_v3.png",
        width: 1200,
        height: 1200,
        alt: "AI agent development service preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/services/featured/recruiter_agent_v3.png"],
  },
};

export default function AIAgentDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="AI Agent Development"
        subtitle="AI agents built to execute work, not just respond to prompts."
        description="We design and deploy AI agents that connect to your business tools, make decisions with context, and complete real operational work inside your existing workflows."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Custom AI Agents for Business Workflows</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Built for operations, sales, support, and internal execution.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Unlike a chatbot, an AI agent can reason through a task, access tools, retrieve information, and take action across systems like CRM, ERP, knowledge bases, and internal apps.
              </p>
            </div>
            <div className="lg:h-[400px] h-[250px] sm:h-[300px] bg-background rounded-xl border border-border flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group">
              <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border border-border/50 rounded-lg bg-surface/50 backdrop-blur-sm flex flex-col items-center justify-center relative gap-6">
                <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30 relative">
                  <div className="w-10 h-10 bg-primary rounded-xl absolute inset-0 m-auto animate-pulse"></div>
                  <div className="absolute -right-2 -top-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                </div>
                <div className="text-center">
                  <p className="text-foreground font-bold">Autonomous Agent</p>
                  <p className="text-xs text-muted font-mono mt-2">STATUS: EXECUTING TASK</p>
                </div>
              </div>
            </div>
          </GridItem>

          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="lg:h-[400px] h-[250px] sm:h-[300px] bg-background rounded-xl border border-border flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group order-2 lg:order-1">
              <div className="absolute w-64 h-64 bg-[#10A37F]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border border-border/50 rounded-lg bg-surface/50 backdrop-blur-sm flex items-center justify-center relative">
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 30% 50% L 70% 30%" stroke="currentColor" strokeWidth="2" className="text-border" strokeDasharray="4 4" />
                    <path d="M 30% 50% L 70% 70%" stroke="currentColor" strokeWidth="2" className="text-border" strokeDasharray="4 4" />
                  </svg>
                  <div className="absolute left-[20%] top-[40%] w-16 h-16 bg-surface border border-border rounded-xl flex items-center justify-center text-xs font-bold shadow-sm z-10 text-muted hover:border-[#10A37F] transition-colors">RESEARCH</div>
                  <div className="absolute right-[20%] top-[20%] w-16 h-16 bg-surface border border-border rounded-xl flex items-center justify-center text-xs font-bold shadow-sm z-10 text-muted hover:border-[#10A37F] transition-colors">WRITE</div>
                  <div className="absolute right-[20%] bottom-[20%] w-16 h-16 bg-surface border border-border rounded-xl flex items-center justify-center text-xs font-bold shadow-sm z-10 text-muted hover:border-[#10A37F] transition-colors">REVIEW</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Multi-Agent Systems</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Agents working together like a focused business team.</p>
              <p className="text-muted leading-relaxed">
                We design multi-agent workflows where one agent gathers information, another evaluates it, and a review layer validates decisions before action is taken.
              </p>
            </div>
          </GridItem>

          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">What We Build</h2>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Lead qualification agents</strong> that score prospects and route them into your sales process.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Support agents</strong> that answer, classify, and escalate service requests based on context.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Operations agents</strong> that monitor key signals, trigger workflows, and update business systems.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Sales automation agents</strong> that enrich leads, draft outreach, and keep CRM records accurate.</p></li>
              </ul>
            </div>
            <div className="lg:h-[600px] h-[400px] bg-background rounded-xl border border-border flex items-center justify-center p-8 relative overflow-hidden group">
              <div className="absolute w-64 h-64 bg-[#1A73E8]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border border-border/50 rounded-lg bg-surface/50 backdrop-blur-sm flex flex-col items-center justify-center relative p-8 gap-4">
                <div className="w-full bg-background border border-border rounded-lg p-4 flex items-center justify-between shadow-sm"><span className="text-xs font-bold text-muted">TRIGGER</span><div className="w-8 h-2 bg-muted/20 rounded-full"></div></div>
                <div className="h-6 w-px bg-border"></div>
                <div className="w-full bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-center justify-between shadow-sm"><span className="text-xs font-bold text-primary">AGENT REASONING</span><div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin"></div></div>
                <div className="h-6 w-px bg-border"></div>
                <div className="w-full bg-background border border-border rounded-lg p-4 flex items-center justify-between shadow-sm"><span className="text-xs font-bold text-muted">API ACTION</span><div className="w-8 h-2 bg-green-500/20 rounded-full"></div></div>
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
              Automate the repetitive work that consumes your team’s time
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { value: "Lead qualification", label: "screen prospects, score intent, and route the right opportunities" },
              { value: "Support scaling", label: "triage requests, summarize cases, and resolve routine issues faster" },
              { value: "Workflow execution", label: "trigger actions across tools with contextual business logic" },
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
