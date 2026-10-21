import Image from 'next/image';
import Link from "next/link";
const painHero = "/assets/pain-section-hero.png";

const painPoints = [
  "Your team spends hours every week on work software should be doing.",
  "Your website looks fine but does not bring in enough enquiries.",
  "You are invisible on Google and in AI search results.",
  "Your tools, data, and customer journeys do not talk to each other.",
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
                alt="Business owner frustrated by disconnected systems and manual work"
                width={1200}
                height={675}
                className="w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-lg bg-card/95 border border-border/80">
                <span className="text-sm font-medium text-destructive">Disconnected systems hold growing businesses back</span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <p className="text-sm uppercase tracking-[0.2em] text-primary/70 mb-6">The Problem</p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-10">
              Growth Gets Stuck When Your{" "}
              <span className="text-gradient">Systems Do Not Scale</span>
            </h2>

            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <p key={index} className="text-xl md:text-2xl font-serif text-muted-foreground leading-relaxed">
                  {point}
                </p>
              ))}
            </div>

            <p className="mt-8 text-lg text-muted-foreground">
              We fix the gaps across AI, automation, search, marketing, and software - so the business runs
              better as a whole, not just one channel at a time. Explore our{" "}
              <Link href="/services" className="text-primary hover:underline">services</Link> or see how we
              work with{" "}
              <Link href="/industries" className="text-primary hover:underline">your industry</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
