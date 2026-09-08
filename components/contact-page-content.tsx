"use client"

import type React from "react"
import type { RefObject } from "react"
import { useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Mail, Phone, Send, CheckCircle2, Clock, Users, ArrowUpRight } from "lucide-react"
import {
  ACCENT,
  DUR,
  EASE_OUT,
  Reveal,
  RevealText,
  Stagger,
  StaggerItem,
  GradientText,
  MagneticButton,
  GlowOrb,
  AmbientShape,
  AnimatedDivider,
  ShineOverlay,
  useParallax,
} from "@/components/motion"

/* ------------------------------------------------------------------ *
 *  CONTACT — the editorial close. A statement hero with a contact     *
 *  ledger, a hairline underline form (no boxy card), working-rules    *
 *  rows instead of icon bullets, and the three offices as a framed    *
 *  grid with live maps.                                               *
 * ------------------------------------------------------------------ */

type Office = {
  label: string
  lines: string[]
  phoneLabel: string
  phoneDisplay: string
  phoneHref: string
  mapQuery: string
}

const offices: Office[] = [
  {
    label: "Head Office",
    lines: ["R.K. World Tower", "Rajkot, Gujarat, India"],
    phoneLabel: "Call / WhatsApp",
    phoneDisplay: "+91 93167 34210",
    phoneHref: "https://wa.me/919316734210",
    mapQuery: "R.K. World Tower, Rajkot, Gujarat",
  },
  {
    label: "Ahmedabad Branch",
    lines: ["Titanium City Center Business Park", "Ahmedabad, Gujarat 380015"],
    phoneLabel: "WhatsApp only",
    phoneDisplay: "+91 91069 24543",
    phoneHref: "https://wa.me/919106924543",
    mapQuery: "Titanium City Center, Ahmedabad, Gujarat",
  },
  {
    label: "Canada Office",
    lines: ["Dolphin Ave", "Kelowna, BC V1Y 9J7, Canada"],
    phoneLabel: "WhatsApp only",
    phoneDisplay: "+1 825 907 0036",
    phoneHref: "https://wa.me/18259070036",
    mapQuery: "Dolphin Ave, Kelowna, BC V1Y 9J7, Canada",
  },
]

