"use client";

import { AuthorBio } from "@/components/AuthorBio";
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, CheckCircle2, Smartphone, MessageCircle, Clock3 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BlogInlineImage } from "@/components/BlogInlineImage";
const heroImage = "/assets/blog/ai-personal-assistant-hero.png";
const personalInline1 = "/assets/blog/ai-personal-inline-1.png";
const personalInline2 = "/assets/blog/ai-personal-inline-2.png";
const personalInline3 = "/assets/blog/ai-personal-inline-3.png";

const AIPersonalAssistantBlog = () => {
  const faqs = [
    {
      question: "What is an AI personal assistant for a UK business?",
      answer: "An AI personal assistant for a UK business is a managed chatbot that handles customer-facing tasks automatically, answering enquiries, collecting lead details, booking appointments, and responding to messages across your website, WhatsApp, or Instagram. Unlike a basic FAQ bot, it holds a natural conversation and can handle multi-step requests based on a knowledge base built from your specific business."
    },
    {
      question: "What tasks can an AI personal assistant handle for my business?",
      answer: "An AI personal assistant handles the tasks that would otherwise require your time or a member of staff: answering repeated questions about pricing, services, availability, and hours; collecting contact details from interested customers; booking appointments into your calendar; and escalating complex enquiries to you with full conversation context."
    },
    {
      question: "How is a managed AI personal assistant different from a chatbot I build myself?",
      answer: "A managed AI personal assistant is built, trained, installed, and maintained by AIVized on your behalf. You share your business details and we handle the technical setup and keep the assistant updated when your content changes. A self-build chatbot requires you to configure conversation flows, write responses, manage the integration, and maintain it yourself."
    },
    {
      question: "Which channels can an AI personal assistant work on?",
      answer: "AIVized's managed AI personal assistant works across your website, WhatsApp, and Instagram. One assistant, trained on your business, deployed to the channels your customers use. Each channel can be added separately or together, depending on where your enquiries come from."
    },
    {
      question: "How quickly can an AI personal assistant go live for my UK business?",
      answer: "Most businesses are live within 24 hours. You share your products, services, pricing, and common questions and we build and test the assistant, then install it on your chosen channels. There is no technical work required on your side."
    },
    {
      question: "How does WhatsApp integration work for an AI personal assistant?",
      answer: "WhatsApp integration connects your business number to the AI assistant via the official Meta Business API. When a customer sends a message, the assistant responds instantly using your knowledge base. It can answer questions, collect contact details, book appointments, and escalate to your team, all within the WhatsApp interface your customers already use daily."
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
              AI Assistants
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              AI Personal Assistant for Your UK Business: What It Does and How to Get One
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                3 February 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video bg-secondary">
              <Image src={heroImage} alt="AI personal assistant for UK business" fill className="object-cover" priority />
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="lead text-xl text-muted-foreground mb-8">
              An AI personal assistant for your business is a managed chatbot that handles customer-facing tasks automatically, responding to enquiries, capturing leads, and booking appointments across your website, WhatsApp, and social media. Unlike a member of staff, it works 24 hours a day without breaks, holidays, or sick days. Unlike a basic FAQ widget, it holds a real conversation.
            </p>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              What an AI Personal Assistant Does for Your Business
            </h2>
            <p className="text-muted-foreground mb-6">
              The core function of an AI personal assistant is to handle the messages that would otherwise require your time or a member of staff. Most UK small businesses receive the same questions repeatedly, about pricing, services, availability, and how to get started. An AI assistant answers these instantly, at any hour, leaving your team free to focus on work that requires human judgement.
            </p>

            <BlogInlineImage src={personalInline1} alt="UK business owner reviewing AI personal assistant conversations on a tablet" />

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <Smartphone className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Multi-Channel</h3>
                <p className="text-sm text-muted-foreground">One AI assistant works across your website, WhatsApp, and Instagram.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <Clock3 className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Always Available</h3>
                <p className="text-sm text-muted-foreground">Responds to enquiries 24 hours a day without breaks or holidays.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <MessageCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Natural Conversations</h3>
                <p className="text-sm text-muted-foreground">Holds a real conversation based on your business knowledge base.</p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              Tasks an AI Personal Assistant Handles Automatically
            </h2>
            <p className="text-muted-foreground mb-6">
              During setup, we train your AI assistant on your specific business, covering products, services, pricing, FAQs, and how you'd like to communicate with customers. Once live, it handles:
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
              <ul className="space-y-3">
                {[
                  "Answer repeated questions about pricing, services, and availability",
                  "Collect contact details from interested customers",
                  "Guide visitors toward booking, quoting, or purchasing",
                  "Respond to messages outside office hours with accurate, on-brand answers",
                  "Escalate complex enquiries to your team with full conversation context",
                  "Book appointments directly into your calendar or booking system"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              Multi-Channel: Website, WhatsApp, and Instagram
            </h2>
            <p className="text-muted-foreground mb-6">
              Customers contact businesses through different channels depending on their habit and preference. Some send a message via website chat. Others prefer WhatsApp. Others reach out through Instagram DMs. A managed AI personal assistant works across all three: one assistant, trained once on your business, deployed wherever your customers are.
            </p>

            <BlogInlineImage src={personalInline2} alt="AI personal assistant working across website, WhatsApp and Instagram for a UK business" />

            <p className="text-muted-foreground mb-6">
              With over 33 million UK users on WhatsApp and 30 million on Instagram, meeting customers on the platforms they already use increases response rates and conversion. Your AI assistant doesn't require customers to visit your website or fill in a contact form. They get an instant answer in the app they're already using.
            </p>

            <h2 className="text-2xl font-serif font-semibold mt-12 mb-4">
              How a Managed Service Works
            </h2>
            <p className="text-muted-foreground mb-6">
              An AI personal assistant from AIVized is a fully managed service. You don't need technical skills, development resources, or time to configure conversation flows. Here's how it works:
            </p>

            <BlogInlineImage src={personalInline3} alt="Simple four-step process for getting an AI personal assistant live for a UK business" />

            <ol className="text-muted-foreground space-y-3 mb-6">
              <li><strong>1. Share your business details:</strong> Products, services, pricing, FAQs, and brand voice</li>
              <li><strong>2. We build and train your assistant:</strong> Custom-trained on your specific business, tested before launch</li>
              <li><strong>3. We install it on your channels:</strong> Website, WhatsApp, or Instagram, whichever you need</li>
              <li><strong>4. We monitor and update it:</strong> Ongoing improvements and updates when your content changes</li>
            </ol>
            <p className="text-muted-foreground mb-6">
              Plans start from <Link href="/pricing" className="text-primary hover:underline">£29 per month</Link> with no long-term contracts and a 3-day free trial. Explore how AI chatbots help <Link href="/blog/automate-customer-enquiries-personal-touch" className="text-primary hover:underline">automate enquiries without losing the personal touch</Link>.
            </p>

            <section className="mt-16">
              <h2 className="text-2xl font-serif font-semibold mb-6">
                Frequently Asked Questions About AI Personal Assistants for UK Businesses
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
                Ready to Get Your AI Personal Assistant?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                AIVized provides managed AI personal assistants for UK businesses across all industries. We handle installation, training, monitoring, and updates.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Explore Pricing
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

export default AIPersonalAssistantBlog;
