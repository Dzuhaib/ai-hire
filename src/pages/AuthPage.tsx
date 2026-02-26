import { SignIn, SignUp, useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, ArrowLeft, Quote } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import authSideImage from "@/assets/auth-side-image.png";

const quotes = [
  { text: "AI Vized cut our response time from hours to seconds. Our customers love it.", author: "Sarah M.", role: "E-commerce Owner, London" },
  { text: "We saved over £2,000/month by replacing our outsourced chat team with AI Vized.", author: "James T.", role: "Restaurant Manager, Manchester" },
  { text: "Setup took 10 minutes. Our AI employee handles 80% of enquiries automatically.", author: "Priya K.", role: "Real Estate Agent, Birmingham" },
  { text: "The best investment we've made this year. It never sleeps and never misses a lead.", author: "David L.", role: "Salon Owner, Leeds" },
];

const clerkAppearance = {
  elements: {
    rootBox: "w-full",
    card: "bg-transparent shadow-none p-0",
    header: "hidden",
    headerTitle: "hidden",
    headerSubtitle: "hidden",
    socialButtonsBlockButton: "bg-secondary border-border hover:bg-secondary/80 text-foreground font-medium rounded-lg transition-all",
    socialButtonsBlockButtonText: "text-foreground font-medium",
    dividerLine: "bg-border",
    dividerText: "text-muted-foreground text-xs",
    formFieldInput: "bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
    formFieldLabel: "text-foreground font-medium text-sm",
    formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-lg shadow-primary/20 transition-all",
    footerAction: "hidden",
    footerActionLink: "hidden",
    identityPreviewText: "text-foreground",
    identityPreviewEditButton: "text-primary hover:text-primary/80",
    formFieldInputShowPasswordButton: "text-muted-foreground hover:text-foreground",
    footer: "hidden",
    logoBox: "hidden",
    logoImage: "hidden",
    otpCodeFieldInput: "!bg-secondary !border-2 !border-primary/50 !text-foreground !text-2xl !font-bold !rounded-lg !w-12 !h-14 focus:!ring-2 focus:!ring-primary focus:!border-primary !transition-all",
    otpCodeField: "gap-3",
    otpCodeFieldInputs: "gap-3",
    formResendCodeLink: "text-primary hover:text-primary/80 font-medium",
    verificationLinkStatusText: "text-foreground",
    verificationLinkStatusBox: "bg-secondary/50 border-border rounded-lg p-4",
    formHeaderTitle: "text-xl font-serif font-semibold text-foreground",
    formHeaderSubtitle: "text-muted-foreground text-sm mt-2",
    backLink: "text-primary hover:text-primary/80",
  },
  layout: {
    logoPlacement: "none" as const,
    showOptionalFields: false,
  },
};

const SlidingQuotes = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-32">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Quote className="w-8 h-8 text-primary/60 mb-3" />
          <p className="text-white/90 text-lg font-medium leading-relaxed italic">
            "{quotes[current].text}"
          </p>
          <p className="mt-3 text-white/70 text-sm">
            — {quotes[current].author}, <span className="text-primary/80">{quotes[current].role}</span>
          </p>
        </motion.div>
      </AnimatePresence>
      {/* Dots indicator */}
      <div className="absolute -bottom-8 left-0 flex gap-2">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-6" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get("mode") === "signup";
  const [isSignUp, setIsSignUp] = useState(initialMode);
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, isLoaded, navigate]);

  return (
    <div className="min-h-screen bg-background flex">
      <PageMeta
        title={isSignUp ? "Sign Up | AI Vized - Start Your AI Employee Trial" : "Login | AI Vized - Access Your AI Dashboard"}
        description={isSignUp
          ? "Create your AI Vized account and start your free trial. Get an AI employee working for your UK business in minutes."
          : "Sign in to your AI Vized dashboard. Manage your AI employees, view analytics, and optimize your customer service automation."
        }
        keywords={isSignUp
          ? "AI Vized sign up, create AI account, AI employee trial, UK business automation signup"
          : "AI Vized login, AI dashboard access, manage AI employees, business automation login"
        }
        canonical={`https://www.aivized.com/auth${isSignUp ? "?mode=signup" : ""}`}
      />

      {/* Left Side — Form */}
      <div className="w-full lg:w-1/2 flex flex-col min-h-screen">
        <div className="p-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 pb-12">
          <div className="w-full max-w-md">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 mb-8 hover:opacity-80 transition-opacity">
              <div className="relative w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-primary/20 animate-pulse" />
                <Bot className="w-5 h-5 text-primary relative z-10" />
              </div>
              <span className="text-2xl font-serif font-semibold tracking-tight text-gradient">AI Vized</span>
            </Link>

            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-serif font-semibold text-foreground mb-2">
                {isSignUp ? "Create your account" : "Welcome back"}
              </h1>
              <p className="text-muted-foreground">
                {isSignUp
                  ? "Start automating your business with AI Vized"
                  : "Sign in to manage your AI Vized dashboard"}
              </p>
            </div>

            {/* Clerk Form */}
            <div className="relative">
              {isSignUp ? (
                <SignUp
                  routing="virtual"
                  appearance={clerkAppearance}
                  signInUrl="/auth"
                  afterSignUpUrl="/dashboard"
                />
              ) : (
                <SignIn
                  routing="virtual"
                  appearance={clerkAppearance}
                  signUpUrl="/auth?mode=signup"
                  afterSignInUrl="/dashboard"
                />
              )}
            </div>

            {!isSignUp && (
              <div className="mt-4 text-center">
                <Link
                  to="/forgot-password"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-border/50 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {isSignUp ? "Already have an account? " : "Don't have an account? "}
                <span className="font-semibold text-primary">
                  {isSignUp ? "Sign in" : "Sign up"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side — Image + Quotes */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        {/* Background image */}
        <img
          src={authSideImage}
          alt="AI assistant helping businesses"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Top tagline */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold tracking-wide uppercase border border-primary/30">
              Trusted by 500+ UK Businesses
            </span>
          </div>

          {/* Bottom quotes */}
          <div className="mt-auto">
            <SlidingQuotes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
