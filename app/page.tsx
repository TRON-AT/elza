import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { ProductsSection } from "@/components/products-section"
import { ManufacturingSection } from "@/components/manufacturing-section"
import { TrustSection } from "@/components/trust-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CapabilitiesSection />
      <ProductsSection />
      <ManufacturingSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  )
}
