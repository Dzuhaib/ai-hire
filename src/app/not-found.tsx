import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 pt-32 pb-20">
        <div className="text-center max-w-lg">
          <p className="text-8xl font-serif font-bold text-primary/20 mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Page not found
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Try one of these instead:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link href="/" className="btn-primary">
              Go home
            </Link>
            <Link
              href="/industries"
              className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:border-primary/50 hover:bg-secondary transition-all"
            >
              Browse industries
            </Link>
            <Link
              href="/blog"
              className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:border-primary/50 hover:bg-secondary transition-all"
            >
              Read the blog
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Looking for pricing?{" "}
            <Link href="/pricing" className="text-primary hover:underline">
              View our plans
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
