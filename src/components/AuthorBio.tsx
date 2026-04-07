import Link from "next/link";

interface AuthorBioProps {
  name?: string;
  role?: string;
  bio?: string;
}

export function AuthorBio({
  name = "AIVized Editorial Team",
  role = "AI Chatbot Specialists",
  bio = "The AIVized team specialises in managed AI chatbot solutions for UK small businesses. With hands-on experience deploying chatbots across restaurants, real estate, healthcare, and e-commerce, we write from direct expertise in what works for UK SMEs.",
}: AuthorBioProps) {
  return (
    <div className="not-prose mt-12 pt-8 border-t border-border/50">
      <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50">
        <div className="w-12 h-12 rounded-full bg-primary/8 border border-border flex items-center justify-center shrink-0">
          <span className="text-xl font-serif font-bold text-primary">
            {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="font-semibold text-foreground">{name}</p>
            <span className="text-muted-foreground">·</span>
            <p className="text-sm text-primary">{role}</p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
          <div className="flex items-center gap-3 mt-3">
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-primary transition-colors underline"
            >
              More from AIVized
            </Link>
            <span className="text-muted-foreground/40">·</span>
            <a
              href="https://www.linkedin.com/company/aivized"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
