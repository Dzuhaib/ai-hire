export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  category: string;
  keywords: string[];
  heroImage: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "whatsapp-chatbot-uk-business",
    title: "WhatsApp Chatbot for UK Businesses: Your AI Personal Assistant",
    metaTitle: "WhatsApp Chatbot UK | AI Personal Assistant Near Me | AIVized",
    metaDescription: "Discover how WhatsApp chatbots with 24/7 outsourced chat agents can transform your Birmingham or Manchester business. AI service providers UK.",
    excerpt: "Learn how WhatsApp chatbots are revolutionising customer engagement for UK businesses with 24/7 automated support and lead generation.",
    publishedDate: "2026-01-28",
    readTime: "8 min read",
    category: "WhatsApp",
    keywords: [
      "artificial intelligence personal assistant near me",
      "ai service providers manchester united kingdom",
      "24/7 outsourced chat agents birmingham",
      "ai chatbot for small business uk"
    ],
    heroImage: "/src/assets/blog/whatsapp-chatbot-hero.png"
  },
  {
    slug: "website-chatbot-small-business",
    title: "Website Chatbot Solutions: Digital Assistant Services for UK SMEs",
    metaTitle: "Website Chatbot UK | Digital Assistant Services Birmingham | AIVized",
    metaDescription: "Get a managed website chatbot with digital assistant services in Birmingham and Kensington. AI virtual assistant for HR and customer support.",
    excerpt: "Explore how website chatbots provide digital assistant services, transforming how UK small businesses handle customer enquiries.",
    publishedDate: "2026-01-29",
    readTime: "7 min read",
    category: "Website",
    keywords: [
      "digital assistant services birmingham",
      "ai chatbot for small business uk",
      "ai service providers kensington united kingdom",
      "ai virtual assistant for hr birmingham"
    ],
    heroImage: "/src/assets/blog/website-chatbot-hero.png"
  },
  {
    slug: "instagram-chatbot-social-media",
    title: "Instagram Chatbot: AI Service Providers for Social Media Automation",
    metaTitle: "Instagram Chatbot UK | AI Service Providers Canary Wharf | AIVized",
    metaDescription: "Automate Instagram DMs with AI chatbots. Leading AI service providers in Canary Wharf and Birmingham for social media customer engagement.",
    excerpt: "Discover how Instagram chatbots help UK businesses automate social media customer engagement and boost conversions.",
    publishedDate: "2026-01-30",
    readTime: "6 min read",
    category: "Instagram",
    keywords: [
      "ai service providers canary wharf",
      "artificial intelligence personal assistant birmingham",
      "ai service providers canary wharf united kingdom",
      "ai chatbot for small business uk"
    ],
    heroImage: "/src/assets/blog/instagram-chatbot-hero.png"
  }
];

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
