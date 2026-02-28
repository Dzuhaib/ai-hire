import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
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
import heroImage from "@/assets/blog/automate-enquiries-personal-touch-hero.png";
import automateInline1 from "@/assets/blog/automate-enquiries-inline-1.png";
import automateInline2 from "@/assets/blog/automate-enquiries-inline-2.png";
import automateInline3 from "@/assets/blog/automate-enquiries-inline-3.png";

const faqs = [
  {
    question: "Won't customers feel put off by an automated response?",
    answer: "Not if it's done well. Research shows that 68% of customers prefer chatbots for quick answers. The key is being transparent that it's AI, providing genuinely helpful responses, and offering an easy path to a human when needed."
  },
  {
    question: "How do you make an AI chatbot sound like my brand?",
    answer: "At AIVized, we configure your chatbot using your business information, tone of voice, and common customer questions. The result is an AI assistant that sounds like your team, uses your terminology, and reflects your brand personality."
  },
  {
    question: "What if a customer asks something the chatbot can't answer?",
    answer: "The chatbot gracefully captures the customer's name, email, and question, then forwards it to you immediately. The customer gets a response like 'Great question—let me get one of our team to come back to you personally.' It feels helpful, not frustrating."
  },
  {
    question: "Can automated customer service work for service-based businesses?",
    answer: "Absolutely. Service businesses like plumbers, accountants, and consultants benefit hugely from automation. The chatbot handles appointment enquiries, pricing questions, and availability checks—freeing you to focus on delivering your service."
  },
  {
    question: "How do I measure if automation is working for my business?",
    answer: "Track three key metrics: leads captured per month (should increase), response time (should drop to seconds), and customer satisfaction with chat interactions. AIVized provides analytics to help you monitor all three."
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
      "headline": "How to Automate Customer Enquiries Without Losing the Personal Touch",
      "description": "Learn how UK small businesses automate customer enquiries with AI chatbots while keeping interactions warm and personal. Practical guide with real examples.",
      "image": "https://www.aivized.com/og-image.png",
      "author": { "@type": "Organization", "name": "AIVized" },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-12",
      "dateModified": "2026-02-26",
      "mainEntityOfPage": "https://www.aivized.com/blog/automate-customer-enquiries-personal-touch"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Automate Enquiries" }
      ]
    }
  ]
};

