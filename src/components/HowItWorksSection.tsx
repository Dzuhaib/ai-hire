import Image from 'next/image';
import Link from "next/link";
import { Compass, ClipboardList, Rocket, BarChart3, ArrowRight } from "lucide-react";
const howItWorksHero = "/assets/how-it-works-hero.png";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn how your business works, where time is being lost, and what growth actually looks like for you.",
    icon: Compass,
    link: { text: "Book a call", href: "/contact" },
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
    <section id="how-it-works" className="section-padding bg-secondary/20">
      <div className="container-narrow">
        {/* Section Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="label-tag mb-4">Simple Process</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
              How We Turn Your Goals Into{" "}
              <span className="text-gradient">Working Systems</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              No jargon, no endless discovery documents. We start with a conversation, agree on the
              outcome, and get to work.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
            <Image
              src={howItWorksHero}
              alt="Team reviewing a digital growth strategy on a tablet"
              width={1200}
              height={675}
              className="w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-lg bg-card/95 border border-border/80">
              <Rocket className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">From first call to launch, without the agency runaround</span>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              <div className="h-full bg-card border border-border rounded-xl p-7 transition-all duration-300 hover:border-primary/35 hover:shadow-[var(--shadow-lift)]">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/8 border border-border flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-5xl font-serif font-bold text-foreground/6 leading-none select-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{step.description}</p>
                <Link href={step.link.href} className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                  {step.link.text}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Connector arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 translate-x-full z-10">
                  <div className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">One partner</span> across AI, automation, search, marketing, and software
          </p>
        </div>
      </div>
    </section>
  );
};
