import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

/**
 * Internal links section for homepage SEO.
 * Strengthens crawl paths to /locations and /industries hubs.
 */
export const InternalLinksSection = () => {
  const links = [
    {
      title: "Managed AI Chatbot by Location",
      description: "Lead generation chatbot for UK small businesses—from London to Glasgow.",
      href: "/locations",
      icon: MapPin,
      items: ["London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Edinburgh"],
    },
    {
      title: "Managed AI Chatbot by Industry",
      description: "Industry-trained AI chatbot for lead capture. We install everything.",
      href: "/industries",
      icon: Briefcase,
      items: ["Restaurants", "Real Estate", "E-Commerce"],
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Explore Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold">
            Find the Right <span className="text-gradient">Managed AI Chatbot</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={link.href}
                className="group block h-full p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {link.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {link.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                    View All →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
