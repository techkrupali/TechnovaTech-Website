"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Target, Eye, Heart, Users, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef, type RefObject } from "react"
import { RunningStrip, LargeTextMarquee } from "./marquee-section"
import {
  ACCENT,
  DUR,
  EASE_OUT,
  Reveal,
  RevealText,
  Stagger,
  StaggerItem,
  GradientText,
  ShineOverlay,
  SpotlightCard,
  MagneticButton,
  GlowOrb,
  AmbientShape,
  AnimatedDivider,
  useParallax,
} from "@/components/motion"

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "We constantly push boundaries to deliver cutting-edge solutions that keep our clients ahead — and every new tool we adopt has to earn its place by solving a real problem.",
  },
  {
    icon: Eye,
    title: "Quality Focus",
    description:
      "Every line of code is crafted with precision, ensuring robust and scalable applications — reviewed, tested and load-proven before anything ships.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description:
      "Your success is our success. We partner with you to achieve your business goals — measured on your dashboard, not ours.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in transparent communication and working together as an extension of your team — one channel, straight answers, no surprises.",
  },
]

/* 2020 → 2027: six years shipped, the current chapter, and the one ahead. */
const milestones = [
  { year: "2020", title: "First Product", description: "Retailians POS launched — our flagship retail platform.", status: "done" },
  { year: "2021", title: "Team Growth", description: "Expanded to a team of 10+ specialists.", status: "done" },
  { year: "2022", title: "Enterprise", description: "911 Wrap ERP released for automotive businesses.", status: "done" },
  { year: "2023", title: "AI Integration", description: "AI capabilities built into both products.", status: "done" },
  { year: "2024", title: "Expansion", description: "Clients across multiple industries and regions.", status: "done" },
  { year: "2025", title: "Global Reach", description: "International clients across the US, UK, Canada and Australia.", status: "done" },
  { year: "2026", title: "Technova Era", description: "Full rebrand to Technova Tech — new identity, same team.", status: "now" },
  { year: "2027", title: "What's Next", description: "An AI-first product suite and a 25+ strong team.", status: "next" },
] as const

