import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_60%)]" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        {/* Logo */}
        <motion.div 
          className="flex items-center justify-center gap-3 mb-8"
          animate={{ 
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-pulse" />
            <Bot className="w-7 h-7 text-primary relative z-10" />
          </div>
          <span className="text-3xl font-serif font-semibold tracking-tight">
            <span className="text-gradient">Rentlized</span>
            <span className="text-foreground">AI</span>
          </span>
        </motion.div>

        {/* Loading indicator */}
        <div className="flex items-center justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          Loading your experience...
        </motion.p>
      </motion.div>
    </div>
  );
};
