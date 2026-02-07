'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react'

export function CtaSection() {
  const benefits = [
    { icon: Zap, text: 'Rapid implementation' },
    { icon: Shield, text: 'Enterprise security' },
    { icon: TrendingUp, text: 'Proven ROI' },
  ]

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 -z-10" />

      {/* Animated blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Ready to Drive Innovation?
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Partner with AIRA today and discover how strategic innovation can unlock new growth opportunities and competitive advantages for your organization.
        </p>

        {/* Benefits */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="flex items-center justify-center gap-3">
                <div className="flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{benefit.text}</span>
              </div>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="h-12 px-8 text-base" asChild>
            <Link href="/contact">
              Schedule Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-12 px-8 text-base bg-transparent"
            asChild
          >
            <Link href="/case-studies">View Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
