import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, BookOpen, Bot, TrendingUp, Globe } from "lucide-react";

export const InternalLinksSection = () => {
  const links = [
    {
      title: "Our Services",
      description: "Six connected services covering AI, automation, search, marketing, and software.",
      href: "/services",
      icon: Briefcase,
      items: ["AI Systems", "Automations", "SEO & GEO", "Digital Marketing", "Web Development", "Desktop Software"],
    },
    {
      title: "Industries We Serve",
      description: "How our services apply to hospitality, professional services, e-commerce, and more.",
      href: "/industries",
      icon: Globe,
      items: ["Hospitality", "Professional Services", "E-commerce", "Healthcare", "Legal", "Fitness", "Travel"],
    },
  ];

  const blogArticles = [
    {
      title: "AI Automation for UAE Businesses",
      href: "/blog/ai-automation-uae-business",
      icon: Bot,
      keyword: "Where automation pays back fastest",
    },
    {
      title: "Reduce Missed Leads from Your Website",
      href: "/blog/reduce-missed-leads-website",
      icon: TrendingUp,
      keyword: "Fix the gaps in your enquiry journey",
    },
    {
      title: "Choosing an AI Service Provider in the UAE",
      href: "/blog/ai-service-providers-uae",
      icon: BookOpen,
      keyword: "What to look for before you buy",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[1fr_0.7fr] gap-8 lg:gap-16 items-end mb-10 md:mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="editorial-rule mb-5"
            >
              Explore AIVized
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold leading-tight"
            >
              Find the Right <span className="text-primary">Service for Your Goal</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-muted-foreground leading-relaxed lg:pb-1"
          >
            Start with the outcome you need, then see which service or industry page fits. Every page
            explains scope, process, and what a realistic engagement looks like.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <Link
                href={link.href}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/35 hover:shadow-[var(--shadow-lift)] md:p-7"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-warm">
                    <link.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1.5 font-serif text-lg font-semibold transition-colors group-hover:text-primary">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                  <span className="font-serif text-[0.65rem] font-semibold tracking-[0.14em] text-muted-foreground/50 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-1.5">
                  {link.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border/60 bg-surface-warm px-2 py-1 text-[0.68rem] text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="ml-auto inline-flex items-center gap-1 text-[0.68rem] font-medium text-primary">
                    View all <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-border/60 pt-8"
        >
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Latest insights
            </h3>
            <Link href="/blog" className="text-xs font-medium text-primary hover:underline">
              All articles
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {blogArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-warm">
                  <article.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="mb-0.5 text-sm font-medium transition-colors group-hover:text-primary">
                    {article.title}
                  </h4>
                  <p className="truncate text-xs text-muted-foreground">{article.keyword}</p>
                </div>
                <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
