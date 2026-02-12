import { Helmet } from "react-helmet-async";

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  /** JSON-LD structured data schema. Must be a single @graph object to avoid duplicate field errors in Google Search Console. */
  schema?: Record<string, unknown>;
}

/**
 * Sets page-specific meta tags and JSON-LD structured data for SEO using react-helmet-async.
 * Each page should use unique keywords and descriptions.
 * 
 * IMPORTANT: Always provide a canonical URL to avoid "Alternate page with proper canonical tag" errors.
 * IMPORTANT: Always pass JSON-LD schema through this component (not inline <script> tags) 
 * to prevent "Duplicate field FAQPage" errors in Google Search Console.
 */
export function PageMeta({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  schema,
}: PageMetaProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
}
