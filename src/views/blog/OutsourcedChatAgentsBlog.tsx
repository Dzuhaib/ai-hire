"use client";

import { AuthorBio } from "@/components/AuthorBio";
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, CheckCircle2, MessageSquare, Users, Building2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { BlogInlineImage } from "@/components/BlogInlineImage";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const heroImage = "/assets/blog/outsourced-chat-agents-hero.png";
const outsourcedInline1 = "/assets/blog/outsourced-inline-1.png";
const outsourcedInline2 = "/assets/blog/outsourced-inline-2.png";
const outsourcedInline3 = "/assets/blog/outsourced-inline-3.png";

const OutsourcedChatAgentsBlog = () => {
  const faqs = [
    {
      question: "What are 24/7 outsourced chat agents and how do they work in Birmingham?",
      answer: "24/7 outsourced chat agents Birmingham are AI-powered customer service representatives that handle enquiries around the clock without human intervention. They integrate with your website, WhatsApp, or social media channels to respond instantly to customer questions, qualify leads, and book appointments—even while your team sleeps."
    },
    {
      question: "How can an AI virtual assistant for HR Birmingham improve my recruitment process?",
      answer: "An AI virtual assistant for HR Birmingham automates candidate screening, answers frequently asked questions about job openings, schedules interviews, and provides status updates to applicants. This reduces your HR team's workload by up to 70% while improving candidate experience with instant responses."
    },
    {
      question: "What technical virtual assistant services are available in Birmingham?",
      answer: "Technical virtual assistant services Birmingham include IT helpdesk automation, software onboarding support, troubleshooting guides, and technical documentation assistance. These AI-powered solutions handle tier-1 support queries, freeing your tech team to focus on complex issues."
    },
    {
      question: "Are virtual assistant services suitable for solo entrepreneurs in Birmingham?",
      answer: "Absolutely. Virtual assistant services for solo entrepreneurs Birmingham are designed to be affordable and scalable. Starting from just £29/month, solo business owners can access professional-grade customer service, lead qualification, and appointment booking without hiring full-time staff."
    },
    {
      question: "How is the intelligent personal assistant market growing in Birmingham?",
      answer: "The intelligent personal assistant market Birmingham is experiencing rapid growth as local businesses recognise the competitive advantage of 24/7 customer engagement. From retail to professional services, Birmingham companies are adopting AI assistants to reduce response times and capture more leads."
    },
    {
      question: "What's the difference between a tech virtual assistant and a general AI chatbot?",
      answer: "Tech virtual assistant services Birmingham are specifically trained to handle technical queries, understand IT terminology, and provide step-by-step troubleshooting. General chatbots handle broader customer service tasks. Both can be customised to match your brand voice and industry requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-32 pb-20">
        <article className="container-narrow">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </nav>

          {/* Hero */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              24/7 Support Solutions
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              24/7 Outsourced Chat Agents Birmingham:{" "}
              <span className="text-gradient">AI Virtual Assistants for HR & Tech Support</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                1 February 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10 min read
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video bg-secondary">
              <Image src={heroImage} alt="Blog hero image" fill className="object-cover" priority />
            </div>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="lead text-xl text-muted-foreground mb-8">
              <Link href="/locations/birmingham" className="text-primary hover:underline">Birmingham</Link> businesses are discovering the power of <strong>24/7 outsourced chat agents</strong> to handle customer enquiries around the clock. Whether you're running a growing SME or you're a solo entrepreneur, AI-powered virtual assistants are revolutionising how Midlands companies engage with customers and manage internal operations. See our <Link href="/blog/ai-chatbot-small-business-uk-guide" className="text-primary hover:underline">complete guide to AI chatbots for UK small businesses</Link>.
            </p>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              Why Birmingham Businesses Need 24/7 Outsourced Chat Agents
            </h2>
            <p className="text-muted-foreground mb-6">
              The modern customer expects instant responses. Research shows that 79% of consumers prefer live chat because of the immediate answers it provides. For Birmingham businesses competing in today's market, having <strong>24/7 outsourced chat agents Birmingham</strong> isn't a luxury—it's a necessity.
            </p>

            <BlogInlineImage src={outsourcedInline1} alt="24/7 customer support concept with clock and chat bubbles" />

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <MessageSquare className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Never Miss a Lead</h3>
                <p className="text-sm text-muted-foreground">Capture enquiries at 3am just as effectively as 3pm with round-the-clock AI support.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Scale Without Hiring</h3>
                <p className="text-sm text-muted-foreground">Handle unlimited conversations simultaneously without increasing headcount.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <Building2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Local Understanding</h3>
                <p className="text-sm text-muted-foreground">AI trained to understand Birmingham's business landscape and customer expectations.</p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              AI Virtual Assistant for HR Birmingham: Transforming Recruitment
            </h2>
            <p className="text-muted-foreground mb-6">
              Human Resources departments across Birmingham are discovering how an <strong>AI virtual assistant for HR Birmingham</strong> can streamline recruitment and employee support. From answering policy questions to screening candidates, these intelligent systems handle repetitive tasks that previously consumed hours of your HR team's time.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Imagine a system that can answer "What's the holiday policy?" at midnight, pre-qualify job applicants before they reach your recruiters, and schedule interviews automatically. That's the power of modern <strong>AI personal assistant Birmingham</strong> technology working for your HR department.
            </p>

            <BlogInlineImage src={outsourcedInline2} alt="HR recruitment process with AI-powered candidate screening" />

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-lg mb-4">HR Automation Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Reduce time-to-hire by 40% with automated candidate screening",
                  "Answer employee policy questions 24/7 without HR intervention",
                  "Schedule interviews automatically based on team availability",
                  "Onboard new starters with guided AI-powered workflows"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              Technical Virtual Assistant Services Birmingham: IT Support Reimagined
            </h2>
            <p className="text-muted-foreground mb-6">
              For technology companies and businesses with complex IT needs, <strong>technical virtual assistant services Birmingham</strong> provide first-line support that never sleeps. These AI-powered systems understand technical terminology, can guide users through troubleshooting steps, and escalate complex issues to your human team when necessary.
            </p>
            
            <p className="text-muted-foreground mb-6">
              <strong>Tech virtual assistant services Birmingham</strong> are particularly valuable for managed service providers, software companies, and businesses with distributed workforces who need IT support outside traditional office hours.
            </p>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              Virtual Assistant Services for Solo Entrepreneurs Birmingham
            </h2>
            <p className="text-muted-foreground mb-6">
              Running a business alone is challenging enough without missing customer enquiries while you're in meetings or focused on delivery. <strong>Virtual assistant services for solo entrepreneurs Birmingham</strong> level the playing field, giving one-person businesses the same 24/7 responsiveness as larger competitors.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Starting from just <Link href="/pricing" className="text-primary hover:underline">£29 per month</Link>, solo entrepreneurs can access professional-grade customer engagement tools that qualify leads, answer FAQs, and book appointments—all while you focus on what you do best. Explore how AI chatbots help <Link href="/blog/reduce-missed-leads-website" className="text-primary hover:underline">reduce missed leads from your website</Link>.
            </p>

            <BlogInlineImage src={outsourcedInline3} alt="Solo entrepreneur working from modern home office with multiple screens" />

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              The Intelligent Personal Assistant Market in Birmingham
            </h2>
            <p className="text-muted-foreground mb-6">
              The <strong>intelligent personal assistant market Birmingham</strong> is growing rapidly as businesses recognise the ROI of AI-powered customer engagement. From the Jewellery Quarter to Digbeth, Birmingham companies are adopting these technologies to stay competitive in an increasingly digital marketplace.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Whether you need an <strong>AI personal assistant Birmingham</strong> for customer service, sales support, or internal operations, the technology has matured to the point where implementation is straightforward and affordable for businesses of all sizes.
            </p>

            {/* FAQ Section */}
            <section className="mt-16">
              <h2 className="text-2xl font-serif font-semibold mb-6">
                Frequently Asked Questions About 24/7 Chat Agents & Virtual Assistants in Birmingham
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

            {/* CTA */}
            <div className="mt-16 p-8 rounded-2xl bg-secondary/40 border border-primary/20 text-center">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Ready to Deploy 24/7 Chat Agents for Your Birmingham Business?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join hundreds of Birmingham businesses already using AI-powered virtual assistants to capture more leads and deliver exceptional customer service around the clock.
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

export default OutsourcedChatAgentsBlog;
