import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Bot, User, LogIn } from "lucide-react";
import { useUser, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
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
  { label: "Industries", href: "/industries", isRoute: true },
  { label: "Pricing", href: "/pricing", isRoute: true },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Blog", href: "/blog", isRoute: true },
];

export const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.filter(item => !item.isRoute).map(item => item.href.substring(1));
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

  const handleNavClick = (item: NavItem) => {
    if (item.isRoute) {
      navigate(item.href);
    } else {
      const element = document.querySelector(item.href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

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
            <div className="relative w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-primary/20 animate-pulse" />
              <Bot className="w-4 h-4 text-primary relative z-10" />
            </div>
            <span className="text-gradient font-semibold">AI Vized</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
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

          {/* Desktop Auth/CTA */}
          <div className="hidden md:flex items-center gap-4">
            <SignedIn>
              <Link to="/dashboard">
                <MagneticButton className="flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:border-primary/50 hover:bg-secondary transition-all">
                  <User className="w-4 h-4" />
                  Dashboard
                </MagneticButton>
              </Link>
            </SignedIn>
            <SignedOut>
              <Link to="/auth">
                <MagneticButton className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </MagneticButton>
              </Link>
            </SignedOut>
            <MagneticButton
              className="btn-primary text-xs"
              onClick={() => scrollToSection("#pricing")}
            >
              Start Free Trial
            </MagneticButton>
          </div>

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
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Main navigation links and actions</SheetDescription>
              <div className="flex flex-col h-full pt-8">
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <button
                        onClick={() => handleNavClick(item)}
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
                
                <div className="mt-auto pb-8 space-y-3">
                  <SignedIn>
                    <SheetClose asChild>
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-2 w-full p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <User className="w-5 h-5 text-primary" />
                        <span className="font-medium">Dashboard</span>
                      </Link>
                    </SheetClose>
                  </SignedIn>
                  <SignedOut>
                    <SheetClose asChild>
                      <Link
                        to="/auth"
                        className="flex items-center gap-2 w-full p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <LogIn className="w-5 h-5 text-primary" />
                        <span className="font-medium">Sign In</span>
                      </Link>
                    </SheetClose>
                  </SignedOut>
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollToSection("#pricing")}
                      className="btn-primary w-full text-center"
                    >
                      Start Free Trial
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
