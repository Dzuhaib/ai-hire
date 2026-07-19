import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const LLMS_FULL_PATH = path.join(process.cwd(), "public", "llms-full.txt");
const LLMS_PATH = path.join(process.cwd(), "public", "llms.txt");

const pageSections: Record<string, string | undefined> = {
  "/": undefined,
  "/pricing": "## Pricing Plans",
  "/about": "## Founder & Team",
  "/industries": "## Industries Served",
  "/industries/restaurants": "### Restaurants & Hospitality",
  "/industries/real-estate": "### Real Estate & Estate Agents",
  "/industries/ecommerce": "### E-commerce & Retail",
  "/industries/healthcare": "### Healthcare & Clinics",
  "/industries/legal": "### Legal Services",
  "/industries/fitness": "### Fitness & Gyms",
  "/industries/travel": "### Travel & Tourism",
  "/locations": "## UK Locations Covered",
};

function extractSection(content: string, heading: string): string {
  const lines = content.split("\n");
  let start = -1;
  let depth = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith(heading)) {
      start = i;
      depth = heading.match(/^#+/)?.[0].length || 2;
      break;
    }
  }

  if (start === -1) return "";

  const result: string[] = [];
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(/^(#{1,6})\s/);
    if (match) {
      const currentDepth = match[1].length;
      if (currentDepth <= depth) break;
    }
    result.push(line);
  }

  return [`# AIVized`, `> ${lines[start].replace(/^#{1,6}\s/, "")}`, "", ...result].join("\n");
}

export async function GET(request: NextRequest) {
  const requestPath = request.nextUrl.searchParams.get("path") || "/";

  try {
    const fullContent = fs.readFileSync(LLMS_FULL_PATH, "utf-8");

    if (requestPath === "/" || !pageSections[requestPath]) {
      return new NextResponse(fullContent, {
        headers: { "Content-Type": "text/markdown; charset=utf-8" },
      });
    }

    const heading = pageSections[requestPath];
    if (!heading) {
      return new NextResponse(fullContent, {
        headers: { "Content-Type": "text/markdown; charset=utf-8" },
      });
    }

    const sectionContent = extractSection(fullContent, heading);
    if (!sectionContent) {
      return new NextResponse(fullContent, {
        headers: { "Content-Type": "text/markdown; charset=utf-8" },
      });
    }

    return new NextResponse(sectionContent, {
      headers: { "Content-Type": "text/markdown; charset=utf-8" },
    });
  } catch {
    return new NextResponse("# AIVized\n\nManaged AI chatbot service for UK small businesses.", {
      headers: { "Content-Type": "text/markdown; charset=utf-8" },
    });
  }
}
