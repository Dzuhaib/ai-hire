"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, ArrowRight, Compass, Layers3, Target } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { services } from "@/data/servicesData";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* Top content */}
        <div className="pt-32 pb-0">
          <div className="container-narrow">

            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-primary" />
                <span className="text-sm text-primary font-medium tracking-wide uppercase">About AIVized</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6">
                AI, Automation &amp; Digital Growth for UK Businesses
              </h1>
              <p className="lead text-xl text-muted-foreground leading-relaxed">
                AIVized helps UK businesses design, build, and run the systems they depend on - from custom
                AI and automation to search visibility, marketing, websites, and desktop software. We combine
                strategy, delivery, and ongoing support in one accountable team.
              </p>
            </motion.div>

            {/* What we do */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">What AIVized Does</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Most businesses do not have one problem. They have a website that underperforms, manual
                processes that eat time, search visibility that has slipped, and disconnected tools that
                create more work than they remove. Buying a separate fix for each one creates gaps and
                overhead.
              </p>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                AIVized works across six connected services. We can deliver a single project or act as your
                long-term technology and growth partner. Either way, the work starts with your commercial
                goal, not a predetermined product.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services#${service.slug}`}
                    className="group flex items-start gap-3 p-5 rounded-xl bg-secondary/50 border border-transparent hover:border-primary/30 hover:bg-card transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{service.tagline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>

            {/* How we work */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">How We Work</h2>
              <div className="grid md:grid-cols-3 gap-5 max-w-4xl">
                {[
                  {
                    icon: Compass,
                    title: "Start with the outcome",
                    text: "We agree what success looks like before choosing tools or channels, so the work is tied to a business result.",
                  },
                  {
                    icon: Layers3,
                    title: "Connect the pieces",
                    text: "AI, automation, search, marketing, and software work better together. We plan them as one system, not isolated projects.",
                  },
                  {
                    icon: Target,
                    title: "Stay accountable",
                    text: "Clear scope, clear pricing, and a named team. We report on progress and keep improving after launch.",
                  },
                ].map((item) => (
                  <div key={item.title} className="p-6 rounded-xl bg-card border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Who we serve */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">Who We Serve</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                We work with UK small and medium-sized businesses that want to grow without proportionally
                growing their headcount, as well as larger organisations that need custom systems, software,
                or a more joined-up digital strategy.
              </p>
              <p className="text-muted-foreground max-w-2xl">
                Our clients include hospitality groups improving direct bookings, professional practices
                automating enquiries, e-commerce brands rebuilding for growth, clinics and gyms managing
                appointments, and service businesses that need their operations to run without constant
                manual intervention. If your business has customers, a process, or an online presence, there
                is usually a meaningful improvement we can make.
              </p>
            </motion.section>

          </div>
        </div>

        {/* Why Choose Us - full-width section */}
        <WhyChooseUsSection variant="about" />

        {/* Lower content */}
        <div className="pb-20">
          <div className="container-narrow">

            {/* Why we exist */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16 p-8 rounded-2xl bg-secondary/40 border border-border"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Layers3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-semibold mb-2">Why We Built AIVized</h2>
                  <p className="text-muted-foreground max-w-2xl">
                    Businesses are often sold a single tool and left to make it work. The tool does not fix
                    the process, the content, the website, or the data behind it - so the promised result
                    never fully arrives.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-2xl ml-16">
                AIVized was built to close that gap. We bring the technical and marketing disciplines
                together, take responsibility for delivery, and stay involved long enough for the work to
                produce a measurable result. Our clients get a partner who can see the whole picture, not a
                vendor defending one product.
              </p>
            </motion.section>

            {/* Founder */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">Who Runs AIVized</h2>
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-xl font-serif font-bold text-primary">ZA</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg">Zuhaib Ahmed</p>
                  <p className="text-sm text-primary mb-3">Founder, AIVized</p>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                    Zuhaib founded AIVized to give UK businesses access to practical AI and digital delivery
                    without the usual agency layers. With hands-on experience building AI systems,
                    automations, websites, and search strategies across hospitality, professional services,
                    healthcare, and e-commerce, he leads client strategy and delivery personally.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/zuhaibah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary hover:underline"
                  >
                    LinkedIn profile -&gt;
                  </a>
                </div>
              </div>
            </motion.section>

            {/* What makes a good fit */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">What Makes a Good Fit</h2>
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                {[
                  "You have a clear business problem, not just a vague interest in AI",
                  "You want a partner who can challenge the brief and recommend what is actually needed",
                  "You value measurable outcomes over a long list of deliverables",
                  "You are ready to share access to the systems and people involved",
                  "You want to own your website, code, accounts, and data",
                  "You prefer direct communication with the people doing the work",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                If you have a question about our services, want a second opinion on a project, or need help
                working out what to prioritise, get in touch directly.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border w-fit">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:info@aivized.com" className="text-primary hover:underline font-medium">
                    info@aivized.com
                  </a>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  Explore our services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-8 rounded-2xl bg-secondary/40 border border-primary/20 text-center"
            >
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Book a free consultation. We will listen to the problem, recommend the right mix of
                services, and give you a clear next step.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Book a Free Consultation
              </Link>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
