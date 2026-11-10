import { industryExpandedContent } from "./industryContent";
import { cityIndustryFacts, allIndustryCities } from "./industryCityData";
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

  const cityIndustryLandscape = `${cityName}'s ${industryName.toLowerCase()} sector is a competitive part of the local economy, serving a diverse population of ${cityLocation?.population ? cityLocation.population.toLocaleString() + " residents" : "local customers"} across ${cityLocation?.region ?? "the region"}. Customer expectations have risen: people research online, compare options quickly, and expect a fast, accurate response before they commit. Businesses that rely on manual enquiry handling and disconnected tools find it harder to stand out.

The ${industryName.toLowerCase()} landscape in ${cityName} is shaped by local conditions. ${fact} That environment rewards businesses with a connected digital setup: a fast website, clear search visibility, reliable follow-up, and systems that reduce repetitive admin.`;

  const whyCityNeedsIndustryAI = `For ${industryName.toLowerCase()} businesses in ${cityName}, the challenge is rarely a single missing tool. Enquiries arrive across several channels, follow-up is inconsistent, search visibility is limited, and internal processes depend on manual work. AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development each address part of that problem, but the value is greatest when they are connected.

${industryContent.businessImpact} In a market like ${cityName}, where customers can compare several providers in minutes, a faster and more consistent response is a genuine competitive advantage. Businesses that connect their channels now capture more of the demand that already exists.`;

  const citySpecificChallenges = `${cityName}'s ${industryName.toLowerCase()} businesses face practical constraints that make a connected setup valuable. ${fact} Teams are often small, enquiry volume is uneven, and the same people responsible for delivery are also expected to manage marketing, follow-up, and reporting.

That is why we scope improvements around real bottlenecks rather than selling every service at once. A booking-focused website, an AI enquiry assistant, automated reminders, local SEO, or a custom reporting tool can each remove a specific constraint. ${industryContent.whyThisIndustryNeedsAI}`;

  const cityBenefits = `The benefits for ${industryName.toLowerCase()} businesses in ${cityName} extend beyond faster replies. ${industryContent.aiTrends} A connected stack improves conversion on existing traffic, reduces manual administration, and gives owners reporting they can trust.

${industryContent.businessImpact} For ${cityName} specifically, the local market data captured through enquiries and campaigns can inform service priorities, content, and marketing spend. That makes each improvement easier to justify and easier to build on.`;

  const aiInCityMarket = `Adoption of AI and automation among ${industryName.toLowerCase()} businesses in ${cityName} is increasing, but most companies still run disconnected tools and manual handoffs. The opportunity is not to buy the most software; it is to connect the few systems that matter and measure the result.

${fact} Businesses that take a scoped, measured approach in ${cityName} build a durable advantage without overcommitting. ${industryContent.choosingAIVized}`;

  return {
    cityIndustryLandscape,
    whyCityNeedsIndustryAI,
    citySpecificChallenges,
    cityBenefits,
    aiInCityMarket
  };
}
