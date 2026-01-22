import { motion } from "framer-motion";
import { Crown, Zap } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import aiSilver from "@/assets/ai-silver.png";
import aiGold from "@/assets/ai-gold.png";
import aiPlatinum from "@/assets/ai-platinum.png";
import aiDiamond from "@/assets/ai-diamond.png";

const tiers = [
  {
    name: "Silver",
    tier: "Starter",
    price: "£29",
    image: aiSilver,
    color: "from-slate-400 to-slate-300",
    borderColor: "border-slate-400/30",
    glowColor: "shadow-slate-400/20",
    description: "Perfect for small businesses getting started with AI",
  },
  {
    name: "Gold",
    tier: "Professional",
    price: "£79",
    image: aiGold,
    color: "from-amber-500 to-yellow-400",
    borderColor: "border-amber-400/30",
    glowColor: "shadow-amber-400/20",
    description: "For growing businesses needing advanced capabilities",
    popular: true,
  },
  {
    name: "Platinum",
    tier: "Business",
    price: "£149",
    image: aiPlatinum,
    color: "from-cyan-400 to-teal-300",
    borderColor: "border-cyan-400/30",
    glowColor: "shadow-cyan-400/20",
    description: "Enterprise-grade AI for established businesses",
  },
  {
    name: "Diamond",
    tier: "Enterprise",
    price: "Custom",
    image: aiDiamond,
    color: "from-violet-500 to-purple-400",
    borderColor: "border-violet-400/30",
    glowColor: "shadow-violet-400/20",
    description: "Bespoke AI solutions tailored to your needs",
  },
];

export const AITiersSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="ai-tiers" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
          >
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Choose Your AI Colleague</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-semibold mb-6"
          >
            Meet Your <span className="text-gradient">AI Team</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Each tier unlocks more powerful capabilities. Choose the AI colleague that fits your business needs.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group cursor-pointer ${tier.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              onClick={() => scrollToSection("#pricing")}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-amber-500 to-yellow-400 text-black rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`relative rounded-3xl overflow-hidden border ${tier.borderColor} bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl ${tier.glowColor}`}>
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-b ${tier.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative p-6">
                  {/* Image */}
                  <div className="relative mb-4 rounded-2xl overflow-hidden aspect-square">
                    <img 
                      src={tier.image} 
                      alt={`${tier.name} AI Assistant`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${tier.color} opacity-10`} />
                  </div>
                  
                  {/* Tier badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${tier.color} mb-3`}>
                    <span className="text-xs font-bold text-black">{tier.name}</span>
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-xl font-semibold mb-1">{tier.tier}</h3>
                  <p className="text-2xl font-bold text-gradient mb-2">{tier.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                  <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                  
                  {/* CTA */}
                  <button className="w-full py-2.5 px-4 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    Rent Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
