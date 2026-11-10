import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import type { Service } from "@/data/servicesData";
import { uaeLocations } from "@/data/locationData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServicePageProps {
  service: Service;
  canonical: string;
}

const ServicePage = ({ service }: ServicePageProps) => {
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-secondary/20">
        <div className="container-narrow relative z-10">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              {service.h1}
            </h1>
            <p className="text-lg md:text-xl text-primary font-medium mb-4">{service.tagline}</p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Link href="/contact">
                <Button size="lg" className="btn-primary group">
                  Get Started Today
                  <Zap className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  All Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background border-b border-border/50">
        <div className="container-narrow max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">What {service.title} Delivers</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{service.outcome}</p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
            Delivered by a dedicated AI automation agency in Dubai, this work combines AI automation services with
            hands-on engineering — the AI automation UAE companies actually keep running after handover.
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">What Is Included</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">Everything in {service.title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.features.map((feature, idx) => (
              <div key={idx} className="card-premium p-6 border-primary/30">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <h3 className="font-semibold">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-8">
            Every engagement is scoped in writing by our AI consultants in Abu Dhabi and Dubai, so you know your AI
            automation cost in the UAE before work starts — including extras like an AI chatbot for your website and
            AI SEO in Abu Dhabi that keeps you visible in Google and AI search.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background border-t border-border/50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Where We Deliver It</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">{service.title} Across the UAE</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {uaeLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/services/${service.slug}/${location.slug}`}
                className="px-4 py-2 text-sm rounded-full bg-card border border-border/50 hover:border-primary/30 hover:text-primary transition-all"
              >
                {service.title} in {location.city}
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="section-padding bg-muted/30 border-t border-b border-border/50">
        <div className="container-narrow text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Ready to Start with {service.title}?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tell us about your business and we will scope the {service.title.toLowerCase()} work that fits — a
            focused alternative to generic AI tools such as Levora AI.
          </p>
          <Link href="/contact">
            <Button size="lg" className="btn-primary group">
              Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
