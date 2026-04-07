"use client";

import Image from 'next/image';
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { allBlogPosts } from "@/data/blogData";
import { BlogCardsSkeleton } from "@/components/skeletons/SectionSkeletons";

// Import blog images
const whatsappHero = "/assets/blog/whatsapp-chatbot-hero.png";
const websiteHero = "/assets/blog/website-chatbot-hero.png";
const instagramHero = "/assets/blog/instagram-chatbot-hero.png";
const outsourcedHero = "/assets/blog/outsourced-chat-agents-hero.png";
const aiProvidersHero = "/assets/blog/ai-service-providers-hero.png";
const aiPersonalHero = "/assets/blog/ai-personal-assistant-hero.png";
const aiAutomationHero = "/assets/blog/ai-automation-uk-hero.png";
const aiChatbotGuideHero = "/assets/blog/ai-chatbot-guide-hero.png";
const reduceMissedLeadsHero = "/assets/blog/reduce-missed-leads-hero.png";
const aiChatbotVsLiveChatHero = "/assets/blog/ai-chatbot-vs-live-chat-hero.png";
const automateEnquiriesHero = "/assets/blog/automate-enquiries-personal-touch-hero.png";

// City hero images
const aiLondon = "/assets/locations/ai-london.png";
const aiManchester = "/assets/locations/ai-manchester.png";
const aiBirmingham = "/assets/locations/ai-birmingham.png";
const aiLeeds = "/assets/locations/ai-leeds.png";
const aiLiverpool = "/assets/locations/ai-liverpool.png";
const aiBristol = "/assets/locations/ai-bristol.png";
const aiGlasgow = "/assets/locations/ai-glasgow.png";
const aiEdinburgh = "/assets/locations/ai-edinburgh.png";
const aiSheffield = "/assets/locations/ai-sheffield.png";
const aiNewcastle = "/assets/locations/ai-newcastle.png";
const aiNottingham = "/assets/locations/ai-nottingham.png";
const aiCardiff = "/assets/locations/ai-cardiff.png";
const aiLeicester = "/assets/locations/ai-leicester.png";
const aiBrighton = "/assets/locations/ai-brighton.png";
const aiSouthampton = "/assets/locations/ai-southampton.png";
const aiOxford = "/assets/locations/ai-oxford.png";
const aiCambridge = "/assets/locations/ai-cambridge.png";
const aiCoventry = "/assets/locations/ai-coventry.png";
const aiBelfast = "/assets/locations/ai-belfast.png";
const aiAberdeen = "/assets/locations/ai-aberdeen.png";

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
  "website-chatbot-24-7-nottingham": aiNottingham,
  "website-chatbot-24-7-cardiff": aiCardiff,
  "website-chatbot-24-7-leicester": aiLeicester,
  "website-chatbot-24-7-brighton": aiBrighton,
  "website-chatbot-24-7-southampton": aiSouthampton,
  "website-chatbot-24-7-oxford": aiOxford,
  "website-chatbot-24-7-cambridge": aiCambridge,
  "website-chatbot-24-7-coventry": aiCoventry,
  "website-chatbot-24-7-belfast": aiBelfast,
  "website-chatbot-24-7-aberdeen": aiAberdeen,
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
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aivized.com/blog" }
      ]
    }
  ]
};

const BlogsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(false);
  }, []);
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexSchema) }} />
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
          {isLoading ? (
            <BlogCardsSkeleton count={9} />
          ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video bg-secondary">
                    <Image
                      src={imageMap[post.slug] || '/assets/blog/whatsapp-chatbot-hero.png'}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
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
          )}

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
      
      <Footer />
    </div>
  );
};

export default BlogsPage;
