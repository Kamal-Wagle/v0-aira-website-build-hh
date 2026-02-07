import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BookOpen, Users, Zap, Target } from 'lucide-react'
import { SolutionHero } from '@/components/sections/solution-hero'

export const metadata = {
  title: 'Research Academy | AIRA | Executive Training & Development Programs',
  description: 'Build deep research and analytical capabilities with AIRA\'s structured, hands-on training programs for executive development.',
  keywords: ['research academy', 'training program', 'executive education', 'skill development', 'corporate training'],
}

export default function ResearchAcademy() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <SolutionHero
        title="Research Academy"
        subtitle="Build deep research and analytical capabilities within your organization through structured, hands-on training programs."
        image="/images/research-academy-hero.jpg"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Research Academy
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Build internal research and innovation capabilities with our comprehensive training programs, mentorship, and resources designed for enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Enroll Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent" asChild>
                  <Link href="/case-studies">Success Stories</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/images/research-lab.jpg"
                alt="Research Academy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Training Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Foundations of Research & Development',
                duration: '6-week program',
                modules: ['Research methodologies', 'Data analysis', 'Trend forecasting', 'Report writing'],
              },
              {
                icon: Users,
                title: 'Innovation Leadership Program',
                duration: '3-month cohort',
                modules: ['Strategic thinking', 'Team dynamics', 'Change management', 'Innovation metrics'],
              },
              {
                icon: Zap,
                title: 'Advanced Technology Research',
                duration: '8-week program',
                modules: ['Emerging technologies', 'AI & ML basics', 'Tech stack evaluation', 'Implementation strategies'],
              },
              {
                icon: Target,
                title: 'Market Research & Insights',
                duration: '4-week program',
                modules: ['Market analysis', 'Competitive intelligence', 'Consumer insights', 'Reporting & visualization'],
              },
            ].map((program, idx) => {
              const Icon = program.icon
              return (
                <Card key={idx} className="p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded">
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{program.title}</h3>
                  <div className="space-y-2">
                    {program.modules.map((module, midx) => (
                      <div key={midx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {module}
                      </div>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: 'Core Research Skills',
                items: [
                  'Qualitative and quantitative research methods',
                  'Data collection and analysis techniques',
                  'Research ethics and best practices',
                  'Technical tools and software',
                ],
              },
              {
                category: 'Strategic Innovation',
                items: [
                  'Innovation strategy development',
                  'Ideation and concept generation',
                  'Business model innovation',
                  'Go-to-market strategies',
                ],
              },
              {
                category: 'Technical Competencies',
                items: [
                  'Emerging technology landscape',
                  'Data analytics and visualization',
                  'Business intelligence tools',
                  'Digital transformation trends',
                ],
              },
              {
                category: 'Leadership & Execution',
                items: [
                  'Innovation program management',
                  'Cross-functional collaboration',
                  'Stakeholder engagement',
                  'Change management',
                ],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-foreground mb-4">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Format */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Flexible Learning Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'In-Person Workshops',
                description: 'Interactive, hands-on sessions conducted at your location or our facilities with expert facilitators.',
              },
              {
                title: 'Virtual Learning',
                description: 'Live online classes with recorded sessions available for participants who need flexibility.',
              },
              {
                title: 'Blended Approach',
                description: 'Combination of in-person intensive sessions and online learning modules for maximum effectiveness.',
              },
            ].map((format, idx) => (
              <Card key={idx} className="p-6 border border-border text-center">
                <h3 className="text-lg font-semibold text-foreground mb-3">{format.title}</h3>
                <p className="text-muted-foreground">{format.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Build Your Innovation Capacity</h2>
          <p className="text-lg mb-8 opacity-90">
            Transform your team with our comprehensive research and development training programs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Start Training Program</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
