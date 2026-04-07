import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "aivized-cookie-consent";

type ConsentValue = "accepted" | "declined" | null;

export const CookieConsent = () => {
  const [consent, setConsent] = useState<ConsentValue>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentValue;
    if (!storedConsent) {
      // Small delay for better UX - don't flash immediately on load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
    setConsent(storedConsent);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setConsent("accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setConsent("declined");
    setIsVisible(false);
  };

  if (!isVisible || consent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur-lg border border-border rounded-2xl shadow-2xl p-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
          </div>
          
          <div className="flex-grow space-y-2">
            <h3 className="font-semibold text-foreground">We Value Your Privacy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your browsing experience, analyse site traffic, and personalise content. 
              Under UK GDPR, we need your consent to use non-essential cookies. You can manage your preferences 
              at any time. Learn more in our{" "}
              <a 
                href="/privacy-policy" 
                className="text-primary hover:underline font-medium"
              >
                Privacy Policy
              </a>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 md:flex-shrink-0">
            <Button
              variant="outline"
              onClick={handleDecline}
              className="text-sm"
            >
              <X className="w-4 h-4 mr-1" />
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              className="text-sm bg-primary hover:bg-primary/90"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
