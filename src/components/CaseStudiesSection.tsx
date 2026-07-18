import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "How The Northern Grill Cut Enquiry Response Time from 12 Hours to 3 Seconds",
    business: "The Northern Grill",
    industry: "Restaurant",
    location: "Manchester",
    challenge: "The Northern Grill was missing 40% of reservation enquiries because calls came in after hours. Their team spent 2+ hours daily on repetitive questions about menus, allergens, and bookings.",
    solution: "AIVized deployed a restaurant-specific AI chatbot trained on their menu, pricing, allergen info, reservation policies, and event packages. Installed within 24 hours.",
    results: [
      "80% of enquiries handled automatically by AI",
      "Average response time dropped from 12 hours to under 3 seconds",
      "30% reduction in no-shows via automated reminders",
      "Front-of-house team reclaimed 15+ hours per week",
    ],
  },
  {
    title: "Thompson & Co. Increased Lead Capture by 45% with 24/7 AI Chatbot",
    business: "Thompson & Co. Estate Agents",
    industry: "Real Estate",
    location: "London",
    challenge: "Thompson & Co. had 5 negotiators handling calls, emails, and website enquiries. After-hours property enquiries from Rightmove and their own site went unanswered until the next morning, losing leads to competitors.",
    solution: "AIVized installed a fully managed AI chatbot that qualifies property viewing requests, answers valuation enquiries, captures tenant details, and schedules appointments automatically.",
    results: [
      "45% increase in qualified lead capture within the first month",
      "Viewing bookings captured 24/7, including Sundays and bank holidays",
      "Staff saved 20+ hours per week on enquiry filtering",
      "ROI achieved within 6 weeks of deployment",
    ],
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-tag mb-3"
          >
            Real Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold"
          >
            Case <span className="text-gradient">Studies</span>
          </motion.h2>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 md:p-10 hover:border-primary/30 hover:shadow-[var(--shadow-lift)] transition-all duration-300"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {study.industry}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {study.location}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-6 leading-tight">
                {study.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-destructive mb-2">
                    The Challenge
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                    The Solution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                  Key Results
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
