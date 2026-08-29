import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "AI Recruitment Agent",
  description:
    "Use AI recruitment automation to source candidates, screen applicants, schedule interviews, and streamline hiring workflows for faster talent acquisition.",
  alternates: {
    canonical: "/solutions/ai-recruitment-agent",
  },
};

export default function AIRecruitmentAgentPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <InnerServiceHero
        title="AI Recruitment Agent"
        subtitle="Source, screen, and schedule with less manual effort."
        description="AI recruitment systems reduce the time spent on repetitive hiring tasks so recruiters can focus on the people who matter most."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Recruitment Workflows That Run Faster</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Automate sourcing, screening, and scheduling.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                From sourcing candidates to interview coordination, AI recruitment agents shorten the hiring process while improving consistency and reducing admin overhead for recruiters.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Candidate sourcing</strong> across job boards and inbound applications.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Resume screening</strong> by role requirements and experience criteria.</p></li>
                <li className="flex gap-4 p-4 border border-border rounded-lg bg-background"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div><p className="text-muted"><strong className="text-foreground">Interview scheduling</strong> and recruiter handoff once a candidate is shortlisted.</p></li>
              </ul>
            </div>
            <div className="lg:h-[500px] h-[280px] sm:h-[360px] bg-background rounded-xl border border-border p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-5 shadow-lg">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-5">Hiring Pipeline</div>
                  <div className="space-y-3">
                    <div className="flex justify-between rounded-xl border border-border p-3"><span className="text-sm text-foreground">Applicants</span><span className="text-xs text-primary">120</span></div>
                    <div className="flex justify-between rounded-xl border border-border p-3"><span className="text-sm text-foreground">Shortlisted</span><span className="text-xs text-primary">18</span></div>
                    <div className="flex justify-between rounded-xl border border-border p-3"><span className="text-sm text-foreground">Interviews</span><span className="text-xs text-primary">6</span></div>
                  </div>
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
