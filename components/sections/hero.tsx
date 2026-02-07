'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-foreground">Welcome to the Future of Business</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          Transform Your Business
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2">
            With Strategic Innovation
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          AIRA partners with Fortune 500 companies and innovative startups to drive digital transformation. From research and development to executive training and WordPress solutions, we deliver measurable results that accelerate growth and unlock competitive advantage.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <Button size="lg" className="text-base h-12 px-8" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base h-12 px-8 bg-transparent"
            asChild
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div 
          className="flex justify-center animate-bounce opacity-60"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <ChevronDown size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
