import { industryExpandedContent } from "./industryContent";
import { cityIndustryFacts, allIndustryCities } from "./industryCityData";
import { getIndustryBySlug } from "./industryData";
import { uaeLocations } from "./locationData";

interface IndustryCityExpandedContent {
  cityIndustryLandscape: string;
  whyCityNeedsIndustryAI: string;
  citySpecificChallenges: string;
  cityBenefits: string;
  aiInCityMarket: string;
}

export function getIndustryCityExpandedContent(industrySlug: string, citySlug: string): IndustryCityExpandedContent {
  const fact = cityIndustryFacts[industrySlug]?.[citySlug] ?? "";
  const cityData = allIndustryCities.find(ic => ic.industrySlug === industrySlug && ic.citySlug === citySlug);
  const cityName = cityData?.cityName ?? citySlug;
  const industryName = cityData?.industryName ?? industrySlug;
  const industryContent = industryExpandedContent[industrySlug];
  const cityLocation = uaeLocations.find(loc => loc.slug === citySlug);

  const cityIndustryLandscape = `${cityName}'s ${industryName.toLowerCase()} sector is a vibrant and competitive part of the ${cityName} economy, serving a diverse population of ${cityLocation?.population ? cityLocation.population.toLocaleString() + " residents" : "local consumers"} across ${cityLocation?.region ?? "the region"}. The ${industryName.toLowerCase()} industry in ${cityName} has evolved significantly in recent years, driven by changing consumer expectations, increased competition from online platforms, and the growing demand for instant, professional service. Businesses that operate in this space face the constant challenge of standing out in a crowded marketplace where customers have multiple options and increasingly high expectations for responsiveness.

The ${industryName.toLowerCase()} landscape in ${cityName} is shaped by several unique factors. ${fact} This dynamic environment creates both opportunities and challenges for ${industryName.toLowerCase()} businesses looking to grow and compete effectively. The businesses that understand and adapt to these local market conditions are the ones that capture the most customers and build lasting relationships.`;

  const whyCityNeedsIndustryAI = `For ${industryName.toLowerCase()} businesses in ${cityName}, AI chatbots have become essential tools for capturing and converting customer enquiries that would otherwise be lost. The core advantage is straightforward: ${cityName}'s ${industryName.toLowerCase()} customers expect the same level of instant, responsive service that they experience with larger competitors and online platforms. When a potential customer searches for ${industryName.toLowerCase()} services in ${cityName} and contacts a business, they expect an immediate response — not a callback the next day.

The financial case is clear. ${industryContent.businessImpact} In a competitive market like ${cityName}, where ${cityName}'s ${industryName.toLowerCase()} businesses compete with each other and with online platforms, the ability to capture every enquiry instantly and qualify every lead automatically is a significant competitive advantage. Businesses that implement AI chatbots now are capturing market share from competitors who are still relying on traditional phone-based enquiry handling that leaves potential customers waiting until the next business day.`;

  const citySpecificChallenges = `${cityName}'s ${industryName.toLowerCase()} businesses face several unique challenges that make AI chatbots particularly valuable. ${fact} The local market dynamics mean that ${industryName.toLowerCase()} businesses must be able to respond to enquiries at all hours, including evenings, weekends, and holidays, to remain competitive.

Additionally, ${cityName}'s ${industryName.toLowerCase()} sector operates within a broader UAE context where competition is intensifying. ${industryName.toLowerCase()} businesses in ${cityName} must compete not just with local rivals but with online platforms and businesses from other cities that can respond instantly. The cost of not having immediate customer service capability is disproportionately high in a market where customers can easily switch to a competitor that provides faster responses. ${industryContent.whyThisIndustryNeedsAI}`;

  const cityBenefits = `The benefits of implementing AI chatbot technology for ${industryName.toLowerCase()} businesses in ${cityName} extend well beyond simple customer service automation. ${industryContent.aiTrends} ${cityName}'s ${industryName.toLowerCase()} businesses that adopt AI gain a significant advantage by providing the instant, professional customer service that modern consumers expect.

${industryContent.businessImpact} For ${cityName}'s ${industryName.toLowerCase()} sector specifically, the data collected by AI chatbots provides valuable insights into local customer preferences, common enquiries, and service gaps that can inform business strategy. ${cityName}'s ${industryName.toLowerCase()} businesses can use these insights to improve their offerings, tailor their marketing, and build stronger relationships with local customers.`;

  const aiInCityMarket = `The adoption of AI chatbots among ${industryName.toLowerCase()} businesses in ${cityName} is accelerating rapidly as more business owners recognise the operational and financial benefits. ${cityName}'s ${industryName.toLowerCase()} sector is part of a broader UAE trend toward AI-powered customer service, but the local market dynamics create unique opportunities and challenges.

${fact} The businesses that implement AI chatbots now in ${cityName} are building a competitive moat that will become increasingly difficult for late adopters to overcome. As AI becomes standard infrastructure across the ${industryName.toLowerCase()} sector, the question for ${cityName} businesses is no longer whether to adopt AI but how quickly they can implement it before their competitors capture all the available enquiries. ${industryContent.choosingAIVized}`;

  return {
    cityIndustryLandscape,
    whyCityNeedsIndustryAI,
    citySpecificChallenges,
    cityBenefits,
    aiInCityMarket
  };
}
