"use client";

import { Section, SectionHeader } from "../ui/Section";
import { IconOpenAI, IconAnthropic, IconGemini, IconQwen, IconDeepSeek } from "../ui/Icons";
import Image from "next/image";
import { Reveal } from "../ui/Reveal";

export type Skill = {
  name: string;
  Icon?: React.ComponentType<{ className?: string }>;
  iconColor?: string;
  icon?: string;
};

export type SkillGroup = {
  group: string;
  skills: Skill[];
};

export const skillsAndTechnologies: SkillGroup[] = [
  {
    group: "AI Platforms",
    skills: [
      { name: "OpenAI", Icon: IconOpenAI, iconColor: "text-[#10A37F]" },
      { name: "Anthropic", Icon: IconAnthropic, iconColor: "text-[#1A1A1A]" },
      { name: "Gemini", Icon: IconGemini, iconColor: "text-[#1A73E8]" },
      { name: "Qwen", Icon: IconQwen, iconColor: "text-[#4D6BFE]" },
      { name: "DeepSeek", Icon: IconDeepSeek, iconColor: "text-[#4D6BFE]" }
    ]
  },
  {
    group: "Frontend",
    skills: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" }
    ]
  },
  {
    group: "Backend",
    skills: [
      { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339939" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" }
    ]
  },
  {
    group: "Database",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" }
    ]
  },
  {
    group: "DevOps",
    skills: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
      { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639" },
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" }
    ]
  }
];

export function TechStack() {
  const allSkills = skillsAndTechnologies.flatMap(cat => cat.skills);

  // Split into two rows for a thicker marquee
  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half);

  // Repeat the arrays to create a seamless infinite loop
  const scrollRow1 = [...row1, ...row1, ...row1, ...row1];
  const scrollRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <Section className="border-b border-border bg-background overflow-hidden relative">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } /* Move exactly one set's width */
        }
        @keyframes marquee-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}} />

      <Reveal>
        <SectionHeader title="Technologies We Use" subtitle="Our core stack for building scalable, enterprise-grade AI solutions." />
      </Reveal>

      <Reveal delay={0.1} distance={30}>
        {/* Grid Graph Container */}
        <div className="border-y border-border shadow-sm overflow-hidden bg-border mt-8 flex flex-col gap-[1px] marquee-container relative group">

          {/* Left Dotted Graph Border */}
          <div className="absolute inset-y-0 left-0 w-6 md:w-8 bg-background z-20 pointer-events-none flex items-center justify-center">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `radial-gradient(circle at 1.5px 1.5px, currentColor 1.5px, transparent 1.5px)`,
              backgroundSize: '8px 8px',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 80%)',
              maskImage: 'linear-gradient(to right, transparent, black 80%)'
            }} />
          </div>

          {/* Right Dotted Graph Border */}
          <div className="absolute inset-y-0 right-0 w-6 md:w-8 bg-background z-20 pointer-events-none flex items-center justify-center">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `radial-gradient(circle at 1.5px 1.5px, currentColor 1.5px, transparent 1.5px)`,
              backgroundSize: '8px 8px',
              WebkitMaskImage: 'linear-gradient(to left, transparent, black 80%)',
              maskImage: 'linear-gradient(to left, transparent, black 80%)'
            }} />
          </div>

          {/* Subtle fade edges just inside the graph borders */}
          <div className="absolute inset-y-0 left-6 md:left-8 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-6 md:right-8 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

          {/* Row 1: Scrolling Left */}
          <div className="flex w-max animate-marquee-left gap-[1px]">
            {scrollRow1.map((skill, idx) => (
              <div
                key={`${skill.name}-${idx}`}
                className="bg-surface w-[140px] md:w-[160px] aspect-square flex flex-col items-center justify-center p-4 hover:bg-orange-50/30 transition-colors relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 z-10 relative">
                  {skill.Icon ? (
                    <skill.Icon className={`w-8 h-8 md:w-10 md:h-10 ${skill.iconColor || 'text-foreground'} group-hover:scale-110 transition-transform duration-300`} />
                  ) : (
                    <Image unoptimized src={skill.icon || ''} alt={skill.name} width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300" style={{ width: "auto", height: "auto" }} />
                  )}
                </div>

                <span className="text-[10px] md:text-xs font-semibold text-muted group-hover:text-primary transition-colors text-center z-10 relative">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex w-max animate-marquee-right gap-[1px]">
            {scrollRow2.map((skill, idx) => (
              <div
                key={`${skill.name}-${idx}`}
                className="bg-surface w-[140px] md:w-[160px] aspect-square flex flex-col items-center justify-center p-4 hover:bg-orange-50/30 transition-colors relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 z-10 relative">
                  {skill.Icon ? (
                    <skill.Icon className={`w-8 h-8 md:w-10 md:h-10 ${skill.iconColor || 'text-foreground'} group-hover:scale-110 transition-transform duration-300`} />
                  ) : (
                    <Image unoptimized src={skill.icon || ''} alt={skill.name} width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300" style={{ width: "auto", height: "auto" }} />
                  )}
                </div>

                <span className="text-[10px] md:text-xs font-semibold text-muted group-hover:text-primary transition-colors text-center z-10 relative">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </Reveal>
    </Section>
  );
}
