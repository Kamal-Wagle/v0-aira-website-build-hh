export function ServicesHero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/images/services-hero.jpg" 
          alt="Our Services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/80" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Comprehensive Solutions
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end services designed to address your most complex business challenges and unlock unprecedented growth opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
