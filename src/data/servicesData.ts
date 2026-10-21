import {
  Bot,
  Workflow,
  Search,
  Megaphone,
  Code2,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  outcome: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: "ai-systems",
    title: "AI Systems",
    tagline: "Custom AI that works like part of your team",
    description:
      "We design, build, and manage bespoke AI systems: customer-facing assistants, internal knowledge bases, lead qualification engines, and decision-support tools trained on your business and connected to the software you already use.",
    features: [
      "Custom AI assistants and chatbots",
      "Internal knowledge bases and search",
      "CRM, API, and workflow integrations",
      "Monitoring, evaluation, and continuous improvement",
    ],
    outcome: "Fewer manual enquiries, faster answers, and a system that learns as your business grows.",
    icon: Bot,
  },
  {
    slug: "automations",
    title: "Automations",
    tagline: "Remove repetitive work from your week",
    description:
      "We map the manual processes holding your team back, then automate them end to end. From lead follow-up and customer onboarding to invoicing, reminders, reporting, and internal handoffs, the repetitive work runs itself.",
    features: [
      "Workflow audits and process mapping",
      "Lead capture and follow-up sequences",
      "CRM, email, calendar, and finance automation",
      "Approvals, notifications, and reporting flows",
    ],
    outcome: "Hours returned to your team every week, with fewer dropped handoffs and missed follow-ups.",
    icon: Workflow,
  },
  {
    slug: "seo-geo",
    title: "SEO & GEO",
    tagline: "Be found on Google and cited by AI search",
    description:
      "We combine technical SEO, content strategy, and Generative Engine Optimisation (GEO) so your business ranks in traditional search results and gets referenced by AI tools like ChatGPT, Perplexity, and Google AI Overviews.",
    features: [
      "Technical SEO audits and fixes",
      "Keyword research and content strategy",
      "GEO for AI search visibility",
      "Schema markup, sitemaps, and internal linking",
    ],
    outcome: "More qualified organic traffic from both search engines and AI-powered answer engines.",
    icon: Search,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Campaigns that turn attention into revenue",
    description:
      "We plan and run paid and organic campaigns across Google, Meta, LinkedIn, and email. Every campaign is tied to a clear commercial goal, with tracking and reporting that show what is actually working.",
    features: [
      "Google, Meta, and LinkedIn advertising",
      "Email and lifecycle marketing",
      "Landing pages and conversion tracking",
      "Monthly reporting and optimisation",
    ],
    outcome: "A predictable pipeline of enquiries, with budget focused on the channels that convert.",
    icon: Megaphone,
  },
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Fast, conversion-focused websites and apps",
    description:
      "We build modern, responsive websites and web applications that load quickly, rank well, and make it easy for customers to buy, book, or get in touch. From marketing sites to e-commerce and custom portals.",
    features: [
      "Marketing websites and landing pages",
      "E-commerce, booking, and payment flows",
      "CMS, headless, and custom web apps",
      "Performance, SEO, and accessibility",
    ],
    outcome: "A website that supports your growth instead of holding it back, built to be fast and easy to maintain.",
    icon: Code2,
  },
  {
    slug: "desktop-software-development",
    title: "Desktop Software Development",
    tagline: "Custom tools built around how your team works",
    description:
      "We design and develop desktop applications for Windows and macOS, including internal business tools, data-heavy workflows, reporting dashboards, and offline-capable software. Built to fit your processes, not the other way around.",
    features: [
      "Windows and macOS applications",
      "Internal tools and operational software",
      "Data processing, reporting, and exports",
      "Updates, licensing, and ongoing support",
    ],
    outcome: "Software that fits your operation exactly, reduces manual data work, and scales with your team.",
    icon: MonitorSmartphone,
  },
];

export const servicesNav = services.map((service) => ({
  label: service.title,
  href: `/services#${service.slug}`,
}));
