import { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - AIRA',
  description: 'AIRA\'s privacy policy explaining how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto pt-12">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <div>
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Introduction
              </h2>
              <p>
                AIRA (Axon Infotech Research Academy) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Information We Collect
              </h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the site includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone number, and message content you voluntarily submit through our contact form.
                </li>
                <li>
                  <strong>Automatic Data:</strong> Browser type, IP address, pages visited, and time spent on the site through analytics tools.
                </li>
                <li>
                  <strong>Cookies:</strong> Information stored on your device to improve user experience and analyze site usage.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Use of Your Information
              </h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process your contact form submissions and respond to your inquiries</li>
                <li>Generate analytics data about site usage and visitor behavior</li>
                <li>Improve our website and services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Disclosure of Your Information
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may disclose your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>By law or to protect our rights and safety</li>
                <li>To trusted service providers who assist us in operating our website</li>
                <li>With your consent for specific purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Security of Your Information
              </h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Your Privacy Rights
              </h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your data</li>
                <li>The right to opt-out of marketing communications</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at privacy@airaworld.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Cookie Policy
              </h2>
              <p>
                We use cookies to improve your experience on our website. Most browsers allow you to refuse cookies or alert you when cookies are being sent. If you disable cookies, some features of our website may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Contact Us
              </h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg mt-4">
                <p className="font-semibold text-foreground">AIRA Privacy Team</p>
                <p>Email: privacy@airaworld.com</p>
                <p>Address: San Francisco, CA, USA</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
