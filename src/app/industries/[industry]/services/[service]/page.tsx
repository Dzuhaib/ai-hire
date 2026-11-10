export const revalidate = 86400;
import type { Metadata } from "next";
import { industries, getIndustryBySlug } from "@/data/industryData";
import { services } from "@/data/servicesData";
import IndustryServicePage from "@/views/industries/IndustryServicePage";
import { ORG_ID, SITE_URL, breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import NotFound from "../../../../not-found";

interface IndustryServicePageProps {
  params: Promise<{ industry: string; service: string }>;
}

export async function generateStaticParams() {
  const entries: Array<{ industry: string; service: string }> = [];
  for (const industryEntry of Object.values(industries)) {
    for (const service of services) {
      entries.push({ industry: industryEntry.slug, service: service.slug });
    }
  }
  return entries;
}

export async function generateMetadata({ params }: IndustryServicePageProps): Promise<Metadata> {
  const { industry: industrySlug, service: serviceSlug } = await params;
  const industry = getIndustryBySlug(industrySlug);
  const service = services.find((item) => item.slug === serviceSlug);
  if (!industry || !service) {
    return { title: "Page Not Found" };
  }
  const title = `${service.title} for ${industry.industry} Businesses | AI & Automation`;
  const description = `${service.description} We deliver ${service.title.toLowerCase()} for ${industry.industry} businesses across the UAE, with a managed approach and written scope before work starts.`;
  const url = `${SITE_URL}/industries/${industry.slug}/services/${service.slug}`;
  return {
    title,
    description,
    keywords: [service.title, `${service.title} ${industry.industry}`, `${service.title} for ${industry.industry} businesses`, `${service.slug} ${industry.slug}`],
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

export default async function Page({ params }: IndustryServicePageProps) {
  const { industry: industrySlug, service: serviceSlug } = await params;
  const industry = getIndustryBySlug(industrySlug);
  const service = services.find((item) => item.slug === serviceSlug);

  if (!industry || !service) {
    return <NotFound />;
  }

  const url = `${SITE_URL}/industries/${industry.slug}/services/${service.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...serviceSchema({
          name: `${service.title} for ${industry.industry} | AIVized`,
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
          { name: `${service.title} for ${industry.industry}`, item: url },
        ]),
        "@id": `${url}#breadcrumb`,
      },
      faqPageSchema(industry.faqs, `${url}#faq`),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <IndustryServicePage industry={industry} service={service} canonical={url} />
    </>
  );
}