const reasons = [
  {
    icon: Clock,
    title: "First reply within 24 hours",
    description: "Usually much sooner — and always from a person, never a bot.",
  },
  {
    icon: Users,
    title: "14+ specialists on call",
    description: "Design, engineering and support under one roof, one point of contact.",
  },
  {
    icon: CheckCircle2,
    title: "50+ projects shipped",
    description: "Websites, apps and platforms running in production across six countries.",
  },
]

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const reduce = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)
  const heroBgY = useParallax(heroRef as RefObject<HTMLElement>, { to: -110 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: "", email: "", company: "", service: "", message: "" })
        }, 3000)
      } else {
        const errorData = await response.json()
        console.error('Server error:', errorData)
        throw new Error(errorData.error || 'Failed to send email')
      }
    } catch (error) {
      console.error('Error:', error)
      alert((error as Error).message || 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  /* hairline underline fields — editorial, not boxy */
  const inputClass =
    "w-full bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-foreground outline-none transition-colors focus:border-[#ef0b0a] focus:ring-0 placeholder:text-muted-foreground/50"
  const labelClass = "block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1"

  return (
    <>
      {/* ---------- hero: editorial statement + contact ledger ---------- */}
      <section ref={heroRef} className="pt-36 pb-20 relative overflow-hidden bg-background">
        {/* decorative layers — pointer-events-none, behind content */}
        <div aria-hidden className="absolute inset-0 grid-texture-dark pointer-events-none" />
        <GlowOrb color={ACCENT} size={520} opacity={0.14} parallax={heroBgY} className="-top-32 -left-24" />
        <AmbientShape
          variant="ring"
          color={ACCENT}
          size={560}
          opacity={0.08}
          parallax={heroBgY}
          className="-top-40 right-[-10%]"
        />

        {/* ghost watermark — same vocabulary as the other page heroes */}
        <motion.span
          aria-hidden
          style={reduce ? undefined : { y: heroBgY }}
          className="text-stroke-accent pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[19vw] leading-none font-bold text-transparent opacity-30"
        >
          CONTACT
        </motion.span>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            {/* ---------- statement ---------- */}
            <div className="lg:col-span-8">
              <Reveal y={12} className="flex items-center gap-4">
                <span className="h-px w-10" style={{ backgroundColor: ACCENT }} aria-hidden />
                <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Contact Us
                </span>
              </Reveal>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal mt-6 mb-8 leading-[1.02] text-foreground">
                <RevealText as="span" by="word" text="Let's Build Something" className="block" />
                <span className="block">
                  <GradientText animate as="span" className="italic">
                    Amazing
                  </GradientText>
                  <motion.span
                    aria-hidden
                    className="ml-3 inline-block h-3 w-3 md:h-4 md:w-4 rounded-full align-baseline"
                    style={{ backgroundColor: ACCENT }}
                    initial={reduce ? false : { scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.7 }}
                  />
                </span>
              </h1>

              <AnimatedDivider className="text-foreground max-w-[8rem] mb-8" />

              <Reveal as="p" y={16} delay={0.3} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Have a project in mind? Tell us what you're trying to build — we'll read it
                properly and reply personally, usually within 24 hours.
              </Reveal>
            </div>

            {/* ---------- contact ledger ---------- */}
            <Stagger className="lg:col-span-4 lg:pt-10">
              {[
                {
                  label: "Email",
                  value: "hello.technovatechnologies@gmail.com",
                  href: "mailto:hello.technovatechnologies@gmail.com",
                  small: true,
                },
                { label: "Call", value: "+91 93167 34210", href: "tel:+919316734210" },
                { label: "WhatsApp", value: "+91 93167 34210", href: "https://wa.me/919316734210" },
                { label: "Offices", value: "Rajkot · Ahmedabad · Kelowna" },
              ].map((row, i) => (
                <StaggerItem key={row.label}>
                  <div className="flex items-baseline gap-4 border-t border-border py-5 last:border-b">
                    <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: ACCENT }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground w-16 shrink-0">
                      {row.label}
                    </span>
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`ml-auto text-right font-serif text-foreground transition-colors hover:text-[#ef0b0a] ${
                          row.small ? "text-sm break-all" : "text-lg md:text-xl"
                        }`}
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="ml-auto text-right font-serif text-lg md:text-xl text-foreground">
                        {row.value}
                      </span>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ---------- the brief: form + working rules ---------- */}
      <section className="py-20 relative overflow-hidden bg-background">
        <GlowOrb color={ACCENT} size={420} opacity={0.08} className="top-1/3 -left-32" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 border-t border-border pt-16">
            {/* ---------- form ---------- */}
            <div className="lg:col-span-7">
              <Reveal y={16} className="flex items-center gap-4 mb-10">
                <span className="font-mono text-xs tracking-[0.2em]" style={{ color: ACCENT }}>
                  01
                </span>
                <span className="h-px w-10 bg-border" aria-hidden />
                <h2 className="font-serif text-2xl md:text-3xl text-foreground">Send us a message</h2>
              </Reveal>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: DUR.base, ease: EASE_OUT }}
                  className="flex flex-col items-center justify-center border border-border py-20 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.12, 1] }}
                    transition={{ duration: 0.6, ease: EASE_OUT }}
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <motion.svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth={2.4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10"
                      aria-hidden
                    >
                      <motion.path
                        d="M4 12.5l5 5 11-11"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.2 }}
                      />
                    </motion.svg>
                  </motion.div>
                  <h3 className="mb-2 font-serif text-2xl text-foreground">Message sent</h3>
                  <p className="max-w-sm text-muted-foreground">
                    Thank you for reaching out. A real person will reply within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-9">
                  <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
                    <div>
                      <label htmlFor="company" className={labelClass}>
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className={labelClass}>
                        Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer bg-background`}
                      >
                        <option value="">Select a service</option>
                        <option value="ai">AI Solutions</option>
                        <option value="saas">SaaS Development</option>
                        <option value="erp">ERP/CRM Systems</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="cloud">Cloud &amp; DevOps</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your project — what it is, who it's for, and when you'd like it live."
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative overflow-hidden inline-flex w-full items-center justify-center gap-2 rounded-full btn-accent px-8 py-4 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
                  >
                    <ShineOverlay trigger="hover" tone="dark" />
                    {isSubmitting ? (
                      <>
                        <span className="relative z-10 h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10">Send Message</span>
                        <Send className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </MagneticButton>
                </form>
              )}
            </div>

            {/* ---------- why work with us, as working rules ---------- */}
            <div className="lg:col-span-5">
              <Reveal y={16} className="flex items-center gap-4 mb-10">
                <span className="font-mono text-xs tracking-[0.2em]" style={{ color: ACCENT }}>
                  02
                </span>
                <span className="h-px w-10 bg-border" aria-hidden />
                <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                  Why work <GradientText animate>with us</GradientText>
                </h2>
              </Reveal>

              <Stagger>
                {reasons.map((reason, i) => (
                  <StaggerItem key={reason.title}>
                    <div className="group border-t border-border py-6 last:border-b">
                      <div className="flex items-center gap-4">
                        <reason.icon
                          className="h-4 w-4 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-[#ef0b0a]"
                          aria-hidden
                        />
                        <h3 className="font-serif text-lg text-foreground">{reason.title}</h3>
                        <span className="ml-auto font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-2 pl-8 text-sm leading-relaxed text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              {/* direct lines */}
              <Reveal y={16} delay={0.2} className="mt-10 space-y-3">
                <a
                  href="mailto:hello.technovatechnologies@gmail.com"
                  className="group flex items-center gap-3 text-sm font-medium text-foreground"
                >
                  <Mail className="h-4 w-4" style={{ color: ACCENT }} />
                  <span className="border-b border-foreground/25 pb-0.5 transition-colors group-hover:border-[#ef0b0a]">
                    Prefer email? Write to us directly
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: ACCENT }} />
                </a>
                <a
                  href="https://wa.me/919316734210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm font-medium text-foreground"
                >
                  <Phone className="h-4 w-4" style={{ color: ACCENT }} />
                  <span className="border-b border-foreground/25 pb-0.5 transition-colors group-hover:border-[#ef0b0a]">
                    In a hurry? WhatsApp us now
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: ACCENT }} />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- offices: framed grid with live maps ---------- */}
      <section className="py-20 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal as="span" y={12} className="block text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Our Locations
              </Reveal>
              <Reveal as="h2" delay={0.08} className="mt-4 font-serif text-3xl md:text-4xl text-foreground">
                Three offices, <GradientText animate>one team</GradientText>
              </Reveal>
            </div>
            <Reveal y={16} delay={0.2} className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Rajkot &middot; Ahmedabad &middot; Kelowna — serving clients worldwide, in
              whichever timezone the work needs.
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border">
            {offices.map((office, i) => (
              <StaggerItem key={office.label} className="border-b border-r border-border bg-background">
                <div className="group relative h-full overflow-hidden">
                  <div className="relative h-44 bg-secondary">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&z=14&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Technova Tech — ${office.label}`}
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>

                  <div className="p-7">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs tracking-[0.2em]" style={{ color: ACCENT }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-8 bg-border" aria-hidden />
                      <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {office.label}
                      </span>
                    </div>

                    <p className="mt-5 font-serif text-lg leading-snug text-foreground">{office.lines[0]}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{office.lines[1]}</p>

                    <a
                      href={office.phoneHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <span className="border-b border-foreground/25 pb-0.5 transition-colors group-hover/link:border-[#ef0b0a]">
                        {office.phoneDisplay}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                        {office.phoneLabel}
                      </span>
                    </a>
                  </div>

                  {/* red sweep on hover */}
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
    </>
  )
}
