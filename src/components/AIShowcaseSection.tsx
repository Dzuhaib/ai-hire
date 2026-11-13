import { Bot, Workflow, Globe } from "lucide-react";
import { ConnectedStackVisual } from "./visuals/LandingVisuals";

const pillars = [
  {
    icon: Bot,
    label: "AI & Automation",
    desc: "Custom systems that handle enquiries, data, and repetitive work",
  },
  {
    icon: Globe,
    label: "Search & Marketing",
    desc: "SEO, GEO, and campaigns that bring the right people to you",
  },
  {
    icon: Workflow,
    label: "Web & Software",
    desc: "Websites, web apps, and desktop tools built around your operation",
  },
];

export const AIShowcaseSection = () => {
  return (
    <section className="section-padding surface-warm">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="editorial-rule mb-5">Connected expertise</p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-5 leading-tight">
              One Team Behind Your{" "}
              <span className="text-primary">Whole Digital Stack</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Most agencies solve one piece of the puzzle. We connect your AI systems, automations,
              search visibility, marketing, and software so each part makes the others work harder.
            </p>

            <div className="border-t border-border/70">
              {pillars.map((item, index) => (
                <div key={item.label} className="flex gap-4 py-5 border-b border-border/70">
                  <span className="font-serif text-xs font-semibold text-primary/70 pt-1 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon className="w-4 h-4 text-primary" />
                      <h3 className="font-semibold text-sm">{item.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <ConnectedStackVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
