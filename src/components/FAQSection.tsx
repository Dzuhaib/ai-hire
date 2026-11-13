import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqData";

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding surface-warm border-y border-border/50">
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
              Got questions?
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold leading-tight"
            >
              Frequently Asked <span className="text-primary">Questions</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-muted-foreground leading-relaxed lg:pb-1"
          >
            Scope, timelines, ownership, and how we work. If your question is not covered here, ask us
            directly and we will answer it before you commit.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-t border-border/70"
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border/70 px-1"
              >
                <AccordionTrigger className="text-left font-serif font-medium text-base md:text-lg hover:text-primary transition-colors py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 max-w-3xl">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
