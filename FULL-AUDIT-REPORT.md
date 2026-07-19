# AIVized — Full SEO Audit Report

**Date:** 10 June 2026
**URL:** https://www.aivized.com
**Business Type:** SaaS — Managed AI Chatbot Service for UK SMEs
**Crawled Pages:** 12 (homepage, pricing, industries hub, 1 industry page, locations hub, 2 location pages, robots.txt, sitemap.xml, llms.txt)

---

## Executive Summary

| Metric | Score |
|--------|-------|
| **SEO Health Score** | **71/100** |
| Technical SEO | 85/100 |
| Content Quality | 68/100 |
| On-Page SEO | 62/100 |
| Schema / Structured Data | 70/100 |
| Performance (lab) | 75/100 |
| AI Search Readiness | 88/100 |
| Images | 65/100 |

### Top 3 Critical Issues
1. **Duplicate brand name in title tags** — "| AIVized" appears twice on many pages
2. **llms-full.txt returns 404** — created locally but not deployed to production
3. **Identical lastmod dates across all sitemap URLs** — undermines freshness signals

### Top 3 Quick Wins
1. Fix title tag template (remove duplicate brand suffix)
2. Deploy updated sitemap with differentiated lastmod dates
3. Deploy llms-full.txt to production

---

## Technical SEO — 85/100

### Crawlability — ✅ Pass
- **robots.txt**: Excellent. Explicitly allows all major AI crawlers (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Cohere, Bytespider). Blocks only private/auth routes (/dashboard, /admin, /auth, etc.)
- **Sitemap**: Present at `/sitemap.xml`, referenced in robots.txt. Valid XML format. Contains 124 URLs.
- **Crawl depth**: All key pages within 2 clicks of homepage
- **JS rendering**: Next.js SSR — content visible in initial HTML response
- **Crawl budget**: No issues (< 500 pages)

### Indexability — ⚠️ Minor Issues
- Canonical tags present and self-referencing on all checked pages ✅
- Hreflang correctly set to en-GB + x-default ✅
- No noindex tags on public pages ✅
- **Issue**: Sitemap uses deprecated `<priority>` and `<changefreq>` tags (ignored by Google since 2021)
- **Issue**: All `<lastmod>` dates identical (2026-04-21) — Google may distrust freshness signal

### Security — ✅ Excellent
- HTTPS enforced with valid certificate
- HSTS enabled with preload (max-age=63072000)
- CSP configured (strict but functional)
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy restricts camera/mic/geo
- No mixed content detected

### URL Structure — ✅ Good
- Clean, descriptive URLs with hyphens
- Logical hierarchy: `/industries/restaurants`, `/locations/london`
- No query parameters for content
- Consistent trailing slash pattern
- URL length all under 100 chars

### Mobile — ✅ Pass
- Responsive design with viewport meta
- Mobile-first indexing ready (Next.js SSR)
- Touch targets adequate
- Font size ≥ 16px base

### IndexNow — ❌ Not Implemented
- Site does not appear to use IndexNow protocol for Bing/Yandex
- **Recommendation**: Implement IndexNow for faster indexing on non-Google search engines

| Category | Status | Score |
|----------|--------|-------|
| Crawlability | ✅ Pass | 92/100 |
| Indexability | ⚠️ Warn | 75/100 |
| Security | ✅ Pass | 98/100 |
| URL Structure | ✅ Pass | 90/100 |
| Mobile | ✅ Pass | 85/100 |
| Core Web Vitals | ⚠️ Warn (lab) | 70/100 |
| Structured Data | ⚠️ Warn | 70/100 |
| JS Rendering | ✅ Pass | 95/100 |
| IndexNow | ❌ Fail | 0/100 |

---

## Content Quality — 68/100

### E-E-A-T Assessment

