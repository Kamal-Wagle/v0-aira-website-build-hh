'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Zap, TrendingUp, Code, Globe, Clock, Users, BookOpen } from 'lucide-react'

const detailedServices = [
  {
    icon: Zap,
    title: 'Research & Development',
    desc: 'Strategic research and insights',
    details: 'Unlock market opportunities through comprehensive research, competitive analysis, and strategic insights. Our research teams deliver actionable intelligence that drives informed decision-making.',
    link: '/solutions/research-academy',
    features: ['Market Analysis', 'Trend Forecasting', 'Competitive Intelligence', 'Risk Assessment']
  },
  {
    icon: TrendingUp,
    title: 'Business Innovation Training',
    desc: 'Build innovation capabilities',
    details: 'Transform your organization through structured training programs. We build innovation mindset and equip teams with tools to drive continuous organizational improvement.',
    link: '/solutions/business-innovation',
    features: ['Executive Workshops', 'Team Facilitation', 'Change Management', 'Capability Building']
  },
  {
    icon: Code,
    title: 'Technology Consulting',
    desc: 'Digital transformation solutions',
    details: 'Modernize your IT infrastructure with cloud-native solutions, legacy system migration, and AI/ML integration. We ensure seamless digital transformation aligned with business goals.',
    link: '/solutions/digital-transformation',
    features: ['Cloud Migration', 'Infrastructure Design', 'AI/ML Solutions', 'System Integration']
  },
  {
    icon: Globe,
    title: 'WordPress Solutions',
    desc: 'Enterprise web platforms',
    details: 'Build powerful, scalable digital experiences with enterprise-grade WordPress. From custom development to performance optimization, we deliver solutions that drive engagement.',
    link: '/solutions/wordpress-solutions',
    features: ['Custom Development', 'E-Commerce', 'Performance Optimization', 'Security Hardening']
  },
]

export function UniqueServicesContent() {
  return (
    <>
      {/* Detailed Services */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">Our Service Offerings</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Comprehensive solutions tailored to your business needs
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {detailedServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/15 bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-secondary/5 p-8 animate-in fade-in slide-in-from-bottom-6 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.details}</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3">Key Features:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={service.link}>
                    <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                      Learn More <ArrowRight size={16} />
                    </Button>
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">Our Engagement Process</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Consultation', desc: 'Understand your challenges and goals', icon: Users },
              { num: '02', title: 'Analysis', desc: 'Deep-dive into your business needs', icon: BookOpen },
              { num: '03', title: 'Implementation', desc: 'Execute tailored solutions', icon: Code },
              { num: '04', title: 'Optimization', desc: 'Continuous improvement and support', icon: TrendingUp },
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="relative">
                  <Card className="p-8 text-center border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50 group">
                    <p className="text-4xl font-bold text-primary/30 mb-2">{step.num}</p>
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </Card>
                  {i < 3 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="text-primary/30" size={24} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
