"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Zap, Mail, Bell, UserCheck, RefreshCw, MessageSquare } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What business processes can AIVized automate?",
    answer: "AIVized automates the repetitive, rule-based tasks that consume your team's time: lead follow-up sequences, appointment reminders, customer onboarding messages, booking confirmations, review request emails, and internal notifications when a new enquiry arrives. If a task happens the same way every time, it can likely be automated.",
  },
  {
    question: "Do I need technical skills to set up business process automation?",
    answer: "No. AIVized handles the full setup, identifying which workflows to automate, connecting the tools, configuring the triggers, and testing before go-live. You describe how your business currently works and we build the automation around it.",
  },
  {
    question: "How is business process automation different from your AI chatbot service?",
    answer: "The AI chatbot focuses on customer-facing conversations, answering enquiries on your website or WhatsApp in real time. Business process automation handles the behind-the-scenes workflows: what happens after a lead arrives, how customers are followed up, and how your team is notified. The two services complement each other.",
  },
  {
    question: "How long does it take to get automation running?",
    answer: "Most automations are live within three to five working days of your initial briefing. Simple workflows like appointment reminders or lead notifications can be set up within 24 hours. We confirm timelines after understanding your specific requirements.",
  },
  {
    question: "How do I get started with business process automation?",
    answer: "Email us at info@aivized.com with a description of the repetitive tasks you want to automate. We will schedule a brief call or email exchange to understand your workflow, then confirm scope and timelines.",
  },
];

const BusinessAutomationPage = () => {
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
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-primary font-medium tracking-wide uppercase">Managed Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6">
              Business Process Automation for UK Small Businesses
            </h1>
            <p className="lead text-xl text-muted-foreground leading-relaxed">
              AIVized automates the repetitive workflows that drain your team's time: lead follow-up sequences, appointment reminders, customer onboarding, and internal notifications. We handle the setup and keep it running so you don't have to.
            </p>
          </motion.div>

          {/* Workflow types */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8">Workflows We Automate</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: MessageSquare, name: "Lead Follow-Up", desc: "Automatically follow up with new enquiries via email or WhatsApp, immediately when they arrive and again after 24 and 48 hours if there is no reply." },
                { icon: Bell, name: "Appointment Reminders", desc: "Send automated reminders to customers before their booking. Reduce no-shows and free your team from manual reminder calls." },
                { icon: UserCheck, name: "Customer Onboarding", desc: "Trigger a welcome sequence when a new customer signs up or books, sending relevant information, next steps, and useful links automatically." },
                { icon: RefreshCw, name: "Internal Notifications", desc: "Alert your team instantly when a new lead, booking, or enquiry arrives via email, WhatsApp, or Slack, without anyone having to check a dashboard." },
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
                "Full workflow setup with no technical skills required from you",
                "Custom triggers based on your existing tools and processes",
                "Testing before every automation goes live",
                "Monitoring and error alerts so nothing breaks silently",
                "Updates when your business processes change",
                "UK-based support when you need adjustments",
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
              Business process automation is most useful for UK small businesses where repetitive admin tasks consume significant time each week. It is particularly effective for:
            </p>
            <ul className="space-y-2 max-w-xl">
              {[
                "Service businesses managing bookings and appointment follow-ups",
                "Sales teams manually sending follow-up emails after enquiries",
                "Clinics and practices sending reminders before consultations",
                "E-commerce businesses handling post-purchase communication",
                "Solo traders and micro-businesses wearing too many hats at once",
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
            <Accordion type="single" collapsible className="w-full max-w-2xl space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="card-premium px-6 border-border/50">
                  <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-5 hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
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
              Want to Automate Your Business Workflows?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Email us with a description of the repetitive tasks you want to automate. We will respond within one working day.
            </p>
            <a
              href="mailto:info@aivized.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              info@aivized.com
            </a>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessAutomationPage;
