import { Section } from "../../../components/ui/Section";
import Link from "next/link";

export const metadata = {
  title: "How to Automate Workflow Bottlenecks with AI Without Adding More Chaos",
  description:
    "A practical framework for identifying the right workflows to automate with AI and setting up systems that scale without creating operational risk.",
  alternates: {
    canonical: "/blog/how-to-automate-workflows-with-ai",
  },
};

export default function WorkflowAutomationGuidePage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-4">Automation</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            How to Automate Workflow Bottlenecks with AI Without Adding More Chaos
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            AI automation works best when it replaces a known bottleneck - not when it introduces a new layer of confusion into a process that already has weak controls.
          </p>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="max-w-none text-foreground">
            <h2 className="text-2xl font-bold text-foreground mb-4">Find the real bottleneck first</h2>
            <p className="text-muted leading-relaxed mb-4">
              The best automation opportunities are often the routines that are repetitive, high-volume, and handled by multiple people. That could mean routing tickets, reading incoming documents, or following up on leads.
            </p>
            <h2 className="text-2xl font-bold text-foreground mb-4">Map exceptions before automating</h2>
            <p className="text-muted leading-relaxed mb-4">
              AI thrives when it is handled as a decision system with exceptions, not as a blanket replacement for every human action. Define what cases the system can process autonomously and when humans should intervene.
            </p>
            <h2 className="text-2xl font-bold text-foreground mb-4">Build a feedback loop</h2>
            <p className="text-muted leading-relaxed">
              Once the workflow is live, track missed cases, latency, and manual exceptions. That data will tell you where the system is working and where it still needs human support or improved logic.
            </p>
          </article>

          <aside className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-4">Rule of thumb</p>
            <p className="text-muted leading-relaxed">
              Automate the repeatable, route the exceptions, and keep visibility in place for every decision.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90">
                Plan an automation project
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}
