import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FounderPageContent from "@/components/founder-page-content"

export const metadata: Metadata = {
  title: "Krupali Vekariya - Founder | Technova Tech",
  description:
    "Meet Krupali Vekariya, the Founder & CEO of Technova Tech. A Full-Stack Developer specializing in building smart, scalable digital solutions.",
}

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <FounderPageContent />
      <Footer />
    </main>
  )
}
