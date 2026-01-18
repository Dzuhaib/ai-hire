import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Our AI Vized handles 80% of customer enquiries now. We've saved countless hours and our customers love the instant responses.",
    industry: "Restaurant",
    location: "Manchester",
  },
  {
    quote: "Setup was incredibly simple. Within 24 hours we had AI Vized handling property viewings and capturing leads around the clock.",
    industry: "Real Estate",
    location: "London",
  },
  {
    quote: "Best investment we've made this year. Our conversion rate increased by 35% since adding AI Vized to our online store.",
    industry: "E-commerce",
    location: "Bristol",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.2em] text-primary mb-6"
          >
            Trusted by UK Businesses
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="card-premium p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground/90 mb-6 flex-grow leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Industry & Location */}
              <div className="border-t border-border pt-6">
                <p className="text-sm text-primary">
                  {testimonial.industry} • {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
