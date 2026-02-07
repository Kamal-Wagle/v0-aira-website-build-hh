# AIRA Website - Quick Customization Guide

This guide provides quick solutions for common customization needs.

## 🎨 Design Changes

### Change Primary Brand Color

Edit `/app/globals.css`:

```css
:root {
  --primary: oklch(50% 0.2 240); /* Current blue */
  /* Change to your color */
}
```

### Change Font

Edit `/app/layout.tsx`:

```tsx
import { YourFont, YourMonoFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
const yourMonoFont = YourMonoFont({ subsets: ['latin'] })
```

Update CSS in `globals.css`:

```css
@theme inline {
  --font-sans: 'Your Font';
  --font-mono: 'Your Mono Font';
}
```

### Change Logo

1. Replace logo image in `/public/images/logo.png`
2. Update navbar component: `/components/layout/navbar.tsx`

```tsx
<Image
  src="/images/your-logo.png"
  alt="AIRA Logo"
  width={40}
  height={40}
/>
```

---

## 📝 Content Changes

### Update Page Title & Description

Example - Update Homepage title:

Edit `/app/page.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your New Title',
  description: 'Your new description',
  keywords: ['keyword1', 'keyword2'],
}
```

### Update Homepage Hero

Edit `/components/sections/hero.tsx`:

```tsx
export function Hero() {
  return (
    <section>
      <h1>Your Hero Title</h1>
      <p>Your hero description</p>
      {/* Update CTA button text and link */}
    </section>
  )
}
```

### Add New Page

1. Create directory: `/app/new-page/`
2. Create file: `/app/new-page/page.tsx`

```tsx
import { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Page Title - AIRA',
  description: 'Page description',
}

export default function NewPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      {/* Your content here */}
      <Footer />
    </main>
  )
}
```

3. Update breadcrumbs in `/components/ui/breadcrumbs.tsx`:

```tsx
const breadcrumbLabels: Record<string, string> = {
  'new-page': 'New Page',
  // ... existing entries
}
```

### Update Team Members

Edit `/components/sections/unique-team-content.tsx`:

```tsx
const team = [
  {
    name: 'New Team Member',
    role: 'Role',
    bio: 'Bio information',
    department: 'Department',
    expertise: ['Expertise 1', 'Expertise 2'],
  },
  // ... more members
]
```

### Update FAQ Questions

Edit `/components/sections/faq.tsx`:

```tsx
const faqs = [
  {
    category: 'Category',
    icon: '🎯',
    question: 'Your question?',
    answer: 'Your answer here.',
  },
  // ... more FAQs
]
```

### Update Case Studies

Edit `/components/sections/unique-case-studies-content.tsx`:

```tsx
const caseStudies = [
  {
    title: 'Case Study Title',
    industry: 'Industry',
    challenge: 'Challenge description',
    solution: 'Solution approach',
    results: {
      metric1: 'Value',
      metric2: 'Value',
    },
  },
  // ... more studies
]
```

---

## 🔧 Technical Changes

### Update Site URL

Edit environment variable:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Or in Vercel dashboard: Settings → Environment Variables

### Update Email Service

1. Choose email provider (Resend, SendGrid, etc.)
2. Update `/lib/email/index.ts`

Example with Resend:

```tsx
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(email: string, subject: string, html: string) {
  return resend.emails.send({
    from: 'contact@airaworld.com',
    to: email,
    subject,
    html,
  })
}
```

### Update Contact Form Recipients

Edit contact form handler in `/app/api/contact/route.ts`:

```tsx
// Change recipient email
const adminEmail = 'newemail@airaworld.com'
```

### Add Form Fields

Example - Add phone number to contact form:

1. Update form schema in `/lib/validations/contact.ts`
2. Add input to form component
3. Update email template
4. Update API handler

---

## 📊 Analytics & SEO

### Update SEO Configuration

Edit `/lib/seo-config.ts`:

```tsx
export const seoConfig = {
  siteUrl: 'https://yourdomain.com',
  siteName: 'Your Site Name',
  pages: {
    home: {
      title: 'New Title',
      description: 'New description',
      keywords: ['keyword1', 'keyword2'],
    },
    // ... other pages
  },
}
```

### Add Analytics Event

Example - Track button click:

```tsx
'use client'

export function MyComponent() {
  const handleClick = () => {
    // Custom event tracking
    console.log('Button clicked - track this event')
    // Add custom tracking code here
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  )
}
```

### Update Sitemap

