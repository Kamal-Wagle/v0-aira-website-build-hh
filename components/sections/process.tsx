'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle, Lightbulb, Zap, Target } from 'lucide-react'

const steps = [
  {
    icon: Lightbulb,
    step: '01',
    title: 'Discovery & Assessment',
    description: 'We conduct a thorough analysis of your business, challenges, and goals to understand your unique needs and develop the right strategy.',
    details: ['Business analysis', 'Stakeholder interviews', 'Market assessment', 'Gap analysis']
  },
  {
    icon: Target,
    step: '02',
    title: 'Strategy Development',
    description: 'We create a comprehensive, actionable roadmap aligned with your business objectives and market realities.',
    details: ['Strategic planning', 'Roadmap creation', 'Resource planning', 'Timeline definition']
  },
  {
    icon: Zap,
    step: '03',
    title: 'Implementation',
    description: 'Our expert team executes the plan with precision, maintaining clear communication and exceeding quality standards.',
    details: ['Agile execution', 'Regular updates', 'Quality assurance', 'Risk management']
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Optimization & Support',
    description: 'We measure results, provide ongoing support, and optimize solutions to ensure sustained success and maximum ROI.',
    details: ['Performance tracking', 'Continuous improvement', 'Team enablement', 'Long-term partnership']
  },
]

export function Process() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/2">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Proven Methodology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach that ensures success at every stage of your transformation journey
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="p-6 h-full border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                  {/* Step number */}
                  <div className="text-5xl font-bold text-primary/20 mb-2 group-hover:text-primary/40 transition-colors">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-7 w-6 h-1 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border/50">
          {[
            { label: 'Average Project Duration', value: '3-6 Months' },
            { label: 'Client Satisfaction', value: '95%+' },
            { label: 'Success Rate', value: '100%' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
