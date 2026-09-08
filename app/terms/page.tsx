import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Technova Tech",
  description: "The terms that govern Technova Tech products and services.",
}

const ACCENT = "#ef0b0a"

/* ------------------------------------------------------------------ *
 *  Terms of Service — set in the same editorial ledger language as    *
 *  the privacy page: numbered sections on hairline rules, a sticky    *
 *  index on desktop, contact details as ledger rows.                  *
 * ------------------------------------------------------------------ */

type Section = {
  id: string
  title: string
  body?: string
  list?: string[]
}

const sections: Section[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: "By accessing Technova Tech services, you agree to be bound by these terms, Indian laws including Information Technology Act 2000, Consumer Protection Act 2019, and Gujarat state regulations.",
  },
  {
    id: "company",
    title: "Company Information",
    body: "Technova Tech is a technology company registered in Gujarat, India, providing SaaS solutions (Retailians POS, 911 Wrap ERP, DSAT Guru) in compliance with Indian business regulations.",
  },
  {
    id: "availability",
    title: "Service Availability",
    body: 'Services are provided "as is" with 99.9% uptime SLA. Planned maintenance will be notified 24 hours in advance. Force majeure events are excluded from SLA calculations.',
  },
  {
    id: "payments",
    title: "Payment Terms and GST",
    body: "All payments are in Indian Rupees (INR) and include applicable GST as per Indian tax laws:",
    list: [
      "Subscription fees are billed monthly/annually in advance",
      "18% GST applicable on all services",
      "Payments processed through RBI-approved gateways",
      "GST invoices provided as per Indian regulations",
      "Late payment charges: 2% per month on overdue amounts",
    ],
  },
  {
    id: "refunds",
    title: "Refund Policy",
    body: "Refunds available within 7 days of purchase as per Consumer Protection Act 2019. Processing fee of 3% may apply. Refunds processed within 7-10 business days.",
  },
  {
    id: "data-protection",
    title: "Data Protection and Compliance",
    body: "We comply with Digital Personal Data Protection Act 2023, IT Act 2000, and maintain data within Indian borders or with adequate safeguards as per RBI guidelines.",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: "All software, trademarks, and content are protected under Indian Copyright Act 1957 and Trademarks Act 1999. Unauthorized use is prohibited.",
  },
  {
    id: "user-obligations",
    title: "User Obligations",
    body: "Users must:",
    list: [
      "Comply with Indian laws and regulations",
      "Provide accurate business information including GST details",
      "Maintain confidentiality of login credentials",
      "Not engage in illegal activities or misuse services",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: "Liability limited to subscription fees paid in the preceding 12 months. Indirect damages excluded except as required under Indian consumer protection laws.",
  },
  {
    id: "termination",
    title: "Termination",
    body: "Either party may terminate with 30 days notice. Data export facility provided for 90 days post-termination. Immediate termination for breach of terms.",
  },
  {
    id: "disputes",
    title: "Dispute Resolution",
    body: "Disputes resolved through arbitration under Arbitration and Conciliation Act 2015. Arbitration seat: Rajkot, Gujarat. Governing law: Indian law.",
  },
  {
    id: "jurisdiction",
    title: "Jurisdiction",
    body: "These terms are governed by Indian laws. Courts in Rajkot, Gujarat have exclusive jurisdiction for any legal proceedings.",
  },
  {
    id: "grievance",
    title: "Grievance Officer",
    body: "For complaints or grievances, reach the Grievance Officer using the contact ledger below. Every grievance is acknowledged and answered within 72 hours.",
  },
]

const contactRows = [
  { label: "Company", value: "Technova Tech" },
  { label: "Email", value: "hello.technovatechnologies@gmail.com", href: "mailto:hello.technovatechnologies@gmail.com" },
  { label: "Phone", value: "+91 93167 34210", href: "tel:+919316734210" },
  { label: "Head Office", value: "R.K. World Tower, Rajkot, Gujarat, India" },
  { label: "Ahmedabad", value: "Titanium City Center Business Park, 380015" },
  { label: "Hours", value: "9 AM – 6 PM IST" },
]

const pad2 = (n: number) => String(n).padStart(2, "0")

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* ---------- hero ---------- */}
      <section className="relative overflow-hidden bg-background pt-36 pb-16">
        <div aria-hidden className="grid-texture-dark pointer-events-none absolute inset-0 opacity-[0.5]" />
        <span
          aria-hidden
          className="text-stroke-accent pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[21vw] font-bold leading-none text-transparent opacity-30"
        >
          TERMS
        </span>

        <div className="container relative z-10 mx-auto px-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-10" style={{ backgroundColor: ACCENT }} aria-hidden />
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Legal</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl font-normal leading-[1.05] text-foreground md:text-7xl">
            Terms of{" "}
            <em className="italic" style={{ color: ACCENT }}>
              Service
            </em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The terms that govern our products and services — fair, specific, and governed
            by Indian law.
          </p>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* ---------- body: sticky index + numbered sections ---------- */}
      <section className="bg-background pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-14 border-t border-border pt-14 lg:grid-cols-12 lg:gap-20">
            {/* index */}
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-32">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  Index
                </span>
                <ul className="mt-6 space-y-3">
                  {sections.map((section, i) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex items-baseline gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: ACCENT }}>
                          {pad2(i + 1)}
                        </span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#contact"
                      className="group flex items-baseline gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: ACCENT }}>
                        {pad2(sections.length + 1)}
                      </span>
                      Contact Information
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* sections */}
            <div className="lg:col-span-9">
              {sections.map((section, i) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 border-b border-border py-10 first:pt-0"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-xs tracking-[0.2em]" style={{ color: ACCENT }}>
                      {pad2(i + 1)}
                    </span>
                    <h2 className="font-serif text-2xl text-foreground md:text-3xl">{section.title}</h2>
                  </div>
                  {section.body && (
                    <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground md:pl-12">
                      {section.body}
                    </p>
                  )}
                  {section.list && (
                    <ul className="mt-4 max-w-3xl space-y-2.5 md:pl-12">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted-foreground">
                          <span
                            aria-hidden
                            className="mt-2 h-1 w-1 shrink-0 rotate-45"
                            style={{ backgroundColor: ACCENT }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}

              {/* contact ledger */}
              <article id="contact" className="scroll-mt-32 py-10">
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-xs tracking-[0.2em]" style={{ color: ACCENT }}>
                    {pad2(sections.length + 1)}
                  </span>
                  <h2 className="font-serif text-2xl text-foreground md:text-3xl">Contact Information</h2>
                </div>
                <div className="mt-6 max-w-2xl md:pl-12">
                  {contactRows.map((row, i) => (
                    <div
                      key={row.label}
                      className="flex items-baseline gap-4 border-t border-border py-4 last:border-b"
                    >
                      <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: ACCENT }}>
                        {pad2(i + 1)}
                      </span>
                      <span className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        {row.label}
                      </span>
                      {row.href ? (
                        <a
                          href={row.href}
                          className="ml-auto break-all text-right text-sm font-medium text-foreground transition-colors hover:text-[#ef0b0a]"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <span className="ml-auto text-right text-sm text-foreground">{row.value}</span>
                      )}
                    </div>
                  ))}
                </div>

                <p className="mt-10 md:pl-12">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-[#ef0b0a]">
                      Questions about these terms? Talk to us
                    </span>
                    <span aria-hidden style={{ color: ACCENT }}>
                      →
                    </span>
                  </Link>
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
