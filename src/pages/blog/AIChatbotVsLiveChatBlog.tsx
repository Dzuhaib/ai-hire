import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlogInlineImage } from "@/components/BlogInlineImage";
import heroImage from "@/assets/blog/ai-chatbot-vs-live-chat-hero.png";
import vsInline1 from "@/assets/blog/vs-livechat-inline-1.png";
import vsInline2 from "@/assets/blog/vs-livechat-inline-2.png";
import vsInline3 from "@/assets/blog/vs-livechat-inline-3.png";

const faqs = [
  {
    question: "Is an AI chatbot cheaper than hiring live chat agents?",
    answer: "Significantly. A single live chat agent costs £1,800–£2,500 per month in the UK, and you'd need multiple agents to cover evenings and weekends. An AI chatbot from AIVized starts at £29/month and works 24/7 without breaks."
  },
  {
    question: "Can an AI chatbot handle complex customer questions?",
    answer: "Modern AI chatbots handle 70–80% of common enquiries without human intervention. For complex questions, they capture the customer's details and escalate to your team—so you never lose the lead."
  },
  {
    question: "Will customers know they're talking to a chatbot?",
    answer: "Our chatbots are configured to be transparent—they introduce themselves as AI assistants. Interestingly, most customers don't mind as long as they get fast, helpful answers. Speed matters more than whether it's human or AI."
  },
  {
    question: "Can I use both AI chatbot and live chat together?",
    answer: "Absolutely. Many businesses use an AI chatbot as the first line of response and only bring in human agents for complex cases. This hybrid approach gives you the best of both worlds while keeping costs low."
  },
  {
    question: "How long does it take to set up an AI chatbot?",
    answer: "With AIVized's managed service, your chatbot is live within 24 hours. We handle installation, configuration, and ongoing optimisation—you don't need any technical skills."
  },
];

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    },
    {
      "@type": "Article",
      "headline": "AI Chatbot vs Live Chat: Which Is Better for UK Small Business?",
      "description": "AI chatbot or live chat for your UK small business? Compare costs, availability, and customer satisfaction. Find the right solution for 24/7 support.",
      "image": "https://www.aivized.com/og-image.png",
      "author": { "@type": "Organization", "name": "AIVized" },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-11",
      "dateModified": "2026-02-26",
      "mainEntityOfPage": "https://www.aivized.com/blog/ai-chatbot-vs-live-chat-uk"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "AI Chatbot vs Live Chat" }
      ]
    }
  ]
};

