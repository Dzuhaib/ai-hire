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
      answer: "Traditional outsourced chat agents are human staff, usually based offshore, who respond to customer messages manually. AI chat agents are software. They respond in under a second, handle unlimited conversations simultaneously, and are available 24/7 without shift patterns, sick days, or overtime. For Birmingham businesses, the key difference is cost and consistency: AI chat agents deliver the same quality at any hour for a fixed monthly fee."
    },
    {
      question: "What kinds of enquiries can AI chat agents handle for Birmingham businesses?",
      answer: "AI chat agents handle the most common customer enquiries: questions about products, services, pricing, opening hours, bookings, and availability. They collect contact details from interested leads and escalate complex or sensitive enquiries to your team with full conversation context. For most Birmingham businesses, this covers 70–80% of incoming messages."
    },
    {
      question: "How quickly can AI chat agents go live for a Birmingham business?",
      answer: "With AIVized's managed service, most Birmingham businesses are live within 24 hours. We connect to your website or WhatsApp, train the AI on your business, test the responses, and launch. You share your business details and we handle everything else."
    },
    {
      question: "Are AI chat agents affordable for small Birmingham businesses?",
      answer: "Yes. AIVized's managed AI chat agent service starts from £29 per month. This includes installation, training, 24/7 monitoring, and ongoing updates. There are no setup fees in the thousands, no long-term contracts, and a 3-day free trial so you can verify performance before committing."
    },
    {
      question: "What happens when an AI chat agent can't help a customer?",
      answer: "When a question falls outside the AI's knowledge base, it passes the conversation to your team with the full message history attached. Your team can pick up the conversation with complete context and no customer has to repeat themselves."
    },
    {
      question: "Can AI chat agents help Birmingham businesses outside office hours?",
      answer: "This is where AI chat agents provide the clearest value. Birmingham businesses receive enquiries in the evenings, on weekends, and during public holidays, times when human staff aren't available. AI chat agents respond instantly at any hour, capturing leads and answering questions that would otherwise wait until the next working day."
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
              Customer Support
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              24/7 AI Chat Agents for Birmingham Businesses
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
              <Image src={heroImage} alt="24/7 AI chat agents for Birmingham businesses" fill className="object-cover" priority />
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="lead text-xl text-muted-foreground mb-8">
              Birmingham is the UK's second-largest city and home to over 40,000 businesses, from independent retailers and restaurants to professional services firms and tech companies. For most of them, customer enquiries don't stop at 5pm. AI chat agents give <Link href="/locations/birmingham" className="text-primary hover:underline">Birmingham businesses</Link> a way to respond instantly to every message, around the clock, without hiring additional staff. See our <Link href="/blog/ai-chatbot-small-business-uk-guide" className="text-primary hover:underline">complete guide to AI chatbots for UK small businesses</Link>.
            </p>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              Why Birmingham Businesses Need 24/7 Chat Coverage
            </h2>
            <p className="text-muted-foreground mb-6">
              Research consistently shows that the speed of first response is the strongest predictor of whether an enquiry converts into a customer. A business that responds within a minute converts significantly more leads than one that responds the next morning. For Birmingham businesses, this is a practical problem, as customers browse and send messages in the evenings and at weekends, when staff aren't at their desks.
            </p>

            <BlogInlineImage src={outsourcedInline1} alt="AI chat agent responding to customer enquiries around the clock for a Birmingham business" />

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <MessageSquare className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Never Miss a Lead</h3>
                <p className="text-sm text-muted-foreground">Capture enquiries at 3am just as effectively as 3pm with round-the-clock AI coverage.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Scale Without Hiring</h3>
                <p className="text-sm text-muted-foreground">Handle unlimited conversations simultaneously without increasing headcount or cost.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <Building2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Consistent Quality</h3>
                <p className="text-sm text-muted-foreground">Every customer receives the same accurate, on-brand response every time.</p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              What AI Chat Agents Handle Automatically
            </h2>
            <p className="text-muted-foreground mb-6">
              During setup, we train your AI chat agent on your products, services, pricing, and the questions your customers ask most often. Once live, the agent handles the majority of incoming messages without any action from your team.
            </p>

            <BlogInlineImage src={outsourcedInline2} alt="Birmingham business owner reviewing AI chat agent conversation logs on a laptop" />

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-lg mb-4">Common Tasks Handled Automatically</h3>
              <ul className="space-y-3">
                {[
                  "Answer questions about products, services, pricing, and availability",
                  "Collect contact details from interested customers",
                  "Guide visitors toward booking, quoting, or purchasing",
                  "Respond to out-of-hours enquiries with immediate, accurate answers",
                  "Pass complex or sensitive issues to your team with full conversation context"
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
              Traditional outsourced chat agents (human staff responding to messages on your behalf) typically cost several hundred pounds per month at a minimum, involve handover processes, and introduce inconsistency as different agents respond differently to the same question.
            </p>
            <p className="text-muted-foreground mb-6">
              AI chat agents respond in under a second, handle unlimited conversations simultaneously, and give the same accurate answer every time. For Birmingham businesses receiving 10 or 10,000 messages a month, the cost and consistency advantages are significant.
            </p>

            <BlogInlineImage src={outsourcedInline3} alt="Comparison of AI chat agent vs traditional customer service costs for Birmingham SMEs" />

            <p className="text-muted-foreground mb-6">
              Starting from <Link href="/pricing" className="text-primary hover:underline">£29 per month</Link>, AIVized's managed AI chat agent service includes installation, training, monitoring, and ongoing updates. There are no large upfront costs and no long-term contracts. Explore how AI chatbots help <Link href="/blog/reduce-missed-leads-website" className="text-primary hover:underline">reduce missed leads from your website</Link>.
            </p>

            <section className="mt-16">
              <h2 className="text-2xl font-serif font-semibold mb-6">
                Frequently Asked Questions About AI Chat Agents for Birmingham Businesses
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
                Ready to Add 24/7 AI Chat Agents to Your Birmingham Business?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                AIVized handles setup, training, and monitoring. Your AI chat agent is live within 24 hours. From £29/month with a 3-day free trial.
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
