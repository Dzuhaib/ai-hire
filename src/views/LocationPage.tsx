"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Search,
  Workflow,
  Code2,
  Megaphone,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getLocationBySlug, uaeLocations } from "@/data/locationData";
import { getLocationFaqs } from "@/data/locationContent";
import { services } from "@/data/servicesData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import NotFound from "./NotFound";

// Shared hero image for UAE city pages until city-specific imagery is available
const cityHeroImage = "/assets/locations/ai-support.png";

const cityImages: Record<string, string> = {
  dubai: cityHeroImage,
  "abu-dhabi": cityHeroImage,
  sharjah: cityHeroImage,
  ajman: cityHeroImage,
  "ras-al-khaimah": cityHeroImage,
  fujairah: cityHeroImage,
  "umm-al-quwain": cityHeroImage,
  "al-ain": cityHeroImage,
};

const growthPaths = [
  {
    icon: Search,
    title: "Get found by better-fit customers",
    description:
      "Technical SEO, content, GEO, and paid campaigns that connect your business to people already looking for what you offer.",
    links: [
      { label: "SEO & GEO", href: "/services#seo-geo" },
      { label: "Digital Marketing", href: "/services#digital-marketing" },
    ],
  },
  {
    icon: Workflow,
    title: "Remove manual work from the team",
    description:
      "AI systems and automations that handle enquiries, follow-ups, onboarding, reporting, and the repetitive work nobody enjoys.",
    links: [
      { label: "AI Systems", href: "/services#ai-systems" },
      { label: "Automations", href: "/services#automations" },
    ],
  },
  {
    icon: Code2,
    title: "Build a stronger digital foundation",
    description:
      "Fast websites, e-commerce, booking flows, and custom desktop tools that fit how your business actually operates.",
    links: [
      { label: "Web Development", href: "/services#web-development" },
      { label: "Desktop Software", href: "/services#desktop-software-development" },
    ],
  },
];

const reasons = [
  "Six connected services instead of handing your business to several disconnected suppliers",
  "A written scope, timeline, and price before work starts",
  "Direct access to the people doing the work",
  "Systems built to fit your existing website, CRM, and internal tools",
  "Clear documentation and a clean handover, so you are never locked in",
  "Optional ongoing support for monitoring, maintenance, and improvement",
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "We look at how enquiries, operations, and your current digital setup work together, then identify the bottleneck worth solving first.",
  },
  {
    title: "Scope & plan",
    description:
      "You receive a written scope, timeline, and fixed price. We agree what is included and what happens after launch before work starts.",
  },
  {
    title: "Build & launch",
    description:
      "We design, build, integrate, and test the work in stages, with clear checkpoints so you can see progress and give feedback early.",
  },
  {
    title: "Support & improve",
    description:
      "After handover we can monitor, maintain, and improve the system as your business changes. Support is optional and transparent.",
  },
];

const LocationPage = () => {
  const params = useParams<{ city?: string | string[] }>();
  const city = Array.isArray(params.city) ? params.city[0] : params.city;
  const location = city ? getLocationBySlug(city) : undefined;

  const heroImage = useMemo(() => {
    if (!city) return cityHeroImage;
    return cityImages[city] || cityHeroImage;
  }, [city]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [city]);

  if (!location) {
    return <NotFound />;
  }

  const faqs = getLocationFaqs(location.city);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-secondary/20">
        <div className="container-narrow relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {location.city}, {location.region}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
                AI, Automation &amp; Digital Growth in {location.city}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                One partner for AI systems, automations, SEO and GEO, digital marketing, web development,
                and desktop software. Built for {location.city} businesses that want practical improvements,
                clear scope, and support after launch.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <Button size="lg" className="btn-primary group" onClick={() => scrollToSection("#services")}>
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
                <Image
                  src={heroImage}
                  alt={`Digital services for businesses in ${location.city}`}
                  width={1200}
                  height={675}
                  className="w-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-card/95 border border-border/80"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Six connected services</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-md bg-card/90 text-foreground/80 font-medium border border-border/60">
                    Remote delivery
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background border-b border-border/50">
        <div className="container-narrow max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
              One partner, six services
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">
              A joined-up approach for {location.city} businesses
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Most business problems are not solved by one tool. A slow website, missed enquiries, manual
              admin, weak search visibility, and disconnected systems usually share the same root cause. We
              look at the whole picture, then deliver the mix of AI, automation, search, marketing, and
              software that moves the business forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-muted/30 scroll-mt-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">What We Deliver</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Services available in {location.city}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Start with the service that solves the most urgent problem, or combine several into a single
              roadmap.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-premium p-6 flex flex-col"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-primary mb-3">{service.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Explore {service.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth paths */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Where We Usually Start</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Three common starting points
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {growthPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="card-premium p-6"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <path.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3">{path.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{path.description}</p>
                <div className="flex flex-wrap gap-2">
                  {path.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-2.5 py-1 text-xs rounded-md bg-secondary text-muted-foreground border border-border/60 hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Why AIVized</p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Why {location.city} businesses work with us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {location.city} has a broad business community, from independent retailers and hospitality
                venues to professional practices, clinics, and online brands. We bring the strategy, build,
                and ongoing support together in one accountable team.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Population: {location.population}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {location.region}
                </span>
              </div>
            </motion.div>

            <div className="space-y-3">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card/60 border border-border/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">A clear four-step process</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="card-premium p-6 relative"
              >
                <div className="absolute top-4 right-4 text-4xl font-serif font-bold text-primary/10">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas + map */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Areas We Serve</p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Supporting businesses across {location.city}
              </h2>
              <p className="text-muted-foreground mb-6">
                We work with businesses across {location.city} and the wider {location.region} area. Delivery
                is remote, with scheduled calls and clear checkpoints throughout the project.
              </p>
              <div className="flex flex-wrap gap-2">
                {location.serviceAreas.map((area, index) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border/50 text-sm"
                  >
                    <MapPin className="w-3 h-3 text-primary" />
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-border/50 shadow-lg"
            >
              <iframe
                src={location.mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${location.city}`}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other locations */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">UAE Coverage</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">Services across the UAE</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {uaeLocations
              .filter((loc) => loc.slug !== location.slug)
              .sort((a, b) => {
                const distA = Math.hypot(
                  a.coordinates.lat - location.coordinates.lat,
                  a.coordinates.lng - location.coordinates.lng
                );
                const distB = Math.hypot(
                  b.coordinates.lat - location.coordinates.lat,
                  b.coordinates.lng - location.coordinates.lng
                );
                return distA - distB;
              })
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                  className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {loc.city}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Working with AIVized in {location.city}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="card-premium px-6 border-border/50"
                >
                  <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related blog */}
      {location.relatedBlogSlug && (
        <section className="section-padding">
          <div className="container-narrow">
            <div className="card-premium p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Megaphone className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-1">Local guide</p>
                <h2 className="font-serif font-semibold text-xl">
                  AI, automation, and digital growth in {location.city}
                </h2>
              </div>
              <Link
                href={`/blog/${location.relatedBlogSlug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Read the guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section-padding bg-secondary/20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
              Ready to improve how your {location.city} business runs and grows?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us what is slowing the business down. We will recommend the right mix of services and give
              you a clear next step, with no obligation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/contact">
                <Button size="lg" className="btn-primary group">
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  View All Services
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Fixed written scope
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Remote delivery across the UAE
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Optional ongoing support
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationPage;
