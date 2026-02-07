import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { getOrganizationSchema } from '@/lib/structured-data'
import { PageLoader } from '@/components/ui/page-loader'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://airaworld.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'AIRA - Axon Infotech Research Academy | Business Innovation & Tech Consulting',
  description: 'Explore the future of business with AIRA. Research, innovation training, technology consulting, and WordPress solutions for forward-thinking businesses.',
  keywords: ['business innovation', 'research academy', 'tech consulting', 'digital transformation', 'training'],
  robots: 'index, follow',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'AIRA',
    title: 'AIRA - Axon Infotech Research Academy',
    description: 'Leading research academy and technology consulting firm',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'AIRA - Axon Infotech Research Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIRA - Business Innovation & Tech Consulting',
    description: 'Research, innovation training, technology consulting, and WordPress solutions',
    creator: '@aira_research',
  },
  generator: 'Next.js',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = getOrganizationSchema()

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <PageLoader />
        <Breadcrumbs />
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
