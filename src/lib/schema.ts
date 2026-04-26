/**
 * Centralized schema.org utilities for AIVized.
 *
 * Rules enforced here:
 * - Single @type per node (no combined arrays like ["BlogPosting","Article"])
 * - Every top-level entity has an @id so nodes can be cross-referenced
 * - Organization and Founder are defined once and referenced by @id elsewhere
 * - Breadcrumb items always use full canonical URLs (no fragment anchors)
 */

export const SITE_URL = "https://www.aivized.com";
export const ORG_ID   = `${SITE_URL}/#organization`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

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
  "name": "AIVized",
  "url": SITE_URL,
  "logo": { "@type": "ImageObject", "url": `${SITE_URL}/favicon.png` },
} as const;

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
    "inLanguage": "en-GB",
    "mainEntityOfPage": opts.url,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".lead", "h2"],
    },
  };
}

/**
 * Service — always scoped to a single page; uses @id for cross-referencing.
 */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: object;
  startingPrice?: number;
}) {
  const id = `${opts.url}#service`;
  return {
    "@type": "Service",
    "@id": id,
    "name": opts.name,
    "description": opts.description,
    "provider": { "@id": ORG_ID },
    "serviceType": opts.serviceType ?? "AI Chatbot Management",
    "areaServed": opts.areaServed ?? { "@type": "Country", "name": "United Kingdom" },
    "url": opts.url,
    "offers": {
      "@type": "Offer",
      "price": String(opts.startingPrice ?? 29),
      "priceCurrency": "GBP",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": String(opts.startingPrice ?? 29),
        "priceCurrency": "GBP",
        "unitCode": "MON",
      },
    },
  };
}

/**
 * LocalBusiness for a city page.
 */
export function localBusinessSchema(opts: {
  name: string;
  description: string;
  url: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
}) {
  return {
    "@type": "LocalBusiness",
    "@id": `${opts.url}#localbusiness`,
    "name": opts.name,
    "description": opts.description,
    "url": opts.url,
    "email": "aivized.com@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": opts.city,
      "addressRegion": opts.region,
      "addressCountry": "GB",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": opts.lat,
      "longitude": opts.lng,
    },
    "areaServed": { "@type": "City", "name": opts.city },
    "priceRange": "£29-£149",
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
