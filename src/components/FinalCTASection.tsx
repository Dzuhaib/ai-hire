import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MagneticButton } from "./MagneticButton";

export const FinalCTASection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Simplified background for performance */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_60%)]" />

      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6"
          >
            Get Your AIVized{" "}
            <span className="text-gradient">AI Colleague Today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-6"
          >
            Fully managed AI chatbot. No contracts. No technical skills needed. We install everything.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-muted-foreground/80 mb-10"
          >
            Serving businesses in <Link to="/locations/london" className="text-primary hover:underline">London</Link>,{" "}
            <Link to="/locations/manchester" className="text-primary hover:underline">Manchester</Link>,{" "}
            <Link to="/locations/birmingham" className="text-primary hover:underline">Birmingham</Link>, and{" "}
            <Link to="/locations" className="text-primary hover:underline">more UK cities</Link>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MagneticButton
              className="btn-primary text-sm px-12 py-6"
              onClick={() => scrollToSection("#pricing")}
            >
              Get Your AI Chatbot Today
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
