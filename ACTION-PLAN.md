# AIVized.com — Prioritized SEO Action Plan

## Legend
- 🚨 **Critical** — Blocks indexing or causes penalties
- 🔴 **High** — Significantly impacts rankings
- 🟡 **Medium** — Optimization opportunity
- 🟢 **Low** — Nice to have

---

## 🚨 CRITICAL — Fix Immediately

### 1. Complete City Coverage Gap
**Files:** `src/data/industryCityData.ts`, `src/data/cityBlogData.ts`, `src/data/blogData.ts`  
**Effort:** 4-6 hours  
**Impact:** +70 indexable pages + 10 blog posts  

Add 10 missing cities to industry-city combinations and city blog data:
- Nottingham, Cardiff, Leicester, Brighton, Southampton, Oxford, Cambridge, Coventry, Belfast, Aberdeen

Each city needs:
- Industry+City entries for all 7 industries (70 pages)
- A city blog post entry in `blogData.ts`
- Content in `cityBlogData.ts`
- Unique `localFact` content in `industryCityData.ts`

---

### 2. Thicken Content on 140 Industry+City Pages
**Files:** `src/views/IndustryCityPage.tsx`, `src/data/industryCityData.ts`  
**Effort:** 8-12 hours  
**Impact:** Reduces thin-content penalty risk  

Add unique content sections per city:
- Add a 2-3 sentence "Why {city}" section unique to each city+industry combo
- Add city-specific stat lines (e.g., "There are X restaurants in {city}")
- Use city-specific hero images (currently all use the same industry image)
- Add internal links to the relevant city blog post

---

### 3. Fix Hardcoded Sitemap Dates
**File:** `src/app/sitemap.ts` (line 8)  
**Effort:** 5 minutes  
**Impact:** Better crawl freshness signals  

Change: `const NOW = "2026-04-21T00:00:00.000Z";`  
To: `const NOW = new Date().toISOString();`

---

### 4. Rewrite H1 Keyword Stuffing in Location Pages
**File:** `src/data/locationData.ts` (heroTagline fields)  
**Effort:** 30 minutes  
**Impact:** Better user experience, avoids keyword stuffing penalties  

Current: `"AI Chatbot Service London, Lead Generation Chatbot"`  
Should be: `"AI Chatbot Service for London Businesses"`

---

## 🔴 HIGH — Fix Within 1 Week

### 5. Unique Meta Descriptions for Location Pages
**File:** `src/app/locations/[city]/page.tsx` (lines 20-22)  
**Effort:** 30 minutes  
**Impact:** Better CTR from SERPs  

Write unique meta descriptions per city instead of the template:
```
"Get a fully managed AI chatbot service in {city} for your business..."
```
Add industry-specific hooks or local context to each description.

---

### 6. Add FAQPage Schema to FAQ Sections
**Files:** Location, Industry, Industry+City page files  
**Effort:** 1 hour  
**Impact:** Rich result eligibility (FAQ in SERPs)

Wrap existing FAQ JSON-LD data with `@type: "FAQPage"` and `mainEntity` array.

---

### 7. City-Specific Hero Images for Industry+City Pages
**File:** `src/views/IndustryCityPage.tsx`  
**Effort:** 2-4 hours  
**Impact:** Better visual uniqueness, reduces duplicate content signals  

Generate or commission city+industry specific images. At minimum, overlay city name on industry images.

---

### 8. Collect Real Testimonials
**Effort:** Ongoing  
**Impact:** Major E-E-A-T improvement  

Replace fictional testimonials ("Marco, Trattoria Milano") with real customer quotes, real names, real company URLs, and ideally photos.

---

### 9. Add Blog-to-Location Internal Links
**Files:** Blog view components  
**Effort:** 30 minutes  
**Impact:** Distributes link equity, improves crawl depth  

In blog posts that mention locations, add contextual links to the relevant `/locations/{city}` or `/industries/{industry}` pages.

---

## 🟡 MEDIUM — Fix Within 1 Month

### 10. Create `/case-studies` Page
**New file needed**  
**Effort:** 4-6 hours  
**Impact:** High E-E-A-T value for GEO and traditional search  

Showcase real client results with data, quotes, and before/after metrics.

### 11. Create `/contact` Page
**New file needed**  
**Effort:** 2 hours  
**Impact:** Improves UX, enables ContactPoint schema  

Replace mailto link with a proper contact form page.

### 12. Convert PNG Images to WebP
**Effort:** 1-2 hours  
**Impact:** ~60% image size reduction, better LCP

Use `sharp` or Next.js image optimization to serve WebP.

### 13. Add Competitor Comparison Pages
**New files needed**  
**Effort:** 3-5 hours  
**Impact:** Captures competitor-brand keyword traffic  

Pages like:
- `/compare/aivized-vs-tidio`
- `/compare/aivized-vs-intercom`
- `/compare/aivized-vs-manychat`

### 14. Fix `@id` on Industry+City LocalBusiness Schema
**File:** `src/app/industries/[industry]/[city]/page.tsx`  
**Effort:** 5 minutes  
**Impact:** Proper schema cross-referencing  

Add `@id` to the LocalBusiness node.

### 15. Add Review Schema for Testimonials
**Effort:** 1 hour  
**Impact:** Star rating rich results eligibility  

Wrap testimonials in `Review` structured data.

---

## 🟢 LOW — Backlog

### 16. Create `/how-it-works` Standalone Page
**Effort:** 3-4 hours  
**Impact:** Captures "how do AI chatbots work" search intent

### 17. Add Video Content with VideoObject Schema
**Effort:** Ongoing  
**Impact:** Video rich results, higher CTR

### 18. Reduce to Single Google Font
**File:** `src/app/layout.tsx`  
**Effort:** 30 minutes  
**Impact:** ~200KB reduction, better CWV

### 19. Add Visible Breadcrumbs to Location Pages
**File:** `src/views/LocationPage.tsx`  
**Effort:** 30 minutes  
**Impact:** Better UX, visible breadcrumb for users

### 20. Create Pillar Content Pages
**Effort:** 4-8 hours  
**Impact:** Authority building for key topics  

Examples:
- "Complete Guide to AI Chatbots for UK Small Businesses"
- "AI Chatbot Pricing in the UK: 2026 Guide"

---

## Implementation Roadmap

```
Week 1:   🚨 Items 1-4 (Critical fixes)
Week 2:   🔴 Items 5-9 (High priority)
Month 2:  🟡 Items 10-15 (Medium improvements)
Quarter:  🟢 Items 16-20 (Long-term growth)
```

## Estimated Impact After Full Implementation

| Metric | Current | Projected |
|--------|:-------:|:---------:|
| Indexable pages | 209 | 290+ |
| Thin-content risk | High | Low |
| Rich result eligibility | Medium | High |
| E-E-A-T signals | Weak | Strong |
| GEO/AI citability score | 85/100 | 92/100 |
| Core Web Vitals (LCP) | ~2.5s | ~1.8s |
| Organic keyword coverage | Limited | Expanded 3x |
