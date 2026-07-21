"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Bot, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";

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
                A Managed AI Chatbot Service Built for UK Small Businesses
              </h1>
              <p className="lead text-xl text-muted-foreground leading-relaxed">
                AIVized is a UK-based managed AI chatbot service. We install, train, and maintain AI chatbots for small businesses across the UK, handling everything from the initial setup to ongoing updates so business owners can focus on running their business rather than managing software.
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
                Most AI chatbot platforms hand you a dashboard and expect you to do the work. You write the conversation flows, configure the integrations, train the bot, and maintain it when your content changes. For small business owners without a technical team, this is impractical.
              </p>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                AIVized is different. When you subscribe, we handle everything: connecting the chatbot to your website or WhatsApp, training it on your specific products and services, testing it before launch, and keeping it updated as your business changes. Your job is to tell us about your business. Our job is to make the chatbot work.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                {[
                  "We install the chatbot with no code required from you",
                  "We train it on your products, services, and FAQs",
                  "We test it before going live",
                  "We monitor it 24/7 and catch errors before customers do",
                  "We update it when your prices or services change",
                  "We provide UK-based support when you need help"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Who we serve */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">Who We Serve</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                AIVized works with UK small businesses that receive customer enquiries through their website, WhatsApp, or Instagram and want those enquiries handled automatically without hiring additional staff.
              </p>
              <p className="text-muted-foreground max-w-2xl">
                Our clients include restaurants taking reservations, real estate agencies qualifying buyers, e-commerce shops handling product questions, healthcare practices managing appointment enquiries, law firms capturing initial consultations, fitness studios promoting classes, and travel agencies answering booking queries. If your business has a website and a phone, we can likely help.
              </p>
            </motion.section>

          </div>
        </div>

        {/* Why Choose Us — full-width section */}
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
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-semibold mb-2">Why We Built AIVized</h2>
                  <p className="text-muted-foreground max-w-2xl">
                    The AI chatbot space has a problem: most tools are self-service platforms marketed as managed services. A small business owner signs up expecting someone else to handle the technical work, then discovers they're doing it themselves.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-2xl ml-16">
                AIVized was built to close that gap. We started from the premise that UK small business owners should be able to benefit from AI without needing a developer, a consultant, or a technical background. Our service is genuinely managed: you hand us the details about your business and we deliver a working chatbot, not a login page and a tutorial video.
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
                    Zuhaib Ahmed founded AIVized to give UK small businesses access to genuinely managed AI, not another self-service tool that requires a technical team to maintain. With hands-on experience deploying AI chatbots across restaurants, real estate, healthcare, and e-commerce, Zuhaib leads product development and client onboarding personally.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/zuhaibah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary hover:underline"
                  >
                    LinkedIn profile →
                  </a>
                </div>
              </div>
            </motion.section>

            {/* Pricing transparency */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">Transparent Pricing</h2>
              <p className="text-muted-foreground mb-4 max-w-2xl">
                AIVized plans start from £29 per month with a one-time £50 setup fee. There are no long-term contracts, no hidden charges for content updates, and a 3-day free trial on every plan so you can verify the chatbot works for your business before committing.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                View all pricing plans <ArrowRight className="w-4 h-4" />
              </Link>
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
                If you have a question about our service, want to discuss whether AIVized is a fit for your business, or need support, get in touch directly.
              </p>
              <div className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border w-fit">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@aivized.com" className="text-primary hover:underline font-medium">
                  info@aivized.com
                </a>
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
                Start with a 3-day free trial. We set everything up within 24 hours. No technical skills required.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View Pricing Plans
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
