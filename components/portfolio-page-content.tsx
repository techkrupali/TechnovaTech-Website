"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useRef, useState, type RefObject } from "react"
import { RunningStrip, LargeTextMarquee } from "./marquee-section"
import {
  ACCENT,
  AnimatedDivider,
  DUR,
  EASE_OUT,
  SPRING_POP,
  VIEWPORT,
  CountUp,
  GlowOrb,
  GradientText,
  MagneticButton,
  Reveal,
  RevealText,
  ShineOverlay,
  Stagger,
  StaggerItem,
  TiltCard,
  useParallax,
} from "@/components/motion"

/* ------------------------------------------------------------------ */
/*  The Shipping Ledger — every shipped product is a numbered entry    */
/*  in a living archive. Serials, index rows, numerals and the         */
/*  reserved next line all derive from entries[] order; adding a new   */
/*  success is appending one object.                                   */
/* ------------------------------------------------------------------ */

type Entry = {
  name: string
  category: string
  status: "live" | "prep"
  statusLine: string
  description: string
  quote?: string
  features: string[]
  image: string
  href: string
  cta: string
  external: boolean
}

const entries: Entry[] = [
  {
    name: "Retailians POS",
    category: "Retail POS",
    status: "live",
    statusLine: "In service",
    description:
      "Empowering thousands of retail business owners across India to embrace technology and streamline operations — from the first bill of the day to the last stock count.",
    quote: "One platform, infinite possibilities.",
    features: [
      "Lightning-fast billing system",
      "Real-time inventory tracking",
      "GST-compliant reports",
      "Customer loyalty programs",
      "Offline mode support",
    ],
    image: "/modern-pos-system-dashboard.jpg",
    href: "https://retailians.com/",
    cta: "Visit retailians.com",
    external: true,
  },
  {
    name: "911 Wrap ERP",
    category: "Automotive ERP",
    status: "live",
    statusLine: "In service",
    description:
      "Cutting-edge ERP for automobile dealerships and custom wrap studios. From order management to profit analytics — everything needed to run the floor and the books in one place.",
    features: [
      "Operations management",
      "Inventory control",
      "Accounts & billing",
      "Workflow automation",
      "Secure cloud access",
      "Multi-user roles",
    ],
    image: "/enterprise-erp-software-interface.jpg",
    href: "https://911wraperp.space/",
    cta: "Visit 911wraperp.space",
    external: true,
  },
  {
    name: "DSAT Guru",
    image: "/projects/dsat-guru-logo.png",
    category: "EdTech · SAT Prep",
    status: "prep",
    statusLine: "In preparation",
    description:
      "A smart SAT preparation platform in the Technova Tech product family — currently being readied for its own line in the ledger.",
    features: ["Adaptive practice", "Performance analytics", "Structured study plans"],
    image: "/custom-software-development-code-editor-interface.jpg",
    href: "/contact",
    cta: "Enquire about DSAT Guru",
    external: false,
  },
]

/* ------------------------------------------------------------------ *
 *  Selected projects — the filterable index. Every project carries a  *
 *  single category; the chips above the grid filter on it.            *
 * ------------------------------------------------------------------ */

type Project = {
  name: string
  category: string
  about: string
  features: string[]
  href: string
  cta: string
  /** square logo/icon in public/projects; cards fall back to an initials tile */
  image?: string
}

