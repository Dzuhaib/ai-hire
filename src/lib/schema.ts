/**
 * Centralized schema.org utilities for AIVized.
 *
 * Rules enforced here:
 * - Single @type per node (no combined arrays like ["BlogPosting","Article"])
 * - Every top-level entity has an @id so nodes can be cross-referenced
 * - Organization and Founder are defined once and referenced by @id elsewhere
 * - Breadcrumb items always use full canonical URLs (no fragment anchors)
 * - Optional fields are omitted rather than filled with stale defaults
 */

export const SITE_URL = "https://www.aivized.com";
export const ORG_ID   = `${SITE_URL}/#organization`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const ORG_NAME = "AIVized";
export const ORG_DESCRIPTION =
  "AIVized delivers AI systems, business automations, SEO and GEO, digital marketing, web development, and desktop software for UAE businesses.";

export const SERVICE_NAMES = [
  "AI Systems",
  "Automations",
  "SEO & GEO",
  "Digital Marketing",
  "Web Development",
  "Desktop Software Development",
] as const;

// ─── Shared entity references ───────────────────────────────────────────────

/** Lightweight author reference — uses @id so full Person node resolves via homepage graph */
export const authorRef = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  "name": "Zuhaib Ahmed",
  "url": "https://www.linkedin.com/in/zuhaibah/",
  "sameAs": ["https://www.linkedin.com/in/zuhaibah/"],
} as const;

/** Lightweight publisher reference — resolves to full Organization on homepage */
export const publisherRef = {
  "@type": "Organization",
  "@id": ORG_ID,
  "name": ORG_NAME,
  "url": SITE_URL,
  "logo": { "@type": "ImageObject", "url": `${SITE_URL}/favicon.png` },
} as const;

/** Full Organization node — import this instead of re-declaring the entity. */
export const organizationSchema = {
  "@type": "Organization",
  "@id": ORG_ID,
  "name": ORG_NAME,
  "url": SITE_URL,
  "logo": { "@type": "ImageObject", "url": `${SITE_URL}/favicon.png`, "width": 512, "height": 512 },
  "image": `${SITE_URL}/og-image.png`,
  "email": "info@aivized.com",
  "description": ORG_DESCRIPTION,
  "foundingDate": "2025",
  "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "info@aivized.com",
    "availableLanguage": "English",
    "areaServed": "AE",
  },
  "sameAs": [
    "https://www.linkedin.com/company/ai-vized/",
    "https://twitter.com/aivized",
    "https://www.facebook.com/aivized",
    "https://www.instagram.com/aivized",
  ],
  "founder": { "@id": FOUNDER_ID },
  "knowsAbout": [...SERVICE_NAMES],
};

/** Full Founder node — shared across pages so the Person resolves consistently. */
export const founderSchema = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  "name": "Zuhaib Ahmed",
  "jobTitle": "Founder",
  "url": "https://www.linkedin.com/in/zuhaibah/",
  "sameAs": ["https://www.linkedin.com/in/zuhaibah/"],
  "worksFor": { "@id": ORG_ID },
  "description":
    "Founder of AIVized, which delivers AI systems, automation, SEO and GEO, digital marketing, web development, and desktop software for UAE businesses.",
};

// ─── Generators ─────────────────────────────────────────────────────────────

/**
 * BreadcrumbList — always uses full canonical URLs.
 * Never pass fragment anchors (#section) as item values.
 */
export function breadcrumbSchema(
  items: Array<{ name: string; item: string }>
) {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": crumb.name,
      "item": crumb.item,
    })),
  };
}

/**
 * FAQPage — mirrors the visible FAQ accordions on a page.
 * Omit the @id when the page already has a canonical URL to attach it to.
 */
export function faqPageSchema(
  items: Array<{ question: string; answer: string }>,
  id?: string
) {
  const node: Record<string, unknown> = {
    "@type": "FAQPage",
    "mainEntity": items.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  };
  if (id) node["@id"] = id;
  return node;
}

/**
 * BlogPosting — single @type, not combined with Article.
 * Google recommends BlogPosting for blog content; Article is a parent type.
 */
export function blogPostingSchema(opts: {
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@type": "BlogPosting",
    "@id": `${opts.url}#blogposting`,
    "headline": opts.headline,
    "description": opts.description,
    "image": opts.image,
    "author": authorRef,
    "publisher": publisherRef,
    "datePublished": opts.datePublished,
    "dateModified": opts.dateModified,
    "inLanguage": "en-AE",
    "mainEntityOfPage": opts.url,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".lead", "h2"],
    },
  };
}

/**
 * Service — always scoped to a single page; uses @id for cross-referencing.
 * Pricing is intentionally optional because engagements are quoted per scope.
 */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: object;
  startingPrice?: number;
  priceCurrency?: string;
}) {
  const node: Record<string, unknown> = {
    "@type": "Service",
    "@id": `${opts.url}#service`,
    "name": opts.name,
    "description": opts.description,
    "provider": { "@id": ORG_ID },
    "serviceType": opts.serviceType ?? opts.name,
    "areaServed": opts.areaServed ?? { "@type": "Country", "name": "United Arab Emirates" },
    "url": opts.url,
  };

  if (opts.startingPrice !== undefined) {
    const currency = opts.priceCurrency ?? "AED";
    const price = String(opts.startingPrice);
    node["offers"] = {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": price,
        "priceCurrency": currency,
        "unitCode": "MON",
      },
    };
  }

  return node;
}

/**
 * LocalBusiness / ProfessionalService for a city page.
 */
export function localBusinessSchema(opts: {
  name: string;
  description: string;
  url: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
  type?: "LocalBusiness" | "ProfessionalService";
}) {
  return {
    "@type": opts.type ?? "LocalBusiness",
    "@id": `${opts.url}#localbusiness`,
    "name": opts.name,
    "description": opts.description,
    "url": opts.url,
    "email": "info@aivized.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": opts.city,
      "addressRegion": opts.region,
      "addressCountry": "AE",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": opts.lat,
      "longitude": opts.lng,
    },
    "areaServed": { "@type": "City", "name": opts.city },
    "priceRange": "Custom",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
    "parentOrganization": { "@id": ORG_ID },
  };
}
