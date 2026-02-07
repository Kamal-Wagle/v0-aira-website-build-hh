import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations/contact'
import { checkRateLimit, getClientIp } from '@/lib/rate-limiter'

const MAX_REQUESTS = 5
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
          message: 'Too many requests. Please try again later.',
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
    const validatedData = contactFormSchema.parse(body)

    // Additional bot protection: check if honeypot field was filled
    if (validatedData.website && validatedData.website.length > 0) {
      // Honeypot was filled, this is likely a bot
      // Silently fail to avoid revealing the honeypot
      console.warn(`Potential bot submission detected from IP: ${clientIp}`)
      return NextResponse.json(
        { success: true, message: 'Thank you for your message.' },
        { status: 200 }
      )
    }

    // TODO: Integrate email service (Resend, SendGrid, etc.)
    // For now, we'll just log the submission
    console.log('Contact form submission:', {
      ...validatedData,
      submittedAt: new Date().toISOString(),
      clientIp,
    })

    // Send confirmation response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us. We\'ll get back to you soon!',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    // If validation failed
    if (error instanceof Error && error.message.includes('validation')) {
      return NextResponse.json(
        { success: false, message: 'Invalid form data. Please check your inputs.' },
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

// Add CORS headers if needed for development
export const runtime = 'nodejs'
