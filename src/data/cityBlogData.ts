export interface CityBlogData {
  slug: string;
  city: string;
  region: string;
  heroDescription: string;
  intro: string;
  whyNeed: string;
  howItWorks: string;
  benefits: string[];
  industries: string;
  industryExamples: string[];
  localContext: string;
  faqs: Array<{ question: string; answer: string }>;
}

interface CityConfig {
  slug: string;
  city: string;
  region: string;
  market: string;
  areas: string;
  sectors: string;
  examples: string[];
  localContext: string;
}

const cityConfigs: CityConfig[] = [
  {
    slug: "dubai",
    city: "Dubai",
    region: "Dubai",
    market: "one of the busiest commercial markets in the region",
    areas: "Dubai Marina, Business Bay, Downtown, Deira, and JLT",
    sectors: "hospitality, real estate, professional services, retail, healthcare, and e-commerce",
    examples: [
      "Hotels and restaurants handling reservation and menu enquiries",
      "Real estate agencies qualifying viewing requests in Marina, Downtown, and JLT",
      "Professional services firms booking initial consultations",
      "E-commerce brands answering product and delivery questions",
      "Clinics managing appointment requests across multiple locations",
    ],
    localContext:
      "Dubai customers compare suppliers quickly and expect a fast, professional response at any hour. A website chatbot that answers instantly and captures every enquiry helps a Dubai business stay competitive without adding night-shift staff.",
  },
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    region: "Abu Dhabi",
    market: "a large and relationship-driven business market",
    areas: "Abu Dhabi Island, Al Maryah Island, Al Reem Island, Khalifa City, and Yas Island",
    sectors: "government suppliers, professional services, real estate, healthcare, education, and hospitality",
    examples: [
      "Professional services firms qualifying enquiries before a partner call",
      "Property teams handling viewing requests on Yas and Saadiyat",
      "Healthcare providers managing appointment and registration questions",
      "Hospitality venues taking bookings across islands and the Corniche",
      "Education and training providers answering course enquiries",
    ],
    localContext:
      "Abu Dhabi organisations value suppliers who document their work and integrate with existing systems. A managed website chatbot captures enquiries around the clock and passes clean, qualified details to the team without adding administrative overhead.",
  },
  {
    slug: "sharjah",
    city: "Sharjah",
    region: "Sharjah",
    market: "a diverse market of established and growing businesses",
    areas: "Al Majaz, Al Nahda, Muwaileh, University City, and Sharjah City Centre",
    sectors: "trading, education, family businesses, industrial services, hospitality, and retail",
    examples: [
      "Family businesses capturing enquiries without a full-time reception team",
      "Education providers answering admissions and course questions",
      "Retail and trading companies handling product and availability enquiries",
      "Hospitality venues taking bookings at peak times",
      "Service businesses qualifying leads before a callback",
    ],
    localContext:
      "Sharjah businesses often compete with better-resourced operators in nearby Dubai. A website chatbot that responds instantly and answers common questions gives a smaller team the reach and responsiveness of a much larger one.",
  },
  {
    slug: "ajman",
    city: "Ajman",
    region: "Ajman",
    market: "a compact and competitive trading and service market",
    areas: "Ajman City Centre, Al Nuaimiya, Al Rashidiya, Al Jurf, and the Corniche",
    sectors: "trading, logistics, construction, retail, healthcare, and professional services",
    examples: [
      "Trading companies answering product, stock, and delivery questions",
      "Clinics handling appointment and registration requests",
      "Construction and fit-out firms qualifying project enquiries",
      "Retailers capturing product questions outside working hours",
      "Service businesses booking consultations automatically",
    ],
    localContext:
      "Ajman businesses tend to operate with lean teams, so every missed enquiry costs more. A managed chatbot answers routine questions, captures details, and keeps follow-up consistent without adding headcount.",
  },
  {
    slug: "ras-al-khaimah",
    city: "Ras Al Khaimah",
    region: "Ras Al Khaimah",
    market: "a growing tourism, hospitality, and trading economy",
    areas: "RAK City, Al Hamra Village, Mina Al Arab, Marjan Island, and Khuzam",
    sectors: "hospitality, tourism, real estate, construction, retail, and professional services",
    examples: [
      "Hotels and resorts handling booking and availability enquiries",
      "Real estate teams qualifying buyers and tenants on the islands",
      "Tour operators answering itinerary and booking questions",
      "Retail and trading businesses handling stock enquiries",
      "Professional services firms booking initial consultations",
    ],
    localContext:
      "Ras Al Khaimah's hospitality and tourism trade is seasonal, but customer expectations stay constant. A chatbot that captures enquiries during peak periods and after hours keeps the pipeline full without seasonal hiring.",
  },
  {
    slug: "fujairah",
    city: "Fujairah",
    region: "Fujairah",
    market: "a distinct port, tourism, and trading economy",
    areas: "Fujairah City, Dibba, Khor Fakkan, Kalba, and Al Aqah",
    sectors: "port and logistics, tourism, hospitality, trading, construction, and professional services",
    examples: [
      "Logistics and shipping firms answering service and quotation enquiries",
      "Hotels and resorts taking booking requests from regional visitors",
      "Trading companies handling product and delivery questions",
      "Construction suppliers qualifying project enquiries",
      "Service businesses booking appointments automatically",
    ],
    localContext:
      "Fujairah businesses often serve customers from across the UAE and beyond, so enquiries can arrive at any hour. A website chatbot gives a small team national reach without a national support budget.",
  },
  {
    slug: "umm-al-quwain",
    city: "Umm Al Quwain",
    region: "Umm Al Quwain",
    market: "a smaller, relationship-driven business community",
    areas: "Umm Al Quwain City, Al Salamah, Al Hamriyah, and Falaj Al Mualla",
    sectors: "trading, manufacturing, tourism, retail, education, and professional services",
    examples: [
      "Manufacturing and trading firms handling specification enquiries",
      "Tourism and hospitality venues taking bookings directly",
      "Retailers answering product and availability questions",
      "Service businesses qualifying leads automatically",
      "Education providers handling admissions enquiries",
    ],
    localContext:
      "Umm Al Quwain businesses value practical improvements over large digital programmes. A focused chatbot that captures enquiries and answers common questions delivers a measurable return without a long project.",
  },
  {
    slug: "al-ain",
    city: "Al Ain",
    region: "Abu Dhabi",
    market: "a stable market with strong education, healthcare, and tourism sectors",
    areas: "Al Ain City Centre, Al Jimi, Al Towayya, Khalifa City, and Al Hili",
    sectors: "education, healthcare, tourism, real estate, retail, and professional services",
    examples: [
      "Clinics and medical centres handling appointment requests",
      "Education and training providers answering admissions questions",
      "Real estate teams qualifying buyer and tenant enquiries",
      "Tourism venues taking group and booking enquiries",
      "Professional services firms booking consultations",
    ],
    localContext:
      "Al Ain businesses often serve customers from across the wider Abu Dhabi region. A chatbot that responds instantly and captures clean enquiry details helps local teams compete with larger operators in the major cities.",
  },
];

