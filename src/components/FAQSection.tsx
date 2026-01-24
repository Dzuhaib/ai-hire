import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the setup process work?",
    answer: (
      <>
        It's simple. After you subscribe, you securely share your website login details with us. Our team installs and configures your AI chatbot within 24 hours. No technical knowledge required from your side. See our <Link to="/#how-it-works" className="text-primary hover:underline">step-by-step process</Link>.
      </>
    ),
  },
  {
    question: "Is my website login information secure?",
    answer: (
      <>
        Absolutely. We use bank-level encryption to store your credentials. Our team only accesses your website during installation, and you can change your password immediately after setup if you prefer. Read our <Link to="/privacy-policy" className="text-primary hover:underline">privacy policy</Link> for details.
      </>
    ),
  },
  {
    question: "What does 'fully managed' mean?",
    answer:
      "We don't just deliver a chatbot and leave. Our team continuously monitors your chatbot, handles lead optimisation, applies ongoing updates, and resolves any issues immediately—before they impact your website or customers.",
  },
  {
    question: "How does the AI chatbot actually work?",
    answer: (
      <>
        Your AI chatbot is trained for your industry. It understands customer queries, provides accurate responses, captures leads, and works 24/7. Explore our <Link to="/industries" className="text-primary hover:underline">industry-specific solutions</Link> for restaurants, real estate, and e-commerce.
      </>
    ),
  },
  {
    question: "Can I customise what the AI says?",
    answer:
      "Yes. You can provide specific information about your business, set the tone of voice, and define how the AI responds to different enquiries. We help configure everything during setup.",
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer:
      "When your chatbot encounters a question it can't confidently answer, it captures the customer's details and escalates to you via email. You never lose a potential lead.",
  },
  {
    question: "How much does it cost?",
    answer: (
      <>
        Our fully managed AI chatbot service starts from just £29 per month. No upfront costs, no long-term contracts. Cancel anytime. View our <Link to="/#pricing" className="text-primary hover:underline">pricing plans</Link> or check our <Link to="/refund-policy" className="text-primary hover:underline">refund policy</Link>.
      </>
    ),
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
