'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

const breadcrumbLabels: Record<string, string> = {
  about: 'About',
  services: 'Services',
  'case-studies': 'Case Studies',
  insights: 'Insights',
  team: 'Team',
  contact: 'Contact',
  'privacy-policy': 'Privacy Policy',
  'terms-of-service': 'Terms of Service',
  solutions: 'Solutions',
  'business-innovation': 'Business Innovation',
  'research-academy': 'Research Academy',
  'digital-transformation': 'Digital Transformation',
  'wordpress-solutions': 'WordPress Solutions',
}

export function Breadcrumbs() {
  const pathname = usePathname()

  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
  ]

  let currentPath = ''
  segments.forEach((segment) => {
    currentPath += `/${segment}`
    const label = breadcrumbLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ')
    breadcrumbs.push({ label, href: currentPath })
  })

  return (
    <nav
      className="px-4 sm:px-6 lg:px-8 py-4 bg-muted/30 border-b border-border"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1

            return (
              <li key={crumb.href} className="flex items-center gap-2">
                {index === 0 ? (
                  <Link
                    href={crumb.href}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <Home size={16} />
                    <span className="sr-only">{crumb.label}</span>
                  </Link>
                ) : (
                  <>
                    <ChevronRight size={16} className="text-muted-foreground" />
                    {isLast ? (
                      <span className="text-foreground font-medium">{crumb.label}</span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
