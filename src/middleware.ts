import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") || "";

  if (accept.includes("text/markdown")) {
    const url = request.nextUrl.clone();
    url.pathname = "/api/markdown";
    url.searchParams.set("path", request.nextUrl.pathname);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon|llms|robots|sitemap|auth\\.md|assets|images).*)"],
};
