'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    {
      label: 'Solutions',
      submenu: [
        { href: '/solutions/business-innovation', label: 'Business Innovation' },
        { href: '/solutions/research-academy', label: 'Research Academy' },
        { href: '/solutions/digital-transformation', label: 'Digital Transformation' },
        { href: '/solutions/wordpress-solutions', label: 'WordPress Solutions' },
      ],
    },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/insights', label: 'Insights' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
            <img 
              src="/images/logo.jpg" 
              alt="AIRA Logo" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="font-bold text-lg text-foreground hidden sm:inline">AIRA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {'submenu' in link ? (
                  <>
                    <button className="px-3 py-2 text-foreground hover:text-primary transition-colors text-sm font-medium flex items-center gap-1">
                      {link.label}
                      <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                    </button>
                    <div className="absolute left-0 top-full pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                      <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-56">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {'submenu' in link ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className="w-full text-left px-3 py-2 text-foreground hover:bg-muted rounded-lg transition-colors flex items-center justify-between"
                      >
                        {link.label}
                        <ChevronDown size={16} className={`transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === link.label && (
                        <div className="pl-4 space-y-1">
                          {link.submenu.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2 border-t border-border flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="sm" className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
