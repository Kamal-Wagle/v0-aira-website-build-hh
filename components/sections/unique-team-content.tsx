'use client'

import { Card } from '@/components/ui/card'
import { Linkedin, Mail } from 'lucide-react'

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    bio: 'Former VP at McKinsey & Company with 15+ years in digital transformation',
    expertise: ['Strategy', 'Business Transformation', 'Innovation'],
    image: '👩‍💼'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'Tech visionary previously at Google Cloud, expert in modern infrastructure',
    expertise: ['Cloud Architecture', 'AI/ML', 'Digital Infrastructure'],
    image: '👨‍💼'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Research & Development',
    bio: 'PhD in Business Administration, published author with 12 years research experience',
    expertise: ['Market Research', 'Data Analytics', 'Thought Leadership'],
    image: '👩‍🔬'
  },
  {
    name: 'David Park',
    role: 'Head of Consulting Services',
    bio: 'Enterprise transformation expert, led 100+ successful projects globally',
    expertise: ['Enterprise Consulting', 'Change Management', 'Project Leadership'],
    image: '👨‍💼'
  },
]

const departments = [
  { name: 'Consulting', count: '45+', icon: '📊', desc: 'Expert strategists and consultants' },
  { name: 'Engineering', count: '60+', icon: '⚙️', desc: 'World-class technical talent' },
  { name: 'Research', count: '25+', icon: '🔬', desc: 'Experienced researchers' },
  { name: 'Operations', count: '30+', icon: '🎯', desc: 'Dedicated support team' },
]

export function UniqueTeamContent() {
  return (
    <>
      {/* Leadership Team */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">Leadership Team</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Visionary leaders with proven track records in business transformation and innovation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-secondary/5 p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-5xl mb-4 group-hover:scale-110 transition-transform">{member.image}</p>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>

                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.expertise.map((skill, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-3 pt-4 border-t border-border/50">
                  <a href="#" className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                    <Linkedin size={18} className="text-primary" />
                  </a>
                  <a href="#" className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                    <Mail size={18} className="text-primary" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team by Department */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">Our Organization</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="group text-center p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-secondary/5"
              >
                <p className="text-4xl mb-4 group-hover:scale-110 transition-transform">{dept.icon}</p>
                <h3 className="text-xl font-bold text-foreground mb-2">{dept.name}</h3>
                <p className="text-3xl font-bold text-primary mb-2">{dept.count}</p>
                <p className="text-sm text-muted-foreground">{dept.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Our Culture</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                desc: 'We encourage creative thinking and bold ideas that drive breakthrough solutions.',
                icon: '💡'
              },
              {
                title: 'Collaborative',
                desc: 'Teamwork and open communication are at the heart of everything we do.',
                icon: '🤝'
              },
              {
                title: 'Continuous Learning',
                desc: 'We invest in professional development and stay ahead of industry trends.',
                icon: '📚'
              },
            ].map((item, i) => (
              <Card key={i} className="p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-secondary/5 text-center">
                <p className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</p>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
