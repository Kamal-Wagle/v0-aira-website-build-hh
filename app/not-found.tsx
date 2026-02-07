import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Visual */}
          <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
              404
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved or deleted. Let's get you back on track.
            </p>
          </div>

          {/* Search Suggestion */}
          <div className="bg-muted/50 border border-border rounded-lg p-6 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <p className="text-sm text-muted-foreground mb-4">
              Here are some helpful links instead:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/" className="block px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-muted transition-all duration-300 group">
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground group-hover:text-primary">
                  <Home size={16} />
                  Home
                </div>
              </Link>
              <Link href="/services" className="block px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-muted transition-all duration-300 group">
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground group-hover:text-primary">
                  Services
                  <ArrowRight size={16} />
                </div>
              </Link>
              <Link href="/about" className="block px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-muted transition-all duration-300 group">
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground group-hover:text-primary">
                  About Us
                  <ArrowRight size={16} />
                </div>
              </Link>
              <Link href="/contact" className="block px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-muted transition-all duration-300 group">
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground group-hover:text-primary">
                  Contact
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/">Go Back Home</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
