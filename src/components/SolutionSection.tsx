const benefits = [
  "24/7 customer support chatbot that engages visitors instantly",
  "Lead generation chatbot UK businesses trust—captures qualified leads automatically",
  "Fully managed AI chatbot service—zero maintenance for you",
  "Continuous monitoring & immediate issue resolution",
  "Ongoing updates and improvements included",
  "Affordable AI chatbot for website—from £29/month, no developers, no contracts",
];

export const SolutionSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label-tag mb-4">The Solution</p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-8">
              Stop Losing Leads. Start With{" "}
              <span className="text-gradient">AIVized</span>
            </h2>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2.5" />
                  <p className="text-base text-foreground/85 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-xl p-8 md:p-10 hover:border-primary/30 hover:shadow-[var(--shadow-lift)] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/8 border border-border flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xl font-serif text-foreground leading-relaxed mb-6">
                "Your AI chatbot is live and fully managed. We've got it covered."
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Monitored 24/7 by our team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
