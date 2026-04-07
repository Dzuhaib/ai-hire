"use client";

import { Skeleton } from "@/components/ui/skeleton";

// ─── Generic helpers ───────────────────────────────────────────────────────

const Lines = ({ count = 3, last = "w-3/4" }: { count?: number; last?: string }) => (
  <div className="space-y-2">
    {Array.from({ length: count - 1 }).map((_, i) => (
      <Skeleton key={i} className="h-4 w-full" />
    ))}
    <Skeleton className={`h-4 ${last}`} />
  </div>
);

const CardShell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border border-border/50 p-6 bg-card ${className}`}>{children}</div>
);

// ─── Pain section: two-col image + text ────────────────────────────────────

export const PainSkeleton = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <Skeleton className="rounded-2xl aspect-[4/3] w-full" />
        <div className="space-y-5">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-10 w-4/5" />
          <div className="space-y-4 pt-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-11/12" />
            <Skeleton className="h-6 w-4/5" />
          </div>
          <Skeleton className="h-4 w-2/3 mt-4" />
        </div>
      </div>
    </div>
  </section>
);

// ─── AI Showcase: image + feature bullets ─────────────────────────────────

export const AIShowcaseSkeleton = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <div className="text-center mb-12 space-y-3 max-w-xl mx-auto">
        <Skeleton className="h-3 w-24 mx-auto" />
        <Skeleton className="h-9 w-3/4 mx-auto" />
        <Skeleton className="h-4 w-full mx-auto" />
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <Skeleton className="rounded-3xl aspect-video w-full" />
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-start gap-4">
              <Skeleton className="w-10 h-10 rounded-xl shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── AI Tiers: 4-card grid ─────────────────────────────────────────────────

export const AITiersSkeleton = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <div className="text-center mb-12 space-y-3">
        <Skeleton className="h-3 w-32 mx-auto" />
        <Skeleton className="h-9 w-1/2 mx-auto" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <CardShell key={i}>
            <Skeleton className="aspect-square rounded-2xl w-full mb-4" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-5/6 mb-4" />
            <Skeleton className="h-8 w-full rounded-lg" />
          </CardShell>
        ))}
      </div>
    </div>
  </section>
);

// ─── Industries: 3-col grid ────────────────────────────────────────────────

export const IndustriesSkeleton = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <div className="text-center mb-12 space-y-3">
        <Skeleton className="h-3 w-28 mx-auto" />
        <Skeleton className="h-9 w-2/5 mx-auto" />
        <Skeleton className="h-4 w-2/3 mx-auto" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardShell key={i}>
            <Skeleton className="aspect-video rounded-xl w-full mb-4" />
            <div className="flex items-center gap-3 mb-3">
              <Skeleton className="w-10 h-10 rounded-xl shrink-0" />
              <Skeleton className="h-5 w-1/2" />
            </div>
            <Lines count={2} last="w-4/5" />
          </CardShell>
        ))}
      </div>
    </div>
  </section>
);

// ─── How It Works: header + 3-step row ────────────────────────────────────

export const HowItWorksSkeleton = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-5">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-10 w-4/5" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <Skeleton className="rounded-2xl aspect-[4/3] w-full" />
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardShell key={i}>
            <div className="flex items-center justify-between mb-6">
              <Skeleton className="w-14 h-14 rounded-xl" />
              <Skeleton className="h-10 w-14" />
            </div>
            <Skeleton className="h-6 w-2/3 mb-3" />
            <Lines count={3} last="w-3/4" />
            <Skeleton className="h-4 w-1/3 mt-3" />
          </CardShell>
        ))}
      </div>
    </div>
  </section>
);

// ─── Pricing: 3 plan cards ─────────────────────────────────────────────────

export const PricingSkeleton = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <div className="text-center mb-12 space-y-3">
        <Skeleton className="h-3 w-24 mx-auto" />
        <Skeleton className="h-9 w-2/5 mx-auto" />
        <Skeleton className="h-4 w-1/2 mx-auto" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardShell key={i} className={i === 1 ? "border-primary/30 shadow-lg" : ""}>
            <Skeleton className="h-6 w-1/3 mb-2" />
            <Skeleton className="h-10 w-1/2 mb-1" />
            <Skeleton className="h-3 w-1/4 mb-6" />
            <div className="space-y-3 mb-8">
              {Array.from({ length: 5 }).map((_, j) => (
                <div key={j} className="flex items-center gap-2">
                  <Skeleton className="w-4 h-4 rounded-full shrink-0" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              ))}
            </div>
            <Skeleton className="h-11 w-full rounded-lg" />
          </CardShell>
        ))}
      </div>
    </div>
  </section>
);

// ─── Cost Calculator: single card ─────────────────────────────────────────

export const CalculatorSkeleton = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <div className="rounded-2xl border border-border/50 p-8 md:p-12 bg-card">
        <div className="text-center mb-8 space-y-3">
          <Skeleton className="h-8 w-2/5 mx-auto" />
          <Skeleton className="h-4 w-1/2 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="h-4 w-1/3 mb-2" />
                <Skeleton className="h-10 w-full rounded-lg" />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <Skeleton className="h-4 w-1/4 mb-4" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex justify-between">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-5 w-1/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Testimonials: 3 quote cards ──────────────────────────────────────────

export const TestimonialsSkeleton = () => (
  <section className="section-padding bg-muted/30">
    <div className="container-narrow">
      <div className="text-center mb-12 space-y-3">
        <Skeleton className="h-3 w-28 mx-auto" />
        <Skeleton className="h-9 w-2/5 mx-auto" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardShell key={i}>
            <Lines count={4} last="w-2/3" />
            <div className="flex items-center gap-3 mt-6">
              <Skeleton className="w-10 h-10 rounded-full shrink-0" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
          </CardShell>
        ))}
      </div>
    </div>
  </section>
);

// ─── FAQ: accordion items ──────────────────────────────────────────────────

export const FAQSkeleton = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <div className="text-center mb-12 space-y-3">
        <Skeleton className="h-3 w-16 mx-auto" />
        <Skeleton className="h-9 w-1/3 mx-auto" />
      </div>
      <div className="max-w-3xl mx-auto space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border/50 px-6 py-5 bg-card">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="w-5 h-5 rounded shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Final CTA ─────────────────────────────────────────────────────────────

export const FinalCTASkeleton = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <div className="rounded-2xl p-12 md:p-20 bg-card border border-border/50 text-center space-y-5">
        <Skeleton className="h-10 w-2/5 mx-auto" />
        <Skeleton className="h-5 w-1/2 mx-auto" />
        <Skeleton className="h-4 w-2/5 mx-auto" />
        <div className="flex gap-4 justify-center pt-4">
          <Skeleton className="h-12 w-44 rounded-lg" />
          <Skeleton className="h-12 w-36 rounded-lg" />
        </div>
      </div>
    </div>
  </section>
);

// ─── Blog card grid skeleton (used in BlogsPage) ───────────────────────────

export const BlogCardsSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <CardShell key={i}>
        <Skeleton className="aspect-video rounded-xl w-full mb-4" />
        <div className="flex gap-2 mb-3">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-4/5 mb-4" />
        <Lines count={2} last="w-3/4" />
        <div className="flex items-center justify-between mt-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
      </CardShell>
    ))}
  </div>
);

// ─── Location card grid skeleton ───────────────────────────────────────────

export const LocationCardsSkeleton = ({ count = 8 }: { count?: number }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="rounded-2xl border border-border/50 overflow-hidden bg-card">
        <Skeleton className="h-48 w-full" />
        <div className="p-4 space-y-2">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
    ))}
  </div>
);
