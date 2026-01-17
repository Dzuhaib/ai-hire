import { motion } from "framer-motion";
import { Bot } from "lucide-react";
export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 border-t border-border/50"
    >
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2 text-lg font-serif font-semibold">
              <div className="relative w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-primary/20 animate-pulse" />
                <Bot className="w-4 h-4 text-primary relative z-10" />
              </div>
              <span>
                <span className="text-gradient">AI</span>
                <span className="text-foreground">Employee</span>
              </span>
            </a>
            <span className="text-sm text-muted-foreground">
              Built for UK businesses
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AIEmployee. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
