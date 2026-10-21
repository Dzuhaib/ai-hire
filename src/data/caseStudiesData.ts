export interface EngagementExample {
  slug: string;
  title: string;
  businessType: string;
  industry: string;
  location: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  services: { label: string; href: string }[];
}

export const engagementExamples: EngagementExample[] = [
  {
    slug: "fashion-retailer-bristol",
    title: "Rebuilding a slow storefront for search and conversion",
    businessType: "Independent fashion retailer",
    industry: "E-commerce",
    location: "Bristol",
    challenge:
      "A growing retailer had outgrown a slow, template-based store. Product pages were difficult to find in search, mobile conversion was falling, and the team lacked a clear view of which channels drove sales.",
    approach:
      "We rebuilt the storefront for speed and conversion, fixed technical SEO and structured data, and added automated abandoned-cart and post-purchase email flows.",
    deliverables: [
      "Faster, mobile-first storefront",
      "Technical SEO and structured data",
      "Conversion-focused product templates",
      "Automated email follow-up flows",
    ],
    services: [
      { label: "Web Development", href: "/services#web-development" },
      { label: "SEO & GEO", href: "/services#seo-geo" },
      { label: "Automations", href: "/services#automations" },
    ],
  },
  {
    slug: "consultancy-manchester",
    title: "Reducing manual enquiry handling with AI triage",
    businessType: "Management consultancy",
    industry: "Professional Services",
    location: "Manchester",
    challenge:
      "New enquiries arrived by email and web form and were manually read, categorised, and forwarded. Senior consultants were losing billable time to admin, and high-value leads sometimes waited days for a reply.",
    approach:
      "We designed an AI enquiry triage system that reads each request, scores fit and urgency, routes it to the right consultant, and logs everything in the CRM. Automated follow-up and proposal reminders completed the workflow.",
    deliverables: [
      "AI enquiry triage and routing",
      "CRM integration and activity logging",
      "Automated follow-up sequences",
      "Proposal and reminder workflows",
    ],
    services: [
      { label: "AI Systems", href: "/services#ai-systems" },
      { label: "Automations", href: "/services#automations" },
    ],
  },
  {
    slug: "hospitality-group-london",
    title: "Connecting local search, bookings, and follow-up",
    businessType: "Hospitality group",
    industry: "Hospitality",
    location: "London",
    challenge:
      "The group relied heavily on third-party booking platforms and was difficult to find for several high-intent local searches. Booking enquiries that arrived after hours were often lost before the team opened the next morning.",
    approach:
      "We rebuilt the booking journey, improved local SEO and Google Business profiles for each venue, and added automated reminders, review requests, and after-hours enquiry capture.",
    deliverables: [
      "Conversion-focused booking journey",
      "Local SEO and Google Business optimisation",
      "Automated reminders and review requests",
      "After-hours enquiry capture",
    ],
    services: [
      { label: "Web Development", href: "/services#web-development" },
      { label: "SEO & GEO", href: "/services#seo-geo" },
      { label: "Automations", href: "/services#automations" },
    ],
  },
  {
    slug: "clinic-leeds",
    title: "Making appointment enquiries easier to handle",
    businessType: "Private healthcare clinic",
    industry: "Healthcare",
    location: "Leeds",
    challenge:
      "Reception staff were managing a high volume of repetitive appointment questions alongside in-person patients. Evening and weekend enquiries were not being captured consistently.",
    approach:
      "We built an AI-assisted enquiry flow that answers common questions, collects patient details, and routes appointment requests to the right team member, with clear escalation for clinical questions.",
    deliverables: [
      "AI-assisted enquiry handling",
      "Appointment request capture",
      "Safe escalation for clinical questions",
      "CRM and notification integration",
    ],
    services: [
      { label: "AI Systems", href: "/services#ai-systems" },
      { label: "Automations", href: "/services#automations" },
    ],
  },
  {
    slug: "homeware-brand-birmingham",
    title: "Improving product discovery and post-purchase support",
    businessType: "Homeware e-commerce brand",
    industry: "E-commerce",
    location: "Birmingham",
    challenge:
      "Customers struggled to find the right product, and routine questions about sizing, materials, delivery, and returns were consuming the small support team's day.",
    approach:
      "We improved site search and category structure, added an AI product assistant trained on the catalogue, and automated post-purchase updates and returns guidance.",
    deliverables: [
      "Improved site search and categories",
      "AI product and order assistant",
      "Automated delivery and returns messaging",
      "Performance and SEO improvements",
    ],
    services: [
      { label: "AI Systems", href: "/services#ai-systems" },
      { label: "Web Development", href: "/services#web-development" },
      { label: "SEO & GEO", href: "/services#seo-geo" },
    ],
  },
  {
    slug: "professional-firm-glasgow",
    title: "Structuring client intake and follow-up",
    businessType: "Professional services firm",
    industry: "Professional Services",
    location: "Glasgow",
    challenge:
      "Intake was inconsistent across the team. Some enquiries were followed up quickly, others were missed, and there was no single view of where each prospect was in the process.",
    approach:
      "We created a structured intake form, automated qualification and routing, and built a simple pipeline with reminders so every enquiry received a consistent follow-up.",
    deliverables: [
      "Structured client intake form",
      "Automated qualification and routing",
      "Pipeline and reminder system",
      "Reporting on enquiry sources",
    ],
    services: [
      { label: "Automations", href: "/services#automations" },
      { label: "AI Systems", href: "/services#ai-systems" },
    ],
  },
];
