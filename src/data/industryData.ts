export interface IndustryData {
  slug: string;
  industry: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  problems: Array<{ title: string; description: string }>;
  solutions: Array<{ title: string; description: string }>;
  features: Array<{ title: string; description: string; icon: string }>;
  useCases: string[];
  stats: Array<{ value: string; label: string }>;
  faqs: Array<{ question: string; answer: string }>;
  testimonial: { quote: string; author: string; role: string; company: string };
}

export const industries: Record<string, IndustryData> = {
  restaurants: {
    slug: "restaurants",
    industry: "Restaurants & Hospitality",
    tagline: "AI for Restaurants",
    heroTitle: "Never Miss Another Reservation",
    heroSubtitle: "Your AI hostess handles bookings, answers menu questions, and captures guest details 24/7—while your staff focus on delivering exceptional dining experiences.",
    description: "AI-powered reservation management and customer service for restaurants, cafés, and hospitality businesses across the UK.",
    problems: [
      { title: "Missed Calls During Service", description: "When your restaurant is busy, phones go unanswered. Every missed call could be a lost booking worth £50-£500+." },
      { title: "Late-Night Booking Requests", description: "Customers want to book after 10pm when you're closed. Without 24/7 availability, they book with competitors instead." },
      { title: "Repetitive Questions", description: "Staff waste hours answering the same questions about opening times, parking, menus, and allergens—time better spent on guests." },
      { title: "No-Shows & Empty Tables", description: "Without proper confirmation systems, no-shows cost UK restaurants an average of £16 billion annually." }
    ],
    solutions: [
      { title: "24/7 Reservation Handling", description: "Your AI hostess takes bookings any time of day or night, confirming instantly and updating your calendar automatically." },
      { title: "Instant Menu & Allergen Info", description: "Customers get immediate answers about ingredients, allergens, and dietary options without waiting for staff." },
      { title: "Automated Booking Confirmations", description: "Reduce no-shows by 30% with automatic reminders and easy rebooking options for your guests." },
      { title: "Peak Time Capacity", description: "Handle unlimited enquiries during your busiest services—Friday nights, Sunday roasts, and special events." }
    ],
    features: [
      { title: "Smart Reservations", description: "Accept bookings 24/7 with intelligent table management and capacity awareness", icon: "Calendar" },
      { title: "Menu Intelligence", description: "Answer detailed questions about dishes, ingredients, and dietary requirements", icon: "UtensilsCrossed" },
      { title: "Special Events", description: "Handle group bookings, private dining enquiries, and event catering requests", icon: "PartyPopper" },
      { title: "Lead Capture", description: "Collect guest details and preferences to build your customer database", icon: "Users" },
      { title: "Multi-Location", description: "Direct guests to the right branch if you operate multiple venues", icon: "MapPin" },
      { title: "Integration Ready", description: "Works alongside your existing booking system—no technical changes needed", icon: "Plug" }
    ],
    useCases: [
      "Fine dining restaurants",
      "Casual dining chains",
      "Cafés and coffee shops",
      "Pubs and gastro pubs",
      "Takeaway and delivery",
      "Event catering",
      "Hotel restaurants",
      "Private dining venues"
    ],
    stats: [
      { value: "40%", label: "More bookings captured" },
      { value: "30%", label: "Reduction in no-shows" },
      { value: "24/7", label: "Availability" },
      { value: "3 sec", label: "Average response time" }
    ],
    faqs: [
      { question: "How does a managed AI chatbot service help restaurants capture leads 24/7?", answer: "Our managed AI chatbot service handles bookings and enquiries around the clock. It captures leads from visitors even at 2am, responds instantly, and reduces missed leads from your website—all without any technical skills required from your team." },
      { question: "Is this an affordable AI chatbot for restaurant websites?", answer: "Yes! Starting from just £29/month, AIVized is the most affordable AI chatbot for restaurant websites in the UK. No developers needed, no setup fees—we install everything for you." },
      { question: "Can your lead generation chatbot UK handle dietary and allergen questions?", answer: "Absolutely. Our lead generation chatbot UK is trained to provide detailed information about allergens, vegetarian/vegan options, gluten-free dishes, and other dietary needs based on your menu data." },
      { question: "Will this 24/7 customer support chatbot integrate with my booking system?", answer: "Our 24/7 customer support chatbot captures bookings and sends them directly to you via email. It works alongside existing systems like OpenTable, ResDiary, or simple diary systems without requiring technical integration." },
      { question: "What happens if a customer asks something the AI chatbot can't answer?", answer: "The AI will politely capture their details and escalate the enquiry to you. You'll receive an email with the customer's question and contact information so you can follow up personally—you never lose a lead." },
      { question: "How do I update the AI chatbot when my menu changes?", answer: "Simply let us know when you update your menu, and we'll update your AI's knowledge at no extra cost. Seasonal changes, new dishes, price updates—all covered as part of our fully managed service." },
      { question: "Does this AI chatbot for small business UK work for takeaway orders?", answer: "Yes, our AI chatbot for small business UK can answer questions about your takeaway menu, delivery areas, and ordering process. It can also capture order requests and direct customers to your online ordering system." }
    ],
    testimonial: {
      quote: "Since adding AI Vized, we've captured 40% more reservations—especially those late-night bookings we used to miss completely. It's like having a host who never takes a break.",
      author: "Marco",
      role: "Owner",
      company: "Trattoria Milano, London"
    }
  },
  "real-estate": {
    slug: "real-estate",
    industry: "Real Estate & Property",
    tagline: "AI for Real Estate",
    heroTitle: "Qualify Leads While You Close Deals",
    heroSubtitle: "Your AI property assistant handles enquiries, schedules viewings, and qualifies buyers 24/7—so you can focus on closing sales instead of answering repetitive questions.",
    description: "AI-powered lead qualification and customer service for estate agents, letting agents, and property developers across the UK.",
    problems: [
      { title: "Leads Go Cold Quickly", description: "Property buyers expect instant responses. A 30-minute delay can mean losing a hot lead to a faster competitor." },
      { title: "Weekend & Evening Enquiries", description: "Most property searches happen outside office hours—evenings and weekends when your office is closed." },
      { title: "Repetitive Property Questions", description: "Agents spend hours answering the same questions about council tax bands, EPC ratings, and local amenities." },
      { title: "Unqualified Viewings", description: "Wasting time on viewings with buyers who can't proceed costs you valuable selling time." }
    ],
    solutions: [
      { title: "Instant Lead Response", description: "Respond to every property enquiry within seconds, 24 hours a day. Never lose a lead to slow response times again." },
      { title: "24/7 Property Information", description: "Your AI answers detailed questions about listings, local areas, and availability at any hour of the day or night." },
      { title: "Automated Lead Qualification", description: "Pre-qualify buyers by budget, chain status, and timeline before you spend time on viewings." },
      { title: "Smart Viewing Scheduling", description: "Let your AI arrange viewings based on property availability and buyer preferences." }
    ],
    features: [
      { title: "Lead Qualification", description: "Ask the right questions to filter serious buyers from casual browsers", icon: "Filter" },
      { title: "Property Matching", description: "Suggest suitable properties based on buyer requirements and budget", icon: "Home" },
      { title: "Viewing Scheduling", description: "Arrange property viewings based on availability and preferences", icon: "Calendar" },
      { title: "Area Information", description: "Answer questions about schools, transport, amenities, and local market data", icon: "MapPin" },
      { title: "Vendor Updates", description: "Capture viewing feedback and buyer interest for vendor reporting", icon: "FileText" },
      { title: "Multi-Branch Support", description: "Direct enquiries to the right branch or specialist agent", icon: "Building" }
    ],
    useCases: [
      "High street estate agents",
      "Online estate agencies",
      "Letting agents",
      "Property developers",
      "New homes sales",
      "Commercial property",
      "Property management",
      "Relocation services"
    ],
    stats: [
      { value: "65%", label: "Faster lead response" },
      { value: "45%", label: "More qualified viewings" },
      { value: "24/7", label: "Lead capture" },
      { value: "£0", label: "Per viewing scheduled" }
    ],
    faqs: [
      { question: "How does a lead generation chatbot UK help estate agents?", answer: "Our lead generation chatbot UK qualifies buyers automatically by asking about budget, chain status, and timeline. It captures leads 24/7 and sends qualified enquiries directly to you—so you spend time closing deals, not answering basic questions." },
      { question: "Is this managed AI chatbot service suitable for real estate?", answer: "Absolutely. Our managed AI chatbot service is trained specifically for UK property. It handles enquiries, schedules viewings, and provides detailed property information around the clock." },
      { question: "Can the AI chatbot for small business UK access my property listings?", answer: "Yes, your AI chatbot for small business UK is trained on your property portfolio. When you add new properties or update existing ones, we update the AI's knowledge accordingly—all included in your subscription." },
      { question: "Will your 24/7 customer support chatbot work for both sales and lettings?", answer: "Yes, our 24/7 customer support chatbot can be configured to handle sales enquiries, rental enquiries, or both. It understands the different requirements and processes for each." },
      { question: "How affordable is this AI chatbot for real estate websites?", answer: "Starting from just £29/month, AIVized offers the most affordable AI chatbot for real estate websites in the UK. Compare that to hiring a receptionist at £28,000+ annually—the savings are substantial." },
      { question: "Is the chatbot GDPR compliant for handling property leads?", answer: "Yes. AIVized is fully GDPR compliant. All lead data is encrypted, stored securely in the UK, and handled according to property industry data protection requirements." }
    ],
    testimonial: {
      quote: "We're closing more deals because we're spending time with qualified buyers instead of answering basic questions. The AI handles the filtering—we handle the selling.",
      author: "Sarah",
      role: "Branch Manager",
      company: "Prestige Properties, Manchester"
    }
  },
  ecommerce: {
    slug: "ecommerce",
    industry: "E-Commerce & Retail",
    tagline: "AI for E-Commerce",
    heroTitle: "Turn Browsers Into Buyers",
    heroSubtitle: "Your AI shopping assistant answers product questions, handles order enquiries, and recovers abandoned carts 24/7—boosting conversions while you sleep.",
    description: "AI-powered customer service and sales support for online retailers, DTC brands, and e-commerce businesses across the UK.",
    problems: [
      { title: "Cart Abandonment", description: "70% of online shopping carts are abandoned. Unanswered questions at checkout are a leading cause." },
      { title: "Limited Support Hours", description: "Customers shop at all hours but support is only available 9-5. No response means lost sales." },
      { title: "Overwhelming Ticket Volume", description: "Support teams drown in repetitive questions about shipping, returns, and product specifications." },
      { title: "Inconsistent Customer Experience", description: "Different agents give different answers, damaging brand trust and increasing returns." }
    ],
    solutions: [
      { title: "Instant Product Answers", description: "Your AI answers product questions in seconds, keeping customers engaged and moving toward purchase." },
      { title: "24/7 Shopping Assistance", description: "Support customers whenever they shop—2pm or 2am—across all time zones and shopping habits." },
      { title: "Automated Order Support", description: "Handle 80% of order enquiries automatically—tracking, returns, exchanges—freeing your team for complex issues." },
      { title: "Consistent Brand Voice", description: "Every customer receives the same accurate, on-brand response, building trust and reducing returns." }
    ],
    features: [
      { title: "Product Intelligence", description: "Answer detailed questions about products, sizing, materials, and compatibility", icon: "Package" },
      { title: "Order Tracking", description: "Provide instant updates on order status, shipping, and delivery estimates", icon: "Truck" },
      { title: "Returns & Exchanges", description: "Guide customers through return processes and capture exchange requests", icon: "RotateCcw" },
      { title: "Stock Availability", description: "Answer real-time questions about product availability and restock dates", icon: "Box" },
      { title: "Upselling & Cross-selling", description: "Suggest complementary products based on customer interests", icon: "TrendingUp" },
      { title: "Cart Recovery", description: "Engage hesitant shoppers and answer last-minute purchase questions", icon: "ShoppingCart" }
    ],
    useCases: [
      "Fashion and apparel",
      "Electronics and tech",
      "Health and beauty",
      "Home and garden",
      "Food and beverage",
      "Subscription boxes",
      "Dropshipping stores",
      "Marketplace sellers"
    ],
    stats: [
      { value: "25%", label: "Increase in conversions" },
      { value: "80%", label: "Queries handled automatically" },
      { value: "60%", label: "Reduction in support tickets" },
      { value: "24/7", label: "Customer support" }
    ],
    faqs: [
      { question: "How does your lead generation chatbot UK reduce cart abandonment?", answer: "Our lead generation chatbot UK answers questions instantly at checkout—about shipping costs, delivery times, returns—removing the friction that causes 70% of abandoned carts. It captures leads and keeps customers engaged 24/7." },
      { question: "Is this an affordable AI chatbot for e-commerce websites?", answer: "Yes! Starting from £29/month, AIVized is the most affordable AI chatbot for e-commerce websites in the UK. Handle 80% of customer queries automatically without expensive support staff." },
      { question: "Can the managed AI chatbot service handle order tracking?", answer: "Our managed AI chatbot service provides general shipping information and captures order-specific queries for your team. For real-time tracking, we guide customers to your tracking page seamlessly." },
      { question: "How does the 24/7 customer support chatbot UK handle returns?", answer: "Your 24/7 customer support chatbot UK explains your returns policy, guides customers through the process, and captures return requests for your team to process—reducing support workload significantly." },
      { question: "Will this AI chatbot for small business UK match my brand voice?", answer: "Absolutely. We train your AI chatbot for small business UK to match your brand personality—whether casual, premium, or anything in between. Every response feels authentically you." },
      { question: "Does the chatbot integrate with Shopify, WooCommerce, or other platforms?", answer: "Our AI works via your website and doesn't require complex integrations. It captures enquiries and sends them to you, fitting into your existing workflow whether you use Shopify, WooCommerce, Magento, or custom platforms." }
    ],
    testimonial: {
      quote: "Our conversion rate jumped 25% after implementing AI Vized. Customers get instant answers to product questions instead of abandoning their carts to 'think about it'.",
      author: "James",
      role: "Founder",
      company: "Urban Lifestyle Co, Bristol"
    }
  }
};

export const getIndustryBySlug = (slug: string): IndustryData | undefined => {
  return industries[slug];
};

export const allIndustries = Object.values(industries);