const AIChatbotVsLiveChatBlog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageMeta
        title="AI Chatbot vs Live Chat: Which Is Better? | AIVized"
        description="AI chatbot or live chat for your UK small business? Compare costs, availability, and customer satisfaction. Find the right solution for 24/7 support."
        canonical="https://www.aivized.com/blog/ai-chatbot-vs-live-chat-uk"
        keywords="AI chatbot vs live chat, chatbot or live chat small business, AI chatbot cost comparison UK, live chat alternative UK, automated customer support vs human, best chat solution small business"
        ogType="article"
        publishedTime="2026-02-11"
        modifiedTime="2026-02-26"
        schema={combinedSchema}
      />
      <Header />

      <main className="pt-32 pb-20">
        <article className="container-narrow">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Comparison Guide
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              AI Chatbot vs Live Chat:{" "}
              <span className="text-gradient">Which Is Better for UK Small Business?</span>
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />11 February 2026</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />10 min read</span>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video bg-secondary">
              <img src={heroImage} alt="AI chatbot robot vs human live chat agent comparison" className="w-full h-full object-cover" />
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              When UK small business owners want to add real-time customer support to their website, they usually face the same decision: hire live chat agents or install an AI chatbot? Both have their strengths—but for most small businesses, the answer might surprise you.
            </p>

            <h2 id="cost-comparison">The Cost Reality</h2>
            <p>
              Let's start with the numbers, because for a small business, cost matters. A full-time live chat agent in the UK costs between <strong>£1,800 and £2,500 per month</strong>. That's just for one person covering standard office hours. Want 24/7 coverage? You'll need at least three agents, pushing costs above £5,000 monthly.
            </p>
            <p>
              An AI chatbot like AIVized starts at <strong>£29 per month</strong>. It covers every hour of every day, handles unlimited conversations simultaneously, and never calls in sick. For a small business watching every penny, the maths speaks for itself.
            </p>

            <BlogInlineImage src={vsInline1} alt="Split screen comparing AI chatbot and human live chat agent" />

            <h2 id="availability">Availability: The 24/7 Factor</h2>
            <p>
              This is where AI chatbots have an undeniable advantage. Over 40% of website enquiries happen outside standard business hours—evenings, weekends, and bank holidays. Live chat agents simply can't cover these hours without significant additional cost.
            </p>
            <p>
              An AI chatbot doesn't have off-hours. Whether a customer lands on your website at 2pm or 2am, they get an instant response. For businesses in hospitality, property, and e-commerce—where customers shop around the clock—this constant availability directly translates to more captured leads.
            </p>

            <BlogInlineImage src={vsInline2} alt="Clock showing 3am with glowing chat notification bubbles" />

            <h2 id="quality">Response Quality: Where Each Excels</h2>
            <p>
              Here's where the conversation gets nuanced. Live chat agents excel at empathy, handling complaints, and navigating complex situations. If a customer is upset or has a unique problem, a skilled human agent will almost always deliver a better experience.
            </p>
            <p>
              However, the majority of website enquiries aren't complex. They're predictable, repetitive questions: "What are your opening hours?", "How much does this cost?", "Do you deliver to my area?" An AI chatbot handles these consistently and instantly—often better than a human who might be juggling multiple conversations.
            </p>

            {/* Comparison Table */}
            <div className="not-prose my-8 overflow-x-auto">
              <table className="w-full border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">AI Chatbot</th>
                    <th className="text-center p-4 font-semibold">Live Chat</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Cost per month", ai: "From £29", live: "£1,800+" },
                    { feature: "24/7 availability", ai: true, live: false },
                    { feature: "Handles multiple chats", ai: true, live: false },
                    { feature: "Instant response", ai: true, live: false },
                    { feature: "Complex complaints", ai: false, live: true },
                    { feature: "Empathy & nuance", ai: false, live: true },
                    { feature: "No recruitment needed", ai: true, live: false },
                    { feature: "Improves over time", ai: true, live: true },
                    { feature: "Setup time", ai: "24 hours", live: "2–4 weeks" },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-4 text-sm">{row.feature}</td>
                      <td className="p-4 text-center">
                        {typeof row.ai === "boolean" ? (
                          row.ai ? <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> : <XCircle className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                        ) : <span className="text-sm font-medium">{row.ai}</span>}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.live === "boolean" ? (
                          row.live ? <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> : <XCircle className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                        ) : <span className="text-sm font-medium">{row.live}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="hybrid">The Best Approach: Hybrid</h2>
            <p>
              For most UK small businesses, the smartest approach isn't choosing one or the other—it's using an AI chatbot as the first line of response and reserving human interaction for complex cases. This way, you get 24/7 coverage at low cost while still offering a human touch when it genuinely matters.
            </p>
            <p>
              With AIVized, when the chatbot encounters a question it can't handle, it captures the customer's details and forwards them to you instantly. You respond when you're available—and the customer feels looked after, not ignored.
            </p>

            <h2 id="verdict">The Verdict for UK Small Businesses</h2>
            <p>
              If you're a small business with limited budget and no existing customer support team, <strong>start with an AI chatbot</strong>. It gives you instant 24/7 coverage, captures leads you're currently missing, and costs less than a single day of a live chat agent's salary.
            </p>
            <p>
              As your business grows, you can layer in human support for high-value interactions. But for most enquiries, an AI chatbot isn't just a cheaper alternative—it's a better one.
            </p>

            <BlogInlineImage src={vsInline3} alt="Cost savings concept with reduced expenses on digital screens" />

            <div className="not-prose my-8 p-6 rounded-lg bg-primary/10 border border-primary/20">
              <h3 className="text-lg font-semibold mb-4">Quick Decision Guide</h3>
              <p className="text-muted-foreground">
                <strong>Choose AI chatbot if:</strong> You need 24/7 coverage, have a limited budget, and most of your enquiries are routine.
                <br /><br />
                <strong>Choose live chat if:</strong> You handle complex B2B sales or sensitive customer complaints that require human empathy.
                <br /><br />
                <strong>Choose both if:</strong> You want the best of both worlds—AI handles the volume, humans handle the exceptions.
              </p>
            </div>
          </motion.div>

          {/* FAQ Section */}
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

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center">
            <h3 className="text-2xl font-serif font-semibold mb-4">Try an AI Chatbot for Your Business</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Get 24/7 customer support on your website from just £29/month. Fully managed—we install everything for you.
            </p>
            <Link to="/pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              View Pricing
            </Link>
          </motion.div>
        </article>
      </main>

      <RelatedPagesSection currentPage="blog" currentSlug="ai-chatbot-vs-live-chat-uk" title="Related Resources" subtitle="More insights on AI chatbots for UK businesses" />
      <Footer />
    </div>
  );
};

export default AIChatbotVsLiveChatBlog;
