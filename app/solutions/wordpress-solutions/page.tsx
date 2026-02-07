import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Code, Rocket, ShieldCheck, Zap } from 'lucide-react'
import { SolutionHero } from '@/components/sections/solution-hero'

export const metadata = {
  title: 'WordPress Solutions | AIRA | Enterprise Web Development & CMS',
  description: 'Enterprise-grade WordPress development, customization, optimization, and managed services for scalable, secure digital experiences.',
  keywords: ['WordPress', 'web development', 'web design', 'enterprise CMS', 'website solutions', 'WordPress optimization'],
}

export default function WordPressSolutions() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <SolutionHero
        title="WordPress Solutions"
        subtitle="Enterprise-grade WordPress development, customization, and optimization for powerful, secure, and high-performing digital experiences."
        image="/images/wordpress-solutions-hero.jpg"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Enterprise WordPress Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Custom WordPress development, optimization, and managed services designed for enterprise-scale performance, security, and scalability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent" asChild>
                  <Link href="/case-studies">See Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/images/hero-bg.jpg"
                alt="WordPress Solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Code,
                title: 'Custom WordPress Development',
                description: 'Bespoke WordPress solutions tailored to your business requirements, from complex plugin development to custom theme creation.',
              },
              {
                icon: Rocket,
                title: 'Performance Optimization',
                description: 'Maximize speed and efficiency through advanced caching, CDN implementation, database optimization, and code refinement.',
              },
              {
                icon: ShieldCheck,
                title: 'Security & Compliance',
                description: 'Enterprise-grade security implementation, vulnerability assessments, compliance management, and DDoS protection.',
              },
              {
                icon: Zap,
                title: 'Managed WordPress Services',
                description: 'End-to-end management including hosting, monitoring, updates, backups, support, and performance optimization.',
              },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <Card key={idx} className="p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Enterprise Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: 'Performance',
                features: [
                  'Sub-1 second page load times',
                  'Global CDN distribution',
                  'Advanced caching strategies',
                  'Database optimization',
                  'Image optimization & lazy loading',
                  'API performance tuning',
                ],
              },
              {
                category: 'Security',
                features: [
                  'SSL/TLS encryption',
                  'WAF (Web Application Firewall)',
                  'DDoS protection',
                  'Regular security audits',
                  'Vulnerability scanning',
                  'Compliance certifications',
                ],
              },
              {
                category: 'Scalability',
                features: [
                  'Multi-server architecture',
                  'Load balancing',
                  'Auto-scaling infrastructure',
                  'Database replication',
                  'Content distribution',
                  'Traffic spike handling',
                ],
              },
              {
                category: 'Support & Maintenance',
                features: [
                  '24/7 monitoring & alerts',
                  'Proactive maintenance',
                  'Security updates',
                  'Regular backups',
                  'Priority support',
                  'Uptime guarantees',
                ],
              },
            ].map((section, idx) => (
              <Card key={idx} className="p-8 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-6">{section.category}</h3>
                <div className="space-y-3">
                  {section.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                      </span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Modern Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Infrastructure',
                tech: ['AWS/GCP/Azure', 'Kubernetes', 'Docker', 'Terraform', 'GitOps'],
              },
              {
                title: 'Performance',
                tech: ['Cloudflare', 'Redis', 'Elasticsearch', 'Varnish', 'NGINX'],
              },
              {
                title: 'Development',
                tech: ['PHP 8+', 'Composer', 'REST APIs', 'Headless CMS', 'GraphQL'],
              },
            ].map((stack, idx) => (
              <Card key={idx} className="p-6 border border-border text-center">
                <h3 className="text-lg font-semibold text-foreground mb-4">{stack.title}</h3>
                <div className="space-y-2">
                  {stack.tech.map((tech, tidx) => (
                    <div
                      key={tidx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium inline-block m-1"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Ideal Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Enterprise websites & portals',
              'High-traffic e-commerce platforms',
              'Content management systems',
              'SaaS platforms built on WordPress',
              'Multi-site networks',
              'API-driven applications',
              'Real-time collaboration tools',
              'Data-intensive applications',
            ].map((usecase, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">{usecase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Scale Your WordPress Presence</h2>
          <p className="text-lg mb-8 opacity-90">
            Partner with AIRA to build enterprise-grade WordPress solutions that perform at scale.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
