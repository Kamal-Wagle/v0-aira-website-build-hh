import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .email('Invalid email address')
    .min(5, 'Email is required'),
  phone: z.string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
      'Invalid phone number'
    ),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
  // Honeypot field - should remain empty
  website: z.string().max(0, 'Invalid submission').optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const newsletterSchema = z.object({
  email: z.string()
    .email('Invalid email address')
    .min(5, 'Email is required'),
})

export type NewsletterData = z.infer<typeof newsletterSchema>
