"use client";

import { AuthorBio } from "@/components/AuthorBio";
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const heroImage = "/assets/locations/ai-support.png";

const AIAgencyDubai = () => {
  const faqs = [
    {
      question: "What makes AIVized different from other AI agencies in Dubai?",
      answer:
        "AIVized is a fully managed service, not a tool you configure yourself. We scope the work in writing, build and integrate it, and offer optional ongoing support. You are not left to figure out prompts, integrations, or maintenance alone.",
    },
    {
      question: "How quickly can you start a project for my Dubai business?",
      answer:
        "It starts with a discovery call. After that we send a written scope, timeline, and price. Smaller projects can begin quickly; larger systems are scheduled once the scope is agreed.",
    },
    {
      question: "What types of Dubai businesses benefit most?",
      answer:
        "Businesses that receive a steady flow of enquiries, from hospitality and real estate to clinics, professional services, e-commerce, and training providers. If enquiries arrive across several channels, connecting and automating them usually helps.",
    },
    {
      question: "Is AIVized based in Dubai?",
      answer:
        "AIVized works remotely with businesses across the UAE. Discovery calls, reviews, and handover sessions are scheduled online, so you get senior delivery without needing a supplier to be physically in the same building.",
    },
    {
      question: "Do you only build AI chatbots?",
      answer:
        "No. We work across six connected services: AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development. We recommend the mix that removes your biggest bottleneck first.",
    },
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
              AI Agency
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              Why Dubai Businesses Need an AI Agency in 2026
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                25 July 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video bg-secondary">
              <Image src={heroImage} alt="AI agency for Dubai businesses" fill className="object-cover" priority />
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="lead text-xl text-muted-foreground mb-8">
              Dubai businesses operate in one of the most connected markets in the world. Customers, investors,
              and partners are spread across multiple time zones, and expectations for response speed are high.
              That combination puts pressure on teams to answer quickly, follow up consistently, and keep their
              digital systems working together.
            </p>

            <h2 id="why-dubai-businesses-need-ai">Why Dubai Businesses Are Turning to AI Agencies</h2>
            <p className="text-muted-foreground mb-6">
              Dubai is a city of many markets at once. From the restaurants and hotels of Marina and Downtown to
              the professional services firms of DIFC and the e-commerce brands serving the wider region, the
              common pressure is the same: enquiries arrive faster than a small team can handle manually.
            </p>

            <div className="not-prose my-8 grid gap-4">
              {[
                "Customers expect a fast, professional response at any hour",
                "Enquiries arrive across the website, WhatsApp, social media, and phone",
                "Hiring additional staff for every peak is expensive and slow",
                "Tools often sit in silos, so information is copied between systems",
                "DIY chatbot tools create maintenance work for a team that is already busy",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground mb-6">
              An <Link href="/locations/dubai" className="text-primary hover:underline">AI agency in Dubai</Link>{" "}
              helps close that gap by connecting the enquiry channels and automating the repetitive parts of
              follow-up, so the team can focus on the conversations that need a person.
            </p>

            <h2 id="what-an-ai-agency-does">What an AI Agency Actually Does for Dubai Businesses</h2>
            <p className="text-muted-foreground mb-6">
              The term &quot;AI agency&quot; is used loosely. A useful partner does more than sell software. They
              look at how the business works, recommend the smallest useful change, and build it properly.
            </p>

            <h3>Lead capture without missed enquiries</h3>
            <p className="text-muted-foreground mb-6">
              A website or WhatsApp enquiry that arrives after hours should not wait until the next morning. We
              build systems that answer common questions, capture contact details, and alert the right person, so
              enquiries are followed up consistently rather than depending on someone remembering to check.
            </p>

            <h3>Automation around existing tools</h3>
            <p className="text-muted-foreground mb-6">
              Most Dubai businesses already have a website, a CRM, a booking system, or a set of spreadsheets.
              Rather than forcing a large platform change, we connect what is already there and remove the manual
              steps in between.
            </p>

            <h3>Search and marketing that support the system</h3>
            <p className="text-muted-foreground mb-6">
              Automation only helps if the right people are reaching you. Technical SEO, content, GEO, and paid
              campaigns are planned alongside the systems work so visibility and follow-up improve together.
            </p>

            <h2 id="choosing-the-right-ai-agency">How to Choose the Right AI Agency in Dubai</h2>
            <p className="text-muted-foreground mb-6">
              When evaluating AI, automation, or software partners in Dubai, a few questions separate a serious
              delivery team from a reseller:
            </p>

            <ul className="text-muted-foreground">
              <li><strong>Written scope:</strong> Do they agree what is included, and what happens after launch, before work starts?</li>
              <li><strong>Direct access:</strong> Can you speak to the people doing the work, not just a sales contact?</li>
              <li><strong>Integration fit:</strong> Will they work with your existing website, CRM, and internal tools?</li>
              <li><strong>Clear pricing:</strong> Is the price fixed for the agreed scope, with support priced separately?</li>
              <li><strong>Handover:</strong> Do you receive documentation so you are not dependent on one supplier?</li>
              <li><strong>Breadth:</strong> Can they handle AI, automation, search, marketing, and software, or will you need to coordinate several vendors?</li>
            </ul>

            <h2 id="industries">Dubai Industries That Benefit Most</h2>
            <p className="text-muted-foreground mb-6">
              Several Dubai sectors see a clear benefit from connected AI, automation, and digital work:
            </p>

            <div className="not-prose my-8 grid gap-4">
              {[
                <span key="1"><strong>Hospitality:</strong> Handle booking, availability, and menu enquiries across time zones.</span>,
                <span key="2"><strong>Real Estate:</strong> Qualify buyers and tenants, capture requirements, and schedule viewings.</span>,
                <span key="3"><strong>E-commerce & Retail:</strong> Answer product and delivery questions, and reduce abandoned carts.</span>,
                <span key="4"><strong>Healthcare & Clinics:</strong> Manage appointment requests, registration, and routine questions.</span>,
                <span key="5"><strong>Professional Services:</strong> Triage enquiries, route them to the right person, and automate follow-up.</span>,
                <span key="6"><strong>Fitness & Education:</strong> Handle membership, trial, course, and class enquiries automatically.</span>,
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h2 id="what-good-looks-like">What a Good Engagement Looks Like</h2>
            <p className="text-muted-foreground mb-6">
              A practical engagement starts with a short discovery call to find the biggest bottleneck. You then
              receive a written scope, timeline, and price. Work is delivered in stages with checkpoints, and you
              receive documentation and a handover at the end. If you want ongoing support, that is agreed
              separately so you always know what you are paying for.
            </p>

            <section className="mt-16">
              <h2 className="text-2xl font-serif font-semibold mb-6">
                Frequently Asked Questions About AI Agencies in Dubai
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
                Ready to Work with an AI Agency in Dubai?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Tell us what is slowing the business down. We will recommend the right mix of AI, automation,
                search, marketing, and software, then give you a clear next step with no obligation.
              </p>
              <Link
                href="/locations/dubai"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Learn More About AI Agency Dubai
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

export default AIAgencyDubai;
