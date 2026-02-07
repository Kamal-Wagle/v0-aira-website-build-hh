'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newsletterSchema, type NewsletterData } from '@/lib/validations/contact'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Loader2, Mail } from 'lucide-react'

interface NewsletterSignupProps {
  variant?: 'compact' | 'expanded'
}

export function NewsletterSignup({ variant = 'compact' }: NewsletterSignupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
  })

  async function onSubmit(data: NewsletterData) {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Successfully subscribed! Check your email for confirmation.')
        reset()
      } else {
        toast.error(result.message || 'Failed to subscribe')
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === 'expanded') {
    return (
      <div className="w-full max-w-md">
        <h3 className="text-lg font-semibold text-foreground mb-3">
          Stay Updated
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Subscribe to our newsletter for the latest insights on business innovation and technology trends.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </form>
      </div>
    )
  }

  // Compact variant
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 w-full">
      <div className="flex-1">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          {...register('email')}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        size="sm"
      >
        {isSubmitting ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
  )
}
