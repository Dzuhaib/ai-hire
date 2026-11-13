"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/aivized", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ai-vized/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/aivizedofficial?igsh=NTZqdHE0dmN3MDA3", icon: Instagram },
];

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "AI Systems", href: "/services#ai-systems" },
      { label: "Automations", href: "/services#automations" },
      { label: "SEO & GEO", href: "/services#seo-geo" },
      { label: "Digital Marketing", href: "/services#digital-marketing" },
      { label: "Web Development", href: "/services#web-development" },
      { label: "Desktop Software", href: "/services#desktop-software-development" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Locations", href: "/locations" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="px-4 pb-4 md:px-6 md:pb-6"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] border border-border/60 surface-warm shadow-[var(--shadow-card)]">
        <div className="px-6 py-12 md:px-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_0.8fr] lg:gap-12">
          <div className="max-w-sm">
            <Link href="/" aria-label="AIVized home" className="inline-flex items-center">
              <Image
                src="/logo/logo.png"
                alt="AIVized"
                width={2172}
                height={724}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              AI systems, automation, and digital growth for businesses that want practical results
              rather than another layer of software.
            </p>

            <a
              href="mailto:info@aivized.com"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              info@aivized.com
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-foreground/70">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/50 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AIVized. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Serving businesses across Dubai, Abu Dhabi, Sharjah, and the wider UAE.
          </p>
        </div>
        </div>
      </div>
    </motion.footer>
  );
};
