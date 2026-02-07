'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/card'
import { Calendar, User, ArrowRight } from 'lucide-react'

const insights = [
  {
    id: 1,
    category: 'Trends',
    title: 'The Future of AI in Enterprise: 2025 Predictions',
    author: 'Dr. Emily Rodriguez',
    date: 'Feb 15, 2025',
    image: '🤖',
    excerpt: 'Discover how AI and machine learning will reshape enterprise operations, drive efficiency, and create new opportunities for innovation.',
    readTime: '8 min read'
  },
  {
    id: 2,
    category: 'Case Study',
    title: 'Digital Transformation Playbook: 5 Critical Success Factors',
    author: 'Michael Chen',
    date: 'Feb 10, 2025',
    image: '📋',
    excerpt: 'Learn the essential components needed for successful digital transformation from our work with 100+ enterprises.',
    readTime: '12 min read'
  },
  {
    id: 3,
    category: 'Research',
    title: 'The Innovation Skills Gap: How to Build Capability',
    author: 'Dr. Sarah Johnson',
    date: 'Feb 5, 2025',
    image: '📊',
    excerpt: 'Our comprehensive research reveals the critical skills gap in innovation leadership and provides actionable recommendations.',
    readTime: '10 min read'
  },
  {
    id: 4,
    category: 'Whitepaper',
    title: 'Cloud Security Strategies for Modern Enterprises',
    author: 'Michael Chen',
    date: 'Jan 30, 2025',
    image: '🔒',
    excerpt: 'A deep dive into modern cloud security architectures, best practices, and emerging threats every CTO should know.',
    readTime: '15 min read'
  },
  {
    id: 5,
    category: 'Trends',
    title: 'Post-Pandemic Workplace: Remote, Hybrid, or Hybrid+',
    author: 'David Park',
    date: 'Jan 25, 2025',
    image: '💼',
    excerpt: 'Analysis of evolving workplace models and how organizations are optimizing team productivity and culture.',
    readTime: '7 min read'
  },
  {
    id: 6,
    category: 'Expert Insight',
    title: 'Building Resilient Organizations in Uncertain Times',
    author: 'Dr. Sarah Johnson',
    date: 'Jan 20, 2025',
    image: '🛡️',
    excerpt: 'Strategic frameworks for building organizational resilience and adapting to rapid market changes.',
    readTime: '9 min read'
  }
]

export function UniqueInsightsContent() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">Latest Insights</h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Expert research, industry trends, and thought leadership to drive your business forward
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((article, index) => (
            <Card
              key={article.id}
              className="group overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-secondary/5 flex flex-col cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary/10 text-primary border-0">{article.category}</Badge>
                  <p className="text-2xl">{article.image}</p>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex-grow">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50 text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span>{article.readTime}</span>
                  </div>
                  <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="px-6 py-4 border-t border-border/50 bg-muted/20">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{article.date}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
