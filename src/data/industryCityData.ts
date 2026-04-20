export interface IndustryCityData {
  industrySlug: string;
  citySlug: string;
  cityName: string;
  industryName: string;
  /** H1 keyword-optimized title */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  heroSubtitle: string;
  /** City-specific stats or facts */
  localFact: string;
  faqs: Array<{ question: string; answer: string }>;
}

interface IndustryCityConfig {
  industrySlug: string;
  industryName: string;
  /** Keyword template for H1, use {city} placeholder */
  h1Template: string;
  metaTitleTemplate: string;
  metaDescTemplate: string;
  heroSubtitleTemplate: string;
  keywordsBase: string;
  faqTemplates: Array<{ q: string; a: string }>;
}

const cities = [
  { slug: "london", name: "London" },
  { slug: "manchester", name: "Manchester" },
  { slug: "birmingham", name: "Birmingham" },
  { slug: "leeds", name: "Leeds" },
  { slug: "liverpool", name: "Liverpool" },
  { slug: "bristol", name: "Bristol" },
  { slug: "glasgow", name: "Glasgow" },
  { slug: "edinburgh", name: "Edinburgh" },
  { slug: "sheffield", name: "Sheffield" },
  { slug: "newcastle", name: "Newcastle" },
];

const industryConfigs: IndustryCityConfig[] = [
  {
    industrySlug: "restaurants",
    industryName: "Restaurants & Hospitality",
    h1Template: "AI Chatbot for Restaurants in {city}",
    metaTitleTemplate: "AI Chatbot for Restaurants in {city} | AIVized",
    metaDescTemplate: "Managed AI chatbot for restaurants in {city}. Handle reservations, menu enquiries, and booking confirmations 24/7. AIVized installs and manages everything. From £29/month.",
    heroSubtitleTemplate: "Your AI receptionist handles reservations, answers menu questions, and captures guest details for your {city} restaurant 24/7—while your staff focus on delivering great dining experiences.",
    keywordsBase: "restaurant AI chatbot {city}, restaurant chatbot UK, AI booking assistant {city}, managed chatbot restaurants",
    faqTemplates: [
      { q: "How does an AI chatbot help restaurants in {city}?", a: "Our managed AI chatbot handles reservations, menu enquiries, and allergen questions for {city} restaurants 24/7. It captures every booking request—even at 2am—so you never lose a customer to a competitor." },
      { q: "How much does a restaurant AI chatbot cost in {city}?", a: "Starting from just £29/month, AIVized offers the most affordable managed AI chatbot for {city} restaurants. No setup fees, no developers needed—we install everything for you within 24 hours." },
      { q: "Can the AI chatbot handle table bookings for my {city} restaurant?", a: "Yes. Our AI chatbot captures booking requests around the clock, confirms with guests instantly, and sends all details to your team. It works alongside your existing booking system." },
      { q: "Is the restaurant chatbot GDPR compliant?", a: "Absolutely. All guest data collected by your {city} restaurant AI chatbot is encrypted, stored securely in the UK, and handled in full GDPR compliance." },
    ],
  },
  {
    industrySlug: "real-estate",
    industryName: "Real Estate & Property",
    h1Template: "AI Chatbot for Real Estate in {city}",
    metaTitleTemplate: "AI Chatbot for Real Estate in {city} | AIVized",
    metaDescTemplate: "Managed AI chatbot for estate agents in {city}. Qualify leads, schedule viewings, and answer property enquiries 24/7. AIVized installs and manages everything. From £29/month.",
    heroSubtitleTemplate: "Your AI property assistant qualifies buyers, schedules viewings, and answers property questions for your {city} estate agency 24/7—so you can focus on closing deals.",
    keywordsBase: "real estate AI chatbot {city}, estate agent chatbot UK, AI property assistant {city}, managed chatbot real estate",
    faqTemplates: [
      { q: "How does an AI chatbot help estate agents in {city}?", a: "Our managed AI chatbot qualifies property leads in {city} automatically—asking about budget, chain status, and timeline. It captures enquiries 24/7 so you spend time closing deals, not answering basic questions." },
      { q: "Can the AI chatbot schedule property viewings in {city}?", a: "Yes. Your {city} estate agent AI chatbot captures viewing requests with buyer preferences and availability, then sends qualified leads directly to your team for scheduling." },
      { q: "How much does a real estate AI chatbot cost in {city}?", a: "From just £29/month. Compare that to hiring a receptionist at £28,000+ annually—our {city} AI chatbot saves you thousands while capturing more leads." },
      { q: "Is the property chatbot suitable for lettings in {city}?", a: "Absolutely. Our AI chatbot handles both sales and lettings enquiries for {city} agents, understanding the different requirements and processes for each." },
    ],
  },
  {
    industrySlug: "ecommerce",
    industryName: "E-Commerce & Retail",
    h1Template: "AI Chatbot for E-Commerce in {city}",
    metaTitleTemplate: "AI Chatbot for E-Commerce in {city} | AIVized",
    metaDescTemplate: "Managed AI chatbot for e-commerce businesses in {city}. Answer product questions, reduce cart abandonment, and support customers 24/7. AIVized handles setup. From £29/month.",
    heroSubtitleTemplate: "Your AI shopping assistant answers product questions, handles order enquiries, and reduces cart abandonment for your {city} e-commerce business 24/7.",
    keywordsBase: "ecommerce AI chatbot {city}, online shop chatbot UK, AI customer service {city}, managed chatbot ecommerce",
    faqTemplates: [
      { q: "How does an AI chatbot help e-commerce businesses in {city}?", a: "Our managed AI chatbot answers product questions instantly for {city} online retailers—reducing cart abandonment and handling 80% of customer queries automatically, 24/7." },
      { q: "Can the AI chatbot handle order tracking for my {city} store?", a: "Yes. Your {city} e-commerce AI chatbot provides shipping information, guides customers to tracking pages, and captures order-specific queries for your team." },
      { q: "How much does an e-commerce AI chatbot cost in {city}?", a: "Starting from just £29/month. Handle unlimited product questions and support queries without hiring extra staff for your {city} business." },
      { q: "Does it integrate with Shopify or WooCommerce?", a: "Our AI chatbot works via your website and doesn't require complex integrations. It fits into your existing workflow whether you use Shopify, WooCommerce, or any other platform." },
    ],
  },
  {
    industrySlug: "healthcare",
    industryName: "Healthcare & Clinics",
    h1Template: "AI Chatbot for Healthcare in {city}",
    metaTitleTemplate: "AI Chatbot for Healthcare in {city} | AIVized",
    metaDescTemplate: "Managed AI chatbot for clinics and dental practices in {city}. Handle patient enquiries, appointment requests, and registrations 24/7. AIVized handles setup. From £29/month.",
    heroSubtitleTemplate: "Your AI receptionist handles appointment requests, answers service questions, and captures new patient details for your {city} clinic 24/7.",
    keywordsBase: "healthcare AI chatbot {city}, clinic chatbot UK, dental AI assistant {city}, managed chatbot healthcare",
    faqTemplates: [
      { q: "How does an AI chatbot help healthcare clinics in {city}?", a: "Our managed AI chatbot handles patient enquiries for {city} clinics 24/7—capturing new patient registrations, answering treatment questions, and reducing admin burden on reception staff." },
      { q: "Is the healthcare AI chatbot GDPR compliant for {city} clinics?", a: "Yes. Our {city} healthcare AI chatbot uses bank-level encryption. All patient data is stored securely in the UK with full GDPR and healthcare data protection compliance." },
      { q: "Can it handle NHS and private patient enquiries in {city}?", a: "Absolutely. Your {city} clinic AI chatbot distinguishes between NHS and private enquiries, providing appropriate information and directing patients to the right service." },
      { q: "How much does a healthcare AI chatbot cost in {city}?", a: "From just £29/month—a fraction of hiring reception staff. Our {city} healthcare chatbot captures 35% more new patient registrations on average." },
    ],
  },
  {
    industrySlug: "legal",
    industryName: "Legal & Law Firms",
    h1Template: "AI Chatbot for Law Firms in {city}",
    metaTitleTemplate: "AI Chatbot for Law Firms in {city} | AIVized",
    metaDescTemplate: "Managed AI chatbot for solicitors in {city}. Capture client enquiries, qualify leads, and schedule consultations 24/7. AIVized installs and manages everything. From £29/month.",
    heroSubtitleTemplate: "Your AI legal receptionist handles initial enquiries, qualifies potential clients, and captures case details for your {city} law firm 24/7.",
    keywordsBase: "law firm AI chatbot {city}, solicitor chatbot UK, legal AI assistant {city}, managed chatbot law firms",
    faqTemplates: [
      { q: "How does an AI chatbot help law firms in {city}?", a: "Our managed AI chatbot captures client enquiries for {city} solicitors 24/7—qualifying prospects by case type, urgency, and budget so your solicitors focus on billable work." },
      { q: "Is the legal AI chatbot confidential for {city} firms?", a: "Yes. All client communications are encrypted with bank-level security. Data is stored in the UK with strict GDPR compliance and legal-grade data protection." },
      { q: "Can the chatbot direct enquiries to different practice areas in {city}?", a: "Absolutely. Your {city} law firm AI chatbot identifies the type of legal matter and routes enquiries to family, property, injury, criminal, or commercial departments." },
      { q: "How much does a law firm AI chatbot cost in {city}?", a: "From just £29/month—saving £25,000+ annually compared to a full-time legal receptionist. Capture 50% more qualified consultations for your {city} practice." },
    ],
  },
  {
    industrySlug: "fitness",
    industryName: "Fitness & Gyms",
    h1Template: "AI Chatbot for Gyms in {city}",
    metaTitleTemplate: "AI Chatbot for Gyms and Fitness in {city} | AIVized",
    metaDescTemplate: "Managed AI chatbot for gyms and fitness studios in {city}. Handle membership enquiries, class bookings, and trial requests 24/7. AIVized handles setup. From £29/month.",
    heroSubtitleTemplate: "Your AI fitness advisor handles membership enquiries, class bookings, and trial requests for your {city} gym or studio 24/7—turning browsers into members.",
    keywordsBase: "gym AI chatbot {city}, fitness chatbot UK, AI membership assistant {city}, managed chatbot gyms",
    faqTemplates: [
      { q: "How does an AI chatbot help gyms in {city}?", a: "Our managed AI chatbot handles membership enquiries for {city} gyms 24/7—answering pricing questions, providing class schedules, and capturing trial bookings when motivation is highest." },
      { q: "Can the AI chatbot handle class bookings for my {city} studio?", a: "Yes. Your {city} fitness AI chatbot provides class schedules, describes sessions, and captures booking requests—guiding potential members to the right classes for their goals." },
      { q: "How much does a gym AI chatbot cost in {city}?", a: "Starting from just £29/month. Convert more {city} website visitors into trial bookings and memberships without hiring extra reception staff." },
      { q: "Does it work for boutique fitness studios in {city}?", a: "Absolutely. Our AI chatbot works for yoga studios, pilates studios, CrossFit boxes, martial arts academies, and any fitness concept in {city}." },
    ],
  },
  {
    industrySlug: "travel",
    industryName: "Travel & Tourism",
    h1Template: "AI Chatbot for Travel Agents in {city}",
    metaTitleTemplate: "AI Chatbot for Travel Agents in {city} | AIVized",
    metaDescTemplate: "Managed AI chatbot for travel agents in {city}. Capture holiday enquiries, answer destination questions, and qualify leads 24/7. AIVized handles setup. From £29/month.",
    heroSubtitleTemplate: "Your AI travel advisor handles destination enquiries, captures booking requests, and qualifies travellers for your {city} travel agency 24/7.",
    keywordsBase: "travel agent AI chatbot {city}, travel chatbot UK, AI booking assistant {city}, managed chatbot travel agents",
    faqTemplates: [
      { q: "How does an AI chatbot help travel agents in {city}?", a: "Our managed AI chatbot captures holiday enquiries for {city} travel agents 24/7—answering destination questions and qualifying travellers by budget, dates, and preferences." },
      { q: "Can the AI chatbot handle complex travel enquiries in {city}?", a: "Yes. Your {city} travel AI chatbot captures detailed requirements—destinations, dates, budgets, party sizes—and sends qualified leads to your team for personalised quotes." },
      { q: "How much does a travel agent AI chatbot cost in {city}?", a: "From just £29/month. Capture evening and weekend holiday browsers before they default to online booking platforms—triple your {city} evening leads." },
      { q: "Does the chatbot handle ATOL and ABTA questions?", a: "Yes. Your {city} travel AI chatbot provides information about your ATOL/ABTA protection, giving customers confidence in booking with your agency." },
    ],
  },
];

