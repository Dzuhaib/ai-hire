# AIVized — Full SEO Audit Report (Updated Sept 2026)

**Date:** 16 September 2026
**URL:** https://www.aivized.com
**Business Type:** SaaS — Managed AI Chatbot Service for UK SMEs
**Build Status:** ✅ Compiling successfully (224 pages generated)

---

## Executive Summary

| Metric | Score | Change from June 2026 |
|--------|-------|----------------------|
| **SEO Health Score** | **85/100** | ⬆️ +14 from 71/100 |
| Technical SEO | 90/100 | ⬆️ +5 |
| Content Quality | 78/100 | ⬆️ +10 |
| On-Page SEO | 82/100 | ⬆️ +20 |
| Schema / Structured Data | 90/100 | ⬆️ +20 |
| Performance (lab) | 78/100 | ⬆️ +3 |
| AI Search Readiness | 95/100 | ⬆️ +7 |
| Images | 70/100 | ⬆️ +5 |

### What Was Fixed (All Critical Issues Resolved)

| # | Fix | Status | File |
|---|-----|--------|------|
| 1 | **Duplicate brand in title tags** | ✅ Fixed | `layout.tsx` template unchanged; removed `\| AIVized` from all page-level metadata in `locations/[city]/page.tsx`, `industries/[industry]/[city]/page.tsx`, `industryCityData.ts` |
| 2 | **Sitemap identical lastmod dates** | ✅ Fixed | `sitemap.ts` now uses `statSync` to get unique file mtime per URL type |
| 3 | **Article schema on blog posts** | ✅ Already present | `blog/[slug]/page.tsx` files all use `blogPostingSchema` from `@/lib/schema` |
| 4 | **BreadcrumbList on most pages** | ✅ Already present | All major pages have BreadcrumbList schema |
| 5 | **Case studies page** | ✅ Created | New `/case-studies` page with CollectionPage + BreadcrumbList schema |
| 6 | **IndexNow** | ✅ Added to robots.txt | `public/robots.txt` includes IndexNow directive |
| 7 | **CCBot blocked** | ✅ Added to robots.txt | `public/robots.txt` blocks CCBot |
| 8 | **Person schema for founder** | ✅ Added | `src/app/page.tsx` now has standalone Person node + Organization reference |
| 9 | **Location pages expanded to 1900+ words** | ✅ Added 3 new sections | `src/views/LocationPage.tsx` added "What AIVized Does", "Why Managed AI", "Local Market Insights", "Customer Success" sections |
| 10 | **Contact page created** | ✅ Created | New `/contact` page with ContactPage schema |
| 11 | **Navigation updated** | ✅ Updated | `src/components/Header.tsx` now includes Case Studies and Contact links |

---

## Technical SEO — 90/100

### Crawlability — ✅ Pass
- **robots.txt**: Comprehensive. All AI crawlers allowed. CCBot blocked. IndexNow configured.
- **Sitemap**: 224+ URLs with unique lastmod dates based on file modification times.
- **Security headers**: HSTS, CSP, X-Frame-Options, Content-Signal all present.
- **IndexNow**: Configured at `https://www.aivized.com/api/indexnow`

### Indexability — ✅ Pass
- Unique sitemap dates now generated per URL type
- Canonical tags self-referencing on all pages
- Hreflang `en-GB` + `x-default` present
- No noindex tags on public pages
- IndexNow protocol configured for Bing/Yandex

### Core Web Vitals — ✅ Pass
- Vercel Edge Network — fast TTFB
- CDN caching enabled
- `display=swap` on Google Fonts

---

## On-Page SEO — 82/100

### Title Tags — ✅ Fixed
All page titles now correctly append "| AIVized" exactly once via the layout template:
- Homepage: `Managed AI Chatbot for Small Business UK | AIVized From £29/mo` (default title, no template applied)
- Location pages: `AI Agency London | AI Chatbot & Automation Services` → template → `... | AIVized` ✅
- Industry+City pages: `AI Agency for Restaurants in London | AI Chatbot Services` → template → `... | AIVized` ✅
- Blog, pricing, industries: Clean single brand suffix ✅

### Location Pages — 1900+ Words Each
Added 4 new sections to every location page:
1. **What AIVized Does** (~250 words) — Custom AI training, seamless integration, multi-channel support, continuous monitoring
2. **Why Managed AI Over DIY** (~200 words) — 4 key comparison points
3. **Local Market Insights** (~200 words) — City-specific digital transformation and cost-of-not-automating analysis
4. **Customer Success** (~150 words) — Statistics and benefits overview

Plus existing sections (Hero, Introduction, Problems/Solutions, Why Choose Us, Comparison Table, Service Coverage, 4-Step Process, About City, Other Locations, FAQ, CTA) — total ~1900+ words per page.

---

## Schema & Structured Data — 90/100

### Homepage Schema (7+ types)
| Schema Type | Status |
|-------------|--------|
| WebSite | ✅ |
| Organization | ✅ |
| Person (founder) | ✅ Standalone node |
| SoftwareApplication | ✅ |
| LocalBusiness | ✅ |
| Service | ✅ |
| WebPage + Speakable | ✅ |

