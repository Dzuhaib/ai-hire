import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/servicesData";
import { ServiceVisual } from "./visuals/LandingVisuals";

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding surface-warm border-y border-border/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[1fr_0.75fr] gap-8 lg:gap-16 items-end mb-12 md:mb-14"
        >
          <div>
            <p className="editorial-rule mb-5">What we do</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold leading-tight max-w-2xl">
              Six Services, <span className="text-primary">One Growth Partner</span>
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed lg:pb-1">
            From custom AI systems to high-performing websites, we cover the technology and marketing
            your business needs to grow - and we stay involved after launch.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group card-premium flex flex-col"
            >
              <div className="relative h-[270px] overflow-hidden border-b border-border/60 surface-paper p-4">
                <ServiceVisual slug={service.slug} />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="mb-2.5 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface-warm">
                    <service.icon className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <h3 className="text-xl font-serif font-semibold">{service.title}</h3>
                  <span className="ml-auto font-serif text-[0.68rem] font-semibold tracking-[0.14em] text-muted-foreground/50 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services#${service.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Explore {service.title} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 flex justify-center"
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
