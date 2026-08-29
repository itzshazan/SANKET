import Link from "next/link";
import type { Metadata } from "next";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { Section } from "../../../components/ui/Section";
import { caseStudies, getCaseStudyBySlug } from "../../../data/caseStudies";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
      description: "This case study could not be found.",
    };
  }

  return {
    title: `${study.title} Case Study | Zobique Labs`,
    description: `${study.summary} Explore how Zobique Labs delivered a measurable business outcome through AI strategy, product design, and operational execution.`,
    alternates: {
      canonical: `/work/${study.slug}`,
    },
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return (
      <main className="min-h-screen bg-background py-24 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-4">Case study</p>
          <h1 className="text-4xl font-bold text-foreground">Case study not found</h1>
          <p className="mt-4 text-muted">The project you are looking for is no longer available.</p>
          <Link href="/work" className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white">
            Back to work
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pt-20">
      <Section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Link href="/work" className="hover:text-primary/80">Work</Link>
            <span>/</span>
            <span>{study.title}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-4">Case study</p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                {study.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{study.summary}</p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Business outcome</p>
              <p className="text-2xl font-bold text-foreground">{study.metric}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {study.results.map((result) => (
                  <div key={result.label} className="rounded-lg border border-border bg-surface p-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">{result.label}</p>
                    <p className="mt-2 text-sm font-semibold text-foreground">{result.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-6 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">The challenge</p>
            <p className="text-base leading-relaxed text-muted">{study.problem}</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">The solution</p>
            <p className="text-base leading-relaxed text-muted">{study.solution}</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">The result</p>
            <p className="text-base leading-relaxed text-muted">{study.outcome}</p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-4">Why this mattered</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built to solve a real operational bottleneck, not just add AI for optics.
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            This project is a strong example of the way Zobique Labs approaches AI: align the opportunity to a business problem, design the system around user flow, and ship a practical experience that creates measurable value.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact?service=AI%20Strategy%20Consultation" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white">
              Book a strategy call
            </Link>
            <Link href="/work" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground">
              Explore more work
            </Link>
          </div>
        </div>
      </Section>

      <SharedBottomSections />
      <FinalCTA />
    </main>
  );
}
