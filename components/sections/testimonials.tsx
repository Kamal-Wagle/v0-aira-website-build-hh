'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Jennifer Martinez',
    title: 'Chief Technology Officer',
    company: 'TechCorp International',
    quote: 'AIRA transformed our digital infrastructure. Their expertise in innovation strategy helped us cut time-to-market by 60% and improve our operational efficiency significantly.',
    impact: '60% faster time-to-market',
    rating: 5,
  },
  {
    name: 'David Chen',
    title: 'VP of Strategy',
    company: 'Financial Services Group',
    quote: 'The research academy program was instrumental in building our internal innovation capabilities. Our team now leads innovation initiatives across the organization.',
    impact: '5x increase in innovation projects',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    title: 'Chief Executive Officer',
    company: 'E-Commerce Solutions',
    quote: 'AIRA\'s WordPress optimization work resulted in 3x improvement in conversion rates. Their team is professional, responsive, and truly understands enterprise needs.',
    impact: '3x conversion rate improvement',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our clients about their transformation journey with AIRA
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-secondary/5 flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Impact badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 w-fit">
                {testimonial.impact}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed italic flex-grow">
                {`"${testimonial.quote}"`}
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
