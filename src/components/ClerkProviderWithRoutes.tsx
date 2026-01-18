import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { CLERK_PUBLISHABLE_KEY } from "@/lib/clerk";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import PaymentSuccess from "@/pages/PaymentSuccess";
import Dashboard from "@/pages/Dashboard";
import AuthPage from "@/pages/AuthPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
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
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ClerkProviderWithNavigation>
    </BrowserRouter>
  );
};
