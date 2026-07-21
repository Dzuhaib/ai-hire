"use client";

import { motion } from "framer-motion";
import { Bot, Facebook, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/aivized", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ai-vized/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/aivizedofficial?igsh=NTZqdHE0dmN3MDA3", icon: Instagram },
];

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
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/industries" className="hover:text-foreground transition-colors">
              Industries
            </Link>
            <Link href="/services/social-media-automation" className="hover:text-foreground transition-colors">
              Social Media
            </Link>
            <Link href="/services/business-automation" className="hover:text-foreground transition-colors">
              Automation
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
            © {new Date().getFullYear()} AIVized. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="mailto:info@aivized.com" className="hover:text-foreground transition-colors">
              info@aivized.com
            </a>
            <div className="flex items-center gap-2 lg:hidden">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
