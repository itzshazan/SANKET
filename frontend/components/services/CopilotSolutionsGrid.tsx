
import { Section } from "../ui/Section";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import { Grid, GridItem } from "../ui/Grid";
import { Reveal } from "../ui/Reveal";

export function CopilotSolutionsGrid() {
  const copilots = [
    {
      title: "Employee Copilot",
      problem: "Employees spend up to 30% of their day searching for internal information across fragmented tools and silos.",
      workflow: "The Copilot securely connects to all internal knowledge bases (Notion, Google Drive, Slack). Employees ask questions in natural language and receive instantly cited answers.",
      outcome: "Reclaim 10+ hours per week per employee, drastically accelerating onboarding and daily productivity."
    },
    {
      title: "Sales Copilot",
      problem: "Sales representatives spend too much time researching prospects and drafting emails instead of actually selling.",
      workflow: "The Copilot automatically researches leads, drafts hyper-personalized outreach, and updates CRM records post-meeting.",
      outcome: "Increase pipeline generation by 40% while maintaining pristine CRM hygiene without manual data entry."
    },
    {
      title: "Customer Service Copilot",
      problem: "Support agents struggle to find resolution steps quickly, leading to long handling times and inconsistent customer answers.",
      workflow: "The Copilot reviews live tickets or calls, instantly surfacing relevant knowledge articles, policy details, and suggested draft replies to the agent.",
      outcome: "Reduce average handle time (AHT) by 35% and dramatically improve first-contact resolution (FCR) rates."
    },
    {
      title: "Developer Copilot",
      problem: "Engineering teams lose momentum on boilerplate code, bug hunting, and understanding undocumented legacy codebases.",
      workflow: "The Copilot integrates directly into the IDE and repository, offering contextual code completion, automated unit test generation, and intelligent code reviews.",
      outcome: "Accelerate development cycles by 30% and significantly reduce code defect rates before the QA phase."
    },
    {
      title: "HR Copilot",
      problem: "HR teams are overwhelmed by routine, repetitive employee inquiries regarding benefits, payroll, and company policies.",
      workflow: "The Copilot serves as an always-on internal support layer, answering HR questions instantly and guiding employees through onboarding workflows automatically.",
      outcome: "Deflect 80% of routine HR tickets, allowing the team to focus on strategic talent acquisition and culture."
    },
    {
      title: "Executive Copilot",
      problem: "Leaders struggle to synthesize real-time insights from massive, disparate data streams to make swift, informed decisions.",
      workflow: "The Copilot aggregates live data from BI tools, financial systems, and market reports, offering natural language querying of company metrics.",
      outcome: "Enable critical, data-driven decisions in seconds rather than days, eliminating the wait for manual reporting cycles."
    }
  ];

  return (
    <Section className="py-16 sm:py-24 bg-surface border-b border-border">
      <Grid className="gap-4 sm:gap-8 items-stretch">
        {copilots.map((copilot, idx) => (
          <GridItem key={idx} mdColSpan={6} className="flex min-w-0">
            <Reveal delay={idx * 0.1} className="flex w-full h-full min-w-0">
              <Card className="flex flex-col w-full h-full hover:border-primary transition-colors min-w-0">
                <CardHeader className="pb-3 sm:pb-4 border-b border-border bg-gray-50/50">
                  <CardTitle className="text-base sm:text-lg md:text-xl break-words">{copilot.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-0 flex flex-col">

                  {/* Problem Section */}
                  <div className="p-4 sm:p-6 border-b border-border/50">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">The Problem</h4>
                    <p className="text-sm text-foreground leading-relaxed break-words">{copilot.problem}</p>
                  </div>

                  {/* Workflow Section */}
                  <div className="p-4 sm:p-6 border-b border-border/50 bg-gray-50/30">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">The Workflow</h4>
                    <p className="text-sm text-foreground leading-relaxed break-words">{copilot.workflow}</p>
                  </div>

                  {/* Outcome Section */}
                  <div className="p-4 sm:p-6 mt-auto">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">The Outcome</h4>
                    <p className="text-sm font-semibold text-foreground leading-relaxed break-words">{copilot.outcome}</p>
                  </div>

                </CardContent>
              </Card>
            </Reveal>
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
}
