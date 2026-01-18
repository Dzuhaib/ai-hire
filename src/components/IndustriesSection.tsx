import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { Sparkles, UtensilsCrossed, Home, ShoppingBag, ArrowRight, CheckCircle2, Clock, Zap } from "lucide-react";

const industries = [
  {
    title: "Restaurants",
    icon: UtensilsCrossed,
    headline: "Never Miss a Reservation Again",
    description: "Every question a customer asks and doesn't get answered is a lost booking. Your AI colleague handles bookings, answers menu queries, and takes orders — even at 2 AM.",
    benefits: [
      "Handle reservations 24/7",
      "Answer menu & allergy questions instantly",
      "Process takeaway orders automatically"
    ],
    stat: "40% more bookings",
    gradient: "from-orange-500/20 to-red-500/20",
    accentColor: "text-orange-400",
  },
  {
    title: "Real Estate",
    icon: Home,
    headline: "Close More Deals While You Sleep",
    description: "Your competitors are already responding instantly. Every unanswered inquiry is a property someone else sells. Your AI colleague qualifies leads and schedules viewings around the clock.",
    benefits: [
      "Qualify leads automatically",
      "Schedule viewings 24/7",
      "Answer property questions instantly"
    ],
    stat: "3x more viewings",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "text-blue-400",
  },
  {
    title: "E-commerce",
    icon: ShoppingBag,
    headline: "Convert Browsers Into Buyers",
    description: "Humans need breaks — your AI colleague does not. It answers every product question, tracks orders, and helps customers buy, any time of the day.",
    benefits: [
      "Answer product questions 24/7",
      "Track orders automatically",
      "Reduce cart abandonment"
    ],
    stat: "25% more sales",
    gradient: "from-purple-500/20 to-pink-500/20",
    accentColor: "text-purple-400",
  },
];

export const IndustriesSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="industries" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)" }}
        animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)" }}
        animate={{ x: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trained For Your Industry</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4"
          >
            This Is <span className="text-gradient">Your AI Colleague</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Not just a chatbot. A real team member trained for your business, your customers, and your industry.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className="group"
            >
              <MagneticButton
                className="w-full text-left h-full"
                onClick={() => scrollToSection("#pricing")}
              >
                <div className="relative h-full p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[1px] rounded-3xl bg-card/95" />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 animate-gradient-x" style={{ padding: '1px' }} />
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} border border-primary/20 mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <industry.icon className={`w-8 h-8 ${industry.accentColor}`} />
                    </motion.div>

                    {/* Title & Headline */}
                    <div className="mb-4">
                      <span className={`text-sm font-medium ${industry.accentColor} mb-2 block`}>{industry.title}</span>
                      <h3 className="text-xl font-serif font-semibold text-foreground">
                        {industry.headline}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                      {industry.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-3 mb-6">
                      {industry.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stat badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                        <Zap className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-medium text-primary">{industry.stat}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </MagneticButton>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">
                Every day without instant responses is a day your competitors take your customers.
              </span>
            </div>
            <MagneticButton
              className="btn-primary text-sm px-6 py-3 whitespace-nowrap"
              onClick={() => scrollToSection("#pricing")}
            >
              Change That Today
              <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};