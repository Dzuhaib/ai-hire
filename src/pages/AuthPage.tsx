import { SignIn, SignUp, useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bot, ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen bg-background flex flex-col">
      {/* Back Navigation */}
      <div className="p-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center gap-3 mb-8 hover:opacity-80 transition-opacity">
            <div className="relative w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-primary/20 animate-pulse" />
              <Bot className="w-5 h-5 text-primary relative z-10" />
            </div>
            <span className="text-2xl font-serif font-semibold tracking-tight text-gradient">aivized</span>
          </Link>

        {/* Auth Component */}
        <div className="card-premium p-8 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            {/* Custom Header */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-serif font-semibold text-foreground mb-2">
                {isSignUp ? "Create your account" : "Welcome back"}
              </h1>
              <p className="text-sm text-muted-foreground">
                {isSignUp 
                  ? "Start automating your business with aivized" 
                  : "Sign in to manage your aivized dashboard"}
              </p>
            </div>

            {isSignUp ? (
              <SignUp
                routing="virtual"
                appearance={{
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
                  },
                  layout: {
                    logoPlacement: "none",
                    showOptionalFields: false,
                  },
                }}
                signInUrl="/auth"
                afterSignUpUrl="/dashboard"
              />
            ) : (
              <SignIn
                routing="virtual"
                appearance={{
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
                  },
                  layout: {
                    logoPlacement: "none",
                    showOptionalFields: false,
                  },
                }}
                signUpUrl="/auth?mode=signup"
                afterSignInUrl="/dashboard"
              />
            )}

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
                {isSignUp
                  ? "Already have an account? "
                  : "Don't have an account? "}
                <span className="font-semibold text-primary">
                  {isSignUp ? "Sign in" : "Sign up"}
                </span>
              </button>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;
