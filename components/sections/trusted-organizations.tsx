'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const trustedOrganizations = [
  {
    id: 1,
    company: 'TechCorp International',
    name: 'Jennifer Martinez',
    role: 'CTO',
    quote: 'AIRA transformed our digital infrastructure and accelerated innovation across the organization.',
    image: '👩‍💼',
    metrics: '60% faster time-to-market',
  },
  {
    id: 2,
    company: 'Financial Services Group',
    name: 'David Chen',
    role: 'VP of Strategy',
    quote: 'The research academy program built incredible innovation capabilities within our teams.',
    image: '👨‍💼',
    metrics: '5x increase in innovation projects',
  },
  {
    id: 3,
    company: 'E-Commerce Solutions',
    name: 'Sarah Johnson',
    role: 'CEO',
    quote: 'AIRA\'s WordPress optimization delivered outstanding results and professional service.',
    image: '👩‍💼',
    metrics: '3x conversion improvement',
  },
  {
    id: 4,
    company: 'Healthcare Innovations',
    name: 'Michael Lee',
    role: 'Chief Innovation Officer',
    quote: 'Exceptional consulting services that helped us modernize our entire technology stack.',
    image: '👨‍⚕️',
    metrics: '50% cost reduction',
  },
  {
    id: 5,
    company: 'Manufacturing Global',
    name: 'Lisa Anderson',
    role: 'Operations Director',
    quote: 'AIRA\'s transformation program delivered measurable improvements in all key metrics.',
    image: '👩‍💼',
    metrics: '40% efficiency gain',
  },
]

export function TrustedOrganizations() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % trustedOrganizations.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % trustedOrganizations.length)
    setAutoplay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + trustedOrganizations.length) % trustedOrganizations.length)
    setAutoplay(false)
  }

  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push(trustedOrganizations[(current + i) % trustedOrganizations.length])
    }
    return items
  }

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
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

        {/* Testimonials slider */}
        <div className="relative">
          {/* Visible items */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {getVisibleItems().map((org, index) => (
              <Card
                key={org.id}
                className="group p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-secondary/5 animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Company badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                  {org.company}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed italic text-sm sm:text-base">
                  {`"${org.quote}"`}
                </p>

                {/* Metrics highlight */}
                <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                  <p className="text-sm font-semibold text-primary">{org.metrics}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{org.image}</div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {org.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{org.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between">
            {/* Dot indicators */}
            <div className="flex gap-2">
              {trustedOrganizations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setAutoplay(false)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>

          {/* Slide counter */}
          <div className="text-center mt-6 text-sm text-muted-foreground">
            {current + 1} of {trustedOrganizations.length}
          </div>
        </div>
      </div>
    </section>
  )
}
