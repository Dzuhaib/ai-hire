import Link from "next/link";
import { Compass, ClipboardList, Rocket, BarChart3, ArrowRight } from "lucide-react";
import { RoadmapVisual } from "./visuals/LandingVisuals";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn how your business works, where time is being lost, and what growth actually looks like for you.",
    icon: Compass,
    link: { text: "Book a free call", href: "/contact" },
  },
  {
    number: "02",
    title: "Strategy & Proposal",
    description: "You get a clear plan: the recommended services, scope, timeline, and the outcomes we will measure.",
    icon: ClipboardList,
    link: { text: "See our services", href: "/services" },
  },
  {
    number: "03",
    title: "Build & Launch",
    description: "We design, build, and test the work, then launch it with your team fully briefed and supported.",
    icon: Rocket,
    link: { text: "How we work", href: "/about" },
  },
  {
    number: "04",
    title: "Measure & Improve",
    description: "We track performance, fix what is not working, and keep improving the system as your business changes.",
    icon: BarChart3,
    link: { text: "View results", href: "/case-studies" },
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          <div>
            <p className="editorial-rule mb-5">Simple process</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-5 leading-tight">
              How We Turn Your Goals Into{" "}
              <span className="text-primary">Working Systems</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              No jargon, no endless discovery documents. We start with a conversation, agree on the
              outcome, and get to work.
            </p>
          </div>

          <div className="relative">
            <RoadmapVisual />
          </div>
        </div>

        <div className="border-t border-border/70 pt-10 md:pt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-serif text-xs font-semibold tracking-[0.14em] text-primary tabular-nums">
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card">
                    <step.icon className="w-4 h-4 text-primary" />
                  </div>
                </div>

                <h3 className="text-lg font-serif font-semibold mb-2.5">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                <Link
                  href={step.link.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  {step.link.text}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 text-sm text-muted-foreground">
          <span className="h-px w-8 bg-primary/60" />
          <span>
            <span className="font-medium text-foreground">One partner</span> across AI, automation,
            search, marketing, and software
          </span>
        </div>
      </div>
    </section>
  );
};
