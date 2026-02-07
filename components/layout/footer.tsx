import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react'
import { NewsletterSignup } from '@/components/forms/newsletter-signup'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Cookie Policy', href: '#' },
    ],
    social: [
      { icon: Twitter, href: '#', label: 'Twitter' },
      { icon: Linkedin, href: '#', label: 'LinkedIn' },
      { icon: Facebook, href: '#', label: 'Facebook' },
      { icon: Mail, href: 'mailto:contact@airaworld.com', label: 'Email' },
    ],
  }

  return (
    <footer className="bg-foreground text-background py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter section */}
        <div className="mb-12 pb-12 border-b border-background/20">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold text-background mb-4">
              Stay Informed
            </h3>
            <p className="text-sm text-background/70 mb-6">
              Subscribe to AIRA's newsletter for insights on innovation, research trends, and technology updates.
            </p>
            <NewsletterSignup variant="compact" />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center text-foreground font-bold">
                A
              </div>
              <span className="font-bold text-lg text-background">AIRA</span>
            </Link>
            <p className="text-sm text-background/70">
              Driving innovation through research, education, and cutting-edge technology solutions.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="text-background" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-sm text-background/60 text-center">
            © {currentYear} AIRA (Axon Infotech Research Academy). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
