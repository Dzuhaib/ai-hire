export interface IndustryData {
  slug: string;
  industry: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
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
    heroTitle: "Restaurant AI Chatbot for UK Businesses",
    heroSubtitle: "Your AI hostess handles bookings, answers menu questions, and captures guest details 24/7 while your staff focus on delivering exceptional dining experiences.",
    description: "AI-powered reservation management and customer service for restaurants, cafés, and hospitality businesses across the UK.",
    metaTitle: "Restaurant AI Chatbot for UK Businesses",
    metaDescription: "Get a managed restaurant AI chatbot from £29/mo. Automate reservations, menu enquiries, and guest table bookings 24/7. Fully installed by AIVized.",
    problems: [
      { title: "Missed Calls During Service", description: "When your restaurant is busy, phones go unanswered. Every missed call could be a lost booking worth £50-£500+." },
      { title: "Late-Night Booking Requests", description: "Customers want to book after 10pm when you're closed. Without 24/7 availability, they book with competitors instead." },
      { title: "Repetitive Questions", description: "Staff waste hours answering the same questions about opening times, parking, menus, and allergens, time better spent on guests." },
      { title: "No-Shows & Empty Tables", description: "Without proper confirmation systems, no-shows cost UK restaurants an average of £16 billion annually." }
    ],
    solutions: [
      { title: "24/7 Reservation Handling", description: "Your AI hostess takes bookings any time of day or night, confirming instantly and updating your calendar automatically." },
      { title: "Instant Menu & Allergen Info", description: "Customers get immediate answers about ingredients, allergens, and dietary options without waiting for staff." },
      { title: "Automated Booking Confirmations", description: "Reduce no-shows by 30% with automatic reminders and easy rebooking options for your guests." },
      { title: "Peak Time Capacity", description: "Handle unlimited enquiries during your busiest services, Friday nights, Sunday roasts, and special events." }
    ],
    features: [
      { title: "Smart Reservations", description: "Accept bookings 24/7 with intelligent table management and capacity awareness", icon: "Calendar" },
      { title: "Menu Intelligence", description: "Answer detailed questions about dishes, ingredients, and dietary requirements", icon: "UtensilsCrossed" },
      { title: "Special Events", description: "Handle group bookings, private dining enquiries, and event catering requests", icon: "PartyPopper" },
      { title: "Lead Capture", description: "Collect guest details and preferences to build your customer database", icon: "Users" },
      { title: "Multi-Location", description: "Direct guests to the right branch if you operate multiple venues", icon: "MapPin" },
      { title: "Integration Ready", description: "Works alongside your existing booking system with no technical changes needed", icon: "Plug" }
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
      { question: "How does a managed AI chatbot service help restaurants capture leads 24/7?", answer: "The chatbot sits on your website and takes reservations, answers menu questions, and collects guest contact details at any hour. During busy service hours or late at night when staff are unavailable, it continues working without interruption." },
      { question: "Is this an affordable AI chatbot for restaurant websites?", answer: "Plans start from £29 per month with a one-off £50 setup fee. There are no long-term contracts and a 3-day free trial is available." },
      { question: "Can your lead generation chatbot UK handle dietary and allergen questions?", answer: "Yes. We train the chatbot on your menu, ingredients, and allergen information during setup. It gives accurate answers to dietary queries without needing staff involvement." },
      { question: "Will this 24/7 customer support chatbot integrate with my booking system?", answer: "The AIVized chatbot works alongside your existing booking system. We configure the integration during setup so reservations flow through to your current process automatically." },
      { question: "What happens if a customer asks something the AI chatbot cannot answer?", answer: "The chatbot recognises when a question falls outside its knowledge and either collects the customer's contact details for a follow-up or escalates to you directly via email or your preferred channel." },
      { question: "Does this AI chatbot for small business UK work for takeaway orders?", answer: "Yes. The chatbot can guide customers through your takeaway menu, take order details, and pass them to your kitchen or POS system depending on your setup." }
    ],
    testimonial: {
      quote: "Since adding AIVized, we've captured 40% more reservations, especially those late-night bookings we used to miss completely. It's like having a host who never takes a break.",
      author: "Marco",
      role: "Owner",
      company: "Trattoria Milano, London"
    }
  },
  "real-estate": {
    slug: "real-estate",
    industry: "Real Estate & Property",
    tagline: "AI for Real Estate",
    heroTitle: "Real Estate AI Chatbot for UK Businesses",
    heroSubtitle: "Your AI property assistant handles enquiries, schedules viewings, and qualifies buyers 24/7, so you can focus on closing sales instead of answering repetitive questions.",
    description: "AI-powered lead qualification and customer service for estate agents, letting agents, and property developers across the UK.",
    metaTitle: "Real Estate AI Chatbot for UK Businesses",
    metaDescription: "Get a managed real estate AI chatbot from £29/mo. Capture qualified buyer leads, schedule property viewings, and answer FAQs 24/7. Fully installed.",
    problems: [
      { title: "Leads Go Cold Quickly", description: "Property buyers expect instant responses. A 30-minute delay can mean losing a hot lead to a faster competitor." },
      { title: "Weekend & Evening Enquiries", description: "Most property searches happen outside office hours, evenings and weekends when your office is closed." },
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
      { question: "How does a property AI chatbot capture leads 24/7?", answer: "The chatbot engages every visitor to your website, asks qualifying questions about their budget and requirements, and collects their contact details before passing them to an agent." },
      { question: "Can the AI chatbot schedule property viewings?", answer: "Yes. We configure the chatbot to offer available viewing slots and log appointments directly to your calendar or CRM." },
      { question: "Is the chatbot trained on my specific property listings?", answer: "During setup we train the chatbot on your current listings, price ranges, and locations so it answers accurately rather than giving generic responses." },
      { question: "What happens when a new property comes on the market?", answer: "You notify us of significant changes and we update the chatbot training. Regular monthly updates are included in all plans." },
      { question: "Does the chatbot work for letting agents and sales agents?", answer: "Yes. The chatbot handles both rental and sales enquiries and can be configured to ask different qualifying questions for each type of visitor." },
      { question: "Is this GDPR compliant for collecting buyer and tenant data?", answer: "Yes. AIVized is fully GDPR compliant. Data collected by the chatbot is handled in accordance with UK data protection requirements." }
    ],
    testimonial: {
      quote: "We're closing more deals because we're spending time with qualified buyers instead of answering basic questions. The AI handles the filtering. We handle the selling.",
      author: "Sarah",
      role: "Branch Manager",
      company: "Prestige Properties, Manchester"
    }
  },
  ecommerce: {
    slug: "ecommerce",
    industry: "E-Commerce & Retail",
    tagline: "AI for E-Commerce",
    heroTitle: "E-Commerce AI Chatbot for UK Businesses",
    heroSubtitle: "Your AI shopping assistant answers product questions, handles order enquiries, and recovers abandoned carts 24/7, boosting conversions while you sleep.",
    description: "AI-powered customer service and sales support for online retailers, DTC brands, and e-commerce businesses across the UK.",
    metaTitle: "E-Commerce AI Chatbot for UK Businesses",
    metaDescription: "Get a managed e-commerce AI chatbot from £29/mo. Answer product questions, recover abandoned carts, and track customer shipments 24/7. Fully installed.",
    problems: [
      { title: "Cart Abandonment", description: "70% of online shopping carts are abandoned. Unanswered questions at checkout are a leading cause." },
      { title: "Limited Support Hours", description: "Customers shop at all hours but support is only available 9-5. No response means lost sales." },
      { title: "Overwhelming Ticket Volume", description: "Support teams drown in repetitive questions about shipping, returns, and product specifications." },
      { title: "Inconsistent Customer Experience", description: "Different agents give different answers, damaging brand trust and increasing returns." }
    ],
    solutions: [
      { title: "Instant Product Answers", description: "Your AI answers product questions in seconds, keeping customers engaged and moving toward purchase." },
      { title: "24/7 Shopping Assistance", description: "Support customers whenever they shop, whether 2pm or 2am, across all time zones and shopping habits." },
      { title: "Automated Order Support", description: "Handle 80% of order enquiries automatically, including tracking, returns, and exchanges, freeing your team for complex issues." },
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
      { question: "How does an AI chatbot reduce cart abandonment?", answer: "The chatbot proactively engages visitors who spend time on product or checkout pages, answers their questions about shipping, returns, and sizing, and removes the hesitation that causes abandonment." },
      { question: "Can the chatbot track orders for customers?", answer: "Yes. We can integrate the chatbot with your order management system so customers get real-time order status without contacting support." },
      { question: "What ecommerce platforms does AIVized support?", answer: "AIVized works with Shopify, WooCommerce, Magento, and custom-built stores. We handle the technical integration during setup." },
      { question: "Will the chatbot know about my product range and pricing?", answer: "Yes. We train it on your product catalogue, pricing, and any current promotions before it goes live." },
      { question: "Can the chatbot handle returns and refund queries?", answer: "Yes. We configure it with your returns policy so it answers refund and exchange questions accurately and consistently." },
      { question: "How does the chatbot help with product recommendations?", answer: "Based on what a visitor is browsing or asking about, the chatbot can suggest related products and guide them toward a purchase." }
    ],
    testimonial: {
      quote: "Our conversion rate jumped 25% after implementing AIVized. Customers get instant answers to product questions instead of abandoning their carts to 'think about it'.",
      author: "James",
      role: "Founder",
      company: "Urban Lifestyle Co, Bristol"
    }
  },
  healthcare: {
    slug: "healthcare",
    industry: "Healthcare & Clinics",
    tagline: "AI for Healthcare",
    heroTitle: "Healthcare AI Chatbot for UK Businesses",
    heroSubtitle: "Your AI receptionist handles appointment requests, answers service questions, and captures new patient details 24/7 while your team focuses on delivering exceptional care.",
    description: "AI-powered appointment booking and patient communication for dental practices, GP surgeries, private clinics, and healthcare businesses across the UK.",
    metaTitle: "Healthcare AI Chatbot for UK Businesses",
    metaDescription: "Get a managed healthcare AI chatbot from £29/mo. Handle patient registration, clinic booking requests, and treatment queries 24/7. Fully installed.",
    problems: [
      { title: "Missed Calls During Appointments", description: "When staff are busy with patients, phones go unanswered. Every missed call could be a new patient worth £500+ annually." },
      { title: "Out-of-Hours Enquiries", description: "Patients search for healthcare providers evenings and weekends. Without 24/7 availability, they register with competitors." },
      { title: "Repetitive Admin Questions", description: "Reception staff waste hours answering the same questions about opening times, NHS vs private fees, and registration processes." },
      { title: "Patient No-Shows", description: "Missed appointments cost the NHS £1 billion annually. Private practices lose significant revenue to no-shows too." }
    ],
    solutions: [
      { title: "24/7 Patient Reception", description: "Your AI receptionist handles enquiries any time, booking requests and new patient registrations, even at midnight." },
      { title: "Instant Service Information", description: "Patients get immediate answers about treatments, fees, NHS availability, and registration without waiting on hold." },
      { title: "Automated Appointment Reminders", description: "Reduce no-shows with intelligent reminders and easy rebooking options for your patients." },
      { title: "New Patient Capture", description: "Never lose a potential patient. Your AI captures details and registration interest 24/7." }
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
      { question: "Can the AI chatbot book patient appointments?", answer: "Yes. We configure the chatbot to offer available appointment slots and collect patient details. It does not provide medical advice and handles administrative enquiries only." },
      { question: "Is the chatbot GDPR compliant for patient data?", answer: "Yes. AIVized is fully GDPR compliant and handles all patient data in accordance with UK data protection law. No sensitive medical information is stored by the chatbot." },
      { question: "What kinds of questions will the healthcare chatbot answer?", answer: "It handles appointment availability, clinic opening hours, location and parking, fees and payment methods, and general service information. It does not give medical diagnosis or advice." },
      { question: "Does the chatbot work for both NHS and private healthcare?", answer: "Yes. We configure the chatbot based on your specific service model, whether you are a private clinic, dental practice, physiotherapy centre, or similar." },
      { question: "What happens if a patient describes a medical emergency?", answer: "The chatbot is configured to immediately direct emergency situations to 999 or 111 and escalate to your staff. This is a mandatory part of our healthcare setup." },
      { question: "How do we update the chatbot when our services or fees change?", answer: "Contact us and we update the training within your monthly maintenance window. Urgent updates are handled within 24 hours on all plans." }
    ],
    testimonial: {
      quote: "We've captured 35% more new patient registrations since adding AIVized. The AI handles out-of-hours enquiries beautifully. Patients love getting instant responses about our services.",
      author: "Dr Patel",
      role: "Practice Owner",
      company: "Smile Dental, Birmingham"
    }
  },
  legal: {
    slug: "legal",
    industry: "Legal & Law Firms",
    tagline: "AI for Law Firms",
    heroTitle: "Legal AI Chatbot for UK Law Firms & Solicitors",
    heroSubtitle: "Your AI legal receptionist handles initial enquiries, qualifies potential clients, and captures case details 24/7, so your solicitors can focus on billable work.",
    description: "AI-powered client intake and enquiry management for solicitors, law firms, and legal practices across the UK.",
    metaTitle: "Legal AI Chatbot for UK Law Firms & Solicitors",
    metaDescription: "Get a managed legal AI chatbot for UK law firms from £29/mo. Capture case prospects, qualify enquiries, and schedule consultations 24/7. Installed.",
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
      { title: "Cost-Effective Reception", description: "Replace expensive reception staffing with AI from £29/month and redirect savings to fee-earning work." }
    ],
    features: [
      { title: "Client Intake", description: "Capture case details, contact information, and urgency level automatically", icon: "FileText" },
      { title: "Case Qualification", description: "Pre-qualify clients by practice area, budget, and case merit", icon: "Filter" },
      { title: "Appointment Booking", description: "Schedule initial consultations based on solicitor availability", icon: "Calendar" },
      { title: "Practice Areas", description: "Direct enquiries to the right department: family, conveyancing, personal injury, and more", icon: "Building" },
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
      { question: "Can an AI chatbot handle client enquiries for a law firm?", answer: "Yes. The chatbot captures initial enquiry details, asks qualifying questions about the legal matter, and collects contact information for a solicitor to follow up. It does not provide legal advice." },
      { question: "Is the chatbot compliant with Solicitors Regulation Authority guidelines?", answer: "AIVized chatbots for law firms are configured to make clear they are AI assistants and do not provide legal advice. We recommend reviewing the setup with your compliance officer before going live." },
      { question: "What legal enquiry types can the chatbot handle?", answer: "Initial contact for conveyancing, family law, employment disputes, personal injury, wills and probate, and commercial matters. It qualifies the enquiry and passes it to the right team." },
      { question: "How does the chatbot handle sensitive client information?", answer: "All data collected is GDPR compliant. The chatbot collects only what is necessary for initial contact and passes it securely to your team." },
      { question: "Can the chatbot qualify leads based on case type and location?", answer: "Yes. We configure qualifying questions based on your practice areas and geographic coverage so only relevant leads reach your solicitors." },
      { question: "What happens out of hours when no one is available?", answer: "The chatbot collects the enquiry details and sends them to your team for follow-up the next working day. No potential client is lost due to out-of-hours contact." }
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
    heroTitle: "Fitness AI Chatbot for UK Gyms & Studios",
    heroSubtitle: "Your AI fitness advisor handles membership enquiries, class bookings, and trial requests 24/7, turning curious browsers into committed members.",
    description: "AI-powered membership sales and customer service for gyms, personal trainers, yoga studios, and fitness businesses across the UK.",
    metaTitle: "Fitness AI Chatbot for UK Gyms & Studios",
    metaDescription: "Get a managed fitness AI chatbot from £29/mo. Handle gym membership enquiries, class bookings, and free pass sign-ups 24/7. Fully installed by AIVized.",
    problems: [
      { title: "Lost Membership Enquiries", description: "Potential members browse gym websites at 10pm but can't get answers. By morning, they've joined a competitor." },
      { title: "Peak Time Reception Overload", description: "Reception staff are overwhelmed during busy periods, signing in members while potential new ones walk away." },
      { title: "Class Booking Confusion", description: "Members call repeatedly to check schedules, book classes, and ask about availability, tying up staff time." },
      { title: "Trial-to-Member Conversion", description: "Without proper follow-up, trial visitors often don't convert to full memberships." }
    ],
    solutions: [
      { title: "24/7 Membership Sales", description: "Your AI answers pricing, facility, and membership questions at any hour, capturing leads when motivation is highest." },
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
      { question: "Can the AI chatbot handle gym membership enquiries?", answer: "Yes. It answers questions about membership tiers, pricing, joining process, and class schedules. It can also collect contact details from interested prospects." },
      { question: "Can the chatbot book fitness classes and personal training sessions?", answer: "Yes. We integrate with your booking system so the chatbot shows available slots and takes bookings automatically." },
      { question: "Will the chatbot know about my class timetable?", answer: "Yes. We train the chatbot on your current class schedule during setup. You notify us of schedule changes and we update it as part of your monthly maintenance." },
      { question: "Can it handle enquiries about personal trainers and coaching?", answer: "Yes. The chatbot can describe each trainer's specialisation, availability, and pricing and direct the visitor to book a consultation." },
      { question: "Does AIVized work for independent gyms as well as chains?", answer: "Yes. Plans start from £29 per month, making it accessible for independent studios, boutique gyms, and personal training businesses." },
      { question: "How does the chatbot help reduce member churn?", answer: "By providing fast, consistent responses to member queries and making it easy to rebook or reschedule, the chatbot removes friction that often leads to membership cancellation." }
    ],
    testimonial: {
      quote: "Trial bookings are up 30% since we added AIVized. The chatbot captures those late-night 'I should join a gym' moments that we used to miss completely.",
      author: "Emma",
      role: "Studio Owner",
      company: "FlexFit Studios, Brighton"
    }
  },
  travel: {
    slug: "travel",
    industry: "Travel & Tourism",
    tagline: "AI for Travel",
    heroTitle: "Travel AI Chatbot for UK Holiday Agencies",
    heroSubtitle: "Your AI travel advisor handles destination enquiries, captures booking requests, and answers trip questions 24/7, turning dreamers into bookers while you sleep.",
    description: "AI-powered booking support and customer service for travel agents, tour operators, and tourism businesses across the UK.",
    metaTitle: "Travel AI Chatbot for UK Holiday Agencies",
    metaDescription: "Get a managed travel AI chatbot from £29/mo. Qualify holiday bookings, answer package questions, and capture tourist leads 24/7. Fully installed.",
    problems: [
      { title: "Complex Enquiry Volume", description: "Travel enquiries are detailed and time-consuming. Each customer wants personalised recommendations, quotes, and itinerary help." },
      { title: "Seasonal Booking Surges", description: "January and summer bring massive enquiry spikes that overwhelm small travel teams." },
      { title: "After-Hours Research", description: "Customers research holidays in the evening. Without 24/7 responses, they book directly with OTAs instead." },
      { title: "Quote Follow-Up Gaps", description: "Without systematic follow-up, interested customers drift to competitors or online booking platforms." }
    ],
    solutions: [
      { title: "24/7 Destination Expertise", description: "Your AI answers destination questions, provides travel information, and captures booking interest at any hour." },
      { title: "Surge-Ready Service", description: "Handle January booking rushes and summer peaks without temporary staff. Your AI scales instantly." },
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
      { question: "Can the AI chatbot help customers enquire about holiday packages?", answer: "Yes. It handles questions about destinations, pricing, availability, and package inclusions and collects the customer's details for a travel consultant to follow up." },
      { question: "Can the chatbot take booking requests?", answer: "Yes. It collects booking intent and traveller details and passes them to your team for confirmation. For fully automated booking it integrates with your booking system." },
      { question: "What kinds of travel businesses use AIVized?", answer: "Independent travel agencies, tour operators, hotel chains, and holiday rental businesses across the UK." },
      { question: "Can the chatbot handle visa and documentation questions?", answer: "It provides general destination information and directs customers to official sources for visa requirements. It does not provide legal or immigration advice." },
      { question: "Does the chatbot work in multiple languages for international travellers?", answer: "The chatbot is trained in English by default. Additional language support can be configured on request." },
      { question: "How does the chatbot handle urgent customer issues like flight cancellations?", answer: "For urgent situations it escalates immediately to your team via email notification. It collects the customer's contact details so they are not left waiting for a response." }
    ],
    testimonial: {
      quote: "Evening enquiries have tripled since adding AIVized. Customers research holidays at night. Now we capture those leads instead of losing them to Booking.com.",
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
