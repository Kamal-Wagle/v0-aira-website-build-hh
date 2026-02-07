/**
 * Structured Data Generator
 * 
 * Generates JSON-LD structured data for SEO optimization
 * Docs: https://schema.org
 */

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AIRA (Axon Infotech Research Academy)',
    url: 'https://airaworld.com',
    logo: 'https://airaworld.com/logo.png',
    description: 'Leading research academy and technology consulting firm specializing in business innovation',
    foundingDate: '2010',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'San Francisco, CA',
      addressCountry: 'US',
    },
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'contact@airaworld.com',
      telephone: '+1-555-123-4567',
    },
    sameAs: [
      'https://www.linkedin.com/company/aira-research',
      'https://twitter.com/aira_research',
      'https://www.facebook.com/aira-research',
    ],
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AIRA (Axon Infotech Research Academy)',
    image: 'https://airaworld.com/logo.png',
    description: 'Research academy providing business innovation training, consulting, and technology solutions',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'San Francisco, CA',
      addressCountry: 'US',
    },
    telephone: '+1-555-123-4567',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '42',
    },
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getServiceSchema(service: {
  name: string
  description: string
  image?: string
  areaServed?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'AIRA (Axon Infotech Research Academy)',
      url: 'https://airaworld.com',
    },
    ...(service.image && { image: service.image }),
    ...(service.areaServed && { areaServed: service.areaServed }),
  }
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
