'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

const values = [
  {
    title: 'Innovation First',
    description: 'We challenge the status quo and embrace emerging technologies to drive transformational change.',
  },
  {
    title: 'Client-Centric',
    description: 'Your success is our success. We align every solution with your strategic business objectives.',
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards of quality, integrity, and professionalism in all engagements.',
  },
  {
    title: 'Collaboration',
    description: 'We work as true partners, fostering transparency and building lasting relationships.',
  },
]

export function AboutEnhanced() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/2">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/team-collaboration.jpg" 
                alt="Team collaboration" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">About AIRA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Driving Innovation Since 2010
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              AIRA is a leading research academy and business innovation firm dedicated to helping enterprises harness the power of strategic innovation. With over a decade of experience, we've partnered with hundreds of companies across industries to transform their business strategies and accelerate digital growth.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Our multidisciplinary team combines deep industry expertise with cutting-edge technological knowledge to deliver solutions that drive real business impact.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" asChild className="h-12 px-8">
              <Link href="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