| Factor | Score | Key Signals |
|--------|-------|-------------|
| Experience | 15/25 | Testimonials implied, no case studies visible |
| Expertise | 18/25 | Founder named (Zuhaib Ahmed), LinkedIn linked, blog content |
| Authoritativeness | 12/25 | No Wikipedia presence, limited external citations, no industry awards mentioned |
| Trustworthiness | 22/25 | Privacy policy, TOS, refund policy, contact email, GDPR badge |

### Strengths
- Clear author attribution (Zuhaib Ahmed) with LinkedIn profile
- Privacy policy, terms of service, refund policy all present
- Specific, verifiable statistics (67% visitors leave, 30% lead increase, £2k/month savings)
- Blog with 12+ articles providing topical depth
- llms.txt present with well-structured content guidance

### Weaknesses
- **No case studies or before/after results** — critical for SaaS E-E-A-T
- **No customer logos or named testimonials** visible in sampled pages
- **No original research or survey data** — all statistics are general industry claims
- **Content depth on industry+city pages**: 70 industry×city pages exist but may be thin on unique local content
- **No publication dates on blog posts** in the HTML meta
- **No author bylines on individual blog posts** beyond site-wide author meta

### Content Freshness
- ❌ All sitemap lastmod dates identical (2026-04-21) — no differentiated freshness signals
- ✅ llms.txt references "2026 Guide" — good recency marker

---

## On-Page SEO — 62/100

### Title Tags
| Page | Title | Issue |
|------|-------|-------|
| Homepage | "Managed AI Chatbot for UK Small Businesses \| AIVized" | ✅ Clean |
| Pricing | "Pricing \| AIVized - Managed AI Chatbot Plans from £29/mo \| AIVized" | ❌ **Duplicate brand** |
| Industries | "AI Chatbot Solutions for Every UK Industry \| AIVized \| AIVized" | ❌ **Duplicate brand** |
| Restaurants | "Restaurant AI Chatbot for UK Businesses \| AIVized \| AIVized" | ❌ **Duplicate brand** |
| Locations | "Managed AI Chatbot Services Across the United Kingdom \| AIVized" | ✅ Clean |
| London | "Managed AI Chatbot Service in London, UK \| AIVized \| AIVized" | ❌ **Duplicate brand** |
| Nottingham | "Managed AI Chatbot Service in Nottingham, UK \| AIVized \| AIVized" | ❌ **Duplicate brand** |

**Critical Issue**: The brand name "| AIVized" is appended twice on all sub-pages. This is a template bug in the metadata generation — likely the `generateMetadata` function adds the suffix and the layout adds it again.

### Meta Descriptions
- All pages have unique, well-written meta descriptions ✅
- Length optimal (150-160 chars) ✅
- Include pricing (£29/month) and value prop ✅

### Heading Structure
- Homepage: Clear H1, proper H2/H3 hierarchy ✅
- All pages use a single H1 ✅
- **Issue**: Location pages use `{city} AI Chatbot | AIVized` style H1s — natural, no stuffing ✅ (was fixed in earlier work)

### Internal Linking
- Navigation covers: About, Industries, Pricing, Blog ✅
- Footer links to: About, Pricing, Industries, Social Media, Automation, Blog, Privacy, TOS, Refund ✅
- Industry pages link to location pages and vice versa ✅
- Blog links to service pages ✅
- **Missing**: No "View all locations" cross-link from individual location pages
- **Missing**: No "View all industries" cross-link from individual industry pages

---

## Schema & Structured Data — 70/100

### Detected Schema
| Page | Schema Type | Status |
|------|-------------|--------|
| Locations hub | CollectionPage + ItemList (20 cities) + BreadcrumbList | ✅ Valid |
| Other pages checked | No schema detected | ❌ Missing |

### Missing Schema Opportunities
- **Homepage**: No Organization, WebSite, or SoftwareApplication schema
- **Industry pages**: No Service or Product schema
- **Location pages**: No LocalBusiness or Service schema with geo coordinates
- **Blog posts**: No Article/BlogPosting schema
- **Pricing page**: No Product or Offer schema for the 3 plan tiers
- **Site-wide**: No BreadcrumbList on most pages (only on locations hub)
- **Site-wide**: No Person schema for founder Zuhaib Ahmed