const projects: Project[] = [
  {
    name: "Retailians POS",
    category: "SaaS & ERP",
    about:
      "Our flagship point-of-sale and inventory platform, run daily by thousands of retail businesses across India.",
    features: ["Fast billing & inventory", "GST-compliant reports", "Customer loyalty", "Offline mode"],
    href: "https://retailians.com/",
    cta: "Visit site",
  },
  {
    name: "911 Wrap ERP",
    image: "/projects/911wraperp.png",
    category: "SaaS & ERP",
    about:
      "End-to-end ERP for automobile dealerships and wrap studios — orders, jobs, inventory and profit analytics in one place.",
    features: ["Order management", "Workflow automation", "Accounts & billing", "Multi-user roles"],
    href: "https://911wraperp.space/",
    cta: "Visit site",
  },
  {
    name: "DSAT Guru",
    image: "/projects/dsat-guru-logo.png",
    category: "Education",
    about:
      "A smart SAT-preparation platform — adaptive practice that meets each student at their level and tracks what actually improves scores.",
    features: ["Adaptive practice", "Performance analytics", "Structured study plans"],
    href: "https://dsatguru.com/",
    cta: "Visit site",
  },
  {
    name: "Accessorize London",
    image: "/projects/accessorize-london.png",
    category: "E-commerce",
    about:
      "Online fashion-accessories store for women and kids — bags, jewellery and hair accessories across gold-plated and sterling-silver lines.",
    features: ["Full catalogue & search", "Women & kids collections", "Secure checkout & offers", "Mobile-first shopping"],
    href: "https://accessorizelondon.in/",
    cta: "Visit site",
  },
  {
    name: "Get The Juice",
    image: "/projects/get-the-juice.png",
    category: "E-commerce",
    about:
      "Storefront for a handcrafted leather, silver and gold jewellery brand from Dhaka — with personalised pieces and gift collections.",
    features: ["Handcrafted catalogue", "Personalised collections", "bKash, Nagad & cards", "Gifting flows"],
    href: "https://getthejuice.store/",
    cta: "Visit site",
  },
  {
    name: "Crown BD",
    category: "E-commerce",
    about:
      "Brand storefront for Crown, Bangladesh — catalogue, collections and orders in one clean, fast web experience.",
    features: ["Product catalogue", "Order & enquiry flows", "Fast responsive storefront"],
    href: "https://crown-bd.com/",
    cta: "Visit site",
  },
  {
    name: "Healthengine",
    image: "/projects/healthengine.png",
    category: "Health & Fitness",
    about:
      "Healthcare appointment-booking app — patients find nearby practitioners, book visits and manage their health details in one place.",
    features: ["Practitioner search & booking", "Appointment reminders", "Digital health forms"],
    href: "https://play.google.com/store/apps/details?id=com.healthengine.android",
    cta: "Google Play",
  },
  {
    name: "Daily Yoga",
    image: "/projects/daily-yoga.jpg",
    category: "Health & Fitness",
    about:
      "Yoga and wellness platform with 2,000+ guided sessions — classic yoga to pilates — plus a smart coach that builds personal 28-day plans.",
    features: ["2,000+ guided sessions", "Smart Coach plans", "Meditation & stress relief", "Health tracking"],
    href: "https://apps.apple.com/in/app/daily-yoga-fitness-wellness/id545849922",
    cta: "App Store",
  },
  {
    name: "Planner Pro",
    image: "/projects/planner-pro.png",
    category: "Productivity",
    about:
      "All-in-one daily planner — calendar, tasks and notes unified so the whole day lives on one screen.",
    features: ["Day / week / month views", "Tasks with reminders", "Notes on events", "Calendar sync"],
    href: "https://play.google.com/store/apps/details?id=com.appxy.planner",
    cta: "Google Play",
  },
  {
    name: "Cat Runner: Decorate Home",
    image: "/projects/cat-runner.png",
    category: "Kids Games",
    about:
      "Casual endless-runner for kids — dash through colourful worlds, collect coins and decorate the cat's home level by level.",
    features: ["Endless-runner gameplay", "Home-decoration progression", "Kid-friendly controls", "Colourful 3D worlds"],
    href: "https://play.google.com/store/apps/details?id=com.solou.catendless.run",
    cta: "Google Play",
  },
  {
    name: "CSL Dating",
    image: "/projects/csl-dating.png",
    category: "Social",
    about:
      "Location-based social dating app for a global audience — profile discovery, matching and real-time chat.",
    features: ["Profile discovery & matching", "Real-time chat", "Location-based browsing", "Safety & moderation"],
    href: "https://play.google.com/store/apps/details?id=com.jaumo.casual",
    cta: "Google Play",
  },
  {
    name: "Superflow — AI Voice to Text",
    image: "/projects/superflow.png",
    category: "AI Tools",
    about:
      "AI voice-to-text app — speak naturally and get clean, formatted text anywhere on your phone.",
    features: ["Accurate speech-to-text", "AI formatting & cleanup", "Works across apps", "Multi-language"],
    href: "https://play.google.com/store/apps/details?id=ai.getsupernova.superflow",
    cta: "Google Play",
  },
]

