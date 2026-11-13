"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Check,
  CheckCircle2,
  Clock,
  Code2,
  Database,
  FileSpreadsheet,
  Globe,
  Mail,
  Megaphone,
  MessageSquare,
  MonitorSmartphone,
  Search,
  ShoppingBag,
  TrendingUp,
  Users,
  Workflow,
  AlertCircle,
  Link2Off,
  MapPin,
  Star,
  Building2,
  Dumbbell,
  HeartPulse,
  Scale,
  Target,
  Utensils,
} from "lucide-react";
import type { IndustryVisualVariant } from "@/lib/visualVariants";

interface VisualFrameProps {
  label: string;
  meta?: string;
  className?: string;
  children: React.ReactNode;
}

export const VisualFrame = ({ label, meta, className = "", children }: VisualFrameProps) => (
  <div
    className={`relative overflow-hidden rounded-2xl border border-border/60 bg-card text-foreground shadow-[var(--shadow-frame)] ${className}`}
  >
    <div
      className="flex items-center justify-between gap-3 border-b border-border/50 bg-card px-4 py-2.5"
      aria-hidden="true"
    >
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
        </span>
        <span className="h-3 w-px bg-border/80" />
        <span className="truncate text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-muted-foreground/90">
          {label}
        </span>
      </div>
      {meta ? (
        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-surface-warm px-2.5 py-1 text-[0.55rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
          <span
            className={`h-1 w-1 rounded-full ${
              meta.toLowerCase() === "live" ? "animate-pulse bg-accent" : "bg-primary/60"
            }`}
          />
          {meta}
        </span>
      ) : null}
    </div>
    <div className="relative p-4">{children}</div>
  </div>
);

const MicroLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
    {children}
  </p>
);

const chatStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.45 } },
};

const chatBubble: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const listStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const HeroSystemVisual = () => (
  <div className="relative">
    <div
      className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-primary/10 bg-primary/[0.035]"
      aria-hidden="true"
    />
    <div
      className="absolute -left-3 -top-3 h-14 w-14 rounded-tl-2xl border-l border-t border-primary/20"
      aria-hidden="true"
    />
    <VisualFrame label="aivized / command centre" meta="Live" className="relative">
      <div className="grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
        <div className="visual-panel p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <MicroLabel>Inbox</MicroLabel>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              className="rounded-full bg-primary/10 px-2 py-0.5 text-[0.62rem] font-medium text-primary"
            >
              3 new
            </motion.span>
          </div>

          <motion.div
            variants={chatStagger}
            initial="hidden"
            animate="show"
            className="space-y-2.5"
          >
            <motion.div variants={chatBubble} className="flex items-start gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-card text-[0.6rem] font-semibold text-muted-foreground">
                C
              </span>
              <div className="rounded-lg rounded-tl-sm border border-border bg-card px-3 py-2.5">
                <p className="text-[0.78rem] leading-snug">Dubai Marina delivery?</p>
              </div>
            </motion.div>

            <motion.div
              variants={chatBubble}
              className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-primary px-3 py-2.5 text-primary-foreground"
            >
              <p className="text-[0.78rem] leading-snug">Yes. Tomorrow, 2pm.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="mt-3 flex items-center gap-2 rounded-md border border-border bg-card px-2.5 py-2"
          >
            <span className="flex items-center gap-1">
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  className="h-1 w-1 rounded-full bg-muted-foreground/60"
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: dot * 0.18 }}
                />
              ))}
            </span>
            <span className="text-[0.66rem] text-muted-foreground">Typing</span>
            <ArrowRight className="ml-auto h-3 w-3 text-primary" />
          </motion.div>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-start justify-between">
            <div>
              <MicroLabel>This week</MicroLabel>
              <div className="mt-1 flex items-end gap-2">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.45 }}
                  className="font-serif text-4xl font-semibold leading-none"
                >
                  128
                </motion.p>
                <span className="flex items-center gap-0.5 pb-0.5 text-[0.66rem] font-medium text-accent">
                  <TrendingUp className="h-3 w-3" />
                  24%
                </span>
              </div>
            </div>
            <Bot className="h-4 w-4 text-primary" />
          </div>

          <div className="mt-4 flex h-20 items-end gap-1.5">
            {[35, 52, 44, 68, 58, 82, 74, 96].map((height, index) => (
              <motion.span
                key={index}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.55 + index * 0.05, duration: 0.5, ease: "easeOut" }}
                className={`flex-1 origin-bottom rounded-sm ${index === 7 ? "bg-primary" : "bg-primary/15"}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border/70 pt-3">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.1em] text-muted-foreground">Saved</p>
              <p className="mt-0.5 font-serif text-sm font-semibold">18.5 hrs</p>
            </div>
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.1em] text-muted-foreground">Reply</p>
              <p className="mt-0.5 font-serif text-sm font-semibold">4 min</p>
            </div>
          </div>
        </div>

        <div className="visual-panel p-3.5 sm:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <MicroLabel>Workflow</MicroLabel>
            <span className="flex items-center gap-1 text-[0.62rem] font-medium text-accent">
              <span className="h-1 w-1 animate-pulse rounded-full bg-accent" />
              Live
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { label: "Enquiry", icon: Mail, state: "done" },
              { label: "Qualify", icon: Bot, state: "done" },
              { label: "Route", icon: Workflow, state: "live" },
              { label: "CRM", icon: Database, state: "next" },
            ].map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                className="flex items-center gap-2 rounded-md border border-border bg-card px-2 py-2"
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    step.state === "done"
                      ? "border-accent/30 bg-accent/10 text-accent"
                      : step.state === "live"
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-border bg-card text-muted-foreground"
                  }`}
                >
                  {step.state === "done" ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <step.icon className="h-3 w-3" />
                  )}
                </span>
                <span className="min-w-0 flex-1 truncate text-[0.7rem] font-medium">{step.label}</span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    step.state === "done"
                      ? "bg-accent"
                      : step.state === "live"
                        ? "animate-pulse bg-primary"
                        : "bg-border"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </VisualFrame>
  </div>
);