const AutomateEnquiriesBlog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageMeta
        title="Automate Customer Enquiries Without Losing Personal Touch"
        description="Learn how UK small businesses automate customer enquiries with AI chatbots while keeping interactions warm and personal. Practical guide with real examples."
        canonical="https://www.aivized.com/blog/automate-customer-enquiries-personal-touch"
        keywords="automate customer enquiries small business, automated customer service UK, AI chatbot personal touch, customer service automation tips, personalised AI chatbot, small business customer support automation"
        ogType="article"
        publishedTime="2026-02-12"
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
              Customer Experience
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              How to Automate Customer Enquiries{" "}
              <span className="text-gradient">Without Losing the Personal Touch</span>
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />12 February 2026</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />8 min read</span>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video bg-secondary">
              <img src={heroImage} alt="AI assistant having a warm personalised conversation with a customer" className="w-full h-full object-cover" />
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              "But won't it feel robotic?" That's the number one concern UK business owners have about automating customer enquiries. The good news? With the right approach, AI-powered customer service can feel more personal than a generic contact form—and far more responsive than a voicemail box. Curious how AI compares to human support? Read our <Link to="/blog/ai-chatbot-vs-live-chat-uk" className="text-primary hover:underline">AI chatbot vs live chat guide</Link>.
            </p>

            <h2 id="the-fear">The Fear: Automation Equals Impersonal</h2>
            <p>
              Let's be honest—we've all had terrible experiences with automated systems. Endless phone menus, chatbots that don't understand basic questions, generic responses that miss the point entirely. No wonder small business owners worry that automation will drive customers away.
            </p>
            <p>
              But those bad experiences come from poorly implemented automation, not from automation itself. Done right, an AI chatbot can make customers feel heard, helped, and valued—often faster than a human team can manage during busy periods.
            </p>

            <BlogInlineImage src={automateInline1} alt="Customer smiling while receiving personalized chatbot response" />

            <h2 id="the-reality">The Reality: Good Automation Feels Personal</h2>
            <p>
              Think about it from the customer's perspective. They land on your website with a question. What feels more personal:
            </p>
            <ul>
              <li>A contact form that promises "we'll get back to you within 48 hours"</li>
              <li>Or an instant, friendly response that addresses their specific question in seconds?</li>
            </ul>
            <p>
              Speed is a form of respect. When you respond instantly to a customer's enquiry, you're telling them their time matters. That's personal—even if it's AI delivering the message.
            </p>

            <h2 id="principles">Five Principles for Personal Automation</h2>

            <h3>1. Use Your Brand Voice</h3>
            <p>
              Your AI chatbot should sound like your business, not a generic robot. If your brand is friendly and informal, the chatbot should be too. If you're a professional services firm, the tone should reflect that. At AIVized, we configure every chatbot to match your brand personality.
            </p>

            <h3>2. Be Transparent</h3>
            <p>
              Don't pretend the chatbot is human. Customers appreciate honesty. A simple introduction like "Hi! I'm the AI assistant for [Your Business]. I can help with most questions instantly—and if I can't, I'll connect you with our team." builds trust immediately.
            </p>

            <h3>3. Know When to Hand Over</h3>
            <p>
              The best AI chatbots know their limits. When a customer has a complex complaint or an unusual request, the chatbot should gracefully collect their details and escalate. The handover message matters: "That's a great question—let me get someone from our team to help you personally" feels caring, not cold.
            </p>

            <h3>4. Remember Context</h3>
            <p>
              A good chatbot remembers what the customer has already told it within the conversation. If someone mentions they're looking for a 3-bedroom house in <Link to="/locations/leeds" className="text-primary hover:underline">Leeds</Link>, the chatbot shouldn't ask "What area are you interested in?" two messages later. Context awareness makes conversations feel natural.
            </p>

            <h3>5. Follow Up Like a Human Would</h3>
            <p>
              After capturing a lead, follow up personally. The chatbot captures the details; you provide the human touch in the follow-up email or call. This combination of instant AI response + personal human follow-up creates a seamless customer experience.
            </p>

            <div className="not-prose my-8 grid gap-4">
              {[
                "Configure your chatbot with your brand's unique tone and language",
                "Be upfront that it's an AI assistant—customers respect honesty",
                "Set clear escalation paths so complex queries reach a human fast",
                "Use conversation context to avoid repetitive questions",
                "Combine instant AI capture with personal human follow-up",
                "Review chat transcripts weekly to refine and improve responses",
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>

            <h2 id="real-example">A Real Example</h2>
            <p>
              Consider a small <Link to="/industries/real-estate" className="text-primary hover:underline">estate agency</Link> in <Link to="/locations/birmingham" className="text-primary hover:underline">Birmingham</Link>. Before adding an AI chatbot, they received most enquiries via a contact form. Average response time? 6–8 hours during the week, longer on weekends. Many leads went cold before anyone replied.
            </p>
            <p>
              After installing an AIVized chatbot, every visitor gets an instant response. The chatbot asks what type of property they're looking for, their budget range, and preferred areas—then sends the qualified lead directly to the agent's WhatsApp. The agent follows up personally within minutes, armed with all the context.
            </p>

            <BlogInlineImage src={automateInline2} alt="Estate agent office with AI chatbot handling property enquiries" />
            <p>
              The result? <strong>35% more captured leads</strong> and customers consistently comment on how quick and helpful the service feels. That's automation with a personal touch.
            </p>

            <h2 id="getting-started">Start Automating the Right Way</h2>
            <p>
              Automating customer enquiries doesn't mean removing the human element—it means adding speed and consistency while preserving warmth. With a <Link to="/#how-it-works" className="text-primary hover:underline">managed AI chatbot</Link> from AIVized, you get both: instant 24/7 responses that reflect your brand, with seamless escalation to your team for the conversations that need a human touch. Plans start from <Link to="/pricing" className="text-primary hover:underline">£29/month</Link>.
            </p>

            <BlogInlineImage src={automateInline3} alt="Customers receiving quick helpful responses on mobile phones" />

            <div className="not-prose my-8 p-6 rounded-lg bg-primary/10 border border-primary/20">
              <h3 className="text-lg font-semibold mb-4">The Key Takeaway</h3>
              <p className="text-muted-foreground">
                Automation doesn't replace the personal touch—it enables it. By handling routine enquiries instantly, your AI chatbot frees you to focus your personal attention on the customers and conversations that matter most. That's not impersonal. That's smart.
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
            <h3 className="text-2xl font-serif font-semibold mb-4">Automate Without Losing Your Personal Touch</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Get a fully managed AI chatbot that sounds like your brand. From £29/month—we install everything for you.
            </p>
            <Link to="/pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              View Pricing
            </Link>
          </motion.div>
        </article>
      </main>

      <RelatedPagesSection currentPage="blog" currentSlug="automate-customer-enquiries-personal-touch" title="Related Resources" subtitle="More insights on customer experience and AI chatbots" />
      <Footer />
    </div>
  );
};

export default AutomateEnquiriesBlog;
