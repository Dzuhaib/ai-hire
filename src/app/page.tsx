export const revalidate = 86400; // ISR: revalidate every 24 hours
import type { Metadata } from "next";
import IndexPage from "@/views/Index";

export const metadata: Metadata = {
  title: "Managed AI Chatbot for Small Business UK | AIVized From £29/mo",
  description:
    "AIVized installs and manages an AI chatbot on your website from £29/month. No technical skills needed. UK-based support. 24-hour setup. 3-day free trial.",
  keywords:
    "managed AI chatbot service, AI chatbot for small business UK, lead generation chatbot UK, 24/7 customer support chatbot, affordable AI chatbot, fully managed chatbot, AIVized",
  alternates: { canonical: "https://www.aivized.com/" },
  openGraph: {
    url: "https://www.aivized.com/",
    title: "Managed AI Chatbot for Small Business UK | AIVized",
    description:
      "Get a fully managed AI chatbot from £29/month. 24/7 lead generation. We install everything—no technical skills needed.",
  },
};

// Defined here (server component) — NOT in "use client" Index.tsx — to avoid client reference serialization issues
const homepageFaqs = [
  { question: "What is a managed AI chatbot service?", answer: "A managed AI chatbot service means a company installs, trains, and maintains the chatbot for you. With AIVized, you subscribe to a plan and we handle everything from setup to ongoing updates. You do not touch any code." },
  { question: "How much does an affordable AI chatbot for website cost?", answer: "AIVized plans start from £29 per month plus a one-time £50 setup fee. There are no long-term contracts and a 3-day free trial is included." },
  { question: "How can I capture leads on my website 24/7?", answer: "AIVized installs an AI chatbot that engages every visitor, asks qualifying questions, and collects their contact details automatically. Leads are delivered to your email or CRM around the clock." },
  { question: "Is this AI chatbot for small business UK suitable for my company?", answer: "If your business has a website and receives customer enquiries, yes. AIVized works for restaurants, real estate agencies, ecommerce stores, clinics, law firms, gyms, and travel businesses across the UK." },
  { question: "How does your AI chatbot provide 24/7 customer support?", answer: "The chatbot runs on your website continuously. It answers questions, takes bookings, and captures leads at any hour without staff involvement. Average response time is under 3 seconds." },
  { question: "Can this chatbot help me automate customer inquiries for my small business?", answer: "Yes. AIVized is trained on your specific business, products, and services. It handles the questions your customers ask most, freeing your team to focus on higher-value work." },
  { question: "What makes AIVized different from other chatbot services for small business UK?", answer: "AIVized is fully managed. Unlike DIY platforms where you build and maintain the chatbot yourself, we handle everything. Setup, training, monitoring, and updates are all included in your monthly plan." },
  { question: "How does AIVized compare to Intercom alternatives for small business?", answer: "Intercom requires technical setup and internal management. AIVized costs significantly less and includes full management. You get enterprise-quality AI without needing a technical team." },
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.aivized.com/#website",
      "name": "AIVized",
      "url": "https://www.aivized.com",
      "description": "Managed AI chatbot service for UK small businesses from £29/month.",
      "publisher": { "@id": "https://www.aivized.com/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "https://www.aivized.com/#organization",
      "name": "AIVized",
      "url": "https://www.aivized.com",
      "logo": { "@type": "ImageObject", "url": "https://www.aivized.com/favicon.png", "width": 512, "height": 512 },
      "image": "https://www.aivized.com/og-image.png",
      "email": "aivized.com@gmail.com",
      "description": "Fully managed AI chatbot service for UK small businesses. 24/7 lead generation from £29/month.",
      "foundingDate": "2025",
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "contactPoint": { "@type": "ContactPoint", "contactType": "customer support", "email": "aivized.com@gmail.com", "availableLanguage": "English", "areaServed": "GB" },
      "sameAs": [
        "https://www.linkedin.com/company/ai-vized/",
        "https://twitter.com/aivized",
        "https://www.facebook.com/aivized",
        "https://www.instagram.com/aivized"
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.aivized.com/#product",
      "name": "AIVized AI Chatbot",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "Fully managed AI chatbot for UK small businesses. Handles 24/7 lead generation, customer enquiries, and appointment booking. Installed and managed by AIVized.",
      "url": "https://www.aivized.com",
      "provider": { "@id": "https://www.aivized.com/#organization" },
      "offers": [
        { "@type": "Offer", "name": "Starter", "price": "29", "priceCurrency": "GBP", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "29", "priceCurrency": "GBP", "unitCode": "MON" } },
        { "@type": "Offer", "name": "Professional", "price": "79", "priceCurrency": "GBP", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "79", "priceCurrency": "GBP", "unitCode": "MON" } },
        { "@type": "Offer", "name": "Business", "price": "149", "priceCurrency": "GBP", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "149", "priceCurrency": "GBP", "unitCode": "MON" } }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.aivized.com/#localbusiness",
      "name": "AIVized - Managed AI Chatbot Service",
      "url": "https://www.aivized.com",
      "email": "aivized.com@gmail.com",
      "description": "Fully managed AI chatbot service for UK small businesses. We install, monitor, and optimise your chatbot 24/7.",
      "priceRange": "£29 - £149/month",
      "image": "https://www.aivized.com/og-image.png",
      "address": { "@type": "PostalAddress", "addressCountry": "GB", "addressLocality": "London" },
      "areaServed": [
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "City", "name": "London" },
        { "@type": "City", "name": "Manchester" },
        { "@type": "City", "name": "Birmingham" },
        { "@type": "City", "name": "Leeds" },
        { "@type": "City", "name": "Glasgow" },
        { "@type": "City", "name": "Edinburgh" },
        { "@type": "City", "name": "Liverpool" },
        { "@type": "City", "name": "Bristol" },
        { "@type": "City", "name": "Sheffield" },
        { "@type": "City", "name": "Newcastle" }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "parentOrganization": { "@id": "https://www.aivized.com/#organization" }
    },
    {
      "@type": "Service",
      "@id": "https://www.aivized.com/#service",
      "name": "Managed AI Chatbot Service",
      "description": "Fully managed AI chatbot installation, training, monitoring, and optimisation for UK small businesses. 24/7 lead capture and customer enquiry automation from £29/month.",
      "provider": { "@id": "https://www.aivized.com/#organization" },
      "serviceType": "AI Chatbot Management",
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AIVized Chatbot Plans",
        "itemListElement": [
          { "@type": "Offer", "name": "Starter Plan", "description": "Basic lead capture and FAQ handling for UK small businesses. Up to 500 conversations/month.", "price": "29", "priceCurrency": "GBP", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "29", "priceCurrency": "GBP", "unitCode": "MON" } },
          { "@type": "Offer", "name": "Professional Plan", "description": "Advanced customisation with priority support, up to 2,500 conversations/month.", "price": "79", "priceCurrency": "GBP", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "79", "priceCurrency": "GBP", "unitCode": "MON" } },
          { "@type": "Offer", "name": "Business Plan", "description": "Enterprise-grade AI with dedicated account manager, unlimited conversations, and SLA guarantee.", "price": "149", "priceCurrency": "GBP", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "149", "priceCurrency": "GBP", "unitCode": "MON" } }
        ]
      }
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://www.aivized.com/#webpage",
      "url": "https://www.aivized.com",
      "name": "Managed AI Chatbot for Small Business UK | AIVized",
      "description": "Get a fully managed AI chatbot for your UK small business from £29/month. 24/7 lead generation, we install everything—no technical skills needed.",
      "isPartOf": { "@id": "https://www.aivized.com/#website" },
      "about": { "@id": "https://www.aivized.com/#service" },
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#faq", "#how-it-works", "#pricing"] },
      "mainEntity": homepageFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
      <IndexPage />
    </>
  );
}
