export interface LocationData {
  slug: string;
  city: string;
  region: string;
  population: string;
  description: string;
  mapEmbedUrl: string;
  heroTagline: string;
  heroSubtext: string;
  problems: Array<{ title: string; description: string }>;
  solutions: Array<{ title: string; description: string }>;
  whyChooseUs: string[];
  serviceAreas: string[];
  cityDescription: string;
  faqs: Array<{ question: string; answer: string }>;
  coordinates: { lat: number; lng: number };
  relatedBlogSlug?: string;
}

const mapUrl = (city: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(city)}&t=&z=11&ie=UTF8&iwloc=&output=embed`;

export const uaeLocations: LocationData[] = [
  {
    slug: "dubai",
    city: "Dubai",
    region: "Dubai",
    population: "3.7 million",
    description:
      "AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for Dubai businesses.",
    mapEmbedUrl: mapUrl("Dubai, United Arab Emirates"),
    heroTagline: "AI, Automation & Digital Services in Dubai",
    heroSubtext:
      "One partner for AI systems, automations, search visibility, marketing, websites, and custom software. Built for Dubai businesses that want practical improvements and clear scope.",
    problems: [
      {
        title: "Many suppliers, no single owner",
        description:
          "Agencies, developers, and tool vendors often work in isolation, leaving gaps between the website, CRM, marketing, and internal operations.",
      },
      {
        title: "Manual work slows growth",
        description:
          "Enquiries, follow-ups, onboarding, reporting, and repetitive admin still depend on people copying data between disconnected systems.",
      },
      {
        title: "High expectations, short attention",
        description:
          "Dubai customers compare options quickly. Slow replies, weak search visibility, or a confusing website send them to a competitor.",
      },
      {
        title: "Tools that do not talk to each other",
        description:
          "A growing stack of subscriptions can create more work than it removes when nothing is integrated properly.",
      },
    ],
    solutions: [
      {
        title: "One connected roadmap",
        description:
          "We look at the whole business, then prioritise the AI, automation, search, marketing, or software work that removes the biggest bottleneck first.",
      },
      {
        title: "Automation around your process",
        description:
          "Enquiries, follow-ups, onboarding, and reporting can be automated without forcing your team into an unfamiliar workflow.",
      },
      {
        title: "Search and content that compound",
        description:
          "Technical SEO, content, GEO, and paid campaigns work together to reach people who are already looking for what you offer.",
      },
      {
        title: "A digital foundation that fits",
        description:
          "Fast websites, booking flows, integrations, and custom desktop tools built around how your business actually operates.",
      },
    ],
    whyChooseUs: [
      "Six connected services instead of several disconnected suppliers",
      "A written scope, timeline, and price before work starts",
      "Direct access to the people doing the work",
      "Systems built to fit your existing website, CRM, and internal tools",
      "Clear documentation and a clean handover, so you are never locked in",
    ],
    serviceAreas: [
      "Dubai Marina",
      "Downtown Dubai",
      "Business Bay",
      "Jumeirah Lake Towers",
      "DIFC",
      "Deira",
      "Bur Dubai",
      "Jumeirah",
      "Al Barsha",
      "Dubai Silicon Oasis",
      "Dubai Hills",
      "Al Quoz",
      "International City",
      "Discovery Gardens",
    ],
    cityDescription:
      "Dubai is one of the most connected business markets in the world, with customers, investors, and partners spread across every time zone. Companies here compete on speed, service quality, and how well their digital systems work together. AIVized helps Dubai businesses connect AI, automation, search, marketing, and software into one practical operating system for growth.",
    faqs: [
      {
        question: "What services does AIVized offer in Dubai?",
        answer:
          "We provide AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development. You can start with one service or combine several into a single roadmap.",
      },
      {
        question: "Do you work on-site in Dubai?",
        answer:
          "Projects are delivered remotely, with scheduled calls and clear checkpoints. We work with businesses across Dubai and the wider UAE without requiring you to rearrange your week around travel.",
      },
      {
        question: "Can you work with our existing website and tools?",
        answer:
          "Usually, yes. We regularly work with existing websites, CRMs, booking systems, and internal tools. If something is genuinely holding you back, we will explain why rather than forcing an unnecessary rebuild.",
      },
      {
        question: "How does a project start?",
        answer:
          "It starts with a discovery call. We look at what is slowing the business down, recommend the shortest path to a useful result, and send a written scope, timeline, and price before any work begins.",
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. Optional managed support covers monitoring, maintenance, updates, and continuous improvement. Support is not a condition of working with us.",
      },
    ],
    coordinates: { lat: 25.2048, lng: 55.2708 },
    relatedBlogSlug: "ai-agency-dubai",
  },
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    region: "Abu Dhabi",
    population: "1.5 million",
    description:
      "AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for Abu Dhabi businesses.",
    mapEmbedUrl: mapUrl("Abu Dhabi, United Arab Emirates"),
    heroTagline: "AI, Automation & Digital Services in Abu Dhabi",
    heroSubtext:
      "One partner for AI systems, automations, search visibility, marketing, websites, and custom software. Built for Abu Dhabi organisations that need practical, accountable delivery.",
    problems: [
      {
        title: "Complex approval and delivery cycles",
        description:
          "Large organisations and growing businesses need suppliers who can work to a clear scope, document decisions, and keep momentum without constant hand-holding.",
      },
      {
        title: "Data trapped in separate systems",
        description:
          "When enquiries, operations, and reporting live in different tools, teams spend their time moving information instead of using it.",
      },
      {
        title: "Digital presence lags the business",
        description:
          "A strong reputation offline does not automatically translate into search visibility, a convincing website, or a smooth enquiry process online.",
      },
      {
        title: "Limited internal technical capacity",
        description:
          "Hiring a full in-house team for every project is not practical. Businesses need senior delivery without adding permanent overhead.",
      },
    ],
    solutions: [
      {
        title: "Clear scope and documentation",
        description:
          "Every project starts with a written scope, timeline, and price, with decisions documented so internal stakeholders stay aligned.",
      },
      {
        title: "Integrated systems",
        description:
          "We connect the website, CRM, internal tools, and reporting so information flows without manual copying.",
      },
      {
        title: "Search, content, and marketing",
        description:
          "Technical SEO, GEO, content, and campaigns are planned together to build visibility that supports the commercial goal.",
      },
      {
        title: "Flexible delivery capacity",
        description:
          "Access senior strategy, design, development, and support without building a permanent department for a single project.",
      },
    ],
    whyChooseUs: [
      "A written scope, timeline, and price before work starts",
      "Direct access to the people doing the work",
      "Systems built to fit existing websites, CRMs, and internal tools",
      "Clear documentation and a clean handover",
      "Optional ongoing support for monitoring and improvement",
    ],
    serviceAreas: [
      "Abu Dhabi Island",
      "Al Maryah Island",
      "Al Reem Island",
      "Khalifa City",
      "Al Khalidiyah",
      "The Corniche",
      "Yas Island",
      "Saadiyat Island",
      "Mussafah",
      "Masdar City",
      "Al Raha",
      "Al Shamkha",
    ],
    cityDescription:
      "Abu Dhabi combines a large public sector, a growing private sector, and a strong focus on long-term investment. Organisations here value suppliers who can document their work, integrate with existing systems, and deliver without unnecessary disruption. AIVized supports Abu Dhabi businesses with AI, automation, search, marketing, and software delivered to a clear scope.",
    faqs: [
      {
        question: "What services does AIVized offer in Abu Dhabi?",
        answer:
          "We provide AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development, delivered as standalone projects or as a connected roadmap.",
      },
      {
        question: "Do you work on-site in Abu Dhabi?",
        answer:
          "Projects are delivered remotely with scheduled calls, reviews, and handover sessions. We support organisations across Abu Dhabi and the wider UAE.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Yes, where the systems expose an API or a practical integration path. We review the current stack during discovery and recommend the least disruptive approach.",
      },
      {
        question: "How is pricing handled?",
        answer:
          "After discovery we provide a fixed written quote for the agreed scope. Ongoing support and retainers are optional and priced separately.",
      },
      {
        question: "Do you provide documentation and handover?",
        answer:
          "Yes. Every project includes clear documentation and a handover so your team understands how the system works and is not dependent on us for routine changes.",
      },
    ],
    coordinates: { lat: 24.4539, lng: 54.3773 },
  },
  {
    slug: "sharjah",
    city: "Sharjah",
    region: "Sharjah",
    population: "1.8 million",
    description:
      "AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for Sharjah businesses.",
    mapEmbedUrl: mapUrl("Sharjah, United Arab Emirates"),
    heroTagline: "AI, Automation & Digital Services in Sharjah",
    heroSubtext:
      "One partner for AI systems, automations, search visibility, marketing, websites, and custom software. Built for Sharjah businesses that want practical improvements and clear scope.",
    problems: [
      {
        title: "Strong local competition",
        description:
          "Sharjah businesses compete with nearby Dubai suppliers as well as local operators, making response speed and a credible digital presence essential.",
      },
      {
        title: "Repetitive enquiries",
        description:
          "Teams answer the same questions about availability, pricing, delivery, and services instead of focusing on higher-value work.",
      },
      {
        title: "Disconnected sales and operations",
        description:
          "Enquiries from the website, social media, and phone often sit in different places, making follow-up inconsistent.",
      },
      {
        title: "Website underperforms",
        description:
          "A site that looks acceptable but loads slowly, ranks poorly, or makes enquiry difficult quietly limits growth.",
      },
    ],
    solutions: [
      {
        title: "Respond faster without adding staff",
        description:
          "AI systems and automations handle routine enquiries, follow-ups, and internal handoffs so the team can focus on customers who need a person.",
      },
      {
        title: "One view of the customer",
        description:
          "We connect enquiry channels and internal tools so leads and customer details are not lost between systems.",
      },
      {
        title: "Local and regional visibility",
        description:
          "Technical SEO, content, and GEO help the business appear when people search for relevant services in Sharjah and the wider UAE.",
      },
      {
        title: "A website that supports sales",
        description:
          "Clear structure, fast pages, and simple enquiry flows make it easier for customers to understand the offer and take the next step.",
      },
    ],
    whyChooseUs: [
      "A written scope, timeline, and price before work starts",
      "Six connected services instead of several disconnected suppliers",
      "Direct access to the people doing the work",
      "Systems built to fit existing tools and workflows",
      "Optional ongoing support after launch",
    ],
    serviceAreas: [
      "Al Majaz",
      "Al Qasimia",
      "Al Nahda",
      "Al Khan",
      "Muwaileh",
      "University City",
      "Al Taawun",
      "Al Mamzar",
      "Sharjah City Centre",
      "Aljada",
      "Industrial Area",
      "Rolla",
    ],
    cityDescription:
      "Sharjah has a broad mix of established family businesses, education providers, industrial operators, and a growing creative sector. Many companies here are investing in digital systems for the first time, or replacing tools that no longer fit. AIVized helps Sharjah businesses improve enquiry handling, visibility, and internal operations without overcomplicating the technology.",
    faqs: [
      {
        question: "What services does AIVized offer in Sharjah?",
        answer:
          "We provide AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development, either individually or as a connected roadmap.",
      },
      {
        question: "Do you work on-site in Sharjah?",
        answer:
          "Delivery is remote, with scheduled calls and reviews. We work with businesses across Sharjah and the wider UAE.",
      },
      {
        question: "Can you help a small business with a limited budget?",
        answer:
          "Yes. We scope the smallest useful piece first, so you can see a result before committing to a larger programme of work.",
      },
      {
        question: "Will the work fit our existing website?",
        answer:
          "In many cases, yes. We review the current site and tools during discovery and only recommend a rebuild when the existing setup is genuinely limiting performance.",
      },
      {
        question: "Do you offer support after launch?",
        answer:
          "Yes. Optional support covers monitoring, maintenance, updates, and improvements. It is not a condition of working with us.",
      },
    ],
    coordinates: { lat: 25.3463, lng: 55.4209 },
  },
  {
    slug: "ajman",
    city: "Ajman",
    region: "Ajman",
    population: "600,000",
    description:
      "AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for Ajman businesses.",
    mapEmbedUrl: mapUrl("Ajman, United Arab Emirates"),
    heroTagline: "AI, Automation & Digital Services in Ajman",
    heroSubtext:
      "One partner for AI systems, automations, search visibility, marketing, websites, and custom software. Built for Ajman businesses that want practical improvements and clear scope.",
    problems: [
      {
        title: "Compete with larger neighbours",
        description:
          "Businesses in Ajman often compete with better-resourced operators in Dubai and Sharjah, making efficiency and response speed important.",
      },
      {
        title: "Manual follow-up",
        description:
          "Enquiries arrive through several channels, but follow-up depends on someone remembering to check each one.",
      },
      {
        title: "Low search visibility",
        description:
          "Good local businesses can be hard to find online when their website lacks structure, content, and technical foundations.",
      },
      {
        title: "Limited technical resources",
        description:
          "Not every business needs an in-house technology team, but most need systems that work reliably without constant attention.",
      },
    ],
    solutions: [
      {
        title: "Efficient operations",
        description:
          "Automations handle repetitive enquiries, follow-ups, and internal admin so a smaller team can support more customers.",
      },
      {
        title: "Consistent lead handling",
        description:
          "We connect enquiry channels so leads are captured, assigned, and followed up without manual copying.",
      },
      {
        title: "Search foundations",
        description:
          "Technical SEO, content, and local signals help Ajman businesses appear for the services people are actively searching for.",
      },
      {
        title: "Practical software",
        description:
          "Websites, booking flows, and internal tools are built around the way the business already works, not the other way around.",
      },
    ],
    whyChooseUs: [
      "A written scope, timeline, and price before work starts",
      "Direct access to the people doing the work",
      "Systems built to fit existing tools and workflows",
      "Clear documentation and a clean handover",
      "Optional ongoing support after launch",
    ],
    serviceAreas: [
      "Ajman City Centre",
      "Al Nuaimiya",
      "Al Rashidiya",
      "Ajman Corniche",
      "Al Jurf",
      "Al Hamidiyah",
      "Mushairef",
      "Al Rawda",
      "Emirates City",
      "Al Mowaihat",
    ],
    cityDescription:
      "Ajman is a compact, practical business market with a strong base of trading companies, service businesses, and family-run operations. Companies here often need straightforward improvements that reduce manual work and make it easier for customers to find and contact them. AIVized supports Ajman businesses with focused AI, automation, marketing, and software projects.",
    faqs: [
      {
        question: "What services does AIVized offer in Ajman?",
        answer:
          "We provide AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development.",
      },
      {
        question: "Do you work on-site in Ajman?",
        answer:
          "Delivery is remote with scheduled calls and reviews. We support businesses across Ajman and the wider UAE.",
      },
      {
        question: "Can we start with a small project?",
        answer:
          "Yes. Many clients start with a single automation, a website improvement, or a focused SEO review before committing to a larger roadmap.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Smaller automation and website projects can be live in a few weeks. Larger systems typically take four to twelve weeks, depending on scope and integrations.",
      },
      {
        question: "Is ongoing support required?",
        answer:
          "No. Support is optional. Some clients prefer a clean handover and manage the system internally; others choose a monthly support arrangement.",
      },
    ],
    coordinates: { lat: 25.4052, lng: 55.5136 },
  },
  {
    slug: "ras-al-khaimah",
    city: "Ras Al Khaimah",
    region: "Ras Al Khaimah",
    population: "400,000",
    description:
      "AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for Ras Al Khaimah businesses.",
    mapEmbedUrl: mapUrl("Ras Al Khaimah, United Arab Emirates"),
    heroTagline: "AI, Automation & Digital Services in Ras Al Khaimah",
    heroSubtext:
      "One partner for AI systems, automations, search visibility, marketing, websites, and custom software. Built for Ras Al Khaimah businesses that want practical improvements and clear scope.",
    problems: [
      {
        title: "Seasonal demand",
        description:
          "Tourism, hospitality, and service businesses see sharp peaks and quiet periods, making flexible enquiry handling important.",
      },
      {
        title: "Enquiries outside working hours",
        description:
          "Guests and customers often research and book in the evening, when a small team is no longer available to respond.",
      },
      {
        title: "Growing competition",
        description:
          "As the emirate attracts more visitors and investment, businesses need a credible digital presence to stand out.",
      },
      {
        title: "Fragmented customer data",
        description:
          "Bookings, enquiries, and follow-ups can sit in separate tools, making it difficult to see the full customer journey.",
      },
    ],
    solutions: [
      {
        title: "Handle peak demand",
        description:
          "AI systems and automations answer routine questions and capture enquiries when the team is busy or closed.",
      },
      {
        title: "Smoother booking journeys",
        description:
          "Websites, booking flows, and integrations reduce friction between interest and a confirmed booking.",
      },
      {
        title: "Visibility for a growing market",
        description:
          "SEO, content, and GEO help the business reach people researching Ras Al Khaimah services and experiences.",
      },
      {
        title: "Connected operations",
        description:
          "We connect enquiry channels and internal tools so customer details and follow-ups are not lost.",
      },
    ],
    whyChooseUs: [
      "A written scope, timeline, and price before work starts",
      "Direct access to the people doing the work",
      "Systems built to fit existing tools and workflows",
      "Clear documentation and a clean handover",
      "Optional ongoing support after launch",
    ],
    serviceAreas: [
      "Ras Al Khaimah City",
      "Al Hamra Village",
      "Mina Al Arab",
      "Marjan Island",
      "Julfar",
      "Dafan Al Nakheel",
      "Khuzam",
      "Al Nakheel",
      "Al Dhait",
      "Kharan",
    ],
    cityDescription:
      "Ras Al Khaimah combines a growing tourism and hospitality sector with established trading, industrial, and professional service businesses. Demand can be seasonal, but customer expectations remain consistent all year. AIVized helps businesses in Ras Al Khaimah improve enquiry handling, booking journeys, visibility, and internal operations with practical digital systems.",
    faqs: [
      {
        question: "What services does AIVized offer in Ras Al Khaimah?",
        answer:
          "We provide AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development.",
      },
      {
        question: "Do you work on-site in Ras Al Khaimah?",
        answer:
          "Delivery is remote with scheduled calls and reviews. We support businesses across Ras Al Khaimah and the wider UAE.",
      },
      {
        question: "Can you help hospitality and tourism businesses?",
        answer:
          "Yes. We build enquiry handling, booking flows, and marketing systems for hospitality, tourism, and service businesses that need to respond outside standard hours.",
      },
      {
        question: "How do you price projects?",
        answer:
          "After discovery we provide a fixed written quote for the agreed scope. Ongoing support and retainers are optional.",
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. Optional support covers monitoring, maintenance, updates, and improvement.",
      },
    ],
    coordinates: { lat: 25.8007, lng: 55.9762 },
  },
  {
    slug: "fujairah",
    city: "Fujairah",
    region: "Fujairah",
    population: "300,000",
    description:
      "AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for Fujairah businesses.",
    mapEmbedUrl: mapUrl("Fujairah, United Arab Emirates"),
    heroTagline: "AI, Automation & Digital Services in Fujairah",
    heroSubtext:
      "One partner for AI systems, automations, search visibility, marketing, websites, and custom software. Built for Fujairah businesses that want practical improvements and clear scope.",
    problems: [
      {
        title: "Distance from the main business hubs",
        description:
          "Businesses outside Dubai and Abu Dhabi can struggle to access the same level of specialist support without paying for unnecessary travel or overhead.",
      },
      {
        title: "Manual processes",
        description:
          "Enquiries, quotations, follow-ups, and reporting still depend on people moving information between spreadsheets and inboxes.",
      },
      {
        title: "Limited online visibility",
        description:
          "A strong local reputation does not always translate into search visibility or a website that converts interest into enquiries.",
      },
      {
        title: "Small teams wear many hats",
        description:
          "The same people handle sales, operations, and customer service, leaving little time for digital improvement projects.",
      },
    ],
    solutions: [
      {
        title: "Remote delivery without compromise",
        description:
          "Access strategy, design, development, and support remotely, with clear communication and documented decisions.",
      },
      {
        title: "Automation that saves time",
        description:
          "We remove repetitive admin from enquiries, follow-ups, reporting, and internal handoffs so small teams can focus on growth.",
      },
      {
        title: "Search and website improvements",
        description:
          "Technical SEO, content, and a clearer website help Fujairah businesses reach customers across the UAE.",
      },
      {
        title: "Systems that fit the business",
        description:
          "We build around existing tools and processes rather than forcing a large, unfamiliar platform onto a small team.",
      },
    ],
    whyChooseUs: [
      "A written scope, timeline, and price before work starts",
      "Direct access to the people doing the work",
      "Remote delivery with clear communication",
      "Systems built to fit existing tools and workflows",
      "Optional ongoing support after launch",
    ],
    serviceAreas: [
      "Fujairah City",
      "Dibba",
      "Khor Fakkan",
      "Kalba",
      "Al Aqah",
      "Mirbah",
      "Sakamkam",
      "Al Bidiyah",
      "Al Hayl",
      "Qidfa",
    ],
    cityDescription:
      "Fujairah is a distinct business market shaped by its port, tourism, trading, and service sectors. Many businesses here operate with small teams and need technology that reduces administrative load rather than adding complexity. AIVized supports Fujairah businesses with focused AI, automation, search, marketing, and software projects delivered remotely.",
    faqs: [
      {
        question: "What services does AIVized offer in Fujairah?",
        answer:
          "We provide AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development.",
      },
      {
        question: "Do you work on-site in Fujairah?",
        answer:
          "Delivery is remote with scheduled calls and reviews. We support businesses across Fujairah and the wider UAE.",
      },
      {
        question: "Can you work with a small team?",
        answer:
          "Yes. Our projects are designed to reduce manual work for small teams, with clear handover and documentation so you are not dependent on a large internal technical function.",
      },
      {
        question: "How does a project start?",
        answer:
          "It starts with a discovery call. We recommend the shortest path to a useful result, then provide a written scope, timeline, and price before work begins.",
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. Optional support covers monitoring, maintenance, updates, and improvement.",
      },
    ],
    coordinates: { lat: 25.1288, lng: 56.3265 },
  },
  {
    slug: "umm-al-quwain",
    city: "Umm Al Quwain",
    region: "Umm Al Quwain",
    population: "100,000",
    description:
      "AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for Umm Al Quwain businesses.",
    mapEmbedUrl: mapUrl("Umm Al Quwain, United Arab Emirates"),
    heroTagline: "AI, Automation & Digital Services in Umm Al Quwain",
    heroSubtext:
      "One partner for AI systems, automations, search visibility, marketing, websites, and custom software. Built for Umm Al Quwain businesses that want practical improvements and clear scope.",
    problems: [
      {
        title: "Small market, wider competition",
        description:
          "Customers often compare Umm Al Quwain businesses with options in nearby emirates, so a credible online presence matters.",
      },
      {
        title: "Limited specialist support locally",
        description:
          "Finding senior digital, AI, and software expertise in a smaller market can be difficult and expensive.",
      },
      {
        title: "Repetitive admin",
        description:
          "Enquiries and follow-ups are handled manually, taking time away from delivery and customer relationships.",
      },
      {
        title: "Website not pulling its weight",
        description:
          "An outdated or slow site can make a capable business look less credible than its competitors.",
      },
    ],
    solutions: [
      {
        title: "Access specialist expertise remotely",
        description:
          "Work with senior strategists and builders without needing to hire a full in-house team.",
      },
      {
        title: "Automate the repetitive work",
        description:
          "Enquiry handling, follow-ups, and internal handoffs can be automated with systems that fit the team's existing workflow.",
      },
      {
        title: "Build credibility online",
        description:
          "A clear, fast website and consistent search presence help the business compete beyond its immediate area.",
      },
      {
        title: "Start with the biggest bottleneck",
        description:
          "We prioritise the one improvement that removes the most friction, then expand only when it makes commercial sense.",
      },
    ],
    whyChooseUs: [
      "A written scope, timeline, and price before work starts",
      "Direct access to the people doing the work",
      "Remote delivery with clear communication",
      "Systems built to fit existing tools and workflows",
      "Optional ongoing support after launch",
    ],
    serviceAreas: [
      "Umm Al Quwain City",
      "Al Salamah",
      "Al Hamriyah",
      "Al Rafaah",
      "Falaj Al Mualla",
      "Al Labsah",
      "Al Aqab",
      "Al Khor",
    ],
    cityDescription:
      "Umm Al Quwain is a smaller, relationship-driven business market where reputation and responsiveness matter. Companies here often need practical digital improvements without a large agency programme. AIVized supports Umm Al Quwain businesses with focused AI, automation, marketing, and software work delivered remotely and documented clearly.",
    faqs: [
      {
        question: "What services does AIVized offer in Umm Al Quwain?",
        answer:
          "We provide AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development.",
      },
      {
        question: "Do you work on-site in Umm Al Quwain?",
        answer:
          "Delivery is remote with scheduled calls and reviews. We support businesses across Umm Al Quwain and the wider UAE.",
      },
      {
        question: "Is a small project worth doing?",
        answer:
          "Yes. A focused automation, website improvement, or SEO fix can remove a meaningful bottleneck without requiring a large budget.",
      },
      {
        question: "How is pricing handled?",
        answer:
          "After discovery we provide a fixed written quote for the agreed scope. Ongoing support is optional and priced separately.",
      },
      {
        question: "Do you provide documentation?",
        answer:
          "Yes. Every project includes clear documentation and a handover so your team understands how the system works.",
      },
    ],
    coordinates: { lat: 25.5647, lng: 55.5533 },
  },
  {
    slug: "al-ain",
    city: "Al Ain",
    region: "Abu Dhabi",
    population: "800,000",
    description:
      "AI systems, automations, SEO and GEO, digital marketing, web development, and desktop software for Al Ain businesses.",
    mapEmbedUrl: mapUrl("Al Ain, United Arab Emirates"),
    heroTagline: "AI, Automation & Digital Services in Al Ain",
    heroSubtext:
      "One partner for AI systems, automations, search visibility, marketing, websites, and custom software. Built for Al Ain businesses that want practical improvements and clear scope.",
    problems: [
      {
        title: "Competing with Abu Dhabi and Dubai",
        description:
          "Businesses in Al Ain need a strong digital presence to reach customers who compare options across the wider UAE.",
      },
      {
        title: "Enquiries handled manually",
        description:
          "Website, phone, and social enquiries are often managed in separate places, making follow-up inconsistent.",
      },
      {
        title: "Operations depend on spreadsheets",
        description:
          "Growth increases the volume of manual reporting, scheduling, and data entry, consuming time that could go into the business.",
      },
      {
        title: "Underused digital channels",
        description:
          "Many businesses have a website and social profiles but no connected system for turning interest into qualified enquiries.",
      },
    ],
    solutions: [
      {
        title: "A connected enquiry process",
        description:
          "We connect website, phone, and social enquiries into one follow-up process so leads are not lost.",
      },
      {
        title: "Automation for operations",
        description:
          "Scheduling, reporting, onboarding, and repetitive admin can be automated without disrupting the existing team.",
      },
      {
        title: "Regional search visibility",
        description:
          "Technical SEO, content, and GEO help Al Ain businesses appear for relevant searches across the UAE.",
      },
      {
        title: "Websites built to convert",
        description:
          "Clear structure, fast pages, and simple enquiry flows make it easier for customers to take the next step.",
      },
    ],
    whyChooseUs: [
      "A written scope, timeline, and price before work starts",
      "Direct access to the people doing the work",
      "Systems built to fit existing tools and workflows",
      "Clear documentation and a clean handover",
      "Optional ongoing support after launch",
    ],
    serviceAreas: [
      "Al Ain City Centre",
      "Al Jimi",
      "Al Mutaredh",
      "Al Towayya",
      "Khalifa City",
      "Zakher",
      "Al Foah",
      "Al Hili",
      "Al Maqam",
      "Al Yahar",
      "Mezyad",
    ],
    cityDescription:
      "Al Ain blends a strong local community with education, healthcare, tourism, and a growing service sector. Businesses here often serve customers across Abu Dhabi and the wider UAE, making search visibility and consistent enquiry handling important. AIVized helps Al Ain businesses connect AI, automation, marketing, and software into a practical system for growth.",
    faqs: [
      {
        question: "What services does AIVized offer in Al Ain?",
        answer:
          "We provide AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development.",
      },
      {
        question: "Do you work on-site in Al Ain?",
        answer:
          "Delivery is remote with scheduled calls and reviews. We support businesses across Al Ain, Abu Dhabi, and the wider UAE.",
      },
      {
        question: "Can you help with both marketing and software?",
        answer:
          "Yes. Many projects combine search and content with automation or web development, because the biggest bottleneck usually crosses more than one channel.",
      },
      {
        question: "How long does a project take?",
        answer:
          "Smaller projects can be live in a few weeks. Larger systems typically take four to twelve weeks, depending on scope and integrations.",
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. Optional support covers monitoring, maintenance, updates, and improvement.",
      },
    ],
    coordinates: { lat: 24.2075, lng: 55.7447 },
  },
];

export const getLocationBySlug = (slug: string): LocationData | undefined => {
  return uaeLocations.find((location) => location.slug === slug);
};

export const getAllLocationSlugs = (): string[] => {
  return uaeLocations.map((location) => location.slug);
};
