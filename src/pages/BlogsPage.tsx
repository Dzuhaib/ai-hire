import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { allBlogPosts } from "@/data/blogData";

// Import blog images
import whatsappHero from "@/assets/blog/whatsapp-chatbot-hero.png";
import websiteHero from "@/assets/blog/website-chatbot-hero.png";
import instagramHero from "@/assets/blog/instagram-chatbot-hero.png";
import outsourcedHero from "@/assets/blog/outsourced-chat-agents-hero.png";
import aiProvidersHero from "@/assets/blog/ai-service-providers-hero.png";
import aiPersonalHero from "@/assets/blog/ai-personal-assistant-hero.png";
import aiAutomationHero from "@/assets/blog/ai-automation-uk-hero.png";
import aiChatbotGuideHero from "@/assets/blog/ai-chatbot-guide-hero.png";
import reduceMissedLeadsHero from "@/assets/blog/reduce-missed-leads-hero.png";
import aiChatbotVsLiveChatHero from "@/assets/blog/ai-chatbot-vs-live-chat-hero.png";
import automateEnquiriesHero from "@/assets/blog/automate-enquiries-personal-touch-hero.png";

// City hero images
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

const imageMap: Record<string, string> = {
  "whatsapp-chatbot-uk-business": whatsappHero,
  "website-chatbot-small-business": websiteHero,
  "instagram-chatbot-social-media": instagramHero,
  "outsourced-chat-agents-birmingham": outsourcedHero,
  "ai-service-providers-uk": aiProvidersHero,
  "ai-personal-assistant-near-me": aiPersonalHero,
  "ai-automation-uk-business": aiAutomationHero,
  "ai-chatbot-small-business-uk-guide": aiChatbotGuideHero,
  "reduce-missed-leads-website": reduceMissedLeadsHero,
  "ai-chatbot-vs-live-chat-uk": aiChatbotVsLiveChatHero,
  "automate-customer-enquiries-personal-touch": automateEnquiriesHero,
  "website-chatbot-24-7-london": aiLondon,
  "website-chatbot-24-7-manchester": aiManchester,
  "website-chatbot-24-7-birmingham": aiBirmingham,
  "website-chatbot-24-7-leeds": aiLeeds,
  "website-chatbot-24-7-liverpool": aiLiverpool,
  "website-chatbot-24-7-bristol": aiBristol,
  "website-chatbot-24-7-glasgow": aiGlasgow,
  "website-chatbot-24-7-edinburgh": aiEdinburgh,
  "website-chatbot-24-7-sheffield": aiSheffield,
  "website-chatbot-24-7-newcastle": aiNewcastle,
};

const POSTS_PER_PAGE = 9;

// Blog index JSON-LD schema
const blogIndexSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "name": "AI Chatbot Blog | UK Business Insights",
      "description": "Expert insights on AI chatbots for UK businesses. Learn about WhatsApp, website, and Instagram chatbots for lead generation and customer support.",
      "url": "https://www.aivized.com/blog",
      "publisher": { "@type": "Organization", "name": "AIVized", "url": "https://www.aivized.com" },
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": allBlogPosts.length,
        "itemListElement": allBlogPosts.slice(0, 9).map((post, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "url": `https://www.aivized.com/blog/${post.slug}`,
          "name": post.title
        }))
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aivized.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog" }
      ]
    },
    {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".blog-description"]
    }
  ]
};

const BlogsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allBlogPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = allBlogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageMeta
        title="AI Chatbot Blog | UK Business Insights | AIVized"
        description="Expert insights on AI chatbots for UK businesses. Learn about WhatsApp, website, and Instagram chatbots for lead generation and customer support."
        canonical="https://www.aivized.com/blog"
        keywords="ai chatbot blog, chatbot insights uk, ai for small business, digital assistant services"
        schema={blogIndexSchema}
      />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container-narrow">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Blog & Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              AI Chatbot Insights for{" "}
              <span className="text-gradient">UK Businesses</span>
            </h1>
            <p className="blog-description text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert guides on implementing AI chatbots for WhatsApp, websites, and social media to transform your customer engagement.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video bg-secondary">
                    <img
                      src={imageMap[post.slug]}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <time dateTime={post.publishedDate} className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedDate).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </time>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-serif font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-primary font-medium text-sm pt-2">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav aria-label="Blog pagination" className="flex items-center justify-center gap-2 mt-16">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-border hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  aria-current={page === currentPage ? "page" : undefined}
                  className={`w-10 h-10 rounded-lg font-medium text-sm transition-colors ${
                    page === currentPage
                      ? "bg-primary text-primary-foreground"
                      : "border border-border hover:bg-secondary"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-border hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </nav>
          )}
        </div>
      </main>
      
      <RelatedPagesSection 
        currentPage="blog"
        title="Explore More"
        subtitle="Discover our AI chatbot solutions across UK cities and industries"
      />
      
      <Footer />
    </div>
  );
};

export default BlogsPage;
