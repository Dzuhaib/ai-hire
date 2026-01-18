import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the setup process work?",
    answer:
      "It's simple. After you subscribe to a plan, you'll securely share your website login details with us. Our team then installs and configures your aivized within 24 hours. No technical knowledge required from your side.",
  },
  {
    question: "Is my website login information secure?",
    answer:
      "Absolutely. We use bank-level encryption to store your credentials. Our team only accesses your website during the installation process, and you can change your password immediately after setup if you prefer.",
  },
  {
    question: "How does aivized actually work?",
    answer:
      "Your aivized is trained specifically for your industry. It understands customer queries, provides accurate responses, captures leads, and handles common tasks 24/7. It learns from your business information to give personalised, relevant answers.",
  },
  {
    question: "Can I customise what the AI says?",
    answer:
      "Yes. You can provide specific information about your business, set the tone of voice, and define how the AI should respond to different types of enquiries. We'll help you configure everything during setup.",
  },
  {
    question: "What happens if aivized can't answer a question?",
    answer:
      "When your aivized encounters a question it can't confidently answer, it will capture the customer's details and escalate to you via email. You never lose a potential lead.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, there are no long-term contracts. You can cancel your subscription at any time, and you won't be charged for the following month. We believe in earning your business every month.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.2em] text-primary mb-6"
          >
            Got Questions?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-premium px-6 border-border/50"
              >
                <AccordionTrigger className="text-left font-serif font-medium text-lg hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
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
