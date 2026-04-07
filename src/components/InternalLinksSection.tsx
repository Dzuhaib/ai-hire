import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, BookOpen, MessageCircle, Globe, Instagram } from "lucide-react";

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
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="label-tag mb-3">Explore Our Services</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold">
            Find the Right <span className="text-gradient">Managed AI Chatbot</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <Link
                href={link.href}
                className="group block h-full p-6 rounded-xl bg-card border border-border hover:border-primary/35 hover:shadow-[var(--shadow-lift)] transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-lg bg-primary/8 border border-border flex items-center justify-center shrink-0">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-semibold mb-1.5 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{link.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {link.items.map((item) => (
                    <span key={item} className="px-2.5 py-1 text-xs rounded-md bg-secondary text-muted-foreground border border-border/60">
                      {item}
                    </span>
                  ))}
                  <span className="px-2.5 py-1 text-xs rounded-md bg-primary/8 text-primary font-medium border border-primary/20 flex items-center gap-1">
                    View All <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Blog Articles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50"
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-5 text-center uppercase tracking-wider">
            Latest Insights
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {blogArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/8 border border-border flex items-center justify-center shrink-0">
                  <article.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm group-hover:text-primary transition-colors mb-0.5">
                    {article.title}
                  </h4>
                  <p className="text-xs text-muted-foreground truncate">{article.keyword}</p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
