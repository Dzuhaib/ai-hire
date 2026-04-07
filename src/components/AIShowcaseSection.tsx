import Image from 'next/image';
import { Bot, MessageCircle, Users } from "lucide-react";
const aiShowcaseHero = "/assets/ai-showcase-hero.png";

export const AIShowcaseSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="label-tag mb-3">Meet Your AI Colleague</p>

          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6">
            Hire Your <span className="text-gradient">AI Colleague</span> Today
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your fully managed AI chatbot engages with customers naturally, answering questions and
            capturing leads 24/7. We install and handle everything—no technical skills needed.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
            <Image
              src={aiShowcaseHero}
              alt="AI chatbot assistant on laptop screen engaging with customers"
              width={1200}
              height={675}
              className="w-full aspect-video object-cover"
            />

            <div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-3 rounded-lg bg-card/95 border border-border/80">
              <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">"Hi! How can I help you today?"</span>
            </div>

            <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-accent">24/7 Available</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
          {[
            { label: "Instant Responses", desc: "No waiting, no delays" },
            { label: "Natural Conversation", desc: "Feels like talking to a human" },
            { label: "Never Takes a Break", desc: "Works while you sleep" },
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
