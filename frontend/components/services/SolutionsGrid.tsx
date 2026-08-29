
import { Section } from "../ui/Section";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import { Grid, GridItem } from "../ui/Grid";
import { Reveal } from "../ui/Reveal";

export function SolutionsGrid() {
  const solutions = [
    {
      title: "Custom AI Applications",
      description: "Examples:",
      list: [
        "AI Tutor",
        "Fractional CTO Services",
        "AI Research Assistant",
        "AI Proposal Generator"
      ],
      colSpan: 8
    },
    {
      title: "AI Model Training & Fine-Tuning",
      description: "Teach AI your business knowledge.",
      colSpan: 4
    },
    {
      title: "Multimodal AI Development",
      description: "Text, image, audio, and video understanding.",
      colSpan: 4
    },
    {
      title: "AI Integration",
      description: "Integrating frontier models:",
      list: [
        "OpenAI",
        "Anthropic",
        "Gemini",
        "Qwen",
        "DeepSeek"
      ],
      colSpan: 4
    },
    {
      title: "AI Maintenance & Optimization",
      description: "Continuous monitoring and upgrades.",
      colSpan: 4
    }
  ];

  return (
    <Section className="py-16 sm:py-24 bg-surface border-b border-border">
      <Grid className="gap-4 sm:gap-6 items-stretch">
        {solutions.map((solution, idx) => (
          <GridItem key={idx} mdColSpan={solution.colSpan} className="flex min-w-0">
            <Reveal delay={idx * 0.1} className="flex w-full h-full min-w-0">
              <Card className="flex flex-col w-full h-full hover:border-primary transition-colors min-w-0">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl break-words">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-4 sm:p-6 pt-0">
                  <p className="text-muted text-sm leading-relaxed mb-4 break-words">{solution.description}</p>
                  {solution.list && (
                    <ul className="space-y-2 mt-4 pt-4 border-t border-border/50">
                      {solution.list.map((item, i) => (
                        <li key={i} className="flex items-start text-sm font-medium text-foreground break-words">
                          <svg className="w-4 h-4 mr-2 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
}