const projectCategories = [
  "All",
  "SaaS & ERP",
  "E-commerce",
  "Education",
  "Health & Fitness",
  "Productivity",
  "Kids Games",
  "Social",
  "AI Tools",
]

const pad3 = (n: number) => String(n).padStart(3, "0")
const serialOf = (i: number) => `VT-${pad3(i + 1)}`
const RESERVED_SERIAL = serialOf(entries.length)
const RESERVED_NUMERAL = pad3(entries.length + 1)

/* Stroke-only numeral, site convention (same trick as the marquees). */
function StrokeNumeral({
  text,
  className,
  stroke = "rgba(0,0,0,0.12)",
}: {
  text: string
  className?: string
  stroke?: string
}) {
  return (
    <span
      aria-hidden
      className={`font-serif leading-none text-transparent select-none ${className ?? ""}`}
      style={{ WebkitTextStroke: `1px ${stroke}` }}
    >
      {text}
    </span>
  )
}

/* ---------------- rubber stamp — the proof-of-life mark ------------ */

function RubberStamp({
  label,
  arcText,
  ink,
  ghost = false,
}: {
  label: string
  arcText: string
  ink: string
  ghost?: boolean
}) {
  const reduce = useReducedMotion()
  const arcId = `stamp-arc-${label.replace(/\s+/g, "-").toLowerCase()}`
  return (
    <motion.svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      className="pointer-events-none select-none"
      style={{ rotate: -8, mixBlendMode: ghost ? undefined : "multiply" }}
      initial={reduce || ghost ? undefined : { scale: 1.6, opacity: 0 }}
      whileInView={reduce || ghost ? undefined : { scale: 1, opacity: 0.9 }}
      viewport={VIEWPORT}
      transition={SPRING_POP}
      aria-label={`${label} — ${arcText}`}
    >
      <defs>
        <path id={arcId} d="M 24 60 A 36 36 0 0 1 96 60" fill="none" />
      </defs>
      <circle cx={60} cy={60} r={54} fill="none" stroke={ink} strokeWidth={2.5} />
      <circle cx={60} cy={60} r={44} fill="none" stroke={ink} strokeWidth={1} strokeDasharray="4 3" />
      {!ghost && (
        <>
          <text
            x={60}
            y={68}
            textAnchor="middle"
            fontSize={22}
            fontWeight="bold"
            letterSpacing={4}
            fill={ink}
            className="font-mono uppercase"
          >
            {label}
          </text>
          <text fontSize={8.5} letterSpacing={2.5} fill={ink} className="font-mono uppercase">
            <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
              {arcText}
            </textPath>
          </text>
        </>
      )}
    </motion.svg>
  )
}

/* ---------------- perforation — same die-cut as the hang-tag ------- */

function PerforationDivider() {
  return (
    <div aria-hidden className="relative">
      <div className="border-t border-dashed border-border" />
      <span
        className="absolute -left-[7px] top-0 h-3.5 w-3.5 -translate-y-1/2 rounded-full"
        style={{ backgroundColor: "var(--background)", boxShadow: "inset -1px 0 2px rgba(0,0,0,0.12)" }}
      />
      <span
        className="absolute -right-[7px] top-0 h-3.5 w-3.5 -translate-y-1/2 rounded-full"
        style={{ backgroundColor: "var(--background)", boxShadow: "inset 1px 0 2px rgba(0,0,0,0.12)" }}
      />
    </div>
  )
}

/* ---------------- one ledger spread per entry ---------------------- */

