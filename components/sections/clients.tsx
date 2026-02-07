'use client'

import { Card } from '@/components/ui/card'
import { CarouselSlider } from '@/components/ui/carousel-slider'

const clients = [
  { name: 'Fortune 500 Companies', description: '50+ enterprise clients', icon: '🏢' },
  { name: 'Tech Startups', description: '100+ innovation-driven companies', icon: '🚀' },
  { name: 'Financial Institutions', description: '40+ banking & fintech firms', icon: '💰' },
  { name: 'Healthcare Systems', description: '30+ hospital networks', icon: '⚕️' },
  { name: 'Government Agencies', description: '20+ federal agencies', icon: '🏛️' },
  { name: 'Educational Institutions', description: '15+ universities & colleges', icon: '🎓' },
]

const industries = [
  'Financial Services',
  'Technology & SaaS',
  'Healthcare & Pharma',
  'Retail & E-Commerce',
  'Manufacturing',
  'Energy & Utilities',
  'Telecommunications',
  'Media & Entertainment',
  'Transportation',
  'Real Estate & Construction',
]

export function Clients() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Trusted By Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with organizations across industries to drive innovation and digital transformation
          </p>
        </div>

        {/* Client types carousel */}
        <div className="mb-16">
          <CarouselSlider 
            items={clients.map((client, index) => (
              <Card key={index} className="p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {client.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {client.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {client.description}
                </p>
              </Card>
            ))}
            autoPlay={true}
            autoPlayInterval={4000}
            itemsPerView={4}
          />
        </div>

        {/* Industries */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Industries We Serve
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="px-4 py-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
