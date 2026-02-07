'use client'

import { Check } from 'lucide-react'
import { Card } from '@/components/ui/card'

const stats = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '200+' },
  { label: 'Years of Experience', value: '15+' },
  { label: 'Team Members', value: '50+' },
]

const values = [
  'Innovation-driven approach to every challenge',
  'Client success is our primary focus',
  'Continuous learning and professional development',
  'Transparent and collaborative partnerships',
]

export function About() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              About AIRA
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              AIRA (Axon Infotech Research Academy) is a leading innovator in business transformation and technology solutions. For over a decade, we've been partnering with forward-thinking organizations to navigate the complexities of digital innovation and achieve sustainable growth.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to empower businesses with the knowledge, skills, and technology solutions needed to thrive in an increasingly digital world. We combine deep research insights with practical consulting expertise to deliver tangible results.
            </p>

            {/* Values */}
            <div className="space-y-3">
              <p className="font-semibold text-foreground mb-4">Our Core Values</p>
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