function LedgerEntry({ entry, index }: { entry: Entry; index: number }) {
  const reduce = useReducedMotion()
  const imgRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ layoutEffect: false, target: imgRef, offset: ["start end", "end start"] })
  const rawY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const imgY = reduce ? 0 : rawY

  const isLive = entry.status === "live"
  const inkColor = isLive ? ACCENT : "rgba(10,10,15,0.45)"

  return (
    <article id={`vt-${pad3(index + 1)}`} className="scroll-mt-24 py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-12">
        {/* left rail — numeral, serial block, stamp */}
        <div className="lg:sticky lg:top-24 self-start">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Entry {pad3(index + 1)} / {pad3(entries.length)}
          </p>

          {/* stacked stroke numerals — gray at rest, lime cross-fades in */}
          <div className="relative inline-block">
            <StrokeNumeral text={pad3(index + 1)} className="text-7xl lg:text-[9rem]" />
            <motion.span
              aria-hidden
              className="absolute inset-0"
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: DUR.slow, ease: EASE_OUT, delay: 0.2 }}
            >
              <StrokeNumeral
                text={pad3(index + 1)}
                className="text-7xl lg:text-[9rem]"
                stroke="rgba(239,11,10,0.35)"
              />
            </motion.span>
          </div>

          {/* mono serial block on ruled lines */}
          <div className="mt-6 border-t border-b border-border py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground space-y-1.5">
            <p>N&ordm; {serialOf(index)}</p>
            <p>Cat: {entry.category}</p>
            <p>Status: {entry.statusLine}</p>
          </div>

          <div className="mt-6 hidden lg:block">
            <RubberStamp label={isLive ? "LIVE" : "IN PREP"} arcText={entry.statusLine} ink={inkColor} />
          </div>
        </div>

        {/* right column — the entry itself */}
        <div>
          <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            <RevealText as="span" by="word" text={entry.name} className="inline" />
          </h3>

          <Reveal as="p" y={16} delay={0.08} className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            {entry.description}
          </Reveal>

          {entry.quote && (
            <Reveal y={16} delay={0.12} className="mb-8">
              <blockquote className="relative max-w-xl pl-8">
                <span
                  aria-hidden
                  className="absolute left-0 -top-3 font-serif text-6xl leading-none"
                  style={{ color: ACCENT }}
                >
                  &ldquo;
                </span>
                <p className="font-serif text-2xl italic text-foreground">{entry.quote}</p>
              </blockquote>
            </Reveal>
          )}

          {/* cargo list — dotted manifest leaders */}
          <Stagger as="ul" className="max-w-xl space-y-3 mb-10">
            {entry.features.map((feature) => (
              <StaggerItem as="li" key={feature} y={12} className="flex items-end gap-3">
                <span className="min-w-0 text-foreground">{feature}</span>
                <span aria-hidden className="flex-1 border-b border-dotted border-border mb-1.5" />
                <CheckCircle2 className="w-4 h-4 shrink-0 mb-0.5 text-foreground" />
              </StaggerItem>
            ))}
          </Stagger>

          {/* screenshot plate */}
          <motion.div ref={imgRef} style={{ y: imgY }} className="mb-10 max-w-3xl">
            <TiltCard max={7} scale={1.02} className="rounded-2xl overflow-hidden border border-border shadow-xl">
              <div className="relative">
                <div className="aspect-[16/10] bg-secondary">
                  <img
                    src={entry.image}
                    alt={`${entry.name} interface`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 to-transparent" />
                <ShineOverlay tone="dark" repeatDelay={6} className="rounded-2xl" />
              </div>
            </TiltCard>
          </motion.div>

          <Reveal y={14} className="inline-block">
            <MagneticButton
              as={Link}
              href={entry.href}
              accent={ACCENT}
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground dark:bg-card text-background dark:text-foreground font-medium overflow-hidden"
            >
              <ShineOverlay trigger="hover" tone="dark" className="rounded-full" />
              <span className="relative z-10">{entry.cta}</span>
              <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </article>
  )
}

/* ------------------------------------------------------------------ */

