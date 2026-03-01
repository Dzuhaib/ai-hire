import { Crown, Zap, MessageCircle } from "lucide-react";
import aiSilverStatic from "@/assets/ai-silver-static.png";
import aiGoldStatic from "@/assets/ai-gold-static.png";
import aiPlatinumStatic from "@/assets/ai-platinum-static.png";
import aiDiamondStatic from "@/assets/ai-diamond-static.png";

const tiers = [
  {
    name: "Silver",
    tier: "Starter",
    price: "£29",
    image: aiSilverStatic,
    color: "from-slate-400 to-slate-300",
    borderColor: "border-slate-400/30",
    glowColor: "shadow-slate-400/20",
    description: "Affordable AI chatbot for small business UK",
    chatBubble: "How can I help you today?",
  },
  {
    name: "Gold",
    tier: "Professional",
    price: "£79",
    image: aiGoldStatic,
    color: "from-amber-500 to-yellow-400",
    borderColor: "border-amber-400/30",
    glowColor: "shadow-amber-400/20",
    description: "Lead generation chatbot for growing businesses",
    popular: true,
    chatBubble: "I'll handle your leads 24/7!",
  },
  {
    name: "Platinum",
    tier: "Business",
    price: "£149",
    image: aiPlatinumStatic,
    color: "from-cyan-400 to-teal-300",
    borderColor: "border-cyan-400/30",
    glowColor: "shadow-cyan-400/20",
    description: "Managed AI chatbot service for established businesses",
    chatBubble: "Let me boost your conversions.",
  },
  {
    name: "Diamond",
    tier: "Enterprise",
    price: "Custom",
    image: aiDiamondStatic,
    color: "from-violet-500 to-purple-400",
    borderColor: "border-violet-400/30",
    glowColor: "shadow-violet-400/20",
    description: "Bespoke AI solutions tailored to your needs",
    chatBubble: "Your dedicated AI partner.",
  },
];

export const AITiersSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="ai-tiers" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Choose Your AI Colleague</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6">
            Managed AI Chatbot <span className="text-gradient">Service Tiers</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each tier unlocks more powerful lead generation capabilities. Choose the managed AI chatbot that fits your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative group cursor-pointer ${tier.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              onClick={() => scrollToSection("#pricing")}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-amber-500 to-yellow-400 text-black rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`relative rounded-3xl overflow-hidden border ${tier.borderColor} bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl ${tier.glowColor}`}>
                <div className={`absolute -inset-1 bg-gradient-to-b ${tier.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative p-6">
                  <div className="relative mb-4 rounded-2xl overflow-hidden aspect-square">
                    <img
                      src={tier.image}
                      alt={`${tier.name} tier AI chatbot assistant`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${tier.color} opacity-10 pointer-events-none`} />
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 px-3 py-2 rounded-xl bg-card/90 backdrop-blur-sm border border-primary/20 shadow-lg">
                      <MessageCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-xs font-medium truncate">{tier.chatBubble}</span>
                    </div>
                  </div>
                  
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${tier.color} mb-3`}>
                    <span className="text-xs font-bold text-black">{tier.name}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-1">{tier.tier}</h3>
                  <p className="text-2xl font-bold text-gradient mb-2">{tier.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                  <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                  
                  <button className="w-full py-2.5 px-4 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
