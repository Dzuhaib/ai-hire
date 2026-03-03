import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  publishedTime?: string;
  modifiedTime?: string;
  ogImage?: string;
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
  ogType,
  publishedTime,
  modifiedTime,
  ogImage,
  schema,
}: PageMetaProps) {
  useEffect(() => {
    const scriptId = "page-structured-data";

    // Remove any existing script first to prevent duplicates during SPA transitions
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    if (!schema) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    // Cleanup: remove script when component unmounts (page navigation)
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [schema]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:type" content={ogType || "website"} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      
    </Helmet>
  );
}
