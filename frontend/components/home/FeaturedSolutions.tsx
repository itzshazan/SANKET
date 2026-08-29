"use client";

import { Section, SectionHeader } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import Image from "next/image";
import Link from "next/link";

export function FeaturedSolutions() {
  const solutions = [
    {
      title: "Fractional CTO",
      outcome: "Strategic technical leadership to guide your AI engineering and execution.",
      image: "/services/featured/fractional_CTO.jpg"
    },
    {
      title: "Customer Support Agent",
      outcome: "Resolve customer issues instantly without human intervention.",
      image: "/services/featured/customer_support_agent_v3.png"
    },
    {
      title: "AI Research Assistant",
      outcome: "Summarize thousands of documents and research papers instantly.",
      image: "/services/featured/ai_research_assistant_v3.png"
    },
    {
      title: "Recruitment Agent",
      outcome: "Source, screen, and schedule candidate interviews automatically.",
      image: "/services/featured/recruiter_agent_v3.png"
    },
    {
      title: "AI Tutor",
      outcome: "Personalized learning paths that adapt to student pace automatically.",
      image: "/services/featured/AI_tutor.jpg"
    },
    {
      title: "Document AI",
      outcome: "Extract key data from contracts, policies, and invoices automatically.",
      image: "/services/featured/document_ai.png"
    }
  ];

  return (
    <Section className="border-b border-border bg-surface">
      <Reveal>
        <SectionHeader title="Featured Solutions" />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="border border-border rounded-sm overflow-hidden bg-background">
          <div className="grid gap-0 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className={`p-6 border-b border-border hover:bg-surface transition-colors flex flex-col justify-between group
                  ${(idx + 1) % 3 !== 0 ? 'md:border-r' : ''} 
                  ${(idx + 1) % 2 !== 0 ? 'sm:border-r' : ''}
                  ${idx >= solutions.length - 3 ? 'md:border-b-0' : ''}
                  ${idx >= solutions.length - 2 ? 'sm:border-b-0' : ''}
                  ${idx === solutions.length - 1 ? 'border-b-0' : ''}
                `}
              >
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{solution.title}</h3>
                  <p className="text-sm text-muted mb-6">{solution.outcome}</p>
                </div>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="w-full aspect-[16/9] relative rounded-md overflow-hidden bg-background border border-border group-hover:border-primary/50 transition-colors">
                    <Image 
                      src={solution.image} 
                      alt={solution.title} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <Link 
                    href={`/contact?service=${encodeURIComponent(solution.title)}`}
                    className="group/btn flex items-center justify-between w-full bg-background border border-border hover:border-primary/40 text-foreground transition-all duration-300 py-2.5 pl-5 pr-2.5 rounded-sm text-sm font-semibold shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] hover:shadow-primary/10"
                  >
                    <span>Get this Service</span>
                    <div className="w-8 h-8 rounded-sm bg-surface border border-border group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-white flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
