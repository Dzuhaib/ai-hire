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
      question: "How do AI chat agents differ from traditional outsourced chat agents?",
      answer:
        "Traditional outsourced chat agents are human staff, usually based offshore, who respond to customer messages manually. AI chat agents are software. They respond immediately, handle many conversations at once, and are available at any hour without shift patterns. For Abu Dhabi businesses, the main difference is consistency and cost: the same quality of answer is available all day for a fixed monthly fee.",
    },
    {
      question: "What kinds of enquiries can AI chat agents handle for Abu Dhabi businesses?",
      answer:
        "AI chat agents handle the most common enquiries: questions about products, services, pricing, opening hours, bookings, and availability. They collect contact details from interested leads and pass complex or sensitive enquiries to your team with the full conversation attached.",
    },
    {
      question: "How quickly can AI chat agents go live for an Abu Dhabi business?",
      answer:
        "It starts with a discovery call and a written scope. Once the scope and content are agreed, we connect to your website or WhatsApp, train the assistant on your business, test the responses, and launch.",
    },
    {
      question: "Are AI chat agents affordable for smaller Abu Dhabi businesses?",
      answer:
        "Managed AI chat agents are typically far cheaper than adding full-time support headcount. We agree a fixed monthly price for the agreed scope, and ongoing support is priced separately so you always know what you are paying for.",
    },
    {
      question: "What happens when an AI chat agent can't help a customer?",
      answer:
        "When a question falls outside the assistant's knowledge, it passes the conversation to your team with the full message history attached, so no customer has to repeat themselves.",
    },
    {
      question: "Can AI chat agents help Abu Dhabi businesses outside office hours?",
      answer:
        "This is where AI chat agents are most useful. Enquiries arrive in the evenings, on weekends, and during public holidays, when staff are not available. An AI chat agent can acknowledge and answer those enquiries immediately, capturing the lead instead of letting it wait until the next working day.",
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
              Customer Support
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              24/7 AI Chat Agents for Abu Dhabi Businesses
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
              <Image src={heroImage} alt="AI chat agents for Abu Dhabi businesses" fill className="object-cover" priority />
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="lead text-xl text-muted-foreground mb-8">
              Abu Dhabi businesses serve a mix of residents, government-linked organisations, and international
              clients. Enquiries rarely stop at 5pm. AI chat agents give{" "}
              <Link href="/locations/abu-dhabi" className="text-primary hover:underline">Abu Dhabi businesses</Link>{" "}
              a way to respond to common questions at any hour, without immediately adding headcount. See our{" "}
              <Link href="/blog/ai-chatbot-small-business-uae-guide" className="text-primary hover:underline">
                complete guide to AI chatbots for UAE small businesses
              </Link>.
            </p>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              Why Abu Dhabi Businesses Need Round-the-Clock Coverage
            </h2>
            <p className="text-muted-foreground mb-6">
              The speed of the first response is one of the clearest factors in whether an enquiry turns into a
              customer. A business that answers in seconds has an advantage over one that replies the next
              morning. For many Abu Dhabi businesses, this is a practical problem, because people browse and send
              messages in the evenings and at weekends, when staff are not at their desks.
            </p>

            <BlogInlineImage src={outsourcedInline1} alt="AI chat agent responding to customer enquiries around the clock for an Abu Dhabi business" />

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <MessageSquare className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Fewer Missed Enquiries</h3>
                <p className="text-sm text-muted-foreground">Enquiries received late at night are acknowledged and captured, not left until morning.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Scale Without Hiring</h3>
                <p className="text-sm text-muted-foreground">Handle many conversations at once without increasing headcount for every peak.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <Building2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Consistent Answers</h3>
                <p className="text-sm text-muted-foreground">Every customer receives the same accurate, on-brand response.</p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              What AI Chat Agents Handle Automatically
            </h2>
            <p className="text-muted-foreground mb-6">
              During setup, we train your assistant on your products, services, pricing, and the questions your
              customers ask most often. Once live, it handles routine messages without any action from your team.
            </p>

            <BlogInlineImage src={outsourcedInline2} alt="Abu Dhabi business owner reviewing AI chat agent conversation logs on a laptop" />

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-lg mb-4">Common Tasks Handled Automatically</h3>
              <ul className="space-y-3">
                {[
                  "Answer questions about products, services, pricing, and availability",
                  "Collect contact details from interested customers",
                  "Guide visitors toward booking, quoting, or purchasing",
                  "Respond to out-of-hours enquiries with immediate, accurate answers",
                  "Pass complex or sensitive issues to your team with full conversation context",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              AI Chat Agents vs Traditional Outsourced Chat Agents
            </h2>
            <p className="text-muted-foreground mb-6">
              Traditional outsourced chat agents are human staff responding to messages on your behalf. They
              typically cost several hundred dollars per month at a minimum, involve handover processes, and can
              be inconsistent as different agents answer the same question differently.
            </p>
            <p className="text-muted-foreground mb-6">
              AI chat agents respond immediately, handle many conversations at once, and give the same accurate
              answer every time. For Abu Dhabi businesses of any size, that consistency is the main advantage.
            </p>

            <BlogInlineImage src={outsourcedInline3} alt="Comparison of AI chat agent vs traditional customer service for Abu Dhabi SMEs" />

            <p className="text-muted-foreground mb-6">
              AIVized&apos;s managed AI chat agent service includes setup, training, monitoring, and ongoing updates.
              There are no large upfront costs and no long-term contracts. Explore how AI chatbots help{" "}
              <Link href="/blog/reduce-missed-leads-website" className="text-primary hover:underline">
                reduce missed leads from your website
              </Link>.
            </p>

            <section className="mt-16">
              <h2 className="text-2xl font-serif font-semibold mb-6">
                Frequently Asked Questions About AI Chat Agents for Abu Dhabi Businesses
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
                Ready to Add AI Chat Agents to Your Abu Dhabi Business?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Tell us what is slowing your team down. We will recommend the right setup, provide a written
                scope, and explain exactly what happens next.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
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
