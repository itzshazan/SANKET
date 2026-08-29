import Link from "next/link";
import { Section } from "../../components/ui/Section";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../components/ui/Card";
import { SharedBottomSections } from "../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../components/home/FinalCTA";

export const metadata = {
  title: "AI Services for Business Growth & Automation",
  description:
    "Explore custom AI services for AI application development, AI agents, enterprise automation, and AI copilots built for measurable business outcomes.",
  alternates: {
    canonical: "/services",
  },
};

const serviceCards = [
  {
    title: "AI Application Development",
    description: "Custom AI products and business software built around workflow, operations, and revenue goals.",
    href: "/services/ai-application-development",
    badge: "Product + workflow AI",
    accent: "from-orange-500/15 to-orange-500/5",
  },
  {
    title: "AI Agent Development",
    description: "Autonomous AI agents that work across tools, complete tasks, and support operations without constant human supervision.",
    href: "/services/ai-agent-development",
    badge: "Operational execution",
    accent: "from-emerald-500/15 to-emerald-500/5",
  },
  {
    title: "AI Copilot Development",
    description: "Real-time AI assistants for teams that need better decisions, faster knowledge retrieval, and improved productivity.",
    href: "/services/ai-copilot-development",
    badge: "Team productivity",
    accent: "from-sky-500/15 to-sky-500/5",
  },
  {
    title: "Enterprise AI Solutions",
    description: "Secure, scalable AI systems for enterprise workflows, knowledge access, and process automation.",
    href: "/services/enterprise-ai",
    badge: "Enterprise deployment",
    accent: "from-violet-500/15 to-violet-500/5",
  },
  {
    title: "AI Workflow Automation",
    description: "Automate your repetitive operational work, data handoffs, approvals, and internal task coordination.",
    href: "/services/ai-workflow-automation",
    badge: "Process automation",
    accent: "from-amber-500/15 to-amber-500/5",
  },
  {
    title: "AI Consulting",
    description: "Strategic AI roadmaps and implementation guidance for organizations evaluating where AI can create real value.",
    href: "/services/ai-consulting",
    badge: "AI strategy",
    accent: "from-red-500/15 to-red-500/5",
  },
];

const proofPoints = [
  "Business-first AI roadmap",
  "Custom build, not off-the-shelf templates",
  "Production-ready deployment",
  "Clear ROI and operational focus",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="w-full overflow-x-clip border-b border-border bg-surface pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                AI systems built for measurable business growth.
              </h1>
              <p className="mt-6 text-lg text-muted md:text-xl leading-relaxed">
                We design and deploy AI products, agents, copilots, and workflow systems that reduce operational drag and turn business processes into a strategic advantage.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact?service=AI%20Services" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90">
                  Book a strategy call
                </Link>
                <Link href="/work" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary">
                  Explore case studies
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 grid-flow-dense gap-3 sm:flex sm:flex-wrap">
                {proofPoints.map((point) => (
                  <div
                    key={point}
                    className={`flex items-center justify-center rounded-xl border border-border bg-background p-3 text-center text-xs font-medium text-muted shadow-[0_2px_10px_rgba(0,0,0,0.02)] sm:block sm:rounded-full sm:px-3 sm:py-1.5 sm:text-left sm:shadow-none ${point.length > 28 ? "col-span-2" : "col-span-1"
                      }`}
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-background p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary mb-3">Delivery model</p>
                <div className="space-y-4">
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Discovery</p>
                    <p className="mt-2 text-sm text-foreground">Map the business bottleneck and identify the highest-ROI AI use case.</p>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Build</p>
                    <p className="mt-2 text-sm text-foreground">Design the workflow, system architecture, and deployment strategy.</p>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Operate</p>
                    <p className="mt-2 text-sm text-foreground">Launch with safeguards, governance, and measurable business KPIs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-3">Our services</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Choose the AI capability that matches your business objective.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => (
              <Card key={service.href} className="group flex h-full flex-col overflow-hidden border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_64px_rgba(242,101,34,0.08)]">
                <div className={`h-2 w-full bg-gradient-to-r ${service.accent}`} />
                <CardHeader className="pb-3 pt-5">
                  <div className="mb-4 inline-flex w-fit rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    {service.badge}
                  </div>
                  <CardTitle className="text-2xl leading-tight">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-base leading-relaxed text-muted">{service.description}</p>
                </CardContent>

                <CardFooter className="pt-0">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    Learn more
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <SharedBottomSections />
      <FinalCTA />
    </main>
  );
}
