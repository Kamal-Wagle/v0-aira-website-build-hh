import { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { TeamHero } from '@/components/sections/team-hero'
import { UniqueTeamContent } from '@/components/sections/unique-team-content'

export const metadata: Metadata = {
  title: 'Our Team | AIRA | Expert Innovation Leaders & Strategists',
  description: 'Meet AIRA\'s experienced team of innovation leaders, strategists, and technology experts driving business transformation.',
  keywords: ['team', 'leadership', 'experts', 'innovation leaders', 'consultants'],
  openGraph: {
    title: 'Meet AIRA\'s Leadership Team',
    description: 'Expert innovation leaders and strategists',
    type: 'website',
  },
}

export default function Team() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <TeamHero />
      <UniqueTeamContent />
      <Footer />
    </main>
  )
}
