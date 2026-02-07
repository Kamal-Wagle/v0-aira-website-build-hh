import { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Card } from '@/components/ui/card'
import { Users } from 'lucide-react'
import { AboutHero } from '@/components/sections/about-hero'
import { UniqueAboutContent } from '@/components/sections/unique-about-content'
import { Lightbulb, Target, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About AIRA | Business Innovation & Technology Leadership | Axon Infotech',
  description: 'Discover AIRA\'s mission, vision, and leadership team. Learn how we transform businesses through strategic innovation, research, and technology consulting since 2012.',
  keywords: ['about AIRA', 'leadership team', 'innovation company', 'technology consulting firm', 'business transformation'],
  openGraph: {
    title: 'About AIRA - Business Innovation Leaders',
    description: 'Meet the team driving digital transformation and business innovation',
    type: 'website',
  },
}

const team = [
  { 
    name: 'Sarah Johnson', 
    role: 'Chief Executive Officer', 
    bio: 'Former VP at tech consulting firm, 15+ years in business strategy',
    image: '👩‍💼' 
  },
  { 
    name: 'Michael Chen', 
    role: 'Chief Technology Officer', 
    bio: 'Tech visionary with expertise in cloud, AI, and digital infrastructure',
    image: '👨‍💼' 
  },
  { 
    name: 'Emily Rodriguez', 
    role: 'Head of Research & Development', 
    bio: 'PhD in Business Administration, published author and thought leader',
    image: '👩‍🔬' 
  },
  { 
    name: 'David Park', 
    role: 'Head of Consulting Services', 
    bio: 'Enterprise transformation expert, led 100+ successful projects',
    image: '👨‍💼' 
  },
]

const milestones = [
  { year: '2010', event: 'AIRA founded with focus on research' },
  { year: '2013', event: 'Launched first innovation training program' },
  { year: '2016', event: 'Expanded to technology consulting services' },
  { year: '2019', event: 'Added WordPress solutions division' },
  { year: '2022', event: 'Opened second office in Asia-Pacific' },
  { year: '2024', event: 'Reached 200+ successful client transformations' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <UniqueAboutContent />

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="p-8 border border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5">
              <Lightbulb className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations with cutting-edge research insights, innovative training programs, and transformative technology solutions that drive sustainable growth and competitive advantage in an increasingly digital world.
              </p>
            </Card>

            {/* Vision */}
            <Card className="p-8 border border-border/50 bg-gradient-to-br from-secondary/5 to-primary/5">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the world's most trusted partner for business innovation and digital transformation, recognized for delivering exceptional value and fostering lasting client success across all industries and geographies.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'We embrace cutting-edge technologies and methodologies to solve complex business challenges.',
              },
              {
                title: 'Client Success',
                description: 'Your success is our success. We measure our value by the tangible results we deliver.',
              },
              {
                title: 'Integrity & Transparency',
                description: 'We operate with complete honesty and openness in all our client relationships and partnerships.',
              },
              {
                title: 'Continuous Learning',
                description: 'We invest in our team\'s development and stay ahead of industry trends and best practices.',
              },
              {
                title: 'Collaborative Approach',
                description: 'We work as extensions of our clients\' teams, fostering deep partnerships and shared goals.',
              },
              {
                title: 'Excellence in Execution',
                description: 'We deliver high-quality solutions with meticulous attention to detail and timely delivery.',
              },
            ].map((value, index) => (
              <div key={index} className="flex gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Leadership Team
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Our Journey
          </h2>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 pb-6 border-b border-border/50 last:border-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-1 h-12 bg-primary/30 mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <p className="font-semibold text-foreground text-lg">
                    {milestone.year}
                  </p>
                  <p className="text-muted-foreground">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
