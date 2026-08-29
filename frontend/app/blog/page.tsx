import Link from "next/link";
import { Section } from "../../components/ui/Section";
import { Grid, GridItem } from "../../components/ui/Grid";
import { FinalCTA } from "../../components/home/FinalCTA";

export const metadata = {
  title: "AI Strategy, Automation, and Agent Insights",
  description:
    "Explore practical AI strategy, workflow automation, agent design, and enterprise AI implementation guidance from Zobique Labs.",
  alternates: {
    canonical: "/blog",
  },
};

const articles = [
  {
    title: "AI Agent Development: What Actually Makes an Agent Production-Ready?",
    summary:
      "A practical look at architecture, tool access, guardrails, and the operating model behind real business AI agents.",
    href: "/blog/ai-agent-development-guide",
    category: "AI Agents",
  },
  {
    title: "Enterprise AI Implementation: How to Deploy Secure AI Without Breaking Operations",
    summary:
      "What enterprise leaders should think about before launching private knowledge systems, internal copilots, or workflow automation.",
    href: "/blog/enterprise-ai-implementation-guide",
    category: "Enterprise AI",
  },
  {
    title: "How to Automate Workflow Bottlenecks with AI Without Adding More Chaos",
    summary:
      "A guide to identifying high-value workflows, mapping exceptions, and automating the real work without creating operational risk.",
    href: "/blog/how-to-automate-workflows-with-ai",
    category: "Automation",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-4">
            Zobique Labs insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            AI strategy, agent design, and operational automation
          </h1>
          <p className="text-lg text-muted">
            Practical guidance for businesses building production AI systems, internal automation, and operational intelligence.
          </p>
        </div>
      </Section>

      <Section className="pb-20">
        <Grid className="mx-auto max-w-6xl gap-8">
          {articles.map((article) => (
            <GridItem key={article.href} mdColSpan={12} className="border border-border rounded-2xl bg-surface p-6 md:p-8 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary mb-3">{article.category}</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{article.title}</h2>
                  <p className="text-base text-muted leading-relaxed">{article.summary}</p>
                </div>
                <Link
                  href={article.href}
                  className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  Read article
                </Link>
              </div>
            </GridItem>
          ))}
        </Grid>
      </Section>

      <FinalCTA />
    </div>
  );
}
