# AIRA Website - Deployment Guide

This guide walks you through deploying the AIRA website to production.

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- GitHub account (for Vercel deployment)
- Vercel account (recommended for Next.js deployment)

## Local Development

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Update .env.local with your configuration
# - Set NEXT_PUBLIC_SITE_URL to your domain
# - Configure email service (Resend, SendGrid, or SMTP)

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Email Service Configuration

### Option 1: Resend (Recommended)

1. Sign up at [https://resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Set environment variables:
   ```
   RESEND_API_KEY=your_api_key
   EMAIL_FROM=noreply@airaworld.com
   ```

### Option 2: SendGrid

1. Sign up at [https://sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Set environment variables:
   ```
   SENDGRID_API_KEY=your_api_key
   EMAIL_FROM=noreply@airaworld.com
   ```

### Option 3: SMTP (Nodemailer)

1. Get SMTP credentials from your email provider
2. Set environment variables:
   ```
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your_email@example.com
   SMTP_PASSWORD=your_password
   EMAIL_FROM=noreply@airaworld.com
   ```

## Deploying to Vercel (Recommended)

### Option A: Using Vercel Dashboard

1. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Select your repository
4. Configure settings:
   - Framework: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
5. Add environment variables:
   - Go to Project Settings → Environment Variables
   - Add all variables from .env.example
6. Click "Deploy"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Environment Variables Setup

After deployment, configure these in your hosting provider:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
RESEND_API_KEY=your_api_key
EMAIL_FROM=noreply@your-domain.com
RATE_LIMIT_MAX_REQUESTS=5
RATE_LIMIT_WINDOW_MS=3600000
```

## Performance Optimization

### Image Optimization
- All images are optimized with Next.js Image component
- Serve responsive images automatically

### Font Optimization
- Using next/font with Geist font family
- Fonts are self-hosted for better performance

### Code Splitting
- Dynamic imports for large components
- Route-based code splitting

### Caching
- Static pages are cached at edge
- Dynamic content uses appropriate cache headers

## SEO Configuration

### Sitemap
- Auto-generated at `/sitemap.xml`
- Includes all main pages

### Robots.txt
- Located at `/public/robots.txt`
- Allows all user agents, blocks /api/ and /admin/

### Structured Data
- JSON-LD schema included in all pages
- Organization schema on homepage
- Service schema on services page

### Meta Tags
- Customized per page with proper Open Graph tags
- Twitter Card integration
- Canonical URLs

## Security Headers

The application includes security headers configured in `next.config.mjs`:

- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: geolocation=(), microphone=(), camera=()

## Monitoring & Analytics

### Vercel Analytics
- Built-in with @vercel/analytics package
- View real-time metrics in Vercel dashboard

### Google Analytics (Optional)
1. Create property in Google Analytics 4
2. Get your Measurement ID
3. Add to environment:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

## SSL/TLS Certificate

Vercel automatically provides free SSL certificates for all deployments.

## Custom Domain Setup

1. Go to Vercel Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update email service SPF/DKIM records:
   ```
   SPF: v=spf1 include:sendgrid.net ~all
   DKIM: Check your email provider's instructions
   ```

## Troubleshooting

### Build Failures
- Check Next.js version compatibility
- Review build logs in Vercel dashboard
- Ensure all environment variables are set

### Email Not Sending
- Verify API keys are correct
- Check rate limiting settings
- Review email service logs
- Test with contact form

### Performance Issues
- Use Vercel Analytics to identify bottlenecks
- Check Lighthouse scores
- Optimize images further if needed

## Backup & Disaster Recovery

1. **Code Backup**
   - Push all changes to GitHub regularly
   - Use git tags for releases

2. **Database Backup**
   - If using database, configure automated backups
   - Test restore procedures

3. **Content Backup**
   - Export important content regularly
   - Keep copies of static assets

## Maintenance

### Regular Tasks
- Monitor analytics weekly
- Review error logs
- Update dependencies monthly
- Test forms and functionality

### Security Updates
- Keep Next.js updated
- Update npm packages regularly
- Monitor security advisories
- Review access logs

## Support

For issues or questions:
1. Check Vercel documentation: https://vercel.com/docs
2. Review Next.js guides: https://nextjs.org/docs
3. Contact Vercel support: https://vercel.com/support
4. Check AIRA support: contact@airaworld.com
