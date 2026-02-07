import { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ContactSection } from '@/components/sections/contact-section'

export const metadata: Metadata = {
  title: 'Contact AIRA | Business Consultation & Support | Axon Infotech',
  description: 'Get in touch with AIRA for business innovation consulting, research academy programs, digital transformation services. Schedule a free consultation today.',
  keywords: ['contact AIRA', 'business consultation', 'inquiry', 'support', 'consultation request'],
  openGraph: {
    title: 'Contact AIRA - Let\'s Transform Your Business',
    description: 'Schedule a consultation with our innovation experts',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Let's Start a Conversation
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question? We're eager to help and ready to work with you to find solutions that fit your needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </main>
  )
}
