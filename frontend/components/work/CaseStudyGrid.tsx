"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "../ui/Section";
import { Card, CardContent } from "../ui/Card";
import { RevealGroup } from "../ui/Reveal";
import { caseStudies } from "../../data/caseStudies";

export function CaseStudyGrid() {
  return (
    <Section className="py-24 bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-4">Selected client work</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">AI systems designed for measurable business outcomes</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted">
          From product strategy to enterprise knowledge systems, the work focuses on solving real operational bottlenecks, not just adding AI flair.
        </p>
      </div>

      <RevealGroup stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
        {caseStudies.map((study, idx) => (
          <div key={idx} className="flex">
            <Card className="flex flex-col w-full h-full hover:border-primary transition-colors overflow-hidden">
              <div className="p-8 border-b border-border bg-gray-50/50 flex items-center justify-center min-h-[160px]">
                <div className="relative w-full max-w-[200px] h-16 flex items-center justify-center">
                  <Image
                    src={study.logo}
                    alt={`${study.title} logo`}
                    fill
                    sizes="(max-width: 768px) 100vw, 200px"
                    className="object-contain"
                  />
                </div>
              </div>

              <CardContent className="flex-1 p-0 flex flex-col">
                <div className="p-8 border-b border-border/50">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary mb-3">Outcome</p>
                  <p className="text-sm font-semibold text-foreground">{study.metric}</p>
                </div>

                <div className="p-8 border-b border-border/50">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">The Problem</h3>
                  <p className="text-sm text-foreground leading-relaxed">{study.problem}</p>
                </div>

                <div className="p-8 border-b border-border/50 bg-gray-50/30 flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">The Solution</h3>
                  <p className="text-sm text-foreground leading-relaxed">{study.solution}</p>
                </div>

                <div className="p-8 border-b border-border/50 bg-white">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">Business Result</h3>
                  <p className="text-sm text-foreground leading-relaxed">{study.outcome}</p>
                </div>

                <div className="p-8 mt-auto flex items-center justify-between bg-white gap-4">
                  <Link
                    href={`/work/${study.slug}`}
                    className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-2"
                  >
                    View Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                  <Link
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted font-medium hover:text-primary"
                  >
                    {study.linkText}
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </RevealGroup>
    </Section>
  );
}
