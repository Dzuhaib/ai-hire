import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { Link } from "react-router-dom";

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
            <Link to="/" className="flex items-center gap-2 text-lg font-serif font-semibold">
              <div className="relative w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-primary/20 animate-pulse" />
                <Bot className="w-4 h-4 text-primary relative z-10" />
              </div>
              <span>
                <span className="text-gradient">Rentlized</span>
                <span className="text-foreground">AI</span>
              </span>
            </Link>
            <span className="text-sm text-muted-foreground">
              Built for UK businesses
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RentlizedAI. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
