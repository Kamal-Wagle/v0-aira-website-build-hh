import { NextRequest, NextResponse } from 'next/server'
import { newsletterSchema } from '@/lib/validations/contact'
import { checkRateLimit, getClientIp } from '@/lib/rate-limiter'

const MAX_REQUESTS = 10
const WINDOW_MS = 3600000 // 1 hour

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request)

    // Check rate limit
    const rateLimit = checkRateLimit(clientIp, MAX_REQUESTS, WINDOW_MS)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many subscription attempts. Please try again later.',
          resetTime: new Date(rateLimit.resetTime).toISOString(),
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimit.resetTime - Date.now()) / 1000)),
          },
        }
      )
    }

    // Parse request body
    const body = await request.json()

    // Validate data
    const validatedData = newsletterSchema.parse(body)

    // TODO: Integrate email service
    // Examples:
    // - Resend: https://resend.com
    // - SendGrid: https://sendgrid.com
    // - Mailchimp: https://mailchimp.com
    // - ConvertKit: https://convertkit.com

    // For now, we'll log the subscription
    console.log('Newsletter subscription:', {
      email: validatedData.email,
      subscribedAt: new Date().toISOString(),
      clientIp,
    })

    // In production, you would:
    // 1. Add email to your email service provider
    // 2. Send confirmation email
    // 3. Store subscription in database

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to our newsletter!',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)

    // If validation failed
    if (error instanceof Error && error.message.includes('validation')) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address. Please try again.' },
        { status: 400 }
      )
    }

    // Generic error response
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}

export const runtime = 'nodejs'
