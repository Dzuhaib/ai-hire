import Image from 'next/image';
import { Bot, Workflow, Globe } from "lucide-react";
const aiShowcaseHero = "/assets/ai-showcase-hero.png";

export const AIShowcaseSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="label-tag mb-3">Connected Expertise</p>

          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6">
            One Team Behind Your <span className="text-gradient">Whole Digital Stack</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most agencies solve one piece of the puzzle. We connect your AI systems, automations, search
            visibility, marketing, and software so each part makes the others work harder.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
            <Image
              src={aiShowcaseHero}
              alt="Business dashboard showing connected AI systems and automation"
              width={1200}
              height={675}
              className="w-full aspect-video object-cover"
            />

            <div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-3 rounded-lg bg-card/95 border border-border/80">
              <Bot className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">Systems that work together</span>
            </div>

            <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20">
              <Workflow className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-accent">Built to scale</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
          {[
            { label: "AI & Automation", desc: "Custom systems that handle enquiries, data, and repetitive work" },
            { label: "Search & Marketing", desc: "SEO, GEO, and campaigns that bring the right people to you" },
            { label: "Web & Software", desc: "Websites, web apps, and desktop tools built around your operation" },
          ].map((item, index) => (
            <div key={index} className="text-center p-4">
              <div className="w-2 h-2 rounded-full bg-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-1">{item.label}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
