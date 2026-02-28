import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { BlogInlineImage } from "@/components/BlogInlineImage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getCityBlogBySlug } from "@/data/cityBlogData";
import NotFound from "@/pages/NotFound";

// City hero images (reuse location images)
import aiLondon from "@/assets/locations/ai-london.png";
import aiManchester from "@/assets/locations/ai-manchester.png";
import aiBirmingham from "@/assets/locations/ai-birmingham.png";
import aiLeeds from "@/assets/locations/ai-leeds.png";
import aiLiverpool from "@/assets/locations/ai-liverpool.png";
import aiBristol from "@/assets/locations/ai-bristol.png";
import aiGlasgow from "@/assets/locations/ai-glasgow.png";
import aiEdinburgh from "@/assets/locations/ai-edinburgh.png";
import aiSheffield from "@/assets/locations/ai-sheffield.png";
import aiNewcastle from "@/assets/locations/ai-newcastle.png";
import cityInline1 from "@/assets/blog/city-chatbot-inline-1.png";
import cityInline2 from "@/assets/blog/city-chatbot-inline-2.png";
import cityInline3 from "@/assets/blog/city-chatbot-inline-3.png";

const cityHeroImages: Record<string, string> = {
  london: aiLondon,
  manchester: aiManchester,
  birmingham: aiBirmingham,
  leeds: aiLeeds,
  liverpool: aiLiverpool,
  bristol: aiBristol,
  glasgow: aiGlasgow,
  edinburgh: aiEdinburgh,
  sheffield: aiSheffield,
  newcastle: aiNewcastle,
};

const CityWebsiteChatbotBlog = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = slug?.replace("website-chatbot-24-7-", "") || "";
  const data = city ? getCityBlogBySlug(city) : undefined;

  if (!data) return <NotFound />;

  const heroImage = cityHeroImages[data.slug] || aiLondon;
  const blogSlug = `website-chatbot-24-7-${data.slug}`;
  const canonicalUrl = `https://www.aivized.com/blog/${blogSlug}`;

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": data.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      },
      {
        "@type": "Article",
        "headline": `Website Chatbot That Runs 24/7 ${data.city} | Managed AI Service`,
        "description": `Get a website chatbot that runs 24/7 for your ${data.city} business. Managed AI chatbot from £29/month. Capture leads, automate enquiries, we install everything.`,
        "image": "https://www.aivized.com/og-image.png",
        "author": { "@type": "Organization", "name": "AIVized" },
        "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com", "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png" } },
        "datePublished": "2026-02-08",
        "dateModified": "2026-02-26",
        "mainEntityOfPage": canonicalUrl
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" },
          { "@type": "ListItem", "position": 3, "name": `Website Chatbot 24/7 ${data.city}` }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageMeta
        title={`Website Chatbot 24/7 ${data.city} | Managed AI Chatbot | AIVized`}
        description={`Get a website chatbot that runs 24/7 for your ${data.city} business. Managed AI chatbot from £29/month. Capture leads, automate enquiries, we install everything.`}
        canonical={canonicalUrl}
        keywords={`website chatbot ${data.city}, 24/7 chatbot ${data.city}, managed AI chatbot ${data.city}, lead generation chatbot ${data.region}, AI chatbot for small business UK, website chatbot that runs 24/7 ${data.city}`}
        ogType="article"
        publishedTime="2026-02-08"
        modifiedTime="2026-02-26"
        schema={combinedSchema}
      />
      <Header />

      <main className="pt-32 pb-20">
        <article className="container-narrow">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Hero */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {data.city} • Website Chatbot
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
              Website Chatbot That Runs 24/7{" "}
              <span className="text-gradient">{data.city}</span>
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                8 February 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                7 min read
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video bg-secondary">
              <img
                src={heroImage}
                alt={data.heroDescription}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="lead text-xl text-muted-foreground mb-8">
              {data.intro}
            </p>

            <h2 id="why-24-7-chatbot">
              Why Your {data.city} Business Needs a 24/7 Website Chatbot
            </h2>
            <p>{data.whyNeed}</p>

            <BlogInlineImage src={cityInline1} alt={`UK high street businesses using AI chatbot technology in ${data.city}`} />

            <h2 id="how-it-works">
              How Our Managed Website Chatbot Works in {data.city}
            </h2>
            <p>{data.howItWorks}</p>

            <BlogInlineImage src={cityInline2} alt={`Website chatbot greeting visitors and capturing enquiries for ${data.city} business`} />

            <h2 id="benefits">
              Key Benefits for {data.city} Businesses
            </h2>
            <div className="not-prose my-8 grid gap-4">
              {data.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <h2 id="industries">
              Industries We Serve in {data.city}
            </h2>
            <p>{data.industries}</p>

            <BlogInlineImage src={cityInline3} alt={`Happy small business owner in ${data.city} using AI chatbot for leads`} />
            <ul>
              {data.industryExamples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ul>

            <div className="not-prose my-8 p-6 rounded-lg bg-primary/10 border border-primary/20">
              <h3 className="text-lg font-semibold mb-4">Local {data.city} Insight</h3>
              <p className="text-muted-foreground">
                {data.localContext}
              </p>
            </div>

            <h2>Getting Started with a 24/7 Website Chatbot in {data.city}</h2>
            <p>
              Implementing a website chatbot for your {data.city} business couldn't be simpler with AIVized's fully managed service:
            </p>
            <ol>
              <li><strong>Subscribe:</strong> Choose a plan starting from just £29/month</li>
              <li><strong>Share Your Details:</strong> Tell us about your {data.city} business, products, and common customer questions</li>
              <li><strong>We Install Everything:</strong> Our team deploys your custom chatbot within 24 hours</li>
              <li><strong>Watch It Work:</strong> Your AI assistant starts capturing leads and answering enquiries immediately</li>
            </ol>
            <p>
              No technical skills required. No long-term contracts. Just a professional, 24/7 website chatbot that helps your {data.city} business grow.
            </p>
          </motion.div>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-border"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8">
              Frequently Asked Questions About Website Chatbots in {data.city}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {data.faqs.map((faq, index) => (
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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center"
          >
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Ready for a 24/7 Website Chatbot in {data.city}?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Join hundreds of {data.city} businesses already using AIVized's managed website chatbot service. From £29/month with complete installation included.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View Pricing
            </Link>
          </motion.div>
        </article>
      </main>

      <RelatedPagesSection
        currentPage="blog"
        currentSlug={blogSlug}
        title="Related Resources"
        subtitle={`Explore more AI chatbot solutions for ${data.city} and UK businesses`}
      />

      <Footer />
    </div>
  );
};

export default CityWebsiteChatbotBlog;
