import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Briefcase, BookOpen, FileText, ArrowRight,
  MessageCircle, Globe, Instagram
} from "lucide-react";

interface RelatedLink {
  title: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface RelatedPagesSectionProps {
  currentPage?: "home" | "blog" | "location" | "industry" | "legal" | "pricing";
  currentSlug?: string;
  title?: string;
  subtitle?: string;
}

const allIndustries = [
  { name: "Restaurants", slug: "restaurants" },
  { name: "Real Estate", slug: "real-estate" },
  { name: "E-Commerce", slug: "ecommerce" },
  { name: "Healthcare", slug: "healthcare" },
  { name: "Legal", slug: "legal" },
  { name: "Fitness", slug: "fitness" },
  { name: "Travel", slug: "travel" },
];

const allBlogs = [
  { name: "WhatsApp Chatbot", slug: "whatsapp-chatbot-uk-business", icon: MessageCircle },
  { name: "Website Chatbot", slug: "website-chatbot-small-business", icon: Globe },
  { name: "Instagram Chatbot", slug: "instagram-chatbot-social-media", icon: Instagram },
];

export const RelatedPagesSection = ({
  currentPage = "home",
  currentSlug,
  title = "Explore More",
  subtitle = "Discover our AI chatbot solutions across industries and platforms"
}: RelatedPagesSectionProps) => {
  const primaryLinks: RelatedLink[] = [];
  
  if (currentPage !== "home") {
    primaryLinks.push({
      title: "Home",
      href: "/",
      description: "Managed AI chatbot for UK small businesses from £29/month",
      icon: MessageCircle,
    });
  }
  
  if (currentPage !== "pricing") {
    primaryLinks.push({
      title: "Pricing",
      href: "/pricing",
      description: "Transparent AI chatbot pricing from £29/month",
      icon: FileText,
    });
  }
  
  if (currentPage !== "industry") {
    primaryLinks.push({
      title: "AI Chatbot by Industry",
      href: "/industries",
      description: "Industry-trained AI chatbots for restaurants, real estate & more",
      icon: Briefcase,
    });
  }
  
  if (currentPage !== "blog") {
    primaryLinks.push({
      title: "Blog & Insights",
      href: "/blog",
      description: "Expert guides on WhatsApp, website & Instagram chatbots",
      icon: BookOpen,
    });
  }

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            {title}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold">
            Discover Our <span className="text-gradient">AI Chatbot Solutions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Primary Navigation Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {primaryLinks.map((link, idx) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href={link.href}
                className="group block h-full p-5 rounded-xl bg-card border border-border hover:border-primary/35 hover:shadow-[var(--shadow-lift)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 border border-border flex items-center justify-center shrink-0">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {link.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Industry Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Industry-Trained AI Chatbots</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {allIndustries
              .filter(ind => currentSlug !== ind.slug)
              .map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="px-3 py-1.5 text-sm rounded-full bg-card border border-border/50 hover:border-primary/30 hover:text-primary transition-all"
                >
                  {industry.name}
                </Link>
              ))}
            <Link
              href="/industries"
              className="px-3 py-1.5 text-sm rounded-full bg-primary/8 text-primary font-medium border border-primary/20 hover:bg-primary/12 transition-colors flex items-center gap-1"
            >
              View All Industries <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>

        {/* Blog Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">AI Chatbot Guides & Insights</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {allBlogs
              .filter(blog => currentSlug !== blog.slug)
              .map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="px-3 py-1.5 text-sm rounded-full bg-card border border-border/50 hover:border-primary/30 hover:text-primary transition-all flex items-center gap-1.5"
                >
                  <blog.icon className="w-3.5 h-3.5" />
                  {blog.name}
                </Link>
              ))}
            <Link
              href="/blog"
              className="px-3 py-1.5 text-sm rounded-full bg-primary/8 text-primary font-medium border border-primary/20 hover:bg-primary/12 transition-colors flex items-center gap-1"
            >
              View All Articles <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>

        {/* Legal & Policy Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Legal & Policies</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/privacy-policy" className="px-3 py-1.5 text-sm rounded-full bg-card border border-border/50 hover:border-primary/30 hover:text-primary transition-all">Privacy Policy</Link>
            <Link href="/terms-of-service" className="px-3 py-1.5 text-sm rounded-full bg-card border border-border/50 hover:border-primary/30 hover:text-primary transition-all">Terms of Service</Link>
            <Link href="/refund-policy" className="px-3 py-1.5 text-sm rounded-full bg-card border border-border/50 hover:border-primary/30 hover:text-primary transition-all">Refund Policy</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
