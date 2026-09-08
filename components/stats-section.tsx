"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useRef, type RefObject } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import {
  ACCENT,
  ACCENTS,
  AmbientShape,
  AnimatedDivider,
  CountUp,
  GlowOrb,
  GradientText,
  Reveal,
  Stagger,
  StaggerItem,
  useParallax,
} from "@/components/motion"

/* ------------------------------------------------------------------ *
 *  STATS — a typographic ledger, not a row of cards.                  *
 *  Four figures set huge in serif with the suffix in brand red, each  *
 *  carrying one line of context so the number means something.        *
 *  Columns sit on hairline rules with a staggered baseline for an     *
 *  editorial rhythm; a ghost IMPACT watermark drifts behind.          *
 * ------------------------------------------------------------------ */

const stats = [
  {
    value: 14,
    suffix: "+",
    label: "Team Members",
    context: "Engineers, designers and product minds under one roof.",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    context: "Building and running software in production since 2019.",
  },
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    context: "Across retail, automotive, SaaS and enterprise operations.",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    context: "Every engagement referenceable — ask us for an introduction.",
  },
]

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  const parallaxRef = sectionRef as RefObject<HTMLElement>
  const slowY = useParallax(parallaxRef, { to: -110 })
  const fastY = useParallax(parallaxRef, { to: -56 })
  const watermarkY = useParallax(parallaxRef, { from: 30, to: -30 })

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* faint architectural grid (light-section variant) */}
      <div aria-hidden className="grid-texture-dark absolute inset-0 opacity-[0.5] pointer-events-none" />

      {/* ambient depth — the red signature, graphite as a quiet counterweight */}
      <GlowOrb
        color={ACCENT}
        size={560}
        opacity={0.08}
        parallax={slowY}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <AmbientShape
        variant="blob"
        color={ACCENTS[3]}
        size={240}
        opacity={0.12}
        parallax={fastY}
        className="-bottom-16 -right-20"
      />

      {/* ghost watermark — same vocabulary as the hero's TECHNOVA */}
      <motion.span
        aria-hidden
        style={reduce ? undefined : { y: watermarkY }}
        className="text-stroke-accent pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[18vw] leading-none font-bold text-transparent opacity-30"
      >
        IMPACT
      </motion.span>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal
              as="span"
              y={16}
              className="block text-sm text-muted-foreground uppercase tracking-widest"
            >
              By the Numbers
            </Reveal>
            <Reveal as="h2" delay={0.08} className="font-serif text-4xl md:text-6xl font-normal mt-4">
              Proven <GradientText animate>Impact</GradientText>
            </Reveal>
            <AnimatedDivider className="text-foreground mt-8 max-w-xs" />
          </div>
          <Reveal y={16} delay={0.2} className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            We measure ourselves the way our clients do — by what actually shipped
            and what it changed.
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
          {stats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <div
                className={`border-l border-border pl-6 md:pl-8 ${
                  i % 2 === 1 ? "lg:mt-14" : ""
                }`}
              >
                <span className="font-mono text-xs tracking-[0.2em]" style={{ color: ACCENT }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="mt-4 flex items-start">
                  <CountUp
                    value={stat.value}
                    className="block font-serif text-6xl md:text-7xl xl:text-8xl leading-none text-foreground"
                  />
                  <span
                    className="ml-1 mt-1 font-serif text-3xl md:text-4xl leading-none"
                    style={{ color: ACCENT }}
                  >
                    {stat.suffix}
                  </span>
                </div>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground">
                  {stat.label}
                </p>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                  {stat.context}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* closing rule + invitation */}
        <Reveal y={16} delay={0.2} className="mt-20 border-t border-border pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Counting since 2019 — still going
            </span>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-[#ef0b0a]">
                See the work behind the numbers
              </span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                style={{ color: ACCENT }}
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
