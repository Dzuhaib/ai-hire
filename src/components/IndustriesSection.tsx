import { motion } from "framer-motion";
import { UtensilsCrossed, Home, ShoppingBag, ArrowRight, CheckCircle2, Clock } from "lucide-react";

const industries = [
  {
    title: "Restaurants",
    icon: UtensilsCrossed,
    headline: "Never Miss a Reservation Again",
    description:
      "Every question a customer asks and doesn't get answered is a lost booking. Your AI colleague handles bookings, answers menu queries, and takes orders — even at 2 AM.",
    benefits: [
      "Handle reservations 24/7",
      "Answer menu & allergy questions instantly",
      "Process takeaway orders automatically",
    ],
    stat: "40% more bookings",
  },
  {
    title: "Real Estate",
    icon: Home,
    headline: "Close More Deals While You Sleep",
    description:
      "Your competitors are already responding instantly. Every unanswered inquiry is a property someone else sells. Your AI colleague qualifies leads and schedules viewings around the clock.",
    benefits: [
      "Qualify leads automatically",
      "Schedule viewings 24/7",
      "Answer property questions instantly",
    ],
    stat: "3x more viewings",
  },
  {
    title: "E-commerce",
    icon: ShoppingBag,
    headline: "Convert Browsers Into Buyers",
    description:
      "Humans need breaks — your AI colleague does not. It answers every product question, tracks orders, and helps customers buy, any time of the day.",
    benefits: [
      "Answer product questions 24/7",
      "Track orders automatically",
      "Reduce cart abandonment",
    ],
    stat: "25% more sales",
  },
];

export const IndustriesSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="industries" className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="label-tag mb-3"
          >
            Trained For Your Industry
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4"
          >
            This Is <span className="text-gradient">Your AI Colleague</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Not just a chatbot. A real team member trained for your business, your customers, and your industry.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group cursor-pointer"
              onClick={() => scrollToSection("#pricing")}
            >
              <div className="relative h-full p-8 rounded-xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/35 hover:shadow-[var(--shadow-lift)]">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-primary/8 border border-border flex items-center justify-center mb-6">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Industry label + Headline */}
                <p className="label-tag mb-2">{industry.title}</p>
                <h3 className="text-xl font-serif font-semibold mb-4">{industry.headline}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{industry.description}</p>

                {/* Benefits */}
                <ul className="space-y-2.5 mb-6">
                  {industry.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Stat + Arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm font-medium text-primary">{industry.stat}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">
                Every day without instant responses is a day your competitors take your customers.
              </span>
            </div>
            <button
              className="btn-primary text-sm px-6 py-3 whitespace-nowrap"
              onClick={() => scrollToSection("#pricing")}
            >
              Rent Your AI Colleague
              <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
