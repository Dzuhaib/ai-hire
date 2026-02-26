import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageMeta } from "@/components/PageMeta";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getIndustryCityData, getCitiesForIndustry } from "@/data/industryCityData";
import { getIndustryBySlug } from "@/data/industryData";
import NotFound from "./NotFound";
import {
  Bot, ArrowRight, Zap, CheckCircle, Users, Shield, Clock,
  MessageCircle, MapPin, ChevronRight
} from "lucide-react";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const IndustryCityPage = () => {
  const { industry: industrySlug, city: citySlug } = useParams<{ industry: string; city: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [industrySlug, citySlug]);

  const cityData = useMemo(
    () => (industrySlug && citySlug ? getIndustryCityData(industrySlug, citySlug) : undefined),
    [industrySlug, citySlug]
  );

  const parentIndustry = useMemo(
    () => (industrySlug ? getIndustryBySlug(industrySlug) : undefined),
    [industrySlug]
  );

  const otherCities = useMemo(
    () => (industrySlug ? getCitiesForIndustry(industrySlug).filter(c => c.citySlug !== citySlug) : []),
    [industrySlug, citySlug]
  );

  if (!cityData || !parentIndustry) return <NotFound />;

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aivized.com" },
          { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.aivized.com/industries" },
          { "@type": "ListItem", position: 3, name: parentIndustry.industry, item: `https://www.aivized.com/industries/${industrySlug}` },
          { "@type": "ListItem", position: 4, name: cityData.cityName, item: `https://www.aivized.com/industries/${industrySlug}/${citySlug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: cityData.faqs.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageMeta
        title={cityData.metaTitle}
        description={cityData.metaDescription}
        keywords={cityData.metaKeywords}
        canonical={`https://www.aivized.com/industries/${industrySlug}/${citySlug}`}
        schema={combinedSchema}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-aura">
        <div className="container-narrow relative z-10">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/industries">Industries</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to={`/industries/${industrySlug}`}>{parentIndustry.industry}</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{cityData.cityName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{cityData.cityName}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              {cityData.h1}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {cityData.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link to="/pricing">
                <Button size="lg" className="btn-primary group">
                  Get Started Today
                  <Zap className="w-4 h-4 ml-2 group-hover:animate-pulse" />
                </Button>
              </Link>
              <Link to={`/industries/${industrySlug}`}>
                <Button variant="outline" size="lg">
                  See All {parentIndustry.industry} Features
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" />Industry-trained AI</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />24/7 availability</span>
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" />GDPR compliant</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why section */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Why {cityData.cityName}?</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              {parentIndustry.industry} AI Chatbot <span className="text-gradient">Built for {cityData.cityName}</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {cityData.localFact} Our managed AI chatbot is trained for {parentIndustry.industry.toLowerCase()} businesses and handles customer enquiries around the clock.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {parentIndustry.stats.map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                className="text-center p-6 rounded-xl bg-card border border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key features from parent industry */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Key Features</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              What Your {cityData.cityName} AI Chatbot Does
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {parentIndustry.solutions.map((solution, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-xl bg-card border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-semibold">{solution.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Common Questions About AI Chatbots for {parentIndustry.industry} in {cityData.cityName}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {cityData.faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="card-premium px-6 border-border/50">
                  <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Other cities for this industry */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">More Cities</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              {parentIndustry.industry} AI Chatbot in <span className="text-gradient">Other UK Cities</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {otherCities.map(c => (
              <Link
                key={c.citySlug}
                to={`/industries/${c.industrySlug}/${c.citySlug}`}
                className="px-4 py-2 text-sm rounded-full bg-card border border-border/50 hover:border-primary/30 hover:text-primary transition-all"
              >
                {c.cityName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Ready to Get Your {cityData.cityName} {parentIndustry.industry} AI Chatbot?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe, share your website details, and we'll install your AI employee within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link to="/pricing">
                <Button size="lg" className="btn-primary group">
                  View Pricing Plans <Zap className="w-4 h-4 ml-2 group-hover:animate-pulse" />
                </Button>
              </Link>
              <a href="mailto:aivized.com@gmail.com">
                <Button variant="outline" size="lg">
                  Contact Sales <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" />From £29/month</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" />No long-term contracts</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" />24-hour setup</span>
            </div>
          </motion.div>
        </div>
      </section>

      <RelatedPagesSection currentPage="industry" currentSlug={industrySlug} />
      <Footer />
    </div>
  );
};

export default IndustryCityPage;
