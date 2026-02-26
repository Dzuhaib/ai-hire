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
import heroImage from "@/assets/blog/reduce-missed-leads-hero.png";

const faqs = [
  {
    question: "How many leads does a typical small business website miss?",
    answer: "Research shows that UK small businesses miss up to 60% of potential leads because visitors leave without making contact. Most website visits happen outside office hours, and without a way to engage those visitors, the leads simply vanish."
  },
  {
    question: "Can a chatbot really capture leads as well as a human?",
    answer: "A well-configured AI chatbot can actually capture more leads than a human team because it works 24/7 without breaks. It instantly engages every visitor, asks qualifying questions, and collects contact details—something even the best human teams struggle to do consistently."
  },
  {
    question: "How quickly can I start reducing missed leads?",
    answer: "With AIVized's managed service, your chatbot is installed within 24 hours of subscribing. Most businesses see a noticeable increase in captured leads within the first week."
  },
  {
    question: "Do I need technical skills to set up a lead capture chatbot?",
    answer: "Not at all. AIVized is a fully managed service—we handle everything from installation to configuration to ongoing optimisation. You just tell us about your business and we do the rest."
  },
  {
    question: "What happens when the chatbot can't answer a question?",
    answer: "When your AI assistant encounters a question it can't answer, it captures the visitor's contact details and escalates the enquiry to you immediately via email or WhatsApp. You never lose the lead."
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
      "headline": "How to Reduce Missed Leads from Your Website with AI Chatbots",
      "description": "Discover why UK small businesses miss up to 60% of website leads and how an AI chatbot captures enquiries 24/7. Practical tips to stop losing customers.",
      "image": "https://www.aivized.com/og-image.png",
      "author": { "@type": "Organization", "name": "AIVized" },
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
      "datePublished": "2026-02-10",
      "dateModified": "2026-02-26",
      "mainEntityOfPage": "https://www.aivized.com/blog/reduce-missed-leads-website"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Reduce Missed Leads" }
      ]
    },
    {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".lead"]
    }
  ]
};

