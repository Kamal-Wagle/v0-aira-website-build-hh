import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle, Lightbulb, Users, TrendingUp } from 'lucide-react'
import { SolutionHero } from '@/components/sections/solution-hero'

export const metadata = {
  title: 'Business Innovation Solutions | AIRA | Strategic Innovation Services',
  description: 'Transform your organization with AIRA\'s strategic business innovation, capability building, and innovation training programs.',
  keywords: ['business innovation', 'innovation strategy', 'capability building', 'organizational transformation'],
}

export default function BusinessInnovation() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <SolutionHero
        title="Business Innovation Solutions"
        subtitle="Unlock your organization's potential through strategic innovation, capability building, and transformational change management."
        image="/images/business-innovation-hero.jpg"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Business Innovation Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Unlock organizational potential through strategic innovation frameworks, capability building, and transformative business model development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent" asChild>
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/images/innovation-workspace.jpg"
                alt="Business Innovation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation Strategy & Frameworks',
                description: 'Develop comprehensive innovation strategies aligned with business objectives, including ideation frameworks, stage-gate processes, and innovation governance.',
              },
              {
                icon: Users,
                title: 'Team & Capability Building',
                description: 'Build innovation capabilities within your organization through training, mentoring, and development programs for innovation champions.',
              },
              {
                icon: TrendingUp,
                title: 'Business Model Innovation',
                description: 'Explore and validate new business models, revenue streams, and value propositions through structured discovery and experimentation.',
              },
              {
                icon: CheckCircle,
                title: 'Innovation Implementation',
                description: 'Execute innovation initiatives from concept through launch with dedicated support, agile methodologies, and cross-functional collaboration.',
              },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <Card key={idx} className="p-8 border border-border hover:border-primary/50 transition-all">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Innovation Approach</h2>
          <div className="space-y-8">
            {[
              { phase: 'Discovery', description: 'Understand market opportunities, customer needs, and competitive landscape through research and analysis.' },
              { phase: 'Ideation', description: 'Generate and evaluate innovative ideas using proven frameworks and collaborative workshops.' },
              { phase: 'Validation', description: 'Test assumptions and validate concepts through prototyping, customer feedback, and market testing.' },
              { phase: 'Implementation', description: 'Execute innovation initiatives with agile methodologies and continuous optimization.' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.phase}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose AIRA</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Team', description: 'Decades of combined experience in driving innovation across Fortune 500 companies and startups.' },
              { title: 'Proven Frameworks', description: 'Tested methodologies and best practices refined through hundreds of successful projects.' },
              { title: 'Measurable Results', description: 'Focus on delivering tangible business impact with clear metrics and ROI tracking.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Innovate?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's explore how AIRA can help your organization innovate and create new value.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
