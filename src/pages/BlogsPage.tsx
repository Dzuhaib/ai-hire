import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { blogPosts } from "@/data/blogData";

// Import blog images
import whatsappHero from "@/assets/blog/whatsapp-chatbot-hero.png";
import websiteHero from "@/assets/blog/website-chatbot-hero.png";
import instagramHero from "@/assets/blog/instagram-chatbot-hero.png";
import outsourcedHero from "@/assets/blog/outsourced-chat-agents-hero.png";
import aiProvidersHero from "@/assets/blog/ai-service-providers-hero.png";
import aiPersonalHero from "@/assets/blog/ai-personal-assistant-hero.png";
import aiAutomationHero from "@/assets/blog/ai-automation-uk-hero.png";
import aiChatbotGuideHero from "@/assets/blog/ai-chatbot-guide-hero.png";

const imageMap: Record<string, string> = {
  "whatsapp-chatbot-uk-business": whatsappHero,
  "website-chatbot-small-business": websiteHero,
  "instagram-chatbot-social-media": instagramHero,
  "outsourced-chat-agents-birmingham": outsourcedHero,
  "ai-service-providers-uk": aiProvidersHero,
  "ai-personal-assistant-near-me": aiPersonalHero,
  "ai-automation-uk-business": aiAutomationHero,
  "ai-chatbot-small-business-uk-guide": aiChatbotGuideHero,
};

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageMeta
        title="AI Chatbot Blog | UK Business Insights | AIVized"
        description="Expert insights on AI chatbots for UK businesses. Learn about WhatsApp, website, and Instagram chatbots for lead generation and customer support."
        canonical="https://www.aivized.com/blog"
        keywords="ai chatbot blog, chatbot insights uk, ai for small business, digital assistant services"
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert guides on implementing AI chatbots for WhatsApp, websites, and social media to transform your customer engagement.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video bg-secondary">
                    <img
                      src={imageMap[post.slug]}
                      alt={post.title}
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
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedDate).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
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
