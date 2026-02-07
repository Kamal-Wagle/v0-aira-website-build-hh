import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CaseStudiesHero } from '@/components/sections/case-studies-hero'
import { UniqueCaseStudiesContent } from '@/components/sections/unique-case-studies-content'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Case Studies | AIRA | Business Transformation Success Stories & Results',
  description: 'Real-world success stories showcasing how AIRA transformed businesses across industries with proven results and measurable impact.',
  keywords: ['case studies', 'success stories', 'business transformation', 'proven results', 'client success', 'ROI'],
  openGraph: {
    title: 'AIRA Case Studies - Real Transformation Results',
    description: 'See how we\'ve helped businesses transform and achieve measurable success',
    type: 'website',
  },
}

const caseStudies = [
  {
    id: 1,
    title: 'Enterprise Digital Transformation',
    client: 'Global Fortune 500 Company',
    category: 'Digital Transformation',
    image: '/images/consulting-meeting.jpg',
    results: [
      '40% improvement in operational efficiency',
      '3x faster time-to-market',
      '$2.5M cost savings annually',
    ],
    description: 'Helped a multinational enterprise redesign its digital infrastructure, enabling seamless cloud migration and agile adoption across 15 business units.',
  },
  {
    id: 2,
    title: 'Research & Innovation Lab',
    client: 'Technology Startup',
    category: 'Research Academy',
    image: '/images/research-lab.jpg',
    results: [
      '5 new patents filed',
      '120% increase in R&D productivity',
      'Secured $10M Series B funding',
    ],
    description: 'Established a dedicated innovation lab with structured research methodologies and training programs that accelerated product development.',
  },
  {
    id: 3,
    title: 'WordPress Platform Optimization',
    client: 'E-commerce Leader',
    category: 'WordPress Solutions',
    image: '/images/innovation-workspace.jpg',
    results: [
      '65% faster page load times',
      '150% increase in conversions',
      'Handles 10M monthly visitors',
    ],
    description: 'Redesigned and optimized a WordPress-based e-commerce platform to handle enterprise-scale traffic with improved performance and user experience.',
  },
  {
    id: 4,
    title: 'Business Model Innovation',
    client: 'Traditional Manufacturing',
    category: 'Business Innovation',
    image: '/images/hero-bg.jpg',
    results: [
      'New revenue stream: $5M first year',
      '25% market share increase',
      'Industry thought leadership',
    ],
    description: 'Guided a traditional manufacturing company through business model innovation, launching a digital-first B2B platform.',
  },
]

export default function CaseStudies() {
  return (
  <main className="min-h-screen bg-background">
  <Navbar />
  <CaseStudiesHero />
  <UniqueCaseStudiesContent />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Case Studies & Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've partnered with leading organizations to drive innovation, achieve digital transformation, and unlock sustainable growth.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card
                key={study.id}
                className="group overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium border border-primary/30">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{study.client}</p>
                  <h3 className="text-xl font-bold text-foreground mb-3">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{study.description}</p>

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        <span className="text-foreground">{result}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full bg-transparent group/btn"
                    asChild
                  >
                    <Link href={`/case-studies/${study.id}`} className="flex items-center justify-center gap-2">
                      Read Full Case Study
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how AIRA can drive innovation and growth for your organization.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
