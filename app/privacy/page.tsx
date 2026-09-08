import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Technova Tech",
  description: "How Technova Tech collects, protects and uses your data.",
}

const ACCENT = "#ef0b0a"

/* ------------------------------------------------------------------ *
 *  Privacy Policy — a legal page set in the site's editorial ledger   *
 *  language: numbered sections on hairline rules, a sticky index on   *
 *  desktop, and the contact details as ledger rows.                   *
 * ------------------------------------------------------------------ */

type Section = {
  id: string
  title: string
  body?: string
  list?: string[]
  after?: string
}

const sections: Section[] = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: "In compliance with the Information Technology Act, 2000 and Digital Personal Data Protection Act, 2023, we collect:",
    list: [
      "Personal identifiers (name, email, phone number, PAN, GST number)",
      "Business information for our SaaS products (Retailians POS, 911 Wrap ERP, DSAT Guru)",
      "Usage data and analytics for service improvement",
      "Payment information processed through RBI-compliant payment gateways",
    ],
  },
  {
    id: "legal-basis",
    title: "Legal Basis for Processing",
    body: "We process personal data under legitimate business interests, contractual necessity, and with explicit consent as per Indian data protection laws.",
  },
  {
    id: "storage-security",
    title: "Data Storage and Security",
    body: "Data is stored within India or with adequate safeguards as per RBI guidelines. We implement ISO 27001 compliant security measures including encryption, access controls, and regular security audits.",
  },
  {
    id: "retention",
    title: "Data Retention",
    body: "Personal data is retained as per Indian tax laws (minimum 7 years for financial records) and business requirements, with secure deletion thereafter.",
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: "Under Indian data protection laws, you have rights to:",
    list: [
      "Access your personal data",
      "Correct inaccurate information",
      "Request data deletion (subject to legal obligations)",
      "Data portability",
      "Withdraw consent",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Sharing",
    body: "We may share data with RBI-approved payment processors, GST network for compliance, and authorized service providers under strict data processing agreements.",
  },
  {
    id: "cookies",
    title: "Cookies and Tracking",
    body: "We use cookies for functionality and analytics. You can manage cookie preferences through your browser settings.",
  },
  {
    id: "grievance",
    title: "Grievance Redressal",
    body: "For privacy concerns, contact our Grievance Officer using the details in the contact ledger below. We aim to acknowledge every grievance within 48 hours.",
  },
  {
    id: "jurisdiction",
    title: "Jurisdiction",
    body: "This Privacy Policy is governed by Indian laws. Any disputes shall be subject to the exclusive jurisdiction of courts in Rajkot, Gujarat, India.",
  },
]

const contactRows = [
  { label: "Company", value: "Technova Tech" },
  { label: "Email", value: "hello.technovatechnologies@gmail.com", href: "mailto:hello.technovatechnologies@gmail.com" },
  { label: "Phone", value: "+91 93167 34210", href: "tel:+919316734210" },
  { label: "Head Office", value: "R.K. World Tower, Rajkot, Gujarat, India" },
  { label: "Ahmedabad", value: "Titanium City Center Business Park, 380015" },
]

const pad2 = (n: number) => String(n).padStart(2, "0")

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* ---------- hero ---------- */}
      <section className="relative overflow-hidden bg-background pt-36 pb-16">
        <div aria-hidden className="grid-texture-dark pointer-events-none absolute inset-0 opacity-[0.5]" />
        <span
          aria-hidden
          className="text-stroke-accent pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[19vw] font-bold leading-none text-transparent opacity-30"
        >
          PRIVACY
        </span>

        <div className="container relative z-10 mx-auto px-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-10" style={{ backgroundColor: ACCENT }} aria-hidden />
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Legal</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl font-normal leading-[1.05] text-foreground md:text-7xl">
            Privacy{" "}
            <em className="italic" style={{ color: ACCENT }}>
              Policy
            </em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            How we collect, protect and use your data — written plainly, kept current.
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
                      Questions about your data? Talk to us
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