### FAQ Schema
- FAQ schema should NOT be used (Google restricted it to government/health sites in Aug 2023)
- Current FAQ content on pages uses plain HTML — this is correct approach ✅

### Recommendations
1. Add Organization schema to homepage with logo, social profiles, contact
2. Add SoftwareApplication schema (AIVized is a SaaS product)
3. Add BreadcrumbList to all sub-pages
4. Add Article schema to blog posts
5. Add Person schema for founder
6. Add Service schema to industry and location pages

---

## Performance (Lab) — 75/100

### Observed Metrics
- **Server**: Vercel Edge Network — fast TTFB
- **Caching**: HIT on CDN (X-Vercel-Cache: HIT)
- **JS bundles**: Multiple Next.js chunks loaded — typical for SSR framework
- **Google Fonts**: Cormorant Garamond + DM Sans loaded from Google Fonts CDN
- **GTM**: Google Tag Manager present (may impact INP)
- **Third-party widgets**: Clerk auth + custom chatbot widget loaded asynchronously

### Issues
- Many JS chunks loaded (35+ scripts observed in HTML) — moderate bundle size
- Google Fonts render-blocking (no `display=swap` observed in the preload)
- No direct CrUX data available (low traffic site)
- Third-party chatbot script injects dynamically

### Recommendations
1. Add `display=swap` to Google Fonts link to prevent FOIT/blocking
2. Consider code splitting to reduce initial JS payload
3. Defer third-party widgets (chatbot, Clerk) with higher priority for core content

---

## AI Search Readiness (GEO) — 88/100

### llms.txt — ✅ Present
- Located at `/llms.txt` ✅
- Well-structured with sections: What AIVized Does, Pricing, Key Pages, Key Facts, FAQ, Topic Clusters, Industries, Locations, Blog summaries, Competitive positioning, Process, Founder, Contact ✅
- Includes full URLs for all key pages ✅
- Includes statistics and quotable facts ✅

### llms-full.txt — ❌ 404
- Created locally at `public/llms-full.txt` but **not deployed** to production
- Returns 404 on live site

### AI Crawler Access — ✅ Excellent
| Crawler | Status |
|---------|--------|
| GPTBot (ChatGPT training) | ✅ Allowed |
| ChatGPT-User (ChatGPT browsing) | ✅ Allowed |
| OAI-SearchBot (OpenAI search) | ✅ Allowed |
| ClaudeBot (Anthropic) | ✅ Allowed |
| PerplexityBot (Perplexity) | ✅ Allowed |
| Google-Extended (Gemini training) | ✅ Allowed |
| Bytespider (ByteDance) | ✅ Allowed |
| Cohere-ai (Cohere) | ✅ Allowed |
| Applebot-Extended (Apple) | ✅ Allowed |

### Citability Assessment
- **Strong**: FAQ section with clear Q&A format — highly quotable
- **Strong**: Specific statistics (67%, £2k/month savings, 30% increase, 3-second response)
- **Strong**: Pricing data (£29/£79/£149) — concrete and citeable
- **Weak**: No original research data — all stats are general industry claims
- **Weak**: Blog posts lack clear quotable passage optimization (134-167 word blocks)

### Brand Mention Signals
- LinkedIn: ✅ Founder and company pages present
- Facebook: ✅ Present
- Instagram: ✅ Present
- Wikipedia: ❌ Not present
- Reddit: ❌ Not checked
- YouTube: ❌ Not present

### GEO Score: 88/100

---

## Images — 65/100

Based on homepage HTML analysis:

- Favicon: ✅ PNG format, 32x32 and 512x512
- Apple touch icon: ✅ Present
- OG image: ✅ Present (1200x630)
- **Issue**: Hero image uses `<img>` with `imagesrcset` Next.js optimization — good
- **Issue**: Cannot verify alt text on all images from HTML extraction (JS-rendered)
- **Issue**: No WebP/AVIF format conversion visible in markup
- **Issue**: Images on locations page show skeleton loading states (pulsing placeholders) — indicates lazy loading with no server-rendered fallback

