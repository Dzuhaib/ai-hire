import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a managed AI chatbot service?",
    answer: "A managed AI chatbot service means a company installs, trains, and maintains the chatbot for you. With AIVized, you subscribe to a plan and we handle everything from setup to ongoing updates. You do not touch any code.",
  },
  {
    question: "How much does an affordable AI chatbot for website cost?",
    answer: (
      <>
        AIVized plans start from £29 per month plus a one-time £50 setup fee. There are no long-term contracts and a 3-day free trial is included. View our <Link href="/#pricing" className="text-primary hover:underline">pricing plans</Link>.
      </>
    ),
  },
  {
    question: "How can I capture leads on my website 24/7?",
    answer: "AIVized installs an AI chatbot that engages every visitor, asks qualifying questions, and collects their contact details automatically. Leads are delivered to your email or CRM around the clock.",
  },
  {
    question: "Is this AI chatbot for small business UK suitable for my company?",
    answer: "If your business has a website and receives customer enquiries, yes. AIVized works for restaurants, real estate agencies, ecommerce stores, clinics, law firms, gyms, and travel businesses across the UK.",
  },
  {
    question: "How does your AI chatbot provide 24/7 customer support?",
    answer: "The chatbot runs on your website continuously. It answers questions, takes bookings, and captures leads at any hour without staff involvement. Average response time is under 3 seconds.",
  },
  {
    question: "Can this chatbot help me automate customer inquiries for my small business?",
    answer: "Yes. AIVized is trained on your specific business, products, and services. It handles the questions your customers ask most, freeing your team to focus on higher-value work.",
  },
  {
    question: "What makes AIVized different from other chatbot services for small business UK?",
    answer: "AIVized is fully managed. Unlike DIY platforms where you build and maintain the chatbot yourself, we handle everything. Setup, training, monitoring, and updates are all included in your monthly plan.",
  },
  {
    question: "How does AIVized compare to Intercom alternatives for small business?",
    answer: "Intercom requires technical setup and internal management. AIVized costs significantly less and includes full management. You get enterprise-quality AI without needing a technical team.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-tag mb-3"
          >
            Got Questions?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold"
          >
            Managed AI Chatbot <span className="text-gradient">FAQ</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-serif font-medium text-lg hover:text-primary transition-colors py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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
