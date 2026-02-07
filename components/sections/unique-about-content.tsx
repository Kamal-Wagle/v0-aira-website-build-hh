'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle, Award, Users, Zap } from 'lucide-react'

export function UniqueAboutContent() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Our Journey */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-in fade-in slide-in-from-left-6 duration-700">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Founded in 2015, AIRA started with a simple vision: to help organizations navigate the complexities of digital transformation and innovation. What began as a boutique consulting firm has grown into a trusted partner for enterprises seeking competitive advantage through strategic innovation.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Today, we've successfully guided 250+ companies through transformational journeys, delivering measurable results across industries and geographies.
            </p>
            <div className="space-y-3">
              {[
                '15+ years combined industry expertise',
                'Award-winning consulting team',
                '98% client satisfaction rate',
                'Global delivery capability'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right-6 duration-700">
            <img
              src="/images/about-hero.jpg"
              alt="AIRA Office"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 p-6 bg-primary text-primary-foreground rounded-xl shadow-lg max-w-xs">
              <p className="text-3xl font-bold mb-2">250+</p>
              <p className="text-sm font-medium">Successful transformations delivered</p>
            </div>
          </div>
        </div>

        {/* Our Achievements */}
        <div className="bg-muted/30 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Award, number: '50+', label: 'Industry Awards' },
              { icon: Users, number: '500+', label: 'Team Members' },
              { icon: Zap, number: '10+', label: 'Years of Excellence' },
              { icon: CheckCircle, number: '98%', label: 'Client Retention' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <Card key={i} className="p-8 text-center border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50">
                  <Icon className="mx-auto mb-4 text-primary" size={32} />
                  <p className="text-3xl font-bold text-primary mb-2">{item.number}</p>
                  <p className="text-foreground font-medium">{item.label}</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Our Values */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We deliver excellence in every engagement, exceeding expectations and setting industry benchmarks.',
                icon: '🎯'
              },
              {
                title: 'Innovation',
                description: 'We foster a culture of continuous innovation, exploring new ideas and transformative approaches.',
                icon: '💡'
              },
              {
                title: 'Partnership',
                description: 'We build long-term partnerships based on trust, transparency, and shared success.',
                icon: '🤝'
              },
            ].map((value, i) => (
              <Card key={i} className="p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-secondary/5">
                <p className="text-4xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</p>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
