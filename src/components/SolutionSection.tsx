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
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-6">The Solution</p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-8">
              Stop Losing Leads. Start With{" "}
              <span className="text-gradient">AI Vized</span>
            </h2>

            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-lg text-foreground/90">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="card-premium p-8 md:p-12">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-2xl font-serif text-foreground">
                  "Your AI chatbot is live and fully managed. We've got it covered."
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">Monitored 24/7 by our team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