const cityIndustryFacts: Record<string, Record<string, string>> = {
  restaurants: {
    london: "London has over 15,000 restaurants — one of the highest concentrations in Europe. Your competition for bookings is intense, especially for mid-week covers where a single missed enquiry can leave a table empty. Late-night booking requests peak after 10pm when most restaurants are too busy to answer the phone. An AI chatbot captures those requests automatically, turning browsing into confirmed reservations without staff involvement.",
    manchester: "Manchester's food scene has grown 35% in the past five years, with the Northern Quarter and Ancoats now drawing visitors from across the north. Competition for weekend covers is fierce among independent restaurants, and customers increasingly expect instant confirmation rather than waiting to hear back by phone. Your restaurant needs to respond to booking requests the moment they come in, day or night.",
    birmingham: "Birmingham has more restaurants per head than any UK city outside London, with the Balti Triangle, Digbeth, and the Jewellery Quarter all competing for the same diners. Allergen queries are particularly common here given the diverse cuisine on offer, and customers expect accurate, instant answers before they commit to a booking. An AI chatbot trained on your menu handles this consistently without staff needing to interrupt service.",
    leeds: "Leeds has developed one of the most competitive independent dining scenes outside London, with Trinity Kitchen and the Calls area drawing food-focused visitors from across Yorkshire. Weekend covers book out fast, but mid-week tables often go unfilled because enquiries come in after hours when no one picks up. Capturing those late-evening booking requests is where restaurants in Leeds lose the most recoverable revenue.",
    liverpool: "Liverpool's Baltic Triangle and waterfront dining scene attracts both locals and tourists, with enquiries peaking in the evenings and on weekends when staff are focused on service. The city's growing food culture means more restaurant openings each year, making it harder to stand out when a competitor can confirm a booking instantly and you cannot. Response speed has become as important as quality for first impressions.",
    bristol: "Bristol has one of the most food-conscious customer bases in the UK, with diners frequently asking detailed questions about ingredients, sourcing, and dietary accommodations before booking. The Clifton, Harbourside, and Stokes Croft areas draw discerning customers who expect informed answers, not a voicemail. An AI chatbot trained on your menu handles allergen and dietary queries accurately, freeing your team to focus on the dining room.",
    glasgow: "Glasgow's West End and Merchant City have a restaurant density that rivals many European capitals, making it one of the most competitive dining markets in Scotland. Customers here tend to book across multiple options simultaneously and confirm with whoever responds first. Speed of response is the single biggest factor in whether a Glasgow diner converts to a booking or moves on to the next option on their list.",
    edinburgh: "Edinburgh's restaurant trade is shaped by extreme seasonal variation — the August Festival brings tourist volumes that strain every resource, while January can be quiet enough that missing a single booking matters significantly. Managing enquiry volume during peak periods while staying responsive in quieter months is a consistent challenge for Edinburgh restaurants that a 24/7 chatbot addresses directly.",
    sheffield: "Sheffield's independent restaurant scene has grown significantly around the Kelham Island and Ecclesall Road areas, with a loyal local customer base that values consistent communication. Phone calls during busy service periods often go unanswered, and customers who cannot get a quick response tend to book elsewhere rather than follow up. Capturing those first-contact moments is where Sheffield restaurants can improve their conversion most.",
    newcastle: "Newcastle's Quayside and city centre restaurant quarter has strong Friday and Saturday demand, but mid-week covers are harder to fill. Many Newcastle diners browse for options on Sunday and Monday evenings when restaurants are closed or understaffed, meaning enquiries from that browsing go unanswered until it is too late. Responding to those off-peak enquiries automatically is the lowest-effort way to increase weekly covers.",
  },
  "real-estate": {
    london: "London's property market moves faster than any other UK city, with serious buyers and tenants expecting responses within minutes rather than hours. Enquiries come in at all hours because buyers browse Rightmove and Zoopla in the evenings and on weekends when your office is closed. Missing that first contact often means the lead has already booked a viewing with a faster-responding competitor by the time your team calls back.",
    manchester: "Manchester's buy-to-let and residential sales markets have grown substantially due to investment from the MediaCityUK development and ongoing city centre regeneration. Estate agents face strong competition from online-only agencies that offer instant response, making traditional phone-based enquiry handling a competitive disadvantage. Qualifying buyer and tenant leads automatically, 24 hours a day, is now a baseline expectation from serious buyers in the city.",
    birmingham: "Birmingham's property market is being reshaped by HS2 development and significant regeneration around Digbeth and the city centre, creating strong interest from investors and first-time buyers alongside existing residential demand. Agents who can respond to enquiries at the point of interest — often evenings and weekends — capture more qualified viewings than those relying on next-day callbacks.",
    leeds: "Leeds has one of the strongest rental markets in the UK, driven by two major universities and a growing professional population in the city centre. Student and young professional tenants expect instant responses to availability enquiries, and landlords who list properties need their agent to respond faster than competing listings. Automated 24/7 lead capture is particularly valuable for the lettings side of Leeds agencies.",
    liverpool: "Liverpool's property market has benefited from significant waterfront regeneration and growing interest from investors outside the region. Enquiries come from buyers who may be based in London or abroad and are not available during standard office hours for phone calls. Qualifying those remote buyers automatically — capturing their budget, timeline, and requirements — before a viewing saves agent time and increases conversion.",
    bristol: "Bristol consistently has one of the tightest housing markets in the UK, with demand from professionals relocating from London and strong local demand in areas like Clifton and Stoke Bishop. Properties receive multiple enquiries quickly, and buyers who cannot get a fast initial response move on to other listings. An AI chatbot on your website captures those enquiries the moment they come in, regardless of the time.",
    glasgow: "Glasgow's residential market offers some of the best value in the UK, attracting buyers from other cities and investors seeking yield. Estate agents handling multiple branches across the city's West End, Southside, and city centre face the challenge of responding consistently to enquiries across all areas. Centralised AI chatbot response ensures no enquiry is missed regardless of which branch the buyer contacts.",
    edinburgh: "Edinburgh's property market is shaped by both the permanent resident market and the significant short-term rental sector, which has faced increasing regulation. Estate agents need to handle enquiries from buyers, tenants, and investors with different requirements and timelines. Qualifying those enquiries automatically before routing them to the right team member saves significant time for Edinburgh agencies handling mixed portfolios.",
    sheffield: "Sheffield offers strong affordability for buyers relocating from more expensive cities, attracting enquiries from buyers in London and the South East researching properties from a distance. Those remote buyers often contact multiple agencies in the same session, converting with the one that responds first. Automated immediate response to online enquiries gives Sheffield estate agents a clear advantage over competitors relying on phone callbacks.",
    newcastle: "Newcastle's residential market has seen renewed activity following investment in the city centre and the Gateshead waterfront. Buyers and tenants increasingly expect the same instant response they get from online-only platforms. Traditional estate agents in Newcastle who can match that speed — with AI chatbot response 24/7 — retain the relationship advantage of a local agent while removing the response time disadvantage.",
  },
  ecommerce: {
    london: "London-based ecommerce businesses serve the highest concentration of online shoppers in the UK, with customers spread across dozens of postcodes and demographic groups. Cart abandonment rates in London are higher than the national average because shoppers have more alternatives and less patience for unanswered pre-purchase questions. An AI chatbot on your checkout and product pages answers those last-minute questions instantly, removing the friction that sends customers to competitors.",
    manchester: "Manchester has one of the highest rates of online shopping adoption in the UK, driven by a young, digitally-native population across the city and surrounding areas. Customers expect support outside of standard business hours, with purchase decisions frequently made in the evenings. An AI chatbot handling product questions and order enquiries from 6pm to midnight captures a significant portion of Manchester's ecommerce demand that daytime-only support misses.",
    birmingham: "Birmingham's diverse population creates high demand for product enquiries across a range of preferences and requirements. Ecommerce businesses selling in this market frequently receive questions about product compatibility, sizing variations, and availability that require accurate, consistent answers. Training an AI chatbot on your product catalogue means every customer gets the same correct response, regardless of when they ask.",
    leeds: "Leeds has a strong independent retail culture that has moved significantly online, with customers expecting the same level of service from ecommerce stores that they would get from a physical shop. Enquiries about returns, delivery timescales, and product specifics peak in the evenings when no support team is available. An AI chatbot handling those queries means Leeds customers get answers without waiting until the next business day.",
    liverpool: "Liverpool's ecommerce market is growing alongside the city's economic recovery, with a young urban population that shops heavily online and expects quick answers to pre-purchase questions. Product comparison behaviour is common — customers contact multiple stores before deciding. The store that answers first and most accurately tends to win the sale. An AI chatbot gives your Liverpool-targeted store that advantage at every hour.",
    bristol: "Bristol has a high concentration of sustainability-conscious and quality-focused consumers who ask detailed questions before purchasing — about materials, sourcing, and ethical credentials. Ecommerce stores serving this market need to answer those questions accurately and quickly. An AI chatbot trained on your product specifics handles the detail-oriented enquiries that Bristol customers are more likely to send than customers in most other UK cities.",
    glasgow: "Glasgow's online shopping habits skew toward evening and weekend activity, with significant purchase intent coming from searches and social media browsing outside of office hours. An ecommerce business without 24/7 support is effectively closed for half the day in Glasgow's market. An AI chatbot handling product questions and post-purchase enquiries outside business hours captures that demand rather than losing it to faster-responding competitors.",
    edinburgh: "Edinburgh's ecommerce market benefits from the city's relatively high disposable income among its professional and academic population, but those customers have high expectations for service quality. Unanswered pre-purchase questions lead to abandoned carts at a higher rate than in lower-spend markets. An AI chatbot addressing product questions before checkout reduces abandonment among Edinburgh's value-conscious but quality-focused shoppers.",
    sheffield: "Sheffield's ecommerce customers are price-sensitive but loyalty-driven — they are willing to return to a store that treats them well. Post-purchase support questions about returns and delivery are a significant driver of customer satisfaction, and handling these quickly builds the kind of loyalty that drives repeat orders. An AI chatbot responding immediately to post-purchase enquiries turns one-time Sheffield buyers into repeat customers.",
    newcastle: "Newcastle's ecommerce shoppers are increasingly mobile-first, browsing and purchasing on smartphones during commutes and evenings. Mobile shoppers have shorter attention spans for unanswered questions and are more likely to abandon a purchase if they cannot get an instant answer. An AI chatbot optimised for mobile chat interaction reduces abandonment among Newcastle's mobile-heavy online shopping audience.",
  },
  healthcare: {
    london: "London has the highest concentration of private healthcare providers in the UK, with patients frequently comparing multiple clinics before booking. Response speed to initial enquiries is a key factor in patient acquisition for London clinics, particularly for elective and cosmetic treatments where patients are actively choosing between providers. A clinic that responds to evening enquiries with a chatbot has a clear advantage over one that waits for the morning.",
    manchester: "Manchester's healthcare market includes a mix of NHS overflow demand and growing private patient interest, particularly for dental, physiotherapy, and cosmetic treatments. Patients researching private options often do so in the evenings after work, submitting enquiries to multiple practices simultaneously. The practice that captures patient details and provides service information immediately tends to be the one that converts the registration.",
    birmingham: "Birmingham has one of the most diverse patient populations in the UK, creating demand for a wide range of specialisms and frequent questions about which services are appropriate for specific conditions or cultural requirements. Reception staff cannot always address these questions quickly during busy periods. An AI chatbot trained on your services handles those initial enquiries accurately without burdening clinical or administrative staff.",
    leeds: "Leeds has two major university teaching hospitals and a growing private healthcare sector serving Yorkshire and the Humber. Patients travelling from surrounding towns to access private care in Leeds often research and contact providers outside standard office hours. An AI chatbot available 24/7 captures those out-of-area patient enquiries at the moment of interest rather than the next business day.",
    liverpool: "Liverpool's healthcare market includes significant NHS demand and a growing private sector serving Merseyside and North Wales. Out-of-hours enquiries from patients considering private options often go unanswered, with the patients registering with whichever practice calls back first. An AI chatbot on your clinic website captures those after-hours registrations automatically, keeping your practice ahead of competitors.",
    bristol: "Bristol has a health-conscious professional population with high demand for physiotherapy, sports medicine, and preventative health services. Patients in this market are research-oriented and ask detailed questions before booking — about treatment approaches, practitioner qualifications, and what to expect. An AI chatbot that answers these questions clearly and accurately builds confidence before the first appointment, reducing no-shows.",
    glasgow: "Glasgow faces significant healthcare demand from a large population spread across a wide geographic area. Patients researching private options for dental, eye care, and specialist services often have limited flexibility for phone calls during the day. Evening and weekend chatbot availability allows your Glasgow clinic to capture registrations from patients who cannot engage during standard office hours.",
    edinburgh: "Edinburgh's private healthcare sector serves a mix of permanent residents and a significant visitor population, including many international patients seeking specialist treatment. Enquiries outside office hours are common, particularly from patients planning appointments around their Edinburgh visits. An AI chatbot provides immediate service information and captures registration details 24/7, removing the friction of waiting for a callback.",
    sheffield: "Sheffield's healthcare market benefits from two universities and a large student population with specific health needs, alongside general NHS and private demand. Student patients in particular expect instant digital communication and are unlikely to follow up if their initial enquiry goes unanswered. An AI chatbot that responds immediately to registration enquiries captures this high-volume segment of Sheffield's patient population.",
    newcastle: "Newcastle's healthcare providers serve patients from across the North East, a region with significant unmet demand for private dental and elective procedures. Patients travelling from Sunderland, Durham, or Middlesbrough to access Newcastle services often enquire at evenings and weekends when your reception is closed. An AI chatbot capturing those out-of-hours registrations keeps your clinic's patient pipeline full without adding to your administrative burden.",
  },
  legal: {
    london: "London's legal services market is the most competitive in the UK, with thousands of firms competing for client enquiries in every practice area. First response wins in legal services — a client who cannot reach you within the hour will typically contact two or three other firms. An AI chatbot capturing initial enquiry details and acknowledging the client immediately prevents that loss while your solicitors focus on billable work.",
    manchester: "Manchester is the UK's second legal centre, with a strong concentration of commercial, employment, and family law firms serving the north. Clients facing urgent legal situations — relationship breakdowns, employment disputes, criminal matters — often contact firms outside of office hours when the situation has escalated. An AI chatbot that captures those urgent enquiries and sends them to your team immediately prevents the loss of high-value cases to faster-responding firms.",
    birmingham: "Birmingham has the largest concentration of solicitors outside London, with strong competition in conveyancing, family law, and personal injury. The city's diverse population creates high demand for multilingual legal support and culturally sensitive handling of family and immigration matters. An AI chatbot that captures initial enquiry details and routes them to the right department demonstrates professionalism before a solicitor is ever involved.",
    leeds: "Leeds is a major commercial legal hub serving Yorkshire and the Humber, with firms competing heavily in financial services, real estate, and employment law. Client enquiries from businesses are frequently made by decision-makers who work long hours and contact firms outside of 9 to 5. An AI chatbot that responds immediately to business legal enquiries and qualifies the case type before routing to the right solicitor gives Leeds firms a clear competitive edge.",
    liverpool: "Liverpool's legal market has strong demand in personal injury, housing law, and family matters from a large population with significant levels of legal need. Evening and weekend enquiries from clients in distress — facing possession proceedings, custody disputes, or accident claims — need immediate acknowledgement even when solicitors are not available. An AI chatbot that captures the key details and assures the client of follow-up maintains trust in an emotionally charged situation.",
    bristol: "Bristol's legal market serves a mix of private clients and small businesses, with growing demand in technology law, employment, and commercial contracts from the city's expanding tech sector. Tech-sector clients in particular expect modern digital communication and are less willing to engage with firms that rely solely on phone contact. An AI chatbot that handles initial enquiries professionally reinforces the firm's competence to tech-forward Bristol clients.",
    glasgow: "Glasgow has a high volume of legal enquiries in areas including housing, employment, and family law, with significant legal aid demand alongside private work. Out-of-hours enquiries from clients facing eviction, dismissal, or domestic difficulties need immediate capture even if a solicitor is not available until morning. An AI chatbot that records the situation, captures contact details, and confirms follow-up prevents those urgent clients from turning to a competitor.",
    edinburgh: "Edinburgh's legal sector serves both the Scottish capital's large resident population and clients from across Scotland seeking specialist expertise. Scottish law has specific differences from English law that clients frequently ask about when contacting Edinburgh firms. An AI chatbot trained on Scottish legal terminology and your firm's practice areas handles those initial qualification questions accurately, routing clients to the right solicitor.",
    sheffield: "Sheffield's legal market has strong demand in employment law, personal injury, and residential conveyancing from a large working population. Many Sheffield clients contact solicitors during their lunch break or after work, times when larger firms with full staffing can respond but smaller practices may not have coverage. An AI chatbot ensures your Sheffield firm provides the same immediate response as larger competitors regardless of time of day.",
    newcastle: "Newcastle's legal market serves a wide catchment area across the North East, with clients from Sunderland, Durham, and Northumberland contacting Newcastle firms for specialist services not available locally. Those remote clients often research and contact solicitors online in the evenings. An AI chatbot capturing their enquiry details immediately, and confirming that a solicitor will follow up, converts that initial contact into a scheduled consultation.",
  },
  fitness: {
    london: "London has more gym and fitness studio options per square mile than almost any European city, creating intense competition for memberships and class bookings. Prospective members browse multiple options simultaneously and sign up with the first studio that makes joining easy. An AI chatbot on your website handles membership enquiries and trial bookings automatically, competing for sign-ups even at midnight when motivated Londoners decide to start their fitness journey.",
    manchester: "Manchester's fitness market has grown significantly with the rise of boutique studios in the Northern Quarter and Ancoats alongside traditional gym chains. Price-sensitive students from the city's universities and young professionals from MediaCityUK represent distinct customer segments with different membership needs. An AI chatbot that answers pricing and class schedule questions instantly removes the friction that causes prospective members to abandon enquiries during the consideration phase.",
    birmingham: "Birmingham has one of the largest fitness markets outside London, with demand for gyms, martial arts studios, yoga, and specialist fitness concepts across a diverse population. Enquiries about specific classes, trainer qualifications, and trial sessions peak in the evenings when people decide to make a change to their routine. Capturing those high-intent enquiries immediately gives Birmingham fitness businesses the best chance of converting motivation into a membership.",
    leeds: "Leeds has a strong fitness culture, with high demand for gym memberships, running clubs, and boutique fitness studios from its professional and student population. New year and post-summer spikes in enquiry volume overwhelm reception staff at the exact moment when conversion rates are highest. An AI chatbot handling the enquiry surge automatically means your Leeds gym captures every prospective member during peak interest periods.",
    liverpool: "Liverpool's fitness market is growing alongside the city's economic recovery and population growth in the Baltic Triangle and city centre. Independent studios compete directly with national chains for the same members, and smaller operations often lack the staffing to respond to enquiries out of hours. An AI chatbot that handles membership and class enquiries after 6pm and on weekends gives independent Liverpool studios a level playing field on response speed.",
    bristol: "Bristol has a health and fitness-conscious population with high demand for specialist classes, personal training, and holistic wellness services. Clients in this market ask detailed questions about teaching style, qualifications, and class sizes before committing, particularly for yoga, Pilates, and CrossFit studios. An AI chatbot that answers these specific questions clearly accelerates the decision-making process and increases trial booking conversion.",
    glasgow: "Glasgow's fitness market spans large commercial gyms, boutique studios, and independent personal trainers competing for a cost-conscious but active population. Membership cancellation rates are high industry-wide, making new member acquisition critical. An AI chatbot that responds immediately to enquiries about pricing, classes, and free trials converts those initial interest moments before the prospective member loses momentum and moves on.",
    edinburgh: "Edinburgh's fitness market has a significant seasonal dimension, with higher demand from January through March and a tourist-influenced summer period. Studios that cannot handle enquiry peaks at the start of the year miss their highest-conversion window. An AI chatbot automatically handling the January surge in new member enquiries ensures your Edinburgh studio converts more of those high-intent contacts into paid memberships.",
    sheffield: "Sheffield has a strong fitness culture shaped by its outdoor sports heritage and two universities, creating diverse demand from students, young professionals, and sports-focused adults. Trial class bookings are the primary conversion point for most Sheffield studios, and capturing those booking requests at the moment of interest is critical. An AI chatbot available at the times when people browse — evenings and weekends — removes the barrier to taking that first step.",
    newcastle: "Newcastle's fitness market is growing with the city's regeneration, attracting both local members and people relocating from other cities who are looking for a gym near their new home. Those relocation enquiries often come in outside business hours from people researching before they move. An AI chatbot that captures location, class preferences, and contact details from those out-of-hours enquiries gives Newcastle fitness businesses a head start on converting new residents into long-term members.",
  },
  travel: {
    london: "London's travel agency market competes directly with major online booking platforms that offer instant price comparisons and immediate confirmation. Independent agencies survive by providing expertise and service quality that platforms cannot replicate, but that advantage disappears if enquiries go unanswered overnight. An AI chatbot that captures holiday enquiry details and provides immediate acknowledgement keeps London travel agencies in the running while their consultants are unavailable.",
    manchester: "Manchester Airport is the UK's third busiest, with high outbound travel demand from the North West and a large population seeking package holidays, tailor-made breaks, and business travel. Customers researching holidays typically browse on weekday evenings and weekend mornings, times when travel agencies are either closed or understaffed. Capturing those enquiries automatically ensures your Manchester agency does not lose researching customers to online booking platforms.",
    birmingham: "Birmingham Airport serves a large Midlands population with significant demand for leisure travel, particularly to destinations popular with the city's diverse communities. Travel enquiries often involve complex requirements around group sizes, dietary needs, and cultural preferences that generic online platforms cannot easily address. An AI chatbot capturing those requirements immediately and connecting the customer with a specialist consultant provides the personalised service that retains agency loyalty.",
    leeds: "Leeds has strong demand for both UK city breaks and international holidays, with a professional population that values service quality and specialist knowledge. Holiday research typically starts in the evenings and on weekends when Yorkshire-based travel agencies are not staffed to respond. An AI chatbot that captures enquiry details and provides basic destination information outside office hours keeps your Leeds agency competitive with 24/7 online platforms.",
    liverpool: "Liverpool's travel market has significant demand for cruise departures, winter sun packages, and city breaks from a population that values brand loyalty and personal service. Many Liverpool travel customers have relationships with specific agents built over years, but when that agent is unavailable, they default to an online platform. An AI chatbot maintaining contact at any hour preserves that relationship and prevents the customer from booking elsewhere.",
    bristol: "Bristol's travel market includes strong demand for adventure travel, eco-tourism, and independent travel among the city's professional and outdoors-focused population. Customers planning these trips ask detailed questions about specific destinations, experiences, and logistics that require knowledgeable responses. An AI chatbot that captures the enquiry and qualifies the customer before routing to a specialist consultant accelerates the booking process for Bristol's demanding travel market.",
    glasgow: "Glasgow's travel market has high demand for European city breaks, winter sun, and long-haul holidays from a city with strong disposable income and an affinity for international travel. Scottish customers researching holidays tend to enquire through multiple channels simultaneously, and the agency that acknowledges the enquiry first tends to build the relationship. An AI chatbot providing instant acknowledgement and initial destination information gives Glasgow agencies the edge in that first-contact competition.",
    edinburgh: "Edinburgh's travel market includes demand from a large professional population and a significant tourist influx that creates both outbound travel demand and inbound enquiries about Scotland-based tours. Travel agents serving both markets need to respond to enquiries across time zones, with international customers sometimes contacting Edinburgh agencies outside UK office hours. An AI chatbot handling those enquiries immediately captures international interest that would otherwise go unacknowledged until the next morning.",
    sheffield: "Sheffield's travel market is served by regional departure options from both East Midlands and Manchester airports, giving travellers flexibility but also creating more complex itinerary planning requirements. Travel agencies that can engage these customers early in the planning process — when they are still deciding on departure airport, duration, and destination — have the best chance of securing the booking. An AI chatbot initiating that conversation 24/7 keeps Sheffield agencies in the decision from the start.",
    newcastle: "Newcastle's travel market benefits from Newcastle Airport's growing route network and a population with strong appetite for European and long-haul holidays. Out-of-hours enquiries from customers inspired by social media or late-night browsing represent a significant portion of total holiday interest. An AI chatbot that captures that initial enquiry and provides basic destination information keeps the customer engaged with your agency rather than transferring their research to a competitor.",
  },
};

