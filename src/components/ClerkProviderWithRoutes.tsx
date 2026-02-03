import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { CLERK_PUBLISHABLE_KEY } from "@/lib/clerk";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import PaymentSuccess from "@/pages/PaymentSuccess";
import Dashboard from "@/pages/Dashboard";
import AuthPage from "@/pages/AuthPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import AdminDashboard from "@/pages/AdminDashboard";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import RefundPolicy from "@/pages/RefundPolicy";
import LocationPage from "@/pages/LocationPage";
import LocationsPage from "@/pages/LocationsPage";
import IndustryPage from "@/pages/IndustryPage";
import IndustriesPage from "@/pages/IndustriesPage";
import PricingPage from "@/pages/PricingPage";
import BlogsPage from "@/pages/BlogsPage";
import WhatsAppChatbotBlog from "@/pages/blog/WhatsAppChatbotBlog";
import WebsiteChatbotBlog from "@/pages/blog/WebsiteChatbotBlog";
import InstagramChatbotBlog from "@/pages/blog/InstagramChatbotBlog";
import { LoadingScreen } from "@/components/LoadingScreen";

const ClerkProviderWithNavigation = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      signInUrl="/auth"
      signUpUrl="/auth"
      afterSignOutUrl="/"
    >
      <ClerkLoading>
        <LoadingScreen />
      </ClerkLoading>
      <ClerkLoaded>
        {children}
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export const ClerkProviderWithRoutes = () => {
  return (
    <BrowserRouter>
      <ClerkProviderWithNavigation>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/pricing" element={<PricingPage />} />
          {/* Location pages for local SEO */}
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:city" element={<LocationPage />} />
          {/* Industries Index */}
          <Route path="/industries" element={<IndustriesPage />} />
          {/* Industry-specific landing pages */}
          <Route path="/restaurants" element={<IndustryPage />} />
          <Route path="/real-estate" element={<IndustryPage />} />
          <Route path="/ecommerce" element={<IndustryPage />} />
          {/* Blog pages */}
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/blog/whatsapp-chatbot-uk-business" element={<WhatsAppChatbotBlog />} />
          <Route path="/blog/website-chatbot-small-business" element={<WebsiteChatbotBlog />} />
          <Route path="/blog/instagram-chatbot-social-media" element={<InstagramChatbotBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ClerkProviderWithNavigation>
    </BrowserRouter>
  );
};
