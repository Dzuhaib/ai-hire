import { MetadataRoute } from "next";
import { uaeLocations } from "@/data/locationData";
import { industries } from "@/data/industryData";
import { allIndustryCities } from "@/data/industryCityData";
import { cityBlogPosts } from "@/data/cityBlogData";
import { blogPosts } from "@/data/blogData";
import { statSync } from "fs";
import { join } from "path";

const BASE_URL = "https://www.aivized.com";

function getFileDate(relPath: string): string {
  try {
    const stat = statSync(join(process.cwd(), relPath));
    return stat.mtime.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

const coreDate = getFileDate("src/app/layout.tsx");
const industryPageDate = getFileDate("src/app/industries/[industry]/page.tsx");
const cityPageDate = getFileDate("src/app/locations/[city]/page.tsx");
const industryCityDate = getFileDate("src/data/industryCityData.ts");
const locationDataDate = getFileDate("src/data/locationData.ts");
const staticBlogDate = getFileDate("src/data/blogData.ts");
const cityBlogDate = getFileDate("src/data/cityBlogData.ts");

const staticBlogSlugs = [
  "ai-chatbot-small-business-uae-guide",
  "ai-chatbot-vs-live-chat-uae",
  "whatsapp-chatbot-uae-business",
  "website-chatbot-small-business",
  "instagram-chatbot-social-media",
  "reduce-missed-leads-website",
  "automate-customer-enquiries-personal-touch",
  "ai-automation-uae-business",
  "outsourced-chat-agents-abu-dhabi",
  "ai-agency-dubai",
  "ai-service-providers-uae",
  "ai-personal-assistant-near-me",
];

const blogPostMap = new Map(blogPosts.map((p) => [p.slug, p.publishedDate]));

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: coreDate },
    { url: `${BASE_URL}/about`, lastModified: coreDate },
    { url: `${BASE_URL}/services`, lastModified: coreDate },
    { url: `${BASE_URL}/pricing`, lastModified: coreDate },
    { url: `${BASE_URL}/case-studies`, lastModified: coreDate },
    { url: `${BASE_URL}/contact`, lastModified: coreDate },
    { url: `${BASE_URL}/blog`, lastModified: coreDate },
    { url: `${BASE_URL}/industries`, lastModified: coreDate },
    { url: `${BASE_URL}/locations`, lastModified: coreDate },
    { url: `${BASE_URL}/services/social-media-automation`, lastModified: coreDate },
    { url: `${BASE_URL}/services/business-automation`, lastModified: coreDate },
    { url: `${BASE_URL}/privacy-policy`, lastModified: coreDate },
    { url: `${BASE_URL}/terms-of-service`, lastModified: coreDate },
    { url: `${BASE_URL}/refund-policy`, lastModified: coreDate },
  ];

  const staticBlogPages: MetadataRoute.Sitemap = staticBlogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: blogPostMap.get(slug) ?? staticBlogDate,
  }));

  const cityBlogPages: MetadataRoute.Sitemap = cityBlogPosts.map((post) => ({
    url: `${BASE_URL}/blog/website-chatbot-24-7-${post.slug}`,
    lastModified: cityBlogDate,
  }));

  const industryPages: MetadataRoute.Sitemap = Object.values(industries).map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: industryPageDate,
  }));

  const industryCityPages: MetadataRoute.Sitemap = allIndustryCities.map((entry) => ({
    url: `${BASE_URL}/industries/${entry.industrySlug}/${entry.citySlug}`,
    lastModified: industryCityDate,
  }));

  const locationPages: MetadataRoute.Sitemap = uaeLocations.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.slug}`,
    lastModified: locationDataDate,
  }));

  return [
    ...corePages,
    ...industryPages,
    ...industryCityPages,
    ...locationPages,
    ...staticBlogPages,
    ...cityBlogPages,
  ];
}