export default function AboutPageContent() {
  const reduceMotion = useReducedMotion()

  const heroRef = useRef<HTMLElement>(null)
  const heroParallaxRef = heroRef as RefObject<HTMLElement>
  const heroOrbY = useParallax(heroParallaxRef, { to: -120 })
  const heroShapeY = useParallax(heroParallaxRef, { to: 80 })

  const mvRef = useRef<HTMLElement>(null)
  const mvOrbY = useParallax(mvRef as RefObject<HTMLElement>, { to: -90 })

  const timelineRef = useRef<HTMLDivElement>(null)
  const timelineFillY = useParallax(timelineRef as RefObject<HTMLElement>, {
    from: 0,
    to: 1,
    offset: ["start center", "end center"],
  })

  return (
    <>
      {/* Hero Section — editorial statement + fact ledger */}
      <section ref={heroRef} className="pt-36 pb-24 relative overflow-hidden bg-background">
        {/* Decorative layers (pointer-events-none, behind z-10 content) */}
        <div className="grid-texture-dark absolute inset-0 pointer-events-none" aria-hidden />
        <GlowOrb color={ACCENT} size={520} opacity={0.14} parallax={heroOrbY} className="-top-32 -left-24" />
        <AmbientShape
          variant="ring"
          color={ACCENT}
          size={560}
          opacity={0.08}
          parallax={heroShapeY}
          className="-top-20 -right-32"
        />

        {/* ghost watermark — same vocabulary as the home hero's TECHNOVA */}
        <motion.span
          aria-hidden
          style={reduceMotion ? undefined : { y: heroShapeY }}
          className="text-stroke-accent pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[20vw] leading-none font-bold text-transparent opacity-30"
        >
          ABOUT
        </motion.span>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            {/* ---------- statement ---------- */}
            <div className="lg:col-span-8">
              <Reveal y={12} className="flex items-center gap-4">
                <span className="h-px w-10" style={{ backgroundColor: ACCENT }} aria-hidden />
                <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  About Us
                </span>
              </Reveal>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal mt-6 mb-8 leading-[1.02] text-foreground">
                <RevealText as="span" by="word" text="Building the" className="inline" />{" "}
                <GradientText tone="light" animate className="italic">
                  Future
                </GradientText>
                <br />
                <RevealText as="span" by="word" delay={0.18} text="of Technology" className="inline" />
                <motion.span
                  aria-hidden
                  className="ml-3 inline-block h-3 w-3 md:h-4 md:w-4 rounded-full align-baseline"
                  style={{ backgroundColor: ACCENT }}
                  initial={reduceMotion ? false : { scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.7 }}
                />
              </h1>

              <AnimatedDivider className="text-foreground max-w-[8rem] mb-8" />

              <Reveal as="p" y={16} delay={0.3} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Technova Tech delivers advanced AI-powered SaaS products and enterprise-grade
                ERP systems designed for modern businesses — built in Gujarat, running in
                production for clients across the world.
              </Reveal>

              <Reveal y={16} delay={0.45} className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/founder"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-[#ef0b0a]">
                    Meet the founder
                  </span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    style={{ color: ACCENT }}
                  />
                </Link>
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-[#ef0b0a]">
                    See the work
                  </span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    style={{ color: ACCENT }}
                  />
                </Link>
              </Reveal>
            </div>

            {/* ---------- fact ledger ---------- */}
            <Stagger className="lg:col-span-4 lg:pt-10">
              {[
                { label: "Founded", value: "2019" },
                { label: "Head Office", value: "Rajkot · Gujarat" },
                { label: "Team", value: "14+ specialists" },
                { label: "Products", value: "2 platforms live" },
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

      {/* Mission & Vision — a typographic diptych: the statements ARE the design.
          Sits directly under the hero (the running strip that used to separate
          them was removed on request). */}
      <section ref={mvRef} className="pb-28 pt-4 bg-background relative overflow-hidden">
        <GlowOrb color={ACCENT} size={460} opacity={0.1} parallax={mvOrbY} className="top-1/3 -right-40" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border border-y border-border">
            {/* ---------- mission ---------- */}
            <Reveal y={28} className="group relative py-14 pr-0 lg:pr-16">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-4 right-0 lg:right-16 select-none font-serif text-[9rem] leading-none text-foreground/[0.04]"
              >
                01
              </span>

              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.2em]" style={{ color: ACCENT }}>
                  01
                </span>
                <span className="h-px w-10 bg-border" aria-hidden />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Our Mission
                </span>
                <Rocket
                  className="ml-auto h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-[#ef0b0a]"
                  aria-hidden
                />
              </div>

              <p className="mt-10 font-serif text-2xl md:text-[1.75rem] leading-[1.45] text-foreground max-w-xl">
                To{" "}
                <em className="not-italic font-serif italic" style={{ color: ACCENT }}>
                  empower
                </em>{" "}
                businesses of all sizes with intelligent, scalable technology solutions that
                drive growth, efficiency, and innovation.
              </p>

              <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
                We strive to make enterprise-grade technology{" "}
                <span className="text-foreground font-medium">accessible and affordable</span> —
                the tools big companies take for granted, priced for the businesses still growing
                into them.
              </p>
            </Reveal>

            {/* ---------- vision ---------- */}
            <Reveal y={28} delay={0.12} className="group relative py-14 pl-0 lg:pl-16">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-4 right-0 select-none font-serif text-[9rem] leading-none text-foreground/[0.04]"
              >
                02
              </span>

              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.2em]" style={{ color: ACCENT }}>
                  02
                </span>
                <span className="h-px w-10 bg-border" aria-hidden />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Our Vision
                </span>
                <Eye
                  className="ml-auto h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-[#ef0b0a]"
                  aria-hidden
                />
              </div>

              <p className="mt-10 font-serif text-2xl md:text-[1.75rem] leading-[1.45] text-foreground max-w-xl">
                To become the{" "}
                <em className="not-italic font-serif italic" style={{ color: ACCENT }}>
                  leading technology partner
                </em>{" "}
                for businesses worldwide.
              </p>

              <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
                Known for our innovative solutions, exceptional quality, and an{" "}
                <span className="text-foreground font-medium">unwavering commitment to client success</span> —
                the partner clients recommend before they're even asked.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Large Text Marquee */}
      <LargeTextMarquee text="TECHNOVA TECH • SINCE 2019" speed={30} />

      {/* Values Section — a framed quadrant: four principles behind hairline rules */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal as="span" y={12} className="text-sm uppercase tracking-[0.3em] text-muted-foreground block">
                Our Values
              </Reveal>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 text-foreground">
                What <GradientText tone="light">Drives Us</GradientText>
              </h2>
            </div>
            <Reveal y={16} delay={0.2} className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Four principles we hold ourselves to on every engagement — not poster
              words, working rules.
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-px border border-border bg-border">
            {values.map((value, i) => (
              <StaggerItem key={value.title} className="bg-background">
                <div className="group relative h-full overflow-hidden bg-background p-10 md:p-12 transition-colors duration-500 hover:bg-secondary/40">
                  {/* ghost numeral */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-6 right-4 select-none font-serif text-[8rem] leading-none text-foreground/[0.04] transition-colors duration-500 group-hover:text-foreground/[0.07]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-center gap-4">
                    <span className="font-mono text-xs tracking-[0.2em]" style={{ color: ACCENT }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-10 bg-border" aria-hidden />
                    <value.icon
                      className="ml-auto h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-[#ef0b0a]"
                      aria-hidden
                    />
                  </div>

                  <h3 className="relative mt-8 font-serif text-2xl md:text-3xl text-foreground">
                    {value.title}
                  </h3>
                  <p className="relative mt-4 max-w-md leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>

                  {/* red sweep — draws along the bottom edge on hover */}
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                    style={{ backgroundColor: ACCENT }}
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Running Strip - Reverse */}
      <RunningStrip text="INNOVATION • TECHNOLOGY • EXCELLENCE" reverse speed={20} dark />

      {/* Timeline Section — the classic center-line timeline, 2020 → 2027 */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <Reveal as="span" y={12} className="text-sm uppercase tracking-[0.3em] text-muted-foreground block">
              Our Journey
            </Reveal>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 text-foreground">Milestones</h2>
          </div>

          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            {/* Timeline line — base track */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            {/* Timeline line — scroll-scrubbed red fill (scaleY, transform-only, origin top) */}
            <motion.div
              aria-hidden
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 origin-top"
              style={{
                scaleY: reduceMotion ? 1 : timelineFillY,
                background: `linear-gradient(to bottom, ${ACCENT}, transparent)`,
              }}
            />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: DUR.base, ease: EASE_OUT }}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}
                  >
                    <SpotlightCard
                      tone="light"
                      className="inline-block p-6 rounded-2xl bg-card border border-border hover:border-foreground/20"
                    >
                      <span className="text-4xl font-serif text-foreground">{milestone.year}</span>
                      <h3 className="text-xl font-medium mt-2 text-foreground">{milestone.title}</h3>
                      <p className="text-muted-foreground mt-2">{milestone.description}</p>
                    </SpotlightCard>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                    whileHover={reduceMotion ? undefined : { scale: 1.5 }}
                    className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-foreground dark:bg-card md:-translate-x-1/2 border-4 border-background"
                  >
                    {!reduceMotion && (
                      <motion.span
                        aria-hidden
                        className="absolute inset-0 rounded-full"
                        style={{ background: ACCENT }}
                        animate={{ scale: [1, 2.4, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
                      />
                    )}
                  </motion.div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: DUR.base, ease: EASE_OUT }}
            className="dark-section text-center p-16 rounded-3xl bg-foreground dark:bg-card relative overflow-hidden"
          >
            {/* Decorative layers (pointer-events-none, behind z-10 content) */}
            <div className="grid-texture absolute inset-0 pointer-events-none" aria-hidden />
            <GlowOrb color={ACCENT} size={420} opacity={0.22} className="-bottom-32 -left-24" />
            {!reduceMotion && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute top-0 right-0 w-80 h-80 border border-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
                aria-hidden
              />
            )}
            <ShineOverlay tone="dark" repeatDelay={5} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-background dark:text-foreground">
                Meet Our <GradientText tone="dark">Founder</GradientText>
              </h2>
              <p className="text-background/70 dark:text-muted-foreground mb-10 max-w-xl mx-auto text-lg">
                Learn more about the visionary behind Technova Tech and his journey in technology.
              </p>
              <MagneticButton
                as={Link}
                href="/founder"
                accent={ACCENT}
                glow={false}
                className="group inline-flex items-center gap-2 px-10 py-5 rounded-full bg-background text-foreground font-medium hover:bg-background/90 text-lg"
              >
                View Founder Profile
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