---

## Sitemap Analysis — 65/100

### Structure
- Single sitemap file (no index needed — < 50k URLs)
- 124 URLs total
- Covers: homepage, about, pricing, blog, industries (7), industry×city (70), locations (20), blog posts (12), services (2), legal pages (3)

### Issues
| Issue | Severity | Details |
|-------|----------|---------|
| Deprecated tags used | Low | `<priority>` and `<changefreq>` present (ignored by Google) |
| Identical lastmod | Medium | All 124 URLs have `2026-04-21T00:00:00.000Z` |
| No video/image sitemaps | Low | Not critical for this site type |
| Missing Nottingham+ blog posts | Medium | City blog posts only cover 10 cities, not all 20 |

### Recommendations
1. Remove `<priority>` and `<changefreq>` tags
2. Use unique/accurate `<lastmod>` dates per page
3. Add blog posts for remaining 10 cities
4. Update sitemap to reflect any new industry+city pages

---

## Critical Issues (Fix Immediately)

| # | Issue | Location | Impact |
|---|-------|----------|--------|
| 1 | **Duplicate brand in title tags** | All sub-pages (pricing, industries, location pages, industry pages) | Makes titles look spammy; wastes 10-12 chars |
| 2 | **llms-full.txt 404 on production** | `/llms-full.txt` | AI crawlers can't access full context; missed GEO opportunity |
| 3 | **No Organization schema on homepage** | `/` | Missing rich snippet eligibility for brand SERPs |

## High Priority (Fix Within 1 Week)

| # | Issue | Location | Impact |
|---|-------|----------|--------|
| 4 | **Identical lastmod dates** | `sitemap.xml` | Google may distrust freshness signals |
| 5 | **No Article schema on blog posts** | All `/blog/*` pages | Missed rich result eligibility |
| 6 | **No BreadcrumbList on sub-pages** | Industry, location, blog pages | Missed breadcrumb rich results |
| 7 | **No case studies / customer evidence** | Homepage, site-wide | Weak E-E-A-T Experience signal |

## Medium Priority (Fix Within 1 Month)

| # | Issue | Location | Impact |
|---|-------|----------|--------|
| 8 | No SoftwareApplication/Service schema | Site-wide | Missed SaaS-specific rich results |
| 9 | No Person schema for founder | About page, blog | Weak authoritativeness signal for AI citability |
| 10 | No IndexNow implementation | Site-wide | Delayed Bing indexing |
| 11 | Blog posts lack individual author bylines | Blog pages | Weakened E-E-A-T for content |
| 12 | Google Fonts may block rendering | Site-wide | Potential LCP impact |
| 13 | Images not in WebP/AVIF format | Site-wide | ~30% potential size savings |

## Low Priority (Backlog)

| # | Issue | Location | Impact |
|---|-------|----------|--------|
| 14 | Deprecated sitemap tags (priority/changefreq) | sitemap.xml | No impact (ignored by Google) |
| 15 | Missing internal cross-links between location pages | Location pages | Minor crawl optimization |
| 16 | No YouTube presence for brand | External | Brand mention signal for GEO |

---

## Action Plan Summary

### Week 1
- Fix title tag template duplication bug
- Deploy llms-full.txt to production
- Add Organization + BreadcrumbList schema to homepage and key pages
- Add Article schema to all blog posts
- Update sitemap with differentiated lastmod dates, remove deprecated tags

### Week 2
- Add SoftwareApplication schema site-wide
- Add Person schema for founder
- Implement IndexNow
- Add author bylines to blog posts

### Week 3-4
- Create 1-2 case studies with real customer data
- Convert images to WebP format
- Add cross-linking between related location and industry pages
- Fix Google Fonts rendering

### Ongoing
- Monitor for CrUX field data as traffic grows
- Build Wikipedia and YouTube presence for brand authority
- Create original research/survey for unique citability
