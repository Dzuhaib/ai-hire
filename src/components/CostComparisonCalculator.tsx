import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Users, Bot, Sparkles, TrendingDown, Check } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const CostComparisonCalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [selectedPlan, setSelectedPlan] = useState<"starter" | "professional" | "business">("professional");

  // AIVized pricing
  const aivizedPrices = {
    starter: 29,
    professional: 79,
    business: 149,
  };

  // UK minimum wage and typical customer service costs
  const hourlyRate = 12; // Approximate UK hourly rate for customer service
  const employerNI = 0.138; // Employer National Insurance
  const pensionContribution = 0.03; // Minimum pension contribution
  const trainingCost = 500; // Annual training cost
  const equipmentCost = 100; // Monthly equipment/software costs
  const managementOverhead = 0.15; // Management time overhead

  // Calculate staff costs
  const weeklyHours = hoursPerWeek;
  const monthlyHours = weeklyHours * 4.33;
  const baseSalary = monthlyHours * hourlyRate;
  const niCost = baseSalary * employerNI;
  const pensionCost = baseSalary * pensionContribution;
  const overheadCost = baseSalary * managementOverhead;
  const monthlyTraining = trainingCost / 12;
  const totalStaffCost = baseSalary + niCost + pensionCost + overheadCost + monthlyTraining + equipmentCost;

  // Other chatbot solutions (typical market rates)
  const otherChatbotBase = 199; // Typical SaaS fee
  const otherChatbotSetup = 2000; // Setup/integration fee (amortized over 12 months)
  const otherChatbotDev = 500; // Monthly developer maintenance
  const totalOtherChatbot = otherChatbotBase + (otherChatbotSetup / 12) + otherChatbotDev;

  // AIVized cost
  const aivizedCost = aivizedPrices[selectedPlan];

  // Savings calculations
  const savingsVsStaff = totalStaffCost - aivizedCost;
  const savingsVsOther = totalOtherChatbot - aivizedCost;
  const annualSavingsVsStaff = savingsVsStaff * 12;

  const plans = [
    { id: "starter" as const, name: "Starter", price: 29 },
    { id: "professional" as const, name: "Professional", price: 79 },
    { id: "business" as const, name: "Business", price: 149 },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Cost Calculator</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6"
          >
            Affordable AI Chatbot{" "}
            <span className="text-gradient">vs Hiring Staff</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Compare the true cost of a managed AI chatbot service against hiring staff or Intercom alternatives
          </motion.p>
        </div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 lg:p-10"
        >
          {/* Plan Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-muted-foreground mb-4">
              Select your AIVized plan
            </label>
            <div className="grid grid-cols-3 gap-3">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative p-4 rounded-xl border transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? "border-primary bg-primary/10"
                      : "border-border/50 hover:border-primary/30 hover:bg-secondary/50"
                  }`}
                >
                  {selectedPlan === plan.id && (
                    <div className="absolute top-2 right-2">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div className="text-lg font-semibold">{plan.name}</div>
                  <div className="text-sm text-muted-foreground">{formatCurrency(plan.price)}/mo</div>
                </button>
              ))}
            </div>
          </div>

          {/* Hours Slider */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-medium text-muted-foreground">
                Customer support hours needed per week
              </label>
              <span className="text-lg font-semibold text-primary">{hoursPerWeek} hours</span>
            </div>
            <Slider
              value={[hoursPerWeek]}
              onValueChange={(value) => setHoursPerWeek(value[0])}
              min={10}
              max={60}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>10 hrs/week</span>
              <span>60 hrs/week</span>
            </div>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-10">
            {/* AIVized */}
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/30">
              <div className="absolute -top-3 left-4">
                <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                  Best Value
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">AIVized</h3>
              </div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-2">
                {formatCurrency(aivizedCost)}
              </div>
              <div className="text-sm text-muted-foreground mb-4">per month</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>24/7 availability</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Fully managed</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>No technical skills needed</span>
                </li>
              </ul>
            </div>

            {/* Hiring Staff */}
            <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Users className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="font-semibold">Hiring Staff</h3>
              </div>
              <div className="text-3xl md:text-4xl font-serif font-bold mb-2">
                {formatCurrency(Math.round(totalStaffCost))}
              </div>
              <div className="text-sm text-muted-foreground mb-4">per month</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Salary: {formatCurrency(Math.round(baseSalary))}</li>
                <li>• NI & Pension: {formatCurrency(Math.round(niCost + pensionCost))}</li>
                <li>• Training & Equipment: {formatCurrency(Math.round(monthlyTraining + equipmentCost))}</li>
                <li>• Management overhead: {formatCurrency(Math.round(overheadCost))}</li>
              </ul>
            </div>

            {/* Other Chatbots */}
            <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Bot className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="font-semibold">Other Chatbots</h3>
              </div>
              <div className="text-3xl md:text-4xl font-serif font-bold mb-2">
                {formatCurrency(Math.round(totalOtherChatbot))}
              </div>
              <div className="text-sm text-muted-foreground mb-4">per month</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• SaaS subscription: {formatCurrency(otherChatbotBase)}</li>
                <li>• Setup fees (amortized): {formatCurrency(Math.round(otherChatbotSetup / 12))}</li>
                <li>• Developer maintenance: {formatCurrency(otherChatbotDev)}</li>
                <li>• You manage everything</li>
              </ul>
            </div>
          </div>

          {/* Savings Summary */}
          <div className="bg-gradient-to-r from-primary/10 via-cyan-500/10 to-primary/10 rounded-xl p-6 md:p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold">Your Potential Savings</h3>
                <p className="text-sm text-muted-foreground">With AIVized {plans.find(p => p.id === selectedPlan)?.name}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="text-center sm:text-left">
                <div className="text-sm text-muted-foreground mb-1">vs. Hiring Staff</div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-gradient">
                  {formatCurrency(Math.round(savingsVsStaff))}
                </div>
                <div className="text-sm text-muted-foreground">saved per month</div>
                <div className="mt-2 text-lg font-semibold text-primary">
                  {formatCurrency(Math.round(annualSavingsVsStaff))}/year
                </div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-sm text-muted-foreground mb-1">vs. Other Chatbots</div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-gradient">
                  {formatCurrency(Math.round(savingsVsOther))}
                </div>
                <div className="text-sm text-muted-foreground">saved per month</div>
                <div className="mt-2 text-lg font-semibold text-primary">
                  + Zero technical hassle
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
