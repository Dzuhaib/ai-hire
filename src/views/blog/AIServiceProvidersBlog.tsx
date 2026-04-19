"use client";

import { AuthorBio } from "@/components/AuthorBio";
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { BlogInlineImage } from "@/components/BlogInlineImage";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const heroImage = "/assets/blog/ai-service-providers-hero.png";
const providersInline1 = "/assets/blog/ai-providers-inline-1.png";
const providersInline2 = "/assets/blog/ai-providers-inline-2.png";
const providersInline3 = "/assets/blog/ai-providers-inline-3.png";

const AIServiceProvidersBlog = () => {
  const faqs = [
    {
      question: "What should I look for in an AI service provider for my UK business?",
      answer: "Look for a provider that handles the full setup for you — not just software you configure yourself. A good provider will train the AI on your specific business, monitor it after launch, and update it when your services change. Ask how they handle errors and what their response time is when something goes wrong."
    },
    {
      question: "What is the difference between a managed AI service and a DIY chatbot builder?",
      answer: "With a DIY chatbot builder, you configure the chatbot yourself, write the conversation flows, handle the integration, and maintain it when your content changes. A managed service like AIVized does all of that for you. You subscribe, share your business details, and the provider installs and maintains the chatbot on your behalf."
    },
    {
      question: "How much should AI services cost for a UK small business?",
      answer: "A managed AI chatbot service for a UK small business should cost between £29 and £149 per month depending on the volume of conversations and the level of support included. Be cautious of providers that charge setup fees in the thousands or lock you into annual contracts before you have seen the results."
    },
    {
      question: "What questions should I ask before signing up with an AI provider?",
      answer: "Ask: Who trains the chatbot on my business? How long does setup take? What happens when I change my prices or services? How do I contact support if something goes wrong? Is there a free trial? What is the cancellation policy? The answers tell you whether the provider is genuinely managed or a self-service platform with a managed label."
    },
    {
      question: "What are the red flags when evaluating AI service providers?",
      answer: "Red flags include: no free trial or demo, vague answers about who handles ongoing maintenance, pricing that only shows setup costs with unclear monthly fees, and case studies that do not match your business type. A provider who cannot explain exactly what happens after you sign up is likely not a managed service."
    },
    {
      question: "Is there an affordable AI chatbot for small business UK?",
      answer: "Yes. AIVized provides fully managed AI chatbot services from £29 per month. This includes installation, training, monitoring, and ongoing updates. There are no long-term contracts and a 3-day free trial is included so you can verify the chatbot works before committing."
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
              AI Providers
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              How to Choose an AI Service Provider for Your UK Business
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                2 February 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                9 min read
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video bg-secondary">
              <Image src={heroImage} alt="UK business owner evaluating AI service providers" fill className="object-cover" priority />
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="lead text-xl text-muted-foreground mb-8">
              The UK has no shortage of companies calling themselves AI service providers. But the gap between a genuine managed service and a self-service chatbot builder with a marketing makeover is significant. This guide helps you ask the right questions before signing up and avoid the mistakes that lead to wasted budget and abandoned tools.
            </p>

            <h2 id="what-managed-ai-includes">What a Managed AI Service Actually Includes</h2>
            <p className="text-muted-foreground mb-6">
              The term "managed AI service" gets used loosely. Before you evaluate any provider, get clarity on what they mean by "managed." A genuine managed AI service covers:
            </p>

            <div className="not-prose my-8 grid gap-4">
              {[
                "Installation on your website — no code required from you",
                "Training the AI on your specific products, services, and FAQs",
                "Testing before launch to verify responses are accurate",
                "24/7 monitoring so errors are caught before customers see them",
                "Ongoing updates when your prices, services, or policies change",
                "Support contact when something needs fixing"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground mb-6">
              If a provider gives you a login, a drag-and-drop editor, and a tutorial video, that is a DIY tool — not a managed service. The distinction matters because the time you spend configuring and maintaining a DIY chatbot is the time you were trying to save in the first place.
            </p>

            <BlogInlineImage src={providersInline1} alt="Small business owner working with an AI chatbot setup on a laptop" />

            <h2 id="diy-vs-managed">DIY vs Managed: The Real Cost Comparison</h2>
            <p className="text-muted-foreground mb-6">
              DIY chatbot platforms typically advertise low monthly fees — sometimes free tiers. What they do not advertise is the time cost. Building a functional chatbot on a DIY platform requires:
            </p>
            <ul className="text-muted-foreground">
              <li>Initial setup: 10–20 hours to build and test conversation flows</li>
              <li>Ongoing maintenance: 2–4 hours per month updating content</li>
              <li>Error handling: unplanned hours when the chatbot gives a wrong answer</li>
              <li>Integration work: additional hours connecting to your booking system, CRM, or email</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              For a business owner whose time is worth £30–£50 per hour, the "free" DIY tool costs several hundred pounds in the first month alone. A managed service at £29 per month that handles all of this is significantly cheaper in practice.
            </p>

            <BlogInlineImage src={providersInline2} alt="Cost comparison chart for DIY vs managed AI chatbot services" />

            <h2 id="questions-to-ask">Questions to Ask Before Signing Up</h2>
            <p className="text-muted-foreground mb-6">
              Use these questions to separate genuine managed services from self-service platforms with managed branding:
            </p>
            <ol className="text-muted-foreground">
              <li><strong>Who trains the chatbot on my business?</strong> — If the answer involves you uploading content or writing responses, it is not managed.</li>
              <li><strong>How long does setup take?</strong> — A managed service should be live within 24–48 hours after you share your business details.</li>
              <li><strong>What happens when I change my prices or services?</strong> — You should be able to contact support and have updates applied for you.</li>
              <li><strong>Is there a free trial before I pay?</strong> — Any provider confident in their service offers a trial. Avoid those that do not.</li>
              <li><strong>Can I cancel month to month?</strong> — Long contract lock-ins before you have seen results are a red flag.</li>
              <li><strong>What is the support response time?</strong> — If the chatbot goes wrong at 2am and affects customer enquiries, how quickly do they respond?</li>
            </ol>

            <BlogInlineImage src={providersInline3} alt="Business owner reviewing AI chatbot analytics and performance dashboard" />

            <h2 id="red-flags">Red Flags When Evaluating AI Service Providers</h2>
            <p className="text-muted-foreground mb-6">
              Based on what businesses report after switching providers, these are the most common red flags:
            </p>
            <ul className="text-muted-foreground">
              <li><strong>No demo or trial</strong> — Legitimate services let you see the product before committing.</li>
              <li><strong>Setup fees in the thousands</strong> — High upfront costs before you have seen results shift all the risk onto you.</li>
              <li><strong>Vague about what "managed" means</strong> — If they cannot explain exactly who does what after signup, you are likely doing it yourself.</li>
              <li><strong>Generic case studies</strong> — Case studies that do not mention the industry, business size, or measurable result are not evidence of anything.</li>
              <li><strong>No named support contact</strong> — "Submit a ticket" with no SLA is not adequate support for a tool that handles your customer enquiries.</li>
            </ul>

            <h2 id="how-to-assess-pricing">How to Assess Whether the Pricing Is Fair</h2>
            <p className="text-muted-foreground mb-6">
              A managed AI chatbot for a UK small business should cost between £29 and £149 per month depending on conversation volume and support level. Within that range, the key question is not the headline price — it is what is included.
            </p>
            <p className="text-muted-foreground mb-6">
              Specifically, verify whether the monthly fee includes training updates, or whether those are charged separately. A £29/month plan that charges £150 every time you update your menu is not a £29 plan.
            </p>
            <p className="text-muted-foreground mb-6">
              AIVized's plans start from <Link href="/pricing" className="text-primary hover:underline">£29 per month</Link>. Monthly updates are included. There is a one-time £50 setup fee and a 3-day free trial so you can verify the chatbot works for your business before committing to a plan.
            </p>

            <section className="mt-16">
              <h2 className="text-2xl font-serif font-semibold mb-6">
                Frequently Asked Questions About Choosing an AI Service Provider
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
                Looking for a Managed AI Service You Can Trust?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                AIVized provides fully managed AI chatbot services to UK businesses across all industries. We handle installation, training, monitoring, and updates. You focus on running your business.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                See Our Plans
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

export default AIServiceProvidersBlog;