const ReduceMissedLeadsBlog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageMeta
        title="How to Reduce Missed Leads from Your Website | AIVized"
        description="Discover why UK small businesses miss up to 60% of website leads and how an AI chatbot captures enquiries 24/7. Practical tips to stop losing customers."
        canonical="https://www.aivized.com/blog/reduce-missed-leads-website"
        keywords="reduce missed leads from website, lead capture chatbot UK, website lead generation, stop losing website leads, AI chatbot lead capture, small business lead generation UK"
        ogType="article"
        publishedTime="2026-02-10"
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
              Lead Generation
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              How to Reduce Missed Leads from Your Website{" "}
              <span className="text-gradient">with AI Chatbots</span>
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />10 February 2026</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />9 min read</span>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video bg-secondary">
              <img src={heroImage} alt="Business owner reviewing missed lead notifications on laptop" className="w-full h-full object-cover" />
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              Your website is your hardest-working salesperson—but what happens when a potential customer visits at 10pm on a Tuesday? If no one's there to engage them, that lead walks away. For UK small businesses, this silent loss of potential customers costs thousands every year. Here's how to fix it.
            </p>

            <h2 id="the-problem">The Hidden Cost of Missed Website Leads</h2>
            <p>
              Most small business owners know their website gets traffic, but few realise how many of those visitors leave without ever making contact. Studies suggest that <strong>up to 60% of website visitors who are genuinely interested in your product or service never fill in a contact form</strong>. They browse, they consider—and then they leave.
            </p>
            <p>
              The reasons are straightforward. Contact forms feel impersonal. Phone lines are only open during business hours. And visitors who have a quick question simply don't want to wait until Monday morning for an answer. Every unanswered question is a lost opportunity.
            </p>

            <h2 id="why-it-happens">Why Traditional Lead Capture Fails</h2>
            <p>
              Traditional lead capture methods—contact forms, email addresses on your website, "call us" buttons—all rely on the visitor taking action. But modern consumers expect instant responses. If they don't get one, they move on to a competitor who does.
            </p>
            <p>
              Consider these common scenarios:
            </p>
            <ul>
              <li>A potential customer visits your restaurant website at 9pm to ask about group booking availability. Your phone line is closed. They book elsewhere.</li>
              <li>A homeowner browses your estate agency site on a Sunday afternoon, wondering about a property. No one responds until Monday. They've already contacted three other agents.</li>
              <li>A shopper finds your e-commerce store but has a question about sizing. They can't find the answer quickly, so they abandon their basket.</li>
            </ul>
            <p>
              In each case, the business had the visitor's attention—and lost it because there was no way to respond in real time.
            </p>

            <h2 id="ai-solution">How an AI Chatbot Stops the Leak</h2>
            <p>
              An AI chatbot sits on your website and engages every visitor the moment they arrive. It doesn't sleep, take breaks, or go on holiday. It asks the right questions, provides instant answers, and captures contact details—even at 3am on a bank holiday.
            </p>

            <div className="not-prose my-8 grid gap-4">
              {[
                "Engages visitors instantly—no waiting, no friction",
                "Works 24/7, including weekends and bank holidays",
                "Asks qualifying questions to capture genuine leads",
                "Forwards hot leads to you via email or WhatsApp immediately",
                "Answers FAQs so visitors don't need to search your site",
                "Learns from every conversation to improve over time",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <h2 id="real-results">What Real UK Businesses Are Seeing</h2>
            <p>
              UK small businesses that add an AI chatbot to their website typically see a <strong>25–40% increase in captured leads</strong> within the first month. That's not because they're getting more traffic—it's because they're finally converting the traffic they already have.
            </p>
            <p>
              For a business spending £500 per month on Google Ads or SEO, capturing even 10 more leads per month from existing traffic can dramatically improve return on investment. The chatbot doesn't replace your marketing—it makes your existing marketing work harder.
            </p>

            <h2 id="getting-started">Five Steps to Stop Missing Leads Today</h2>
            <ol>
              <li><strong>Audit your current lead capture:</strong> Check how many website visitors actually convert. If it's below 3%, you're leaving money on the table.</li>
              <li><strong>Identify peak missed hours:</strong> Use analytics to find when visitors arrive but don't convert. Often it's evenings and weekends.</li>
              <li><strong>Choose a managed AI chatbot:</strong> Don't waste time building your own. A managed service like AIVized handles everything for you.</li>
              <li><strong>Train it on your business:</strong> Share your FAQs, services, and common questions. We configure the chatbot to sound like your brand.</li>
              <li><strong>Review and optimise:</strong> Check captured leads weekly and refine the chatbot's responses for even better results.</li>
            </ol>

            <div className="not-prose my-8 p-6 rounded-lg bg-primary/10 border border-primary/20">
              <h3 className="text-lg font-semibold mb-4">The Bottom Line</h3>
              <p className="text-muted-foreground">
                You're already paying for website traffic. An AI chatbot ensures you actually capture the leads that traffic brings—24 hours a day, 7 days a week. Starting from just £29/month with AIVized, it's one of the highest-ROI investments a UK small business can make.
              </p>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8">
              Frequently Asked Questions
            </h2>
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
            <h3 className="text-2xl font-serif font-semibold mb-4">Stop Missing Leads Today</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Get a fully managed AI chatbot on your website from £29/month. We install everything—no technical skills needed.
            </p>
            <Link to="/pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              View Pricing
            </Link>
          </motion.div>
        </article>
      </main>

      <RelatedPagesSection currentPage="blog" currentSlug="reduce-missed-leads-website" title="Related Resources" subtitle="More insights on AI chatbots and lead generation for UK businesses" />
      <Footer />
    </div>
  );
};

export default ReduceMissedLeadsBlog;
