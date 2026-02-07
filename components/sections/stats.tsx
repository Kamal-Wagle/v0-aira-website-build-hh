'use client'

import { useEffect, useState } from 'react'

const stats = [
  {
    value: '500+',
    label: 'Successful Projects',
    description: 'Delivered across industries and markets globally',
  },
  {
    value: '250+',
    label: 'Enterprise Clients',
    description: 'Including Fortune 500 companies worldwide',
  },
  {
    value: '95%',
    label: 'Client Satisfaction',
    description: 'Consistently exceeding expectations',
  },
  {
    value: '50+',
    label: 'Expert Professionals',
    description: 'With diverse expertise and certifications',
  },
]

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="stats-section" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/images/stats-section.jpg" 
          alt="Statistics background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Proven Track Record of Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our metrics speak to our commitment to excellence and client success
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center">
              <div className="relative">
                <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`} style={{ transitionDelay: `${index * 100}ms` }}>
                  {stat.value}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mt-2 mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