function getLocalFact(industrySlug: string, citySlug: string, industryName: string, cityName: string): string {
  return cityIndustryFacts[industrySlug]?.[citySlug]
    ?? `Serving ${industryName.toLowerCase()} businesses across ${cityName} and surrounding areas.`;
}

function generateCityData(config: IndustryCityConfig, city: { slug: string; name: string }): IndustryCityData {
  const replace = (template: string) => template.replace(/\{city\}/g, city.name);

  return {
    industrySlug: config.industrySlug,
    citySlug: city.slug,
    cityName: city.name,
    industryName: config.industryName,
    h1: replace(config.h1Template),
    metaTitle: replace(config.metaTitleTemplate),
    metaDescription: replace(config.metaDescTemplate),
    metaKeywords: replace(config.keywordsBase),
    heroSubtitle: replace(config.heroSubtitleTemplate),
    localFact: getLocalFact(config.industrySlug, city.slug, config.industryName, city.name),
    faqs: config.faqTemplates.map(f => ({ question: replace(f.q), answer: replace(f.a) })),
  };
}

// Generate all industry+city combinations
export const allIndustryCities: IndustryCityData[] = industryConfigs.flatMap(config =>
  cities.map(city => generateCityData(config, city))
);

export const getIndustryCityData = (industrySlug: string, citySlug: string): IndustryCityData | undefined => {
  return allIndustryCities.find(ic => ic.industrySlug === industrySlug && ic.citySlug === citySlug);
};

export const getCitiesForIndustry = (industrySlug: string): IndustryCityData[] => {
  return allIndustryCities.filter(ic => ic.industrySlug === industrySlug);
};

export const industryCities = cities;
