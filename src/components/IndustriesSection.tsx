import { motion } from "framer-motion";
import { UtensilsCrossed, Home, ShoppingBag, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";
import { IndustryVisual } from "./visuals/LandingVisuals";

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
    <section id="industries" className="section-padding surface-warm border-y border-border/50">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[1fr_0.75fr] gap-8 lg:gap-16 items-end mb-12 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="editorial-rule mb-5">Built around your business</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold leading-tight max-w-2xl">
              Services Shaped by <span className="text-primary">How You Operate</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-muted-foreground leading-relaxed lg:pb-1"
          >
            Every sector has different customers, workflows, and pressure points. We combine the right
            mix of AI, automation, search, marketing, and software for yours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <motion.article
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group card-premium flex flex-col"
            >
              <div className="relative h-[270px] overflow-hidden border-b border-border/60 surface-paper p-4">
                <IndustryVisual
                  variant={index === 0 ? "hospitality" : index === 1 ? "professional" : "ecommerce"}
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="mb-2 flex items-center justify-between">
                  <p className="label-tag">{industry.title}</p>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface-warm">
                    <industry.icon className="w-3.5 h-3.5 text-primary" />
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{industry.headline}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {industry.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {industry.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="text-sm font-medium text-primary">{industry.stat}</span>
                  <Link href="/industries" aria-label={`See ${industry.title} services`}>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-xl border border-border bg-card px-6 py-5"
        >
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm text-muted-foreground">
              Not sure where to start? Tell us the problem and we will recommend the right mix.
            </span>
          </div>
          <Link href="/contact" className="btn-primary text-sm px-6 py-3 whitespace-nowrap">
            Book a Free Consultation
            <ArrowRight className="w-4 h-4 ml-2 inline-block" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