The sitemap is dynamic and generated from `/app/sitemap.ts`. Update if adding new pages:

```tsx
{
  url: `${baseUrl}/your-new-page`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
}
```

---

## 🔐 Security & Forms

### Add Form Rate Limiting

Already implemented in contact form. To adjust limits:

Edit `/lib/rate-limiter.ts`:

```tsx
const RATE_LIMIT = {
  requests: 3,        // Max requests
  windowMs: 3600000,  // Time window (1 hour)
}
```

### Update Honeypot Fields

Edit contact form to add more validation:

```tsx
// Add hidden field for bot detection
<input
  type="text"
  name="website"
  style={{ display: 'none' }}
/>
```

---

## 🎯 Component Customization

### Customize Hero Section

Edit `/components/sections/hero.tsx`:

```tsx
// Change heading
h1: "Your New Heading"

// Change background color
className="bg-gradient-to-r from-primary to-secondary"

// Change CTA button
href="/your-page"
```

### Customize Navigation Links

Edit `/components/layout/navbar.tsx`:

```tsx
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Your Page', href: '/your-page' },
  // ... more items
]
```

### Customize Footer

Edit `/components/layout/footer.tsx`:

```tsx
// Update company name
// Update links
// Update social media links
// Update copyright year (auto-updated)
```

---

## 📱 Responsive Design

### Update Breakpoints

Built-in Tailwind breakpoints used:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Use in components:

```tsx
<div className="
  text-base           // Mobile
  sm:text-lg         // Small screens
  md:text-xl         // Medium screens
  lg:text-2xl        // Large screens
">
  Responsive text
</div>
```

---

## 🎬 Animation Customization

### Modify Animation Duration

In components, change animation classes:

```tsx
// From
className="animate-in fade-in slide-in-from-top duration-500"

// To
className="animate-in fade-in slide-in-from-top duration-1000"
```

### Disable Animations

To reduce animations globally, edit `/app/globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🚀 Deployment Customization

### Change Deploy Region

In Vercel dashboard:
1. Settings → Functions
2. Change region based on primary audience

### Set up Custom Domain

In Vercel dashboard:
1. Settings → Domains
2. Add your custom domain
3. Follow DNS setup instructions

### Configure Environment Variables

In Vercel dashboard:
1. Settings → Environment Variables
2. Add your variables:
   - `NEXT_PUBLIC_SITE_URL`
   - Any email API keys
   - Analytics tokens

---

## 📚 Quick Reference

### Common File Locations

| Component | Location |
|-----------|----------|
| Homepage | `/app/page.tsx` |
| Navbar | `/components/layout/navbar.tsx` |
| Footer | `/components/layout/footer.tsx` |
| Hero Section | `/components/sections/hero.tsx` |
| FAQ | `/components/sections/faq.tsx` |
| Team | `/components/sections/unique-team-content.tsx` |
| Global Styles | `/app/globals.css` |
| SEO Config | `/lib/seo-config.ts` |
| Contact API | `/app/api/contact/route.ts` |

### Common Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Start production build
npm run start

# Lint code
npm run lint

# Format code
npm run format
```

### Useful Tailwind Classes

- `text-balance` - Better line breaks for titles
- `text-pretty` - Pretty text formatting
- `animate-in` - Entrance animations
- `group-hover:` - Group hover effects
- `sr-only` - Screen reader only text
- `line-clamp-*` - Text truncation

---

## 💡 Tips & Best Practices

1. **Always test changes locally** before deploying
2. **Use consistent spacing** (use Tailwind spacing scale)
3. **Keep colors to 3-5** per section
4. **Test on mobile** after any layout changes
5. **Update metadata** when changing page content
6. **Run build** to catch TypeScript errors early
7. **Use semantic HTML** for accessibility
8. **Compress images** before adding to public folder

---

## 🆘 Troubleshooting

### Page not updating after changes

1. Clear browser cache (Ctrl+Shift+Delete)
2. Restart development server
3. Check for TypeScript errors
4. Verify file was saved

### Build errors

1. Check the error message carefully
2. Verify TypeScript syntax
3. Ensure all imports are correct
4. Check for circular dependencies

### Styling not applying

1. Check class names are correct
2. Verify Tailwind classes exist
3. Check CSS specificity
4. Look for conflicting styles

---

Need more help? Check the main README.md or deployment guides!

---

**Last Updated**: February 2026
**Compatible With**: Next.js 15+, TypeScript 5+, Tailwind CSS 4+
