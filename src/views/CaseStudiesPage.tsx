"use client";

import { motion } from "framer-motion";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const caseStudies = [
  {
    title: "Restaurant AI Chatbot in London",
    industry: "Restaurants",
    location: "London",
    challenge: "A London restaurant chain was losing 67% of online booking enquiries due to slow phone response times and after-hours closures.",
    solution: "AIVized deployed a custom-trained AI chatbot that handles reservations, menu enquiries, and allergen questions 24/7 across all locations.",
    results: "30% increase in captured leads within the first month. 40% reduction in no-shows through automated reminders.",
    rating: 5,
  },
  {
    title: "Estate Agency Automation in Manchester",
    industry: "Real Estate",
    location: "Manchester",
    challenge: "A Manchester estate agency struggled to qualify leads outside office hours, missing potential buyers who enquired on weekends and evenings.",
    solution: "AIVized deployed an AI chatbot that qualifies property buyers by budget, timeline, and preferences, scheduling viewings automatically.",
    results: "50% more qualified consultations booked. Lead response time reduced from 12 hours to under 3 seconds.",
    rating: 5,
  },
  {
    title: "E-Commerce Support in Birmingham",
    industry: "E-Commerce",
    location: "Birmingham",
    challenge: "An e-commerce store was experiencing high cart abandonment rates due to unanswered product questions during off-hours.",
    solution: "AIVized deployed a product-trained AI chatbot that answers sizing, compatibility, and shipping questions instantly.",
    results: "25% reduction in cart abandonment. 35% increase in conversion rate from first-time visitors.",
    rating: 5,
  },
  {
    title: "Healthcare Clinic in Leeds",
    industry: "Healthcare",
    location: "Leeds",
    challenge: "A private healthcare clinic in Leeds was missing patient registrations from evening and weekend enquiries.",
    solution: "AIVized deployed a healthcare-trained AI chatbot that handles patient registrations, appointment booking, and FAQ handling 24/7.",
    results: "35% more new patient registrations. Reception staff workload reduced by 60%.",
    rating: 5,
  },
  {
    title: "Fitness Studio in Edinburgh",
    industry: "Fitness",
    location: "Edinburgh",
    challenge: "A boutique fitness studio in Edinburgh couldn't handle the surge in trial class bookings during New Year's resolution period.",
    solution: "AIVized deployed a fitness-trained AI chatbot that handles membership enquiries, class bookings, and trial requests 24/7.",
    results: "Double trial bookings during peak season. Year-round membership retention improved by 20%.",
    rating: 5,
  },
  {
    title: "Legal Practice in Glasgow",
    industry: "Legal",
    location: "Glasgow",
    challenge: "A Glasgow law firm was losing potential clients who needed immediate legal advice outside standard business hours.",
    solution: "AIVized deployed a legal AI chatbot that qualifies case prospects by type, urgency, and budget, routing to the right department.",
    results: "50% more qualified consultation requests. 60% reduction in time spent on initial client screening.",
    rating: 5,
  },
];

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-secondary/20">
        <div className="container-narrow relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Case Studies</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              Real Results for UK Businesses
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              See how businesses across London, Manchester, Birmingham, Leeds, Edinburgh, Glasgow, and more are transforming their customer service with AIVized.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card-premium p-6 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {study.industry}
                  </span>
                  <span className="text-sm text-muted-foreground">{study.location}</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">{study.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  <strong>Challenge:</strong> {study.challenge}
                </p>
                <p className="text-muted-foreground text-sm mb-3">
                  <strong>Solution:</strong> {study.solution}
                </p>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <p className="text-sm text-primary font-semibold mb-2">Results:</p>
                  <p className="text-muted-foreground text-sm">{study.results}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-secondary/10 p-8 rounded-xl border border-border/50 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Ready to See Your Own Results?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join businesses across the UK already using AIVized to deliver exceptional customer service 24/7.
              No contracts, no technical skills needed, setup in under 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#pricing" className="btn-primary inline-block text-center">
                View Pricing Plans
              </a>
              <a href="mailto:info@aivized.com" className="btn-outline inline-block text-center">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
