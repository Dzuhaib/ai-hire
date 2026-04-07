import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Our AIVized handles 80% of customer enquiries now. We've saved countless hours and our customers love the instant responses.",
    industry: "Restaurant",
    location: "Manchester",
  },
  {
    quote: "Setup was incredibly simple. Within 24 hours we had AIVized handling property viewings and capturing leads around the clock.",
    industry: "Real Estate",
    location: "London",
  },
  {
    quote: "Best investment we've made this year. Our conversion rate increased by 35% since adding AIVized to our online store.",
    industry: "E-commerce",
    location: "Bristol",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-tag mb-3"
          >
            Trusted by UK Businesses
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold"
          >
            UK Businesses <span className="text-gradient">Trust AIVized</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="bg-card border border-border rounded-xl p-8 flex flex-col hover:border-primary/30 hover:shadow-[var(--shadow-lift)] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground/85 mb-6 flex-grow leading-relaxed font-serif text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Industry & Location */}
              <div className="pt-5 border-t border-border/60">
                <p className="text-sm font-medium text-primary">
                  {testimonial.industry}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
