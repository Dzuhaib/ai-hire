"use client";

import { Facebook, Linkedin, Instagram } from "lucide-react";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/aivized",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ai-vized/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aivizedofficial?igsh=NTZqdHE0dmN3MDA3",
    icon: Instagram,
  },
];

export const SocialSidebar = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-9 h-9 rounded-lg bg-background/80 border border-border/60 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
      <div className="w-px h-10 bg-border/50 mt-1" />
    </div>
  );
};
