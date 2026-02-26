import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, BookOpen, MessageCircle, Globe, Instagram } from "lucide-react";

/**
 * Internal links section for homepage SEO.
 * Strengthens crawl paths to /industries and /blog hubs.
 */
export const InternalLinksSection = () => {
  const links = [
    {
      title: "Managed AI Chatbot by Industry",
      description: "Industry-trained AI chatbot for lead capture. We install everything.",
      href: "/industries",
      icon: Briefcase,
      items: ["Restaurants", "Real Estate", "E-Commerce", "Healthcare", "Legal", "Fitness", "Travel"],
    },
    {
      title: "AI Chatbot Blog & Insights",
      description: "Expert guides on WhatsApp, website & Instagram chatbots for UK businesses.",
      href: "/blog",
      icon: BookOpen,
      items: ["WhatsApp Chatbot", "Website Chatbot", "Instagram Chatbot"],
    },
  ];

  const blogArticles = [
    {
      title: "WhatsApp Chatbot for UK Businesses",
      href: "/blog/whatsapp-chatbot-uk-business",
      icon: MessageCircle,
      keyword: "24/7 outsourced chat agents Birmingham",
    },
    {
      title: "Website Chatbot Solutions",
      href: "/blog/website-chatbot-small-business",
      icon: Globe,
      keyword: "digital assistant services Birmingham",
    },
    {
      title: "Instagram Chatbot Automation",
      href: "/blog/instagram-chatbot-social-media",
      icon: Instagram,
      keyword: "AI service providers Canary Wharf",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Explore Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold">
            Find the Right <span className="text-gradient">Managed AI Chatbot</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={link.href}
                className="group block h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {link.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {link.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium flex items-center gap-1">
                    View All <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Blog Articles with Keywords */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50"
        >
          <h3 className="text-lg font-semibold mb-6 text-center">
            Latest AI Chatbot Insights
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {blogArticles.map((article) => (
              <Link
                key={article.href}
                to={article.href}
                className="group flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <article.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm group-hover:text-primary transition-colors mb-1">
                    {article.title}
                  </h4>
                  <p className="text-xs text-muted-foreground truncate">
                    {article.keyword}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
