"use client";

import { AuthorBio } from "@/components/AuthorBio";
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const heroImage = "/assets/locations/ai-manchester.png";

const AIAgencyManchester = () => {
  const faqs = [
    {
      question: "What makes AIVized different from other AI agencies in Manchester?",
      answer: "Unlike many AI agencies that provide tools you configure yourself, AIVized is a fully managed service. We handle the complete setup, training, monitoring, and optimisation of your AI chatbot. You don't need any technical skills — we do everything. Plans start from £29/month with no long-term contracts."
    },
    {
      question: "How quickly can an AI agency set up a chatbot for my Manchester business?",
      answer: "We can have your AI chatbot fully operational within 24 hours. After subscribing, you share your business details with us, and our team handles the entire installation and configuration. No coding or technical involvement is required from your side."
    },
    {
      question: "What types of Manchester businesses benefit most from an AI agency?",
      answer: "Manchester businesses across all sectors benefit — restaurants handling booking enquiries, estate agents qualifying property leads, e-commerce stores providing 24/7 support, healthcare clinics managing appointments, legal firms scheduling consultations, and fitness studios handling class bookings. If your business gets customer enquiries, an AI agency can help."
    },
    {
      question: "How does hiring an AI agency compare to hiring a receptionist in Manchester?",
      answer: "A full-time receptionist in Manchester costs £22,000–£28,000 per year, works limited hours, takes holidays, and handles one conversation at a time. AIVized's managed AI service costs from £29/month, works 24/7/365, never takes leave, and handles unlimited conversations simultaneously."
    },
    {
      question: "Is AIVized based in Manchester?",
      answer: "AIVized is a UK-based AI agency serving Manchester businesses remotely. While our team works across the UK, we understand Manchester's unique business landscape, from the MediaCityUK tech scene to the Northern Quarter's hospitality industry. All support is provided by our UK-based team."
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
              AI Agency
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              Why Manchester Businesses Need an AI Agency in 2026
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
              <Image src={heroImage} alt="AI Agency Manchester - AIVized AI chatbot for local businesses" fill className="object-cover" priority />
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="lead text-xl text-muted-foreground mb-8">
              Manchester's business landscape has changed dramatically over the past decade. With over 20,000 digital businesses, a thriving startup ecosystem around MediaCityUK and the Northern Quarter, and a cost of doing business that continues to rise, local companies are looking for smarter ways to operate. An AI agency in Manchester might be exactly what your business needs to stay competitive in 2026.
            </p>

            <h2 id="why-manchester-businesses-need-ai">Why Manchester Businesses Are Turning to AI Agencies</h2>
            <p className="text-muted-foreground mb-6">
              Manchester is no longer just the industrial heart of the North — it's a digital powerhouse. From the tech startups of Salford Quays to the professional services firms in Spinningfields, businesses across the city face a common set of challenges:
            </p>

            <div className="not-prose my-8 grid gap-4">
              {[
                "Customer expectations for instant, 24/7 responses are higher than ever",
                "Staff recruitment in Manchester's competitive job market is costly and time-consuming",
                "Match days, concerts, and events create unpredictable surges in customer enquiries",
                "Traditional customer service models can't keep up with modern consumer behaviour",
                "DIY chatbot tools require ongoing technical maintenance that distracts from core business"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground mb-6">
              An <Link href="/locations/manchester" className="text-primary hover:underline">AI agency in Manchester</Link> bridges this gap by providing businesses with intelligent automation that captures leads, handles customer enquiries, and scales with your growth — without the overhead of hiring additional staff or the complexity of managing technology yourself.
            </p>

            <h2 id="what-an-ai-agency-does">What an AI Agency Actually Does for Manchester Businesses</h2>
            <p className="text-muted-foreground mb-6">
              The term "AI agency" gets thrown around loosely. A genuine AI agency serving Manchester businesses does more than sell software — it becomes an extension of your team. Here's what that looks like in practice:
            </p>

            <h3>Lead Generation That Works While You Sleep</h3>
            <p className="text-muted-foreground mb-6">
              Manchester's evening economy is one of the strongest in the UK. From restaurants in the Northern Quarter taking late bookings to estate agents listing properties after work hours, businesses that only operate 9-to-5 leave money on the table. An AI agency installs a trained chatbot on your website that captures every lead, qualifies their intent, and sends you notifications — even at 3am on a Sunday.
            </p>

            <h3>24/7 Customer Support Without the Headcount</h3>
            <p className="text-muted-foreground mb-6">
              Hiring customer support staff in Manchester costs £22,000–£28,000 per year per person. They work 37.5 hours a week, take holidays, and handle one conversation at a time. An AI agency provides a 24/7/365 AI employee that handles unlimited conversations simultaneously — for a fraction of the cost.
            </p>

            <h3>Automation That Adapts to Your Business</h3>
            <p className="text-muted-foreground mb-6">
              Unlike a DIY chatbot that breaks when you update your menu or change your prices, a managed AI agency constantly monitors and updates your chatbot. When your Manchester business evolves, your AI evolves with it — with zero work on your end.
            </p>

            <h2 id="choosing-the-right-ai-agency">How to Choose the Right AI Agency in Manchester</h2>
            <p className="text-muted-foreground mb-6">
              Not all AI agencies are created equal. Here's what to look for when evaluating options for your Manchester business:
            </p>

            <ul className="text-muted-foreground">
              <li><strong>Fully managed service:</strong> Do they handle setup, training, and ongoing maintenance, or do you do the work?</li>
              <li><strong>Local understanding:</strong> Do they understand Manchester's business landscape, from the hospitality scene to the tech sector?</li>
              <li><strong>Transparent pricing:</strong> Are costs clear with no hidden fees or surprise charges?</li>
              <li><strong>Quick deployment:</strong> Can they have your AI operational within 24–48 hours?</li>
              <li><strong>No long-term contracts:</strong> Can you cancel if it's not delivering value?</li>
              <li><strong>UK-based support:</strong> Is the support team based in the UK and available when you need them?</li>
            </ul>

            <h2 id="industries">Manchester Industries That Benefit Most from AI Agencies</h2>
            <p className="text-muted-foreground mb-6">
              While every business can benefit from AI automation, some Manchester sectors see particularly strong results:
            </p>

            <div className="not-prose my-8 grid gap-4">
              {[
                <span key="1"><strong>Restaurants & Bars:</strong> Handle booking enquiries, menu questions, event reservations, and group bookings 24/7 — especially valuable on match days and event nights.</span>,
                <span key="2"><strong>Real Estate & Estate Agents:</strong> Qualify property leads, schedule viewings, answer area questions, and capture buyer details around the clock.</span>,
                <span key="3"><strong>E-commerce & Retail:</strong> Provide instant product support, handle order enquiries, reduce abandoned carts, and capture after-hours sales.</span>,
                <span key="4"><strong>Healthcare & Clinics:</strong> Manage appointment bookings, patient triage, and FAQ handling outside office hours.</span>,
                <span key="5"><strong>Professional Services:</strong> Qualify leads, schedule consultations, and handle initial client enquiries for legal, financial, and consulting firms.</span>,
                <span key="6"><strong>Fitness & Gyms:</strong> Handle class bookings, membership enquiries, personal training consultations, and facility questions.</span>
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h2 id="real-results">Real Results: What Manchester Businesses Are Achieving</h2>
            <p className="text-muted-foreground mb-6">
              Manchester businesses using AI agencies report measurable improvements across key metrics. AIVized clients in Manchester typically see a 30% increase in captured leads within the first month, a 60% reduction in response times to customer enquiries, and significant cost savings compared to traditional customer service models. With AI handling 80% of standard enquiries automatically, business owners can focus on what matters most — growing their business.
            </p>

            <section className="mt-16">
              <h2 className="text-2xl font-serif font-semibold mb-6">
                Frequently Asked Questions About AI Agencies in Manchester
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
                Ready to Work with an AI Agency in Manchester?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                AIVized provides fully managed AI services to Manchester businesses across all industries. From your first onboarding call to ongoing optimisation, we handle everything. Plans start from just £29/month.
              </p>
              <Link
                href="/locations/manchester"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Learn More About AI Agency Manchester
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

export default AIAgencyManchester;
