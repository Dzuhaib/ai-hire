"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Share2, Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What social media platforms does AIVized automate?",
    answer: "AIVized currently automates Instagram, Facebook, and LinkedIn. This covers DM responses, comment monitoring, and content scheduling across all three platforms from a single managed setup.",
  },
  {
    question: "Do I need to provide the content or do you create it?",
    answer: "We work with whatever you prefer. You can supply your own content and we schedule and publish it, or we can discuss a content creation arrangement as part of your setup. Either way, we handle the technical side — publishing, timing, and platform management.",
  },
  {
    question: "How are DMs handled automatically?",
    answer: "We train an AI on your business, products, and common enquiries. When a customer sends a DM on Instagram or Facebook, the AI responds instantly with accurate, on-brand answers. Complex or sensitive conversations are flagged for your team to handle directly.",
  },
  {
    question: "How do I get started with social media automation?",
    answer: "Email us at aivized.com@gmail.com with a brief description of your business and which platforms you want to automate. We will respond within one working day with next steps and a setup timeline.",
  },
  {
    question: "Is social media automation suitable for small UK businesses?",
    answer: "Yes — it is most valuable for small businesses that receive regular DMs or enquiries on social media but do not have dedicated staff to respond promptly. Automation ensures every message gets an instant reply, regardless of when it arrives.",
  },
];

const SocialMediaAutomationPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container-narrow">

          <nav className="mb-8">
            <Link href="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </nav>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Share2 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-primary font-medium tracking-wide uppercase">Managed Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6">
              Social Media Automation for UK Businesses
            </h1>
            <p className="lead text-xl text-muted-foreground leading-relaxed">
              AIVized manages your Instagram, Facebook, and LinkedIn — automating DM responses, scheduling content, and keeping your audience engaged 24/7. You stay visible on social media without having to be online constantly.
            </p>
          </motion.div>

          {/* Platforms */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8">Platforms We Automate</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { icon: Instagram, name: "Instagram", desc: "Automate DM responses, story replies, and comment management. Never miss an enquiry from a potential customer." },
                { icon: Facebook, name: "Facebook", desc: "Automate Messenger responses and page inbox management. Keep response times under a minute around the clock." },
                { icon: Linkedin, name: "LinkedIn", desc: "Automate connection message responses and enquiry handling for professional services and B2B businesses." },
              ].map(({ icon: Icon, name, desc }) => (
                <div key={name} className="p-6 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{name}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* What's included */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">What Is Included</h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                "AI-powered DM automation trained on your business",
                "Content scheduling across Instagram, Facebook, LinkedIn",
                "Comment monitoring and response management",
                "Engagement tracking and monthly performance summary",
                "Instant responses to enquiries — 24 hours a day",
                "Seamless escalation to your team for complex messages",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Who it's for */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">Who It Is For</h2>
            <p className="text-muted-foreground max-w-2xl mb-6">
              Social media automation is most valuable for UK small businesses that receive regular DMs or enquiries on social media but do not have dedicated staff to respond promptly. This includes:
            </p>
            <ul className="space-y-2 max-w-xl">
              {[
                "Retailers and e-commerce shops with active Instagram followers",
                "Restaurants and hospitality businesses receiving booking enquiries via DM",
                "Service businesses — salons, clinics, fitness studios — managing appointment requests",
                "Professional services responding to LinkedIn connection and enquiry messages",
                "Any business running paid social campaigns that generate DM responses",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* FAQ */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-2xl">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 md:p-10 rounded-2xl bg-secondary/40 border border-primary/20 text-center"
          >
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Interested in Social Media Automation?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Email us with a brief description of your business and which platforms you want to automate. We will respond within one working day.
            </p>
            <a
              href="mailto:aivized.com@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              aivized.com@gmail.com
            </a>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SocialMediaAutomationPage;
