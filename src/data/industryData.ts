export interface IndustryData {
  slug: string;
  industry: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  problems: Array<{ title: string; description: string }>;
  solutions: Array<{ title: string; description: string }>;
  features: Array<{ title: string; description: string; icon: string }>;
  useCases: string[];
  stats: Array<{ value: string; label: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

const defaultStats = [
  { value: "6", label: "Connected services" },
  { value: "1", label: "Accountable partner" },
  { value: "UAE", label: "Local delivery team" },
  { value: "Ongoing", label: "Support & improvement" },
];

const defaultFaqs = (industry: string, examples: string) => [
  {
    question: `What can AIVized do for ${industry.toLowerCase()} businesses in the UAE?`,
    answer: `We cover six connected services: AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development. For ${industry.toLowerCase()} businesses that includes ${examples}. We can start with one service or connect several into a single roadmap.`,
  },
  {
    question: "Do we need all six services at once?",
    answer:
      "No. Most engagements start with a discovery session and one or two priorities. We scope the smallest useful improvement first, prove the value, then expand into the other services when it makes commercial sense.",
  },
  {
    question: "Can you automate our industry-specific workflows?",
    answer:
      "Yes. We map how your team actually works, then automate the repetitive parts: enquiry handling, follow-ups, onboarding, reminders, reporting, and internal handoffs. Every automation is built around your existing tools rather than forcing a new system on your team.",
  },
  {
    question: "Can you help us appear in Google and AI-powered search?",
    answer:
      "Yes. Our SEO & GEO service covers technical SEO, content strategy, schema markup, and Generative Engine Optimisation so your business can rank in traditional results and be cited by tools like ChatGPT, Perplexity, and Google AI Overviews.",
  },
  {
    question: "Do you build websites and internal software as well?",
    answer:
      "Yes. We build fast, conversion-focused websites and web applications, plus Windows and macOS desktop tools for data-heavy workflows, reporting, and internal operations. Everything is designed to fit your process and integrate with the services you already use.",
  },
  {
    question: "How do you decide what to build first?",
    answer:
      "We start with a short discovery and audit. We review your enquiries, operations, search visibility, and current software, then propose a scoped plan with clear priorities, deliverables, and next steps. No long-term commitment is required to get that recommendation.",
  },
];

export const industries: Record<string, IndustryData> = {
  restaurants: {
    slug: "restaurants",
    industry: "Restaurants & Hospitality",
    tagline: "AI & Digital Growth for Restaurants",
    heroTitle: "AI, Automation & Digital Growth for Restaurants in the UAE",
    heroSubtitle:
      "AIVized helps restaurants, cafés, and hospitality groups connect AI systems, automations, SEO & GEO, digital marketing, web development, and desktop software into one practical growth roadmap.",
    description:
      "AI systems, workflow automation, search visibility, marketing, websites, and custom software for restaurants, cafés, and hospitality businesses across the UAE.",
    metaTitle: "AI, Automation & Digital Growth for Restaurants UAE | AIVized",
    metaDescription:
      "AIVized helps UAE restaurants with AI systems, automations, SEO & GEO, digital marketing, web development, and custom software. One connected partner for reservations, operations, and growth.",
    problems: [
      {
        title: "Enquiries Arrive When the Team Is Busiest",
        description:
          "Reservation requests, menu questions, and event enquiries often land during service, when nobody has a free hand to respond. The result is slow replies and bookings that never happen.",
      },
      {
        title: "Manual Work Between Systems",
        description:
          "Bookings, guest details, supplier orders, and reporting live in different tools. Staff copy information between them, and small errors turn into missed covers or wasted stock.",
      },
      {
        title: "Low Visibility Beyond Delivery Apps",
        description:
          "Many restaurants depend on aggregators and paid ads, while their own site, local search presence, and AI-search citations stay underdeveloped.",
      },
      {
        title: "Generic Tools That Do Not Fit Service",
        description:
          "Off-the-shelf booking and back-office software rarely matches how a specific venue runs. Teams end up working around the tool instead of with it.",
      },
    ],
    solutions: [
      {
        title: "AI Systems for Guest Enquiries",
        description:
          "Custom assistants trained on your menus, policies, and booking rules to answer guest questions, capture reservation requests, and route complex enquiries to your team.",
      },
      {
        title: "Automations That Remove Admin",
        description:
          "Automated booking confirmations, reminders, review requests, supplier follow-ups, and reporting so your team spends less time on repetitive admin.",
      },
      {
        title: "Local Search & AI Visibility",
        description:
          "SEO, local search, and GEO work so your venue shows up on Google, Maps, and AI answer engines when diners are deciding where to eat.",
      },
      {
        title: "Websites, Marketing & Custom Tools",
        description:
          "Fast booking-focused websites, paid and organic campaigns, and custom desktop tools for reservations, reporting, or multi-venue operations.",
      },
    ],
    features: [
      { title: "AI Systems", description: "Guest-facing assistants and internal knowledge tools trained on your menu and policies", icon: "Bot" },
      { title: "Automations", description: "Booking follow-ups, reminders, reporting, and supplier workflows that run without manual input", icon: "Workflow" },
      { title: "SEO & GEO", description: "Local search, schema, and AI-search visibility for your venue and locations", icon: "Search" },
      { title: "Digital Marketing", description: "Campaigns for offers, events, and new openings with conversion tracking", icon: "Megaphone" },
      { title: "Web Development", description: "Fast, mobile-first sites with reservations, menus, and ordering flows", icon: "Code2" },
      { title: "Desktop Software", description: "Custom tools for reservations, reporting, stock, and multi-venue operations", icon: "MonitorSmartphone" },
    ],
    useCases: [
      "Fine dining restaurants",
      "Casual dining chains",
      "Cafés and coffee shops",
      "Pubs and gastro pubs",
      "Takeaway and delivery",
      "Event catering",
      "Hotel restaurants",
      "Private dining venues",
    ],
    stats: defaultStats,
    faqs: defaultFaqs("Restaurants & Hospitality", "reservation capture, menu and allergen answers, review follow-ups, multi-venue reporting, and booking-focused websites"),
  },
  "real-estate": {
    slug: "real-estate",
    industry: "Real Estate & Property",
    tagline: "AI & Digital Growth for Real Estate",
    heroTitle: "AI, Automation & Digital Growth for Real Estate in the UAE",
    heroSubtitle:
      "AIVized helps estate agents, developers, and property managers connect AI systems, automations, SEO & GEO, digital marketing, web development, and custom software around the way property deals actually move.",
    description:
      "AI systems, lead automation, SEO & GEO, marketing, websites, and custom software for estate agents, developers, and property businesses across the UAE.",
    metaTitle: "AI, Automation & Digital Growth for Real Estate UAE | AIVized",
    metaDescription:
      "AIVized helps UAE property businesses with AI lead qualification, workflow automations, SEO & GEO, digital marketing, web development, and custom software. One connected growth partner.",
    problems: [
      {
        title: "Leads Cool Down Before an Agent Replies",
        description:
          "Buyers and tenants enquire across several agencies at once. Slow or inconsistent first responses quietly hand the opportunity to a faster competitor.",
      },
      {
        title: "Lead Data Is Scattered",
        description:
          "Enquiries arrive by form, phone, WhatsApp, and portals. Without a connected process, follow-ups are missed and agents spend time re-entering the same information.",
      },
      {
        title: "Listings Compete on Portals Alone",
        description:
          "Many agencies rely on property portals while their own website, local SEO, and AI-search presence do little to differentiate them or capture direct enquiries.",
      },
      {
        title: "Reporting Takes Manual Effort",
        description:
          "Pipeline updates, viewing feedback, and vendor reports are assembled by hand, which slows decision-making and creates gaps in accountability.",
      },
    ],
    solutions: [
      {
        title: "AI Lead Qualification",
        description:
          "Assistants that ask the right questions about budget, timeline, location, and requirements, then pass qualified enquiries to the right agent with context.",
      },
      {
        title: "Automated Follow-Up & Handoffs",
        description:
          "CRM updates, viewing reminders, document requests, and follow-up sequences that run consistently without relying on memory.",
      },
      {
        title: "Search Visibility for Listings & Areas",
        description:
          "SEO and GEO for property pages, area guides, and listings so your agency is found directly and cited by AI search tools.",
      },
      {
        title: "Websites, Campaigns & Internal Tools",
        description:
          "Conversion-focused property websites, paid and organic campaigns, and custom desktop tools for reporting or portfolio management.",
      },
    ],
    features: [
      { title: "AI Systems", description: "Lead qualification assistants and internal search across listings and policies", icon: "Bot" },
      { title: "Automations", description: "CRM updates, viewing reminders, document collection, and vendor reporting", icon: "Workflow" },
      { title: "SEO & GEO", description: "Property and area pages optimised for Google and AI answer engines", icon: "Search" },
      { title: "Digital Marketing", description: "Lead campaigns across Google, Meta, and LinkedIn with clear tracking", icon: "Megaphone" },
      { title: "Web Development", description: "Fast listing sites and portals with search, filters, and enquiry flows", icon: "Code2" },
      { title: "Desktop Software", description: "Custom tools for portfolio data, reporting, and operational workflows", icon: "MonitorSmartphone" },
    ],
    useCases: [
      "High street estate agents",
      "Online estate agencies",
      "Letting agents",
      "Property developers",
      "New homes sales",
      "Commercial property",
      "Property management",
      "Relocation services",
    ],
    stats: defaultStats,
    faqs: defaultFaqs("Real Estate & Property", "lead qualification, viewing coordination, CRM automation, listing and area SEO, and property-focused websites"),
  },
  ecommerce: {
    slug: "ecommerce",
    industry: "E-Commerce & Retail",
    tagline: "AI & Digital Growth for E-Commerce",
    heroTitle: "AI, Automation & Digital Growth for E-Commerce in the UAE",
    heroSubtitle:
      "AIVized helps online retailers and DTC brands connect AI systems, automations, SEO & GEO, digital marketing, web development, and custom software to turn more visitors into repeat customers.",
    description:
      "AI systems, support and order automations, SEO & GEO, performance marketing, e-commerce development, and custom software for online retailers across the UAE.",
    metaTitle: "AI, Automation & Digital Growth for E-Commerce UAE | AIVized",
    metaDescription:
      "AIVized helps UAE e-commerce brands with AI product assistants, order automations, SEO & GEO, digital marketing, web development, and custom software. One connected growth partner.",
    problems: [
      {
        title: "Visitors Leave With Unanswered Questions",
        description:
          "Sizing, compatibility, shipping, and returns questions stall purchases. When answers are slow or inconsistent, shoppers abandon the cart.",
      },
      {
        title: "Support and Operations Do Not Scale",
        description:
          "Order updates, returns, stock checks, and supplier follow-ups consume time that should go into merchandising and growth.",
      },
      {
        title: "Product Pages Struggle to Rank",
        description:
          "Thin descriptions and weak technical SEO limit organic traffic, while AI answer engines rarely cite the brand.",
      },
      {
        title: "Marketing Spend Is Hard to Attribute",
        description:
          "Campaigns run across several channels without connected tracking, so budget shifts are based on guesswork rather than contribution.",
      },
    ],
    solutions: [
      {
        title: "AI Shopping Assistants",
        description:
          "Assistants trained on your catalogue, policies, and FAQs to answer product questions, guide shoppers, and capture order enquiries.",
      },
      {
        title: "Order & Support Automations",
        description:
          "Automated order updates, returns workflows, review requests, and internal alerts so routine work runs without adding headcount.",
      },
      {
        title: "Product SEO & GEO",
        description:
          "Technical SEO, category and product content, schema, and GEO so your store ranks in search and gets referenced by AI tools.",
      },
      {
        title: "Campaigns, Storefronts & Custom Tools",
        description:
          "Performance marketing, conversion-focused storefronts, and custom desktop tools for inventory, reporting, or operations.",
      },
    ],
    features: [
      { title: "AI Systems", description: "Product assistants and internal knowledge tools trained on your catalogue", icon: "Bot" },
      { title: "Automations", description: "Order updates, returns, reviews, and supplier or inventory workflows", icon: "Workflow" },
      { title: "SEO & GEO", description: "Category, product, and technical SEO plus AI-search visibility", icon: "Search" },
      { title: "Digital Marketing", description: "Paid and organic campaigns tied to revenue and tracked properly", icon: "Megaphone" },
      { title: "Web Development", description: "Fast storefronts, landing pages, and custom checkout or booking flows", icon: "Code2" },
      { title: "Desktop Software", description: "Custom tools for inventory, order data, reporting, and operations", icon: "MonitorSmartphone" },
    ],
    useCases: [
      "Fashion and apparel",
      "Electronics and tech",
      "Health and beauty",
      "Home and garden",
      "Food and beverage",
      "Subscription boxes",
      "Dropshipping stores",
      "Marketplace sellers",
    ],
    stats: defaultStats,
    faqs: defaultFaqs("E-Commerce & Retail", "product assistants, order and returns automation, product-page SEO, paid campaigns, and conversion-focused storefronts"),
  },
  healthcare: {
    slug: "healthcare",
    industry: "Healthcare & Clinics",
    tagline: "AI & Digital Growth for Healthcare",
    heroTitle: "AI, Automation & Digital Growth for Healthcare in the UAE",
    heroSubtitle:
      "AIVized helps clinics, dental practices, and healthcare groups connect AI systems, automations, SEO & GEO, digital marketing, web development, and custom software while keeping patient communication safe and clear.",
    description:
      "AI systems, patient enquiry automation, SEO & GEO, healthcare marketing, websites, and custom software for clinics and healthcare businesses across the UAE.",
    metaTitle: "AI, Automation & Digital Growth for Healthcare UAE | AIVized",
    metaDescription:
      "AIVized helps UAE healthcare providers with patient enquiry AI, appointment automations, SEO & GEO, digital marketing, web development, and custom software. Administrative support only.",
    problems: [
      {
        title: "Reception Is the Bottleneck",
        description:
          "Front-desk teams juggle calls, walk-ins, and admin at once. Enquiries go unanswered during busy periods and new patients register elsewhere.",
      },
      {
        title: "Manual Appointment Workflows",
        description:
          "Reminders, rescheduling, registration forms, and follow-ups are handled by hand, increasing no-shows and admin load.",
      },
      {
        title: "Weak Local and AI Search Presence",
        description:
          "Patients search by treatment and location, often using AI tools. Clinics without structured content and local SEO are easy to miss.",
      },
      {
        title: "Disconnected Patient Information",
        description:
          "Enquiry details, booking notes, and administrative data sit in separate systems, creating duplicate work and inconsistent patient experiences.",
      },
    ],
    solutions: [
      {
        title: "Administrative AI Assistants",
        description:
          "Assistants that answer service, location, fee, and appointment questions, capture new patient details, and escalate urgent cases without giving medical advice.",
      },
      {
        title: "Appointment & Admin Automations",
        description:
          "Automated reminders, rescheduling prompts, registration follow-ups, and internal notifications that reduce reception workload.",
      },
      {
        title: "Local SEO & GEO for Clinics",
        description:
          "Treatment, location, and practitioner content structured so patients and AI search tools can find and understand your services.",
      },
      {
        title: "Websites, Campaigns & Practice Tools",
        description:
          "Accessible clinic websites, compliant marketing campaigns, and custom desktop tools for reporting or administrative workflows.",
      },
    ],
    features: [
      { title: "AI Systems", description: "Administrative patient assistants with clear medical-advice safeguards", icon: "Bot" },
      { title: "Automations", description: "Appointment reminders, registration follow-ups, and internal alerts", icon: "Workflow" },
      { title: "SEO & GEO", description: "Treatment and location pages optimised for search and AI answers", icon: "Search" },
      { title: "Digital Marketing", description: "Service campaigns and content with privacy-conscious tracking", icon: "Megaphone" },
      { title: "Web Development", description: "Accessible, fast clinic websites with clear booking and contact flows", icon: "Code2" },
      { title: "Desktop Software", description: "Custom administrative and reporting tools for multi-practice operations", icon: "MonitorSmartphone" },
    ],
    useCases: [
      "Dental practices",
      "GP surgeries",
      "Private clinics",
      "Physiotherapy practices",
      "Opticians",
      "Veterinary clinics",
      "Cosmetic clinics",
      "Mental health practices",
    ],
    stats: defaultStats,
    faqs: defaultFaqs("Healthcare & Clinics", "administrative patient assistants, appointment reminders, treatment-page SEO, clinic websites, and internal reporting tools"),
  },
  legal: {
    slug: "legal",
    industry: "Legal & Law Firms",
    tagline: "AI & Digital Growth for Law Firms",
    heroTitle: "AI, Automation & Digital Growth for Law Firms in the UAE",
    heroSubtitle:
      "AIVized helps law firms connect AI systems, automations, SEO & GEO, digital marketing, web development, and custom software so client intake, visibility, and case administration work together.",
    description:
      "AI intake systems, workflow automations, SEO & GEO, legal marketing, websites, and custom software for law firms and legal practices across the UAE.",
    metaTitle: "AI, Automation & Digital Growth for Law Firms UAE | AIVized",
    metaDescription:
      "AIVized helps UAE law firms with AI client intake, workflow automations, SEO & GEO, digital marketing, web development, and custom software. Clear AI safeguards, no legal advice.",
    problems: [
      {
        title: "Enquiries Arrive Outside Office Hours",
        description:
          "Potential clients often reach out in the evening or at weekends. When nobody responds, they contact another firm before the next working day.",
      },
      {
        title: "Solicitors Spend Time on Unqualified Enquiries",
        description:
          "Initial calls and emails often come from prospects outside your practice areas or budget, consuming billable time.",
      },
      {
        title: "Practice Areas Are Hard to Find Online",
        description:
          "Without structured service pages and local SEO, firms are invisible for specific matter types and locations, and rarely cited by AI search tools.",
      },
      {
        title: "Case Administration Is Manual",
        description:
          "Intake notes, conflict checks, document requests, and status updates are handled across disconnected tools.",
      },
    ],
    solutions: [
      {
        title: "AI Client Intake",
        description:
          "Assistants that capture matter type, urgency, location, and contact details, then route enquiries to the right practice area with clear AI disclosure.",
      },
      {
        title: "Intake & Follow-Up Automations",
        description:
          "Automated acknowledgements, document requests, consultation reminders, and internal handoffs that keep every enquiry moving.",
      },
      {
        title: "Practice-Area SEO & GEO",
        description:
          "Structured service pages, location content, and schema so clients and AI tools understand your specialisms.",
      },
      {
        title: "Websites, Campaigns & Firm Tools",
        description:
          "Professional firm websites, targeted campaigns, and custom desktop tools for reporting and administrative workflows.",
      },
    ],
    features: [
      { title: "AI Systems", description: "Client intake assistants with clear disclosure and no legal advice", icon: "Bot" },
      { title: "Automations", description: "Acknowledgements, document requests, reminders, and handoffs", icon: "Workflow" },
      { title: "SEO & GEO", description: "Practice-area and location pages built for search and AI citations", icon: "Search" },
      { title: "Digital Marketing", description: "Targeted campaigns for practice areas with responsible tracking", icon: "Megaphone" },
      { title: "Web Development", description: "Professional firm websites with clear service and contact journeys", icon: "Code2" },
      { title: "Desktop Software", description: "Custom tools for matter data, reporting, and administrative workflows", icon: "MonitorSmartphone" },
    ],
    useCases: [
      "High street solicitors",
      "Family law practices",
      "Conveyancing firms",
      "Personal injury lawyers",
      "Employment law specialists",
      "Criminal defence solicitors",
      "Immigration lawyers",
      "Commercial law firms",
    ],
    stats: defaultStats,
    faqs: defaultFaqs("Legal & Law Firms", "client intake, consultation reminders, practice-area SEO, firm websites, and internal reporting tools"),
  },
  fitness: {
    slug: "fitness",
    industry: "Fitness & Gyms",
    tagline: "AI & Digital Growth for Fitness",
    heroTitle: "AI, Automation & Digital Growth for Gyms & Studios in the UAE",
    heroSubtitle:
      "AIVized helps gyms, studios, and personal training businesses connect AI systems, automations, SEO & GEO, digital marketing, web development, and custom software to grow memberships and reduce admin.",
    description:
      "AI membership assistants, booking automations, SEO & GEO, fitness marketing, websites, and custom software for gyms, studios, and fitness businesses across the UAE.",
    metaTitle: "AI, Automation & Digital Growth for Gyms & Fitness UAE | AIVized",
    metaDescription:
      "AIVized helps UAE gyms and studios with AI membership support, booking automations, SEO & GEO, digital marketing, web development, and custom software. One connected growth partner.",
    problems: [
      {
        title: "Membership Enquiries Arrive Late",
        description:
          "Prospective members browse and decide in the evening, but reception is closed or busy. Interest fades before anyone follows up.",
      },
      {
        title: "Bookings and Reminders Are Manual",
        description:
          "Class bookings, trial sessions, waitlists, and reminders are handled by staff, creating delays and avoidable no-shows.",
      },
      {
        title: "Local Visibility Is Weak",
        description:
          "Studios compete on aggregators and social media while their own website and local search presence do little to attract direct sign-ups.",
      },
      {
        title: "Member Data Sits in Different Tools",
        description:
          "Bookings, payments, and member records are spread across systems, making retention and reporting harder than it should be.",
      },
    ],
    solutions: [
      {
        title: "AI Membership Assistants",
        description:
          "Assistants trained on your classes, pricing, and facilities to answer questions, capture trial requests, and route serious enquiries to your team.",
      },
      {
        title: "Booking & Retention Automations",
        description:
          "Automated class reminders, waitlist updates, trial follow-ups, and re-engagement messages that reduce admin and churn.",
      },
      {
        title: "Local SEO & GEO",
        description:
          "Location, class, and service pages structured so nearby members and AI search tools can find your studio.",
      },
      {
        title: "Websites, Campaigns & Studio Tools",
        description:
          "Conversion-focused studio websites, membership campaigns, and custom desktop tools for reporting or multi-site operations.",
      },
    ],
    features: [
      { title: "AI Systems", description: "Membership and class assistants trained on your timetable and pricing", icon: "Bot" },
      { title: "Automations", description: "Trial follow-ups, reminders, waitlists, and re-engagement flows", icon: "Workflow" },
      { title: "SEO & GEO", description: "Local and class-based content for Google and AI search", icon: "Search" },
      { title: "Digital Marketing", description: "Membership campaigns with clear attribution and reporting", icon: "Megaphone" },
      { title: "Web Development", description: "Fast studio sites with schedules, trials, and sign-up flows", icon: "Code2" },
      { title: "Desktop Software", description: "Custom tools for member data, reporting, and multi-site operations", icon: "MonitorSmartphone" },
    ],
    useCases: [
      "Commercial gyms",
      "Boutique fitness studios",
      "Yoga and pilates studios",
      "CrossFit boxes",
      "Personal training studios",
      "Swimming pools and leisure centres",
      "Martial arts academies",
      "Dance studios",
    ],
    stats: defaultStats,
    faqs: defaultFaqs("Fitness & Gyms", "membership assistants, trial and class reminders, local SEO, studio websites, and member reporting tools"),
  },
  travel: {
    slug: "travel",
    industry: "Travel & Tourism",
    tagline: "AI & Digital Growth for Travel",
    heroTitle: "AI, Automation & Digital Growth for Travel & Tourism in the UAE",
    heroSubtitle:
      "AIVized helps travel agencies and tour operators connect AI systems, automations, SEO & GEO, digital marketing, web development, and custom software to capture enquiries and run bookings more smoothly.",
    description:
      "AI travel assistants, booking automations, SEO & GEO, travel marketing, websites, and custom software for agencies and tour operators across the UAE.",
    metaTitle: "AI, Automation & Digital Growth for Travel UAE | AIVized",
    metaDescription:
      "AIVized helps UAE travel businesses with AI enquiry handling, booking automations, SEO & GEO, digital marketing, web development, and custom software. One connected growth partner.",
    problems: [
      {
        title: "Enquiries Peak Outside Office Hours",
        description:
          "Travellers research in the evening and at weekends. Slow replies send them to OTAs or to whichever agency answers first.",
      },
      {
        title: "Complex Enquiries Consume Consultant Time",
        description:
          "Dates, budgets, party sizes, and destination questions are repeated manually before a consultant can even start building a quote.",
      },
      {
        title: "Seasonal Demand Is Hard to Absorb",
        description:
          "Booking surges overwhelm small teams, while quiet periods leave capacity unused and marketing spend uneven.",
      },
      {
        title: "Destination Content Does Not Rank",
        description:
          "Package and destination pages are often thin, making the agency hard to find in search and unlikely to be cited by AI travel tools.",
      },
    ],
    solutions: [
      {
        title: "AI Travel Assistants",
        description:
          "Assistants trained on your destinations, packages, and booking policies to answer questions, capture requirements, and qualify travellers.",
      },
      {
        title: "Booking & Follow-Up Automations",
        description:
          "Automated quote reminders, document checklists, pre-departure messages, and internal handoffs that keep every trip moving.",
      },
      {
        title: "Destination SEO & GEO",
        description:
          "Structured destination, package, and visa-information pages designed for search engines and AI answer engines.",
      },
      {
        title: "Websites, Campaigns & Agency Tools",
        description:
          "Conversion-focused travel websites, seasonal campaigns, and custom desktop tools for itineraries, reporting, or operations.",
      },
    ],
    features: [
      { title: "AI Systems", description: "Travel assistants trained on destinations, packages, and policies", icon: "Bot" },
      { title: "Automations", description: "Quote follow-ups, document checklists, and pre-departure messages", icon: "Workflow" },
      { title: "SEO & GEO", description: "Destination and package content for search and AI citations", icon: "Search" },
      { title: "Digital Marketing", description: "Seasonal campaigns with tracking that shows what converts", icon: "Megaphone" },
      { title: "Web Development", description: "Fast travel sites with package search and enquiry flows", icon: "Code2" },
      { title: "Desktop Software", description: "Custom tools for itineraries, booking data, and reporting", icon: "MonitorSmartphone" },
    ],
    useCases: [
      "Independent travel agents",
      "Tour operators",
      "Holiday companies",
      "Adventure travel specialists",
      "Cruise specialists",
      "Corporate travel managers",
      "Wedding & honeymoon planners",
      "Activity holiday providers",
    ],
    stats: defaultStats,
    faqs: defaultFaqs("Travel & Tourism", "travel enquiry assistants, quote follow-ups, destination SEO, booking-focused websites, and itinerary reporting tools"),
  },
};

export const getIndustryBySlug = (slug: string): IndustryData | undefined => {
  return industries[slug];
};

export const allIndustries = Object.values(industries);
