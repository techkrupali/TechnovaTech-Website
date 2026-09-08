# Brand rename history

- **2026-08-24** — first rebrand: all ~133 occurrences of the original brand name were
  replaced across `app/ components/ lib/ data/ docs/ public/ README.md`.
- **2026-09-08** — second rebrand: the brand was renamed to **Technova Tech** everywhere.
  All name variants (title case, uppercase marquee text, lowercase, slugs, the split-markup
  headers in the email templates, the logo wordmark lockup, the splash-screen word sequence,
  and the hero watermark) now read Technova Tech / TECHNOVA TECH / technova-tech.

## Still carrying the old brand — external addresses, not display text

Renaming text in this repo cannot move these; each needs its own migration:

| Where | What | To do |
| --- | --- | --- |
| `lib/email-signature.ts`, `public/email-signature.html`, `data/agency.json`, demo pages | `https://madvision.tech` site/asset URLs (incl. hosted `logo-mark.gif` / `logo.jpg`) | swap once the new domain is registered and assets are re-hosted |
| `lib/email-signature.ts`, `public/email-signature.html` | `https://www.instagram.com/madvisiontech/` | swap once the new Instagram handle exists |
| `README.md` | Vercel project URL `v0-vision-tech-website` | rename the Vercel project, then update the link |

2026-09-08 — contact details updated: email is now `hello.technovatechnologies@gmail.com`,
phone/WhatsApp is `+91 93167 34210`. Office addresses unchanged.
