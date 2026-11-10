export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndustryCityPage from "@/views/IndustryCityPage";
import { allIndustries, getIndustryBySlug } from "@/data/industryData";
import { uaeLocations } from "@/data/locationData";
import { getIndustryCityData } from "@/data/industryCityData";
import {
  ORG_ID,
  SITE_URL,
  breadcrumbSchema,
  faqPageSchema,
  localBusinessSchema,
  serviceSchema,
} from "@/lib/schema";

export async function generateStaticParams() {
  const params: { industry: string; city: string }[] = [];
  for (const industry of allIndustries) {
    for (const location of uaeLocations) {
      params.push({ industry: industry.slug, city: location.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string; city: string }>;
}): Promise<Metadata> {
  const { industry, city } = await params;
  const data = getIndustryCityData(industry, city);
  // Use pre-crafted unique metadata from data if available; fallback to template
  const title = data?.metaTitle ?? `AI Agency for ${industry} in ${city} | AI & Automation Services`;
  const description = data?.metaDescription ?? `AIVized is an AI agency serving ${industry} businesses in ${city}. Fully managed AI and automation services for enquiries, operations, and growth.`;
  const keywords = data?.metaKeywords;
  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: { canonical: `https://www.aivized.com/industries/${industry}/${city}` },
    openGraph: {
      title,
      description,
      url: `https://www.aivized.com/industries/${industry}/${city}`,
      type: "website",
      images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: ["https://www.aivized.com/og-image.png"] },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ industry: string; city: string }>;
}) {
  const { industry, city } = await params;
  const cityData = getIndustryCityData(industry, city);
  const parentIndustry = getIndustryBySlug(industry);

  const url = `${SITE_URL}/industries/${industry}/${city}`;
  const cityLocation = uaeLocations.find((loc) => loc.slug === city);

  const schema =
    cityData && parentIndustry
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              ...breadcrumbSchema([
                { name: "Home", item: SITE_URL },
                { name: "Industries", item: `${SITE_URL}/industries` },
                { name: parentIndustry.industry, item: `${SITE_URL}/industries/${industry}` },
                { name: cityData.cityName, item: url },
              ]),
              "@id": `${url}#breadcrumb`,
            },
            {
              ...serviceSchema({
                name: `AI Agency for ${parentIndustry.industry} in ${cityData.cityName} | AIVized`,
                description: `Fully managed AI agency services for ${parentIndustry.industry.toLowerCase()} businesses in ${cityData.cityName}. 24/7 lead capture and customer enquiry automation.`,
                url,
                serviceType: `AI Agency Services for ${parentIndustry.industry}`,
                areaServed: { "@type": "City", "name": cityData.cityName },
              }),
              "provider": { "@id": ORG_ID },
            },
            cityLocation
              ? localBusinessSchema({
                  name: `AIVized AI Agency - ${parentIndustry.industry} in ${cityData.cityName}`,
                  description: `AI agency services for ${parentIndustry.industry.toLowerCase()} businesses in ${cityData.cityName}. Installed and maintained by AIVized.`,
                  url,
                  city: cityData.cityName,
                  region: cityLocation.region,
                  lat: cityLocation.coordinates.lat,
                  lng: cityLocation.coordinates.lng,
                })
              : {
                  "@type": "LocalBusiness",
                  "@id": `${url}#localbusiness`,
                  "name": `AIVized AI Agency - ${parentIndustry.industry} in ${cityData.cityName}`,
                  "url": url,
                  "description": `AI agency services for ${parentIndustry.industry.toLowerCase()} businesses in ${cityData.cityName}. Installed and maintained by AIVized.`,
                  "email": "info@aivized.com",
                  "priceRange": "Custom",
                  "areaServed": {
                    "@type": "City",
                    "name": cityData.cityName,
                    "containedInPlace": { "@type": "Country", "name": "United Arab Emirates" }
                  }
                },
            faqPageSchema(cityData.faqs, `${url}#faq`),
          ],
        }
      : null;

  return (
    <>
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <IndustryCityPage />
    </>
  );
}
