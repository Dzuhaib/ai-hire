import { MetadataRoute } from "next";
import { ukLocations } from "@/data/locationData";
import { industries } from "@/data/industryData";
import { allIndustryCities } from "@/data/industryCityData";
import { cityBlogPosts } from "@/data/cityBlogData";
import { blogPosts } from "@/data/blogData";

const BASE_URL = "https://www.aivized.com";
const NOW = new Date().toISOString();

// Static blog slugs (non-city-specific)
const staticBlogSlugs = [
  "ai-chatbot-small-business-uk-guide",
  "ai-chatbot-vs-live-chat-uk",
  "whatsapp-chatbot-uk-business",
  "website-chatbot-small-business",
  "instagram-chatbot-social-media",
  "reduce-missed-leads-website",
  "automate-customer-enquiries-personal-touch",
  "ai-automation-uk-business",
  "outsourced-chat-agents-birmingham",
  "ai-service-providers-uk",
  "ai-personal-assistant-near-me",
];

const blogPostMap = new Map(blogPosts.map((p) => [p.slug, p.publishedDate]));

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: NOW },
    { url: `${BASE_URL}/about`, lastModified: NOW },
    { url: `${BASE_URL}/pricing`, lastModified: NOW },
    { url: `${BASE_URL}/blog`, lastModified: NOW },
    { url: `${BASE_URL}/industries`, lastModified: NOW },
    { url: `${BASE_URL}/locations`, lastModified: NOW },
    { url: `${BASE_URL}/services/social-media-automation`, lastModified: NOW },
    { url: `${BASE_URL}/services/business-automation`, lastModified: NOW },
    { url: `${BASE_URL}/privacy-policy`, lastModified: NOW },
    { url: `${BASE_URL}/terms-of-service`, lastModified: NOW },
    { url: `${BASE_URL}/refund-policy`, lastModified: NOW },
  ];

  const staticBlogPages: MetadataRoute.Sitemap = staticBlogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: blogPostMap.get(slug) ?? NOW,
  }));

  const cityBlogPages: MetadataRoute.Sitemap = cityBlogPosts.map((post) => ({
    url: `${BASE_URL}/blog/website-chatbot-24-7-${post.slug}`,
    lastModified: NOW,
  }));

  const industryPages: MetadataRoute.Sitemap = Object.values(industries).map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: NOW,
  }));

  const industryCityPages: MetadataRoute.Sitemap = allIndustryCities.map((entry) => ({
    url: `${BASE_URL}/industries/${entry.industrySlug}/${entry.citySlug}`,
    lastModified: NOW,
  }));

  const locationPages: MetadataRoute.Sitemap = ukLocations.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.slug}`,
    lastModified: NOW,
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
