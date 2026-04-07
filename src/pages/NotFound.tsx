import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageMeta } from "@/components/PageMeta";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <PageMeta
        title="Page Not Found | AIVized"
        description="The page you're looking for doesn't exist. Return to AIVized homepage for managed AI chatbot services from £29/month."
        keywords="404 page not found, AIVized"
      />
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-serif font-semibold text-gradient">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="btn-primary inline-block text-sm">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
