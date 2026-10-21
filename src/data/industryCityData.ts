export interface IndustryCityData {
  industrySlug: string;
  citySlug: string;
  cityName: string;
  industryName: string;
  /** H1 keyword-optimized title */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  heroSubtitle: string;
  /** City-specific stats or facts */
  localFact: string;
  faqs: Array<{ question: string; answer: string }>;
}

interface IndustryCityConfig {
  industrySlug: string;
  industryName: string;
  /** Keyword template for H1, use {city} placeholder */
  h1Template: string;
  metaTitleTemplate: string;
  metaDescTemplate: string;
  heroSubtitleTemplate: string;
  keywordsBase: string;
  faqTemplates: Array<{ q: string; a: string }>;
}

const cities = [
  { slug: "dubai", name: "Dubai" },
  { slug: "abu-dhabi", name: "Abu Dhabi" },
  { slug: "sharjah", name: "Sharjah" },
  { slug: "ajman", name: "Ajman" },
  { slug: "ras-al-khaimah", name: "Ras Al Khaimah" },
  { slug: "fujairah", name: "Fujairah" },
  { slug: "umm-al-quwain", name: "Umm Al Quwain" },
  { slug: "al-ain", name: "Al Ain" },
];

const industryConfigs: IndustryCityConfig[] = [
  {
    industrySlug: "restaurants",
    industryName: "Restaurants & Hospitality",
    h1Template: "AI Agency for Restaurants in {city}",
    metaTitleTemplate: "AI Agency for Restaurants in {city} | AI Chatbot Services",
    metaDescTemplate: "AIVized is an AI agency serving restaurants in {city}. Fully managed AI chatbot handling reservations, menu enquiries, and booking confirmations 24/7.",
    heroSubtitleTemplate: "Your AI receptionist handles reservations, answers menu questions, and captures guest details for your {city} restaurant 24/7 while your staff focus on delivering great dining experiences.",
    keywordsBase: "restaurant AI chatbot {city}, restaurant chatbot UAE, AI booking assistant {city}, managed chatbot restaurants",
    faqTemplates: [
      { q: "How does an AI chatbot help restaurants in {city}?", a: "Our managed AI chatbot handles reservations, menu enquiries, and allergen questions for {city} restaurants 24/7. It captures every booking request, even at 2am, so you never lose a customer to a competitor." },
      { q: "How much does a restaurant AI chatbot cost in {city}?", a: "Cost depends on the scope and volume of enquiries. Contact us and we'll prepare a tailored quote for your {city} restaurant. No developers needed — we install everything for you within 24 hours." },
      { q: "Can the AI chatbot handle table bookings for my {city} restaurant?", a: "Yes. Our AI chatbot captures booking requests around the clock, confirms with guests instantly, and sends all details to your team. It works alongside your existing booking system." },
      { q: "Is the restaurant chatbot UAE data protection compliant?", a: "Absolutely. All guest data collected by your {city} restaurant AI chatbot is encrypted, stored securely in the UAE, and handled in accordance with UAE data protection law (PDPL)." },
    ],
  },
  {
    industrySlug: "real-estate",
    industryName: "Real Estate & Property",
    h1Template: "AI Agency for Real Estate in {city}",
    metaTitleTemplate: "AI Agency for Real Estate in {city} | AI Chatbot Services",
    metaDescTemplate: "AIVized is an AI agency serving real estate in {city}. Fully managed AI chatbot to qualify leads, schedule viewings, and answer property enquiries 24/7.",
    heroSubtitleTemplate: "Your AI property assistant qualifies buyers, schedules viewings, and answers property questions for your {city} estate agency 24/7, so you can focus on closing deals.",
    keywordsBase: "real estate AI chatbot {city}, estate agent chatbot UAE, AI property assistant {city}, managed chatbot real estate",
    faqTemplates: [
      { q: "How does an AI chatbot help estate agents in {city}?", a: "Our managed AI chatbot qualifies property leads in {city} automatically, asking about budget, chain status, and timeline. It captures enquiries 24/7 so you spend time closing deals, not answering basic questions." },
      { q: "Can the AI chatbot schedule property viewings in {city}?", a: "Yes. Your {city} estate agent AI chatbot captures viewing requests with buyer preferences and availability, then sends qualified leads directly to your team for scheduling." },
      { q: "How much does a real estate AI chatbot cost in {city}?", a: "Cost depends on scope. Contact us for a tailored quote and we'll show how a managed AI chatbot compares with the cost of a full-time receptionist for your {city} agency." },
      { q: "Is the property chatbot suitable for lettings in {city}?", a: "Absolutely. Our AI chatbot handles both sales and lettings enquiries for {city} agents, understanding the different requirements and processes for each." },
    ],
  },
  {
    industrySlug: "ecommerce",
    industryName: "E-Commerce & Retail",
    h1Template: "AI Agency for E-Commerce in {city}",
    metaTitleTemplate: "AI Agency for E-Commerce in {city} | AI Chatbot Services",
    metaDescTemplate: "AIVized is an AI agency serving e-commerce in {city}. Fully managed AI chatbot to answer product questions, reduce cart abandonment, and support buyers 24/7.",
    heroSubtitleTemplate: "Your AI shopping assistant answers product questions, handles order enquiries, and reduces cart abandonment for your {city} e-commerce business 24/7.",
    keywordsBase: "ecommerce AI chatbot {city}, online shop chatbot UAE, AI customer service {city}, managed chatbot ecommerce",
    faqTemplates: [
      { q: "How does an AI chatbot help e-commerce businesses in {city}?", a: "Our managed AI chatbot answers product questions instantly for {city} online retailers, reducing cart abandonment and handling 80% of customer queries automatically, 24/7." },
      { q: "Can the AI chatbot handle order tracking for my {city} store?", a: "Yes. Your {city} e-commerce AI chatbot provides shipping information, guides customers to tracking pages, and captures order-specific queries for your team." },
      { q: "How much does an e-commerce AI chatbot cost in {city}?", a: "Cost depends on scope. Contact us for a tailored quote. Your chatbot can handle unlimited product questions and support queries without hiring extra staff for your {city} business." },
      { q: "Does it integrate with Shopify or WooCommerce?", a: "Our AI chatbot works via your website and doesn't require complex integrations. It fits into your existing workflow whether you use Shopify, WooCommerce, or any other platform." },
    ],
  },
  {
    industrySlug: "healthcare",
    industryName: "Healthcare & Clinics",
    h1Template: "AI Agency for Healthcare in {city}",
    metaTitleTemplate: "AI Agency for Healthcare in {city} | AI Chatbot Services",
    metaDescTemplate: "AIVized is an AI agency serving healthcare in {city}. Fully managed AI chatbot for patient registrations, booking requests, and treatment FAQs 24/7.",
    heroSubtitleTemplate: "Your AI receptionist handles appointment requests, answers service questions, and captures new patient details for your {city} clinic 24/7.",
    keywordsBase: "healthcare AI chatbot {city}, clinic chatbot UAE, dental AI assistant {city}, managed chatbot healthcare",
    faqTemplates: [
      { q: "How does an AI chatbot help healthcare clinics in {city}?", a: "Our managed AI chatbot handles patient enquiries for {city} clinics 24/7, capturing new patient registrations, answering treatment questions, and reducing admin burden on reception staff." },
      { q: "Is the healthcare AI chatbot UAE data protection compliant for {city} clinics?", a: "Yes. Our {city} healthcare AI chatbot uses bank-level encryption. All patient data is stored securely in the UAE with full compliance with UAE data protection law (PDPL)." },
      { q: "Can it handle public and private patient enquiries in {city}?", a: "Absolutely. Your {city} clinic AI chatbot distinguishes between public and private enquiries, providing appropriate information and directing patients to the right service." },
      { q: "How much does a healthcare AI chatbot cost in {city}?", a: "Cost depends on scope. Contact us for a tailored quote. A managed AI chatbot captures new patient registrations around the clock without adding to reception workload." },
    ],
  },
  {
    industrySlug: "legal",
    industryName: "Legal & Law Firms",
    h1Template: "AI Agency for Law Firms in {city}",
    metaTitleTemplate: "AI Agency for Law Firms in {city} | AI Chatbot Services",
    metaDescTemplate: "AIVized is an AI agency serving solicitors in {city}. Fully managed AI chatbot to qualify case prospects, capture client enquiries, and schedule consultations 24/7.",
    heroSubtitleTemplate: "Your AI legal receptionist handles initial enquiries, qualifies potential clients, and captures case details for your {city} law firm 24/7.",
    keywordsBase: "law firm AI chatbot {city}, solicitor chatbot UAE, legal AI assistant {city}, managed chatbot law firms",
    faqTemplates: [
      { q: "How does an AI chatbot help law firms in {city}?", a: "Our managed AI chatbot captures client enquiries for {city} solicitors 24/7, qualifying prospects by case type, urgency, and budget so your solicitors focus on billable work." },
      { q: "Is the legal AI chatbot confidential for {city} firms?", a: "Yes. All client communications are encrypted with bank-level security. Data is stored in the UAE with strict adherence to UAE data protection law (PDPL)." },
      { q: "Can the chatbot direct enquiries to different practice areas in {city}?", a: "Absolutely. Your {city} law firm AI chatbot identifies the type of legal matter and routes enquiries to family, property, injury, criminal, or commercial departments." },
      { q: "How much does a law firm AI chatbot cost in {city}?", a: "Cost depends on scope. Contact us for a tailored quote and we'll show how a managed AI chatbot compares with a full-time legal receptionist for your {city} practice." },
    ],
  },
  {
    industrySlug: "fitness",
    industryName: "Fitness & Gyms",
    h1Template: "AI Agency for Gyms and Fitness in {city}",
    metaTitleTemplate: "AI Agency for Gyms and Fitness in {city} | AI Chatbot Services",
    metaDescTemplate: "AIVized is an AI agency serving gyms and fitness in {city}. Fully managed AI chatbot for membership enquiries, class bookings, and free trials 24/7.",
    heroSubtitleTemplate: "Your AI fitness advisor handles membership enquiries, class bookings, and trial requests for your {city} gym or studio 24/7, turning browsers into members.",
    keywordsBase: "gym AI chatbot {city}, fitness chatbot UAE, AI membership assistant {city}, managed chatbot gyms",
    faqTemplates: [
      { q: "How does an AI chatbot help gyms in {city}?", a: "Our managed AI chatbot handles membership enquiries for {city} gyms 24/7, answering pricing questions, providing class schedules, and capturing trial bookings when motivation is highest." },
      { q: "Can the AI chatbot handle class bookings for my {city} studio?", a: "Yes. Your {city} fitness AI chatbot provides class schedules, describes sessions, and captures booking requests, guiding potential members to the right classes for their goals." },
      { q: "How much does a gym AI chatbot cost in {city}?", a: "Cost depends on scope. Contact us for a tailored quote. Convert more {city} website visitors into trial bookings and memberships without hiring extra reception staff." },
      { q: "Does it work for boutique fitness studios in {city}?", a: "Absolutely. Our AI chatbot works for yoga studios, pilates studios, CrossFit boxes, martial arts academies, and any fitness concept in {city}." },
    ],
  },
  {
    industrySlug: "travel",
    industryName: "Travel & Tourism",
    h1Template: "AI Agency for Travel Agents in {city}",
    metaTitleTemplate: "AI Agency for Travel Agents in {city} | AI Chatbot Services",
    metaDescTemplate: "AIVized is an AI agency serving travel agents in {city}. Fully managed AI chatbot to qualify holiday enquiries, answer destination questions, and get leads 24/7.",
    heroSubtitleTemplate: "Your AI travel advisor handles destination enquiries, captures booking requests, and qualifies travellers for your {city} travel agency 24/7.",
    keywordsBase: "travel agent AI chatbot {city}, travel chatbot UAE, AI booking assistant {city}, managed chatbot travel agents",
    faqTemplates: [
      { q: "How does an AI chatbot help travel agents in {city}?", a: "Our managed AI chatbot captures holiday enquiries for {city} travel agents 24/7, answering destination questions and qualifying travellers by budget, dates, and preferences." },
      { q: "Can the AI chatbot handle complex travel enquiries in {city}?", a: "Yes. Your {city} travel AI chatbot captures detailed requirements (destinations, dates, budgets, party sizes) and sends qualified leads to your team for personalised quotes." },
      { q: "How much does a travel agent AI chatbot cost in {city}?", a: "Cost depends on scope. Contact us for a tailored quote. Capture evening and weekend holiday browsers before they default to online booking platforms." },
      { q: "Does the chatbot handle travel licensing and consumer protection questions?", a: "Yes. Your {city} travel AI chatbot provides information about your travel licensing and consumer protection details, giving customers confidence in booking with your agency." },
    ],
  },
];

