import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

const navItems = [
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
];

export const Header = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
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
            className="text-xl font-serif font-semibold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gradient">AI</span>
            <span className="text-foreground">Employee</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="magnetic-link text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <MagneticButton
            className="btn-primary text-xs"
            onClick={() => scrollToSection("#pricing")}
          >
            Rent an AI Employee
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
};
