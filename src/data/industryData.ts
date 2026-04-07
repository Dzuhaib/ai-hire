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
    heroTitle: "Restaurant AI Chatbot That Never Misses a Reservation",
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
    heroTitle: "Real Estate AI Chatbot That Qualifies Leads 24/7",
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
    heroTitle: "E-Commerce AI Chatbot That Turns Browsers Into Buyers",
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
  },
  healthcare: {
    slug: "healthcare",
    industry: "Healthcare & Clinics",
    tagline: "AI for Healthcare",
    heroTitle: "Healthcare AI Chatbot That Never Misses a Patient Enquiry",
    heroSubtitle: "Your AI receptionist handles appointment requests, answers service questions, and captures new patient details 24/7—while your team focuses on delivering exceptional care.",
    description: "AI-powered appointment booking and patient communication for dental practices, GP surgeries, private clinics, and healthcare businesses across the UK.",
    problems: [
      { title: "Missed Calls During Appointments", description: "When staff are busy with patients, phones go unanswered. Every missed call could be a new patient worth £500+ annually." },
      { title: "Out-of-Hours Enquiries", description: "Patients search for healthcare providers evenings and weekends. Without 24/7 availability, they register with competitors." },
      { title: "Repetitive Admin Questions", description: "Reception staff waste hours answering the same questions about opening times, NHS vs private fees, and registration processes." },
      { title: "Patient No-Shows", description: "Missed appointments cost the NHS £1 billion annually. Private practices lose significant revenue to no-shows too." }
    ],
    solutions: [
      { title: "24/7 Patient Reception", description: "Your AI receptionist handles enquiries any time, booking requests and new patient registrations—even at midnight." },
      { title: "Instant Service Information", description: "Patients get immediate answers about treatments, fees, NHS availability, and registration without waiting on hold." },
      { title: "Automated Appointment Reminders", description: "Reduce no-shows with intelligent reminders and easy rebooking options for your patients." },
      { title: "New Patient Capture", description: "Never lose a potential patient—your AI captures details and registration interest 24/7." }
    ],
    features: [
      { title: "Appointment Requests", description: "Accept booking requests 24/7 and send them to your reception team", icon: "Calendar" },
      { title: "Treatment Info", description: "Answer questions about services, treatments, and pricing accurately", icon: "Heart" },
      { title: "New Patient Registration", description: "Capture new patient details and registration interest automatically", icon: "Users" },
      { title: "Emergency Triage", description: "Direct urgent cases to appropriate emergency services immediately", icon: "AlertTriangle" },
      { title: "Insurance & Fees", description: "Provide clear information about NHS, private fees, and insurance accepted", icon: "CreditCard" },
      { title: "Multi-Practice Support", description: "Direct patients to the right branch or specialist practitioner", icon: "Building" }
    ],
    useCases: [
      "Dental practices",
      "GP surgeries",
      "Private clinics",
      "Physiotherapy practices",
      "Opticians",
      "Veterinary clinics",
      "Cosmetic clinics",
      "Mental health practices"
    ],
    stats: [
      { value: "35%", label: "More new patients" },
      { value: "40%", label: "Fewer no-shows" },
      { value: "24/7", label: "Patient reception" },
      { value: "5 sec", label: "Average response time" }
    ],
    faqs: [
      { question: "How does a managed AI chatbot service help healthcare clinics?", answer: "Our managed AI chatbot service handles patient enquiries 24/7, captures new patient registrations, answers treatment questions, and reduces the admin burden on your reception team—all from £29/month." },
      { question: "Is this AI chatbot for small business UK suitable for dental practices?", answer: "Absolutely. Our AI chatbot for small business UK handles appointment requests, answers questions about treatments and fees, and captures new patient details—perfect for busy dental practices." },
      { question: "Can the lead generation chatbot UK handle sensitive medical enquiries?", answer: "Our lead generation chatbot UK provides general service information and captures patient details securely. It does not provide medical advice but directs urgent cases to appropriate services." },
      { question: "Is the 24/7 customer support chatbot UK GDPR compliant for patient data?", answer: "Yes. Our 24/7 customer support chatbot UK is fully GDPR compliant with bank-level encryption. Patient data is stored securely in the UK and handled according to healthcare data protection requirements." },
      { question: "How does this affordable AI chatbot for website reduce no-shows?", answer: "Our affordable AI chatbot for website sends appointment reminders and makes rebooking easy, reducing no-shows by up to 40% for healthcare practices." },
      { question: "Can the chatbot handle NHS and private patient enquiries separately?", answer: "Yes. Your managed AI chatbot can distinguish between NHS and private enquiries, providing appropriate information and directing patients to the right service pathway." }
    ],
    testimonial: {
      quote: "We've captured 35% more new patient registrations since adding AI Vized. The AI handles out-of-hours enquiries beautifully—patients love getting instant responses about our services.",
      author: "Dr Patel",
      role: "Practice Owner",
      company: "Smile Dental, Birmingham"
    }
  },
  legal: {
    slug: "legal",
    industry: "Legal & Law Firms",
    tagline: "AI for Law Firms",
    heroTitle: "Law Firm AI Chatbot That Captures Every Client Enquiry",
    heroSubtitle: "Your AI legal receptionist handles initial enquiries, qualifies potential clients, and captures case details 24/7—so your solicitors can focus on billable work.",
    description: "AI-powered client intake and enquiry management for solicitors, law firms, and legal practices across the UK.",
    problems: [
      { title: "Missed Client Calls", description: "When solicitors are in meetings or court, potential clients call competitors. First response wins in legal services." },
      { title: "Evening & Weekend Enquiries", description: "Legal emergencies don't wait for office hours. Domestic disputes, arrests, and accidents happen at all hours." },
      { title: "Unqualified Consultations", description: "Solicitors waste billable hours on initial consultations with prospects who can't afford services or need different expertise." },
      { title: "High Reception Costs", description: "Legal receptionists in the UK cost £24,000-£30,000+ annually, plus recruitment and training expenses." }
    ],
    solutions: [
      { title: "24/7 Client Intake", description: "Capture every potential client enquiry instantly, day or night. Never lose a case to a faster-responding competitor." },
      { title: "Intelligent Client Qualification", description: "Your AI asks the right questions to qualify prospects by case type, urgency, and budget before involving solicitors." },
      { title: "Professional First Impression", description: "Every enquiry receives a polished, professional response that reflects your firm's standards." },
      { title: "Cost-Effective Reception", description: "Replace expensive reception staffing with AI from £29/month—redirect savings to fee-earning work." }
    ],
    features: [
      { title: "Client Intake", description: "Capture case details, contact information, and urgency level automatically", icon: "FileText" },
      { title: "Case Qualification", description: "Pre-qualify clients by practice area, budget, and case merit", icon: "Filter" },
      { title: "Appointment Booking", description: "Schedule initial consultations based on solicitor availability", icon: "Calendar" },
      { title: "Practice Areas", description: "Direct enquiries to the right department—family, conveyancing, personal injury, etc.", icon: "Building" },
      { title: "Fee Guidance", description: "Provide general fee information and funding options to qualified prospects", icon: "CreditCard" },
      { title: "Confidentiality", description: "Handle all communications with legal-grade data protection and GDPR compliance", icon: "Shield" }
    ],
    useCases: [
      "High street solicitors",
      "Family law practices",
      "Conveyancing firms",
      "Personal injury lawyers",
      "Employment law specialists",
      "Criminal defence solicitors",
      "Immigration lawyers",
      "Commercial law firms"
    ],
    stats: [
      { value: "50%", label: "More qualified leads" },
      { value: "24/7", label: "Client intake" },
      { value: "£25k+", label: "Annual savings vs receptionist" },
      { value: "8 sec", label: "Average response time" }
    ],
    faqs: [
      { question: "How does a managed AI chatbot service help law firms?", answer: "Our managed AI chatbot service captures client enquiries 24/7, qualifies prospects by case type and budget, and schedules consultations—so your solicitors focus on billable work, not answering phones." },
      { question: "Is this AI chatbot for small business UK suitable for solicitors?", answer: "Yes. Our AI chatbot for small business UK is trained for legal intake—handling enquiries about practice areas, fees, and availability with the professionalism your firm requires." },
      { question: "Can the lead generation chatbot UK qualify legal clients?", answer: "Absolutely. Our lead generation chatbot UK asks about case type, urgency, budget, and location to ensure only qualified prospects reach your solicitors." },
      { question: "Is the 24/7 customer support chatbot UK compliant with SRA regulations?", answer: "Our 24/7 customer support chatbot UK provides general information only and does not give legal advice. All data is handled with GDPR compliance and legal-grade security." },
      { question: "How does this affordable AI chatbot for website handle confidential enquiries?", answer: "Our affordable AI chatbot for website uses bank-level encryption. All client communications are stored securely in the UK with strict data protection policies." },
      { question: "Can the chatbot direct enquiries to different practice areas?", answer: "Yes. Your managed AI chatbot identifies the type of legal matter and routes enquiries to the appropriate department—family, property, injury, criminal, or commercial." }
    ],
    testimonial: {
      quote: "We've increased qualified consultations by 50% while reducing reception costs. The AI captures evening and weekend enquiries we used to miss entirely.",
      author: "Richard",
      role: "Managing Partner",
      company: "Clarke & Associates, Leeds"
    }
  },
  fitness: {
    slug: "fitness",
    industry: "Fitness & Gyms",
    tagline: "AI for Fitness",
    heroTitle: "Gym & Fitness AI Chatbot That Converts More Enquiries",
    heroSubtitle: "Your AI fitness advisor handles membership enquiries, class bookings, and trial requests 24/7—turning curious browsers into committed members.",
    description: "AI-powered membership sales and customer service for gyms, personal trainers, yoga studios, and fitness businesses across the UK.",
    problems: [
      { title: "Lost Membership Enquiries", description: "Potential members browse gym websites at 10pm but can't get answers. By morning, they've joined a competitor." },
      { title: "Peak Time Reception Overload", description: "Reception staff are overwhelmed during busy periods—signing in members while potential new ones walk away." },
      { title: "Class Booking Confusion", description: "Members call repeatedly to check schedules, book classes, and ask about availability—tying up staff time." },
      { title: "Trial-to-Member Conversion", description: "Without proper follow-up, trial visitors often don't convert to full memberships." }
    ],
    solutions: [
      { title: "24/7 Membership Sales", description: "Your AI answers pricing, facility, and membership questions at any hour—capturing leads when motivation is highest." },
      { title: "Automated Class Info", description: "Provide instant schedule information, class descriptions, and availability without staff involvement." },
      { title: "Trial Booking Capture", description: "Convert website visitors into trial bookings automatically, with immediate confirmation and details." },
      { title: "Lead Follow-Up", description: "Capture every enquiry with contact details so your sales team can follow up with warm leads." }
    ],
    features: [
      { title: "Membership Info", description: "Answer questions about pricing, contracts, and membership options", icon: "CreditCard" },
      { title: "Class Schedules", description: "Provide real-time class information and booking guidance", icon: "Calendar" },
      { title: "Trial Bookings", description: "Capture trial session requests and send confirmations automatically", icon: "Users" },
      { title: "Facility Info", description: "Answer questions about equipment, amenities, parking, and opening hours", icon: "Building" },
      { title: "PT Enquiries", description: "Capture personal training enquiries and match with available trainers", icon: "TrendingUp" },
      { title: "Multi-Location", description: "Direct enquiries to the right gym location or studio", icon: "MapPin" }
    ],
    useCases: [
      "Commercial gyms",
      "Boutique fitness studios",
      "Yoga and pilates studios",
      "CrossFit boxes",
      "Personal training studios",
      "Swimming pools and leisure centres",
      "Martial arts academies",
      "Dance studios"
    ],
    stats: [
      { value: "30%", label: "More trial bookings" },
      { value: "45%", label: "Better trial conversion" },
      { value: "24/7", label: "Membership enquiries" },
      { value: "£0", label: "Per enquiry handled" }
    ],
    faqs: [
      { question: "How does a managed AI chatbot service help gyms and fitness businesses?", answer: "Our managed AI chatbot service handles membership enquiries, class information, and trial bookings 24/7. It captures leads when motivation is highest—even at 10pm when your gym might be unstaffed." },
      { question: "Is this AI chatbot for small business UK suitable for boutique fitness studios?", answer: "Absolutely. Our AI chatbot for small business UK works perfectly for yoga studios, pilates studios, CrossFit boxes, and any boutique fitness concept." },
      { question: "Can the lead generation chatbot UK handle class schedule questions?", answer: "Yes. Your lead generation chatbot UK provides class schedules, describes sessions, and guides potential members to the right classes for their goals." },
      { question: "How does the 24/7 customer support chatbot UK help with membership sales?", answer: "Our 24/7 customer support chatbot UK answers pricing questions, explains membership options, and captures trial bookings—converting website visitors into gym members around the clock." },
      { question: "Is this affordable AI chatbot for website good for personal trainers?", answer: "Yes. Our affordable AI chatbot for website captures PT enquiries, shares your availability, and qualifies leads by training goals—from just £29/month." },
      { question: "Can the chatbot handle multiple gym locations?", answer: "Yes. Your managed AI chatbot directs enquiries to the correct location, provides location-specific class schedules, and captures leads for each branch." }
    ],
    testimonial: {
      quote: "Trial bookings are up 30% since we added AI Vized. The chatbot captures those late-night 'I should join a gym' moments that we used to miss completely.",
      author: "Emma",
      role: "Studio Owner",
      company: "FlexFit Studios, Brighton"
    }
  },
  travel: {
    slug: "travel",
    industry: "Travel & Tourism",
    tagline: "AI for Travel",
    heroTitle: "Travel Agent AI Chatbot That Books More Holidays Automatically",
    heroSubtitle: "Your AI travel advisor handles destination enquiries, captures booking requests, and answers trip questions 24/7—turning dreamers into bookers while you sleep.",
    description: "AI-powered booking support and customer service for travel agents, tour operators, and tourism businesses across the UK.",
    problems: [
      { title: "Complex Enquiry Volume", description: "Travel enquiries are detailed and time-consuming. Each customer wants personalised recommendations, quotes, and itinerary help." },
      { title: "Seasonal Booking Surges", description: "January and summer bring massive enquiry spikes that overwhelm small travel teams." },
      { title: "After-Hours Research", description: "Customers research holidays in the evening. Without 24/7 responses, they book directly with OTAs instead." },
      { title: "Quote Follow-Up Gaps", description: "Without systematic follow-up, interested customers drift to competitors or online booking platforms." }
    ],
    solutions: [
      { title: "24/7 Destination Expertise", description: "Your AI answers destination questions, provides travel information, and captures booking interest at any hour." },
      { title: "Surge-Ready Service", description: "Handle January booking rushes and summer peaks without temporary staff—your AI scales instantly." },
      { title: "Instant Engagement", description: "Capture evening browsers before they default to online booking platforms." },
      { title: "Lead Qualification", description: "Pre-qualify travellers by destination, budget, dates, and party size before involving your team." }
    ],
    features: [
      { title: "Destination Info", description: "Answer questions about destinations, visa requirements, and travel advice", icon: "MapPin" },
      { title: "Quote Requests", description: "Capture detailed booking requests with dates, budget, and preferences", icon: "FileText" },
      { title: "Package Information", description: "Present holiday packages, tours, and special offers to interested travellers", icon: "Package" },
      { title: "Booking Support", description: "Handle post-booking questions about itineraries, documents, and requirements", icon: "Calendar" },
      { title: "Group Travel", description: "Manage group enquiries, hen/stag parties, and corporate travel requests", icon: "Users" },
      { title: "Reviews & Recommendations", description: "Share customer reviews and personalised destination recommendations", icon: "Star" }
    ],
    useCases: [
      "Independent travel agents",
      "Tour operators",
      "Holiday companies",
      "Adventure travel specialists",
      "Cruise specialists",
      "Corporate travel managers",
      "Wedding & honeymoon planners",
      "Activity holiday providers"
    ],
    stats: [
      { value: "40%", label: "More booking enquiries" },
      { value: "60%", label: "Faster response times" },
      { value: "24/7", label: "Travel advice" },
      { value: "3x", label: "More evening leads" }
    ],
    faqs: [
      { question: "How does a managed AI chatbot service help travel agents?", answer: "Our managed AI chatbot service captures holiday enquiries 24/7, answers destination questions, and qualifies travellers by budget, dates, and preferences—so your team focuses on creating perfect itineraries, not answering basic questions." },
      { question: "Is this AI chatbot for small business UK suitable for independent travel agents?", answer: "Absolutely. Our AI chatbot for small business UK is perfect for independent agents who can't afford 24/7 reception staff but need to compete with large OTAs." },
      { question: "Can the lead generation chatbot UK handle complex travel enquiries?", answer: "Our lead generation chatbot UK captures detailed requirements—destinations, dates, budgets, party sizes—and sends qualified leads to your team for personalised quotes." },
      { question: "How does the 24/7 customer support chatbot UK compete with online booking platforms?", answer: "Our 24/7 customer support chatbot UK engages customers instantly when they're browsing—before they default to impersonal online booking platforms. The personal touch starts from the first interaction." },
      { question: "Is this affordable AI chatbot for website good for tour operators?", answer: "Yes. Our affordable AI chatbot for website handles tour enquiries, presents itineraries, and captures booking requests—from just £29/month." },
      { question: "Can the chatbot handle ATOL and ABTA questions?", answer: "Yes. Your managed AI chatbot provides information about your ATOL/ABTA protection, giving customers confidence in booking with your travel business." }
    ],
    testimonial: {
      quote: "Evening enquiries have tripled since adding AI Vized. Customers research holidays at night—now we capture those leads instead of losing them to Booking.com.",
      author: "Lisa",
      role: "Director",
      company: "Horizon Travel, Edinburgh"
    }
  }
};

export const getIndustryBySlug = (slug: string): IndustryData | undefined => {
  return industries[slug];
};

export const allIndustries = Object.values(industries);