function getLocalFact(industrySlug: string, citySlug: string, industryName: string, cityName: string): string {
  return `${cityName} is one of the UAE markets we support for ${industryName.toLowerCase()}. Businesses here often need faster enquiry handling and a more connected digital setup. We scope the smallest useful improvement first, then expand as it proves value.`;
}

function generateCityData(config: IndustryCityConfig, city: { slug: string; name: string }): IndustryCityData {
  const replace = (template: string) => template.replace(/\{city\}/g, city.name);

  return {
    industrySlug: config.industrySlug,
    citySlug: city.slug,
    cityName: city.name,
    industryName: config.industryName,
    h1: replace(config.h1Template),
    metaTitle: replace(config.metaTitleTemplate),
    metaDescription: replace(config.metaDescTemplate),
    metaKeywords: replace(config.keywordsBase),
    heroSubtitle: replace(config.heroSubtitleTemplate),
    localFact: getLocalFact(config.industrySlug, city.slug, config.industryName, city.name),
    faqs: config.faqTemplates.map(f => ({ question: replace(f.q), answer: replace(f.a) })),
  };
}

// Generate all industry+city combinations
export const allIndustryCities: IndustryCityData[] = industryConfigs.flatMap(config =>
  cities.map(city => generateCityData(config, city))
);

export const getIndustryCityData = (industrySlug: string, citySlug: string): IndustryCityData | undefined => {
  return allIndustryCities.find(ic => ic.industrySlug === industrySlug && ic.citySlug === citySlug);
};

export const getCitiesForIndustry = (industrySlug: string): IndustryCityData[] => {
  return allIndustryCities.filter(ic => ic.industrySlug === industrySlug);
};

export const industryCities = cities;

export const cityIndustryFacts: Record<string, Record<string, string>> = allIndustryCities.reduce(
  (acc, entry) => {
    if (!acc[entry.industrySlug]) acc[entry.industrySlug] = {};
    acc[entry.industrySlug][entry.citySlug] = entry.localFact;
    return acc;
  },
  {} as Record<string, Record<string, string>>
);
