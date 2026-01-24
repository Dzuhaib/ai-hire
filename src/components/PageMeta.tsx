import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
}

/**
 * Sets page-specific meta tags for SEO.
 * Each page should use unique keywords and descriptions.
 */
export function PageMeta({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
}: PageMetaProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set/update meta tags
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Standard meta
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    // Open Graph
    setMeta("og:title", ogTitle || title, true);
    setMeta("og:description", ogDescription || description, true);

    // Twitter
    setMeta("twitter:title", ogTitle || title);
    setMeta("twitter:description", ogDescription || description);

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // Cleanup: restore defaults when component unmounts
    return () => {
      document.title = "Managed AI Chatbot for Small Business UK | £29/month";
    };
  }, [title, description, keywords, canonical, ogTitle, ogDescription]);

  return null;
}
