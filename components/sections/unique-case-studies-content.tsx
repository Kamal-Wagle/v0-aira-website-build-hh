'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/card'
import { TrendingUp } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Digital Transformation for Financial Services',
    company: 'Global Banking Corp',
    industry: 'Finance',
    challenge: 'Legacy systems hindering agility and customer experience',
    solution: 'Cloud-based infrastructure modernization with AI-driven automation',
    results: {
      efficiency: '45%',
      cost: '35%',
      time: '60%'
    },
    image: '🏦'
  },
  {
    id: 2,
    title: 'E-Commerce Platform Transformation',
    company: 'Tech Retail Inc',
    industry: 'Retail',
    challenge: 'Poor site performance impacting sales and user experience',
    solution: 'WordPress optimization and modern infrastructure design',
    results: {
      conversion: '3x',
      speed: '75%',
      revenue: '85%'
    },
    image: '🛒'
  },
  {
    id: 3,
    title: 'Healthcare Innovation Initiative',
    company: 'Medical Excellence Group',
    industry: 'Healthcare',
    challenge: 'Need to foster innovation culture and digital health solutions',
    solution: 'Comprehensive innovation training and digital transformation roadmap',
    results: {
      adoption: '90%',
      projects: '5x',
      efficiency: '50%'
    },
    image: '⚕️'
  },
  {
    id: 4,
    title: 'Manufacturing Process Optimization',
    company: 'Industrial Systems Ltd',
    industry: 'Manufacturing',
    challenge: 'Operational inefficiencies and data silos across departments',
    solution: 'Business process optimization and integrated analytics platform',
    results: {
      productivity: '40%',
      waste: '38%',
      downtime: '65%'
    },
    image: '🏭'
  }
]

export function UniqueCaseStudiesContent() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">Success Stories</h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Transformations that delivered real results across industries
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={study.id}
              className="group overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/15 bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-secondary/5 animate-in fade-in slide-in-from-bottom-6 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <p className="text-4xl">{study.image}</p>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{study.company}</p>

                <div className="space-y-4 mb-6 py-4 border-y border-border/50">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase mb-1">Challenge</p>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase mb-1">Solution</p>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-primary uppercase mb-3">Key Results</p>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="text-center p-3 rounded-lg bg-muted/30">
                        <p className="text-lg font-bold text-primary">{value}</p>
                        <p className="text-xs text-muted-foreground capitalize">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
