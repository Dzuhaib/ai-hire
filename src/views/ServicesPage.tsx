"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCTASection } from "@/components/FinalCTASection";
import { services } from "@/data/servicesData";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-secondary/20">
          <div className="container-narrow relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">Our Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
                AI, Automation &amp; Digital Growth{" "}
                <span className="text-gradient">Under One Roof</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Six connected services for businesses that want to grow without adding more manual work.
                Use one service or combine several - we scope the work around your goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary text-sm">
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </Link>
                <Link href="/case-studies" className="btn-secondary text-sm">
                  See Client Results
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Index */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="flex flex-wrap justify-center gap-2 mb-14">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="px-4 py-2 rounded-full text-sm border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <Link
                    href={`#${service.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-lift)]"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-primary/80 mb-3">{service.tagline}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-5">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="pb-8">
          <div className="container-narrow space-y-6">
            {services.map((service, index) => (
              <motion.article
                key={service.slug}
                id={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`scroll-mt-28 rounded-2xl border border-border p-8 md:p-12 ${
                  index % 2 === 0 ? "bg-card" : "bg-secondary/30"
                }`}
              >
                <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="label-tag">Service {String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-3">
                      {service.title}
                    </h2>
                    <p className="text-primary font-medium mb-5">{service.tagline}</p>
                    <div className="flex items-start gap-3 p-5 rounded-xl bg-primary/5 border border-primary/20">
                      <Quote className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.outcome}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                      What is included
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      Discuss {service.title} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <p className="label-tag mb-3">How We Work</p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                A Simple, <span className="text-gradient">Accountable Process</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  text: "A short call to understand the business, the bottleneck, and the outcome you need.",
                },
                {
                  step: "02",
                  title: "Proposal",
                  text: "A written scope with deliverables, timeline, and fixed pricing. No vague estimates.",
                },
                {
                  step: "03",
                  title: "Build & launch",
                  text: "We deliver and test the work, keep you updated, and launch with a clear handover.",
                },
                {
                  step: "04",
                  title: "Improve",
                  text: "Optional ongoing support to monitor, maintain, and optimise what we built.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-card border border-border rounded-xl p-6">
                  <span className="text-4xl font-serif font-bold text-primary/30">{item.step}</span>
                  <h3 className="font-serif font-semibold text-lg mt-3 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
