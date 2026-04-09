import { MetadataRoute } from "next";
import { ukLocations } from "@/data/locationData";
import { industries } from "@/data/industryData";
import { allIndustryCities } from "@/data/industryCityData";
import { cityBlogPosts } from "@/data/cityBlogData";

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

export default function sitemap(): MetadataRoute.Sitemap {
  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: NOW,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Static blog posts
  const staticBlogPages: MetadataRoute.Sitemap = staticBlogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // City-specific blog posts
  const cityBlogPages: MetadataRoute.Sitemap = cityBlogPosts.map((post) => ({
    url: `${BASE_URL}/blog/website-chatbot-24-7-${post.slug}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Industry hub pages
  const industryPages: MetadataRoute.Sitemap = Object.values(industries).map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Industry + city pages
  const industryCityPages: MetadataRoute.Sitemap = allIndustryCities.map((entry) => ({
    url: `${BASE_URL}/industries/${entry.industrySlug}/${entry.citySlug}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Location pages
  const locationPages: MetadataRoute.Sitemap = ukLocations.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.slug}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.7,
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
