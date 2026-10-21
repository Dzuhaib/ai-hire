import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/servicesData";

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="label-tag mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
            Six Services, <span className="text-gradient">One Growth Partner</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From custom AI systems to high-performing websites, we cover the technology and marketing your
            business needs to grow - and we stay involved after launch.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <service.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8 flex-grow">
                {service.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`/services#${service.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Explore {service.title} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            See all services in detail <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
