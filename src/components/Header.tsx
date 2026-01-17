import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Bot } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${sectionId}`);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="/"
            className="flex items-center gap-2 text-xl font-serif font-semibold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <span>
              <span className="text-gradient">AI</span>
              <span className="text-foreground">Employee</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "magnetic-link text-sm transition-colors",
                  activeSection === item.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <MagneticButton
            className="btn-primary text-xs hidden md:flex"
            onClick={() => scrollToSection("#pricing")}
          >
            Rent an AI Employee
          </MagneticButton>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl border-l border-border/50">
              <div className="flex flex-col h-full pt-8">
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={cn(
                          "text-lg font-medium transition-colors text-left",
                          activeSection === item.href
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </button>
                    </SheetClose>
                  ))}
                </nav>
                
                <div className="mt-auto pb-8">
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollToSection("#pricing")}
                      className="btn-primary w-full text-center"
                    >
                      Rent an AI Employee
                    </button>
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
