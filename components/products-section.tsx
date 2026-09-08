"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useRef, type RefObject } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import {
  ACCENT,
  ACCENTS,
  AmbientShape,
  AnimatedDivider,
  GlowOrb,
  GradientText,
  Reveal,
  TiltCard,
  useParallax,
} from "@/components/motion"

/* ------------------------------------------------------------------ *
 *  PRODUCTS — two flagship platforms, presented as flagships.         *
 *  Each product gets a full editorial panel: category eyebrow, live    *
 *  badge, a real paragraph, capability chips — and a hand-built mock   *
 *  dashboard in a TiltCard, so the section shows the product instead   *
 *  of merely naming it. Panels alternate direction on desktop.         *
 * ------------------------------------------------------------------ */

const products = [
  {
    number: "01",
    category: "Enterprise ERP · Automotive",
    title: "911 Wrap ERP",
    description:
      "An end-to-end ERP for automobile dealerships and custom wrap studios — every vehicle tracked from first enquiry to final invoice, with order management, job scheduling and profit analytics built in.",
    tags: ["Order Management", "Job Scheduling", "Inventory Control", "Profit Analytics"],
    mock: "erp" as const,
    screenshot: "/products/911-dashboard.png",
  },
  {
    number: "02",
    category: "EdTech · Digital SAT Prep",
    title: "DSAT Guru",
    description:
      "A smart Digital SAT preparation platform — adaptive practice that targets weak areas first, full-length mock tests, and score-trend analytics that show students exactly what is improving before test day.",
    tags: ["Adaptive Practice", "Full-length Mocks", "Score Analytics", "Study Plans"],
    mock: "edu" as const,
  },
  {
    number: "03",
    category: "Custom Build · Roofing & Restoration",
    title: "Miller Storm",
    description:
      "A complete digital build for a Dallas\u2013Fort Worth roofing and restoration company — their website, their field-crew mobile app, and personalised software running inspections, jobs and insurance claims end to end.",
    tags: ["Booking Website", "Field Crew App", "Jobs & Claims Software", "Financing Integrations"],
    mock: "field" as const,
  },
]

/* ---- hand-built mock UIs (pure divs — always crisp, always on-brand) ---- */

function MockChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-4 sm:p-5 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 mb-4">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
        <span className="ml-3 h-2 w-24 rounded-full bg-white/10" />
      </div>
      {children}
    </div>
  )
}

function EduMock() {
  const options = [72, 58, 66, 50]
  const trend = [30, 42, 38, 55, 62, 74, 88]
  return (
    <MockChrome>
      {/* question card */}
      <div className="rounded-lg bg-white/[0.05] p-3">
        <span className="block h-1.5 w-16 rounded-full" style={{ backgroundColor: ACCENT }} />
        <span className="mt-2.5 block h-2 w-4/5 rounded-full bg-white/25" />
        <span className="mt-1.5 block h-2 w-3/5 rounded-full bg-white/15" />
      </div>
      {/* answer options — one selected in red */}
      <div className="mt-3 space-y-2">
        {options.map((w, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-lg border px-3 py-2"
            style={{
              borderColor: i === 1 ? ACCENT : "rgba(255,255,255,0.1)",
              backgroundColor: i === 1 ? "rgba(239,11,10,0.12)" : "rgba(255,255,255,0.04)",
            }}
          >
            <span
              className="h-3 w-3 shrink-0 rounded-full border"
              style={{
                borderColor: i === 1 ? ACCENT : "rgba(255,255,255,0.25)",
                backgroundColor: i === 1 ? ACCENT : "transparent",
              }}
            />
            <span className="h-1.5 rounded-full bg-white/20" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
      {/* score trend, rising */}
      <div className="mt-4 flex h-14 items-end gap-2">
        {trend.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              backgroundColor: i === trend.length - 1 ? ACCENT : "rgba(255,255,255,0.12)",
            }}
          />
        ))}
      </div>
    </MockChrome>
  )
}

function FieldMock() {
  const jobs = [
    { w: 62, urgent: false },
    { w: 48, urgent: true },
    { w: 70, urgent: false },
    { w: 55, urgent: false },
  ]
  return (
    <MockChrome>
      {/* KPI strip */}
      <div className="mb-4 grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-white/[0.05] p-3">
            <span className="block h-1.5 w-8 rounded-full bg-white/15" />
            <span
              className="mt-2 block h-2.5 w-12 rounded-full"
              style={{ backgroundColor: i === 1 ? ACCENT : "rgba(255,255,255,0.3)" }}
            />
          </div>
        ))}
      </div>
      {/* inspection jobs queue */}
      <div className="space-y-2.5">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg border px-3 py-2.5"
            style={{
              borderColor: job.urgent ? ACCENT : "rgba(255,255,255,0.1)",
              backgroundColor: job.urgent ? "rgba(239,11,10,0.12)" : "rgba(255,255,255,0.04)",
            }}
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: job.urgent ? ACCENT : "rgba(255,255,255,0.3)" }}
            />
            <span className="h-1.5 rounded-full bg-white/25" style={{ width: `${job.w * 0.6}%` }} />
            <span className="ml-auto h-1.5 w-10 rounded-full bg-white/15" />
            {job.urgent && (
              <span
                className="rounded px-1.5 py-0.5 font-mono text-[7px] font-bold uppercase tracking-[0.15em] text-white"
                style={{ backgroundColor: ACCENT }}
              >
                Urgent
              </span>
            )}
          </div>
        ))}
      </div>
      {/* dispatch button */}
      <div
        className="mt-4 flex h-8 items-center justify-center rounded-md font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white"
        style={{ backgroundColor: ACCENT }}
      >
        Dispatch Crew
      </div>
    </MockChrome>
  )
}

