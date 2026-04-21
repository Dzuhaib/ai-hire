"use client";

import { AuthorBio } from "@/components/AuthorBio";
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, CheckCircle2, Zap, Settings, BarChart3, Cpu } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BlogInlineImage } from "@/components/BlogInlineImage";
const heroImage = "/assets/blog/ai-automation-uk-hero.png";
const automationInline1 = "/assets/blog/ai-automation-inline-1.png";
const automationInline2 = "/assets/blog/ai-automation-inline-2.png";
const automationInline3 = "/assets/blog/ai-automation-inline-3.png";

const AIAutomationUKBlog = () => {
  const faqs = [
    {
      question: "What does AI business automation actually mean for a UK small business?",
      answer: "For a UK small business, AI business automation means using software to handle the repetitive tasks that would otherwise require your time or a member of staff. In practice, this is a managed AI chatbot that responds to customer enquiries, captures leads, and books appointments automatically, without you needing to monitor incoming messages or answer the same questions repeatedly."
    },
    {
      question: "Which business tasks are best suited to AI automation?",
      answer: "The tasks best suited to AI automation are high-volume, repetitive, and rule-based: answering common customer questions about pricing, services, availability, and hours; collecting contact details from interested visitors; routing enquiries to the right person; and booking appointments. These account for the majority of customer-facing communication in most UK small businesses."
    },
    {
      question: "How long does it take to get AI automation working for my business?",
      answer: "With AIVized's managed service, most businesses are live within 24 hours. You share your products, services, pricing, and common questions and we build, train, and install the AI on your website, WhatsApp, or Instagram. There is no technical work required on your side and no lengthy onboarding process."
    },
    {
      question: "Can AI automation replace my entire customer service team?",
      answer: "AI automation doesn't replace your team. It handles the volume that would otherwise go unanswered. AI manages 70–80% of routine enquiries instantly, while complex or sensitive issues are escalated to your human team with full conversation context. Your team focuses on high-value interactions; the AI handles the repetitive work."
    },
    {
      question: "What is the ROI of AI business automation for a UK small business?",
      answer: "UK businesses typically see ROI within 2–3 months of implementing AI automation. Key improvements include faster response times (seconds vs hours), more leads captured from out-of-hours enquiries, and significant time savings on repetitive customer service tasks. At £29 per month, the cost is lower than a single hour of additional staffing."
    },
    {
      question: "Is AI business automation suitable for very small UK businesses?",
      answer: "Small businesses benefit most from AI automation because every missed enquiry matters and there is rarely a dedicated team to cover out-of-hours messages. AIVized's managed service starts from £29 per month, accessible to sole traders, micro-businesses, and growing SMEs. There is no minimum volume requirement."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-20">
        <article className="container-narrow">
          <nav className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </nav>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Automation
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              AI Business Automation for UK Small Business: A Practical Guide
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                5 February 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                11 min read
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video bg-secondary">
              <Image src={heroImage} alt="AI business automation for UK small business" fill className="object-cover" priority />
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="lead text-xl text-muted-foreground mb-8">
              AI business automation is no longer something reserved for enterprises with large technology budgets. UK small businesses are now using managed AI tools to handle customer enquiries, capture leads, and automate repetitive tasks, without any technical expertise and for a fraction of the cost of additional staff. This guide explains what AI automation actually means in practice and how to implement it without disrupting your operations.
            </p>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              What AI Business Automation Means for UK Small Businesses
            </h2>
            <p className="text-muted-foreground mb-6">
              For most UK small businesses, AI automation starts with one practical problem: customer enquiries arrive at all hours, but staff aren't available 24/7. An automated AI chatbot solves this by responding instantly to every message on your website, WhatsApp, or social media, whether it arrives at 9am or 11pm.
            </p>
            <p className="text-muted-foreground mb-6">
              This is not about replacing your team. It's about handling the high volume of repetitive, routine enquiries that consume time without requiring skill, so your team can focus on work that actually needs a human.
            </p>

            <BlogInlineImage src={automationInline1} alt="UK small business owner benefiting from AI automation, with more time for high-value work" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-8 not-prose">
              <div className="p-6 rounded-xl bg-secondary/50 border border-border text-center">
                <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Instant Response</h3>
                <p className="text-sm text-muted-foreground">Reply to enquiries in under 3 seconds, 24/7</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border text-center">
                <Settings className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Fully Managed</h3>
                <p className="text-sm text-muted-foreground">We install and maintain everything for you</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border text-center">
                <BarChart3 className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">More Leads Captured</h3>
                <p className="text-sm text-muted-foreground">Capture enquiries you'd otherwise miss overnight</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border text-center">
                <Cpu className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Smart Escalation</h3>
                <p className="text-sm text-muted-foreground">Complex issues routed to your team with context</p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              Which Tasks Should You Automate First?
            </h2>
            <p className="text-muted-foreground mb-6">
              The best place to start with AI automation is any task that is high-volume, repetitive, and rule-based. For most UK small businesses, this is customer-facing communication: answering the same questions about pricing, availability, and how to get started.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-lg mb-4">High-Value Tasks to Automate First</h3>
              <ul className="space-y-3">
                {[
                  "Answering repeated customer questions about pricing, services, and availability",
                  "Collecting contact details from visitors who show interest",
                  "Booking appointments and sending confirmation messages",
                  "Responding to out-of-hours enquiries that would otherwise wait until morning",
                  "Qualifying leads before they reach your sales team",
                  "Sending follow-up messages to customers who haven't booked"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              The Real Cost of Not Automating
            </h2>
            <p className="text-muted-foreground mb-6">
              The cost of not automating customer enquiries is invisible but significant. Every message that goes unanswered overnight is a potential customer who found a competitor by morning. Every hour your team spends answering the same pricing question is an hour not spent on work that requires skill.
            </p>
            <p className="text-muted-foreground mb-6">
              Research consistently shows that the speed of first response is the strongest predictor of whether an enquiry converts. A business that responds within a minute converts significantly more leads than one that responds the next day. AI automation closes that gap without requiring additional staff.
            </p>

            <BlogInlineImage src={automationInline2} alt="Graph showing the impact of response time on lead conversion rates for UK businesses" />

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              How Managed AI Automation Works
            </h2>
            <p className="text-muted-foreground mb-6">
              A managed AI automation service handles the technical work so you don't have to. You don't need to configure conversation flows, write response scripts, or maintain the system when your content changes. Here's how AIVized's managed service works:
            </p>
            <ol className="text-muted-foreground space-y-3 mb-6">
              <li><strong>1. Share your business details:</strong> Products, services, pricing, FAQs, and brand voice</li>
              <li><strong>2. We build and train your AI:</strong> Custom-trained on your specific business, tested before launch</li>
              <li><strong>3. We install it on your channels:</strong> Website, WhatsApp, or Instagram, whichever you need</li>
              <li><strong>4. We monitor and optimise continuously:</strong> Regular improvements based on real conversations</li>
            </ol>

            <BlogInlineImage src={automationInline3} alt="Four-step managed AI automation process for UK small businesses" />

            <p className="text-muted-foreground mb-6">
              Plans start from <Link href="/pricing" className="text-primary hover:underline">£29 per month</Link> with no long-term contracts and a 3-day free trial. See how <Link href="/#how-it-works" className="text-primary hover:underline">our simple setup process</Link> works, or read about <Link href="/blog/automate-customer-enquiries-personal-touch" className="text-primary hover:underline">how to automate enquiries without losing the personal touch</Link>.
            </p>

            <section className="mt-16">
              <h2 className="text-2xl font-serif font-semibold mb-6">
                Frequently Asked Questions About AI Business Automation for UK Small Businesses
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border">
                    <AccordionTrigger className="text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <div className="mt-16 p-8 rounded-2xl bg-secondary/40 border border-primary/20 text-center">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Ready to Automate Your UK Business?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                AIVized provides fully managed AI automation for UK small businesses across all industries. We handle installation, training, monitoring, and updates. From £29/month.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View Pricing Plans
              </Link>
            </div>
          </motion.div>
          <AuthorBio />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default AIAutomationUKBlog;
