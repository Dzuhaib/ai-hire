export const revalidate = 86400;
import type { Metadata } from "next";
import { services } from "@/data/servicesData";
import { uaeLocations } from "@/data/locationData";
import ServiceLocationPage from "@/views/services/ServiceLocationPage";
import { ORG_ID, SITE_URL, breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import NotFound from "../../../not-found";

interface ServiceLocationPageProps {
  params: Promise<{ slug: string; city: string }>;
}

export async function generateStaticParams() {
  const entries: Array<{ slug: string; city: string }> = [];
  for (const service of services) {
    for (const location of uaeLocations) {
      entries.push({ slug: service.slug, city: location.slug });
    }
  }
  return entries;
}

export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const service = services.find((item) => item.slug === slug);
  const location = uaeLocations.find((item) => item.slug === citySlug);
  if (!service || !location) {
    return { title: "Service Not Found" };
  }
  const title = `${service.title} for ${location.city} Businesses | AI & Automation`;
  const description = `${service.description} We deliver ${service.title.toLowerCase()} for ${location.city} businesses across the UAE, with a managed approach and written scope before work starts.`;
  const url = `${SITE_URL}/services/${service.slug}/${location.slug}`;
  return {
    title,
    description,
    keywords: [service.title, `${service.title} ${location.city}`, `${service.title} in ${location.city}`, `${service.slug} ${location.slug}`],
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

export default async function Page({ params }: ServiceLocationPageProps) {
  const { slug, city: citySlug } = await params;
  const service = services.find((item) => item.slug === slug);
  const location = uaeLocations.find((item) => item.slug === citySlug);

  if (!service || !location) {
    return <NotFound />;
  }

  const url = `${SITE_URL}/services/${service.slug}/${location.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...serviceSchema({
          name: `${service.title} for ${location.city} | AIVized`,
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
          { name: "Services", item: `${SITE_URL}/services` },
          { name: `${service.title} for ${location.city}`, item: url },
        ]),
        "@id": `${url}#breadcrumb`,
      },
      faqPageSchema(location.faqs, `${url}#faq`),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceLocationPage service={service} city={location} canonical={url} />
    </>
  );
}
