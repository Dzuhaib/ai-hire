import { motion } from "framer-motion";
import { UtensilsCrossed, Home, ShoppingBag, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

const industries = [
  {
    title: "Hospitality & Local Business",
    icon: UtensilsCrossed,
    headline: "More Bookings, Less Admin",
    description:
      "A fast website, local SEO, and automated bookings and reminders. We connect the customer journey from first search to repeat visit.",
    benefits: [
      "Conversion-focused website and booking flow",
      "Local SEO and Google Business visibility",
      "Automated reminders and review requests",
    ],
    stat: "Built for footfall and repeat custom",
  },
  {
    title: "Professional Services",
    icon: Home,
    headline: "A Pipeline You Can Rely On",
    description:
      "AI-assisted enquiry handling, CRM automation, and search visibility that positions your expertise in front of the right clients.",
    benefits: [
      "Lead qualification and follow-up automation",
      "SEO and GEO for high-intent searches",
      "Proposal, onboarding, and reporting workflows",
    ],
    stat: "Less admin, more billable time",
  },
  {
    title: "E-commerce & Retail",
    icon: ShoppingBag,
    headline: "Convert More of Your Traffic",
    description:
      "Product-aware AI support, performance improvements, and marketing campaigns that recover abandoned carts and grow repeat revenue.",
    benefits: [
      "AI product and order support",
      "Speed, SEO, and conversion optimisation",
      "Email, paid, and retention campaigns",
    ],
    stat: "Joined-up storefront and marketing",
  },
];

export const IndustriesSection = () => {
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
            Built Around Your Business
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4"
          >
            Services Shaped by <span className="text-gradient">How You Operate</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Every sector has different customers, workflows, and pressure points. We combine the right mix
            of AI, automation, search, marketing, and software for yours.
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
              className="group"
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
                  <Link href="/industries" aria-label={`See ${industry.title} services`}>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
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
                Not sure where to start? Tell us the problem and we will recommend the right mix.
              </span>
            </div>
            <Link
              href="/contact"
              className="btn-primary text-sm px-6 py-3 whitespace-nowrap"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