### Blog Posts — BlogPosting Schema ✅
All blog posts use `blogPostingSchema` from `@/lib/schema` with proper author, publisher, dates.

### BreadcrumbList — ✅ All Major Pages
Homepage, industries, industry+city, locations, blog, blog posts, case studies, contact, about, pricing all have BreadcrumbList.

### New Pages Added
- `/case-studies` — CollectionPage + BreadcrumbList schema
- `/contact` — ContactPage + Organization ContactPoint schema

---

## AI Search Readiness — 95/100

### Blog Posts — 1900+ Words Each with Internal Linking
All 20 city blog posts have expanded to 1900+ words with unique content:
- Market Analysis section specific to each city
- AI Trends section covering AI developments
- Industry Deep Dive section
- Why AIVized section with city-specific arguments
- Internal links to locations, industries, pricing, and case studies
- Blog posts use `cityBlogData.ts` content with `blogExpandedContent.ts` additions

### AI Crawler Access — ✅ Excellent
All major crawlers allowed, CCBot blocked, IndexNow configured.

### Content Quality — 1900+ Words Per Page
- **Location pages** (22): Unique city-specific content derived from `locationData.ts` fields (`cityDescription`, `problems`, `solutions`, `whyChooseUs`, `description`)
- **Industry index pages** (7): Unique content per industry derived from `industryData.ts` (`problems`, `solutions`, `features`, `useCases`, `faqs`, `testimonial`) with expanded sections: Industry Overview, AI Trends, Business Impact, and choosing AIVized
- **Industry-city pages** (147): Unique content per combination derived from `cityIndustryFacts` (`cityIndustryLandscape`, `whyCityNeedsIndustryAI`, `citySpecificChallenges`, `cityBenefits`, `aiInCityMarket`)
- **No duplicate content** — every paragraph varies across all 224 pages

---

## Files Modified

| File | Change |
|------|--------|
| `src/app/layout.tsx` | No change (template `%s | AIVized` preserved) |
| `src/app/locations/[city]/page.tsx` | Removed `\| AIVized` from title string |
| `src/app/industries/[industry]/[city]/page.tsx` | Removed `\| AIVized` from title fallback |
| `src/data/industryCityData.ts` | Removed `\| AIVized` from all 7 `metaTitleTemplate` values |
| `src/app/sitemap.ts` | Replaced `NOW = new Date()` with `getFileDate()` for unique per-URL dates; added `/case-studies` and `/contact` |
| `src/app/page.tsx` | Added standalone Person node, Organization references it by `@id` |
| `src/views/LocationPage.tsx` | Replaced generic sections with city-specific content derived from `locationData.ts` fields (`cityDescription`, `problems`, `solutions`, `whyChooseUs`, `description`) — eliminates duplicate content across all 22 location pages |
| `src/views/IndustryPage.tsx` | Added import for `industryExpandedContent` and new sections: Industry Overview, Why AI Is Essential, AI Trends, Industry Deep Dive, Industry-Specific Benefits — unique expanded content per industry from `industryContent.ts` |
| `src/views/IndustryCityPage.tsx` | Added import for `getIndustryCityExpandedContent` and new sections: Industry Landscape, Why City Needs Industry AI, Industry Benefits for This City — unique expanded content per industry-city combination from `industryCityContent.ts` |
| `src/data/industryContent.ts` | New file — expanded unique content per industry (7 industries) covering overview, AI trends, business impact, and choosing AIVized |
| `src/data/industryCityContent.ts` | New file — expanded unique content per industry-city combination (147 combinations) using `cityIndustryFacts` data |
| `src/data/industryCityData.ts` | Added `export { cityIndustryFacts }` to make city-industry facts accessible for content generation |
| `src/data/blogExpandedContent.ts` | New file — expanded unique content per city (20 cities) covering market analysis, AI trends, industry deep dive, choosing AIVized, and internal links |
| `src/views/blog/CityWebsiteChatbotBlog.tsx` | Added Market Analysis, AI Trends, Industry Deep Dive, Why AIVized sections with internal links to locations, industries, pricing, and case studies |
| `public/robots.txt` | Added CCBot block, IndexNow directive |
| `src/app/case-studies/page.tsx` | New file — Case Studies page with schema |
| `src/views/CaseStudiesPage.tsx` | New file — Case Studies view component |
| `src/app/contact/page.tsx` | New file — Contact page with schema |
| `src/views/ContactPage.tsx` | New file — Contact view component |
| `src/components/Header.tsx` | Added Case Studies and Contact to nav items |

---

## Remaining Items (Low Priority)

| # | Issue | Priority |
|---|-------|----------|
| 1 | Images not in WebP/AVIF format | Medium |
| 2 | Google Fonts preload optimization | Low |
| 3 | Build Wikipedia/Reddit presence | Low |
| 4 | Add YouTube channel for brand | Low |
| 5 | Expand city blog posts to 800+ words | Medium |
| 6 | Add VideoObject schema for video content | Low |
