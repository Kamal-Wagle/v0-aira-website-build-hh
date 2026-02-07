// In-memory rate limiting store
// In production, this should be replaced with Redis or a database
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

export function getRateLimitKey(ip: string): string {
  return `rate-limit:${ip}`
}

export function checkRateLimit(
  ip: string,
  maxRequests: number = 5,
  windowMs: number = 3600000 // 1 hour in milliseconds
): { allowed: boolean; remaining: number; resetTime: number } {
  const key = getRateLimitKey(ip)
  const now = Date.now()
  let record = rateLimitStore.get(key)

  // Check if record exists and is still valid
  if (!record || now > record.resetTime) {
    record = { count: 0, resetTime: now + windowMs }
    rateLimitStore.set(key, record)
  }

  const allowed = record.count < maxRequests
  record.count++

  return {
    allowed,
    remaining: Math.max(0, maxRequests - record.count),
    resetTime: record.resetTime,
  }
}

export function getClientIp(request: Request): string {
  // Check for various IP headers
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  const realIp = request.headers.get('x-real-ip')
  if (realIp) {
    return realIp
  }

  // Fallback to a generic identifier
  return 'unknown'
}

// Clean up old entries periodically (every 6 hours)
setInterval(() => {
  const now = Date.now()
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key)
    }
  }
}, 6 * 60 * 60 * 1000)
