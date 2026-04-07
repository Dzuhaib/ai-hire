import Image from 'next/image';
import { Crown, Zap, MessageCircle } from "lucide-react";
const aiSilverStatic = "/assets/ai-silver-static.png";
const aiGoldStatic = "/assets/ai-gold-static.png";
const aiPlatinumStatic = "/assets/ai-platinum-static.png";
const aiDiamondStatic = "/assets/ai-diamond-static.png";

const tiers = [
  {
    name: "Silver",
    tier: "Starter",
    price: "£29",
    image: aiSilverStatic,
    description: "Affordable AI chatbot for small business UK",
    chatBubble: "How can I help you today?",
  },
  {
    name: "Gold",
    tier: "Professional",
    price: "£79",
    image: aiGoldStatic,
    description: "Lead generation chatbot for growing businesses",
    popular: true,
    chatBubble: "I'll handle your leads 24/7!",
  },
  {
    name: "Platinum",
    tier: "Business",
    price: "£149",
    image: aiPlatinumStatic,
    description: "Managed AI chatbot service for established businesses",
    chatBubble: "Let me boost your conversions.",
  },
  {
    name: "Diamond",
    tier: "Enterprise",
    price: "Custom",
    image: aiDiamondStatic,
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
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="label-tag mb-3">Choose Your AI Colleague</p>

          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6">
            Managed AI Chatbot <span className="text-gradient">Service Tiers</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each tier unlocks more powerful lead generation capabilities. Choose the managed AI chatbot
            that fits your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative group cursor-pointer ${tier.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
              onClick={() => scrollToSection("#pricing")}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    <Crown className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`relative rounded-xl overflow-hidden border bg-card transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[var(--shadow-lift)] ${
                  tier.popular ? "border-primary/45 shadow-[var(--shadow-primary)]" : "border-border"
                }`}
              >
                <div className="p-5">
                  {/* Image */}
                  <div className="relative mb-4 rounded-lg overflow-hidden aspect-square">
                    <Image
                      src={tier.image}
                      alt={`${tier.name} tier AI chatbot assistant`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-card/95 border border-border/80">
                      <MessageCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="text-xs font-medium truncate">{tier.chatBubble}</span>
                    </div>
                  </div>

                  {/* Label */}
                  <span className="label-tag">{tier.name}</span>

                  <h3 className="text-lg font-serif font-semibold mt-1 mb-0.5">{tier.tier}</h3>
                  <p className="text-2xl font-serif font-bold text-primary mb-1">
                    {tier.price}
                    {tier.price !== "Custom" && <span className="text-sm font-sans font-normal text-muted-foreground">/mo</span>}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>

                  <button className="w-full py-2.5 px-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
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
