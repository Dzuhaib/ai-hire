import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";
import "@/index.css";

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7C3AED",
};

export const metadata: Metadata = {
  title: {
    default: "Managed AI Chatbot for Small Business UK | AIVized From £29/mo",
    template: "%s | AIVized",
  },
  description:
    "Get a fully managed AI chatbot for your UK small business from £29/month. 24/7 lead generation. We install everything. No technical skills needed.",
  keywords:
    "managed AI chatbot service, AI chatbot for small business UK, lead generation chatbot UK, 24/7 customer support chatbot, affordable AI chatbot, fully managed chatbot, AIVized",
  authors: [{ name: "Zuhaib Ahmed", url: "https://www.linkedin.com/in/zuhaibah/" }],
  publisher: "Zuhaib Ahmed",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://www.aivized.com"),
  openGraph: {
    type: "website",
    siteName: "aivized",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aivized",
    images: ["/og-image.png"],
  },
  verification: {
    google: "ue_nVigpxJNzbxs35ZA6amCJ77riHY9NQg7-26dMUGw",
  },
  other: {
    "msapplication-TileImage": "/apple-touch-icon.png",
    "msapplication-TileColor": "#BC542F",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7C3AED" />
        <link rel="alternate" hrefLang="en-GB" href="https://www.aivized.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.aivized.com/" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N99PDZ9Q');`,
          }}
        />
        {/* AIVized Widget */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
  var script = document.createElement('script');
  script.src = 'https://ai-vized-chatbot-factory-production-5041.up.railway.app/static/widget.js';
  script.setAttribute('data-chatbot-id', 'cb_U105bdQa12RU');
  script.setAttribute('data-api-url', 'https://ai-vized-chatbot-factory-production-5041.up.railway.app');
  script.async = true;
  document.head.appendChild(script);
})();`,
          }}
        />
        {/* WebMCP — expose site tools to browser AI agents */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=[{name:"get_pricing",description:"Get detailed pricing info for AIVized chatbot tiers (Starter, Growth, Scale)",inputSchema:{type:"object",properties:{tier:{type:"string",enum:["starter","growth","scale","all"],description:"Tier to look up"}}}},{name:"get_services",description:"Get info about AIVized managed AI chatbot services",inputSchema:{type:"object",properties:{category:{type:"string",enum:["all","restaurant","real_estate","ecommerce","healthcare"],description:"Service category"}}}},{name:"get_case_studies",description:"Get AIVized case studies and success stories",inputSchema:{type:"object",properties:{industry:{type:"string",enum:["all","restaurant","real_estate"],description:"Filter by industry"}}}},{name:"contact_sales",description:"Get contact/sales info for AIVized",inputSchema:{type:"object",properties:{topic:{type:"string",enum:["general","sales","partnership","support"],description:"Contact reason"}}}},{name:"search_site",description:"Search the AIVized website",inputSchema:{type:"object",properties:{query:{type:"string",description:"Search terms"}},required:["query"]}}];var m=(document.modelContext||navigator.modelContext);if(!m)return;var r=m.registerTool||m.provideContext;if(!r)return;t.forEach(function(t){try{r.call(m,{name:t.name,description:t.description,inputSchema:t.inputSchema,annotations:{readOnlyHint:true},execute:function(){return Promise.resolve({ok:!0,tool:t.name})}},{signal:(new AbortController).signal})}catch(e){}})})()` }} />
      </head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N99PDZ9Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {clerkPublishableKey ? (
          <ClerkProvider publishableKey={clerkPublishableKey}>
            <Providers>{children}</Providers>
          </ClerkProvider>
        ) : (
          <Providers>{children}</Providers>
        )}
      </body>
    </html>
  );
}
