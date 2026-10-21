import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "How a Bristol Retailer Grew Organic Revenue 68% with a Rebuilt Storefront and Technical SEO",
    business: "Urban Threads UK",
    industry: "E-commerce",
    location: "Bristol",
    challenge: "Urban Threads had outgrown a slow, template-based store. Product pages were hard to find in search, mobile conversion was falling, and the team had no clear view of which channels actually drove sales.",
    solution: "AIVized rebuilt the storefront for speed and conversion, fixed technical SEO and structured data, launched a GEO-ready content plan, and added automated abandoned-cart and post-purchase email flows.",
    results: [
      "68% increase in organic revenue within six months",
      "41% faster page load on mobile",
      "32% reduction in cart abandonment through automated recovery",
      "Clear channel-level reporting across SEO, email, and paid",
    ],
  },
  {
    title: "How a Manchester Consultancy Saved 30 Hours a Week with AI Triage and CRM Automation",
    business: "Northbridge Consulting",
    industry: "Professional Services",
    location: "Manchester",
    challenge: "Every new enquiry arrived by email or web form and was manually read, categorised, and forwarded. Senior consultants were losing billable time to admin, and high-value leads sometimes waited days for a reply.",
    solution: "We built an AI enquiry triage system that reads each request, scores fit and urgency, routes it to the right consultant, and logs everything in the CRM. Automated follow-up sequences and proposal reminders completed the workflow.",
    results: [
      "30 hours a week returned to billable work",
      "Average first-response time cut from 2 days to 18 minutes",
      "100% of enquiries logged and tracked in the CRM",
      "Higher-quality discovery calls through automated qualification",
    ],
  },
  {
    title: "How a London Hospitality Group Increased Direct Bookings 41% with Local SEO and Automated Follow-Up",
    business: "The London Table Group",
    industry: "Hospitality",
    location: "London",
    challenge: "The group relied heavily on third-party booking platforms and was invisible for several high-intent local searches. Booking enquiries that arrived after hours were often lost before the team opened the next morning.",
    solution: "AIVized rebuilt the booking journey, improved local SEO and Google Business profiles for each venue, and added automated reminders, review requests, and after-hours enquiry capture.",
    results: [
      "41% increase in direct bookings",
      "Top-three local rankings for priority venue searches",
      "28% reduction in no-shows with automated reminders",
      "More reviews and stronger local visibility across venues",
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
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {study.business}
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
