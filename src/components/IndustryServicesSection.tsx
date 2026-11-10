import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

import { services } from "@/data/servicesData";

interface IndustryServicesSectionProps {
  industryName?: string;
  cityName?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}

const IndustryServicesSection = ({
  industryName,
  cityName,
  eyebrow = "All Six Services",
  title,
  description,
}: IndustryServicesSectionProps) => {
  const location = cityName ? `${cityName}` : "the UAE";
  const subject = industryName ? `${industryName} businesses` : "businesses";

  return (
    <section className="section-padding bg-background border-t border-border/50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">{eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold">
            {title ?? `Every Service We Build for ${industryName ?? "Your Business"}`}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {description ??
              `One accountable partner for AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development. We scope what ${subject} in ${location} need most, then connect the pieces into a practical roadmap.`}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <span className="text-sm text-primary flex items-center gap-1">
                  Explore {service.title} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryServicesSection;
