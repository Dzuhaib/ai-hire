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
    question: "What services does AIVized provide?",
    answer: (
      <>
        We provide six core services: AI Systems, Automations, SEO &amp; GEO, Digital Marketing, Web
        Development, and Desktop Software Development. You can use one service or combine several. See the
        full breakdown on our <Link href="/services" className="text-primary hover:underline">services page</Link>.
      </>
    ),
  },
  {
    question: "Which service should I start with?",
    answer:
      "It depends on the bottleneck. If leads are the problem, SEO, marketing, and a better website usually come first. If the team is drowning in admin, AI and automation will have the biggest impact. On a discovery call we will recommend the shortest path to a measurable result.",
  },
  {
    question: "Do you work with small businesses or only large companies?",
    answer:
      "Both. Most of our clients are UK small and medium-sized businesses, but we also deliver custom systems and software for larger organisations with more complex requirements.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Smaller automation and landing-page projects can be live in a few weeks. A full website, AI system, or desktop application typically takes four to twelve weeks depending on scope and integrations. We agree the timeline in writing before work starts.",
  },
  {
    question: "How much does it cost?",
    answer: (
      <>
        Pricing depends on scope. We provide a fixed written quote after discovery, with no obligation. For
        ongoing work, monthly retainers are available.{" "}
        <Link href="/contact" className="text-primary hover:underline">Book a consultation</Link> to discuss
        your budget and requirements.
      </>
    ),
  },
  {
    question: "Do we own the website, code, and data?",
    answer:
      "Yes. You own the accounts, data, and intellectual property we create for you. We set projects up so you are not locked into us, and we document everything for a clean handover if you ever want to take things in-house.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer managed partnerships that include monitoring, maintenance, updates, and continuous improvement. Support is optional, not a condition of working with us.",
  },
  {
    question: "Can you work with our existing website and tools?",
    answer:
      "Usually, yes. We regularly integrate with existing websites, CRMs, booking systems, and internal tools. If something is genuinely holding you back, we will tell you rather than forcing a rebuild you do not need.",
  },
  {
    question: "How is SEO and GEO different?",
    answer:
      "SEO focuses on ranking in traditional search results. GEO, or Generative Engine Optimisation, focuses on being understood and cited by AI tools such as ChatGPT, Perplexity, and Google AI Overviews. We combine both so your business is visible wherever customers are searching.",
  },
  {
    question: "Are you UK-based?",
    answer:
      "Yes. AIVized is a UK-based team working with clients across the country. Communication is in English, and we work to UK business hours with scheduled calls as needed.",
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
            Frequently Asked <span className="text-gradient">Questions</span>
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
