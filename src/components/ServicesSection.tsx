import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, Share2, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Bot,
    label: "Core Service",
    title: "Managed AI Chatbot",
    description:
      "We install, train, and maintain an AI chatbot on your website or WhatsApp. Captures leads and answers customer enquiries 24/7 with no technical work required from you.",
    features: ["Website & WhatsApp chatbot", "24-hour setup", "Ongoing monitoring & updates"],
    cta: "View Plans",
    href: "/#pricing",
    external: false,
    highlight: true,
  },
  {
    icon: Share2,
    label: "New",
    title: "Social Media Automation",
    description:
      "We manage your Instagram, Facebook, and LinkedIn — automating DM responses, scheduling content, and keeping your audience engaged without you having to be online.",
    features: ["DM automation across platforms", "Content scheduling", "Engagement monitoring"],
    cta: "Learn More",
    href: "/services/social-media-automation",
    external: false,
    highlight: false,
  },
  {
    icon: Zap,
    label: "New",
    title: "Business Process Automation",
    description:
      "We automate the repetitive workflows that drain your team's time — lead follow-up sequences, appointment reminders, customer onboarding, and internal notifications.",
    features: ["Lead follow-up sequences", "Appointment reminders", "Workflow automation"],
    cta: "Learn More",
    href: "/services/business-automation",
    external: false,
    highlight: false,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="label-tag mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
            Managed Automation <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every service is fully managed — we handle setup, training, and ongoing maintenance so you can focus on running your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                service.highlight
                  ? "border-primary/40 bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              {/* Label */}
              <span
                className={`inline-block self-start text-xs font-medium px-2.5 py-1 rounded-full mb-5 ${
                  service.highlight
                    ? "bg-primary/15 text-primary"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {service.label}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <service.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title & description */}
              <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8 flex-grow">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {service.external ? (
                <a
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
