import { NextRequest, NextResponse } from "next/server";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? "e002a936773aea8895e20db3a9fe2cc5";
const HOST = "www.aivized.com";
const CRON_SECRET = process.env.CRON_SECRET;

/** Reject URLs that are not on our own host. */
function isOwnHost(url: string): boolean {
  try {
    const parsed = new URL(url.startsWith("http") ? url : `https://${HOST}${url}`);
    return parsed.hostname === HOST;
  } catch {
    return false;
  }
}

/** Require Authorization: Bearer <CRON_SECRET> when CRON_SECRET env var is set. */
function isAuthorized(req: NextRequest): boolean {
  if (!CRON_SECRET) return true; // secret not configured — allow (warn in logs)
  const authHeader = req.headers.get("authorization");
  return authHeader === `Bearer ${CRON_SECRET}`;
}

// Submit a list of URLs to IndexNow (Bing, Yandex, Naver)
// POST /api/indexnow  { urls: string[] }
// GET  /api/indexnow?url=/blog/my-post  (single URL shortcut)
export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { urls } = await req.json();
  if (!Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json({ error: "urls array required" }, { status: 400 });
  }

  const absoluteUrls = urls.map((u: string) =>
    u.startsWith("http") ? u : `https://${HOST}${u}`
  );

  // Only allow URLs on our own domain
  const invalid = absoluteUrls.filter((u) => !isOwnHost(u));
  if (invalid.length > 0) {
    return NextResponse.json(
      { error: "All URLs must belong to " + HOST },
      { status: 400 }
    );
  }

  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: absoluteUrls,
  };

  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return NextResponse.json(
    { submitted: absoluteUrls.length, status: res.status },
    { status: res.ok ? 200 : 502 }
  );
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "url param required" }, { status: 400 });
  }

  const absolute = url.startsWith("http") ? url : `https://${HOST}${url}`;

  if (!isOwnHost(absolute)) {
    return NextResponse.json(
      { error: "URL must belong to " + HOST },
      { status: 400 }
    );
  }

  const res = await fetch(
    `https://api.indexnow.org/IndexNow?url=${encodeURIComponent(absolute)}&key=${INDEXNOW_KEY}`,
    { method: "GET" }
  );
  return NextResponse.json({ submitted: absolute, status: res.status });
}
