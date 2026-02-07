'use client'

import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const faqs = [
  {
    category: 'Services',
    icon: '🎯',
    question: 'What services does AIRA provide?',
    answer: 'AIRA offers comprehensive business solutions including research & development, innovation training, technology consulting, and WordPress solutions. We work with enterprises to drive digital transformation and unlock competitive advantage.',
  },
  {
    category: 'Timeline',
    icon: '⏱️',
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. Our research programs typically span 4-12 weeks, while training initiatives can be customized from 2 weeks to 6 months. We provide detailed timelines during the initial consultation.',
  },
  {
    category: 'Industries',
    icon: '🏢',
    question: 'What industries do you serve?',
    answer: 'We serve Fortune 500 companies, startups, and institutions across 10+ industries including financial services, technology, healthcare, retail, manufacturing, energy, telecommunications, media, transportation, and real estate.',
  },
  {
    category: 'Results',
    icon: '📊',
    question: 'How do you measure success?',
    answer: 'We establish clear KPIs at project inception including improved efficiency, cost savings, revenue growth, and capability development. Our average client sees 40-60% improvement in target metrics within 6 months.',
  },
  {
    category: 'Support',
    icon: '🤝',
    question: 'Do you offer ongoing support?',
    answer: 'Yes, we provide post-implementation support, continuous improvement consulting, and ongoing training programs. Our clients benefit from quarterly business reviews and strategic planning sessions.',
  },
  {
    category: 'Getting Started',
    icon: '🚀',
    question: 'How can we get started?',
    answer: 'Contact our team to schedule a free 30-minute consultation. We\'ll discuss your challenges, goals, and how AIRA can help. From there, we\'ll develop a customized proposal tailored to your needs.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const categories = ['All', ...new Set(faqs.map(faq => faq.category))]
  const filteredFaqs = selectedCategory && selectedCategory !== 'All' 
    ? faqs.filter(faq => faq.category === selectedCategory)
    : faqs

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/2 to-muted/20">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <HelpCircle size={18} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about AIRA, our services, and how we can help transform your business
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                (selectedCategory === null && category === 'All') || selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted border border-border hover:border-primary/50 text-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-r from-card to-card/50 hover:from-primary/5 hover:to-secondary/5"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-inset"
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="text-2xl">{faq.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-primary/60 uppercase tracking-wider mb-1">
                      {faq.category}
                    </p>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus size={20} className="text-primary animate-in spin-in duration-300" />
                  ) : (
                    <Plus size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
              </button>

              {/* Expandable Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-5 border-t border-border/50 bg-gradient-to-br from-muted/30 to-muted/10 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is here to help. Schedule a free consultation with one of our experts today.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="/contact">Schedule Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
