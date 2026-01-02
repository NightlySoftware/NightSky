import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { ServicesSection } from "@/components/landing/services-section"
import { MethodologySection } from "@/components/landing/methodology-section"
import { IndustriesSection } from "@/components/landing/industries-section"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <MethodologySection />
      <IndustriesSection />
      <Footer />
    </main>
  )
}
