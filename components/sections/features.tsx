'use client'

import Link from 'next/link'
import { Zap, TrendingUp, Code, Globe, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'

const features = [
  {
    icon: Zap,
    title: 'Research & Development',
    description: 'Deep insights into emerging technologies and business trends. Our expert researchers deliver actionable intelligence that informs strategic decision-making.',
    link: '/solutions/research-academy',
  },
  {
    icon: TrendingUp,
    title: 'Business Innovation Training',
    description: 'Transform your teams with comprehensive, hands-on programs that foster innovation mindset and drive organizational transformation.',
    link: '/solutions/business-innovation',
  },
  {
    icon: Code,
    title: 'Technology Consulting',
    description: 'Strategic guidance on digital transformation, cloud architecture, and technology modernization with proven methodologies.',
    link: '/solutions/digital-transformation',
  },
  {
    icon: Globe,
    title: 'WordPress Solutions',
    description: 'Enterprise-grade WordPress development, customization, and optimization for high-performance digital experiences.',
    link: '/solutions/wordpress-solutions',
  },
]

export function Features() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/2 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Core Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive services designed to drive innovation, accelerate transformation, and deliver measurable business results
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Link key={index} href={feature.link}>
                <Card
                  className="group relative p-6 h-full border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer overflow-hidden bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-secondary/5"
                >
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {feature.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
