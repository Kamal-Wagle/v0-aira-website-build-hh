import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Cloud, Cpu, Shield, Zap } from 'lucide-react'
import { SolutionHero } from '@/components/sections/solution-hero'

export const metadata = {
  title: 'Digital Transformation | AIRA | Enterprise Technology Modernization',
  description: 'End-to-end digital transformation consulting: cloud solutions, AI/ML integration, and operational modernization for enterprise success.',
  keywords: ['digital transformation', 'technology consulting', 'cloud solutions', 'modernization', 'enterprise technology'],
}

export default function DigitalTransformation() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <SolutionHero
        title="Digital Transformation"
        subtitle="Modernize your enterprise with cutting-edge cloud solutions, AI/ML integration, and technology-driven operational excellence."
        image="/images/digital-transformation-hero.jpg"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Digital Transformation
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Modernize your operations, enhance customer experiences, and build competitive advantage with our comprehensive digital transformation strategy and implementation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your Journey</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent" asChild>
                  <Link href="/case-studies">View Results</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/images/consulting-meeting.jpg"
                alt="Digital Transformation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Cloud,
                title: 'Cloud Migration & Architecture',
                description: 'Seamless migration to cloud platforms with architecture design, security implementation, and cost optimization.',
              },
              {
                icon: Cpu,
                title: 'Legacy System Modernization',
                description: 'Transform legacy systems into modern, scalable, and maintainable applications with minimal disruption.',
              },
              {
                icon: Shield,
                title: 'Cybersecurity & Compliance',
                description: 'Implement robust security frameworks and ensure compliance with industry regulations and standards.',
              },
              {
                icon: Zap,
                title: 'Process Automation',
                description: 'Streamline operations through intelligent automation, reducing manual work and improving efficiency.',
              },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <Card key={idx} className="p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Transformation Framework */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Transformation Framework</h2>
          <div className="space-y-8">
            {[
              {
                phase: 'Assess',
                description: 'Comprehensive evaluation of current systems, processes, culture, and digital maturity to identify opportunities and challenges.',
              },
              {
                phase: 'Plan',
                description: 'Develop a detailed digital transformation roadmap with clear milestones, resource allocation, and success metrics.',
              },
              {
                phase: 'Execute',
                description: 'Implement transformation initiatives in phases, managing change, training teams, and delivering quick wins.',
              },
              {
                phase: 'Optimize',
                description: 'Monitor performance, gather insights, and continuously optimize for maximum business impact and ROI.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
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

      {/* Key Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Key Transformation Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Customer Experience',
                description: 'Leverage digital channels and personalization to create exceptional customer experiences.',
                points: ['Omnichannel engagement', 'Data-driven personalization', 'Customer analytics', 'Experience optimization'],
              },
              {
                title: 'Operational Excellence',
                description: 'Optimize processes through automation, data analytics, and intelligent workflows.',
                points: ['Process automation', 'Business intelligence', 'Real-time analytics', 'Supply chain digitization'],
              },
              {
                title: 'Organizational Agility',
                description: 'Build organizational capabilities to respond quickly to market changes and opportunities.',
                points: ['Agile methodologies', 'Cross-functional teams', 'DevOps practices', 'Continuous improvement'],
              },
              {
                title: 'Technology Foundation',
                description: 'Establish modern, scalable, and secure technology infrastructure.',
                points: ['Cloud infrastructure', 'API-first architecture', 'Microservices', 'Security frameworks'],
              },
            ].map((area, idx) => (
              <Card key={idx} className="p-8 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
                <div className="space-y-2">
                  {area.points.map((point, pidx) => (
                    <div key={pidx} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {point}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Expected Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '40%+', description: 'Average improvement in operational efficiency' },
              { metric: '3x', description: 'Faster time-to-market for new products and features' },
              { metric: '60%+', description: 'Reduction in operational costs through automation' },
              { metric: '2-3x', description: 'Increase in employee productivity' },
              { metric: '85%+', description: 'Improvement in customer satisfaction scores' },
              { metric: '100%', description: 'ROI within 18-24 months' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Digitally?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss your digital transformation roadmap and how AIRA can accelerate your journey.
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
