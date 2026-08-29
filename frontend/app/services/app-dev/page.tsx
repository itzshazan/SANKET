import { Section } from "../../../components/ui/Section";
import { Grid, GridItem } from "../../../components/ui/Grid";
import { IconOpenAI, IconAnthropic, IconGemini, IconQwen, IconDeepSeek } from "../../../components/ui/Icons";
import { SharedBottomSections } from "../../../components/shared/SharedBottomSections";
import { FinalCTA } from "../../../components/home/FinalCTA";
import { InnerServiceHero } from "../../../components/services/InnerServiceHero";

export const metadata = {
  title: "AI Application Development Company",
  description:
    "Build custom AI applications for your business with Zobique Labs. We design AI products, workflows, and automation systems that solve real operational problems.",
  alternates: {
    canonical: "/services/app-dev",
  },
  openGraph: {
    images: [
      {
        url: "/services/featured/AI_tutor.jpg",
        width: 1200,
        height: 1200,
        alt: "AI application development service preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/services/featured/AI_tutor.jpg"],
  },
};

export default function AIApplicationDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <InnerServiceHero
        title="AI Application Development"
        subtitle="From idea to AI product."
        description="You have a problem worth solving or an idea worth building. We design, build, and launch the AI-powered application that brings it to life - fully tailored to how your business actually works, not a generic off-the-shelf tool."
      />

      <Section className="border-y border-border py-16 sm:py-24 bg-surface relative overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <Grid className="gap-12 sm:gap-16 lg:gap-24 relative z-10">

          {/* Custom AI Applications */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Custom AI Applications</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">AI products built around your exact use case.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                Every business has a problem that off-the-shelf software can&apos;t solve. We build custom AI applications designed specifically around your workflow, your users, and your goals.
              </p>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground">Examples:</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <p className="text-muted"><strong className="text-foreground">AI Tutor</strong> - A personal learning assistant that adapts lessons to each student&apos;s pace and fills their knowledge gaps.</p>
                  </li>
                  <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <p className="text-muted"><strong className="text-foreground">AI Career Coach</strong> - Reviews resumes, recommends career paths, and runs realistic mock interviews.</p>
                  </li>
                  <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <p className="text-muted"><strong className="text-foreground">AI Research Assistant</strong> - Reads through large volumes of documents or papers and delivers clear, digestible summaries.</p>
                  </li>
                  <li className="flex gap-4 p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <p className="text-muted"><strong className="text-foreground">AI Proposal Generator</strong> - Automatically drafts business proposals based on your past winning pitches.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:h-[600px] h-[300px] sm:h-[400px] bg-background rounded-xl border border-border flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group">
              <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border border-border/50 rounded-lg bg-surface/50 backdrop-blur-sm flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl mx-auto mb-4 flex items-center justify-center border border-primary/30">
                    <span className="w-8 h-8 bg-primary rounded-lg block animate-pulse"></span>
                  </div>
                  <p className="text-foreground font-semibold">Custom App Logic</p>
                </div>
              </div>
            </div>
          </GridItem>

          {/* AI Model Training */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="lg:h-[400px] h-[250px] sm:h-[300px] bg-background rounded-xl border border-border flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group order-2 lg:order-1">
              <div className="absolute w-64 h-64 bg-[#10A37F]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border border-border/50 rounded-lg bg-surface/50 backdrop-blur-sm flex items-center justify-center relative flex-col gap-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-surface border border-border rounded-lg flex items-center justify-center font-mono text-xs text-muted shadow-sm">Data</div>
                  <div className="w-12 h-12 bg-surface border border-border rounded-lg flex items-center justify-center font-mono text-xs text-muted shadow-sm">Docs</div>
                  <div className="w-12 h-12 bg-surface border border-border rounded-lg flex items-center justify-center font-mono text-xs text-muted shadow-sm">APIs</div>
                </div>
                <div className="w-8 h-8 flex flex-col justify-center items-center gap-1 opacity-50">
                  <span className="w-1 h-1 bg-foreground rounded-full block animate-bounce"></span>
                  <span className="w-1 h-1 bg-foreground rounded-full block animate-bounce" style={{ animationDelay: '100ms' }}></span>
                  <span className="w-1 h-1 bg-foreground rounded-full block animate-bounce" style={{ animationDelay: '200ms' }}></span>
                </div>
                <div className="px-6 py-3 bg-primary/10 border border-primary/30 text-primary rounded-lg font-semibold shadow-sm">Trained Model</div>
              </div>
            </div>
            <div className="order-1 lg:order-2 min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">AI Model Training & Fine-Tuning</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Teach AI your business knowledge.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                A general AI model knows the internet. We train it to know your business - your terminology, your data, your way of doing things - so its answers feel like they came from someone on your team, not a generic chatbot.
              </p>
            </div>
          </GridItem>

          {/* Multimodal AI */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Multimodal AI Development</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Text, image, audio, and video - understood together.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Real-world information isn&apos;t just text. We build AI that can read a document, analyze an image, watch a video, and listen to audio all at once - and connect what it learns across all of them, the same way a human would.
              </p>
            </div>
            <div className="lg:h-[400px] h-[250px] sm:h-[300px] bg-background rounded-xl border border-border flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group">
              <div className="absolute w-64 h-64 bg-[#1A73E8]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border border-border/50 rounded-lg bg-surface/50 backdrop-blur-sm flex items-center justify-center relative">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-surface border border-border rounded-lg flex items-center justify-center text-xs font-bold text-muted shadow-sm hover:border-[#1A73E8] transition-colors">TEXT</div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-surface border border-border rounded-lg flex items-center justify-center text-xs font-bold text-muted shadow-sm hover:border-[#10A37F] transition-colors">IMAGE</div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-surface border border-border rounded-lg flex items-center justify-center text-xs font-bold text-muted shadow-sm hover:border-[#F26522] transition-colors">AUDIO</div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-surface border border-border rounded-lg flex items-center justify-center text-xs font-bold text-muted shadow-sm hover:border-[#4D6BFE] transition-colors">VIDEO</div>
                </div>
              </div>
            </div>
          </GridItem>

          {/* AI Integration */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="lg:h-[500px] h-[300px] sm:h-[400px] bg-background rounded-xl border border-border flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group order-2 lg:order-1">
              <div className="absolute w-64 h-64 bg-[#4D6BFE]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-full h-full border border-border/50 rounded-lg bg-surface/50 backdrop-blur-sm flex flex-col items-center justify-center relative p-8 gap-6">

                {/* AI Models representing Integration */}
                <div className="flex justify-center gap-4 w-full">
                  <div className="bg-emerald-50 text-[#10A37F] p-3 rounded-xl border border-emerald-100 shadow-sm"><IconOpenAI className="w-8 h-8" /></div>
                  <div className="bg-[#F0EBE6] text-[#1A1A1A] p-3 rounded-xl border border-gray-200 shadow-sm"><IconAnthropic className="w-8 h-8" /></div>
                  <div className="bg-blue-50 text-[#1A73E8] p-3 rounded-xl border border-blue-100 shadow-sm"><IconGemini className="w-8 h-8" /></div>
                </div>

                <div className="h-12 w-px bg-gradient-to-b from-border to-primary relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-ping"></div>
                </div>

                <div className="w-full bg-background border border-primary/30 p-6 rounded-xl text-center shadow-lg shadow-primary/5">
                  <span className="font-bold text-foreground">Your Software</span>
                </div>

              </div>
            </div>
            <div className="order-1 lg:order-2 min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">AI Integration</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Connecting the world&apos;s leading AI models into your software.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8">
                Instead of building AI from scratch, we plug the most powerful AI engines directly into your existing tools and apps - so you get cutting-edge intelligence without rebuilding your tech stack.
              </p>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-4">Models we integrate:</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-sm font-semibold text-foreground hover:border-[#10A37F] transition-colors"><IconOpenAI className="w-4 h-4 text-[#10A37F]" /> OpenAI</span>
                <span className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-sm font-semibold text-foreground hover:border-[#1A1A1A] transition-colors"><IconAnthropic className="w-4 h-4 text-[#1A1A1A]" /> Anthropic (Claude)</span>
                <span className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-sm font-semibold text-foreground hover:border-[#1A73E8] transition-colors"><IconGemini className="w-4 h-4 text-[#1A73E8]" /> Google Gemini</span>
                <span className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-sm font-semibold text-foreground hover:border-[#4D6BFE] transition-colors"><IconQwen className="w-4 h-4 text-[#4D6BFE]" /> Qwen</span>
                <span className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-sm font-semibold text-foreground hover:border-[#4D6BFE] transition-colors"><IconDeepSeek className="w-4 h-4 text-[#4D6BFE]" /> DeepSeek</span>
              </div>
            </div>
          </GridItem>

          {/* AI Maintenance */}
          <GridItem mdColSpan={12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">AI Maintenance & Optimization</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 font-medium">Your AI gets smarter, not stale.</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Launching is just the start. We continuously monitor performance, fine-tune accuracy, and upgrade your AI as newer, more capable models are released - so it keeps improving long after launch.
              </p>
            </div>
            <div className="lg:h-[300px] h-[200px] sm:h-[250px] bg-background rounded-xl border border-border flex items-center justify-center p-4 sm:p-8 relative overflow-hidden group">
              <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="flex items-end gap-3 h-32 w-full max-w-[200px] mx-auto z-10">
                <div className="w-1/4 bg-border rounded-t-sm h-[30%] hover:bg-muted transition-colors"></div>
                <div className="w-1/4 bg-border rounded-t-sm h-[50%] hover:bg-muted transition-colors"></div>
                <div className="w-1/4 bg-border rounded-t-sm h-[75%] hover:bg-muted transition-colors"></div>
                <div className="w-1/4 bg-primary rounded-t-sm h-full shadow-[0_0_15px_rgba(242,101,34,0.3)] animate-pulse"></div>
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
