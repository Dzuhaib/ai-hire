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

const cityFaqs = (industry: string, city: string, examples: string) => [
  {
    q: `What services does AIVized provide for ${industry} businesses in ${city}?`,
    a: `We cover AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development. For ${industry} businesses in ${city} that includes ${examples}. We can start with one priority or connect several services into a single roadmap.`,
  },
  {
    q: `Do we have to buy all six services for our ${city} business?`,
    a: `No. We start with a discovery session and recommend the smallest useful improvement first. Many ${city} clients begin with one service, prove the value, then expand into automation, search, marketing, or custom software.`,
  },
  {
    q: `Can you help our ${industry} business rank in Google and AI search in ${city}?`,
    a: `Yes. Our SEO & GEO service covers technical SEO, content, schema, local search, and Generative Engine Optimisation so your business can appear in traditional results and be cited by AI tools such as ChatGPT, Perplexity, and Google AI Overviews.`,
  },
  {
    q: `Can you build websites and custom software for a ${city} ${industry} business?`,
    a: `Yes. We build fast, conversion-focused websites and web applications, plus Windows and macOS desktop tools for data-heavy workflows, reporting, and internal operations. Everything is designed around how your ${city} team actually works.`,
  },
];

const industryConfigs: IndustryCityConfig[] = [
  {
    industrySlug: "restaurants",
    industryName: "Restaurants & Hospitality",
    h1Template: "AI, Automation & Digital Growth for Restaurants in {city}",
    metaTitleTemplate: "AI, Automation & Digital Growth for Restaurants in {city} | AIVized",
    metaDescTemplate:
      "AIVized helps restaurants in {city} with AI systems, automations, SEO & GEO, digital marketing, web development, and custom software. One connected partner for guest enquiries, operations, and growth.",
    heroSubtitleTemplate:
      "AIVized connects AI systems, automations, SEO & GEO, digital marketing, web development, and desktop software for restaurants in {city}, so guest enquiries, bookings, and back-office work run through one considered roadmap.",
    keywordsBase:
      "restaurant AI agency {city}, restaurant automation {city}, restaurant SEO {city}, restaurant digital marketing {city}, restaurant website development {city}, restaurant software {city}",
    faqTemplates: cityFaqs("restaurants", "{city}", "guest enquiry assistants, booking reminders, local SEO, review follow-ups, and booking-focused websites"),
  },
  {
    industrySlug: "real-estate",
    industryName: "Real Estate & Property",
    h1Template: "AI, Automation & Digital Growth for Real Estate in {city}",
    metaTitleTemplate: "AI, Automation & Digital Growth for Real Estate in {city} | AIVized",
    metaDescTemplate:
      "AIVized helps property businesses in {city} with AI lead qualification, workflow automations, SEO & GEO, digital marketing, web development, and custom software. One connected growth partner.",
    heroSubtitleTemplate:
      "AIVized connects AI systems, automations, SEO & GEO, digital marketing, web development, and desktop software for estate agents and developers in {city}, so enquiries are qualified quickly and follow-up stays consistent.",
    keywordsBase:
      "real estate AI agency {city}, property automation {city}, real estate SEO {city}, property digital marketing {city}, estate agent website {city}, property software {city}",
    faqTemplates: cityFaqs("real estate", "{city}", "lead qualification, viewing reminders, CRM automation, listing and area SEO, and property-focused websites"),
  },
  {
    industrySlug: "ecommerce",
    industryName: "E-Commerce & Retail",
    h1Template: "AI, Automation & Digital Growth for E-Commerce in {city}",
    metaTitleTemplate: "AI, Automation & Digital Growth for E-Commerce in {city} | AIVized",
    metaDescTemplate:
      "AIVized helps online retailers in {city} with AI product assistants, order automations, SEO & GEO, digital marketing, e-commerce development, and custom software. One connected growth partner.",
    heroSubtitleTemplate:
      "AIVized connects AI systems, automations, SEO & GEO, digital marketing, web development, and desktop software for e-commerce brands in {city}, so more visitors convert and routine support takes less time.",
    keywordsBase:
      "ecommerce AI agency {city}, online retail automation {city}, ecommerce SEO {city}, ecommerce marketing {city}, online store development {city}, retail software {city}",
    faqTemplates: cityFaqs("e-commerce", "{city}", "product assistants, order and returns automation, product-page SEO, paid campaigns, and conversion-focused storefronts"),
  },
  {
    industrySlug: "healthcare",
    industryName: "Healthcare & Clinics",
    h1Template: "AI, Automation & Digital Growth for Healthcare in {city}",
    metaTitleTemplate: "AI, Automation & Digital Growth for Healthcare in {city} | AIVized",
    metaDescTemplate:
      "AIVized helps clinics in {city} with administrative patient AI, appointment automations, SEO & GEO, digital marketing, web development, and custom software. Administrative support only.",
    heroSubtitleTemplate:
      "AIVized connects AI systems, automations, SEO & GEO, digital marketing, web development, and desktop software for healthcare providers in {city}, with clear safeguards for patient communication.",
    keywordsBase:
      "healthcare AI agency {city}, clinic automation {city}, clinic SEO {city}, healthcare marketing {city}, clinic website development {city}, practice software {city}",
    faqTemplates: cityFaqs("healthcare", "{city}", "administrative patient assistants, appointment reminders, treatment-page SEO, clinic websites, and internal reporting tools"),
  },
  {
    industrySlug: "legal",
    industryName: "Legal & Law Firms",
    h1Template: "AI, Automation & Digital Growth for Law Firms in {city}",
    metaTitleTemplate: "AI, Automation & Digital Growth for Law Firms in {city} | AIVized",
    metaDescTemplate:
      "AIVized helps law firms in {city} with AI client intake, workflow automations, SEO & GEO, digital marketing, web development, and custom software. Clear AI safeguards, no legal advice.",
    heroSubtitleTemplate:
      "AIVized connects AI systems, automations, SEO & GEO, digital marketing, web development, and desktop software for law firms in {city}, so client intake and practice visibility work together.",
    keywordsBase:
      "law firm AI agency {city}, legal automation {city}, law firm SEO {city}, legal digital marketing {city}, law firm website {city}, legal practice software {city}",
    faqTemplates: cityFaqs("law firms", "{city}", "client intake, consultation reminders, practice-area SEO, firm websites, and internal reporting tools"),
  },
  {
    industrySlug: "fitness",
    industryName: "Fitness & Gyms",
    h1Template: "AI, Automation & Digital Growth for Gyms and Fitness in {city}",
    metaTitleTemplate: "AI, Automation & Digital Growth for Gyms in {city} | AIVized",
    metaDescTemplate:
      "AIVized helps gyms and studios in {city} with AI membership support, booking automations, SEO & GEO, digital marketing, web development, and custom software. One connected growth partner.",
    heroSubtitleTemplate:
      "AIVized connects AI systems, automations, SEO & GEO, digital marketing, web development, and desktop software for gyms and studios in {city}, so membership enquiries and retention take less manual effort.",
    keywordsBase:
      "gym AI agency {city}, fitness automation {city}, gym SEO {city}, fitness digital marketing {city}, gym website development {city}, studio software {city}",
    faqTemplates: cityFaqs("gyms and fitness", "{city}", "membership assistants, trial and class reminders, local SEO, studio websites, and member reporting tools"),
  },
  {
    industrySlug: "travel",
    industryName: "Travel & Tourism",
    h1Template: "AI, Automation & Digital Growth for Travel Agents in {city}",
    metaTitleTemplate: "AI, Automation & Digital Growth for Travel Agents in {city} | AIVized",
    metaDescTemplate:
      "AIVized helps travel businesses in {city} with AI enquiry handling, booking automations, SEO & GEO, digital marketing, web development, and custom software. One connected growth partner.",
    heroSubtitleTemplate:
      "AIVized connects AI systems, automations, SEO & GEO, digital marketing, web development, and desktop software for travel agencies in {city}, so enquiries are captured outside office hours and follow-up stays consistent.",
    keywordsBase:
      "travel agency AI {city}, travel automation {city}, travel SEO {city}, travel digital marketing {city}, travel website development {city}, travel software {city}",
    faqTemplates: cityFaqs("travel agencies", "{city}", "travel enquiry assistants, quote follow-ups, destination SEO, booking-focused websites, and itinerary reporting tools"),
  },
];

function getLocalFact(industrySlug: string, citySlug: string, industryName: string, cityName: string): string {
  return `${cityName} is one of the UAE markets we support for ${industryName.toLowerCase()}. Businesses here often need faster enquiry handling, clearer search visibility, and a more connected digital setup. We scope the smallest useful improvement first, then expand as it proves value.`;
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
