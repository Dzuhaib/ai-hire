export interface LocationFaq {
  question: string;
  answer: string;
}

export const getLocationFaqs = (city: string): LocationFaq[] => [
  {
    question: `What services does AIVized offer in ${city}?`,
    answer:
      "We provide six services: AI Systems, Automations, SEO & GEO, Digital Marketing, Web Development, and Desktop Software Development. You can start with one service or combine several into a single roadmap.",
  },
  {
    question: `Do you work on-site in ${city}?`,
      answer: `We deliver projects remotely for businesses across ${city} and the wider UAE. Discovery calls, workshops, reviews, and handover sessions are scheduled online, so you can work with us without rearranging your week around travel.`,
  },
  {
    question: "How does a project start?",
    answer:
      "It starts with a discovery call. We look at what is slowing the business down, recommend the shortest path to a useful result, and send a written scope, timeline, and price before any work begins.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Smaller automation and landing-page projects can be live in a few weeks. A full website, AI system, or desktop application typically takes four to twelve weeks depending on scope and integrations. The timeline is agreed in writing before work starts.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on scope. After discovery we provide a fixed written quote with no obligation. For ongoing work, monthly retainers are available for marketing, support, and continuous improvement.",
  },
  {
    question: "Can you work with our existing website and tools?",
    answer:
      "Usually, yes. We regularly work with existing websites, CRMs, booking systems, and internal tools. If something is genuinely holding you back, we will explain why rather than forcing an unnecessary rebuild.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer optional managed support covering monitoring, maintenance, updates, and continuous improvement. Support is not a condition of working with us.",
  },
];
