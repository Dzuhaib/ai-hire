import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { engagementExamples } from "@/data/caseStudiesData";

const examples = engagementExamples.slice(0, 3);

export const CaseStudiesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-tag mb-3"
          >
            Example Engagements
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold"
          >
            How We Approach <span className="text-gradient">Common Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto mt-4"
          >
            Client names and specific performance figures are withheld. The examples below show the types
            of businesses we work with and how we approach each brief.
          </motion.p>
        </div>

        <div className="space-y-8">
          {examples.map((example, index) => (
            <motion.div
              key={example.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 md:p-10 hover:border-primary/30 hover:shadow-[var(--shadow-lift)] transition-all duration-300"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {example.industry}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {example.location}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {example.businessType}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-6 leading-tight">
                {example.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-destructive mb-2">
                    The Challenge
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{example.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                    Our Approach
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{example.approach}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                  What the engagement included
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {example.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View more example engagements <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
