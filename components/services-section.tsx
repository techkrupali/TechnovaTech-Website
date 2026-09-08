"use client"

import { useRef, useState, type RefObject } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import {
  ArrowUpRight,
  Brain,
  Cloud,
  Code2,
  Database,
  Headphones,
  Layers,
  Palette,
  Plus,
  Settings,
} from "lucide-react"
import {
  ACCENT,
  ACCENTS,
  AmbientShape,
  AnimatedDivider,
  EASE_OUT,
  GlowOrb,
  GradientText,
  Reveal,
  Stagger,
  StaggerItem,
  useParallax,
} from "@/components/motion"

/* ------------------------------------------------------------------ *
 *  SERVICES — an editorial index, not a card wall.                    *
 *  Left: a sticky manifesto column. Right: numbered rows that open    *
 *  like an accordion — each carries a real paragraph and the concrete *
 *  capabilities under it, so the section informs instead of listing.  *
 * ------------------------------------------------------------------ */

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "AI that earns its keep — custom models, RAG-powered assistants and workflow automation wired directly into your product and back office. Every build starts from a business metric, not a demo.",
    tags: ["Machine Learning", "LLM Chatbots & Copilots", "Workflow Automation", "Predictive Analytics"],
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    description:
      "From first wireframe to paying subscribers: multi-tenant architecture, billing, onboarding and an admin back office — built to scale from your first ten users to your first hundred thousand.",
    tags: ["Multi-tenant Platforms", "MVP to Scale", "Subscriptions & Billing", "Cloud-native"],
  },
  {
    icon: Database,
    title: "ERP & CRM Systems",
    description:
      "Operations software shaped around how your business actually runs — inventory, sales pipelines, HR and finance in one place, with dashboards leadership can act on the same day.",
    tags: ["Inventory & Operations", "Sales Pipelines", "Custom Dashboards", "Data Migration"],
  },
  {
    icon: Code2,
    title: "Web & Mobile Development",
    description:
      "Fast, modern web platforms and native-feeling mobile apps from one accountable team — responsive front ends, robust APIs and app-store-ready builds that hold up under real traffic.",
    tags: ["Next.js & React", "Native & Cross-platform", "E-commerce", "Progressive Web Apps"],
  },
  {
    icon: Settings,
    title: "Cloud & DevOps",
    description:
      "Infrastructure as code, CI/CD pipelines and monitoring that let you deploy on a Tuesday afternoon without holding your breath. We tune for cost as carefully as for speed.",
    tags: ["AWS · Azure · GCP", "CI/CD Pipelines", "Kubernetes & Docker", "Cost Optimization"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces that feel inevitable: research, wireframes, design systems and polished visual design — tested with real users before a single line of production code is written.",
    tags: ["Product Design", "Design Systems", "Prototyping", "User Research"],
  },
  {
    icon: Layers,
    title: "Custom Software & Integrations",
    description:
      "When off-the-shelf doesn't fit, we build the tool that does — then wire it into everything you already use through clean, documented APIs instead of brittle workarounds.",
    tags: ["Bespoke Tools", "API Development", "Third-party Integrations", "Legacy Modernization"],
  },
  {
    icon: Headphones,
    title: "IT Support & Maintenance",
    description:
      "Launch is the midpoint, not the finish. Monitoring, security patches, performance tuning — and a real human on the line when something needs attention, whatever the hour.",
    tags: ["24/7 Monitoring", "SLA-backed Support", "Performance Tuning", "Security Updates"],
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)

  const parallaxRef = sectionRef as RefObject<HTMLElement>
  const slowY = useParallax(parallaxRef, { to: -120 })
  const fastY = useParallax(parallaxRef, { to: -64 })

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* faint architectural grid (light-section variant) */}
      <div aria-hidden className="grid-texture-dark absolute inset-0 opacity-[0.5] pointer-events-none" />

      {/* ambient depth — the red signature, graphite as a quiet counterweight */}
      <GlowOrb color={ACCENT} size={520} opacity={0.1} parallax={slowY} className="-top-40 -left-32" />
      <AmbientShape variant="ring" color={ACCENT} size={300} opacity={0.18} parallax={slowY} className="top-16 -left-24" />
      <AmbientShape variant="blob" color={ACCENTS[3]} size={260} opacity={0.14} parallax={fastY} className="bottom-16 -right-24" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          {/* ---------- left: the sticky manifesto ---------- */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal
                as="span"
                y={16}
                className="block text-sm text-muted-foreground uppercase tracking-widest"
              >
                Our Services
              </Reveal>
              <Reveal as="h2" delay={0.08} className="font-serif text-4xl md:text-6xl font-normal mt-4">
                End-to-End <GradientText animate>IT Solutions</GradientText>
              </Reveal>
              <AnimatedDivider className="text-foreground mt-8 max-w-xs" />

              <Reveal as="p" y={16} delay={0.2} className="mt-8 text-muted-foreground leading-relaxed max-w-md">
                Strategy, design, engineering and support under one roof. Eight disciplines,
                one accountable team — so nothing gets lost between a design agency, a dev
                shop and whoever answers the phone after launch.
              </Reveal>

              {/* quiet proof line */}
              <Reveal y={16} delay={0.3} className="mt-10 flex items-center gap-8">
                <div>
                  <div className="font-serif text-3xl text-foreground">08</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Disciplines</div>
                </div>
                <div className="h-10 w-px bg-border" aria-hidden />
                <div>
                  <div className="font-serif text-3xl text-foreground">01</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Point of contact</div>
                </div>
              </Reveal>

              <Reveal y={16} delay={0.4} className="mt-12 hidden lg:block">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-[#ef0b0a]">
                    Explore every service in depth
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: ACCENT }} />
                </Link>
              </Reveal>
            </div>
          </div>

          {/* ---------- right: the numbered index ---------- */}
          <Stagger className="lg:col-span-7">
            {services.map((service, i) => {
              const open = active === i
              return (
                <StaggerItem key={service.title}>
                  <div className={i === services.length - 1 ? "border-y border-border" : "border-t border-border"}>
                    <button
                      type="button"
                      onClick={() => setActive(open ? -1 : i)}
                      aria-expanded={open}
                      className="group flex w-full items-center gap-5 py-6 text-left md:gap-8"
                    >
                      <span
                        className="font-mono text-xs tracking-[0.2em] transition-colors duration-300"
                        style={{ color: open ? ACCENT : "var(--muted-foreground)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <motion.h3
                        className="flex-1 font-serif text-2xl md:text-[2rem] leading-tight text-foreground"
                        animate={reduce ? undefined : { x: open ? 8 : 0 }}
                        transition={{ duration: 0.4, ease: EASE_OUT }}
                      >
                        {service.title}
                      </motion.h3>

                      <service.icon
                        className="hidden sm:block w-5 h-5 shrink-0 transition-colors duration-300"
                        style={{ color: open ? ACCENT : "var(--muted-foreground)" }}
                        aria-hidden
                      />
                      <motion.span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300"
                        style={{
                          borderColor: open ? ACCENT : "var(--border)",
                          backgroundColor: open ? ACCENT : "transparent",
                        }}
                        animate={reduce ? undefined : { rotate: open ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: EASE_OUT }}
                      >
                        <Plus className={`h-4 w-4 ${open ? "text-white" : "text-muted-foreground"}`} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: EASE_OUT }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-10 pr-2 md:pl-16 md:pr-16">
                            <p className="text-muted-foreground leading-relaxed max-w-xl">
                              {service.description}
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                              {service.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </StaggerItem>
              )
            })}

            {/* mobile fallback for the left column's CTA */}
            <div className="mt-10 lg:hidden">
              <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-[#ef0b0a]">
                  Explore every service in depth
                </span>
                <ArrowUpRight className="w-4 h-4" style={{ color: ACCENT }} />
              </Link>
            </div>
          </Stagger>
        </div>
      </div>
    </section>
  )
}
