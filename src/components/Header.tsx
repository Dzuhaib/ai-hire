"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MagneticButton } from "./MagneticButton";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  isRoute?: boolean;
}

const navItems: NavItem[] = [
  { label: "About", href: "/about", isRoute: true },
  { label: "Services", href: "/services", isRoute: true },
  { label: "Industries", href: "/industries", isRoute: true },
  { label: "Case Studies", href: "/case-studies", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
  { label: "Blog", href: "/blog", isRoute: true },
];

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
    >
      <div
        className={cn(
          "mx-auto max-w-6xl rounded-2xl border backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "border-border/70 bg-background/90 shadow-[var(--shadow-frame)]"
            : "border-border/40 bg-background/75 shadow-sm"
        )}
      >
        <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-5">
          <Link href="/" aria-label="AIVized home" className="flex items-center">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/logo/logo.png"
                alt="AIVized"
                width={2172}
                height={724}
                priority
                className="h-10 w-auto md:h-11"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm",
                    isActive(item.href)
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  {isActive(item.href) ? (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-primary/70" />
                  ) : null}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link href="/contact">
              <MagneticButton className="btn-primary px-5 py-2.5 text-xs">
                Book a Free Consultation
              </MagneticButton>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="rounded-xl border border-border/60 bg-card p-2 text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl border-l border-border/50">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Main navigation links and actions</SheetDescription>
              <div className="flex flex-col h-full pt-8">
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) =>
                    item.isRoute ? (
                      <SheetClose asChild key={item.label}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-lg font-medium transition-colors text-left",
                            isActive(item.href)
                              ? "text-primary"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ) : (
                      <SheetClose asChild key={item.label}>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="text-lg font-medium transition-colors text-left text-muted-foreground hover:text-foreground"
                        >
                          {item.label}
                        </button>
                      </SheetClose>
                    )
                  )}
                </nav>
                
                <div className="mt-auto pb-8 space-y-3">
                  <SheetClose asChild>
                    <Link
                      href="/contact"
                      className="btn-primary w-full text-center"
                    >
                      Book a Free Consultation
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};
