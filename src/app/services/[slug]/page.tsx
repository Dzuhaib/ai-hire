export const revalidate = 86400;
import type { Metadata } from "next";
import { services } from "@/data/servicesData";
import ServicePage from "@/views/services/ServicePage";
import { ORG_ID, SITE_URL, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import NotFound from "../../not-found";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  const title = `${service.title} | AI Agency UAE`;
  const description = `${service.description} AIVized delivers ${service.title.toLowerCase()} for UAE businesses with a managed approach and a written scope before work starts.`;
  const url = `${SITE_URL}/services/${service.slug}`;
  return {
    title,
    description,
    keywords: [
      service.title,
      `${service.title} UAE`,
      `${service.title} services`,
      service.slug,
      "ai seo abu dhabi",
      "ai automation agency dubai",
      "ai automation uae",
      "automation services",
      "levora ai",
      "ai chatbot for website uae",
      "ai automation services",
      "ai consultants abu dhabi",
      "ai automation cost uae",
    ],
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

export default async function Page({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  const url = `${SITE_URL}/services/${service.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...serviceSchema({
          name: `${service.title} | AIVized`,
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
          { name: service.title, item: url },
        ]),
        "@id": `${url}#breadcrumb`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePage service={service} canonical={url} />
    </>
  );
}
