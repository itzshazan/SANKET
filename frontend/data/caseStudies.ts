export type CaseStudy = {
  slug: string;
  title: string;
  logo: string;
  problem: string;
  solution: string;
  outcome: string;
  metric: string;
  summary: string;
  url: string;
  linkText: string;
  results: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "zobique-career-intelligence",
    title: "Zobique",
    logo: "/zobique.png",
    problem: "Students lacked clear career direction and a way to turn academic effort into job-ready outcomes.",
    solution: "An AI-powered career intelligence platform that maps skills, personalizes learning paths, and guides decisions based on individual goals.",
    outcome: "Built a product that turns fragmented career guidance into a structured, intelligent decision engine.",
    metric: "Career guidance + AI learning system",
    summary: "A strategic product concept connecting learning, career insight, and decision support into one intelligent experience.",
    url: "https://zobique.com",
    linkText: "zobique.com",
    results: [
      { label: "Product focus", value: "Career intelligence" },
      { label: "Core value", value: "Decision clarity" },
      { label: "Outcome", value: "Smarter learning paths" },
    ],
  },
  {
    slug: "ncs-integration",
    title: "NCS Integration",
    logo: "/ncs-small-logo.png",
    problem: "Public employment services needed more intelligent, scalable support for users navigating a complex ecosystem.",
    solution: "AI-assisted service design and deployment for a national career and employment support experience.",
    outcome: "Extended digital support into a trust-heavy public environment with better access and improved information flow.",
    metric: "Public service deployment",
    summary: "An applied AI service design program for public-facing employment support with high trust and accessibility requirements.",
    url: "https://ncs.zobique.com",
    linkText: "ncs.zobique.com",
    results: [
      { label: "Environment", value: "Public services" },
      { label: "Challenge", value: "Complex decision paths" },
      { label: "Outcome", value: "Improved access" },
    ],
  },
  {
    slug: "zobique-flow-eks",
    title: "Zobique Labs EKS",
    logo: "/zobique-flow.png",
    problem: "Teams were losing time searching scattered files and interrupting colleagues just to find the information they already needed.",
    solution: "An enterprise knowledge system connecting documents, email, CRM, Notion, GitHub, and internal systems into one role-aware AI assistant.",
    outcome: "Reduced time spent finding answers while improving internal knowledge capture and team productivity.",
    metric: "Enterprise knowledge access",
    summary: "A role-aware AI workspace that connected business knowledge across systems to reduce time lost to information retrieval.",
    url: "https://labs.zobique.com",
    linkText: "labs.zobique.com",
    results: [
      { label: "System scope", value: "Knowledge operations" },
      { label: "User impact", value: "Less manual lookup" },
      { label: "Outcome", value: "Faster team decisions" },
    ],
  },
  {
    slug: "content-agent",
    title: "Content Agent",
    logo: "/zobique_blog.svg",
    problem: "Content teams were spending too much time on research, outlining, and editing before publishing a consistent stream of material.",
    solution: "An AI agent that handles ideation, live research, SEO-driven structure, writing, and refinement in the brand voice.",
    outcome: "Turned a manual content pipeline into a repeatable, high-volume, higher-quality publishing workflow.",
    metric: "AI content production workflow",
    summary: "An operational content engine that combines research, drafting, SEO structure, and brand refinement into one scalable production workflow.",
    url: "https://blog.zobique.com",
    linkText: "blog.zobique.com",
    results: [
      { label: "Workflow", value: "AI content engine" },
      { label: "Operating value", value: "Higher throughput" },
      { label: "Outcome", value: "Consistent publishing" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