export const ServiceVisual = ({ slug }: { slug: string }) => {
  if (slug === "ai-systems") {
    return (
      <VisualFrame label="ai assistant" meta="Live" className="h-full">
        <motion.div
          variants={chatStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-2"
        >
          <motion.div variants={chatBubble} className="max-w-[88%] rounded-md bg-surface-warm px-2.5 py-2">
            <p className="text-[0.68rem] leading-snug">Where is my order?</p>
          </motion.div>
          <motion.div
            variants={chatBubble}
            className="ml-auto max-w-[88%] rounded-md bg-primary px-2.5 py-2 text-primary-foreground"
          >
            <p className="text-[0.68rem] leading-snug">Tracking sent.</p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-3 flex flex-wrap gap-1.5"
        >
          {["Pricing", "Booking", "Support"].map((item) => (
            <span key={item} className="rounded-full border border-border bg-card px-2 py-0.5 text-[0.64rem] text-muted-foreground">
              {item}
            </span>
          ))}
        </motion.div>
      </VisualFrame>
    );
  }

  if (slug === "automations") {
    return (
      <VisualFrame label="automation flow" meta="Active" className="h-full">
        <motion.div
          variants={listStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-2"
        >
          {[
            { label: "Enquiry received", icon: Mail, done: true },
            { label: "AI qualifies", icon: Bot, done: true },
            { label: "Route to team", icon: Workflow, done: true },
            { label: "Log in CRM", icon: Database, done: false },
          ].map((step) => (
            <motion.div key={step.label} variants={reveal} className="flex items-center gap-2">
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                  step.done
                    ? "border-accent/30 bg-accent/10 text-accent"
                    : "border-border bg-surface-warm text-muted-foreground"
                }`}
              >
                {step.done ? <Check className="h-3 w-3" /> : <step.icon className="h-3 w-3" />}
              </div>
              <span className="text-[0.68rem] text-muted-foreground">{step.label}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="mt-3 flex items-center justify-between rounded-md bg-surface-warm px-2.5 py-1.5"
        >
          <span className="text-[0.64rem] font-medium">Manual steps</span>
          <span className="font-serif text-xs font-semibold text-primary">14</span>
        </motion.div>
      </VisualFrame>
    );
  }

  if (slug === "seo-geo") {
    return (
      <VisualFrame label="search visibility" meta="30 days" className="h-full">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 rounded-md bg-surface-warm px-2.5 py-1.5 mb-2.5"
        >
          <Search className="h-3 w-3 text-muted-foreground" />
          <span className="text-[0.64rem] text-muted-foreground">ai automation agency dubai</span>
        </motion.div>
        <motion.div
          variants={listStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-1.5"
        >
          {[
            { rank: "01", label: "Your business", accent: true },
            { rank: "03", label: "Competitor", accent: false },
            { rank: "07", label: "Directory listing", accent: false },
          ].map((row) => (
            <motion.div
              key={row.label}
              variants={reveal}
              className={`flex items-center justify-between rounded-md border px-2.5 py-1.5 ${
                row.accent ? "border-primary/25 bg-primary/5" : "border-border bg-card"
              }`}
            >
              <span className={`text-[0.68rem] ${row.accent ? "font-medium text-primary" : "text-muted-foreground"}`}>
                {row.label}
              </span>
              <span className={`font-serif text-[0.66rem] ${row.accent ? "text-primary" : "text-muted-foreground"}`}>
                {row.rank}
              </span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="mt-2.5 flex items-center justify-between border-t border-border/70 pt-2"
        >
          <span className="text-[0.64rem] text-muted-foreground">AI citations</span>
          <span className="flex items-center gap-1 text-[0.64rem] font-medium text-accent">
            <TrendingUp className="h-3 w-3" /> Up 18%
          </span>
        </motion.div>
      </VisualFrame>
    );
  }

  if (slug === "digital-marketing") {
    return (
      <VisualFrame label="campaign performance" meta="Monthly" className="h-full">
        <motion.div
          variants={listStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-2 gap-2 mb-2.5"
        >
          <motion.div variants={reveal} className="rounded-md bg-surface-warm px-2.5 py-2">
            <MicroLabel>Leads</MicroLabel>
            <p className="font-serif text-lg font-semibold leading-none mt-1">246</p>
          </motion.div>
          <motion.div variants={reveal} className="rounded-md bg-surface-warm px-2.5 py-2">
            <MicroLabel>Cost / lead</MicroLabel>
            <p className="font-serif text-lg font-semibold leading-none mt-1">AED 38</p>
          </motion.div>
        </motion.div>
        <div className="flex h-14 items-end gap-1.5">
          {[40, 55, 48, 68, 62, 84, 78, 95].map((height, index) => (
            <motion.span
              key={index}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.05, duration: 0.5, ease: "easeOut" }}
              className={`flex-1 origin-bottom rounded-sm ${index === 7 ? "bg-primary" : "bg-primary/20"}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-2 flex flex-wrap gap-1.5"
        >
          {["Google", "Meta", "LinkedIn", "Email"].map((channel) => (
            <span key={channel} className="rounded-full border border-border bg-card px-2 py-0.5 text-[0.62rem] text-muted-foreground">
              {channel}
            </span>
          ))}
        </motion.div>
      </VisualFrame>
    );
  }

  if (slug === "web-development") {
    return (
      <VisualFrame label="website preview" meta="Mobile + desktop" className="h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-md bg-surface-warm p-2"
        >
          <div className="flex items-center gap-1 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-border" />
            <span className="h-1.5 w-1.5 rounded-full bg-border" />
            <span className="h-1.5 w-1.5 rounded-full bg-border" />
            <span className="ml-2 h-1.5 flex-1 rounded-full bg-border/70" />
          </div>
          <div className="rounded-sm bg-card border border-border p-2">
            <div className="h-1.5 w-14 rounded-full bg-foreground/20 mb-1.5" />
            <div className="h-1 w-24 rounded-full bg-border mb-2" />
            <div className="grid grid-cols-3 gap-1">
              {[0, 1, 2].map((tile) => (
                <motion.div
                  key={tile}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + tile * 0.08, duration: 0.35 }}
                  className={`aspect-square rounded-sm ${
                    tile === 0 ? "bg-primary/10 border border-primary/15" : "bg-surface-warm border border-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="mt-2 flex items-center justify-between text-[0.64rem]"
        >
          <span className="flex items-center gap-1 text-accent"><Check className="h-3 w-3" /> Core Web Vitals</span>
          <span className="text-muted-foreground">98 / 100</span>
        </motion.div>
      </VisualFrame>
    );
  }

  return (
    <VisualFrame label="desktop app" meta="Windows / macOS" className="h-full">
      <div className="flex gap-2">
        <div className="w-10 shrink-0 rounded-md bg-surface-warm p-1.5">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scaleX: 0.5 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + item * 0.06, duration: 0.3 }}
              className={`mb-1 h-2 origin-left rounded-sm ${item === 1 ? "bg-primary/30" : "bg-border"}`}
            />
          ))}
        </div>
        <div className="flex-1 rounded-md border border-border bg-card p-2">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[0.64rem] font-medium">Client records</span>
            <MonitorSmartphone className="h-3 w-3 text-primary" />
          </div>
          <motion.div variants={listStagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {[1, 2, 3, 4].map((row) => (
              <motion.div
                key={row}
                variants={reveal}
                className="flex items-center gap-1.5 border-b border-border/60 py-1 last:border-0"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                <span className="h-1 flex-1 rounded-full bg-border" />
                <span className="h-1 w-5 rounded-full bg-border/70" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between rounded-md bg-surface-warm px-2 py-1">
        <span className="text-[0.62rem] text-muted-foreground">Export · CSV</span>
        <span className="text-[0.62rem] font-medium text-primary">Ready</span>
      </div>
    </VisualFrame>
  );
};

export const PainSystemsVisual = () => (
  <VisualFrame label="current setup" meta="Disconnected" className="h-full">
    <motion.div
      variants={listStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-2 gap-2.5"
    >
      {[
        { label: "Website", icon: Globe, note: "No sync" },
        { label: "Inbox", icon: Mail, note: "Manual" },
        { label: "CRM", icon: Database, note: "Partial" },
        { label: "Spreadsheets", icon: FileSpreadsheet, note: "Outdated" },
      ].map((item) => (
        <motion.div
          key={item.label}
          variants={reveal}
          className="visual-panel p-3"
        >
          <div className="mb-3 flex items-center justify-between">
            <item.icon className="h-4 w-4 text-muted-foreground" />
            <AlertCircle className="h-3 w-3 text-destructive/70" />
          </div>
          <p className="text-[0.7rem] font-medium mb-0.5">{item.label}</p>
          <p className="text-[0.62rem] uppercase tracking-[0.1em] text-destructive/70">{item.note}</p>
        </motion.div>
      ))}
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.35, duration: 0.4 }}
      className="mt-3 flex items-center gap-2 rounded-md border border-dashed border-destructive/30 bg-destructive/5 px-2.5 py-2"
    >
      <Link2Off className="h-3.5 w-3.5 text-destructive/70 shrink-0" />
      <p className="text-[0.66rem] text-muted-foreground">Not connected</p>
    </motion.div>
  </VisualFrame>
);

export const ConnectedStackVisual = () => (
  <VisualFrame label="connected stack" meta="One roadmap" className="h-full">
    <motion.div
      variants={listStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-3 gap-2"
    >
      {[
        { label: "AI", icon: Bot },
        { label: "Automation", icon: Workflow },
        { label: "SEO", icon: Search },
        { label: "Marketing", icon: Megaphone },
        { label: "Web", icon: Code2 },
        { label: "Software", icon: MonitorSmartphone },
      ].map((item) => (
        <motion.div
          key={item.label}
          variants={reveal}
          className="visual-panel p-2.5 text-center"
        >
          <item.icon className="mx-auto mb-1.5 h-4 w-4 text-primary" />
          <p className="text-[0.64rem] font-medium">{item.label}</p>
        </motion.div>
      ))}
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.45, duration: 0.4 }}
      className="mt-3 flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[0.6rem] font-semibold text-primary-foreground">
        AV
      </span>
      <div className="h-px flex-1 border-t border-dashed border-border" />
      <span className="text-[0.64rem] text-muted-foreground">One team</span>
      <div className="h-px flex-1 border-t border-dashed border-border" />
      <CheckCircle2 className="h-4 w-4 text-accent" />
    </motion.div>
  </VisualFrame>
);

export const IndustryVisual = ({ variant }: { variant: IndustryVisualVariant }) => {
  if (variant === "hospitality") {
    return (
      <VisualFrame label="bookings" meta="Today" className="h-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="visual-panel p-3 mb-2.5"
        >
          <div className="flex items-center justify-between mb-2">
            <MicroLabel>Table for 4</MicroLabel>
            <span className="flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[0.6rem] font-medium text-accent">
              <Check className="h-2.5 w-2.5" /> Confirmed
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CalendarCheck className="h-5 w-5 text-primary" />
            <div>
              <p className="text-[0.7rem] font-medium">Thu · 8:30 PM</p>
              <p className="text-[0.62rem] text-muted-foreground">Reminder sent</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={listStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-1.5"
        >
          {[
            { time: "7:00 PM", status: "Seated" },
            { time: "7:45 PM", status: "Confirmed" },
            { time: "9:15 PM", status: "New" },
          ].map((row) => (
            <motion.div
              key={row.time}
              variants={reveal}
              className="flex items-center justify-between rounded-md border border-border bg-card px-2.5 py-1.5"
            >
              <span className="text-[0.66rem] text-muted-foreground">{row.time}</span>
              <span className={`text-[0.62rem] font-medium ${row.status === "New" ? "text-primary" : "text-accent"}`}>
                {row.status}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </VisualFrame>
    );
  }

  if (variant === "professional") {
    return (
      <VisualFrame label="pipeline" meta="This week" className="h-full">
        <motion.div
          variants={listStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-3 gap-1.5"
        >
          {[
            { title: "New", items: ["Consultancy", "Retainer"], tone: "border-border" },
            { title: "Qualified", items: ["Audit"], tone: "border-primary/25" },
            { title: "Won", items: ["Website"], tone: "border-accent/25" },
          ].map((column) => (
            <motion.div key={column.title} variants={reveal} className="rounded-md bg-surface-warm p-1.5">
              <p className="mb-1.5 text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground">
                {column.title}
              </p>
              {column.items.map((item) => (
                <div key={item} className={`mb-1 rounded-sm border bg-card px-1.5 py-1 text-[0.62rem] ${column.tone}`}>
                  {item}
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-2.5 flex items-center justify-between border-t border-border/70 pt-2"
        >
          <span className="text-[0.64rem] text-muted-foreground">Follow-ups</span>
          <span className="font-serif text-xs font-semibold text-primary">100%</span>
        </motion.div>
      </VisualFrame>
    );
  }

  if (variant === "realestate") {
    return (
      <VisualFrame label="property enquiries" meta="Live" className="h-full">
        <motion.div
          variants={listStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-3 gap-2"
        >
          {[
            { name: "Marina", price: "AED 2.4m" },
            { name: "JVC", price: "AED 1.1m" },
            { name: "Downtown", price: "AED 3.8m" },
          ].map((listing, index) => (
            <motion.div key={listing.name} variants={reveal} className="visual-panel p-2">
              <div className={`mb-2 flex h-10 items-center justify-center rounded-md ${index === 0 ? "bg-primary/10" : "bg-card"}`}>
                <Building2 className={`h-4 w-4 ${index === 0 ? "text-primary" : "text-muted-foreground/60"}`} />
              </div>
              <p className="text-[0.62rem] font-medium">{listing.name}</p>
              <p className="text-[0.56rem] text-muted-foreground">{listing.price}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="mt-2.5 flex items-center justify-between border-t border-border/60 pt-2"
        >
          <span className="flex items-center gap-1.5 text-[0.62rem] text-muted-foreground">
            <MapPin className="h-3 w-3 text-primary" /> Viewing booked
          </span>
          <span className="text-[0.62rem] font-medium text-accent">Thu 5pm</span>
        </motion.div>
      </VisualFrame>
    );
  }

  if (variant === "healthcare") {
    return (
      <VisualFrame label="appointments" meta="Today" className="h-full">
        <motion.div
          variants={listStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-2"
        >
          {[
            { time: "09:30", label: "New patient", status: "Confirmed" },
            { time: "11:00", label: "Follow-up", status: "Reminded" },
            { time: "14:15", label: "Consultation", status: "Booked" },
          ].map((slot) => (
            <motion.div key={slot.time} variants={reveal} className="flex items-center gap-2.5 visual-panel px-2.5 py-2">
              <span className="font-serif text-[0.64rem] font-semibold text-primary">{slot.time}</span>
              <span className="min-w-0 flex-1 truncate text-[0.66rem] font-medium">{slot.label}</span>
              <span className="text-[0.56rem] uppercase tracking-[0.08em] text-accent">{slot.status}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="mt-2.5 flex items-center justify-between border-t border-border/60 pt-2"
        >
          <span className="flex items-center gap-1.5 text-[0.62rem] text-muted-foreground">
            <HeartPulse className="h-3 w-3 text-primary" /> Reminders
          </span>
          <span className="text-[0.62rem] font-medium text-accent">Sent</span>
        </motion.div>
      </VisualFrame>
    );
  }

  if (variant === "fitness") {
    return (
      <VisualFrame label="memberships" meta="This week" className="h-full">
        <motion.div
          variants={listStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-2"
        >
          {[
            { label: "Morning HIIT", filled: 82 },
            { label: "Strength", filled: 64 },
            { label: "Yoga flow", filled: 48 },
          ].map((item) => (
            <motion.div key={item.label} variants={reveal} className="visual-panel px-2.5 py-2">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[0.64rem] font-medium">{item.label}</span>
                <span className="font-serif text-[0.6rem] text-muted-foreground">{item.filled}%</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-card">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.filled}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-full rounded-full bg-primary/70"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="mt-2.5 flex items-center justify-between border-t border-border/60 pt-2"
        >
          <span className="flex items-center gap-1.5 text-[0.62rem] text-muted-foreground">
            <Dumbbell className="h-3 w-3 text-primary" /> Renewals
          </span>
          <span className="text-[0.62rem] font-medium text-accent">Automated</span>
        </motion.div>
      </VisualFrame>
    );
  }

  return (
    <VisualFrame label="storefront" meta="Live" className="h-full">
      <motion.div
        variants={listStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-3 gap-2"
      >
        {[1, 2, 3].map((item) => (
          <motion.div key={item} variants={reveal} className="rounded-md bg-surface-warm p-1.5">
            <div className={`mb-1.5 aspect-square rounded-sm ${item === 1 ? "bg-primary/15" : "bg-border/70"}`} />
            <div className="h-1 w-full rounded-full bg-border mb-1" />
            <div className="h-1 w-2/3 rounded-full bg-border/70" />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mt-2.5 flex items-center justify-between rounded-md border border-border bg-card px-2.5 py-1.5"
      >
        <span className="flex items-center gap-1.5 text-[0.64rem] text-muted-foreground">
          <ShoppingBag className="h-3 w-3 text-primary" /> Abandoned cart
        </span>
        <span className="text-[0.62rem] font-medium text-accent">Recovered</span>
      </motion.div>
    </VisualFrame>
  );
};

export const SupportVisual = () => (
  <VisualFrame label="client channel" meta="Direct" className="h-full">
    <motion.div
      variants={chatStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-2"
    >
      <motion.div variants={chatBubble} className="flex items-start gap-2">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-warm text-[0.56rem] font-semibold text-primary">
          AV
        </span>
        <div className="rounded-lg rounded-tl-sm bg-surface-warm px-2.5 py-2">
          <p className="text-[0.66rem] leading-snug">We found two fixes.</p>
        </div>
      </motion.div>
      <motion.div variants={chatBubble} className="flex items-start justify-end gap-2">
        <div className="rounded-lg rounded-tr-sm bg-primary px-2.5 py-2 text-primary-foreground">
          <p className="text-[0.66rem] leading-snug">Deploy this week?</p>
        </div>
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-card text-[0.56rem] font-semibold text-muted-foreground">
          You
        </span>
      </motion.div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="mt-2.5 flex items-center justify-between border-t border-border/70 pt-2"
    >
      <span className="flex items-center gap-1 text-[0.64rem] text-muted-foreground">
        <Clock className="h-3 w-3" /> Reply
      </span>
      <span className="font-serif text-xs font-semibold text-accent">&lt; 1 hr</span>
    </motion.div>
  </VisualFrame>
);

export const RoadmapVisual = () => (
  <VisualFrame label="project roadmap" meta="Scoped" className="h-full">
    <motion.div
      variants={listStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-2"
    >
      {[
        { title: "Discovery", done: true },
        { title: "Proposal", done: true },
        { title: "Build", done: false },
        { title: "Launch", done: false },
      ].map((stage, index) => (
        <motion.div key={stage.title} variants={reveal} className="flex items-center gap-2.5">
          <motion.div
            variants={{
              hidden: { scale: 0.6, opacity: 0 },
              show: { scale: 1, opacity: 1, transition: { duration: 0.35 } },
            }}
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[0.6rem] font-semibold ${
              stage.done
                ? "border-accent/30 bg-accent/10 text-accent"
                : "border-border bg-surface-warm text-muted-foreground"
            }`}
          >
            {stage.done ? <Check className="h-3 w-3" /> : index + 1}
          </motion.div>
          <div className="min-w-0 flex-1 border-b border-border/60 pb-1.5">
            <p className="text-[0.68rem] font-medium">{stage.title}</p>
          </div>
          <span className={`text-[0.6rem] uppercase tracking-[0.1em] ${stage.done ? "text-accent" : "text-muted-foreground/60"}`}>
            {stage.done ? "Done" : "Next"}
          </span>
        </motion.div>
      ))}
    </motion.div>
  </VisualFrame>
);

export const ProjectBriefVisual = () => (
  <VisualFrame label="project brief" meta="2 min" className="h-full">
    <motion.div
      variants={listStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-2.5"
    >
      {[
        { label: "Business", value: "Hospitality · Dubai", icon: Users },
        { label: "Priority", value: "Missed enquiries", icon: MessageSquare },
        { label: "Services", value: "AI + automation", icon: Workflow },
      ].map((row) => (
        <motion.div key={row.label} variants={reveal} className="rounded-md bg-surface-warm px-2.5 py-2">
          <div className="flex items-center gap-1.5 mb-1">
            <row.icon className="h-3 w-3 text-primary" />
            <span className="text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">
              {row.label}
            </span>
          </div>
          <p className="text-[0.68rem] font-medium">{row.value}</p>
        </motion.div>
      ))}
      <motion.div
        variants={reveal}
        className="flex items-center justify-between rounded-md bg-primary px-3 py-2 text-primary-foreground"
      >
        <span className="text-[0.68rem] font-medium">Free consult</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </motion.div>
    </motion.div>
  </VisualFrame>
);

export const ProofVisual = () => (
  <VisualFrame label="engagement snapshot" meta="Example" className="h-full">
    <motion.div
      variants={listStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-2 gap-2 mb-2.5"
    >
      <motion.div variants={reveal} className="rounded-md bg-surface-warm px-2.5 py-2">
        <MicroLabel>Manual work</MicroLabel>
        <p className="font-serif text-lg font-semibold leading-none mt-1">-12 hrs</p>
        <p className="text-[0.6rem] text-muted-foreground mt-1">per week</p>
      </motion.div>
      <motion.div variants={reveal} className="rounded-md bg-surface-warm px-2.5 py-2">
        <MicroLabel>Response time</MicroLabel>
        <p className="font-serif text-lg font-semibold leading-none mt-1">4 min</p>
        <p className="text-[0.6rem] text-muted-foreground mt-1">first reply</p>
      </motion.div>
    </motion.div>
    <motion.div
      variants={listStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-1.5"
    >
      {[
        "Website rebuilt",
        "Enquiries automated",
        "Local search improved",
      ].map((item) => (
        <motion.div
          key={item}
          variants={reveal}
          className="flex items-center gap-1.5 text-[0.64rem] text-muted-foreground"
        >
          <CheckCircle2 className="h-3 w-3 text-accent shrink-0" />
          {item}
        </motion.div>
      ))}
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="mt-2.5 flex items-center justify-between border-t border-border/70 pt-2"
    >
      <span className="flex items-center gap-1 text-[0.62rem] text-muted-foreground">
        <MapPin className="h-2.5 w-2.5" /> Dubai
      </span>
      <span className="flex items-center gap-0.5 text-[0.6rem] text-primary">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="h-2.5 w-2.5 fill-current" />
        ))}
      </span>
    </motion.div>
  </VisualFrame>
);

export const EngagementVisual = ({ variant }: { variant: "retail" | "consulting" | "hospitality" }) => {
  if (variant === "retail") {
    return (
      <VisualFrame label="storefront" meta="Live" className="h-full">
        <motion.div
          variants={listStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-3"
        >
          <motion.div variants={reveal} className="visual-panel p-3">
            <div className="flex items-center gap-2 rounded-md bg-card px-2.5 py-2">
              <Search className="h-3 w-3 text-muted-foreground" />
              <span className="text-[0.7rem] text-muted-foreground">linen shirts</span>
              <span className="ml-auto text-[0.58rem] uppercase tracking-[0.1em] text-muted-foreground/60">
                Search
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((tile) => (
                <div key={tile} className="rounded-md bg-card p-1.5">
                  <div className={`mb-1.5 aspect-square rounded-sm ${tile === 1 ? "bg-primary/15" : "bg-border/70"}`} />
                  <div className="h-1 w-full rounded-full bg-border mb-1" />
                  <div className="h-1 w-2/3 rounded-full bg-border/70" />
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-2">
            <motion.div variants={reveal} className="visual-panel p-3">
              <MicroLabel>Search rank</MicroLabel>
              <p className="mt-1 font-serif text-lg font-semibold leading-none">01</p>
              <span className="mt-1.5 flex items-center gap-1 text-[0.6rem] font-medium text-accent">
                <TrendingUp className="h-3 w-3" /> +18
              </span>
            </motion.div>
            <motion.div variants={reveal} className="visual-panel p-3">
              <MicroLabel>Cart recovery</MicroLabel>
              <p className="mt-1 text-[0.7rem] font-medium">Email sent</p>
              <span className="mt-1.5 block text-[0.6rem] font-medium text-accent">Recovered</span>
            </motion.div>
          </div>
        </motion.div>
      </VisualFrame>
    );
  }

  if (variant === "consulting") {
    return (
      <VisualFrame label="AI triage" meta="Live" className="h-full">
        <div className="mb-3 flex items-center justify-between">
          <MicroLabel>New enquiries</MicroLabel>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[0.6rem] font-medium text-primary">
            3 waiting
          </span>
        </div>
        <motion.div
          variants={listStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-2"
        >
          {[
            { label: "Website enquiry", score: "92", route: "Sarah" },
            { label: "Pricing request", score: "78", route: "Omar" },
            { label: "Support request", score: "54", route: "Queue" },
          ].map((row) => (
            <motion.div
              key={row.label}
              variants={reveal}
              className="flex items-center justify-between visual-panel px-3 py-2.5"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="h-3.5 w-3.5 text-primary" />
                <span className="text-[0.7rem] font-medium">{row.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-[0.7rem] font-semibold text-primary">{row.score}</span>
                <span className="rounded-full bg-card px-2 py-0.5 text-[0.58rem] text-muted-foreground">
                  {row.route}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-3 flex items-center justify-between border-t border-border/60 pt-2.5"
        >
          <span className="text-[0.62rem] text-muted-foreground">CRM activity</span>
          <span className="flex items-center gap-1 text-[0.6rem] font-medium text-accent">
            <Check className="h-3 w-3" /> Synced
          </span>
        </motion.div>
      </VisualFrame>
    );
  }

  return (
    <VisualFrame label="bookings" meta="Tonight" className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="visual-panel p-3.5"
      >
        <div className="flex items-center justify-between mb-2">
          <MicroLabel>Table for 4</MicroLabel>
          <span className="flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[0.6rem] font-medium text-accent">
            <Check className="h-2.5 w-2.5" /> Confirmed
          </span>
        </div>
        <div className="flex items-center gap-3">
          <CalendarCheck className="h-5 w-5 text-primary" />
          <div>
            <p className="text-[0.72rem] font-medium">Thu · 8:30 PM</p>
            <p className="text-[0.62rem] text-muted-foreground">Reminder sent</p>
          </div>
        </div>
      </motion.div>

      <div className="mt-2.5 grid grid-cols-2 gap-2">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="visual-panel p-3"
        >
          <MicroLabel>Local search</MicroLabel>
          <p className="mt-1 font-serif text-lg font-semibold leading-none">01</p>
          <span className="mt-1.5 flex items-center gap-1 text-[0.6rem] font-medium text-accent">
            <MapPin className="h-3 w-3" /> Dubai
          </span>
        </motion.div>
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="visual-panel p-3"
        >
          <MicroLabel>Review request</MicroLabel>
          <p className="mt-1 text-[0.7rem] font-medium">Sent</p>
          <span className="mt-1.5 flex items-center gap-0.5 text-[0.6rem] text-primary">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-2.5 w-2.5 fill-current" />
            ))}
          </span>
        </motion.div>
      </div>
    </VisualFrame>
  );
};

export const LocationVisual = ({ city = "UAE" }: { city?: string }) => (
  <VisualFrame label={`${city.toLowerCase()} / local presence`} meta="Live" className="h-full">
    <div className="grid grid-cols-[1.1fr_0.9fr] gap-2.5">
      <div className="visual-panel p-3">
        <div className="flex items-center justify-between">
          <MicroLabel>Service area</MicroLabel>
          <MapPin className="h-3 w-3 text-primary" />
        </div>
        <div className="relative mt-2 h-24 overflow-hidden rounded-lg border border-border/50 bg-card">
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-3">
            {Array.from({ length: 12 }).map((_, cell) => (
              <div key={cell} className="border-b border-r border-border/30 last:border-r-0" />
            ))}
          </div>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="absolute -inset-2 rounded-full border border-primary/25" />
            <span className="absolute -inset-4 rounded-full border border-primary/10" />
            <MapPin className="relative h-4 w-4 text-primary" />
          </span>
          <span className="absolute bottom-1.5 left-2 text-[0.54rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {city}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="visual-panel p-2.5">
          <MicroLabel>Local rank</MicroLabel>
          <div className="mt-0.5 flex items-end justify-between">
            <p className="font-serif text-2xl font-semibold leading-none">01</p>
            <TrendingUp className="h-3.5 w-3.5 text-accent" />
          </div>
        </div>
        <div className="visual-panel p-2.5">
          <MicroLabel>Reply</MicroLabel>
          <p className="mt-0.5 font-serif text-lg font-semibold leading-none">4 min</p>
        </div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.35, duration: 0.4 }}
      className="mt-2.5 flex items-center justify-between border-t border-border/60 pt-2"
    >
      <span className="text-[0.62rem] text-muted-foreground">Google Business</span>
      <span className="flex items-center gap-1 text-[0.6rem] font-medium text-accent">
        <Check className="h-3 w-3" /> Updated
      </span>
    </motion.div>
  </VisualFrame>
);

export const AboutVisual = () => (
  <VisualFrame label="one accountable team" meta="In-house" className="h-full">
    <div className="grid grid-cols-3 gap-2">
      {[
        { label: "Strategy", icon: Target },
        { label: "Build", icon: Code2 },
        { label: "Support", icon: CheckCircle2 },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.35 }}
          className="visual-panel p-3 text-center"
        >
          <item.icon className="mx-auto mb-2 h-4 w-4 text-primary" />
          <p className="text-[0.64rem] font-medium">{item.label}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="mt-2.5 flex items-center gap-2.5 visual-panel p-3"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[0.58rem] font-semibold text-primary-foreground">
        AV
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[0.66rem] font-medium">One roadmap</p>
        <p className="text-[0.58rem] text-muted-foreground">Direct access to the people doing the work</p>
      </div>
      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
    </motion.div>
  </VisualFrame>
);

export const IndustryHubVisual = () => (
  <VisualFrame label="industries / connected" meta="Six services" className="h-full">
    <div className="grid grid-cols-2 gap-2">
      {[
        { label: "Restaurants", icon: Utensils },
        { label: "Real Estate", icon: Building2 },
        { label: "E-commerce", icon: ShoppingBag },
        { label: "Healthcare", icon: HeartPulse },
        { label: "Legal", icon: Scale },
        { label: "Fitness", icon: Dumbbell },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.35 }}
          className="flex items-center gap-2 visual-panel px-2.5 py-2"
        >
          <item.icon className="h-3.5 w-3.5 text-primary" />
          <span className="truncate text-[0.64rem] font-medium">{item.label}</span>
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="mt-2.5 flex items-center justify-between border-t border-border/60 pt-2"
    >
      <span className="text-[0.62rem] text-muted-foreground">One partner</span>
      <span className="flex items-center gap-1 text-[0.6rem] font-medium text-accent">
        <Check className="h-3 w-3" /> Six services
      </span>
    </motion.div>
  </VisualFrame>
);
