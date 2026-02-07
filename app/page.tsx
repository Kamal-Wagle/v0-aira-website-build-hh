import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Stats } from '@/components/sections/stats'
import { AboutEnhanced } from '@/components/sections/about-enhanced'
import { Process } from '@/components/sections/process'
import { Clients } from '@/components/sections/clients'
import { TrustedOrganizations } from '@/components/sections/trusted-organizations'
import { FAQ } from '@/components/sections/faq'
import { CtaSection } from '@/components/sections/cta-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <AboutEnhanced />
      <Process />
      <Clients />
      <TrustedOrganizations />
      <FAQ />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
