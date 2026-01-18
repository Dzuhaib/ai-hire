import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSignIn } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { Bot, ArrowLeft, Mail, Key, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

type Step = "email" | "code" | "password" | "success";

const ForgotPasswordPage = () => {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, isLoaded } = useSignIn();
  const navigate = useNavigate();

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !signIn) return;

    setLoading(true);
    try {
      await signIn.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });
      setStep("code");
      toast.success("Reset code sent to your email!");
    } catch (error: any) {
      console.error("Error sending reset code:", error);
      toast.error(error.errors?.[0]?.message || "Failed to send reset code");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !signIn) return;

    setLoading(true);
    try {
      const result = await signIn.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
      });

      if (result.status === "needs_new_password") {
        setStep("password");
      }
    } catch (error: any) {
      console.error("Error verifying code:", error);
      toast.error(error.errors?.[0]?.message || "Invalid code");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !signIn) return;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    try {
      const result = await signIn.resetPassword({
        password,
      });

      if (result.status === "complete") {
        setStep("success");
        toast.success("Password reset successfully!");
      }
    } catch (error: any) {
      console.error("Error resetting password:", error);
      toast.error(error.errors?.[0]?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case "email":
        return (
          <form onSubmit={handleSendCode} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !email}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg shadow-lg shadow-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Reset Code"
              )}
            </button>
          </form>
        );

      case "code":
        return (
          <form onSubmit={handleVerifyCode} className="space-y-6">
            <p className="text-sm text-muted-foreground text-center mb-4">
              We sent a reset code to <span className="text-foreground font-medium">{email}</span>
            </p>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Reset code
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter the code"
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-center text-lg tracking-widest font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !code}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg shadow-lg shadow-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify Code"
              )}
            </button>

            <button
              type="button"
              onClick={() => setStep("email")}
              className="w-full text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Didn't receive the code? Try again
            </button>
          </form>
        );

      case "password":
        return (
          <form onSubmit={handleResetPassword} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                New password
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                  minLength={8}
                  className="w-full pl-11 pr-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Confirm password
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  required
                  minLength={8}
                  className="w-full pl-11 pr-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !password || !confirmPassword}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg shadow-lg shadow-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Resetting...
                </>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>
        );

      case "success":
        return (
          <div className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto"
            >
              <CheckCircle className="w-8 h-8 text-green-500" />
            </motion.div>

            <div>
              <h2 className="text-xl font-serif font-semibold text-foreground mb-2">
                Password Reset Complete
              </h2>
              <p className="text-sm text-muted-foreground">
                Your password has been successfully reset. You can now sign in with your new password.
              </p>
            </div>

            <button
              onClick={() => navigate("/auth")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg shadow-lg shadow-primary/20 transition-all"
            >
              Sign In
            </button>
          </div>
        );
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case "email":
        return "Reset your password";
      case "code":
        return "Enter reset code";
      case "password":
        return "Create new password";
      case "success":
        return "";
    }
  };

  const getStepDescription = () => {
    switch (step) {
      case "email":
        return "Enter your email and we'll send you a reset code";
      case "code":
        return "Check your email for the reset code";
      case "password":
        return "Choose a strong password for your account";
      case "success":
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="relative w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-xl bg-primary/20 animate-pulse" />
            <Bot className="w-5 h-5 text-primary relative z-10" />
          </div>
          <span className="text-2xl font-serif font-semibold tracking-tight">
            <span className="text-gradient">Rentlized</span>
            <span className="text-foreground">AI</span>
          </span>
        </div>

        {/* Card */}
        <div className="card-premium p-8 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            {step !== "success" && (
              <>
                {/* Back Link */}
                <Link
                  to="/auth"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to sign in
                </Link>

                {/* Header */}
                <div className="mb-6">
                  <h1 className="text-2xl font-serif font-semibold text-foreground mb-2">
                    {getStepTitle()}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {getStepDescription()}
                  </p>
                </div>
              </>
            )}

            {renderStep()}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPasswordPage;