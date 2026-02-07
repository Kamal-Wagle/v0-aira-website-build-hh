/**
 * Email Service Configuration
 * 
 * This module provides a unified interface for email services.
 * Currently supports: Resend, SendGrid, and Nodemailer
 * 
 * To integrate an email service:
 * 1. Install the appropriate package
 * 2. Add API keys to environment variables
 * 3. Implement the service-specific client
 * 4. Update the getEmailClient() function
 */

export interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
  from?: string
}

export interface EmailResponse {
  success: boolean
  messageId?: string
  error?: string
}

// Default from email
const DEFAULT_FROM = process.env.EMAIL_FROM || 'noreply@airaworld.com'

/**
 * Send email using configured service
 */
export async function sendEmail(options: EmailOptions): Promise<EmailResponse> {
  const from = options.from || DEFAULT_FROM
  
  try {
    // Determine which email service to use based on environment variables
    if (process.env.RESEND_API_KEY) {
      return await sendViaResend(options, from)
    } else if (process.env.SENDGRID_API_KEY) {
      return await sendViaSendGrid(options, from)
    } else if (process.env.SMTP_HOST) {
      return await sendViaNodemailer(options, from)
    } else {
      // Fallback: log to console (development only)
      console.log('[EMAIL] No email service configured. Message:', {
        from,
        ...options,
      })
      return {
        success: true,
        messageId: `dev-${Date.now()}`,
      }
    }
  } catch (error) {
    console.error('Email send error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Send email via Resend
 * Install: npm install resend
 * Docs: https://resend.com/docs
 */
async function sendViaResend(
  options: EmailOptions,
  from: string
): Promise<EmailResponse> {
  try {
    // Placeholder - uncomment when Resend is installed
    // const { Resend } = await import('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // const result = await resend.emails.send({
    //   from,
    //   to: options.to,
    //   subject: options.subject,
    //   html: options.html,
    // })
    // return {
    //   success: !result.error,
    //   messageId: result.data?.id,
    //   error: result.error?.message,
    // }
    throw new Error('Resend client not implemented')
  } catch (error) {
    throw error
  }
}

/**
 * Send email via SendGrid
 * Install: npm install @sendgrid/mail
 * Docs: https://github.com/sendgrid/sendgrid-nodejs
 */
async function sendViaSendGrid(
  options: EmailOptions,
  from: string
): Promise<EmailResponse> {
  try {
    // Placeholder - uncomment when SendGrid is installed
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // const result = await sgMail.send({
    //   to: options.to,
    //   from,
    //   subject: options.subject,
    //   html: options.html,
    //   text: options.text,
    // })
    // return {
    //   success: true,
    //   messageId: result[0].headers['x-message-id'],
    // }
    throw new Error('SendGrid client not implemented')
  } catch (error) {
    throw error
  }
}

/**
 * Send email via Nodemailer
 * Install: npm install nodemailer
 * Docs: https://nodemailer.com/
 */
async function sendViaNodemailer(
  options: EmailOptions,
  from: string
): Promise<EmailResponse> {
  try {
    // Placeholder - uncomment when Nodemailer is installed
    // const nodemailer = require('nodemailer')
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: parseInt(process.env.SMTP_PORT || '587'),
    //   secure: process.env.SMTP_SECURE === 'true',
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASSWORD,
    //   },
    // })
    // const result = await transporter.sendMail({
    //   from,
    //   to: options.to,
    //   subject: options.subject,
    //   html: options.html,
    //   text: options.text,
    // })
    // return {
    //   success: true,
    //   messageId: result.messageId,
    // }
    throw new Error('Nodemailer client not implemented')
  } catch (error) {
    throw error
  }
}

/**
 * Email templates
 */

export function contactConfirmationEmail(
  name: string,
  message: string
): { html: string; text: string } {
  return {
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
          <h2>Thank You for Contacting AIRA</h2>
          <p>Hi ${name},</p>
          <p>We have received your message and appreciate you reaching out to us.</p>
          <h3>Your Message:</h3>
          <blockquote style="background-color: #f5f5f5; padding: 10px; border-left: 4px solid #0066FF;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <p>Our team will review your message and get back to you within 24 business hours.</p>
          <p>Best regards,<br>The AIRA Team</p>
        </body>
      </html>
    `,
    text: `
Thank You for Contacting AIRA

Hi ${name},

We have received your message and appreciate you reaching out to us.

Your Message:
${message}

Our team will review your message and get back to you within 24 business hours.

Best regards,
The AIRA Team
    `,
  }
}

export function newsletterWelcomeEmail(): { html: string; text: string } {
  return {
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
          <h2>Welcome to AIRA Newsletter</h2>
          <p>Thank you for subscribing to the AIRA newsletter!</p>
          <p>You'll now receive updates on:</p>
          <ul>
            <li>Latest research insights on business innovation</li>
            <li>Technology trends and emerging solutions</li>
            <li>Educational content and training announcements</li>
            <li>Exclusive offers and special events</li>
          </ul>
          <p>You can unsubscribe anytime by clicking the link at the bottom of future emails.</p>
          <p>Best regards,<br>The AIRA Team</p>
        </body>
      </html>
    `,
    text: `
Welcome to AIRA Newsletter

Thank you for subscribing to the AIRA newsletter!

You'll now receive updates on:
- Latest research insights on business innovation
- Technology trends and emerging solutions
- Educational content and training announcements
- Exclusive offers and special events

You can unsubscribe anytime by clicking the link at the bottom of future emails.

Best regards,
The AIRA Team
    `,
  }
}
