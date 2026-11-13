import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import type { IndustryData } from "@/data/industryData";
import type { Service } from "@/data/servicesData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IndustryServicePageProps {
  industry: IndustryData;
  service: Service;
  canonical: string;
}

const IndustryServicePage = ({ industry, service }: IndustryServicePageProps) => {
  const faqs = industry.faqs;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-secondary/20">
        <div className="container-narrow relative z-10">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Industry &amp; Service</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-6">
              {industry.industry} + {service.title} in the UAE
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {service.description}
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              {industry.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Link href="/contact">
                <Button size="lg" className="btn-primary group">
                  Get Started Today
                  <Zap className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href={`/industries/${industry.slug}`}>
                <Button variant="outline" size="lg">
                  All {industry.industry} Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background border-b border-border/50">
        <div className="container-narrow max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-semibold mb-6">
            Why {industry.industry} Needs {service.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            {service.outcome} {industry.description}
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Industry Solutions</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">How AIVized Helps {industry.industry}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {industry.solutions.map((solution, idx) => (
              <div key={idx} className="card-premium p-6 border-primary/30">
                <div className="flex items-start gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <h3 className="font-semibold">{solution.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background border-t border-border/50">
        <div className="container-narrow max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">Questions About {service.title} for {industry.industry}</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="card-premium p-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30 border-t border-b border-border/50">
        <div className="container-narrow text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">
            Ready for {service.title} for {industry.industry}?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tell us about your {industry.industry.toLowerCase()} business and we will scope the {service.title.toLowerCase()} work that fits.
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

export default IndustryServicePage;
