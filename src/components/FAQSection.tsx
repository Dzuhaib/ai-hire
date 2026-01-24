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
    question: "What is a managed AI chatbot service?",
    answer: (
      <>
        A managed AI chatbot service means we handle everything—installation, configuration, 24/7 monitoring, and ongoing updates. Unlike DIY chatbot builders, our managed AI chatbot service requires no technical skills from your side. We install, you benefit. Perfect for UK small businesses who want to capture leads 24/7 without the hassle. See our <Link to="/#how-it-works" className="text-primary hover:underline">step-by-step process</Link>.
      </>
    ),
  },
  {
    question: "How much does an affordable AI chatbot for website cost?",
    answer: (
      <>
        Our affordable AI chatbot for website starts from just £29/month—making it the cheapest managed AI chatbot UK businesses can find. No upfront costs, no developers needed, no long-term contracts. View our <Link to="/#pricing" className="text-primary hover:underline">pricing plans</Link> or check our <Link to="/refund-policy" className="text-primary hover:underline">14-day money-back guarantee</Link>.
      </>
    ),
  },
  {
    question: "How can I capture leads on my website 24/7?",
    answer: (
      <>
        Our lead generation chatbot UK businesses trust works around the clock. It engages visitors, answers questions, and captures qualified leads automatically—even at 3am. Reduce missed leads from your website and never lose another customer enquiry. Explore how it works for <Link to="/industries" className="text-primary hover:underline">your industry</Link>.
      </>
    ),
  },
  {
    question: "Is this AI chatbot for small business UK suitable for my company?",
    answer:
      "Yes! Our AI chatbot for small business UK is designed specifically for SMEs across restaurants, real estate, and e-commerce. Whether you're in London, Manchester, or Birmingham—our managed solution handles customer enquiries so you can focus on running your business.",
  },
  {
    question: "How does your AI chatbot provide 24/7 customer support?",
    answer:
      "Our 24/7 customer support chatbot UK handles customer queries any time of day or night. It's monitored by our team and continuously improved. When it encounters a question it can't answer, it captures the customer's details and escalates to you immediately—you never lose a lead.",
  },
  {
    question: "Can this chatbot help me automate customer inquiries for my small business?",
    answer:
      "Absolutely. Our AI is trained to automate customer inquiries for small businesses—answering FAQs, capturing lead details, and providing instant responses. This frees up your time while ensuring every visitor gets immediate attention.",
  },
  {
    question: "What makes AIVized the best chatbot for small business UK 2025?",
    answer: (
      <>
        Unlike basic chatbots, AIVized is a fully managed service. We install everything on your website, monitor performance 24/7, and continuously optimise responses. Combined with our affordable pricing from £29/month, we're proud to be considered among the best chatbot for small business UK in 2025. <Link to="/locations" className="text-primary hover:underline">Find your local service</Link>.
      </>
    ),
  },
  {
    question: "How does AIVized compare to Intercom alternatives for small business?",
    answer:
      "Looking for Intercom alternatives for small business? AIVized offers similar AI capabilities at a fraction of the cost—without the complexity. We're fully managed, so there's no setup learning curve. From £29/month vs hundreds with enterprise tools, we're the smart choice for UK SMEs.",
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
            Managed AI Chatbot <span className="text-gradient">FAQ</span>
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