const buildFaqs = (city: string): Array<{ question: string; answer: string }> => [
  {
    question: `How does a 24/7 website chatbot help my ${city} business?`,
    answer: `A 24/7 website chatbot ensures your ${city} business never misses an enquiry. It answers common questions instantly, captures contact details, and passes qualified leads to your team for follow-up.`,
  },
  {
    question: `How quickly can a website chatbot go live for my ${city} business?`,
    answer:
      "Once we have your business details, products, services, and FAQs, setup is typically completed in a few days. We install and configure everything for you.",
  },
  {
    question: `What does a managed website chatbot cost for ${city} businesses?`,
    answer:
      "Pricing depends on scope. After a short discovery call we provide a fixed written quote, so you know the cost before any work begins.",
  },
  {
    question: `Can the chatbot work alongside our existing website and tools?`,
    answer: `Yes. We regularly work with existing websites, CRMs, and booking systems. Where an integration is not practical, we will explain the options clearly for your ${city} business.`,
  },
  {
    question: "What happens if the chatbot cannot answer a question?",
    answer:
      "It captures the customer's details and question, then alerts your team so the enquiry is followed up. No lead is lost.",
  },
];

export const cityBlogPosts: CityBlogData[] = cityConfigs.map((config) => ({
  slug: config.slug,
  city: config.city,
  region: config.region,
  heroDescription: `Managed website chatbot providing fast, 24/7 customer support for ${config.city} businesses`,
  intro: `${config.city} is ${config.market}. Customers across ${config.areas} research, compare, and enquire online at all hours. A managed website chatbot ensures every enquiry gets an immediate, professional response, whether it arrives during a busy working day or late at night.`,
  whyNeed: `Customers in ${config.city} expect quick answers. When a website cannot respond outside working hours, potential enquiries move to a competitor. A managed 24/7 website chatbot captures those enquiries, answers common questions, and gives your team clean, qualified leads to follow up during working hours.`,
  howItWorks: `We install a lightweight chat widget on your ${config.city} website. The chatbot is trained on your services, pricing, availability, and frequently asked questions, so it can handle routine enquiries in your brand voice. When a question needs a person, it captures the customer's details and alerts your team immediately.`,
  benefits: [
    `Capture enquiries from across ${config.city} at any hour`,
    "Answer common sales and support questions instantly",
    "Reduce the back-and-forth created by manual follow-up",
    "Give a small team the responsiveness of a larger operation",
    "Send qualified leads and clean contact details to your CRM or inbox",
  ],
  industries: `The ${config.city} market spans ${config.sectors}.`,
  industryExamples: config.examples,
  localContext: config.localContext,
  faqs: buildFaqs(config.city),
}));

export const getCityBlogBySlug = (slug: string): CityBlogData | undefined => {
  return cityBlogPosts.find((post) => post.slug === slug);
};
