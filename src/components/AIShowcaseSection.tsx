import { Bot, MessageCircle, Users } from "lucide-react";
import aiShowcaseHero from "@/assets/ai-showcase-hero.png";

export const AIShowcaseSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Meet Your AI Colleague</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6">
            Hire Your <span className="text-gradient">AI Colleague Today</span>
          </h2>
        
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your fully managed AI chatbot engages with customers naturally, answering questions and capturing leads 24/7. We install and handle everything—no technical skills needed.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-primary/20 bg-card/50 shadow-xl">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={aiShowcaseHero}
                alt="AI chatbot assistant on laptop screen engaging with customers"
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 flex items-center gap-3 px-4 py-3 rounded-2xl bg-card/90 backdrop-blur-sm border border-primary/20 shadow-lg">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">"Hi! How can I help you today?"</span>
              </div>
              
              <div className="absolute bottom-8 right-8 flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary">24/7 Available</span>
              </div>
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
