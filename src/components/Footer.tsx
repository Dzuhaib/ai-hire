"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import Link from "next/link";

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
            <Link href="/" className="flex items-center gap-2 text-lg font-serif font-semibold">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <span className="font-serif font-semibold text-foreground">AIVized</span>
            </Link>
            <span className="text-sm text-muted-foreground">
              Built for UK businesses
            </span>
          </div>

          <div className="flex items-center gap-4 md:gap-6 text-sm text-muted-foreground flex-wrap justify-center">
            <Link href="/pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/industries" className="hover:text-foreground transition-colors">
              Industries
            </Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="hover:text-foreground transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} aivized. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="mailto:aivized.com@gmail.com" className="hover:text-foreground transition-colors">
              aivized.com@gmail.com
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