function ErpMock() {
  const cols: { done: number; cards: number[] }[] = [
    { done: -1, cards: [65, 45] },
    { done: 0, cards: [55, 70, 40] },
    { done: 1, cards: [60] },
  ]
  return (
    <MockChrome>
      {/* KPI strip */}
      <div className="mb-4 grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-white/[0.05] p-3">
            <span className="block h-1.5 w-8 rounded-full bg-white/15" />
            <span
              className="mt-2 block h-2.5 w-12 rounded-full"
              style={{ backgroundColor: i === 0 ? ACCENT : "rgba(255,255,255,0.3)" }}
            />
          </div>
        ))}
      </div>
      {/* jobs board */}
      <div className="grid grid-cols-3 gap-3">
        {cols.map((col, c) => (
          <div key={c} className="space-y-2">
            <span className="block h-1.5 w-12 rounded-full bg-white/15" />
            {col.cards.map((w, i) => {
              const hot = c === col.done && i === 0
              return (
                <div
                  key={i}
                  className="rounded-lg border p-2.5"
                  style={{
                    borderColor: hot ? ACCENT : "rgba(255,255,255,0.1)",
                    backgroundColor: hot ? "rgba(239,11,10,0.12)" : "rgba(255,255,255,0.05)",
                  }}
                >
                  <span className="block h-1.5 rounded-full bg-white/25" style={{ width: `${w}%` }} />
                  <span className="mt-2 block h-1.5 w-1/3 rounded-full bg-white/10" />
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </MockChrome>
  )
}

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  const parallaxRef = sectionRef as RefObject<HTMLElement>
  const slowY = useParallax(parallaxRef, { to: -120 })
  const fastY = useParallax(parallaxRef, { to: -64 })
  const watermarkY = useParallax(parallaxRef, { from: 40, to: -40 })

  return (
    <section ref={sectionRef} className="py-32 dark-section relative overflow-hidden">
      {/* faint architectural grid (dark-section variant) */}
      <div aria-hidden className="grid-texture absolute inset-0 pointer-events-none" />

      {/* ambient depth — the red signature, graphite as a quiet counterweight */}
      <GlowOrb color={ACCENT} size={520} opacity={0.14} parallax={slowY} className="-top-40 right-0" />
      <AmbientShape
        variant="mesh"
        color="#ffffff"
        size={400}
        opacity={0.08}
        parallax={slowY}
        className="top-1/4 -right-32 hidden md:block"
      />
      <AmbientShape
        variant="blob"
        color={ACCENTS[3]}
        size={280}
        opacity={0.12}
        parallax={fastY}
        className="bottom-10 -left-24"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal
              as="span"
              y={16}
              className="block text-sm text-white/50 uppercase tracking-widest"
            >
              Our Products
            </Reveal>
            <Reveal as="h2" delay={0.08} className="font-serif text-4xl md:text-6xl font-normal mt-4 text-white">
              SaaS & <GradientText tone="dark" animate>Enterprise Solutions</GradientText>
            </Reveal>
            <AnimatedDivider className="text-white mt-8 max-w-xs" />
          </div>
          <Reveal y={16} delay={0.2} className="max-w-xs text-sm leading-relaxed text-white/50">
            Not just client work — we run our own platforms in production, and they teach
            us what ships and what scales.
          </Reveal>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {products.map((product, i) => {
            const flipped = i % 2 === 1
            return (
              <div key={product.title} className="relative">
                {/* giant ghost watermark number */}
                <motion.span
                  aria-hidden
                  style={reduce ? undefined : { y: watermarkY }}
                  className={`pointer-events-none absolute -top-16 font-serif text-[10rem] md:text-[14rem] leading-none text-white/[0.04] select-none ${
                    flipped ? "left-0" : "right-0"
                  }`}
                >
                  {product.number}
                </motion.span>

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                  {/* ---------- copy ---------- */}
                  <Reveal
                    y={24}
                    className={`lg:col-span-6 ${flipped ? "lg:order-2" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs tracking-[0.2em]" style={{ color: ACCENT }}>
                        {product.number}
                      </span>
                      <span className="h-px w-10 bg-white/20" aria-hidden />
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="mt-5 font-serif text-3xl md:text-5xl text-white">
                      {product.title}
                    </h3>

                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1">
                      <span
                        className="h-1.5 w-1.5 rounded-full animate-pulse-glow"
                        style={{ backgroundColor: ACCENT }}
                      />
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/60">
                        Live in production
                      </span>
                    </div>

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
                      {product.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/55"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/portfolio"
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white"
                    >
                      <span className="border-b border-white/25 pb-0.5 transition-colors group-hover:border-[#ef0b0a]">
                        See it in action
                      </span>
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 group-hover:border-[#ef0b0a] group-hover:bg-[#ef0b0a]"
                      >
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                      </span>
                    </Link>
                  </Reveal>

                  {/* ---------- mock UI ---------- */}
                  <Reveal
                    y={32}
                    delay={0.12}
                    className={`lg:col-span-6 ${flipped ? "lg:order-1" : ""}`}
                  >
                    <div className="relative">
                      {/* red under-glow anchoring the panel to the brand */}
                      <div
                        aria-hidden
                        className="absolute -inset-6 rounded-[2rem] blur-3xl"
                        style={{ backgroundColor: ACCENT, opacity: 0.07 }}
                      />
                      <TiltCard max={6} className="relative">
                        {"screenshot" in product && product.screenshot ? (
                          <img
                            src={product.screenshot}
                            alt={`${product.title} dashboard`}
                            className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
                          />
                        ) : product.mock === "erp" ? (
                          <ErpMock />
                        ) : product.mock === "edu" ? (
                          <EduMock />
                        ) : (
                          <FieldMock />
                        )}
                      </TiltCard>
                    </div>
                  </Reveal>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
