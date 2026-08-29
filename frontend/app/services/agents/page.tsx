import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "AI Agent Development Services",
  description:
    "Hire a leading AI agent development company to build autonomous agents for operations, sales, support, and internal workflow automation.",
  alternates: {
    canonical: "/services/agents",
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
      {/* Hero Section */}
      <InnerServiceHero
        title="AI Agent Development"
        subtitle="Autonomous agents that take action."
        description="A chatbot can only answer questions. An AI Agent actually does the work, logging into systems, filling out forms, sending emails, and completing entire tasks on its own. Your team sets the goal, the agent gets it done."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">

          {/* Custom AI Agents */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Custom AI Agents</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Built for specific business roles.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                We build agents trained to handle a defined job in your business from start to finish, without needing someone to supervise every step along the way.
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

          {/* Multi-Agent Systems */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="lg:h-[400px] h-[250px] sm:h-[300px] bg-background rounded-xl border border-border flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group order-2 lg:order-1">
              <div className="absolute w-64 h-64 bg-[#10A37F]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border border-border/50 rounded-lg bg-surface/50 backdrop-blur-sm flex items-center justify-center relative">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 30% 50% L 70% 30%" stroke="currentColor" strokeWidth="2" className="text-border" strokeDasharray="4 4" />
                    <path d="M 30% 50% L 70% 70%" stroke="currentColor" strokeWidth="2" className="text-border" strokeDasharray="4 4" />
                  </svg>

                  {/* Nodes */}
                  <div className="absolute left-[20%] top-[40%] w-16 h-16 bg-surface border border-border rounded-xl flex items-center justify-center text-xs font-bold shadow-sm z-10 text-muted hover:border-[#10A37F] transition-colors">RESEARCH</div>
                  <div className="absolute right-[20%] top-[20%] w-16 h-16 bg-surface border border-border rounded-xl flex items-center justify-center text-xs font-bold shadow-sm z-10 text-muted hover:border-[#10A37F] transition-colors">WRITE</div>
                  <div className="absolute right-[20%] bottom-[20%] w-16 h-16 bg-surface border border-border rounded-xl flex items-center justify-center text-xs font-bold shadow-sm z-10 text-muted hover:border-[#10A37F] transition-colors">REVIEW</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Multi-Agent Systems</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Teams of AI agents working together.</p>
              <p className="text-muted leading-relaxed">
                Just like a human team, multiple agents can collaborate on a single task. One agent researches a topic, hands it off to a second agent that writes the report, and a third agent reviews it before it&apos;s finalized.
              </p>
            </div>
          </GridItem>

          {/* Workflow Automation Agents */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Workflow Automation Agents</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Automate entire end-to-end processes.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                Agents that take over repetitive business workflows completely, so your team never has to touch them manually.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Lead Qualification Agent</strong> - Chats with website visitors and identifies which ones are a good fit for sales.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">CRM Update Agent</strong> - Listens to sales calls and automatically updates your CRM records.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Invoice Processing Agent</strong> - Reads supplier invoices and enters the data into your accounting software.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Operations Agent</strong> - Monitors inventory levels and automatically creates purchase orders before stock runs out.</p>
                </li>
              </ul>
            </div>
            <div className="lg:h-[600px] h-[400px] bg-background rounded-xl border border-border flex items-center justify-center p-8 relative overflow-hidden group">
              <div className="absolute w-64 h-64 bg-[#1A73E8]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border border-border/50 rounded-lg bg-surface/50 backdrop-blur-sm flex flex-col items-center justify-center relative p-8 gap-4">
                <div className="w-full bg-background border border-border rounded-lg p-4 flex items-center justify-between shadow-sm">
                  <span className="text-xs font-bold text-muted">TRIGGER</span>
                  <div className="w-8 h-2 bg-muted/20 rounded-full"></div>
                </div>
                <div className="h-6 w-px bg-border"></div>
                <div className="w-full bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-center justify-between shadow-sm">
                  <span className="text-xs font-bold text-primary">AGENT REASONING</span>
                  <div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
                </div>
                <div className="h-6 w-px bg-border"></div>
                <div className="w-full bg-background border border-border rounded-lg p-4 flex items-center justify-between shadow-sm">
                  <span className="text-xs font-bold text-muted">API ACTION</span>
                  <div className="w-8 h-2 bg-green-500/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </GridItem>

          {/* Department Agents */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="lg:h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-background rounded-xl border border-border flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group order-2 lg:order-1">
              <div className="absolute w-64 h-64 bg-[#F26522]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border border-border/50 rounded-lg bg-surface/50 backdrop-blur-sm flex flex-col items-center justify-center relative p-8 gap-6">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="bg-background border border-border rounded-lg flex flex-col items-center justify-center p-4 hover:border-primary transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-full mb-2"></div>
                    <span className="text-xs font-bold text-foreground">Sales</span>
                  </div>
                  <div className="bg-background border border-border rounded-lg flex flex-col items-center justify-center p-4 hover:border-[#1A73E8] transition-colors">
                    <div className="w-10 h-10 bg-[#1A73E8]/10 rounded-full mb-2"></div>
                    <span className="text-xs font-bold text-foreground">Marketing</span>
                  </div>
                  <div className="bg-background border border-border rounded-lg flex flex-col items-center justify-center p-4 hover:border-[#10A37F] transition-colors">
                    <div className="w-10 h-10 bg-[#10A37F]/10 rounded-full mb-2"></div>
                    <span className="text-xs font-bold text-foreground">Support</span>
                  </div>
                  <div className="bg-background border border-border rounded-lg flex flex-col items-center justify-center p-4 hover:border-[#4D6BFE] transition-colors">
                    <div className="w-10 h-10 bg-[#4D6BFE]/10 rounded-full mb-2"></div>
                    <span className="text-xs font-bold text-foreground">Finance</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Department Agents</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Specialized roles for specific teams.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                Agents purpose-built to support individual departments across your company.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Sales Agent</strong> - Sends outreach emails, follows up with leads, keeps the CRM clean.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Marketing Agent</strong> - Writes ad copy, tests variations, and adjusts spend based on performance.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Recruitment Agent</strong> - Sources candidates, sends outreach, and runs first-round screening chats.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Customer Support Agent</strong> - Resolves real issues like refunds and order changes, not just FAQs.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Research Agent</strong> - Tracks competitor pricing and news continuously, with no manual digging.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Content Agent</strong> - Writes and schedules content like social posts and blog articles on its own.</p>
                </li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-muted"><strong className="text-foreground">Finance Agent</strong> - Generates financial reports and flags unusual expenses automatically.</p>
                </li>
              </ul>
            </div>
          </GridItem>

          {/* Agent Integration & Deployment */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Agent Integration & Deployment</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Deploy inside existing business systems.</p>
              <p className="text-muted leading-relaxed">
                We safely connect these agents into your core systems like CRM, ERP, and HR software, and make sure they run reliably in production, not just in a demo.
              </p>
            </div>
            <div className="lg:h-[300px] h-[250px] bg-background rounded-xl border border-border flex items-center justify-center p-8 relative overflow-hidden group">
              <div className="absolute w-64 h-64 bg-[#10A37F]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border border-border/50 rounded-lg bg-surface/50 backdrop-blur-sm flex flex-col items-center justify-center relative gap-4">
                <div className="w-24 h-12 bg-surface border border-border rounded flex items-center justify-center font-mono text-xs text-muted shadow-sm">CRM API</div>
                <div className="flex gap-4">
                  <div className="h-8 w-px bg-border"></div>
                  <div className="h-8 w-px bg-border"></div>
                </div>
                <div className="px-6 py-3 bg-primary text-white rounded-lg font-bold shadow-[0_0_15px_rgba(242,101,34,0.3)] z-10 hover:scale-105 transition-transform">
                  Agent Engine
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
