"use client"

import { useRef, type RefObject } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Code2, Cloud, Brain, Shield, Layers, Linkedin, Mail, Award, Briefcase, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import { LargeTextMarquee } from "./marquee-section"
import {
  ACCENT,
  ACCENTS,
  DUR,
  EASE_OUT,
  SPRING_POP,
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

const skills = [
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "Node.js",
  "Express.js",
  "TypeScript",
  "JavaScript",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Sass/SCSS",
  "Redux",
  "PHP",
  "Laravel",
  "Python",
  "Django",
  "Rust & Go",
  "Java",
  "Kotlin & Swift",
  "React Native",
  "Flutter",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Firebase",
  "Supabase",
  "REST & GraphQL APIs",
  "AWS & Cloud Deployment",
  "Docker & CI/CD",
  "Git & GitHub",
  "WordPress & Shopify",
  "Payment Gateway Integration",
  "Figma & UI Design",
  "SEO & Performance",
  "AI & LLM Integration",
]

const expertise = [
  {
    icon: Layers,
    title: "Enterprise Architecture",
    items: [
      "Monorepo Architecture (Nx/Turborepo)",
      "Multi-tenant SaaS with row-level isolation",
      "Event Sourcing + CQRS",
      "Bounded Context Mapping",
    ],
  },
  {
    icon: Cloud,
    title: "Infrastructure & Scale",
    items: [
      "API Gateway Design (Envoy, Kong)",
      "High-traffic system design (10M+ users)",
      "Multi-region cloud deployment",
      "Kubernetes Operators",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    items: ["LLM Fine-tuning", "RAG 2.0 Architecture", "AI Agents Development", "GPU Inference Pipelines"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    items: [
      "Zero-Trust Architecture",
      "Observability Engineering",
      "Subscription + Billing Infrastructure",
      "Enterprise Security",
    ],
  },
]

export default function FounderPageContent() {
  const reduce = useReducedMotion()

  const heroRef = useRef<HTMLElement>(null)
  const heroBgY = useParallax(heroRef as RefObject<HTMLElement>, { to: -120 })

  const expertiseRef = useRef<HTMLElement>(null)
  const expertiseBgY = useParallax(expertiseRef as RefObject<HTMLElement>, { to: -90 })

  const achievementRef = useRef<HTMLElement>(null)
  const achievementBgY = useParallax(achievementRef as RefObject<HTMLElement>, { to: -80 })

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden bg-background">
        {/* decorative depth — behind content, pointer-events-none */}
        <div aria-hidden className="grid-texture-dark pointer-events-none absolute inset-0" />
        <GlowOrb color={ACCENT} size={520} opacity={0.16} parallax={heroBgY} className="-top-32 -left-24" />
        <GlowOrb color={ACCENTS[3]} size={420} opacity={0.12} parallax={heroBgY} className="top-10 -right-28" />
        <AmbientShape
          variant="ring"
          color={ACCENT}
          size={560}
          opacity={0.08}
          parallax={heroBgY}
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Info */}
            <div>
              <Reveal
                as="span"
                y={12}
                className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block"
              >
                Founder &amp; CEO
              </Reveal>

              <h1 className="text-4xl md:text-6xl font-serif mt-4 mb-4 text-foreground">
                <RevealText as="span" by="word" text="Krupali Vekariya" delay={0.1} className="inline-block" />
              </h1>

              <Reveal as="p" y={16} delay={0.25} className="text-xl text-muted-foreground mb-6">
                Full-Stack Developer &amp; Tech Entrepreneur
              </Reveal>

              <Reveal
                as="p"
                y={16}
                delay={0.35}
                className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                I build the technology businesses run on — custom apps, high-performance
                platforms and modern workflows that turn everyday operations into a
                competitive edge. From the first idea to the version your customers use,
                one accountable pair of hands.
              </Reveal>

              <Stagger delayChildren={0.45} className="flex flex-wrap justify-center gap-4 mb-8">
                <StaggerItem y={16}>
                  <motion.div
                    whileHover={reduce ? undefined : { scale: 1.05, y: -2 }}
                    transition={{ duration: DUR.fast, ease: EASE_OUT }}
                    className="group relative overflow-hidden flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
                  >
                    <ShineOverlay trigger="hover" tone="light" className="rounded-full" />
                    <Briefcase className="relative z-10 w-4 h-4 text-foreground" />
                    <span className="relative z-10 text-sm text-foreground">Founder, Technova Tech</span>
                  </motion.div>
                </StaggerItem>
                <StaggerItem y={16}>
                  <motion.div
                    whileHover={reduce ? undefined : { scale: 1.05, y: -2 }}
                    transition={{ duration: DUR.fast, ease: EASE_OUT }}
                    className="group relative overflow-hidden flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
                  >
                    <ShineOverlay trigger="hover" tone="light" className="rounded-full" />
                    <Code2 className="relative z-10 w-4 h-4 text-foreground" />
                    <span className="relative z-10 text-sm text-foreground">Full-Stack Expert</span>
                  </motion.div>
                </StaggerItem>
              </Stagger>

              <Reveal y={16} delay={0.6} className="flex flex-wrap items-center justify-center gap-3">
                <MagneticButton
                  as={Link}
                  href="mailto:hello.technovatechnologies@gmail.com"
                  accent={ACCENT}
                  className="group relative overflow-hidden gap-2 px-6 py-3 rounded-full bg-foreground dark:bg-card text-background dark:text-foreground font-medium"
                >
                  <ShineOverlay trigger="hover" tone="dark" className="rounded-full" />
                  <Mail className="relative z-10 w-4 h-4" />
                  <span className="relative z-10">Get in Touch</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="https://www.linkedin.com/in/krupali-vekariya-671855269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  accent={ACCENT}
                  glow={false}
                  className="group relative overflow-hidden gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium"
                >
                  <ShineOverlay trigger="hover" tone="light" className="rounded-full" />
                  <Linkedin className="relative z-10 w-4 h-4" style={{ color: ACCENT }} />
                  <span className="relative z-10">LinkedIn</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section — pulled close under the hero */}
      <section className="pt-4 pb-20 relative bg-background">
        <div className="container mx-auto px-6">
          <Reveal className="max-w-4xl mx-auto">
            <SpotlightCard tone="light" lift={-6} className="p-10 rounded-3xl bg-card border border-border">
              <div className="relative z-10 flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={reduce ? undefined : { rotate: 360 }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                  className="w-12 h-12 rounded-xl bg-foreground dark:bg-card flex items-center justify-center"
                >
                  <GraduationCap className="w-6 h-6 text-background dark:text-foreground" />
                </motion.div>
                <h2 className="text-2xl font-serif text-foreground">About Me</h2>
              </div>
              <div className="relative z-10 space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {`I'm Krupali Vekariya, a Full-Stack Developer and the Founder of Technova Tech.
                  Since 2019 I've been building smart, scalable digital solutions from Gujarat for
                  clients around the world — custom apps, high-performance systems and modern
                  technology workflows that change how businesses operate day to day.`}
                </p>
                <p>
                  {`That work has grown into products of our own — `}
                  <span className="text-foreground font-medium">Retailians POS</span>
                  {` running daily in thousands of Indian retail stores, `}
                  <span className="text-foreground font-medium">911 Wrap ERP</span>
                  {` powering automotive businesses, `}
                  <span className="text-foreground font-medium">DSAT Guru</span>
                  {` helping students prep smarter — alongside websites, mobile apps and platforms
                  shipped for clients across India, Bangladesh, the US and Australia.`}
                </p>
                <p>
                  {`My focus never changes: quality you can measure, automation that removes
                  busywork, and user-centric design people actually enjoy using. I stay hands-on
                  with every project — from the first architecture sketch to the release your
                  customers touch.`}
                </p>
                <p className="border-l-2 pl-5 font-serif text-xl italic text-foreground" style={{ borderColor: ACCENT }}>
                  Ideas only matter once they ship — and shipping is what we do.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* Large Text Marquee */}
      <LargeTextMarquee text="INNOVATION • EXCELLENCE • GROWTH" speed={35} />

      {/* Expertise Section */}
      <section ref={expertiseRef} className="py-24 relative overflow-hidden bg-background">
        <GlowOrb color={ACCENT} size={460} opacity={0.1} parallax={expertiseBgY} className="top-24 -right-32" />
        <AmbientShape
          variant="blob"
          color={ACCENTS[2]}
          size={520}
          opacity={0.06}
          parallax={expertiseBgY}
          className="-bottom-40 -left-32"
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal as="span" y={12} className="block text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Expertise
              </Reveal>
              <Reveal as="h2" delay={0.08} className="text-4xl md:text-5xl font-serif mt-4 text-foreground">
                Strong <GradientText animate>Expertise</GradientText> Areas
              </Reveal>
            </div>
            <Reveal y={16} delay={0.2} className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Four disciplines, kept sharp on real projects — not certificates on a wall,
              systems running in production.
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border">
            {expertise.map((area, index) => (
              <StaggerItem key={area.title} className="border-b border-r border-border bg-background">
                <div className="group relative h-full overflow-hidden p-10 md:p-12 transition-colors duration-500 hover:bg-secondary/40">
                  {/* ghost numeral */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-6 right-4 select-none font-serif text-[8rem] leading-none text-foreground/[0.04] transition-colors duration-500 group-hover:text-foreground/[0.07]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-center gap-4">
                    <span className="font-mono text-xs tracking-[0.2em]" style={{ color: ACCENT }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-10 bg-border" aria-hidden />
                    <area.icon
                      className="ml-auto h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-[#ef0b0a]"
                      aria-hidden
                    />
                  </div>

                  <h3 className="relative mt-8 font-serif text-2xl md:text-3xl text-foreground">
                    {area.title}
                  </h3>

                  <ul className="relative mt-6 space-y-3">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <span
                          aria-hidden
                          className="h-1 w-1 shrink-0 rotate-45 bg-foreground/40 transition-colors duration-300 group-hover:bg-[#ef0b0a]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

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


      {/* Skills Cloud — pulled close under the expertise grid */}
      <section className="pt-6 pb-24 relative bg-background">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-12">
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Technical Skills</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 text-foreground">
              Tech <GradientText animate>Stack</GradientText>
            </h2>
          </Reveal>

          <Stagger className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <StaggerItem key={skill} y={16}>
                <motion.span
                  whileHover={reduce ? undefined : { scale: 1.1, y: -5 }}
                  transition={{ type: SPRING_POP.type, stiffness: SPRING_POP.stiffness, damping: SPRING_POP.damping }}
                  className="group relative inline-flex overflow-hidden px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-[#ef0b0a]/50 transition-colors cursor-default text-foreground"
                >
                  <ShineOverlay trigger="hover" tone="light" className="rounded-full" />
                  <span className="relative z-10">{skill}</span>
                </motion.span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Achievement Section */}
      <section ref={achievementRef} className="py-24 relative overflow-hidden bg-secondary/30">
        <GlowOrb color={ACCENT} size={420} opacity={0.12} parallax={achievementBgY} className="-top-24 left-1/4" />
        <AmbientShape
          variant="ring"
          color={ACCENTS[0]}
          size={480}
          opacity={0.07}
          parallax={achievementBgY}
          className="-bottom-32 -right-24"
        />

        <div className="container mx-auto px-6 relative z-10">
          <Reveal className="max-w-3xl mx-auto">
            <SpotlightCard
              tone="light"
              lift={-6}
              className="text-center p-10 rounded-3xl bg-card border border-border"
            >
              <motion.div
                whileHover={reduce ? undefined : { rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
                className="relative z-10 w-16 h-16 rounded-2xl bg-foreground dark:bg-card flex items-center justify-center mx-auto mb-6"
              >
                <Award className="w-8 h-8 text-background dark:text-foreground" />
              </motion.div>
              <h2 className="relative z-10 text-3xl font-serif mb-6 text-foreground">Key Achievement</h2>
              <p className="relative z-10 text-lg text-muted-foreground leading-relaxed">
                Founded Technova Tech and delivered scalable digital solutions across multiple industries including retail,
                services, and SMBs. Leading a team of 14+ professionals to build enterprise-grade products that serve
                thousands of users daily.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center p-16 rounded-3xl bg-foreground dark:bg-card relative overflow-hidden">
              {/* slow orbital rings — transform-only, reduced-motion gated */}
              {!reduce && (
                <>
                  <motion.div
                    aria-hidden
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="pointer-events-none absolute top-0 right-0 w-80 h-80 border border-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
                  />
                  <motion.div
                    aria-hidden
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 border border-white/10 rounded-full translate-y-1/2 -translate-x-1/2"
                  />
                </>
              )}
              {/* subtle lime glow + grid texture on the dark surface */}
              <GlowOrb color={ACCENT} size={520} opacity={0.16} pulse className="-bottom-40 left-1/2 -translate-x-1/2" />
              <div aria-hidden className="grid-texture pointer-events-none absolute inset-0 opacity-[0.04]" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif mb-6 text-background dark:text-foreground">
                  {"Let's Build Something "}
                  <GradientText tone="dark" animate as="span">
                    Great
                  </GradientText>
                  {" Together"}
                </h2>
                <p className="text-background/70 dark:text-muted-foreground mb-6 max-w-xl mx-auto text-lg">
                  Have a project in mind? I would love to hear about it and explore how we can work together.
                </p>

                <AnimatedDivider accent={ACCENT} className="text-white/80 mx-auto mb-10 max-w-xs" />

                <div className="flex flex-wrap justify-center gap-4">
                  <MagneticButton
                    as={Link}
                    href="/contact"
                    accent={ACCENT}
                    className="group relative overflow-hidden gap-2 px-10 py-5 rounded-full bg-background text-foreground font-medium text-lg"
                  >
                    <ShineOverlay trigger="hover" tone="light" className="rounded-full" />
                    <span className="relative z-10">Start a Project</span>
                    <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </MagneticButton>
                  <MagneticButton
                    as={Link}
                    href="mailto:hello.technovatechnologies@gmail.com"
                    glow={false}
                    className="group relative overflow-hidden gap-2 px-10 py-5 rounded-full border border-white/20 text-background dark:text-foreground text-lg hover:bg-white/10 transition-colors"
                  >
                    <ShineOverlay trigger="hover" tone="dark" className="rounded-full" />
                    <Mail className="relative z-10 w-5 h-5" />
                    <span className="relative z-10">Email Directly</span>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
