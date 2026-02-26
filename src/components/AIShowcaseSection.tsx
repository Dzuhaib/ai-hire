import { motion } from "framer-motion";
import { Bot, MessageCircle, Users } from "lucide-react";
import { OptimizedVideo } from "@/components/OptimizedVideo";
import aiAssistantVideo from "@/assets/ai-assistant-talking.mp4";

export const AIShowcaseSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
          >
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Meet Your AI Colleague</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6">
              Hire Your <span className="text-gradient">AI Colleague Today</span>
            </h2>
          
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your fully managed AI chatbot engages with customers naturally, answering questions and capturing leads 24/7. We install and handle everything—no technical skills needed.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Video container - simplified for performance */}
          <div className="relative rounded-3xl overflow-hidden border border-primary/20 bg-card/50 shadow-xl">
            <div className="relative rounded-3xl overflow-hidden">
              <OptimizedVideo
                src={aiAssistantVideo}
                className="w-full aspect-video"
              />
              
              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating chat bubbles */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-8 left-8 flex items-center gap-3 px-4 py-3 rounded-2xl bg-card/90 backdrop-blur-sm border border-primary/20 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">"Hi! How can I help you today?"</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-8 right-8 flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30"
              >
                <Users className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary">24/7 Available</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Feature highlights below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto"
        >
          {[
            { label: "Instant Responses", desc: "No waiting, no delays" },
            { label: "Natural Conversation", desc: "Feels like talking to a human" },
            { label: "Never Takes a Break", desc: "Works while you sleep" },
          ].map((item, index) => (
            <div key={index} className="text-center p-4">
              <div className="w-2 h-2 rounded-full bg-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-1">{item.label}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
