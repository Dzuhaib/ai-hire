"use client";

import { AuthorBio } from "@/components/AuthorBio";
import Image from 'next/image';
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { BlogInlineImage } from "@/components/BlogInlineImage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const websiteHero = "/assets/blog/website-chatbot-hero.png";
const websiteInline1 = "/assets/blog/website-inline-1.png";
const websiteInline2 = "/assets/blog/website-inline-2.png";
const websiteInline3 = "/assets/blog/website-inline-3.png";

const WebsiteChatbotBlog = () => {
  const faqs = [
    {
      question: "How does a managed website chatbot differ from a DIY chatbot builder?",
      answer: "With a DIY chatbot builder, you configure the chatbot yourself, write the conversation flows, handle the installation, and maintain it whenever your content changes. A managed service like AIVized does all of that for you. You share your business details and we install, train, and maintain the chatbot on your behalf."
    },
    {
      question: "How does an AI chatbot for small business UK work on a website?",
      answer: "An AI chatbot for small business UK works by embedding a chat widget on your website. When visitors arrive, the chatbot greets them, answers common questions, captures contact details, and can guide them toward booking or purchasing, all automatically, based on the knowledge base we build from your business information."
    },
    {
      question: "Will a website chatbot work on my existing site without a rebuild?",
      answer: "Yes. AIVized installs the chatbot by adding a single script tag to your website. This works with any website platform, including WordPress, Shopify, Wix, Squarespace, or a custom-built site. No rebuild or technical work is required from your side."
    },
    {
      question: "What happens when the chatbot can't answer a question?",
      answer: "When a visitor asks something outside the chatbot's knowledge base, it escalates the conversation to your team with the full conversation context attached. Your team sees exactly what was asked and can follow up with everything they need to help."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-20">
        <article className="container-narrow">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 text-sm font-medium mb-6">Website</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              Website Chatbot for UK Small Businesses: How Managed AI Works
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />29 January 2026</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />7 min read</span>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video bg-secondary relative">
              <Image src={websiteHero} alt="Website Chatbot for UK Small Business" fill className="object-cover" priority />
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              Your website is often the first place a potential customer tries to contact you. If they land on your site at 8pm with a question and find no way to get an instant answer, most will leave and try a competitor. A managed website chatbot solves this by providing an instant, accurate response every time, with no action required from you. See how chatbots help <Link href="/blog/reduce-missed-leads-website" className="text-primary hover:underline">reduce missed leads from your website</Link>.
            </p>

            <h2 id="what-a-managed-website-chatbot-does">What a Managed Website Chatbot Does</h2>
            <p>A website chatbot sits in the corner of your site and responds to visitor messages automatically. Unlike a basic FAQ widget, a managed AI chatbot holds a real conversation. It can ask clarifying questions, collect contact details, and guide visitors toward the outcome you want, whether that's a booking, a quote request, or a direct purchase.</p>

            <BlogInlineImage src={websiteInline1} alt="Website chatbot widget on laptop screen in modern UK office" />

            <p>During setup, we train your chatbot on your products, pricing, services, and the most common questions your customers ask. Once live, it handles:</p>
            <div className="not-prose my-8 grid gap-4">
              {[
                "Greets visitors and answers questions within seconds",
                "Handles pricing, availability, and service enquiries automatically",
                "Captures contact details from interested visitors",
                "Books appointments and guides customers toward next steps",
                "Escalates complex enquiries to your team with full context"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <h2 id="managed-vs-diy">Managed AI vs DIY Chatbot Builders</h2>
            <p>DIY chatbot platforms advertise low monthly fees. What they don't advertise is the time cost. Building a functional chatbot on a DIY platform requires 10–20 hours upfront to build and test conversation flows, then 2–4 hours per month to keep content updated.</p>

            <BlogInlineImage src={websiteInline2} alt="UK small business owner reviewing website chatbot conversations on a laptop" />

            <p>For a business owner whose time is worth £30–£50 per hour, the "free" DIY option costs several hundred pounds in the first month alone. A managed service at £29 per month that handles installation, training, and ongoing updates is significantly cheaper in practice.</p>

            <div className="not-prose my-8 p-6 rounded-lg bg-amber-500/10 border border-amber-400/20">
              <h3 className="text-lg font-semibold mb-4">Research Insight</h3>
              <p className="text-muted-foreground">
                Chatbots can handle up to 80% of routine customer enquiries automatically, freeing your team to focus on high-value interactions. For small businesses without a dedicated support team, this means every visitor gets a response, not just those who contact you during office hours.
              </p>
            </div>

            <h2 id="website-chatbot-for-small-business">Website Chatbots for UK Small Businesses</h2>
            <p>The most common customer journey on a small business website looks like this: a visitor arrives with a specific question, can't find the answer quickly enough, and leaves to check a competitor. A website chatbot intercepts that journey and keeps the visitor engaged.</p>

            <BlogInlineImage src={websiteInline3} alt="Customer service analytics dashboard showing improved engagement metrics" />

            <p>For UK small businesses, the benefit is direct:</p>
            <ul>
              <li>Visitors outside office hours get instant answers instead of empty contact forms</li>
              <li>Common questions are answered automatically, reducing time your team spends on repetitive enquiries</li>
              <li>Lead details are captured and sent to you before a visitor leaves</li>
              <li>The chatbot works on any website platform with a single line of code</li>
            </ul>
            <p>Learn more in our <Link href="/blog/ai-chatbot-small-business-uk-guide" className="text-primary hover:underline">complete guide to AI chatbots for UK small businesses</Link>.</p>

            <h2>How AIVized Installs Your Website Chatbot</h2>
            <p>Getting a website chatbot live requires no technical skills from your side. Here's how the managed service works:</p>
            <ol>
              <li><strong>We learn about your business:</strong> Products, services, pricing, FAQs, and brand voice</li>
              <li><strong>We build and test the chatbot:</strong> Trained on your specific business, verified before launch</li>
              <li><strong>We install it on your site:</strong> A single script tag, no rebuild required</li>
              <li><strong>We monitor and update it:</strong> Ongoing improvements and updates when your content changes</li>
            </ol>
            <p>Plans start from <Link href="/pricing" className="text-primary hover:underline">£29 per month</Link> with no long-term contracts.</p>
          </motion.div>

          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-16 p-8 md:p-12 rounded-2xl bg-secondary/40 border border-border text-center">
            <h3 className="text-2xl font-serif font-semibold mb-4">Ready to Add a Chatbot to Your Website?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">AIVized handles everything: installation, training, and monitoring. From £29/month with complete setup included.</p>
            <Link href="/pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">View Pricing</Link>
          </motion.div>
          <AuthorBio />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default WebsiteChatbotBlog;
