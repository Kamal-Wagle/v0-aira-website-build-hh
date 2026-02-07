import { ContactForm } from '@/components/forms/contact-form'
import { Mail, Phone, MapPin } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@airaworld.com',
    link: 'mailto:contact@airaworld.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Address',
    content: 'San Francisco, CA, USA',
    link: '#',
  },
]

export function ContactSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or ready to start your innovation journey? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact information */}
          <div className="space-y-8">
            {/* Direct contact options */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {info.content}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Business hours */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50">
              <h3 className="font-semibold text-foreground mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM PST</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>

            {/* Response time */}
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Average response time:</span> We typically respond to all inquiries within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
