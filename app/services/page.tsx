import { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Zap, TrendingUp, Code, Globe, CheckCircle } from 'lucide-react'
import { ServicesHero } from '@/components/sections/services-hero'
import { UniqueServicesContent } from '@/components/sections/unique-services-content'

export const metadata: Metadata = {
  title: 'Services | AIRA | Business Innovation, Research & Digital Solutions',
  description: 'Comprehensive consulting services: business innovation, research academy, digital transformation, and enterprise WordPress solutions. Proven methodologies, measurable results.',
  keywords: ['business services', 'innovation consulting', 'digital transformation', 'training programs', 'WordPress development', 'technology consulting'],
  openGraph: {
    title: 'AIRA Services - Business Innovation & Consulting',
    description: 'Comprehensive services for business transformation and growth',
    type: 'website',
  },
}

const services = [
  {
    icon: Zap,
    title: 'Research & Development',
    description: 'Deep insights into emerging technologies and business trends',
    features: [
      'Market trend analysis and forecasting',
      'Technology evaluation and benchmarking',
      'Competitive intelligence reports',
      'Industry-specific research studies',
      'White papers and case studies',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Business Innovation Training',
    description: 'Comprehensive programs to upskill teams and unlock innovation potential',
    features: [
      'Executive leadership programs',
      'Innovation workshop series',
      'Digital transformation training',
      'Agile and lean methodologies',
      'Change management coaching',
    ],
  },
  {
    icon: Code,
    title: 'Technology Consulting',
    description: 'Expert guidance on digital transformation and architecture design',
    features: [
      'Digital transformation strategy',
      'Technology stack optimization',
      'Cloud migration planning',
      'System architecture design',
      'Performance optimization',
    ],
  },
  {
    icon: Globe,
    title: 'WordPress Solutions',
    description: 'Custom WordPress development and optimization services',
    features: [
      'Custom theme development',
      'Plugin customization',
      'E-commerce setup',
      'Performance optimization',
      'Security hardening',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServicesHero />
      <UniqueServicesContent />

      {/* Services Grid */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="p-8 border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title and description */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/contact">
                      Learn More
                    </Link>
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Our Engagement Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We thoroughly understand your business goals, challenges, and current state.',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop a comprehensive roadmap tailored to your specific needs.',
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We execute the plan with precision and keep you informed every step of the way.',
              },
              {
                step: '04',
                title: 'Success',
                description: 'We measure outcomes and provide ongoing support for sustained success.',
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <Card className="p-6 text-center border border-border/50 bg-background">
                  <div className="text-4xl font-bold text-primary mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {process.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {process.description}
                  </p>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch with our team to discuss how AIRA can help you achieve your goals.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
