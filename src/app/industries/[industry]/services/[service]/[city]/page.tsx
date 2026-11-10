export const revalidate = 86400;
import type { Metadata } from "next";
import { industries, getIndustryBySlug } from "@/data/industryData";
import { services } from "@/data/servicesData";
import { uaeLocations } from "@/data/locationData";
import IndustryServiceCityPage from "@/views/industries/IndustryServiceCityPage";
import { ORG_ID, SITE_URL, breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import NotFound from "../../../../../not-found";

interface IndustryServiceCityPageProps {
  params: Promise<{ industry: string; service: string; city: string }>;
}

export async function generateStaticParams() {
  const entries: Array<{ industry: string; service: string; city: string }> = [];
  for (const industryEntry of Object.values(industries)) {
    for (const service of services) {
      for (const location of uaeLocations) {
        entries.push({ industry: industryEntry.slug, service: service.slug, city: location.slug });
      }
    }
  }
  return entries;
}

export async function generateMetadata({ params }: IndustryServiceCityPageProps): Promise<Metadata> {
  const { industry: industrySlug, service: serviceSlug, city: citySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);
  const service = services.find((item) => item.slug === serviceSlug);
  const city = uaeLocations.find((item) => item.slug === citySlug);
  if (!industry || !service || !city) {
    return { title: "Page Not Found" };
  }
  const title = `${service.title} for ${industry.industry} in ${city.city} Businesses | AI & Automation`;
  const description = `${service.description} We deliver ${service.title.toLowerCase()} for ${industry.industry} businesses in ${city.city} across the UAE, with a managed approach and written scope before work starts.`;
  const url = `${SITE_URL}/industries/${industry.slug}/services/${service.slug}/${city.slug}`;
  return {
    title,
    description,
    keywords: [service.title, `${service.title} ${industry.industry}`, `${service.title} in ${city.city}`, `${service.slug} ${industry.slug} ${city.slug}`],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: [`${SITE_URL}/og-image.png`] },
  };
}

export default async function Page({ params }: IndustryServiceCityPageProps) {
  const { industry: industrySlug, service: serviceSlug, city: citySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);
  const service = services.find((item) => item.slug === serviceSlug);
  const city = uaeLocations.find((item) => item.slug === citySlug);

  if (!industry || !service || !city) {
    return <NotFound />;
  }

  const url = `${SITE_URL}/industries/${industry.slug}/services/${service.slug}/${city.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...serviceSchema({
          name: `${service.title} for ${industry.industry} in ${city.city} | AIVized`,
          description: service.description,
          url,
          serviceType: service.title,
        }),
        "provider": { "@id": ORG_ID },
        "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "email": "info@aivized.com" },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": ORG_ID },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".lead", "h2"] },
      },
      {
        ...breadcrumbSchema([
          { name: "Home", item: SITE_URL },
          { name: "Industries", item: `${SITE_URL}/industries` },
          { name: industry.industry, item: `${SITE_URL}/industries/${industry.slug}` },
          { name: `${service.title} for ${industry.industry}`, item: `${SITE_URL}/industries/${industry.slug}/services/${service.slug}` },
          { name: `${service.title} for ${industry.industry} in ${city.city}`, item: url },
        ]),
        "@id": `${url}#breadcrumb`,
      },
      faqPageSchema([...city.faqs, ...industry.faqs], `${url}#faq`),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <IndustryServiceCityPage industry={industry} service={service} city={city} industryCitySlug={city.slug} canonical={url} />
    </>
  );
}
