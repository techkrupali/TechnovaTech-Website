"use client"

import { useRef, type RefObject } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import {
  ACCENT,
  DUR,
  Reveal,
  Stagger,
  StaggerItem,
  GradientText,
  ShineOverlay,
  GlowOrb,
  MagneticButton,
  VIEWPORT,
  useParallax,
} from "@/components/motion"

/* ------------------------------------------------------------------ *
 *  FOOTER — the editorial close of every page. A statement CTA band,  *
 *  a ledger of contact lines and offices, numbered nav columns, and   *
 *  the wordmark set giant and faint across the bottom.                *
 * ------------------------------------------------------------------ */

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Founder", href: "/founder" },
  { label: "Contact", href: "/contact" },
]

const productLinks = [
  { label: "Retailians POS", href: "/portfolio" },
  { label: "911 Wrap ERP", href: "/portfolio" },
  { label: "DSAT Guru", href: "/portfolio" },
  { label: "Miller Storm", href: "/portfolio" },
]

const offices = [
  { label: "Head Office", value: "R.K. World Tower, Rajkot, Gujarat, India" },
  { label: "Ahmedabad", value: "Titanium City Center Business Park, 380015" },
  { label: "Canada", value: "Dolphin Ave, Kelowna, BC V1Y 9J7" },
]

const contactRows = [
  { label: "Email", value: "hello.technovatechnologies@gmail.com", href: "mailto:hello.technovatechnologies@gmail.com" },
  { label: "Call", value: "+91 93167 34210", href: "tel:+919316734210" },
  { label: "WhatsApp", value: "+91 91069 24543", href: "https://wa.me/919106924543" },
]

export default function Footer() {
  const reduce = useReducedMotion()
  const bannerRef = useRef<HTMLDivElement>(null)
  const orbY = useParallax(bannerRef as RefObject<HTMLElement>, { to: -80 })

  return (
    <footer className="dark-section overflow-hidden">
      {/* ---------- CTA band ---------- */}
      <div ref={bannerRef} className="relative overflow-hidden border-b border-white/10 py-20">
        <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
        <GlowOrb color={ACCENT} size={520} opacity={0.16} parallax={orbY} className="-top-40 -right-24" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <Reveal y={12} className="mb-6 flex items-center gap-4">
                <span className="h-px w-10" style={{ backgroundColor: ACCENT }} aria-hidden />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
                  Ready to start?
                </span>
              </Reveal>
              <Reveal as="h2" y={20} delay={0.08} duration={DUR.slow} className="font-serif text-4xl leading-[1.05] text-white md:text-6xl">
                {"Let's build"}
                <br />
                <GradientText tone="dark" animate as="span" className="italic">
                  something great
                </GradientText>
                <motion.span
                  aria-hidden
                  className="ml-2 inline-block h-2.5 w-2.5 rounded-full align-baseline md:h-3.5 md:w-3.5"
                  style={{ backgroundColor: ACCENT }}
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={VIEWPORT}
                  transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.5 }}
                />
              </Reveal>
            </div>

            <Reveal delay={0.18} y={16}>
              <MagneticButton
                as={Link}
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full btn-accent px-8 py-4 text-sm font-medium"
              >
                <ShineOverlay trigger="hover" tone="dark" />
                <span className="relative z-10">Start Your Project</span>
                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ---------- main: brand ledger + numbered nav ---------- */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* brand + contact ledger */}
          <Reveal className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <img src="/logo-dark-mode.png" alt="Technova Technologies" className="h-12 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed text-white/50">
              Turning Vision Into Innovation. Advanced AI-powered SaaS products and
              enterprise-grade solutions for modern businesses.
            </p>

            <Stagger className="mt-8 max-w-md">
              {contactRows.map((row, i) => (
                <StaggerItem key={row.label}>
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-baseline gap-4 border-t border-white/10 py-3.5 last:border-b"
                  >
                    <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: ACCENT }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-16 shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                      {row.label}
                    </span>
                    <span className="ml-auto break-all text-right text-sm text-white/70 transition-colors group-hover:text-white">
                      {row.value}
                    </span>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          {/* offices */}
          <Reveal delay={0.08} className="lg:col-span-3">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">
              Offices
            </h4>
            <Stagger className="mt-6 space-y-5">
              {offices.map((office) => (
                <StaggerItem key={office.label} y={12}>
                  <div className="group">
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                      <span
                        className="h-1 w-1 rotate-45 transition-colors duration-300 group-hover:bg-[#ef0b0a] bg-white/30"
                        aria-hidden
                      />
                      {office.label}
                    </span>
                    <p className="mt-1.5 pl-3 text-sm leading-relaxed text-white/60">{office.value}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          {/* company links */}
          <Reveal delay={0.14} className="lg:col-span-2">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">
              Company
            </h4>
            <Stagger as="ul" className="mt-6 space-y-3.5">
              {navLinks.map((link) => (
                <StaggerItem as="li" y={12} key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-white/55 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 transition-all duration-300 group-hover:w-3" style={{ backgroundColor: ACCENT }} />
                    {link.label}
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          {/* product links */}
          <Reveal delay={0.2} className="lg:col-span-2">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">
              Products
            </h4>
            <Stagger as="ul" className="mt-6 space-y-3.5">
              {productLinks.map((link) => (
                <StaggerItem as="li" y={12} key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-white/55 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 transition-all duration-300 group-hover:w-3" style={{ backgroundColor: ACCENT }} />
                    {link.label}
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </div>

      {/* ---------- giant wordmark ---------- */}
      <div aria-hidden className="container mx-auto select-none px-6">
        <img
          src="/logo-dark-mode.png"
          alt=""
          className="pointer-events-none mx-auto w-full max-w-5xl opacity-[0.05]"
        />
      </div>

      {/* ---------- bottom bar ---------- */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Technova Tech. All rights reserved.
          </p>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-white/25 md:block">
            Built in Gujarat <span style={{ color: ACCENT }}>★</span> Serving worldwide
          </span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-white/30 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/30 transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
