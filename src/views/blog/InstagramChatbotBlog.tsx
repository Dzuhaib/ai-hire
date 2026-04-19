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
const instagramHero = "/assets/blog/instagram-chatbot-hero.png";
const instagramInline1 = "/assets/blog/instagram-inline-1.png";
const instagramInline2 = "/assets/blog/instagram-inline-2.png";
const instagramInline3 = "/assets/blog/instagram-inline-3.png";

const InstagramChatbotBlog = () => {
  const faqs = [
    {
      question: "How does an Instagram chatbot capture leads for my UK business?",
      answer: "The chatbot responds to every DM instantly, asks qualifying questions about the customer's needs, and collects their contact details. Leads are sent to you automatically so you can follow up at a time that suits you. No DM goes unanswered, even at midnight."
    },
    {
      question: "Does an Instagram chatbot replace my social media team?",
      answer: "No. It handles the volume work — answering repeated questions, collecting contact details, and responding out of hours. Your team focuses on complex conversations, creative content, and relationships that require a human. The chatbot makes your team more productive, not redundant."
    },
    {
      question: "What kinds of businesses use Instagram chatbots in the UK?",
      answer: "Restaurants taking reservations, beauty salons booking appointments, retailers answering product questions, fitness studios promoting classes, and service businesses qualifying leads. Any business that receives enquiries through Instagram DMs benefits from automation."
    },
    {
      question: "Is an AI chatbot for small business UK effective on Instagram?",
      answer: "Yes. Small businesses benefit most because every missed enquiry matters. A managed Instagram chatbot means faster response times and higher conversion rates from DM enquiries — with no technical work required on your part."
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
            <span className="inline-block px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">Instagram</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              Instagram Chatbot for UK Businesses: Automate DMs and Capture Leads 24/7
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />30 January 2026</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />6 min read</span>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video bg-secondary relative">
              <Image src={instagramHero} alt="Instagram Chatbot for UK Business" fill className="object-cover" priority />
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              Instagram has evolved from a photo-sharing app to a powerful business platform. With over 30 million UK users, it's where your customers discover, research, and connect with brands. But managing DMs, comments, and enquiries manually is time-consuming and often impossible to scale. Learn how to <Link href="/blog/automate-customer-enquiries-personal-touch" className="text-primary hover:underline">automate enquiries without losing the personal touch</Link>.
            </p>

            <h2 id="how-instagram-chatbots-work">How Instagram Chatbots Work for UK Businesses</h2>
            <p>An Instagram chatbot connects to your business account via the official Meta API. When someone sends your account a DM, the chatbot responds instantly using the knowledge base we build during setup. Unlike manual replies, the chatbot is available at all hours and handles any volume of messages simultaneously.</p>

            <BlogInlineImage src={instagramInline1} alt="Instagram DM automation on smartphone with business replies" />

            <p>For UK businesses, this solves a specific problem: customers discover your brand on Instagram during evenings and weekends, then send a DM enquiring about a product or service. Without 24/7 coverage, that message sits unanswered until the next working day. By then, many customers have already moved on.</p>

            <h2 id="what-instagram-chatbot-handles">What an Instagram Chatbot Handles Automatically</h2>
            <p>During setup, we train your chatbot on your products, pricing, services, and the most common questions your customers ask. Once live, it handles:</p>
            <div className="not-prose my-8 grid gap-4">
              {[
                "Responds to DMs within seconds, 24 hours a day",
                "Answers questions about products, pricing, and availability",
                "Collects contact details from interested leads",
                "Guides customers toward booking or purchasing",
                "Escalates complex enquiries to your team with full conversation context"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <p>The chatbot does not replace your team — it handles the volume that would otherwise go unanswered, then passes qualified leads to you with full context.</p>

            <BlogInlineImage src={instagramInline2} alt="UK small business owner reviewing Instagram chatbot conversations on a laptop" />

            <h2 id="instagram-chatbots-small-business">Instagram Chatbots for UK Small Businesses</h2>
            <p>You do not need a large following or a dedicated social media team to benefit from Instagram automation. Small businesses with even a modest Instagram presence — restaurants taking bookings, beauty salons managing appointments, retailers answering product questions — see the clearest benefit because every missed DM represents a real, recoverable customer.</p>
            <p>Instagram's own data shows that speed of response correlates directly with conversion rate. A business that replies within a minute converts significantly more DM enquiries than one that replies the next day. Automation closes that gap without requiring you to monitor your phone constantly.</p>

            <div className="not-prose my-8 p-6 rounded-lg bg-pink-500/10 border border-pink-500/20">
              <h3 className="text-lg font-semibold mb-4">Instagram DM Statistics</h3>
              <p className="text-muted-foreground">150 million people start conversations with businesses on Instagram every month. Without automation, most businesses can only respond during working hours—missing over 60% of potential opportunities.</p>
            </div>

            <h2 id="ai-chatbot-for-small-business-uk">AI Chatbot for Small Business UK</h2>
            <p>Instagram chatbots aren't just for big brands. An <Link href="/blog/ai-chatbot-small-business-uk-guide" className="text-primary hover:underline">AI chatbot for small business UK</Link> can level the playing field, allowing independents and SMEs to compete with larger competitors.</p>

            <BlogInlineImage src={instagramInline3} alt="Marketing team reviewing Instagram engagement analytics" />

            <p>Small business benefits include:</p>
            <ul>
              <li>No need for dedicated social media staff</li>
              <li>Consistent response quality regardless of volume</li>
              <li>Ability to handle viral moments and traffic spikes</li>
              <li>Professional appearance that builds trust</li>
              <li>Valuable insights from conversation analytics</li>
            </ul>
            <p>From boutique retailers to local service providers, UK small businesses are discovering that Instagram chatbots deliver enterprise-level customer experience at SME-friendly prices.</p>

            <h2>Why Instagram Automation Matters Now</h2>
            <p>The social media landscape is increasingly competitive. Users expect instant responses and personalised interactions. Businesses that can't deliver risk losing followers—and customers—to competitors who can.</p>
            <p>With AIVized's managed Instagram chatbot service, you get:</p>
            <ol>
              <li><strong>Complete Setup:</strong> We connect and configure everything for you</li>
              <li><strong>Custom Responses:</strong> Your chatbot speaks in your brand's voice</li>
              <li><strong>Continuous Learning:</strong> The AI improves based on real conversations</li>
              <li><strong>Human Handover:</strong> Seamless escalation when needed</li>
            </ol>
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
            <h3 className="text-2xl font-serif font-semibold mb-4">Ready to Automate Your Instagram DMs?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">Join hundreds of UK businesses already using AIVized's managed Instagram chatbot service. From £29/month with complete setup included.</p>
            <Link href="/pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">View Pricing</Link>
          </motion.div>
                  <AuthorBio />
        </article>
      </main>
      
      
      <Footer />
    </div>
  );
};

export default InstagramChatbotBlog;
