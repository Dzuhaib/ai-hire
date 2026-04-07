import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "./MagneticButton";
import { ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-tag mb-4"
          >
            Ready to start?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6"
          >
            Get Your AIVized{" "}
            <span className="text-gradient">AI Colleague Today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-4"
          >
            Fully managed AI chatbot. No contracts. No technical skills needed. We install everything.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.13 }}
            className="text-sm text-muted-foreground/75 mb-10"
          >
            Serving businesses in{" "}
            <Link href="/locations/london" className="text-primary hover:underline">London</Link>,{" "}
            <Link href="/locations/manchester" className="text-primary hover:underline">Manchester</Link>,{" "}
            <Link href="/locations/birmingham" className="text-primary hover:underline">Birmingham</Link>, and{" "}
            <Link href="/locations" className="text-primary hover:underline">more UK cities</Link>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <MagneticButton
              className="btn-primary group"
              onClick={() => scrollToSection("#pricing")}
            >
              Start Your 3-Day Free Trial
              <ArrowRight className="w-4 h-4 ml-2 inline-block transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
