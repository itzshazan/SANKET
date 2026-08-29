"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader } from "../ui/Section";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const ROW_1_TESTIMONIALS: Testimonial[] = [
  {
    id: "r1-1",
    quote:
      "When we started building Ace10x, we needed an affiliate management system that could actually scale with the brand's ambitions, not just tick a box. The team understood this from day one. They asked the right questions, moved fast, and delivered something clean and functional. It's rare to find a tech partner who treats your new venture like their own.",
    name: "Ashwini-K Aggarwal",
    role: "Chair, Semiconductor Skills Committee, ESSCI",
    avatar: "https://res.cloudinary.com/deht0dsks/image/upload/v1787914735/ashwani_agrawal_krxdrt.jpg",
  },
  {
    id: "r1-2",
    quote:
      "Building a marketplace and community platform together is no small task, there are a hundred moving parts. What stood out was how patiently they handled the complexity, without ever losing sight of the end user experience. It genuinely feels like working with a team that's invested in Bizowl's success, not just delivering a project.",
    name: "Prashant Shirohi",
    role: "Founder, Bizowl",
    avatar: "https://res.cloudinary.com/deht0dsks/image/upload/v1787914735/prashant_shirohi_drqjid.jpg",
  },
  {
    id: "r1-3",
    quote:
      "I came in with a fairly unclear picture of my tech requirements, honestly. What impressed me was how they took that ambiguity and shaped it into something real. Every solution they proposed felt thought through. I'm genuinely amazed at how capable this team is at turning ideas into working systems.",
    name: "Aryan Ghosh",
    role: "Founder & CEO, Mera Niwas",
    avatar: "https://res.cloudinary.com/deht0dsks/image/upload/v1787914735/Aryan_Ghosh_obbrl9.jpg",
  },
  {
    id: "r1-4",
    quote:
      "Patent design and drafting automation is a niche, technical space, and getting it right requires real precision. This team took the time to understand the nuances of our process before writing a single line of code. The result has saved us hours of manual work and reduced errors significantly. Impressive execution.",
    name: "Venkatesh Bharti",
    role: "Founder & CEO, VIIPS",
    avatar: "https://res.cloudinary.com/deht0dsks/image/upload/v1787914735/venkatesh_bharti_xtnquj.jpg",
  },
];

const ROW_2_TESTIMONIALS: Testimonial[] = [
  {
    id: "r2-1",
    quote:
      "I wanted an ecommerce website without the burden of ongoing operational costs, and honestly I wasn't sure it was possible. They built exactly that. Zero operational overhead, fully functional, and ready to grow with us. For a founder watching every rupee, this made a real difference.",
    name: "Nishant Kumar",
    role: "Founder, SilverButton",
    avatar: "https://res.cloudinary.com/deht0dsks/image/upload/v1787914735/nishant_kumar_de9oiw.jpg",
  },
  {
    id: "r2-2",
    quote:
      "Integrating a job and skill matching algorithm into an existing government ecosystem comes with its own layers of complexity, technical, procedural, and scale related. The team navigated all of it with professionalism and technical depth. Their contribution has strengthened our platform's ability to connect job seekers with the right opportunities.",
    name: "National Career Service (NCS)",
    role: "Ministry of Labour and Employment, Government of India",
    avatar: "https://res.cloudinary.com/deht0dsks/image/upload/v1787914735/ncs-small-logo_a6czxm.png",
  },
  {
    id: "r2-3",
    quote:
      "Being a developer myself, I don't impress easily when it comes to tech work. But this team completed my requirements with a level of understanding and speed that genuinely surprised me. They didn't just execute, they thought like engineers who cared about getting it right.",
    name: "Naveed Qadir",
    role: "Software Developer, MRIIF",
    avatar: "https://res.cloudinary.com/deht0dsks/image/upload/v1787914735/naveed_qadir_so6jav.jpg",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="w-[330px] sm:w-[400px] md:w-[450px] lg:w-[480px] shrink-0 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 bg-surface border border-border shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_16px_36px_rgba(255,102,0,0.08)] hover:-translate-y-0.5 flex flex-col justify-between select-none">
      {/* Quote */}
      <p className="text-[14px] sm:text-[15px] font-medium leading-relaxed text-foreground mb-6 sm:mb-7">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author Profile */}
      <div className="flex items-center gap-3.5 mt-auto pt-2 border-t border-border/40">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={44}
          height={44}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover shrink-0 ring-2 ring-border"
        />
        <div className="min-w-0">
          <h3 className="text-sm sm:text-[15px] font-bold text-foreground truncate">
            {testimonial.name}
          </h3>
          <p className="text-xs sm:text-[13px] text-muted truncate">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full py-16 sm:py-20 lg:py-24 bg-background text-foreground border-t border-border overflow-hidden"
    >
      {/* Embedded Marquee Animation Keyframes */}
      <style>{`
        @keyframes marquee-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-marquee-1 {
          display: flex;
          width: max-content;
          animation: marquee-scroll 42s linear infinite;
        }

        .animate-marquee-2 {
          display: flex;
          width: max-content;
          animation: marquee-scroll 48s linear infinite;
        }

        .marquee-track-wrapper:hover .animate-marquee-1,
        .marquee-track-wrapper:hover .animate-marquee-2 {
          animation-play-state: paused;
        }
      `}</style>

      {/* Section Header */}
      <SectionHeader
        title="What our clients say"
        subtitle="Real experiences from teams we've partnered with to turn ambitious ideas into impactful digital products."
        className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
      />

      {/* Infinite Horizontal Marquee Rows */}
      <div className="relative w-full overflow-hidden marquee-track-wrapper">
        
        {/* Soft edge gradient masks */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-l from-background to-transparent z-20" />

        <div className="flex flex-col gap-5 sm:gap-6">
          
          {/* Row 1: Continual Left Scroll */}
          <div className="overflow-hidden flex w-full">
            <div className="animate-marquee-1 flex gap-5 sm:gap-6 shrink-0">
              {[...ROW_1_TESTIMONIALS, ...ROW_1_TESTIMONIALS].map((item, idx) => (
                <TestimonialCard key={`row1-${item.id}-${idx}`} testimonial={item} />
              ))}
            </div>
          </div>

          {/* Row 2: Continual Left Scroll */}
          <div className="overflow-hidden flex w-full">
            <div className="animate-marquee-2 flex gap-5 sm:gap-6 shrink-0">
              {[...ROW_2_TESTIMONIALS, ...ROW_2_TESTIMONIALS].map((item, idx) => (
                <TestimonialCard key={`row2-${item.id}-${idx}`} testimonial={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