export default function PortfolioPageContent() {
  const reduce = useReducedMotion()
  const [activeCategory, setActiveCategory] = useState("All")
  const visibleProjects =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)
  const heroRef = useRef<HTMLElement>(null)
  const heroOrbY = useParallax(heroRef as RefObject<HTMLElement>, { to: -120 })

  return (
    <>
      {/* ---------- hero: editorial statement + archive ledger ---------- */}
      <section ref={heroRef} className="pt-36 pb-24 relative overflow-hidden bg-background">
        <div aria-hidden className="grid-texture-dark absolute inset-0 opacity-[0.5] pointer-events-none" />
        <GlowOrb color={ACCENT} size={520} opacity={0.12} parallax={heroOrbY} className="-top-40 -left-32" />

        {/* ghost watermark — same vocabulary as the other page heroes */}
        <motion.span
          aria-hidden
          style={reduce ? undefined : { y: heroOrbY }}
          className="text-stroke-accent pointer-events-none select-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[18vw] leading-none font-bold text-transparent opacity-30"
        >
          SHIPPED
        </motion.span>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            {/* ---------- statement ---------- */}
            <div className="lg:col-span-8">
              <Reveal y={12} className="flex items-center gap-4">
                <span className="h-px w-10" style={{ backgroundColor: ACCENT }} aria-hidden />
                <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Our Portfolio
                </span>
              </Reveal>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal mt-6 mb-8 leading-[1.02] text-foreground">
                <RevealText as="span" by="word" text="The work that" delay={0.05} className="inline" />{" "}
                <GradientText animate as="span" className="italic">
                  shipped
                </GradientText>
                <motion.span
                  aria-hidden
                  className="ml-3 inline-block h-3 w-3 md:h-4 md:w-4 rounded-full align-baseline"
                  style={{ backgroundColor: ACCENT }}
                  initial={reduce ? false : { scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.7 }}
                />
              </h1>

              <AnimatedDivider className="text-foreground max-w-[8rem] mb-8" />

              <Reveal as="p" y={16} delay={0.3} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Products, platforms, apps and storefronts — built by one accountable team
                and running in production for clients across India, Bangladesh, Australia
                and beyond. No mockups here: everything below is live.
              </Reveal>

              <Reveal y={16} delay={0.45} className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-[#ef0b0a]">
                    Start your own entry
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: ACCENT }}
                  />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-[#ef0b0a]">
                    What we build
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: ACCENT }}
                  />
                </Link>
              </Reveal>
            </div>

            {/* ---------- archive ledger ---------- */}
            <Stagger className="lg:col-span-4 lg:pt-10">
              {[
                { label: "Delivered", value: "104+ projects" },
                { label: "In the index", value: `${projects.length} highlights` },
                { label: "Offices", value: "India · Canada" },
                { label: "Satisfaction", value: "100% referenceable" },
              ].map((fact, i) => (
                <StaggerItem key={fact.label}>
                  <div className="flex items-baseline gap-5 border-t border-border py-5 last:border-b">
                    <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: ACCENT }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground w-24 shrink-0">
                      {fact.label}
                    </span>
                    <span className="ml-auto font-serif text-xl md:text-2xl text-foreground text-right">
                      {fact.value}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ---------- selected projects: the filterable index ---------- */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal as="span" y={12} className="block font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Selected Projects
              </Reveal>
              <Reveal as="h2" delay={0.06} className="font-serif text-3xl md:text-4xl text-foreground mt-3">
                Work across <GradientText animate>every category</GradientText>
              </Reveal>
            </div>
            <Reveal y={16} delay={0.2} className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Websites, mobile apps and platforms we've built and shipped — pick a
              category to browse.
            </Reveal>
          </div>

          {/* category chips */}
          <Reveal y={14} className="mb-10 flex flex-wrap gap-2">
            {projectCategories.map((cat) => {
              const active = activeCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                    active
                      ? "border-transparent text-white"
                      : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  }`}
                  style={active ? { backgroundColor: ACCENT } : undefined}
                >
                  {cat}
                </button>
              )
            })}
          </Reveal>

          {/* project cells */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-border bg-border">
            {visibleProjects.map((project, i) => (
              <motion.div
                key={project.name}
                layout={reduce ? undefined : true}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
                className="bg-background"
              >
                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative flex h-full flex-col overflow-hidden bg-background p-8 transition-colors duration-500 hover:bg-secondary/40"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs tracking-[0.2em]" style={{ color: ACCENT }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-8 bg-border" aria-hidden />
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt=""
                        aria-hidden
                        className="h-20 w-20 shrink-0 rounded-2xl border border-border bg-white object-contain p-1"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl font-serif text-3xl text-white"
                        style={{ backgroundColor: "#0a0a0f" }}
                      >
                        <span style={{ color: ACCENT }}>{project.name.charAt(0)}</span>
                      </span>
                    )}
                    <h3 className="font-serif text-xl md:text-2xl text-foreground">
                      {project.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.about}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span
                          aria-hidden
                          className="h-1 w-1 shrink-0 rotate-45 bg-foreground/40 transition-colors duration-300 group-hover:bg-[#ef0b0a]"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="border-b border-foreground/25 pb-0.5 transition-colors group-hover:border-[#ef0b0a]">
                      {project.cta}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      style={{ color: ACCENT }}
                    />
                  </span>

                  {/* red sweep on hover */}
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                    style={{ backgroundColor: ACCENT }}
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RunningStrip text="TECHNOVA TECH • PROOF OF WORK" reverse speed={20} dark />

      {/* ---------- the reserved line ---------- */}
      <section id="next-entry" className="py-24 bg-background scroll-mt-24">
        <div className="container mx-auto px-6">
          <Reveal y={0} duration={DUR.slow}>
            <motion.div
              initial={reduce ? undefined : { scale: 0.97 }}
              whileInView={reduce ? undefined : { scale: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: DUR.slow, ease: EASE_OUT }}
              className="relative overflow-hidden rounded-2xl border-2 border-dashed border-border p-10 md:p-16 text-center"
            >
              {/* giant reserved numeral parked behind */}
              <StrokeNumeral
                text={RESERVED_NUMERAL}
                className="absolute -right-6 -bottom-10 text-[12rem] md:text-[18rem] opacity-[0.15] pointer-events-none"
              />
              {/* un-inked ghost stamp — waiting to be earned */}
              <div className="absolute left-8 top-8 hidden lg:block opacity-30">
                <RubberStamp label="" arcText="" ink="rgba(10,10,15,0.35)" ghost />
              </div>
              {/* corner postmark — the hang-tag's cancellation mark */}
              <svg
                aria-hidden
                width={104}
                height={60}
                viewBox="0 0 104 60"
                className="pointer-events-none absolute right-4 top-6 opacity-30 hidden md:block"
                style={{ transform: "rotate(-7deg)" }}
              >
                <g stroke="rgba(10,10,15,0.5)" fill="none" strokeWidth={1}>
                  <circle cx={76} cy={30} r={22} strokeDasharray="3 2.5" opacity={0.55} />
                  <circle cx={76} cy={30} r={16.5} opacity={0.45} />
                  <path d="M2 22 q 8 -4 16 0 t 16 0 t 16 0" opacity={0.4} />
                  <path d="M2 30 q 8 -4 16 0 t 16 0 t 16 0" opacity={0.4} />
                  <path d="M2 38 q 8 -4 16 0 t 16 0 t 16 0" opacity={0.4} />
                </g>
                <text x={76} y={28} textAnchor="middle" fontSize={6.5} letterSpacing={1} fill="rgba(10,10,15,0.6)" className="font-mono">
                  EST.
                </text>
                <text x={76} y={37} textAnchor="middle" fontSize={7} letterSpacing={1} fill="rgba(10,10,15,0.6)" className="font-mono">
                  2026
                </text>
              </svg>

              <div className="relative z-10 max-w-2xl mx-auto">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                  N&ordm; VT-{RESERVED_NUMERAL} &mdash; this line reserved
                </p>
                <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
                  The next entry could be{" "}
                  <GradientText animate as="span" className="italic">
                    yours.
                  </GradientText>
                </h2>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
                  This space is earned, not filled.
                </p>
                <MagneticButton
                  as={Link}
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 rounded-full btn-accent font-medium text-sm"
                >
                  <ShineOverlay trigger="hover" tone="dark" />
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                </MagneticButton>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
