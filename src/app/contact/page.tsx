export const revalidate = 86400;
import type { Metadata } from "next";
import ContactPage from "@/views/ContactPage";
import { ORG_ID, SITE_URL, WEBSITE_ID, organizationSchema, breadcrumbSchema } from "@/lib/schema";

const title = "Contact Us | AIVized | Let's Build Something Better";
const description =
  "Get in touch with AIVized to discuss AI systems, automation, SEO and GEO, digital marketing, web development, or desktop software for your UAE business.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "https://www.aivized.com/contact" },
  openGraph: {
    title,
    description,
    url: "https://www.aivized.com/contact",
    type: "website",
    images: [{ url: "https://www.aivized.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["https://www.aivized.com/og-image.png"] },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...breadcrumbSchema([
        { name: "Home", item: SITE_URL },
        { name: "Contact", item: `${SITE_URL}/contact` },
      ]),
      "@id": `${SITE_URL}/contact#breadcrumb`,
    },
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contact#contactpage`,
      "name": "Contact AIVized",
      "url": `${SITE_URL}/contact`,
      "isPartOf": { "@id": WEBSITE_ID },
      "about": { "@id": ORG_ID },
      "publisher": { "@id": ORG_ID },
    },
    {
      ...organizationSchema,
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "info@aivized.com",
        "areaServed": "AE",
        "availableLanguage": ["English"],
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <ContactPage />
    </>
  );
}
