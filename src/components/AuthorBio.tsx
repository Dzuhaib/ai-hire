import Image from "next/image";
import Link from "next/link";

interface AuthorBioProps {
  name?: string;
  role?: string;
  bio?: string;
  linkedIn?: string;
  avatar?: string;
}

export function AuthorBio({
  name = "Zuhaib Ahmed",
  role = "Founder, AIVized",
  bio = "Zuhaib Ahmed is the founder of AIVized, a managed AI chatbot service for UK small businesses. With hands-on experience deploying AI chatbots across restaurants, real estate, healthcare, and e-commerce, he writes from direct expertise in what works for UK SMEs.",
  linkedIn = "https://www.linkedin.com/in/zuhaibah/",
  avatar = "/zuhaib.png",
}: AuthorBioProps) {
  return (
    <div className="not-prose mt-12 pt-8 border-t border-border/50">
      <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-border shrink-0">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
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
              href="/blog"
              className="text-xs text-muted-foreground hover:text-primary transition-colors underline"
            >
              More articles
            </Link>
            <span className="text-muted-foreground/40">·</span>
            <a
              href={linkedIn}
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
