import Image from 'next/image';
import Link from "next/link";
const painHero = "/assets/pain-section-hero.png";

const painPoints = [
  "Missed leads from your website cost you money every day.",
  "Hiring 24/7 customer support staff is expensive and slow.",
  "Most chatbots feel robotic—they don't capture leads or automate customer inquiries.",
];

export const PainSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
              <Image
                src={painHero}
                alt="Business owner frustrated by missed leads and unanswered customer messages"
                width={1200}
                height={675}
                className="w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-lg bg-card/95 border border-border/80">
                <span className="text-sm font-medium text-destructive">⚠ 67% of leads lost after hours*</span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <p className="text-sm uppercase tracking-[0.2em] text-primary/70 mb-6">The Problem</p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-10">
              UK Small Businesses <span className="text-gradient">Lose Leads</span> Every Day
            </h2>

            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <p key={index} className="text-xl md:text-2xl font-serif text-muted-foreground leading-relaxed">
                  {point}
                </p>
              ))}
            </div>

            <p className="mt-8 text-lg text-muted-foreground">
              That's why businesses across <Link href="/locations" className="text-primary hover:underline">UK cities</Link> trust our{" "}
              <Link href="/industries" className="text-primary hover:underline">managed AI chatbot</Link> to capture leads 24/7.
            </p>
            <p className="mt-3 text-xs text-muted-foreground/60">
              *Based on{" "}
              <a href="https://www.hubspot.com/sales-statistics" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                HubSpot sales research
              </a>{" "}
              and{" "}
              <a href="https://www.salesforce.com/uk/resources/research-reports/state-of-the-connected-customer/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                Salesforce State of the Connected Customer report
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
