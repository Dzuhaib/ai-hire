"use client";

import Image from 'next/image';
import { SignIn, SignUp, useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Bot, ArrowLeft } from "lucide-react";
const authSideImage = "/assets/auth-side-image.png";

const clerkAppearance = {
  elements: {
    rootBox: "w-full",
    card: "bg-transparent shadow-none p-0",
    header: "hidden",
    headerTitle: "hidden",
    headerSubtitle: "hidden",
    socialButtonsBlockButton: "!bg-secondary !border !border-border hover:!bg-secondary/80 !text-foreground !font-medium !rounded-xl !transition-all !h-12",
    socialButtonsBlockButtonText: "!text-foreground !font-medium",
    socialButtonsProviderIcon: "!w-5 !h-5",
    dividerLine: "!bg-border",
    dividerText: "!text-muted-foreground !text-xs",
    dividerRow: "!my-6",
    form: "!space-y-5",
    formFieldRow: "!mb-0",
    formFieldInput: "!bg-muted/50 !border !border-border !text-foreground placeholder:!text-muted-foreground !rounded-xl !h-12 !px-4 focus:!ring-2 focus:!ring-primary/30 focus:!border-primary !transition-all !text-sm",
    formFieldLabel: "!text-foreground !font-medium !text-sm !mb-2 !block",
    formButtonPrimary: "!bg-primary hover:!bg-primary/90 !text-primary-foreground !font-semibold !rounded-xl !shadow-lg !shadow-primary/20 !transition-all !h-12 !mt-3",
    footerAction: "hidden",
    footerActionLink: "hidden",
    identityPreviewText: "text-foreground",
    identityPreviewEditButton: "text-primary hover:text-primary/80",
    formFieldInputShowPasswordButton: "text-muted-foreground hover:text-foreground",
    footer: "hidden",
    logoBox: "hidden",
    logoImage: "hidden",
    otpCodeFieldInput: "!bg-muted/50 !border-2 !border-primary/50 !text-foreground !text-2xl !font-bold !rounded-xl !w-12 !h-14 focus:!ring-2 focus:!ring-primary focus:!border-primary !transition-all",
    otpCodeField: "gap-3",
    otpCodeFieldInputs: "gap-3",
    formResendCodeLink: "text-primary hover:text-primary/80 font-medium",
    verificationLinkStatusText: "text-foreground",
    verificationLinkStatusBox: "bg-muted/50 border-border rounded-xl p-4",
    formHeaderTitle: "text-xl font-serif font-semibold text-foreground",
    formHeaderSubtitle: "text-muted-foreground text-sm mt-2",
    backLink: "text-primary hover:text-primary/80",
  },
  layout: {
    logoPlacement: "none" as const,
    showOptionalFields: false,
  },
};

const AuthPage = () => {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "signup";
  const [isSignUp, setIsSignUp] = useState(initialMode);
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, isLoaded, router]);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side — Form */}
      <div className="w-full lg:w-[55%] flex flex-col min-h-screen">
        <div className="p-6 lg:p-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 sm:px-10 lg:px-20 pb-12">
          <div className="w-full max-w-[400px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-10 hover:opacity-80 transition-opacity">
              <div className="relative w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary relative z-10" />
              </div>
              <span className="text-2xl font-serif font-semibold tracking-tight text-gradient">AIVized</span>
            </Link>

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-serif font-semibold text-foreground mb-2">
                {isSignUp ? "Create your account" : "Welcome back"}
              </h1>
              <p className="text-muted-foreground text-sm">
                {isSignUp
                  ? "Start automating your business with AIVized"
                  : "Sign in to manage your AIVized dashboard"}
              </p>
            </div>

            {/* Clerk Form */}
            <div className="px-1">
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
                  href="/forgot-password"
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

      {/* Right Side — Image + Value Proposition */}
      <div className="hidden lg:block w-[45%] p-4">
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          {/* Background image */}
          <Image src={authSideImage} alt="AIVized AI systems and automation platform" width={800} height={600} className="w-full h-full object-cover" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between p-10 h-full">
            {/* Top tagline */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-semibold tracking-wide uppercase border border-white/20">
                AI Systems, Automation &amp; Digital Growth
              </span>
            </div>

            {/* Bottom message */}
            <div className="mb-6">
              <Bot className="w-8 h-8 text-primary mb-4" />
              <p className="text-white text-xl font-medium leading-relaxed max-w-sm">
                One partner for AI systems, automations, SEO and GEO, digital marketing, web development,
                and desktop software.
              </p>
              <p className="mt-4 text-white/60 text-sm max-w-sm">
                Built for UK businesses that want practical improvements, clear scope, and support after
                launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
