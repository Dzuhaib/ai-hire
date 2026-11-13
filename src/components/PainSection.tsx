import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PainSystemsVisual } from "./visuals/LandingVisuals";

const painPoints = [
  "Your team spends hours every week on work software should be doing.",
  "Your website looks fine but does not bring in enough enquiries.",
  "You are invisible on Google and in AI search results.",
  "Your tools, data, and customer journeys do not talk to each other.",
];

export const PainSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <p className="editorial-rule mb-5 justify-center">The problem</p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold leading-tight">
            Growth Gets Stuck When Your{" "}
            <span className="text-primary">Systems Do Not Scale</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div className="relative">
            <PainSystemsVisual />
          </div>

          <div>
            <div className="border-y border-border/70 divide-y divide-border/70">
              {painPoints.map((point, index) => (
                <div key={index} className="flex gap-5 py-5">
                  <span className="font-serif text-xs font-semibold text-primary/70 pt-1 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <p className="mt-7 text-muted-foreground leading-relaxed">
              We fix the gaps across AI, automation, search, marketing, and software - so the business
              runs better as a whole, not just one channel at a time.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Explore our services <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                See your industry <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
