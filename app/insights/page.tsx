import Link from "next/link"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { InsightsHero } from '@/components/sections/insights-hero'
import { UniqueInsightsContent } from '@/components/sections/unique-insights-content'
import { User } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Insights & Resources | AIRA | Research, Trends & Thought Leadership',
  description: 'Expert research, whitepapers, and thought leadership on business innovation, digital transformation, and emerging technology trends.',
  keywords: ['insights', 'research', 'whitepapers', 'industry trends', 'thought leadership', 'business articles'],
  openGraph: {
    title: 'AIRA Insights - Expert Research & Thought Leadership',
    description: 'Stay informed with expert insights on innovation and transformation',
    type: 'website',
  },
}

const insights = [
  {
    id: 1,
    title: 'The Future of Workplace Innovation: Trends to Watch in 2025',
    category: 'Research',
    author: 'Sarah Chen',
    date: 'January 15, 2025',
    excerpt: 'Discover the key workplace innovation trends that will define organizational success in the coming year, from AI integration to hybrid work optimization.',
    tags: ['Innovation', 'Workplace', 'Trends'],
  },
  {
    id: 2,
    title: 'Digital Transformation ROI: Measuring What Matters',
    category: 'Whitepaper',
    author: 'Michael Rodriguez',
    date: 'January 10, 2025',
    excerpt: 'A comprehensive guide to understanding and measuring the real business impact of your digital transformation initiatives with data-driven metrics.',
    tags: ['Digital Transformation', 'ROI', 'Analytics'],
  },
  {
    id: 3,
    title: 'Enterprise WordPress: Scaling Beyond Traditional Limits',
    category: 'Case Study',
    author: 'Emily Watson',
    date: 'January 5, 2025',
    excerpt: 'How enterprise organizations are leveraging WordPress as a scalable, secure platform for complex digital experiences and business operations.',
    tags: ['WordPress', 'Enterprise', 'Technology'],
  },
  {
    id: 4,
    title: 'Building a Culture of Continuous Innovation',
    category: 'Research',
    author: 'David Park',
    date: 'December 28, 2024',
    excerpt: 'Explore proven frameworks and methodologies for fostering innovation across your organization, from ideation through implementation.',
    tags: ['Innovation', 'Culture', 'Organization'],
  },
  {
    id: 5,
    title: 'AI-Driven Business Intelligence: The Next Frontier',
    category: 'Whitepaper',
    author: 'Lisa Zhang',
    date: 'December 20, 2024',
    excerpt: 'Understanding how artificial intelligence is revolutionizing business intelligence and what enterprises need to know to stay competitive.',
    tags: ['AI', 'Business Intelligence', 'Technology'],
  },
  {
    id: 6,
    title: 'The Research Academy Approach: Building Internal Innovation Capacity',
    category: 'Research',
    author: 'James Mitchell',
    date: 'December 15, 2024',
    excerpt: 'Learn how to establish internal research and development capabilities to accelerate innovation and reduce dependency on external consultants.',
    tags: ['Research', 'Academy', 'Capability Building'],
  },
]

export default function Insights() {
  return (
  <main className="min-h-screen bg-background">
  <Navbar />
  <InsightsHero />
  <UniqueInsightsContent />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Research & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of industry trends with our latest research, whitepapers, and thought leadership on innovation and digital transformation.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Card className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-auto overflow-hidden bg-muted">
                <img
                  src="/images/research-lab.jpg"
                  alt="Featured article"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium border border-primary/30 w-fit mb-4">
                  Featured Research
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {insights[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {insights[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {insights[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {insights[0].author}
                  </div>
                </div>
                <Link
                  href={`/insights/${insights[0].id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {insights.slice(1).map((article) => (
              <Card
                key={article.id}
                className="group p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {article.date}
                    </span>
                  </div>
                  <Link
                    href={`/insights/${article.id}`}
                    className="text-primary font-medium hover:translate-x-1 transition-transform"
                  >
                    →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
