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
const whatsappHero = "/assets/blog/whatsapp-chatbot-hero.png";
const whatsappInline1 = "/assets/blog/whatsapp-inline-1.png";
const whatsappInline2 = "/assets/blog/whatsapp-inline-2.png";
const whatsappInline3 = "/assets/blog/whatsapp-inline-3.png";

const WhatsAppChatbotBlog = () => {
  const faqs = [
    {
      question: "How does a WhatsApp chatbot work for a UK business?",
      answer: "A WhatsApp chatbot connects to your business number via the official Meta Business API. When a customer sends a message, the chatbot responds instantly using a knowledge base we build from your products, services, and FAQs. It handles enquiries 24 hours a day without any action required from you."
    },
    {
      question: "Do I need technical skills to set up a WhatsApp chatbot?",
      answer: "No. AIVized's managed service handles the full setup — connecting to the WhatsApp Business API, training the chatbot on your business, and installing it on your number. You share your business details and we deliver a working chatbot within 24 hours."
    },
    {
      question: "What kinds of messages can a WhatsApp chatbot handle?",
      answer: "A WhatsApp chatbot handles the most common customer messages — questions about pricing, services, opening hours, bookings, and availability. It can collect contact details, send automated follow-ups, and escalate complex enquiries to your team with full conversation context."
    },
    {
      question: "Is an AI chatbot for small business UK affordable on WhatsApp?",
      answer: "Yes. AIVized offers managed WhatsApp chatbots from £29 per month. This includes setup, training, monitoring, and ongoing updates. There is no large upfront cost and no technical work required on your part."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-20">
        <article className="container-narrow">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-6">
              WhatsApp
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              WhatsApp Chatbot for UK Businesses: 24/7 AI Messaging
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                28 January 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video bg-secondary relative">
              <Image src={whatsappHero} alt="WhatsApp Chatbot for UK Business" fill className="object-cover" priority />
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="lead text-xl text-muted-foreground mb-8">
              Over 33 million people in the UK use WhatsApp regularly, and many of them prefer to contact businesses through messaging rather than phone or email. A managed WhatsApp chatbot means every message gets an instant response — whether it arrives at noon on a Tuesday or 11pm on a Sunday. If you want to understand how chatbots compare to traditional support, see our <Link href="/blog/ai-chatbot-vs-live-chat-uk" className="text-primary hover:underline">AI chatbot vs live chat comparison</Link>.
            </p>

            <h2 id="how-whatsapp-chatbots-work">How WhatsApp Chatbots Work for UK Businesses</h2>
            <p>A WhatsApp chatbot connects to your business number via the official Meta Business API. When a customer sends a message, the chatbot responds instantly from a knowledge base built during setup. Unlike manual replies, the chatbot is available at all hours and handles multiple conversations simultaneously — so a busy Saturday evening doesn't mean a queue of unanswered messages on Monday morning.</p>

            <BlogInlineImage src={whatsappInline1} alt="WhatsApp business messaging on smartphone in modern UK office" />

            <p>During setup, we train your chatbot on your products, pricing, and the most common questions your customers ask. Once live, it handles:</p>
            <div className="not-prose my-8 grid gap-4">
              {[
                "Responds to messages within seconds, 24 hours a day",
                "Answers questions about services, pricing, and availability",
                "Collects contact details from interested leads",
                "Guides customers toward booking or purchasing",
                "Escalates complex enquiries to your team with full conversation context"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <h2 id="why-whatsapp-for-uk-businesses">Why WhatsApp Is the Right Channel for UK Businesses</h2>
            <p>WhatsApp has a message open rate above 90%, compared to around 20% for email. Customers are already using it daily — they don't need to download an app, create an account, or visit your website. They send a message the same way they'd text a friend, and the chatbot responds with the same speed.</p>

            <BlogInlineImage src={whatsappInline2} alt="Customer messaging a UK business on WhatsApp and receiving instant reply" />

            <p>For UK small businesses, this matters because most enquiries arrive outside office hours — evenings, weekends, and lunch breaks. A WhatsApp chatbot captures those enquiries without requiring you or your team to be available. Every message gets a response, every lead gets captured.</p>

            <div className="not-prose my-8 p-6 rounded-lg bg-green-500/10 border border-green-500/20">
              <h3 className="text-lg font-semibold mb-4">WhatsApp in the UK</h3>
              <p className="text-muted-foreground">Over 33 million UK users check WhatsApp daily. Businesses that respond within a minute convert significantly more enquiries than those that reply the next working day. Automation closes that gap without requiring 24/7 staffing.</p>
            </div>

            <h2 id="ai-chatbot-for-small-business-uk">AI Chatbot for Small Business UK</h2>
            <p>Small businesses benefit most from WhatsApp automation because every missed enquiry matters. A missed DM is a missed sale — there's no reception team to catch it. With AIVized's managed service, your WhatsApp number has a trained AI chatbot handling enquiries from the moment the service goes live.</p>

            <BlogInlineImage src={whatsappInline3} alt="Small business owner reviewing customer engagement analytics on a laptop" />

            <p>From corner shops to local service providers, UK small businesses that add WhatsApp automation typically see:</p>
            <ul>
              <li>Responses to every message, regardless of time or volume</li>
              <li>More leads captured from out-of-hours enquiries</li>
              <li>Less time spent on repetitive questions about pricing, availability, and hours</li>
              <li>Qualified leads passed to the team with full conversation context</li>
            </ul>
            <p>
              With managed solutions starting from <Link href="/pricing" className="text-primary hover:underline">£29/month</Link>, there's no large upfront cost and no technical skills required. Learn more about <Link href="/blog/reduce-missed-leads-website" className="text-primary hover:underline">how to reduce missed leads</Link> across your website and messaging channels.
            </p>

            <h2>Getting Started with a WhatsApp Chatbot</h2>
            <p>Getting a WhatsApp chatbot live takes less than 24 hours with AIVized's managed service:</p>
            <ol>
              <li><strong>Share your business details:</strong> Products, services, pricing, common questions, and your brand voice</li>
              <li><strong>We build and connect the chatbot:</strong> Trained on your business, connected to your WhatsApp Business number</li>
              <li><strong>Go live:</strong> Your chatbot starts responding to messages immediately</li>
              <li><strong>We monitor and update:</strong> Ongoing improvements based on real conversations</li>
            </ol>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-border"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 p-8 md:p-12 rounded-2xl bg-secondary/40 border border-border text-center"
          >
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Ready to Get Your WhatsApp Chatbot?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              AIVized manages everything — connection, training, and monitoring. From £29/month with no technical skills required.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View Pricing
            </Link>
          </motion.div>
          <AuthorBio />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsAppChatbotBlog;
